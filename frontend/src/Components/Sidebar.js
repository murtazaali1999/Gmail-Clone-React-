import "./Sidebar.css"

import {
    Inbox,
    Star,
    Snooze,
    Send,
    LabelImportant as Important,
    Drafts as Draft,
    Add as Plus,
    ArrowDropDown,
    Person as Contacts,
    VideoCallRounded as VideoCall,
    Phone as VoiceCall
} from "@mui/icons-material"

import { IconButton } from "@mui/material";
import SideBarOptions from "./SideBarOptions";
import { useRef } from "react";


const Sidebar = () => {
    const selected = useRef(true);

    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <IconButton className="compose-btn">
                    <Plus />
                    <p className="compose">Compose</p>
                </IconButton>
                <div className="sidebar-opt">
                    <SideBarOptions name="Inbox" Icon={Inbox} num="33" selected={true} />
                    <SideBarOptions name="Starred" Icon={Star} />
                    <SideBarOptions name="Snoozed" Icon={Snooze} />
                    <SideBarOptions name="Important" Icon={Important} />
                    <SideBarOptions name="Sent" Icon={Send} />
                    <SideBarOptions name="Drafts" Icon={Draft} />
                </div>
                <div className="more-down">
                    <IconButton className="more-btn">
                        <ArrowDropDown />
                        <p className="more">More</p>
                    </IconButton>
                </div>
                <div className="sidebar-contacts">
                    <IconButton>
                        <Contacts />
                    </IconButton>
                    <IconButton>
                        <VideoCall />
                    </IconButton>

                    <IconButton>
                        <VoiceCall />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
