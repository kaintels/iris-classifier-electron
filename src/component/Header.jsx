import {AppBar, Tabs, Tab} from "@material-ui/core";
import {Home, Person} from "@material-ui/icons";

export default function Header(){
    return <div>
        <AppBar position={"static"}>
        <Tabs>
            <Tab label={"home"} icon={<Home></Home>}> </Tab>
            <Tab label={"info"} icon={<Person></Person>}> </Tab>
        </Tabs>
        </AppBar>
    </div>
}