import React from 'react'
import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"




export const TopBar = () => {
    const navigate = useNavigate();

    return (
        <Box bgcolor={"black"} color={"white"} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} p={1}>
            <Box className="displayCenter">
                <Typography variant='h4' sx={{ fontFamily: "cursive" }}>Pocket Notes</Typography>
            </Box>
            <Box >
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button onClick={() => navigate("/")}>Sign Up</Button>
            </Box>
        </Box>
    )
}
