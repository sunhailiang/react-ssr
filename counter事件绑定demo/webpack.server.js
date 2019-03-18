const path = require("path")
const nodeExternal = require("webpack-node-externals")
const merge=require("webpack-merge")
const base=require("./webpack.base")

module.exports=merge(base,{
    target:"node", // 告诉webpack打包的是node环境的文件
    entry: './src/server/index.js',
    output: {
        path: path.resolve("build"),
        filename: "server.js"
    },
      //检查所有的引入的核心模块，让webpack不要把核心模块打包到目标文件中去
      externals: [nodeExternal()],
})