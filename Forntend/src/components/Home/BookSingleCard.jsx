import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import {
  BsInfoCircle
} from "react-icons/bs";
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

 const  BookSingleCard = ({book}) => {
  return (
    <div
          key={book._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
          style={{ width: '250px', height: '220px' }}
        >
          <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
            {book.publishYear}
          </h2>
          {/* <h4 className="my-2 text-gray-500">{item._id}</h4> */}
          <div className="flex justify-start items-center gap-x-2"
            style={{ marginTop:"20px"}}>
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2 mt-4 p-4"
             style={{ marginTop:"50px"}}   >
            <Link to={`./books/details/${book._id}`}>
              <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`./books/edit/${book._id}`}>
              <AiOutlineEdit className="text-2xl text-red-800 hover:text-black" />
            </Link>
            <Link to={`./books/delete/${book._id}`}>
              <MdOutlineDelete className="text-2xl text-yellow-800 hover:text-black" />
            </Link>
          </div>
        </div>
  )
}



export default BookSingleCard
