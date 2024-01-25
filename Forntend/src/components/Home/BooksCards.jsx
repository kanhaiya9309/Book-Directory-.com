import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import {
  BsInfoCircle
} from "react-icons/bs";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";

//BiUserCircle

function BooksCards({books}) {
    console.log(books)
  return (
    <div className="flex flex-wrap">
      {books.map((item) =>  (
       <BookSingleCard key={item._id} book={item}/>
      ))}
    </div>
  );
}

export default BooksCards;
