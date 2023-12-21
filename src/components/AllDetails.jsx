import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import detailsContext from "../context/details/detailsContext";
import Navbar from "./Navbar";
import "./AllDetails.css";
import { useReactToPrint } from "react-to-print";
import yearContext from "../context/details/yearContext";

const AllDetails = () => {
  const context = useContext(detailsContext);
  const { oneDetail, getSpecificDetails } = context;
  const { id } = useParams();
  const navigate = useNavigate();
  const yearcontext = useContext(yearContext);
  const {  print, setPrint } = yearcontext;

  useEffect(() => {
    getSpecificDetails(id);
    console.log(oneDetail);
  }, [id]);

  const handleClick = () => {
    navigate("/");
  };
  const handlePrintFull = useReactToPrint({
    content: ()=> printFullRef.current
  })
  const printFullRef = useRef();
  if (print==="full") {
    handlePrintFull();
    setPrint(false)
  }
  

  return (
    <>
      <div style={{ marginTop: "100px", background: 'url("/imgs/bg_img2.jpg") no-repeat center/ cover' }}>
        <Navbar page="AllDetails"></Navbar>

        <div className="toppart">
          <img
            src="https://www.svgrepo.com/show/52340/student.svg"
            alt="asad"
            style={{ borderRadius: "50%" }}
          />
          <div className="head">
            <div className="upper">
              <h2 className="">{oneDetail.name || "---"}</h2>
            </div>
            <div className="lower">
              <h5>Gr_no : {oneDetail.gr_no || "---"}</h5>
              <h5>Mobile : {oneDetail.mobile || "---"}</h5>
            </div>
          </div>
        </div>

        <div className="mainBox">
          <div className="leftBox">
            <h2 className="">Personal Details</h2>

            <form className="info" id="info">
              <div className="form-group">
                <label className="label"  htmlFor="name">Name: (As per Graduation Marksheet)</label>
                {/* <div className="info-text">{oneDetail.religion || "---"}</div> */}
                <div className="info-text ">{oneDetail.name || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="roll_no">Roll Number :</label>
                <div className="info-text">{oneDetail.roll_no || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="fatherName">Father / Husband's Name:</label>
                <div className="info-text">{oneDetail.father || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Father's Occupation:</label>
                <div className="info-text">{oneDetail.father_occ || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="motherName">Mother' Name:</label>
                <div className="info-text">{oneDetail.mother || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="mother_occ">Mother's Occupation:</label>
                <div className="info-text">{oneDetail.mother_occ || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="religion">Religion:</label>
                <div className="info-text">{oneDetail.religion || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Nationality:</label>
                <div className="info-text">{oneDetail.nationality || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Adhar No.:</label>
                <div className="info-text">{oneDetail.adhaar || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Category:</label>
                <div className="info-text">{oneDetail.category || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">D.O.B: (yyyy/mm/dd)</label>
                <div className="info-text">{oneDetail.dob || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Place of Birth:</label>
                <div className="info-text">{oneDetail.pob || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Community:</label>
                <div className="info-text">{oneDetail.community || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Gender:</label>
                <div className="info-text">{oneDetail.gender || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Domicile:</label>
                <div className="info-text">{oneDetail.domicile || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Mother Toungue:</label>
                <div className="info-text">{oneDetail.mother_tongue || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Other Language Known:</label>
                <div className="info-text">{oneDetail.languages || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Marital Status:</label>
                <div className="info-text">{oneDetail.marital || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Mobile No.:</label>
                <div className="info-text">{oneDetail.mobile || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Parent's Mobile No.:</label>
                <div className="info-text">{oneDetail.parent_mobile || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Address (Local):</label>
                <div className="info-text">{oneDetail.local_address || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Resident Phone No.:</label>
                <div className="info-text">{oneDetail.res_mobile || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Address (Permanant):</label>
                <div className="info-text">{oneDetail.permanant_addr || "---"}</div>
              </div>
            </form>
          </div>
          <div className="rightBox">
            <h2 className="">Educational Details</h2>

            <div className="graduation">
              <table className="table  table-bordered border-dark">
                <thead >
                  <tr >
                    <th scope="col">DEGREE</th>
                    <th scope="col">GRADUATION</th>
                    <th scope="col">POST GRADUATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CGPA / %</td>
                    <td>{oneDetail.graduation?.cgpa || "---"}</td>
                    <td>{oneDetail.postGraduation?.cgpa || "---"}</td>
                  </tr>
                  <tr>
                    <td>SUBJECT</td>
                    <td>{oneDetail.graduation?.subject || "---"}</td>
                    <td>{oneDetail.postGraduation?.subject || "---"}</td>
                  </tr>
                  <tr>
                    <td>YEAR</td>
                    <td>{oneDetail.graduation?.year || "---"}</td>
                    <td>{oneDetail.postGraduation?.year || "---"}</td>
                  </tr>
                  <tr>
                    <td>COLLEGE</td>
                    <td>{oneDetail.graduation?.college || "---"}</td>
                    <td>{oneDetail.postGraduation?.college || "---"}</td>
                  </tr>
                  <tr>
                    <td>UNIVERSITY</td>
                    <td>{oneDetail.graduation?.university || "---"}</td>
                    <td>{oneDetail.postGraduation?.university || "---"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className="text-center">Details of B.ED. Result</h5>

            <div className="graduation">
              <table className="table  table-bordered border-dark">
                <thead>
                  <tr>
                    <th scope="col">SEMESTER</th>
                    <th scope="col">SEM 1</th>
                    <th scope="col">SEM 2</th>
                    <th scope="col">SEM 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Seat No</td>
                    <td>{oneDetail.bed?.sem1?.seatno || "---"}</td>
                    <td>{oneDetail.bed?.sem2?.seatno || "---"}</td>
                    <td>{oneDetail.bed?.sem3?.seatno || "---"}</td>
                  </tr>
                  <tr>
                    <td>GPA</td>
                    <td>{oneDetail.bed?.sem1?.gpa || "---"}</td>
                    <td>{oneDetail.bed?.sem2?.gpa || "---"}</td>
                    <td>{oneDetail.bed?.sem3?.gpa || "---"}</td>
                  </tr>
                  <tr>
                    <td>Grade</td>
                    <td>{oneDetail.bed?.sem1?.grade || "---"}</td>
                    <td>{oneDetail.bed?.sem2?.grade || "---"}</td>
                    <td>{oneDetail.bed?.sem3?.grade || "---"}</td>
                  </tr>
                  <tr>
                    <td>Total Marks</td>
                    <td>{oneDetail.bed?.sem1?.totalmarks || "---"}</td>
                    <td>{oneDetail.bed?.sem2?.totalmarks || "---"}</td>
                    <td>{oneDetail.bed?.sem3?.totalmarks || "---"}</td>
                  </tr>
                  <tr>
                    <td>CGPA</td>
                    <td colSpan="3">{oneDetail.bed?.cgpa || "---"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* more detaiks */}

            <form className="info">
              <div className="form-group">
                <label className="label"  htmlFor="name">Other Qualification's if any:</label>
                <div className="info-text">
                  {oneDetail.other_qualification || "---"}
                </div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="fatherName">College last attended:</label>
                <div className="info-text">{oneDetail.last_college || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Special method 1:</label>
                <div className="info-text">
                  {oneDetail.special_method_1 || "---"}
                </div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="motherName">Medium of Practice Lesson</label>
                <div className="info-text">{oneDetail.medium_of_prac || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="religion">Medium of anwser:</label>
                <div className="info-text">{oneDetail.medium_of_ans || "---"}</div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">
                  Special Method 2 / Special Field
                </label>
                <div className="info-text">
                  {oneDetail.special_method_2 || "---"}
                </div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">Name of Practicing School:</label>
                <div className="info-text">
                  {oneDetail.practicing_school || "---"}
                </div>
              </div>

              <div className="form-group">
                <label className="label"  htmlFor="nationality">abcid:</label>
                <div className="info-text">
                  {oneDetail.abcid || "---"}
                </div>
              </div>
            </form>
          </div>
        </div>


        {/* print */}
        <div className="all-stud-print" ref={printFullRef}>
              <div className="containerPrint">
      <div id="top-head">
        <b>ALL INDIA KHILAFAT COMMITTEE COLLEGE OF EDUCATION</b>
        <br />
        <b>STUDENTS' RECORD - {oneDetail.year}</b>
      </div>

      <div className="main">
        <span>
          <b>G.R.No.</b> {oneDetail.gr_no || "---"}
        </span>
        <span>
          <b>Roll No.</b> {oneDetail.roll_no || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Name as per GRADUATION Marksheet :</b> {oneDetail.name || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Father/Husband ’s Name :</b> {oneDetail.father || "---"}
        </span>
        <span>
          <b>Occupation :</b> {oneDetail.father_occ || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Mother’s Name :</b> {oneDetail.mother|| "---"}
        </span>
        <span>
          <b>Occupation :</b> {oneDetail.mother_occ|| "---"}
        </span>{" "}
        <br />
        <span>
          <b>Religion :</b> {oneDetail.religion|| "---"}
        </span>
        <span>
          <b>Nationality :{oneDetail.nationality|| "---"}</b>
        </span>
        <span>
          <b>Category :</b> (OPEN/SC/ST/NT/OBC) {oneDetail.category|| "---"}
        </span>
        <br />
        <span>
          <b>Date of Birth :(yyyy/mm/dd)</b> {oneDetail.dob || "---"}
        </span>
        <span>
          <b>Place of Birth :</b> {oneDetail.pob || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Community :</b> {oneDetail.community || "---"}
        </span>
        <span>
          <b>Sex : (M/F)</b> {oneDetail.gender || "---"}
        </span>
        <span>
          <b>Domicile :</b> {oneDetail.domicile || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Mother Tongue : </b> {oneDetail.mother_tongue || "---"}
        </span>
        <span>
          <b> Other languages known :</b> {oneDetail.languages || "---"}
        </span>
        <br />
        <span>
          <b>Marital Position :</b> {oneDetail.marital || "---"}
        </span>
        <span>
          <b>Mobile No :</b> {oneDetail.mobile || "---"}
        </span>{" "}
        <br />
        <span>
          <b>Address (Local) :</b> {oneDetail.local_address || "---"}
        </span>
        <span>
          <b>Residence Ph. No.</b> {oneDetail.res_mobile}
        </span>{" "}
        <br />
        <span>
          <b>Address (Permanent) :</b> {oneDetail.permanant_addr}
        </span><br />
        <span>
          <b>Parent’s Mobile No</b> {oneDetail.parent_mobile}
        </span>{" "}
        
        <span>
          <b>College last attended :</b> {oneDetail.last_college}
        </span>{" "}
        <br />

        <span>
          <b>Aadhaar Number : </b> {oneDetail.adhaar}
        </span>{" "}
        
        <span>
          <b>ABCID number :</b> {oneDetail.abcid}
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
              <td>{oneDetail.graduation.cgpa}</td>
              <td>{oneDetail.graduation.subject}</td>
              <td>{oneDetail.graduation.year}</td>
              <td className="adjustable-font-size">{oneDetail.graduation.college}</td>
              <td className="adjustable-font-size">{oneDetail.graduation.university}</td>
            </tr>
            <tr>
              <td>Post Graduation</td>
              <td>{oneDetail.postGraduation.cgpa}</td>
              <td>{oneDetail.postGraduation.subject}</td>
              <td>{oneDetail.postGraduation.year}</td>
              <td className="adjustable-font-size">{oneDetail.postGraduation.college}</td>
              <td className="adjustable-font-size">{oneDetail.postGraduation.university}</td>
            </tr>
          </tbody>
        </table>

        <span>
          <b>Other Qualifications (if any) :</b> {oneDetail.other_qualification}
        </span><br />
        <span>
        <b>Special Method -1:</b> {oneDetail.special_method_1}
        </span><br />
        <span>
        <b>Medium of Practice Lessons :</b> {oneDetail.medium_of_prac}
        </span>
        <span>
        <b> Medium of Answer : </b> {oneDetail.medium_of_ans}
        </span><br />
        <span>
        <b> Special Method -2: /Special Field : </b> {oneDetail.special_method_2}
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
              <td>{oneDetail.bed.sem1.seatno}</td>
              <td>{oneDetail.bed.sem1.gpa}</td>
              <td>{oneDetail.bed.sem1.grade}</td>
              <td>{oneDetail.bed.sem1.totalmarks}</td>
              <td rowSpan='4'>{oneDetail.bed.cgpa}</td>
            </tr>

            <tr>
              <td>SEM 2</td>
              <td>{oneDetail.bed.sem2.seatno}</td>
              <td>{oneDetail.bed.sem2.gpa}</td>
              <td>{oneDetail.bed.sem2.grade}</td>
              <td>{oneDetail.bed.sem2.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 3</td>
              <td>{oneDetail.bed.sem3.seatno}</td>
              <td>{oneDetail.bed.sem3.gpa}</td>
              <td>{oneDetail.bed.sem3.grade}</td>
              <td>{oneDetail.bed.sem3.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 4</td>
              <td>{oneDetail.bed.sem4.seatno}</td>
              <td>{oneDetail.bed.sem4.gpa}</td>
              <td>{oneDetail.bed.sem4.grade}</td>
              <td>{oneDetail.bed.sem4.totalmarks}</td>
            </tr>
          </tbody>
        </table>

        <span>
        <b>  Student’s Signature ________________</b>
        </span><br />

      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default AllDetails;
