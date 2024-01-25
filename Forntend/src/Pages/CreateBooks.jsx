import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';



const CreateBooks  =  () =>{
   let [title,setTitle] = useState("");
   let [author,setAuthor] = useState("");
   let [publishYear,setPublishYear] = useState("");
   let [loading,setLoading] = useState(false)
   let navigate = useNavigate();
   const {enqueueSnackbar} = useSnackbar();

    const saveBook = () =>{

      const data = {
        title ,
        author,
        publishYear
      }
      setLoading(true);

      axios.post("http://localhost:8000/books",data)
      .then((response)=>{
          setLoading(false)
          // enqueueSnackbar("Your book is store ",{variant : "success"})
          enqueueSnackbar('Book Created successfully', { variant: 'success' });
          navigate('/')

          console.log(response.data)
      })
      .catch((error)=>{
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error)
      })
    }


return (
  <div className='p-4'>
  
          <BackButton/>
           <h1 className='text-3xl my-4'>Create New Book </h1>
          {loading ? <Spinner/>: ''}
  

          <div  className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
              <div id="title" className='my-4'>
              <label  className='text-xl mr-4 text-gray-500'>Title</label>
              <input  name="title"   value={title} type="text" onChange={((e)=>setTitle(e.target.value))}
                className='border-2 border-gray-500 px-4 py-2 w-full'
              ></input>
             </div>
             <div id="author" className='my-4'>
              <label  className='text-xl mr-4 text-gray-500'>Author</label>
              <input  name="title"   value={author} type="text" onChange={((e)=>setAuthor(e.target.value))}
                className='border-2 border-gray-500 px-4 py-2 w-full'
              ></input>
             </div>
             <div id="title" className='my-4'>
              <label  className='text-xl mr-4 text-gray-500'>Publish Year</label>
              <input  name="title"   value={publishYear} type="text" onChange={((e)=>setPublishYear(e.target.value))}
                className='border-2 border-gray-500 px-4 py-2 w-full'
              ></input>
             </div>
              <button type="submit" onClick={saveBook} className='p-2 bg-sky-300 m-8'>Save Book</button>
              

          </div>
          </div>
      )

 }



export default CreateBooks