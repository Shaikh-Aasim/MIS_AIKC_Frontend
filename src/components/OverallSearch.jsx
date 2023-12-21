import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import "./OverallSearch.css";
import detailsContext from "../context/details/detailsContext";
import { Link } from "react-router-dom";

function OverallSearch() {
    const context = useContext(detailsContext);
  const {allDetails, getDetails, deleteStudent, searchTerm, setAllDetails} = context;
    useEffect (()=>{
        getDetails("");
        
        const sortedData = [...allDetails].sort((a, b) => a.year.localeCompare(b.year));
        console.log(allDetails)
  setAllDetails(sortedData);
    },[]);

    if (searchTerm === undefined) {
        return null; // Return null or a loading indicator while searchTerm is undefined
      }
    
    
      const filteredDetails = allDetails.filter((student) => {
        if (searchTerm && searchTerm.trim() !== "") {
          // console.log(student)
          const lowercaseSearchTerm = searchTerm.toLowerCase();
          if (!student.gr_no) {
            return (
              student.name.toLowerCase().includes(lowercaseSearchTerm) ||
              student.mobile.toLowerCase().includes(lowercaseSearchTerm)
            );
          }
          else if (!student.mobile) {
            return (
              student.name.toLowerCase().includes(lowercaseSearchTerm) 
            );
          }
          else{
            return (
              student.name.toLowerCase().includes(lowercaseSearchTerm) ||
              student.gr_no.toLowerCase().includes(lowercaseSearchTerm) ||
              student.mobile.toLowerCase().includes(lowercaseSearchTerm) ||
              student.year.toLowerCase().includes(lowercaseSearchTerm)
              );
          }
        } else {
          return true; // No search term, so return all details
        }
      });
  return (
    <div>
      <Navbar page="Overallsearch"></Navbar>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Name</th>
              <th scope="col">Roll No</th>
              <th scope="col">Gr No.</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            

            {filteredDetails.map((student) => {
            return (
                <tr>
                <th scope="row">{student.year}</th>
                <td>{student.name}</td>
                <td>{student.roll_no}</td>
                <td>{student.gr_no}</td>
                {/* <td><i className="fa-regular fa-trash-can" onClick={()=>{deleteStudent(student._id)}}></i></td> */}
                <td>
                <Link to={`/allDetails/${student._id}`}>
            <button type="button" className="btn btn-sm "  >View More</button>  
          </Link>
                </td>
              </tr>
                );
              })}
            
          </tbody>
        </table>
        {filteredDetails.length===0?<h3 className="notfound" style={{display: 'block', width:'50%',margin:'0 auto'}}>No Students Found</h3>:<></>}
      </div>
    </div>
  );
}

export default OverallSearch;
