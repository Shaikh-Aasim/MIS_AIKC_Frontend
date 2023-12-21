import React, { useContext, useEffect, useState } from "react";
import "./Form.css";
import detailsContext from "../../context/details/detailsContext";
import { useNavigate, useParams } from "react-router-dom";

const htmlForm = () => {
  let current_year = new Date().getFullYear();
  const context = useContext(detailsContext);
  const { oneDetail, getSpecificDetails, setOneDetail, editDetails } = context;
  const navigate = useNavigate();
  const { id } = useParams();

  const onlyAlphabet = (e) => {
    // Check if the entered key is a letter, space, or the backspace key
    if (
      !(e.key.length === 1 && /^[a-zA-Z\s]$/i.test(e.key)) &&
      e.key !== "Backspace"
    ) {
      e.preventDefault(); // Prevent entering non-letter or non-space characters
    }
  };

  useEffect(() => {
    if (!id) {
      console.log("id is not fetch");
    } else {
      console.log("id is fetch", id);
      getSpecificDetails(id);
      console.log(oneDetail);
    }
  }, []);

  const { addDetails } = context;
  const [details, setDetails] = useState({
    name: "",
    year: current_year,
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

  const handleClick = (e) => {
    e.preventDefault();
    if (!id) {
      addDetails(details);
      setDetails({
        year: "",
        roll_no: "",
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

      navigate('/submit');
    } else {
      let confirm = window.confirm("Are You Sure To Update Data ?");
      if (confirm) {
        editDetails(id, oneDetail);
      }
      setOneDetail({
        year: "",
        name: "",
        gr_no: "",
        roll_no:"",
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
        abcid: "",
      });
    }
    navigate("/");
  };

  const onChange = (e) => {
    if (!id) {
      setDetails({
        ...details,
        [e.target.name]: e.target.value,
        year: current_year,
      });

      const { name, value } = e.target;

      // Split the 'name' attribute to access the nested property
      const nameParts = name.split(".");

      // Create a copy of the 'details' state
      const updatedDetails = { ...details };

      // Update the nested property with the new value
      let currentObj = updatedDetails;
      for (let i = 0; i < nameParts.length - 1; i++) {
        currentObj = currentObj[nameParts[i]];
      }
      currentObj[nameParts[nameParts.length - 1]] = value;

      // Update the state with the new details object
      setDetails(updatedDetails);
    } else {
      setOneDetail({ ...oneDetail, [e.target.name]: e.target.value });

      const { name, value } = e.target;

      // Split the 'name' attribute to access the nested property
      const nameParts = name.split(".");

      // Create a copy of the 'details' state
      const updatedDetails = { ...oneDetail };

      // Update the nested property with the new value
      let currentObj = updatedDetails;
      for (let i = 0; i < nameParts.length - 1; i++) {
        currentObj = currentObj[nameParts[i]];
      }
      currentObj[nameParts[nameParts.length - 1]] = value;

      // Update the state with the new details object
      // setOneDetail( updatedDetails);
      setOneDetail( updatedDetails);
      // console.log(oneDetail.bed.cgpa)
    }
  };
  return (
    <div>
      {/* htmlForm */}

      {id ? (
        <div>
          <div className="container-fluid bg-dark text-light py-3">
            <header className="text-center">
              <h1 className="display-6">Edit Student Details</h1>
              <button
                type="button"
                className="btn btn-light home-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </header>
          </div>
          <section
            className="container my-2 w-100 p-2"
            style={{ background: "#fff" }}
          >
            <form className="row g-3 p-3" onSubmit={handleClick}>
              <h2>Personal Info</h2>
              <div className="col-md-4">
                <label htmlFor="year" className="form-label">
                  Year :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="eyear"
                  name="year"
                  onChange={onChange}
                  value={oneDetail.year}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="name" className="form-label">
                  Name (As per Graduation marksheet)
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={onChange}
                  value={oneDetail.name}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="roll_no" className="form-label">
                  Roll Number :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="roll_no"
                  name="roll_no"
                  onChange={onChange}
                  value={oneDetail.roll_no}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="gr_no" className="form-label">
                  GR Number :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="name"
                  name="gr_no"
                  onChange={onChange}
                  value={oneDetail.gr_no}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="father" className="form-label">
                  Father/ Husband name
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="father"
                  name="father"
                  value={oneDetail.father}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="father_occ" className="form-label">
                  Father Occupation
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="father_occ"
                  name="father_occ"
                  aria-describedby="input GroupPrepend2"
                  value={oneDetail.father_occ}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother" className="form-label">
                  Mother Name
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother"
                  name="mother"
                  value={oneDetail.mother}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother_occ" className="form-label">
                  Mother Occupation
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother_occ"
                  name="mother_occ"
                  value={oneDetail.mother_occ}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="religion" className="form-label">
                  Religion
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="religion"
                  name="religion"
                  value={oneDetail.religion}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="nationality"
                  value="INDIAN"
                  name="nationality"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="adhaar" className="form-label">
                  Adhaar Number
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  pattern="[1-9]{1}[0-9]{11}"
                  title="Please enter a valid 12-digit Aadhaar number"
                  className="form-control"
                  id="adhaar"
                  name="adhaar"
                  value={oneDetail.adhaar}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={oneDetail.category}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
                </label>
                <input
                  onChange={onChange}
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                  value={oneDetail.dob}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="pob" className="form-label">
                  Place Of Birth
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="pob"
                  name="pob"
                  value={oneDetail.pob}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="community" className="form-label">
                  Community
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="community"
                  name="community"
                  value={oneDetail.community}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  onChange={onChange}
                  className="form-control form-select"
                  id="gender"
                  name="gender"
                  value={oneDetail.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="domicile" className="form-label">
                  Domicile
                </label>
                <select
                  onChange={onChange}
                  className="form-control form-select"
                  id="domicile"
                  name="domicile"
                  value={oneDetail.domicile}
                >
                  <option value="">Select Domicile</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="mother_tongue" className="form-label">
                  Mother Toungue
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother_tongue"
                  name="mother_tongue"
                  value={oneDetail.mother_tongue}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="languages" className="form-label">
                  Other Languages Known
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s,]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="languages"
                  name="languages"
                  value={oneDetail.languages}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="marital" className="form-label">
                  Marital Position
                </label>
                <select
                  onChange={onChange}
                  className="form-control"
                  id="marital"
                  name="marital"
                  value={oneDetail.marital}
                >
                  <option value="">Select Marital Position</option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="parent_mobile" className="form-label">
                  Parent Mobile Number
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Please enter valid phone number"
                  className="form-control"
                  id="parent_mobile"
                  name="parent_mobile"
                  value={oneDetail.parent_mobile}
                />
              </div>

              <div className="col-md-8">
                <label htmlFor="local_address" className="form-label">
                  Local Address
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="local_address"
                  name="local_address"
                  value={oneDetail.local_address}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="mobile" className="form-label">
                  Your Mobile Number
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Please enter valid phone number"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={oneDetail.mobile}
                />
              </div>

              <div className="col-md-8 ">
                <label htmlFor="permanant_addr" className="form-label">
                  Permenant Address
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="permanant_addr"
                  name="permanant_addr"
                  value={oneDetail.permanant_addr}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="res_mobile" className="form-label">
                  Resident Phone No.
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  pattern="[1-9]{1}[0-9]{9}"
                  title="Please enter valid phone number"
                  className="form-control"
                  id="res_mobile"
                  name="res_mobile"
                  value={oneDetail.res_mobile}
                />
              </div>

              <h2>Eductaional Info</h2>
              <div className="table-responsive">
                <table className="table table-active table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Degree</th>
                      <th scope="col">Graduation</th>
                      <th scope="col">Post Graduation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CGPA%</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="graduation.cgpa"
                          name="graduation.cgpa"
                          value={oneDetail.graduation?.cgpa}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="postGraduation.cgpa"
                          name="postGraduation.cgpa"
                          value={oneDetail.postGraduation?.cgpa}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Subject</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.subject"
                          name="graduation.subject"
                          value={oneDetail.graduation?.subject}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.subject"
                          name="postGraduation.subject"
                          value={oneDetail.postGraduation?.subject}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Year</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="graduation.year"
                          name="graduation.year"
                          value={oneDetail.graduation?.year}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="postGraduation.year"
                          name="postGraduation.year"
                          value={oneDetail.postGraduation?.year}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>College</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.college"
                          name="graduation.college"
                          value={oneDetail.graduation?.college}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.college"
                          name="postGraduation.college"
                          value={oneDetail.postGraduation?.college}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>University</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.university"
                          name="graduation.university"
                          value={oneDetail.graduation?.university}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.university"
                          name="postGraduation.university"
                          value={oneDetail.postGraduation?.university}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>Details of B.Ed Result</h4>
              <div className="table-responsive">
                <table className="table table-active table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Semester</th>
                      <th scope="col">SEM 1</th>
                      <th scope="col">SEM 2</th>
                      <th scope="col">SEM 3</th>
                      <th scope="col">SEM 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Seat No</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem1.seatno"
                          name="bed.sem1.seatno"
                          value={oneDetail.bed?.sem1?.seatno}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem2.seatno"
                          name="bed.sem2.seatno"
                          value={oneDetail.bed?.sem2?.seatno}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem3.seatno"
                          name="bed.sem3.seatno"
                          value={oneDetail.bed?.sem3?.seatno}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem4.seatno"
                          name="bed.sem4.seatno"
                          value={oneDetail.bed?.sem4?.seatno}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>GPA</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem1.gpa"
                          name="bed.sem1.gpa"
                          value={oneDetail.bed?.sem1?.gpa}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem2.gpa"
                          name="bed.sem2.gpa"
                          value={oneDetail.bed?.sem2?.gpa}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem3.gpa"
                          name="bed.sem3.gpa"
                          value={oneDetail.bed?.sem3?.gpa}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem4.gpa"
                          name="bed.sem4.gpa"
                          value={oneDetail.bed?.sem4?.gpa}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Grade</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem1.grade"
                          name="bed.sem1.grade"
                          value={oneDetail.bed?.sem1?.grade}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem2.grade"
                          name="bed.sem2.grade"
                          value={oneDetail.bed?.sem2?.grade}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem3.grade"
                          name="bed.sem3.grade"
                          value={oneDetail.bed?.sem3?.grade}
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem4.grade"
                          name="bed.sem4.grade"
                          value={oneDetail.bed?.sem4?.grade}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Total Marks</td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem1.totalmarks"
                          name="bed.sem1.totalmarks"
                          value={oneDetail.bed?.sem1?.totalmarks}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem2.totalmarks"
                          name="bed.sem2.totalmarks"
                          value={oneDetail.bed?.sem2?.totalmarks}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem3.totalmarks"
                          name="bed.sem3.totalmarks"
                          value={oneDetail.bed?.sem3?.totalmarks}
                        />
                      </td>
                      <td>
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem4.totalmarks"
                          name="bed.sem4.totalmarks"
                          value={oneDetail.bed?.sem4?.totalmarks}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>CGPA</td>
                      <td colSpan="4">
                        <input
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.cgpa"
                          name="bed.cgpa"
                          value={oneDetail.bed?.cgpa}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-4">
                <label htmlFor="other_qualification" className="form-label">
                  Other Qualification's (if any)
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="other_qualification"
                  name="other_qualification"
                  value={oneDetail.other_qualification}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="last_college" className="form-label">
                  College last attended
                </label>
                <input
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="last_college"
                  name="last_college"
                  value={oneDetail.last_college}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="special_method_1" className="form-label">
                  Special method-1
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="special_method_1"
                  name="special_method_1"
                  value={oneDetail.special_method_1}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="medium_of_prac" className="form-label">
                  Medium of Practice Lesson
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="medium_of_prac"
                  name="medium_of_prac"
                  value={oneDetail.medium_of_prac}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="medium_of_ans" className="form-label">
                  Medium Of Answer
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="medium_of_ans"
                  name="medium_of_ans"
                  value={oneDetail.medium_of_ans}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="special_method_2" className="form-label">
                  Special Method-2/ Special Field
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="special_method_2"
                  name="special_method_2"
                  value={oneDetail.special_method_2}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="practicing_school" className="form-label">
                  Name of Practicing School
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="practicing_school"
                  name="practicing_school"
                  value={oneDetail.practicing_school}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="abcid" className="form-label">
                  abcid
                </label>
                <input
                  onChange={onChange}
                  type="number"
                  className="form-control"
                  id="abcid"
                  name="abcid"
                  value={oneDetail.abcid}
                />
              </div>

              <div className="col-12">
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  type="submit"
                  value="Update"
                  className="btn btn-dark"
                ></input>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <div>
          <div className="container-fluid bg-dark text-light py-3">
            <header className="text-center ">
              <h1 className="display-6">Student Form</h1>
              <button
                type="button"
                className="btn btn-light home-btn"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </header>
          </div>
          <section
            className="container my-2 w-100 p-2"
            style={{ background: "#fff" }}
          >
            <form className="row g-3 p-3" onSubmit={handleClick}>
              <h2>Personal Info</h2>
              <div className="col-md-4">
                <label htmlFor="name" className="form-label">
                  Name (As per Graduation marksheet)
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="roll_no" className="form-label">
                  Roll Number :
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="roll_no"
                  name="roll_no"
                  onChange={onChange}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="father" className="form-label">
                  Father/ Husband name
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="father"
                  name="father"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="father_occ" className="form-label">
                  Father Occupation
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="father_occ"
                  name="father_occ"
                  aria-describedby="input required onChange={onChange}GroupPrepend2"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother" className="form-label">
                  Mother Name
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother"
                  name="mother"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="mother_occ" className="form-label">
                  Mother Occupation
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother_occ"
                  name="mother_occ"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="religion" className="form-label">
                  Religion
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="religion"
                  name="religion"
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="nationality"
                  value="INDIAN"
                  name="nationality"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="adhaar" className="form-label">
                  Adhaar Number
                </label>
                <input
                  required
                  onChange={onChange}
                  type="text"
                  pattern="[1-9]{1}[0-9]{11}"
                  title="Please enter a valid 12-digit Aadhaar number"
                  className="form-control"
                  id="adhaar"
                  name="adhaar"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="dob" className="form-label">
                  Date Of Birth
                </label>
                <input
                  required
                  onChange={onChange}
                  type="date"
                  className="form-control"
                  id="dob"
                  name="dob"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="pob" className="form-label">
                  Place Of Birth
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="pob"
                  name="pob"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="community" className="form-label">
                  Community
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="community"
                  name="community"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  required
                  onChange={onChange}
                  className="form-control form-select"
                  id="gender"
                  name="gender"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="domicile" className="form-label">
                  Domicile
                </label>
                <select
                  required
                  onChange={onChange}
                  className="form-control form-select"
                  id="domicile"
                  name="domicile"
                >
                  <option value="">Select Domicile</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="mother_tongue" className="form-label">
                  Mother Toungue
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mother_tongue"
                  name="mother_tongue"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="languages" className="form-label">
                  Other Languages Known
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s,]+"
                  title="Please enter only alphabets and commas"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="languages"
                  name="languages"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="marital" className="form-label">
                  Marital Position
                </label>
                <select
                  required
                  onChange={onChange}
                  className="form-control form-select"
                  id="marital"
                  name="marital"
                >
                  <option value="">Select Marital Position</option>
                  <option value="married">Married</option>
                  <option value="unmarried">Unmarried</option>
                </select>
              </div>

              {/* <div className="col-md-4 ">
                <label htmlFor="parent_mobile" className="form-label">
                  Parent Mobile Number
                </label>
                <input 
onKeyDown={onlyAlphabet}
                  required
                  onChange={onChange}
                  type="number"
                  className="form-control"
                  id="parent_mobile"
                  name="parent_mobile"
                />
              </div> */}

              <div className="col-md-4">
                <label htmlFor="parent_mobile" className="form-label">
                  Parent Mobile Number
                </label>
                <div className="input-group flex-nowrap">
                  <span
                    className="input-group-text gap-1"
                    id="addon-wrapping"
                    style={{ border: "1px solid black" }}
                  >
                    <img
                      className="img-fluid"
                      style={{ width: "auto", height: "25px" }}
                      src={
                        "data:image/png;base64,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"
                      }
                      alt=""
                    />
                    +91
                  </span>
                  <input
                    required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="parent_mobile"
                    name="parent_mobile"
                    pattern="[1-9]{1}[0-9]{9}"
                    maxLength={10}
                    title="Please enter valid phone number"
                  />
                </div>
              </div>

              <div className="col-md-8">
                <label htmlFor="local_address" className="form-label">
                  Local Address
                </label>
                <input
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="local_address"
                  name="local_address"
                />
              </div>

              {/* <div className="col-md-4">
                <label htmlFor="mobile" className="form-label">
                  Your Mobile Number
                </label>
                <input 
onKeyDown={onlyAlphabet}
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                />
              </div> */}

              <div className="col-md-4">
                <label htmlFor="mobile" className="form-label">
                  Your Mobile Number
                </label>
                <div className="input-group flex-nowrap">
                  <span
                    className="input-group-text gap-1"
                    id="addon-wrapping"
                    style={{ border: "1px solid black" }}
                  >
                    <img
                      className="img-fluid"
                      style={{ width: "auto", height: "25px" }}
                      src={
                        "data:image/png;base64,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"
                      }
                      alt=""
                    />
                    +91
                  </span>
                  <input
                    required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="mobile"
                    name="mobile"
                    pattern="[1-9]{1}[0-9]{9}"
                    maxLength={10}
                    title="Please enter valid phone number"
                  />
                </div>
              </div>

              <div className="col-md-8 ">
                <label htmlFor="permanant_addr" className="form-label">
                  Permenant Address
                </label>
                <input
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="permanant_addr"
                  name="permanant_addr"
                />
              </div>
              {/* <div className="col-md-4">
                <label htmlFor="res_mobile" className="form-label">
                  Resident Phone No.
                </label>
                <input 
onKeyDown={onlyAlphabet}
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="res_mobile"
                  name="res_mobile"
                />
              </div> */}

              <div className="col-md-4">
                <label htmlFor="res_mobile" className="form-label">
                  Resident Phone No.
                </label>
                <div className="input-group flex-nowrap">
                  <span
                    className="input-group-text gap-1"
                    id="addon-wrapping"
                    style={{ border: "1px solid black" }}
                  >
                    <img
                      className="img-fluid"
                      style={{ width: "auto", height: "25px" }}
                      src={
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAABO1BMVEX5kz8Vj0b////4lD73lEH3fAAAdgAWj0cVj0T///3///z///r///n///cAAG0AAHIwMIYAAHcAAGr8+/7///QAAGX/+/8AAH4dG4H//+4cInYoLov69vjw8/rd3uP89/8AAGGWm7bY2eAAAFcmLIOkqcXJx92IjL5ucpxna5pUV5RZXpdjaJ7e4+5GRYgJCXQqKI4fIYHMz9giIowrNHlHSpgjKXYtMZJcXJ5TT488Q3q/vtWAf6UAAI6ursQzM35XWo3BwsRiZIzl6OZyca7U1+mBfbs/QIV5dqdsZquJiajJx9alrLsXE5IdFop/hJqdnrEdIn4jKm+Hkq7n7tmYmr+cn8AaFGu7tNnY2thBPo+2ucF+frDDzt5EU4ahotIAAE3BxeR8fZ6foauEjJwzN3Otp8xfWaQ6OZXF+CG3AAAJHUlEQVR4nO3ba0/bShrAcfbZ63g8sR0bcrEdiLFzgTjE5lJo3JjWTQl2yZKyCS0J52x7Wg7f/xOs09XRSsx7D1qen1SBoC8e/eUZX3A2NhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELoBfszemrjL+gp0Yfps/RX9NQGoKewCQ+b8J5DEyITIhE9/0aiRPQw8Cya6FtbLGcwpudETwPPoYmuS2z9NT9ECFAqehx4Dk0INFrtTndvb7/XbbcaoscBwU30fP/wm/3qQX0wCGaDgRsos/6iwaieHz0gbGsR2MSwdBbuaYF5WD08Ojrun528qgYz8/Dg1GEgUyJsaxHYZNtonG2aJ+br/WH05gxGeqylw/MLMz5RegnI0ktroucbKlto5qA+qIwajj3yaZs5nv7Wah4cVgezigeyDpKY5SOoCbGo/e5ArR4n7+MxXax/8oFKhLaJU+/4F1P1oGsbRBZzFhLUhFL/IlCrntOSbZlMJJnAJclPxCmRdJI5H6/U6Z5NQczyEbWf+PWgWr/6Bv9Mtij85hMKxyBDa5mvKjuF0/q07t5uGy9n7Ug6s+uH1Wj0e1Lzrw3YalznKUwgNLIoYU271jgbRVO3L0sCphPTRCf6+WwWjaCmM4j8/KT7iRBQ8pVSB6iNm1L+nbSMBtV3Yq5RhDShzWk8y+yUMGD2HjA4blBaBjLu5DtNX5es/H9Yb6uq5gmYTkwTGmrmSaUDyUTWZUg9Qm7m8K8SkG9zRuYLus2siV47nX56pQm51BfRRO671cW5LcP43LKYdZuAZ9Jxya9VPzP/lm2TpGMDHe+164N92Cr+fCyiSaaZ5zasb4PHZwmF6AzGO05WGrd2LTtu6rXGo0+3DQbJo6uFRvHziWgSm6a/nFsSEBJqCTRKC1pKs/J4pZColICz+YXmVyn2YunPBucCttmim+iEhgdq/RqSjkfBkkalIUwUa7/X2mz1O8lmCt5mCBaTFpEFi/qRNpYLnlDAcSLBxA2mpxKF4d0yXxhp2Usq0agyLLfKWS+g8505MOrFISPs4sodNIsesPgmRLdPBmc3fn7fW2Mrd5RApHgjJVRayn0lKw2vSylJvCDVqWSRcXTh/ih4QCi+iUScaZCuH0Xr2xZtKfkqSrXhL1F3NPs46XVH5Wu9eVAf14z14xNKLk+unIInFLB25F+Dejb60MwkYAbY3XI8bu6M617zovnRDZXre3dzZRv5dZy+vGkPh7NpVvSExTchPXfmQY2MeifRIrRh3C+l3u1Dd189fe+V375Xjn1mDedR/G3JKJkH1VXRExa/n8C+GysZkSmjWU/bMaPx8vT1sD975arq64eT7jJMp5tKJ8yPqO3asPxo9gqeUEAT684dxI38nk/P10cynLj/NiOv56pHpqqavdGqunk3GVpEZpKxRf247u7nlzHFzlj42rHV2UqSjf8+BUgcpzX+2rw+M2M1Nzu/bob3Y8dJfv5Wyk/Yp8GZXvQTAxFNLh/aq/fH8e1uWVMqpfJB/U4d/GwSPz7WNU1RlNLmThCf9VbzUd+8sKSCn7eJaNL+43s/zN5mo3uv2Tdjc32cnDa9+1EWZqG//vV6zVy+gOOEWBeu2bUNgzGW77NO+1QpvVtcuuaRaqqDzuK8pFzOHUKpTOmW0dg3zf2CJxR03illkkQYcdqHpZ13o/vVp9HFwHRN99irR6GXZ1HnXyDfgo3Pmjr7/z/vAPTcYC4bxEmDs5uPDrW72rvWjtc7U/u95dQ51r7ZNWfRvPhx7euyFbmzSeETFt6E/hoE43A+Gfn5dT6Bebm6fNj9+iPfUxZeP79L/lgpLYDmt4rjj9EiC6vTZdETFn+/I32pBJG/3j4ti/gn2spqbo56ne7DyWK1H813PHtS6vsG03UKxH8/O3AKnlDMfbF7vvSpTAwyv537kJYXSyVTWptfg+FuK1XmpJHeLoBJFvjZa/Oo4AFBQBMJuubgqgcyOHe/2YY8L6VGdX9YGmphOTw2pUjzgNg3vyREZxcVdxYVPCAIWDuUZhW13qR6esPWT2R3F7AqJb29YSl8jJzdOVzvNGBbtqO5QTqzu9K4+Aeyxe8nOpzEd/awnYBFmKOEkCiRpKStzfFkBp2qDd5BYpBtw08zuzo4ewHPY0m+uz4cHE6+SDJQ4l/kG8t8Rv3dsKWMhzuWfesRw7lLLGrl1y97rpaxl9CEUnYXV4ffLEmyz31q6VqDjGZSq+ww5avROtHzy9eewUgy/3zr7uUHU8ETCnqvIFPU+psIaNcGncybBL5HJNEYdOYUopFs0UYX2Pm0qmoOvIC1s2ZBVFWDzGhv14gsvdZl2HNqUAK47+YbTp9sScxOYTSNpwIe2oOgJoy8HtTToc50WUrHEoF6/k/7+V6BLrd+A8LA/vz9MDiXhLxsIeRv6DrzbwdKczlJaklKLL1xk6+hAdGlDs0v6yeWYUdOdPVpYDMhLyqJek/JKZvVeuU7SUFnMAph/Z4ShWF+c0O3m7B/Oz1Rb8fylpDZRL3jR51goFaH44zqBl1Bfsa9BFmClMp5Gfv6Kj6Mfdl4UU10ifjn+UY7sdvvfKm5Prt8oDJAmzZOvWS/Gld/nqbFDCfsnWEC8kozD38cVt42sq23vvTBaISwtNI3t2pgamm+64g4D6+JfN/eyNTqIHbPo3HzzSk80MfK9X16rB6507sQBH6SR2ATfQvYKJ4Gh4f1II7bv38PjoLpzJxpj0O6JYt6ORbEHids/Yp51olL05n7KhgMXg1mtwcXk5DmN0Uv9HMZf9DDX7v7F+pJ3O9NvHC78D/7cZ5BE6BUopZl2bpM1+ce4R9/E9+EUn17/WlAIkkMtraJ8MPkGTRZP3v7+WX9+UjGQNQnVP7nOTR5brAJD5vwNv6Gntr4B3pq4+/oKTxOeBt/Qk9hEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424WETHjbhYRMeNuFhEx424f0HWJwXT9Y2dpIAAAAASUVORK5CYII="
                      }
                      alt=""
                    />
                    +91
                  </span>
                  <input
                    required
                    onChange={onChange}
                    type="number"
                    className="form-control"
                    id="res_mobile"
                    name="res_mobile"
                    pattern="[1-9]{1}[0-9]{9}"
                    maxLength={10}
                    title="Please enter valid Phone number"
                  />
                </div>
              </div>

              <h2>Eductaional Info</h2>
              <div className="table-responsive">
                <table className="table table-active table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Degree</th>
                      <th scope="col">Graduation</th>
                      <th scope="col">Post Graduation (optional)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CGPA%</td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="graduation.cgpa"
                          name="graduation.cgpa"
                        />
                      </td>
                      <td>
                        <input
                          
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="postGraduation.cgpa"
                          name="postGraduation.cgpa"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Subject</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.subject"
                          name="graduation.subject"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.subject"
                          name="postGraduation.subject"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Year</td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="graduation.year"
                          name="graduation.year"
                        />
                      </td>
                      <td>
                        <input
                          
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="postGraduation.year"
                          name="postGraduation.year"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>College</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.college"
                          name="graduation.college"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.college"
                          name="postGraduation.college"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>University</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="graduation.university"
                          name="graduation.university"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="postGraduation.university"
                          name="postGraduation.university"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* <h4>Details of B.Ed Result</h4>
              <div className="table-responsive">
                <table className="table table-active table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Semester</th>
                      <th scope="col">SEM 1</th>
                      <th scope="col">SEM 2</th>
                      <th scope="col">SEM 3</th>
                      <th scope="col">SEM 4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Seat No</td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem1.seatno"
                          name="bed.sem1.seatno"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem2.seatno"
                          name="bed.sem2.seatno"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem3.seatno"
                          name="bed.sem3.seatno"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem4.seatno"
                          name="bed.sem4.seatno"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>GPA</td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem1.gpa"
                          name="bed.sem1.gpa"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem2.gpa"
                          name="bed.sem2.gpa"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem3.gpa"
                          name="bed.sem3.gpa"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem4.gpa"
                          name="bed.sem4.gpa"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Grade</td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem1.grade"
                          name="bed.sem1.grade"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem2.grade"
                          name="bed.sem2.grade"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem3.grade"
                          name="bed.sem3.grade"
                        />
                      </td>
                      <td>
                        <input
                          onKeyDown={onlyAlphabet}
                          pattern="[A-Za-z\s]+"
                          title="Only Alphabets are allowed"
                          required
                          onChange={onChange}
                          type="text"
                          className="form-control"
                          id="bed.sem4.grade"
                          name="bed.sem4.grade"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Total Marks</td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem1.totalmarks"
                          name="bed.sem1.totalmarks"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem2.totalmarks"
                          name="bed.sem2.totalmarks"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem3.totalmarks"
                          name="bed.sem3.totalmarks"
                        />
                      </td>
                      <td>
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.sem4.totalmarks"
                          name="bed.sem4.totalmarks"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>CGPA</td>
                      <td colSpan="4">
                        <input
                          required
                          onChange={onChange}
                          type="number"
                          className="form-control"
                          id="bed.cgpa"
                          name="bed.cgpa"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div> */}

              <div className="col-md-4">
                <label htmlFor="other_qualification" className="form-label">
                  Other Qualification's (if any)
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="other_qualification"
                  name="other_qualification"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="last_college" className="form-label">
                  College last attended
                </label>
                <input
                onKeyDown={onlyAlphabet}
                pattern="[A-Za-z\s]+"
                title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="last_college"
                  name="last_college"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="special_method_1" className="form-label">
                  Special method-1
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="special_method_1"
                  name="special_method_1"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="medium_of_prac" className="form-label">
                  Medium of Practice Lesson
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="medium_of_prac"
                  name="medium_of_prac"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="medium_of_ans" className="form-label">
                  Medium Of Answer
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="medium_of_ans"
                  name="medium_of_ans"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="special_method_2" classNaasme="form-label">
                  Special Method-2/ Special Field
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="special_method_2"
                  name="special_method_2"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="practicing_school" className="form-label">
                  Name of Practicing School
                </label>
                <input
                  onKeyDown={onlyAlphabet}
                  pattern="[A-Za-z\s]+"
                  title="Only Alphabets are allowed"
                  required
                  onChange={onChange}
                  type="text"
                  className="form-control"
                  id="practicing_school"
                  name="practicing_school"
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="abcid" className="form-label">
                  abcid
                </label>
                <input
                  onChange={onChange}
                  type="number"
                  className="form-control"
                  id="abcid"
                  name="abcid"
                  value={oneDetail.abcid}
                />
              </div>

              <div className="col-12">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-dark"
                ></input>
              </div>

              
            </form>
          </section>
        </div>
      )}

      {/* htmlForm -end */}
    </div>
  );
};

export default htmlForm;
