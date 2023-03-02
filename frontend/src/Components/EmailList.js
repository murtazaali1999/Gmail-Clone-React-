import "./EmailList.css";
import { IconButton, Checkbox } from "@mui/material";

import {
    Settings,
    ArrowDropDown,
    ChevronLeft,
    ChevronRight,
    KeyboardHide,
    MoreVert,
    Redo,
    Inbox,
    People,
    Tag
} from "@mui/icons-material"

import EmailType from "./EmailType";
import EmailRow from "./EmailRow";

const EmailList = () => {
    return (
        <div className="email-list">
            <div className="email-settings">
                <div className="settings-left">
                    <Checkbox />
                    <IconButton><ArrowDropDown /></IconButton>
                    <IconButton><Redo /></IconButton>
                    <IconButton><MoreVert /></IconButton>
                </div>
                <div className="settings-right">
                    <IconButton><ChevronLeft /></IconButton>
                    <IconButton><ChevronRight /></IconButton>
                    <IconButton><KeyboardHide /></IconButton>
                    <IconButton><Settings /></IconButton>
                </div>
            </div>
            <div className="email-type">
                <EmailType Icon={Inbox} name="Primary" color="red" selected={true} />
                <EmailType Icon={People} name="Social" color="grey" />
                <EmailType Icon={Tag} name="Promotions" color="grey" />
            </div>
            <div className="email-main">
                <EmailRow className="emm" title="Title" description="Description" subject="Subject" time="Time" />
                <EmailRow className="emm" title="Title" description="Description" subject="Subject" time="Time" />
                <EmailRow className="emm" title="Title" description="Description" subject="Subject" time="Time" />
            </div>
        </div>
    )
}

export default EmailList
