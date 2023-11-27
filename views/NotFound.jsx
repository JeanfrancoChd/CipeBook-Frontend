import file from "../assets/img/mad-typing.gif";
import React from "react";

const NotFound = ({ message }) => {
    return (
        <center>
            <br />
            <h1>Error: </h1>
            <h2>{message}</h2>
            <br />
            <img src={file} alt="Error" />
        </center>
    );
};

export default NotFound;