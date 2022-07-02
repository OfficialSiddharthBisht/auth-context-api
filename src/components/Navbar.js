import React , {useContext} from "react";
import { AuthContext } from "../context/UserContext";
import {Box , Button} from '@chakra-ui/react'

function Navbar(){
    const {isAuth, toggleAuth} = useContext(AuthContext);
    return(
        <Box display='flex' flexDirection='row-reverse' backgroundColor='green' padding='6' borderRadius='2xl'>
            <Button onClick={()=>(toggleAuth(isAuth?false:true))}>
                {isAuth?"Logout":"Login"}
            </Button>
        </Box>
    )
}

export default Navbar