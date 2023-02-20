import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {purple} from "@mui/material/colors";

const style = {
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "red"
        }
    }
}
export default function Home(){
    return <div className={"Home"}>
            <Container maxWidth="xs" sx={{mt:"10px"}}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <LocalFloristIcon sx={{backgroundColor : purple[500]}}></LocalFloristIcon>
                    <Typography component="h1" variant="h5" sx={{marginBottom : 2}}>
                        Iris Classifier
                    </Typography>

                        <TextField label="꽃받침 길이" required fullWidth autoFocus sx={{marginBottom : 2}} />
                        <TextField label="꽃받침 폭" required fullWidth autoFocus sx={{marginBottom : 2}} />
                        <TextField label="꽃잎 길이" required fullWidth autoFocus sx={{marginBottom : 2}} />
                        <TextField label="꽃잎 폭" required fullWidth autoFocus sx={{marginBottom : 2}} />

                    <Button variant="contained" sx={{backgroundColor:purple[400], marginTop: 2}}>입력</Button>
                    </Box>
            </Container>
    </div>
}