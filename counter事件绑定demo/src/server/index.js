import React from "react";
import Home from "../containers/Home";
import Counter from "../containers/Counter"
import { renderToString } from "react-dom/server"; //将在服务端将组建转换为字符串
let express = require('express')
let app = express()
app.use(express.static("public")) //将public当作静态文件中间件的目录
app.get("/", (req, res) => {
    let HomeComp = renderToString(<Home />)
    let CounterComp=renderToString(<Counter/>)
    res.send(`
    <html>
       <head>
         <title>ssr测试</title>
       </head>
       <body>
         <div id="root">${HomeComp}
           ${CounterComp}
         </div>
       </body>
       <script src="/client.js"></script>
    </html>
    `)
})
app.listen(3000)