import React, { useContext, useEffect, useRef, useState } from "react";
import "./StudentDetails.css";
import CardItem from "./CardItem";
import "./Demo.css";

import detailsContext from "../context/details/detailsContext";
import yearContext from "../context/details/yearContext";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
const StudentDetails = () => {
  const context = useContext(detailsContext);
  const {
    allDetails,
    getDetails,
    setOneDetail,
    searchTerm,
    setAllDetails,
    sort,
    setSort,
  } = context;
  const yearcontext = useContext(yearContext);
  const { year, print, setPrint } = yearcontext;
  const navigate = useNavigate();
  // const temp = false;

  const handlePrint = useReactToPrint({
    content: ()=> printRef.current
  })

  const handlePrintFull = useReactToPrint({
    content: ()=> printFullRef.current
  })
  // const [displayDiv, setDisplayDiv] = useState('none')
  const printRef = useRef();
  const printFullRef = useRef();
  if (print) {
    handlePrint();
    setPrint(!print)
  }

  if (print==="full") {
    handlePrintFull();
    setPrint(false)
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getDetails(year);
      window.scrollTo(0, 0);
      setOneDetail({
        year: "",
        name: "",
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

        graduation: {
          cgpa: "",
          subject: "",
          year: "",
          college: "",
          university: "",
        },

        postGraduation: {
          cgpa: "",
          subject: "",
          year: "",
          college: "",
          university: "",
        },

        bed: {
          sem1: {
            seatno: "",
            gpa: "",
            grade: "",
            totalmarks: "",
          },

          sem2: {
            seatno: "",
            gpa: "",
            grade: "",
            totalmarks: "",
          },

          sem3: {
            seatno: "",
            gpa: "",
            grade: "",
            totalmarks: "",
          },

          sem4: {
            seatno: "",
            gpa: "",
            grade: "",
            totalmarks: "",
          },

          cgpa: "",
        },

        other_qualification: "",

        last_college: "",

        special_method_1: "",

        medium_of_prac: "",

        medium_of_ans: "",

        special_method_2: "",

        practicing_school: "",
      
      });

    } else {
      navigate("/login");
    }
  }, []);

  if (sort === "name") {
    setSort("");
    const sortedData = [...allDetails].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setAllDetails(sortedData);
  }
  if (sort === "gr_no") {
    setSort("");
    const sortedData = [...allDetails].sort((a, b) =>
      a.gr_no.localeCompare(b.gr_no)
    );
    setAllDetails(sortedData);
  }
  // if (sort === "roll_no") {
  //   setSort("");
  //   const sortedData = [...allDetails].sort((a, b) =>
  //     a.roll_no.localeCompare(b.roll_no)
  //   );
  //   setAllDetails(sortedData);
  // }
  if (sort === "roll_no") {
    setSort("");
    const sortedData = [...allDetails].sort((a, b) =>
      parseInt(a.roll_no, 10) - parseInt(b.roll_no, 10)
    );
    setAllDetails(sortedData);
  }
  if (sort === "mobile") {
    setSort("");
    const sortedData = [...allDetails].sort((a, b) =>
      a.mobile.localeCompare(b.mobile)
    );
    setAllDetails(sortedData);
  }

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
      } else if (!student.mobile) {
        return student.name.toLowerCase().includes(lowercaseSearchTerm);
      } else {
        return (
          student.name.toLowerCase().includes(lowercaseSearchTerm) ||
          student.gr_no.toLowerCase().includes(lowercaseSearchTerm) ||
          student.mobile.toLowerCase().includes(lowercaseSearchTerm) ||
          student.roll_no.toLowerCase().includes(lowercaseSearchTerm)
        );
      }
    } else {
      return true; // No search term, so return all details
    }
  });

  

  
  return (
    <>
      <div className="student-details">
        <div className="cards">
          {/* <CardItem></CardItem> */}
          {/* {allDetails.map((student) => {
            return (
              <CardItem
              key={student._id}
              updateStudent={updateStudent}
              student={student}
              />
              );
            })} */}

          {filteredDetails.map((student) => {
            return <CardItem key={student._id} student={student} />;
          })}
        </div>
        {filteredDetails.length === 0 ? (
          <h3
            className="notfound"
            style={{ display: "block", width: "50%", margin: "0 auto" }}
          >
            No Students Found
          </h3>
        ) : (
          <></>
        )}

        <div className="print-div" ref={printRef} style={{margin: '20px'}}>
          <center><h2>Year - {year}</h2></center>
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th scope="col">Roll No</th>
                <th scope="col">Name</th>
                <th scope="col">Gr No.</th>
                <th scope="col">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {filteredDetails.map((student) => {
                return (
                  <tr>
                    <td>{student.roll_no}</td>
                    <td>{student.name}</td>
                    <td>{student.gr_no}</td>
                    <td>{student.mobile}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>


        </div>

        <div className="all-stud-print" ref={printFullRef}>
        {
          filteredDetails.map((student) => {
            return(
              <div className="containerPrint">
      <div id="top-head">
        <b>ALL INDIA KHILAFAT COMMITTEE COLLEGE OF EDUCATION</b>
        <br />
        <b>STUDENTS' RECORD - {student.year}</b>
      </div>

      <div className="main">
        <span>
          <b>G.R.No.</b> {student.gr_no || "---"}
        </span>
        <span>
          <b>Roll No.</b> {student.roll_no || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Name as per GRADUATION Marksheet :</b> {student.name || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Father/Husband ’s Name :</b> {student.father || "---"}
        </span>
        <span>
          <b>Occupation :</b> {student.father_occ || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Mother’s Name :</b> {student.mother|| "---"}
        </span>
        <span>
          <b>Occupation :</b> {student.mother_occ|| "---"}
        </span>{" "}
        <br />
        <span>
          <b>Religion :</b> {student.religion|| "---"}
        </span>
        <span>
          <b>Nationality :{student.nationality|| "---"}</b>
        </span>
        <span>
          <b>Category :</b> (OPEN/SC/ST/NT/OBC) {student.category|| "---"}
        </span>
        <br />
        <span>
          <b>Date of Birth :</b> {student.dob || "---"}
        </span>
        <span>
          <b>Place of Birth :</b> {student.pob || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Community :</b> {student.community || "---"}
        </span>
        <span>
          <b>Sex : (M/F)</b> {student.gender || "---"}
        </span>
        <span>
          <b>Domicile :</b> {student.domicile || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Mother Tongue : </b> {student.mother_tongue || "---"}
        </span>
        <span>
          <b> Other languages known :</b> {student.languages || "---"}
        </span>
        <br />
        <span>
          <b>Marital Position :</b> {student.marital || "---"}
        </span>
        <span>
          <b>Mobile No :</b> {student.mobile || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Address (Local) :</b> {student.local_address || "---"}
        </span>
        <span>
          <b>Residence Ph. No.</b> {student.res_mobile}
        </span>{" "}
        <br />
        <span>
          <b>Address (Permanent) :</b> {student.permanant_addr}
        </span><br />
        <span>
          <b>Parent’s Mobile No</b> {student.parent_mobile}
        </span>{" "}
        
        <span>
          <b>College last attended :</b> {student.last_college}
        </span>{" "}
        <br />

        <span>
          <b>Aadhaar Number : </b> {student.adhaar}
        </span>{" "}
        
        <span>
          <b>ABCID number :</b> {student.abcid}
        </span>{" "}
        <br />
        <b>QUALIFICATIONS : </b>
        <small>(Graduation &Post Graduation details only)</small>
        <table className="table table-sm my-1">
          <thead>
            <tr>
              <th scope="col">DEGREE</th>
              <th scope="col">CGPA/%</th>
              <th scope="col">SUBJECT</th>
              <th scope="col">YEAR</th>
              <th scope="col">COLLEGE</th>
              <th scope="col">UNIVERSITY</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Graduation</td>
              <td>{student.graduation.cgpa}</td>
              <td>{student.graduation.subject}</td>
              <td>{student.graduation.year}</td>
              <td>{student.graduation.college}</td>
              <td>{student.graduation.university}</td>
            </tr>
            <tr>
              <td>Post Graduation</td>
              <td>{student.postGraduation.cgpa}</td>
              <td>{student.postGraduation.subject}</td>
              <td>{student.postGraduation.year}</td>
              <td>{student.postGraduation.college}</td>
              <td>{student.postGraduation.university}</td>
            </tr>
          </tbody>
        </table>

        <span>
          <b>Other Qualifications (if any) :</b> {student.other_qualification}
        </span><br />
        <span>
        <b>Special Method -1:</b> {student.special_method_1}
        </span><br />
        <span>
        <b>Medium of Practice Lessons :</b> {student.medium_of_prac}
        </span>
        <span>
        <b> Medium of Answer : </b> {student.medium_of_ans}
        </span><br />
        <span>
        <b> Special Method -2: /Special Field : </b> {student.special_method_2}
        </span><br />

        <b>Details of B.Ed. Result :</b>

        <table className="table table-sm my-1">
          <thead>
            <tr>
              <th scope="col">SEMESTERS</th>
              <th scope="col">Seat No</th>
              <th scope="col">GPA</th>
              <th scope="col">Grade</th>
              <th scope="col">Total Marks</th>
              <th scope="col">CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SEM 1</td>
              <td>{student.bed.sem1.seatno}</td>
              <td>{student.bed.sem1.gpa}</td>
              <td>{student.bed.sem1.grade}</td>
              <td>{student.bed.sem1.totalmarks}</td>
              <td rowSpan='4'>{student.bed.cgpa}</td>
            </tr>

            <tr>
              <td>SEM 2</td>
              <td>{student.bed.sem2.seatno}</td>
              <td>{student.bed.sem2.gpa}</td>
              <td>{student.bed.sem2.grade}</td>
              <td>{student.bed.sem2.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 3</td>
              <td>{student.bed.sem3.seatno}</td>
              <td>{student.bed.sem3.gpa}</td>
              <td>{student.bed.sem3.grade}</td>
              <td>{student.bed.sem3.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 4</td>
              <td>{student.bed.sem4.seatno}</td>
              <td>{student.bed.sem4.gpa}</td>
              <td>{student.bed.sem4.grade}</td>
              <td>{student.bed.sem4.totalmarks}</td>
            </tr>
          </tbody>
        </table>

        <span>
        <b>  Student’s Signature ________________</b>
        </span><br />

      </div>
    </div>
            );
          })
        }
        </div>

      </div>
    </>
  );
};

export default StudentDetails;
