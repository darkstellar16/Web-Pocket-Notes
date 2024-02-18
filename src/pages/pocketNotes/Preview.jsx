import React, { Fragment, useState } from 'react';
import { Box, Grid, Typography, InputAdornment, Button, Paper, TextField, IconButton } from "@mui/material";
import { MessageModal } from '../../components/Modals/MessageModal';
import SendIcon from '@mui/icons-material/Send';
import { NoteCard } from '../../components/NoteCard';




export const Preview = () => {

    const listItems = [
        {
            title: "Notes 1",
            message: [
                {
                    description: "but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    description: "but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    description: "but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    description: "but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
            ]
        },
    ]

    const [openModal, setOpenModal] = useState(false);

    return (
        <Box p={15} sx={{ maxHeight: 800, overflowY: "auto" }} >
            <Grid container spacing={1} component={Paper}>
                <Grid item lg={3} md={5} sm={6} xs={12}>
                    <Box>
                        <Typography variant='h5'>Pocket Notes</Typography>
                    </Box>
                    <Box p={2}>
                        <Button variant="contained" onClick={() => setOpenModal(true)} >+ Create Notes group</Button>
                        {
                            listItems && listItems.map((item) => {
                                return <Box mt={2}>
                                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                                        <Box sx={{ bgcolor: 'blue', borderRadius: "50%", height: "40px", width: "40px" }} className="displayCenter">
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
                <Grid item lg={9} md={7} sm={6} xs={12} >
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
                    <Box p={2} pb={2} borderRadius={2} sx={{ maxHeight: 400, overflowY: "auto" }} bgcolor={"powderblue"}>
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
                            return <Fragment>
                                <NoteCard />
                            </Fragment>
                        })}

                    </Box>
                    <Box >
                        <Box p={1} >
                            <TextField
                                fullWidth={true}
                                multiline rows={5}
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
