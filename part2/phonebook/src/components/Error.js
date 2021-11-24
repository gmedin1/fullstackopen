import React from "react";

const Error = ({ error }) => {
    const notificationStyle = {
        fontSize: 1.5 + 'rem',
        padding:  1 + 'rem',
        color: 'red',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        border: '1px solid red'
    }

    if (error === null) {
        return null
    }

    return(
        <p style={ notificationStyle }>{ error }</p>
    )
}

export default Error