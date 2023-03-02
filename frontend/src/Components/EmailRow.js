import React from 'react';
import "./EmailRow.css";
import { CheckBox, Star, LabelImportantOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material';

const EmailRow = ({ id, title, subject, description, time }) => {
    return (
        <div className='email-row'>
            <div className="left-email">
                <CheckBox />
                <Star />
                <LabelImportantOutlined />
            </div>
            <div className="right-email">
                <div className="title-email">
                    <h5>{title}</h5>
                </div>
                <div className="subject-email">
                    <h5>{subject} {description}</h5>
                </div>
                <div className="time-email">
                    <h5>{time}</h5>
                </div>
            </div>
        </div>
    )
}

export default EmailRow
