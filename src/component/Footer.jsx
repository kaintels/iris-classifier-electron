import Container from '@mui/material/Container';
import Link from '@mui/material/Link'
export default function Footer(){
    return <div>
            <Container maxWidth="xs" sx={{mt:5}}>
                <Link href="#">
                    이용약관
                </Link>
            </Container>
    </div>
}