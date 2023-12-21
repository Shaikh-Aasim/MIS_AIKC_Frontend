import React , {useContext, useState} from "react";
// import logo from '.../imgs/logo.png'
import "./Navbar.css";
import { useNavigate } from "react-router-dom"; 

import yearContext from "../context/details/yearContext";
import detailsContext from "../context/details/detailsContext";


const Navbar = (props) => {
  const navigate = useNavigate();
  const context = useContext(yearContext);
  const {year,setYear, nextClick, prevClick,setPrint} = context;

  const newContext = useContext(detailsContext);
  const {searchTerm, setSearchTerm, getDetails} = newContext;

  

  const handleClick = () => {
    navigate("/");
  };

  const [isMobile, setIsMobile] = useState(false);

  const onChange = (e)=>{
    setSearchTerm(e.target.value);
  }
  const handleYear = (e)=>{
    e.preventDefault();
    getDetails(year)
  }

  let current_year = new Date().getFullYear();
  const onYearChange =(e)=>{
    if (e.target.value <= current_year) {
        setYear(e.target.value);
      }
  }
 
  return (
  <div>
    <nav className="bg-dark">
        <div className="logo">
          <img src="https://media.collegedekho.com/media/img/institute/logo/1445247912.jpg?width=96" alt="logo" />
          {/* <img src="/imgs/logo_new.png" alt="logo" /> */}
          
        </div>
        <div className={isMobile?"nav-links-mobile":"nav-links"}>
        {
          props.page === "StudentDetails" && (
            <>
            <div className="year">
            <i className="fa-solid fa-circle-left" onClick={()=>{prevClick()}}></i>
            <form onSubmit={handleYear}>
            <input id="year" type="number" value={year} onChange={onYearChange} max={current_year} min='1989'/>
            {/* <b>{year}</b> */}
            </form>
            <i className="fa-solid fa-circle-right" onClick={()=>{nextClick()}}></i>
          </div>

          <div className="search">
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input type="search"
                       placeholder=" Search student"
                       name="search"
                       value={searchTerm}
                       onChange={onChange}/>
            </form>
          </div>
          </>
            )}

            {
              
              props.page === "AllDetails" && (
                <>
                <button type="button" className="btn btn-light home-btn" onClick={()=>{setPrint('full')}}>Print</button>
                <button type="button" className="btn btn-light home-btn" onClick={handleClick}>Home</button>
                </>
              )
            }

            {props.page === "Overallsearch" && (
              <>
              <div className="search">
              <form>
                  <input type="search"
                         placeholder=" Search student"
                         name="search"
                         value={searchTerm}
                         onChange={onChange}/>
              </form>
            </div>
              <button type="button" className="btn btn-light home-btn" onClick={handleClick}>Home</button>
              </>

            )
            }

            {
              props.page === "submit" && (
                <>
              <button type="button" className="btn btn-light home-btn" onClick={handleClick}>Home</button>
                </>
              )
            }
          
          
      
        </div>


        <button className="mobile-menu-icon" onClick={()=> setIsMobile(!isMobile)}>
          {isMobile? <i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
