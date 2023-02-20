import {AppBar} from "@mui/material";
import {Tabs} from "@mui/material";
import {Tab} from "@mui/material";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import {purple} from "@mui/material/colors";

export default function Header(){
    return <div>
        <AppBar position={"static"} sx={{backgroundColor:purple[200]}}>
        <Tabs>
            <Tab label={"home"} icon={<HomeIcon></HomeIcon>}> </Tab>
            <Tab label={"info"} icon={<PersonIcon></PersonIcon>}> </Tab>
        </Tabs>
        </AppBar>
    </div>
}