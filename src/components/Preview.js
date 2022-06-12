import React from "react";

function Preview(props) {
    const {personal, updatePersonal} = props;
    return (
        <div className="preview">
            <h1>Preview</h1>
            <p>{personal.firstname}</p>
            <p>{personal.lastname}</p>
            <p>{personal.email}</p>
            <p>{personal.number}</p>
            <p>{personal.address}</p>
        </div>
    );
}

export default Preview;