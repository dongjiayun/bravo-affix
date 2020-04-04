// vue.config.js
const path = require('path')
const NODE_ENV = process.env.NODE_ENV;

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: './',
    outputDir: "dist",
    productionSourceMap: false,
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    configureWebpack:{
        resolve: {
            alias:{
                'examples':resolve('examples'),
                'packages':resolve('packages'),
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule("js")
            .include.add("/packages")
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap(options => {
                // 修改它的选项...
                return options;
            });
    }
}
