import React from "react";
import "../styles/Homepage.css";
import { useAppContext } from "../context/AppContext";
import Button from "./button/Button";


const Homepage = () => {
  const {setCurrentPage} = useAppContext()
  const handleNext = () => {
    setCurrentPage('form')
  } 
  return (
    <div className="homepage">
      <div className="homepage__headings">
        <h4>We Have</h4>
        <h1>A Special Deal</h1>
        <h2>For You</h2>
        <Button rotate={true} onClick={handleNext}/>
      </div>
    </div>
  );
};

export default Homepage;
