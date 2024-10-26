import React from "react";
import "./ContentArea.css";

function ContentArea() {
  return (
    <div className="content-area">
      <div className="alert-row">
        <div className="alert alert-critical">!</div>
        <div className="alert alert-warning">!</div>
      </div>
      <div className="alert-row">
        <div className="alert alert-warning">!</div>
        <div className="alert alert-warning">!</div>
      </div>
      <div className="alert-row">
        <div className="alert alert-warning">!</div>
      </div>
    </div>
  );
}

export default ContentArea;
