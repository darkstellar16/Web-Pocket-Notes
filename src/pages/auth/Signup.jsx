import React, { Fragment, useState } from 'react'
import { Box, Button, Grid, Typography, Container, Card, TextField, InputAdornment } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"


export const Signup = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isdisabled, setIsDisabled] = useState(false);

    const [formInfo, setFormInfo] = useState({
        username: "",
        email: "",
        password: ""
    })


    return (
        <Fragment>
            <Box bgcolor={"black"} color={"white"} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} p={1}>
                <Box className="displayCenter">
                    <Typography variant='h4'>Pocket Notes</Typography>
                </Box>
                <Box >
                    <Button onClick={() => navigate("/login")}>Login</Button>
                    <Button onClick={() => navigate("/")}>Sign Up</Button>
                </Box>
            </Box>

            <Container maxWidth="md">
                <Box textAlign="center" mb={2}>
                    <Typography variant='h4' mt={3}>Sign up Pocket Notes</Typography>
                </Box>
                <Card sx={{ padding: "20px" }}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} sm={6} md={6} xs={12}>
                            <Box mt={2}>
                                <Typography variant='body2'>Name</Typography>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Enter Your  Name"
                                    value={formInfo.username}
                                    error={isSubmit && formInfo.username === ""}
                                    helperText={isSubmit && formInfo.username === "" && "Please enter your name"}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, username: e.target.value })
                                    }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant='body2'>Email</Typography>
                                <TextField
                                    fullWidth={true}
                                    type='email'
                                    placeholder="Enter Your Email Address"
                                    value={formInfo.email}
                                    error={isSubmit && formInfo.email === ""}
                                    helperText={isSubmit && formInfo.email === "" && "Please enter your email address"}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, email: e.target.value })
                                    }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Typography variant='body2'>Password</Typography>
                                <TextField
                                    fullWidth={true}
                                    placeholder="Enter Your Password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formInfo.password}
                                    error={isSubmit && formInfo.password === ""}
                                    helperText={isSubmit && formInfo.password === "" && "Please enter your password "}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, password: e.target.value })
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end"
                                                onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                            <Box mt={2}>
                                <Button
                                    disabled={!isdisabled}
                                    variant="contained"
                                    fullWidth={true} size='large'
                                >Sign Up</Button>
                            </Box>
                            <Box mt={2} display={"flex"} flexDirection={"row"}>
                                <Checkbox
                                    checked={isdisabled}
                                    onClick={() => setIsDisabled(!isdisabled)}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}

                                />
                                <Typography variant='body2' className="displayCenter">I agree to all Tnc of Pocket Notes</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={1} sm={1} md={1} xs={12}>
                            <Box
                                sx={{
                                    width: "1px",
                                    background: "#8C8C8C",
                                    height: "100%",
                                    marginLeft: "10px",
                                }}
                            />
                        </Grid>
                        <Grid item lg={5} sm={5} md={5} xs={12} className='displayCenter' >
                            <Box>
                                <Box ><img src="/assets/images/SignUp.png" alt="signup" width="100%" /></Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Fragment >

    )
}
