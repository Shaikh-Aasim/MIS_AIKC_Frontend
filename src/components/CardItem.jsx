import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import detailsContext from "../context/details/detailsContext";
import './CardItem.css'

const CardItem = (props) => {
  const { student} = props;
  const context = useContext(detailsContext);
  const { deleteStudent} = context;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">

      <div className="card my-3 mx-3" >
        <div className="card-body">
        <center><img src="https://www.svgrepo.com/show/52340/student.svg" alt="" /></center>
          <h6 className="card-title text-center">{student.name}</h6>
          <p className="card-text">Roll No.: {student.roll_no}</p>
          <p className="card-text">GR No.: {student.gr_no}</p>
          <p className="card-text">Mobile: {student.mobile}</p>
          <p className="card-text">
            <i className="fa-regular fa-trash-can" onClick={()=>{deleteStudent(student._id)}}></i>
            <Link to={`/editDetails/${student._id}`}><i className="fa-regular fa-pen-to-square mx-3"></i></Link>
            <Link to={`/allDetails/${student._id}`}>
            <button type="button" className="btn btn-sm "  >View More</button>  
          </Link>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default CardItem;

