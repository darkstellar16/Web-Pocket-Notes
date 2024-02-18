import React, { Fragment, useState } from 'react';
import { Box, Grid, Typography, InputAdornment, Button, TextField, IconButton, Card } from "@mui/material";
import { MessageModal } from '../../components/Modals/MessageModal';
import SendIcon from '@mui/icons-material/Send';
import { NoteCard } from '../../components/NoteCard';




export const Preview = () => {

    const listItems = [
        {
            title: "Notes 1",
            code: "#ffc0cb"
        },
        {
            title: "Notes 1",
            code: "#00fb1d"
        },
        {
            title: "Notes 1",
            code: "#ffff00"
        },
        {
            title: "Notes 1",
            code: "#0000ff"
        },
        {
            title: "Notes 1",
            code: "#ff0000"
        },
        {
            title: "Notes 1",
            code: "#ffc0cb"
        },
    ]

    const [openModal, setOpenModal] = useState(false);

    return (
        <Box p={5}  >
            <Grid container spacing={1} >
                <Grid item lg={3} md={5} sm={6} xs={12} component={Card}>
                    <Box>
                        <Typography variant='h5'>Pocket Notes</Typography>
                    </Box>
                    <Box p={2}>
                        <Button variant="contained" onClick={() => setOpenModal(true)} >+ Create Notes group</Button>
                        {
                            listItems && listItems.map((item) => {
                                return <Box
                                    component={Card}
                                    borderRadius={5}
                                    mt={3}
                                    // bgcolor={"gray"}
                                    sx={{ cursor: "pointer" }}>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Box bgcolor={item.code} sx={{ borderRadius: "50%", height: "40px", width: "40px" }} className="displayCenter">
                                            <Typography variant='body2' color={"white"} >N1</Typography>
                                        </Box>
                                        <Box className="displayCenter" paddingLeft={1}>
                                            <Typography variant='h6'>{item.title}</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            })
                        }

                    </Box>
                </Grid>
                <Grid item lg={9} md={7} sm={6} xs={12} component={Card}>
                    <Box>
                        <Box p={1}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Box sx={{ bgcolor: 'blue', borderRadius: "50%", height: "45px", width: "45px" }} className="displayCenter">
                                    <Typography variant='body2' color={"white"} >N1</Typography>
                                </Box>
                                <Box className="displayCenter" paddingLeft={2}>
                                    <Typography variant='h5'>Notes 1</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box p={2} mt={1} pb={2} borderRadius={2} sx={{ height: "400px", overflowY: "auto" }} bgcolor={"powderblue"}>
                            {[1, 1, 1, 1, 1, 1, 1].map((item) => {
                                return <Fragment>
                                    <NoteCard />
                                </Fragment>
                            })}

                        </Box>
                        <Box >
                            <Box p={1} >
                                <TextField
                                    fullWidth={true}
                                    multiline rows={6}
                                    placeholder="Enter your message here...."
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end" sx={{ alignSelf: 'flex-end' }}>
                                                <IconButton>
                                                    <SendIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            {
                openModal && <MessageModal
                    open={openModal}
                    close={() => setOpenModal(false)}

                />
            }
        </Box>
    );
};
