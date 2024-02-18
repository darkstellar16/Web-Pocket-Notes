import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    DialogActions, Grid, Button
} from "@mui/material";
import React from "react";

export const MessageModal = ({ close, open }) => {


    const colorCode = [
        { id: "1", code: "#ffc0cb" },
        { id: "2", code: "#00fb1d" },
        { id: "3", code: "#ffff00" },
        { id: "4", code: "#0000ff" },
        { id: "5", code: "#808080" }
    ];



    return (
        <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
            <DialogTitle position="relative">
                <Typography variant="h5" textAlign="center">
                    Create New Notes Group
                </Typography>
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={1} mt={1}>
                    <Grid item lg={4} md={4} sm={4} xs={12} className="displayCenter">
                        <Box ><Typography variant="h5" textAlign="center">
                            Group Name
                        </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <TextField
                            fullWidth={true}
                            size="small"
                            placeholder="Enter Your Group Name"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} mt={3}>
                    <Grid item lg={4} md={4} sm={4} xs={12} className="displayCenter">
                        <Box ><Typography variant="h5" textAlign="center">
                            Choose Color
                        </Typography></Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} >
                            {colorCode?.map((item) => {
                                return <Box bgcolor={item.code} borderRadius="50%" height="35px" width="35px"></Box>
                            })}
                        </Box>
                    </Grid>
                </Grid>
                {/* <Grid container spacing={1} mt={3}>
                    <Grid item lg={4} md={4} sm={4} xs={12} className="displayCenter">
                        <Box ><Typography variant="h5" textAlign="center">
                            Message
                        </Typography></Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <TextField fullWidth={true} multiline rows={5}
                            placeholder="Enter your message...." />
                    </Grid>
                </Grid> */}
            </DialogContent>
            <DialogActions>
                <Button variant="contained" size="large">Create</Button>
            </DialogActions>
        </Dialog>
    )
}
