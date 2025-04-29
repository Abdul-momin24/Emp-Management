import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Category = () => {

  const [category, setCategory] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(result => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error)
        }
      }).catch(err => console.log(err))
  }, [])


  const handleDelete = (id) =>{
    
      console.log(id);
      axios.delete(`http://localhost:3000/auth/category/${id}`)
      .then(result =>{
        if(result.data.Status){
          setCategory(prev => prev.filter(cat => cat.id !== id));
          alert("CAtegory deleted Succefully");
        }else{
          alert("Error in deleting")
        }
      }).catch(err =>console.log(err))

  }


  return (
    <div className='px-5 mt-3'>
      <div className='flex justify-center'>
        <h3 className="text-2xl font-bold">Category List</h3>
      </div>

      <div className="flex items-center justify-center">
        <Link to="/dashboard/add_category" className='inline-block bg-green-500 text-white px-4 py-2 rounded my-4'>
          Add Category
        </Link>
      </div>

      <div className="mt-3 flex items-center justify-center max-w-screen">
        <div className="w-4/5 border-2 border-black rounded-2xl overflow-hidden">
          {/* Header */}
         <div className="flex bg-gray-200 font-bold w-full items-center  justify-evenly">
         
          <div className=" w-1/2  text-center p-2">
            Name
          </div>
          <div className=" w-1/2 text-center  p-2">
            Action
          </div>
      </div>

          {/* Body */}
{category.map((c, index) => (
    <div key={index} className="flex border-t-2 border-gray-500 items-center  justify-evenly  w-full ">
      <div className="w-1/2  text-center p-2  text-xl ">
        {c.name}
      </div>
      <div className="w-1/2  flex justify-center items-center p-2">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={() =>{handleDelete(c.id)}}>
          DELETE
        </button>
      </div>
    </div>
  ))
}

        </div>
      </div>
    </div>
  )
}

export default Category
