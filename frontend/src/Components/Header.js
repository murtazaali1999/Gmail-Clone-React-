import "./Header.css";
import Menu from "@mui/icons-material/Menu"
import Search from "@mui/icons-material/Search"
import ArrowDown from "@mui/icons-material/ArrowDropDown"
import Notifications from "@mui/icons-material/Notifications"
import Apps from "@mui/icons-material/Apps"

import { IconButton, Avatar } from "@mui/material";

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <div className="header-1">
                    <IconButton>
                        <Menu />
                    </IconButton>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="" />
                </div>
                <div className="header-2">
                    <Search className="search" />
                    <input type="text" placeholder="Search mail" />
                    <IconButton className="arrow-down">
                        <ArrowDown />
                    </IconButton>
                </div>
                <div className="header-3">'

                    <IconButton >
                        <Apps className="gy" />
                    </IconButton>

                    <IconButton >
                        <Notifications className="gy" />
                    </IconButton>


                    <IconButton >
                        <Avatar className="av-sz" />
                    </IconButton>

                </div>
            </div>
        </div >
    )
}

export default Header
