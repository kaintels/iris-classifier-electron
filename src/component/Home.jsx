import { TextField, Button } from "@material-ui/core";

export default function Home(){
    return <div className={"Home"}>
        <div>
            <TextField label="꽃받침 길이" />
        </div>
        <div>
            <TextField label="꽃받침 폭" />
        </div>
        <div>
            <TextField label="꽃잎 길이" />
        </div>
        <div>
            <TextField label="꽃잎 폭" />
        </div>
        <Button variant="contained">입력</Button>
    </div>
}