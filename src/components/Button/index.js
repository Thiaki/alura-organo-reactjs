import React from 'react';

const Button = (props) => {
    return(
        <button type="submit">
            {props.children}
        </button>
    )
}

export default Button;
