import React from 'react';

const Button = ({text, onClick}) => (
    <div>
        <button onClick={onClick}>{text}</button>
    </div>
);

export default Button;