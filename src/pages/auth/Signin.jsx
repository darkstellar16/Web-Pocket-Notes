import React, { Fragment, useState } from 'react'
import { Box, Button, Grid, Typography, Container, Card, TextField, InputAdornment } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



export const Signin = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isdisabled, setIsDisabled] = useState(false);

    const [formInfo, setFormInfo] = useState({
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
                    <Button>Login</Button>
                    <Button>Sign up</Button>
                </Box>
            </Box>

            <Container maxWidth="md">
                <Box textAlign="center" mb={2}>
                    <Typography variant='h4' mt={3}>Log In Pocket Notes</Typography>
                </Box>
                <Card sx={{ padding: "20px" }}>
                    <Grid container spacing={3} className='displayCenter' >
                        <Grid item lg={6} sm={6} md={6} xs={12} >

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
                                >Log In</Button>
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
                        <Grid item lg={6} sm={6} md={6} xs={12} className='displayCenter' >
                            <Box><img src="/assets/images/Signin.png" alt="signup" width="100%" /></Box>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Fragment >

    )
}
