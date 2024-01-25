import express from "express"
import cors from "cors"
import {port,mongooseUrl} from "./config.js"
// import { Book_Directory } from "./models/bookModel.js";
import mongoose from "mongoose";
import router from "./routes/bookRoutes.js";
// import cros from "cros"


const app =express();


app.use(cors({
  origin:'http://localhost:5173',
  methods:['GET','POST','PUT','DELETE'],
  allowedHeaders:['Content-Type'],
})
);

app.use(express.json());

app.use('/books',router)

app.get('/',(req,res)=>{
  res.send(`<h1>Hello Welcome  to  my Project</h1> `)
})

//MiddleWare handling the cross 
// option 1 is : Allow all origin with Default of cors(*)


//Option 2 : Allow only Custom Origin 


// app.use(cors({
//   origin: "http://localhost:5173",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));

//  app.use(cors());

// Mongoose database connect for curd opration 

mongoose.connect(mongooseUrl)
 .then(()=>{
   console.log("Database is connected")
   app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
  })
 })
 .catch((error)=>{
   console.log(error)
 })





