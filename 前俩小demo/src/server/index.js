import React from "react";
import Home from "../containers/Home";
import { renderToString } from "react-dom/server"; //将在服务端将组建转换为字符串
let express = require('express')
let app = express()
app.get("/", (req, res) => {
    let obj = renderToString(<Home />)
    res.send(`
    <html>
       <head>
         <title>ssr测试</title>
       </head>
       <body>
         <div id="root">${obj}</div>
       </body>
       <script>
       </script>
    </html>
    `)
})
app.listen(3000)