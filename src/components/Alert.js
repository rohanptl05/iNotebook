import React from "react";

const Alert = (props) => {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
       {props.massege}
      </div>
    </div>
  );
};

export default Alert;
