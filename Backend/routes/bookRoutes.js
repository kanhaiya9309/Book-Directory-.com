import express from "express"
import { Book_Directory } from "../models/bookModel.js";
const router = express.Router();


 // Route for all books showing 
 router.get("/",async(req,res)=>{
    try{
       const allBooks = await Book_Directory.find();
       return res.status(201).json({
        count : allBooks.length ,
        data : allBooks
       });

    }catch(error){
      console.log(error.message)
      return res.status(404).send({message:error.message})
    }
})

 // Route for one book show by id
 router.get("/:id",async(req,res)=>{
    try{
       const {id} = req.params
       const book = await Book_Directory.findById(id);
       return res.status(201).json(book);

    }catch(error){
      console.log(error.message)
      return res.status(404).send({message:error.message})
    }
})

router.put("/:id",async(req,res)=>{
    try{
       if(!req.body.title ||
        !req.body.author ||
        !req.body.publishYear
       )

        {
        return res.status(404).send({ message :'Send all type of data like title,author and year'})
        }
     const {id} = req.params ;
     const result = await Book_Directory.findByIdAndUpdate(id, req.body);

     if(!result){
     return res.status(201).json({message:'Book is not found'});
     }
        return res.status(201).send({message:'Your book is updated'})

    }catch(error){
      console.log(error.message)
      return res.status(404).send({message:error.message})
    }
})

// Route for deleting book from database
router.delete("/:id",async(req,res)=>{
    try{

     const {id} = req.params ;
     const result = await Book_Directory.findByIdAndDelete(id);

     if(!result){
     return res.status(201).json({message:'Book is not found'});
     }
    return res.status(201).send({message:'Your book is deleted Succesfully'})

    }catch(error){
      console.log(error.message)
      return res.status(404).send({message:error.message})
    }
})



// Create route for making new book 

router.post("/",async(req,res)=>{
    try{

     if(
     !req.body.title ||
     !req.body.author ||
     !req.body.publishYear
     )
     {
     return res.status(404).send({ message :'Send all type of data like title ,author and year'})
     }

     const book = {
        title : req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
     }
     const  newbook =  await Book_Directory.create(book)
     return res.status(201).send(newbook)

    }catch(error){
      console.log(error.message)
      res.status(404).send({ message : error.message})
    }
})

export default router