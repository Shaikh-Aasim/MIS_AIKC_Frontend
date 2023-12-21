import React from 'react'
import Navbar from '../Navbar'

const Submit = () => {
  return (
    <div>
        <Navbar page="submit"></Navbar>
      <div  style={{background: 'pink'}} className="w-50 h-100 py-4 container d-flex align-items-center justify-content-center flex-wrap shadow p-3 mb-5 bg-white rounded">
        <div className="main h-50">
        <div className="icon w-100 text-center">
        <i class="fa-solid fa-circle-check" style={{fontSize: '80px'}}></i>
        </div>
      
        <h1 className='text-center w-100 my-2'>Thank You</h1>
        <h4 className='text-center'>The form was submitted successfully</h4>
        </div>
      </div>
    </div>
  )
}

export default Submit
