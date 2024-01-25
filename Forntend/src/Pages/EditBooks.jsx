import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';




 const  EditBooks = () => {
  let[title ,setTitle] = useState("");
  let[author ,setAuthor] = useState("");
  let[publishYear ,setPublishYear] = useState("");
  let[loading ,setLoading] = useState("");
  const  navigation = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar()

 useEffect(()=>{
     setLoading(true)
     axios.get(`http://localhost:8000/books/${id}`)
    
     .then((response)=>{
      setTitle(response.data.title);
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
      setLoading(false)


     })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
    })
  },[])

    const editBooks = () =>{
       const data ={
        title ,
        author,
        publishYear
       }
       setLoading(false)
       axios.put(`http://localhost:8000/books/${id}`,data)
       .then((response)=>{
          console.log(response);
          setLoading(false);
          enqueueSnackbar('Book Edited successfully', { variant: 'success' });
          navigation("/")

       })
       .catch((error)=>{
          console.log(error)
          setLoading(false);
          enqueueSnackbar('Error', { variant: 'success' });
       })
    }




  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
             <label className='text-xl mr-4 text-gray-500'> Title</label>
             <input name="title" 
                onChange={((e)=>setTitle(e.target.value))}
                value={title}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            ></input>
          </div>
          <div className='my-4'>
             <label className='text-xl mr-4 text-gray-500'> Author</label>
             <input name="author" 
                onChange={((e)=>setAuthor(e.target.value))}
                value={author}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            ></input>
          </div>
          <div className='my-4'>
             <label className='text-xl mr-4 text-gray-500'> publish Year</label>
             <input name="publishYear" 
                onChange={((e)=>setPublishYear(e.target.value))}
                value={publishYear}
                className='border-2 border-gray-500 px-4 py-2 w-full'
            ></input>
          </div>
          <button type='submit' className='p-2 bg-sky-300 m-8'  onClick={editBooks}>Submit</button>

    </div>

    </div>
  )
}

export default EditBooks
