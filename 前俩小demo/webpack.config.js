const path = require("path")
const nodeExternal = require("webpack-node-externals")
module.exports = {
    target:"node", // 告诉webpack打包的是node环境的文件
    mode: "development",
    entry: './src/server/index.js',
    output: {
        path: path.resolve("build"),
        filename: "server.js"
    },
    //检查所有的引入的核心模块，让webpack不要把核心模块打包到目标文件中去
    externals: [nodeExternal()],
    module:{
        rules:[
            {
                test:/\.js/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ]
                }   
            }
        ]
    }
}