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
      <div className='mt-3 flex items-center justify-center max-w-screen'>
        <table className='table-auto w-4/5 rounded-2xl border-2 border-black'>
          <thead>
            <tr className="bg-gray-200">
              <th className=" p-2 text-center ">Name</th>
              <th className="p-2 text-center ">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              category.map((c, index) => (
                <tr key={index} className="border-gray-500 border-2 rounded-2xl mr-5 ">
                  <td className="  p-2 text-xl w-fit text-center ">{c.name}</td>
                  <td className="p-2 w-fit text-center">
                    <button className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-fit'>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Category
