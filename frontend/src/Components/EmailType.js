import React from 'react';
import { IconButton } from '@mui/material';
import "./EmailType.css";

const EmailType = ({ Icon, name, color, selected }) => {
    return (
        <div className='whole-type'>
            <div className='email-type' style={{
                color: `${selected ? color : 'gray'}`,
                borderBottom: `3px solid ${color}`
            }}
            >
                <Icon />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default EmailType