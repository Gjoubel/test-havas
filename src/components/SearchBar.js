import React from "react";
import '../App.scss';

export default function SearchBar({keyword,setKeyword}) {
  const BarStyling = {
      width:"20rem",
      background:"#32383e",
      border:"1px solid white",
      borderRadius:"1rem",
      color:"white",
      padding:"0.5rem"
    };
  return (
    <div className='container-search'>
        <input
            style={BarStyling}
            key="people"
            value={keyword}
            placeholder={"Search a character"}
            onChange={(e) => setKeyword(e.target.value)}
        />
    </div>
  );
}
