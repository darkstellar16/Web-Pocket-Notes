import React, { Fragment, useState } from 'react'
import { Box, Button, Grid, Typography, Container, Card, TextField, InputAdornment } from "@mui/material"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"
import { TopBar } from '../../components/TopBar';
// import { ScreenLoader } from '../../components/ScreenLoader';

export const Signin = () => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [formInfo, setFormInfo] = useState({
        email: "",
        password: ""
    })


    //--function to get the signin of the user--//
    const signinHandler = async () => {
        try {
            setIsLoading(true);
            const response = await axios.post("http://localhost:9000/signin", {
                email: formInfo.email,
                password: formInfo.password,
            })
            // console.log("response--", response);
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                localStorage.setItem("acces_token", JSON.stringify(response?.data?.user?.token));
                localStorage.setItem("user_id", JSON.stringify(response?.data?.user?._id));
                navigate("/preview");
            }
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            if (error.response?.data?.status === 409 || error?.response?.data?.status === 400 || error?.response?.data?.status === 500) {
                toast.error(error?.response?.data?.message);
            }
            setIsLoading(false);
        }
    }

    return (
        <Fragment>
            <TopBar />
            <Container maxWidth="md">
                <Box textAlign="center" mb={2}>
                    <Typography variant='h4' mt={3}>Log In Pocket Notes</Typography>
                </Box>
                <Card sx={{ padding: "20px" }}>
                    <Grid container spacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Grid item lg={6} sm={6} md={6} xs={12}
                        >

                            <Box mt={2}>
                                <Typography variant='body2'>Registered Email Address</Typography>
                                <TextField
                                    fullWidth={true}
                                    type='email'
                                    placeholder="Enter Your Email Address"
                                    value={formInfo.email}
                                    onChange={(e) => {
                                        setFormInfo({ ...formInfo, email: e.target.value })
                                    }}
                                    error={isSubmit && formInfo.email === ""}
                                    helperText={isSubmit && formInfo.email === "" && "Please enter your email address"}
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
                                                onClick={() => setShowPassword(!showPassword)}
                                                sx={{ cursor: "pointer" }}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Box>
                            <Box mt={3}>
                                <Button
                                    variant="contained"
                                    fullWidth={true}
                                    size='large'
                                    onClick={() => {
                                        setIsSubmit(true)
                                        if (formInfo.email !== "" && formInfo.password !== "") {
                                            setIsSubmit(false);
                                            signinHandler();
                                        }
                                    }}
                                >Log In</Button>
                            </Box>
                        </Grid>
                        <Grid item lg={6} sm={6} md={6} xs={12} className='displayCenter' >
                            <Box><img src="/assets/images/Signin.png" alt="signup" width="100%" /></Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
            {/* {isLoading && <ScreenLoader loading={isLoading} />} */}
        </Fragment >

    )
}
