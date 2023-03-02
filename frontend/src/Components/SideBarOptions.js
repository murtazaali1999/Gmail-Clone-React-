import { IconButton } from "@mui/material";
import "./SideBarOptions.css";

const SideBarOptions = ({ Icon, name, num, selected }) => {
    const RedTab = () => {

        return (
            <IconButton className="brd reddish button">
                <div className='sidebar-options'>
                    <Icon />
                    <p>{name}</p>
                    {num &&
                        <div className="options-num"><p>{num} </p> </div>
                    }

                </div>
            </IconButton>
        )
    }

    const GreyTab = () => {
        return (
            <IconButton className="brd full hover">
                <div className='sidebar-options'>
                    <Icon />
                    <p>{name}</p>
                    {num &&
                        <div className="options-num"><p>{num} </p> </div>
                    }

                </div>
            </IconButton>
        )
    }

    return (<div>
        {selected && <RedTab />}
        {!selected && <GreyTab />}
    </div>)
}

export default SideBarOptions