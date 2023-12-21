import { useState } from "react";
import DetailsContext from "./detailsContext";

const DetailsState = (props) => {
    const host = "http://localhost:5000";
    // let current_year = new Date().getFullYear();

    const [allDetails, setAllDetails] = useState([]);
    const [oneDetail, setOneDetail] = useState({
      year: "",
      name: "",
      roll_no: "",
      gr_no: "",
      mobile: "",
      father: "",
      father_occ: "",
      mother: "",
      mother_occ: "",
      religion: "",
      category: "",
      dob: "",
      pob: "",
      community: "",
      gender: "",
      domicile: "",
      mother_tongue: "",
      languages: "",
      marital: "",
      parent_mobile: "",
      local_address: "",
      res_mobile: "",
      permanant_addr: "",
      
      graduation:{
        cgpa: "",
        subject: "",
        year: "",
        college: "",
        university: ""
      },
      
      postGraduation:{
        cgpa: "",
        subject: "",
        year: "",
        college: "",
        university: ""
      },
      
      bed:{
        sem1:{
          seatno: "",
          gpa: "",
          grade: "",
          totalmarks: ""
        },
        
        sem2:{
          seatno: "",
          gpa: "",
          grade: "",
          totalmarks: ""
        },
        
        sem3:{
          seatno: "",
          gpa: "",
          grade: "",
          totalmarks: ""
        },
        
        sem4:{
          seatno: "",
          gpa: "",
          grade: "",
          totalmarks: ""
        },
        
        cgpa: ""
      },
      
      other_qualification: "",
    
      last_college: "",
    
      special_method_1 : "",
    
      medium_of_prac: "",
    
      medium_of_ans: "",
    
      special_method_2: "",
    
      practicing_school: ""
    });

    const [sort, setSort] = useState('');
    

    const [searchTerm, setSearchTerm] = useState('');

    // get all details
    const getDetails = async (propyear) => {
        // const year = "2023";
        // console.log(propyear)
        if (propyear) {
          const response = await fetch(`${host}/api/student_info/fetchalldetails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({year: propyear})
          });
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const json = await response.json()
        setAllDetails(json)
        }
        else{
          const response = await fetch(`${host}/api/student_info/fetchalldetails`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify()
          });
          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json()
        setAllDetails(json)
        }


          
        
      };

      // get specific details
    const getSpecificDetails = async (id) => {
      // const year = "2023";

    const response = await fetch(`${host}/api/student_info/fetchOneDetail/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        
      const json = await response.json()
      console.log(json);
      if(json.year > "2022"){
        setOneDetail(json);
        // console.log("year is greater than 2022");
      }
      else{
        // console.log("year is less than 2022");
      setOneDetail({...oneDetail, year: json.year,
        name: json.name,
        gr_no: json.gr_no,
        mobile: json.mobile,
        dob: json.dob,
        permanant_addr: json.permanant_addr,
      roll_no: json.roll_no})
      }
    };


    // Add new Student
  const addDetails = async (request) => {

    // console.log("Hi i am add backend", request)
    const response = await fetch(`${host}/api/student_info/create_student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(request),
      
    });

    // console.log("Hi i reach after API call")


    // const student = await response.json()
    setAllDetails(allDetails.concat(request));
    // console.log(allDetails)
    // console.log("Hi i reach after details is set")
  };


  // Delete student
  const deleteStudent = async (id) => {

    let isConfirm = window.confirm("DELETE A STUDENT: Are you sure ?")

    if (isConfirm) {
    const response = await fetch(`${host}/api/student_info/deletenote/${id}`, {
      method: "DELETE",
    });


    const newDetail = allDetails.filter((detail) => {
      return detail._id !== id;
    });
    setAllDetails(newDetail);
    }
    
  };

  // edit a Student
  const editDetails = async (id, data) => {
    const response = await fetch(`${host}/api/student_info/updatedetails/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    const json = response.json();
  }
  return (
    <DetailsContext.Provider value={{ allDetails, oneDetail, getDetails, getSpecificDetails, addDetails, deleteStudent,setOneDetail,editDetails, searchTerm, setSearchTerm, sort, setSort,setAllDetails}}>
        {props.children}
    </DetailsContext.Provider>
  )
}

export default DetailsState;
