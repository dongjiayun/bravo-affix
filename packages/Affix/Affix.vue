<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'BravoAffix',
        props:{
            target:{
                default:()=>document.body,
                type:Function
            },
            top:{type:Number,default:0},
            bottom:{type:Number,default:0},
            left:{type:Number,default:0},
            right:{type:Number,default:0},
        },
        data(){
            return{
                parent:{},
                listener:'',
                self:{},
                verticalStyleCache:{},
                horizonStyleCache:{},
                positionCache:{},
                verticalStyle:{},
                horizonStyle:{},
                positionStyle:{},
                offsetTop:'',
                offsetLeft:','
            }
        },
        mounted() {
            this.init()
            this.parent.addEventListener('scroll',this.listenerController)
        },
        methods:{
            init(){
                this.parent = this.target().$el||this.target()
                this.self = this.$el
                if(!this.parent.style.position){
                    this.parent.style.position = 'relative'
                }
                this.verticalStyleCache = {
                    top:this.self.style.top
                }
                this.horizonStyleCache = {
                    left:this.self.style.left
                }
                this.positionCache = {
                    position:this.self.style.position
                }
                this.offsetTop = this.self.offsetTop
                this.offsetLeft = this.self.offsetLeft
                this.listenerController()
            },
            listenerController(){
                let parentHeight = this.parent.offsetHeight
                let parentWidth = this.parent.offsetWidth
                let scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop||this.parent.scrollTop;
                let scrollHorizon = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||this.parent.scrollLeft;
                let isFixVertical = false
                let isFixHorizion = false
                if(this.top){
                    if((scrollDistance-this.offsetTop-this.top)>0){
                        this.verticalStyle = {
                            top:(scrollDistance+this.top)+'px'
                        }
                        isFixVertical = true
                    }else{
                        this.verticalStyle = this.verticalStyleCache
                    }
                }else if(this.bottom){
                    this.verticalStyle = {
                        top:(parentHeight - this.bottom + scrollDistance)+'px'
                    }
                    isFixVertical = true
                }
                if(this.left){
                    if((scrollHorizon-this.offsetLeft-this.left)>0){
                        this.horizonStyle = {
                            left:(scrollHorizon+this.left)+'px'
                        }
                        isFixHorizion = true
                    }else{
                        this.horizonStyle = this.horizonStyleCache
                    }
                }else if(this.right){
                    this.horizonStyle = {
                        left:(parentWidth - this.right + scrollHorizon)+'px'
                    }
                    isFixHorizion = true
                }
                if(isFixHorizion||isFixVertical){
                    this.positionStyle = {position:'absolute'}
                }else{
                    this.positionStyle = this.positionCache
                }
                let style = {...this.verticalStyle,...this.horizonStyle,...this.positionStyle}
                Object.keys(style).forEach(key=>{
                    this.self.style[key] = style[key]
                })
            }
        },
        beforeDestroy() {
            this.parent.removeEventListener('scroll')
        }
    };
</script>
