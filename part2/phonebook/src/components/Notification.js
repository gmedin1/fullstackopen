import React from 'react'

const Notification = ({ message }) => {
    const notificationStyle = {
        fontSize: 1.5 + 'rem',
        padding:  1 + 'rem',
        color: 'green',
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        border: '1px solid green'
    }

    if (message === null) {
        return null
    }

    return(
        <p style={ notificationStyle }>{ message }</p>
    )
}

export default Notification