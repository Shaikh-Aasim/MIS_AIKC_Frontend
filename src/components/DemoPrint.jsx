import React from "react";
import "./Demo.css";

const DemoPrint = () => {
  const data = {
    graduation: {
      cgpa: "9",
      subject: "maths",
      year: "2013",
      college: "AIKC",
      university: "Mumbai",
    },
    postGraduation: {
      cgpa: "8",
      subject: "English",
      year: "2015",
      college: "GPM",
      university: "Mumbai",
    },
    bed: {
      sem1: {
        seatno: "1234",
        gpa: "8",
        grade: "A",
        totalmarks: "90",
      },
      sem2: {
        seatno: "2321",
        gpa: "7",
        grade: "B",
        totalmarks: "89",
      },
      sem3: {
        seatno: "1245",
        gpa: "8",
        grade: "B",
        totalmarks: "94",
      },
      sem4: {
        seatno: "2451",
        gpa: "9",
        grade: "A",
        totalmarks: "95",
      },
      cgpa: "8",
    },
    _id: "6549e52918bc788d4e2648a4",
    year: "2023",
    name: "AASIM",
    gr_no: "3007",
    mobile: "8591727736",
    father: "Zahid Ali",
    father_occ: "Officer",
    mother: "Aasiya",
    mother_occ: "House wife",
    religion: "Cristian",
    nationality: "INDIAN",
    adhaar: "123412345678",
    category: "open",
    dob: "2023-11-01",
    pob: "Mumbai",
    community: "Muslim",
    gender: "male",
    domicile: "yes",
    mother_tongue: "English",
    languages: "Hindi",
    marital: "married",
    parent_mobile: "9987353513",
    local_address: "America ki sumsaan sadak ",
    res_mobile: "8976525925",
    permanant_addr: "Room Mohammadiya Chawl Welfare Society Halav Pool Kurla",
    other_qualification: "SSC",
    last_college: "GPM",
    special_method_1: "xyz",
    medium_of_prac: "english",
    medium_of_ans: "English",
    special_method_2: "Hindi",
    practicing_school: "Sir JJ Fort Boys High School",
    __v: 0,
    roll_no: "30",
  };
  return (
    <div className="container">
      <div id="top-head">
        <b>ALL INDIA KHILAFAT COMMITTEE COLLEGE OF EDUCATION</b>
        <br />
        <b>STUDENTS' RECORD - {data.year}</b>
      </div>

      <div className="main">
        <span>
          <b>G.R.No.</b> {data.gr_no}
        </span>
        <span>
          <b>Roll No.</b> {data.roll_no}
        </span>{" "}
        <br />
        <span>
          <b>Name as per GRADUATION Marksheet :</b> {data.name}
        </span>{" "}
        <br />
        <span>
          <b>Father/Husband ’s Name :</b> {data.father}
        </span>
        <span>
          <b>Occupation :</b> {data.father_occ}
        </span>{" "}
        <br />
        <span>
          <b>Mother’s Name :</b> {data.mother}
        </span>
        <span>
          <b>Occupation :</b> {data.mother_occ}
        </span>{" "}
        <br />
        <span>
          <b>Religion :</b> {data.religion}
        </span>
        <span>
          <b>Nationality :{data.nationality}</b>
        </span>
        <span>
          <b>Category :</b> (OPEN/SC/ST/NT/OBC) {data.category}
        </span>
        <br />
        <span>
          <b>Date of Birth :</b> {data.dob}
        </span>
        <span>
          <b>Place of Birth :</b> {data.pob}
        </span>{" "}
        <br />
        <span>
          <b>Community :</b> {data.community}
        </span>
        <span>
          <b>Sex : (M/F)</b> {data.gender}
        </span>
        <span>
          <b>Domicile :</b> {data.domicile}
        </span>{" "}
        <br />
        <span>
          <b>Mother Tongue : </b> {data.mother_tongue}
        </span>
        <span>
          <b> Other languages known :</b> {data.languages}
        </span>
        <br />
        <span>
          <b>Marital Position :</b> {data.marital}
        </span>
        <span>
          <b>Mobile No :</b> {data.mobile}
        </span>{" "}
        <br />
        <span>
          <b>Address (Local) :</b> {data.local_address}
        </span>
        <span>
          <b>Residence Ph. No.</b> {data.res_mobile}
        </span>{" "}
        <br />
        <span>
          <b>Address (Permanent) :</b> {data.permanant_addr}
        </span><br />
        <span>
          <b>Parent’s Mobile No</b> {data.parent_mobile}
        </span>{" "}
        
        <span>
          <b>College last attended :</b> {data.last_college}
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
              <td>{data.graduation.cgpa}</td>
              <td>{data.graduation.subject}</td>
              <td>{data.graduation.year}</td>
              <td>{data.graduation.college}</td>
              <td>{data.graduation.university}</td>
            </tr>
            <tr>
              <td>Post Graduation</td>
              <td>{data.postGraduation.cgpa}</td>
              <td>{data.postGraduation.subject}</td>
              <td>{data.postGraduation.year}</td>
              <td>{data.postGraduation.college}</td>
              <td>{data.postGraduation.university}</td>
            </tr>
          </tbody>
        </table>

        <span>
          <b>Other Qualifications (if any) :</b> {data.other_qualification}
        </span><br />
        <span>
        <b>Special Method -1:</b> {data.special_method_1}
        </span><br />
        <span>
        <b>Medium of Practice Lessons :</b> {data.medium_of_prac}
        </span>
        <span>
        <b> Medium of Answer : </b> {data.medium_of_ans}
        </span><br />
        <span>
        <b> Special Method -2: /Special Field : </b> {data.special_method_2}
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
              <td>{data.bed.sem1.seatno}</td>
              <td>{data.bed.sem1.gpa}</td>
              <td>{data.bed.sem1.grade}</td>
              <td>{data.bed.sem1.totalmarks}</td>
              <td rowSpan='4'>{data.bed.cgpa}</td>
            </tr>

            <tr>
              <td>SEM 2</td>
              <td>{data.bed.sem2.seatno}</td>
              <td>{data.bed.sem2.gpa}</td>
              <td>{data.bed.sem2.grade}</td>
              <td>{data.bed.sem2.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 3</td>
              <td>{data.bed.sem3.seatno}</td>
              <td>{data.bed.sem3.gpa}</td>
              <td>{data.bed.sem3.grade}</td>
              <td>{data.bed.sem3.totalmarks}</td>
            </tr>
            <tr>
              <td>SEM 4</td>
              <td>{data.bed.sem4.seatno}</td>
              <td>{data.bed.sem4.gpa}</td>
              <td>{data.bed.sem4.grade}</td>
              <td>{data.bed.sem4.totalmarks}</td>
            </tr>
          </tbody>
        </table>

        <span>
        <b>  Student’s Signature ________________</b>
        </span><br />

      </div>
    </div>
  );
};

export default DemoPrint;
