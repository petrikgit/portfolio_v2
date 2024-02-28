import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div
          style={{
            justifyContent: "center",
            display: "flex"
          }}
        >
          <hr style={{ width: "40%", color: "#ffffff" }}></hr>
        </div>
        <p>Copyright © 2024 | All rights reserved. </p>
      </div>
    </div>
  );
}

export default Footer;
