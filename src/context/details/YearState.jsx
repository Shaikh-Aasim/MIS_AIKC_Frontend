import { useContext, useState } from "react";
import YearContext from "./yearContext";
import detailsContext from "./detailsContext";



const YearState = (props) => {
    const context = useContext(detailsContext);
    const { getDetails} = context;

    let current_year = new Date().getFullYear();
    let [year, setYear] = useState(current_year);
    const [print, setPrint] = useState(false);

    const nextClick = ()=>{
        if (!(year===current_year)) {
            setYear(++year)
            
            // console.log(year)
            getDetails(year)
        }
    }

    const prevClick = ()=>{
        if (!(year<=1989)) {
            setYear(--year)
            
            // console.log(year)
            getDetails(year)
        }
    }
  return (
    <YearContext.Provider value={{year,setYear, nextClick , prevClick, print, setPrint}}>
        {props.children}
    </YearContext.Provider>
  )
}

export default YearState
