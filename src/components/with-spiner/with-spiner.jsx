import React from "react";
import "./with-spiner.css";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="loader"></div>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;

// const WithSpinner = function(){
//   const WrappedComponent = function(isLoading, ...otherProps){
//     return isLoading ?( <div className="loader"></div>) :
//     <WrappedComponent  {...otherProps}/>
//   }
// }
