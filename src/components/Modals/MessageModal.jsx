import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    TextField,
    Typography,
    DialogActions, Grid, Button
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios"
import toast from "react-hot-toast"



export const MessageModal = ({ close, open }) => {


    const colorCode = [
        { id: "1", code: "#ffc0cb" },
        { id: "2", code: "#00fb1d" },
        { id: "3", code: "#FFD700" },
        { id: "4", code: "#0000ff" },
        { id: "5", code: "#ff0000" }
    ];


    const [groupName, setGroupName] = useState("");
    const [colorName, setColorName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);
    const [isdisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (groupName !== "" && colorName !== "") {
            setIsDisabled(false);
        }
        else {
            setIsDisabled(true);
        }
    })

    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const noteHandler = async () => {
        try {
            const response = await axios.post("https://web-pocket-notes-backend-1.onrender.com/create-note-list", {
                title: groupName,
                color_code: colorName,
                userid: user_id,
            })
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                close();
            }
        } catch (error) {
            console.log(error);
        }
    }

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
                        <Box>
                            <Typography variant="h5" textAlign="center">
                                Group Name
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12}>
                        <TextField
                            fullWidth={true}
                            size="small"
                            placeholder="Enter Your Group Name"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            error={isSubmit && groupName === ""}
                            helperText={isSubmit && groupName === "" && "Please Enter the Group Name"}
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
                                return <Box
                                    key={item.id}
                                    sx={{ cursor: "pointer" }}
                                    bgcolor={item.code}
                                    borderRadius="50%"
                                    height="35px"
                                    width="35px"
                                    onClick={() => setColorName(item.code)}
                                ></Box>
                            })}
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="contained"
                    size="large"
                    disabled={isdisabled}
                    onClick={noteHandler}
                >Create</Button>
            </DialogActions>
        </Dialog>
    )
}
