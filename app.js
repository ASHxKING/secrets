import express from "express"
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import customAuth from "./middlewares/auth.js";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname +`/public/index.html`)
})

app.use(customAuth)

app.post("/check",(req,res)=>{
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })