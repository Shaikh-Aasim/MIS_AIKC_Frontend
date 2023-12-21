// import  from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import DetailsState from "./context/details/DetailsState";
import AllDetails from "./components/AllDetails";
import Form from "./components/Form/Form";
import YearState from "./context/details/YearState";
import Login from "./components/Login";
import OverallSearch from "./components/OverallSearch";
import DemoPrint from "./components/DemoPrint";
import Submit from "./components/Form/Submit";

function App() {
  return (
    <DetailsState>
      <YearState>
        <BrowserRouter>
          {/* <Home></Home> */}

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            {/* <Route exact path="/" element={(props) => <Home key={Date.now()} {...props} />}></Route> */}
            <Route
              exact
              path="/allDetails/:id"
              element={<AllDetails />}
            ></Route>

            <Route exact path="/editDetails/:id" element={<Form />}></Route>

            <Route exact path="/insert" element={<Form></Form>}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route
              exact
              path="/overallsearch"
              element={<OverallSearch />}
            ></Route>
            <Route exact path="/demo" element={<DemoPrint />}></Route>
            <Route exact path="/submit" element={<Submit />}></Route>
          </Routes>
        </BrowserRouter>
      </YearState>
    </DetailsState>
  );
}

export default App;
