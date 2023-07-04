const  express =require("express");
const app =express();
const product_route=require("./routes/product")
const connectdb=require("./db/connect")
require('dotenv').config();

const port = 5000;

app.get("/", (req,res)=>{
    res.send("Hi I am live");
})
//midleware or set the route
app.use("/api/products",product_route);
const start=async()=>{
    try{
       await connectdb(process.env.MONGODB_URL);
        app.listen(port,()=>{
        console.log(`${port} i am connected`)
        });
    }catch(error){
        console.log(error)
    }
}

start()

