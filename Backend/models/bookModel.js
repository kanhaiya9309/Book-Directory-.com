import mongoose from "mongoose";


const bookSchema = mongoose.Schema({
    title :{
         type : "String",
         required:"true"
    },
    author :{
        type : "String",
         required:"true"
    },
    publishYear :{
        type : "Number",
        required:"true"
    },
}  ,
{
    timestamps: true 
}
  )

 export const Book_Directory = mongoose.model('Book_Directory', bookSchema);


