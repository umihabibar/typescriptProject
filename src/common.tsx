import Button  from "@mui/material/Button";
import { Link } from "react-router-dom"
export default function Common() {
    return (
        <>
            <Link to="/">
                <Button variant="contained" >Home</Button>
            </Link>
            <Link to="/about">
                <Button variant="text">About</Button>
            </Link>
            <Link to="/setting">
                <Button variant="outlined" >Setting</Button>
            </Link>
        </>
    );
}

