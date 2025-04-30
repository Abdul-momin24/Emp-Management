import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logo from "../assets/logo-Photoroom.png";

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:3000/employee/detail/'+id)
        .then(result => {
            setEmployee(result.data[0])
        })
        .catch(err => console.log(err))
    }, [])
    const handleLogout = () => {
        axios.get('http://localhost:3000/employee/logout')
        .then(result => {
          if(result.data.Status) {
            localStorage.removeItem("valid")
            navigate('/')
          }
        }).catch(err => console.log(err))
      }

    //   const handleEdit = ()

  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow flex items-center justify-center  ">
        <div className="flex-shrink-0 h-20  ">
                    {/* Image container */}
                    <img src={logo} className="object-cover h-full" alt="Logo" />
                  </div>
            <h4>Employee360</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
        <div className="image  flex items-center justify-center  ">
            <img src={`http://localhost:3000/Images/`+employee.image} className='emp_det_image'/>
        </div>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {employee.name}</h3>
                <h3>Email: {employee.email}</h3>
                <h3>Salary: ${employee.salary}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default EmployeeDetail