import React, { Fragment, useState } from 'react'
import {
    Box, Button, Grid,
    Typography, Container,
    Card, TextField,
    InputAdornment, FormHelperText
} from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import toast from "react-hot-toast"
import { TopBar } from '../../components/TopBar';

export const Signup = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isdisabled, setIsDisabled] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const [formInfo, setFormInfo] = useState({
        username: "",
        email: "",
        password: ""
    })

    //--function to get the signup of the user--//
    const signupHandler = async () => {
        try {
            const response = await axios.post("https://web-pocket-notes-backend-1.onrender.com/signup", {
                username: formInfo.username,
                email: formInfo.email,
                password: formInfo.password,
            })
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                navigate("/login");
            }
        } catch (error) {
            if (error.response?.data?.status === 409 || error?.response?.data?.status === 400 || error?.response?.data?.status === 500)
                toast.error(error?.response?.data?.message);
        }
    }


    return (
        <Fragment>
            <TopBar />
            <Container maxWidth="md">
                <Box textAlign="center" mb={2}>
                    <Typography variant='h4' mt={3}>Sign up Pocket Notes</Typography>
                </Box>
                <Card sx={{ padding: "20px" }}>
                    <Grid container spacing={3} >
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
                                    onChange={(e) => {
                                        const regx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                                        const check = regx.test(e.target.value);
                                        setIsValid(check);
                                        setFormInfo({ ...formInfo, email: e.target.value })
                                    }}
                                    error={(isSubmit && formInfo.email === "") || (!isValid && formInfo.email !== "")}
                                    helperText={isSubmit && formInfo.email === "" && "Please enter your email address"}
                                />
                                {!isValid && formInfo.email !== "" && (
                                    <FormHelperText error>
                                        Please enter a valid email
                                    </FormHelperText>
                                )}
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
                            <Box mt={2}>
                                <Button
                                    disabled={!isdisabled}
                                    variant="contained"
                                    fullWidth={true} size='large'
                                    onClick={() => {
                                        setIsSubmit(true)
                                        if (formInfo.email !== "" && formInfo.username && formInfo.password !== "") {
                                            setIsSubmit(false);
                                            signupHandler();
                                        }
                                    }}
                                >Sign Up</Button>
                            </Box>
                            <Box mt={2} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <Checkbox
                                    checked={isdisabled}
                                    onClick={() => setIsDisabled(!isdisabled)}
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}

                                />
                                <Typography variant='body2'>I agree to all Tnc of Pocket Notes</Typography>
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
                        <Grid item lg={5} sm={5} md={5} xs={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
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
