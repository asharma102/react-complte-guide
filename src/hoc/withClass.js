import React from "react";

const withClass = props => (
    <div className={props.classes}>
        {props.children}
        {/* <p style={{ backgroundColor: "red" }}>Hello Coming from HOC</p> */}
    </div >
);

export default withClass;