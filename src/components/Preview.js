import React from "react";

function Preview(props) {
    const {personal, updatePersonal} = props;
    return (
        <div className="preview">
            <h1>Preview</h1>
            <h2>{personal.firstname}</h2>
        </div>
    );
}

export default Preview;