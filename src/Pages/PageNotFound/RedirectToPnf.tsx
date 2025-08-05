import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function RedirectToPnf() {
    const navigate = useNavigate();
    
    useEffect(() => {
        navigate("/pnf")
    }, []);

    return (
        <></>
    )
}