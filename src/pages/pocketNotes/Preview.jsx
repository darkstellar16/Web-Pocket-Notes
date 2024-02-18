import React, { useState } from 'react';
import { Box, Grid, Typography, Button, Paper } from "@mui/material";
import { MessageModal } from '../../components/Modals/MessageModal';




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
        <Box p={5} >
            <Grid container spacing={2} border="1px black solid" component={Paper}>
                <Grid item lg={3} md={5} sm={6} xs={12} border="1px black solid">
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
                <Grid item lg={9} md={7} sm={6} xs={12} border="1px black solid">
                    <Box height="100%" >
                        <Box className="displayCenter">
                            <img src='/assets/images/banner.png' width="50%" />
                        </Box>
                        <Box className="displayCenter">
                            <Typography variant='h5'>Pocket Notes</Typography>
                            <Typography variant='body2' p={1}>
                                Send and receive messages without keeping your phone online.
                            </Typography>
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
