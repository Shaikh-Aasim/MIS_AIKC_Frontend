import React, { useContext, useState } from "react";
import "./SidePanel.css";
import { Link, useNavigate } from "react-router-dom";
import detailsContext from "../context/details/detailsContext";
import yearContext from "../context/details/yearContext";


const SidePanel = () => {
  const context = useContext(detailsContext);
  const { setSort} = context;
  const yearcontext = useContext(yearContext);
  const {  setPrint } = yearcontext;

  const [menuBtn, setMenuBtn] = useState("");
  const [sidenav, setSideNav] = useState("openSidenav");

  const handleCloseSidebar = () => {
    setSideNav("closeSidenav");
    setMenuBtn("block");
  };

  const handleOpenSidebar = () => {
    setSideNav("");
    setMenuBtn("none");
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    let confirm = window.confirm("Are you sure you want to Logout ?");
    if (confirm) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="mySidenav" className={`sidenav ${sidenav}`}>
      <a className="closebtn" onClick={handleCloseSidebar}>
        &times;
      </a>

      <a
        className="openBtn"
        onClick={handleOpenSidebar}
        style={{ display: `${menuBtn}` }}
      >
        &#9776;
      </a>

      <Link className="links" to="/insert">
        Insert
      </Link>
      <div className="dropdown">
        <button
          className="btn links dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sort  
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span onClick={()=>{setSort('name')}} className="dropdown-item links" >
            Name
          </span>
          <span onClick={()=>{setSort('gr_no')}} className="dropdown-item links" >
            Gr No
          </span>
          <span onClick={()=>{setSort('roll_no')}} className="dropdown-item links" >
            Roll No
          </span>
          <span onClick={()=>{setSort('mobile')}} className="dropdown-item links" >
            Mobile
          </span>
        </div>
      </div>
      {/* <Link className='links' to='/export'>Export</Link>
      <Link className='links' to='/print'>Print</Link> */}
      

      <Link className="links" to="/overallsearch">
        Find
      </Link>

      {/* <button
        type="button"
        onClick={()=>{setPrint(true)}}
        className="links btn btn-outline-dark"
        style={{ border: "none" }}
      >
        Print
      </button> */}

      <div className="dropdown">
        <button
          className="btn links dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Print  
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <span onClick={()=>{setPrint(true)}} className="dropdown-item links" >
            List
          </span>
          <span onClick={()=>{setPrint('full')}} className="dropdown-item links" >
            Full Details
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleLogout}
        className="links btn btn-outline-dark"
        style={{ border: "none" }}
      >
        Logout
      </button>
    </div>
  );
};

export default SidePanel;
