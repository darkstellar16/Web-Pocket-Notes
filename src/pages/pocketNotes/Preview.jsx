import React, { Fragment, useEffect, useState } from 'react';
import {
    Box, Grid, Typography,
    InputAdornment, Button, TextField,
    IconButton, Card
} from "@mui/material";
import { MessageModal } from '../../components/Modals/MessageModal';
import SendIcon from '@mui/icons-material/Send';
import { NoteCard } from '../../components/NoteCard';
import { Logout } from '@mui/icons-material';
import { ConfirmationModal } from '../../components/Modals/ConfirmationModal';
import { useNavigate } from "react-router-dom"
import axios from "axios";
import toast from "react-hot-toast"


export const Preview = () => {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [noteContent, setNoteContent] = useState("");
    const [noteList, setNoteList] = useState([]);
    const [selectedNote, setSelectedNote] = useState("");
    const [selcetedNoteTitle, setSelectedNoteTitle] = useState("");
    const [selcetedNoteColor, setSelectedNoteColor] = useState("");
    const [selectedNoteData, setSelectedNoteData] = useState("");




    //-- function to get the note list and note data--//
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const noteHandler = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/user-note-list?_id=${user_id}`)
            if (response?.data?.status === 200) {
                setNoteList(response?.data?.result?.lists);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        noteHandler();
    }, []);



    //-- function to get the updated note list with the noteData--//
    useEffect(() => {
        if (selectedNote) {
            const ans = noteList?.find(item => item?._id === selectedNote)
            console.log(ans);
            setSelectedNoteData(ans.datas);
        }
    }, [selectedNote, noteList])





    //--function to add the note data in the selected Data--//
    const noteDataHandler = async (selectedNote) => {
        try {
            const response = await axios.post("http://localhost:9000/create-note-data", {
                content: noteContent,
                listid: selectedNote,
            })
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message);
                noteHandler();
                setNoteContent("");
            }

        } catch (error) {
            console.log(error);

        }
    }




    //--funtion for the logout of the user--//
    const logoutHandler = () => {
        localStorage.clear();
        navigate("/login");
    }


    //--function to the title in a format--//
    const getTitle = (value) => {
        const response = value.split(" ");
        const ans = (response?.[0]?.substring(0, 2))?.toUpperCase();
        return ans
    }



    return (
        <Fragment>
            <Box color={"black"}
                bgcolor={selcetedNoteColor ? selcetedNoteColor : "#AAC8A7"}
                sx={{
                    display: "flex", flexDirection: "row", justifyContent: "space-between",
                    position: "sticky",
                    top: 0,
                    zIndex: 1000,
                }}
                p={1}>
                <Box className="displayCenter">
                    <Typography variant='h4' sx={{ fontFamily: "cursive" }}>Pocket Notes</Typography>
                </Box>
                <Box >
                    <IconButton
                        title='Logout'
                        onClick={() => setIsLogout(true)}
                    >
                        <Logout />
                    </IconButton>
                </Box>
            </Box>
            <Box p={5}  >
                <Grid container spacing={1} >
                    <Grid item lg={3} md={5} sm={6} xs={12} component={Card}>
                        <Box>
                            <Typography variant='h5'>Pocket Notes</Typography>
                        </Box>
                        <Box p={2}>
                            <Button variant="contained" onClick={() => setOpenModal(true)} >+ Create Notes group</Button>
                            {
                                noteList && noteList.map((item) => {
                                    return <Box
                                        component={Card}
                                        borderRadius={5}
                                        mt={3}
                                        bgcolor={selectedNote === item?._id ? "rgba(247, 236, 220, 1)" : "white"}
                                        sx={{ cursor: "pointer" }}
                                        onClick={() => {
                                            setSelectedNote(item?._id)
                                            setSelectedNoteTitle(item?.title)
                                            setSelectedNoteColor(item?.color_code)

                                        }}>
                                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                                            <Box bgcolor={item?.color_code} sx={{ borderRadius: "50%", height: "40px", width: "40px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <Typography variant='body2' color={"white"} >{getTitle(item?.title)}</Typography>
                                            </Box>
                                            <Box className="displayCenter" paddingLeft={1}>
                                                <Typography variant='h6'>{item?.title}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid item lg={9} md={7} sm={6} xs={12}>
                        <Box>
                            {selectedNoteData?.length === 0 ?
                                (<Box sx={{ height: "490px" }}>
                                    <Box>
                                        <img src='/assets/images/banner.png' width="100%" />
                                    </Box>
                                </Box>) :
                                (<Box>
                                    <Box p={1}>
                                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                                            <Box sx={{
                                                bgcolor: selcetedNoteColor,
                                                borderRadius: "50%", height: "45px", width: "45px",
                                                display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"
                                            }}>
                                                <Typography variant='body2' color={"white"}>{getTitle(selcetedNoteTitle)}</Typography>
                                            </Box>
                                            <Box className="displayCenter" paddingLeft={2}>
                                                <Typography variant='h5'>{selcetedNoteTitle}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box p={2} mt={1} pb={2} borderRadius={2} sx={{ height: "400px", overflowY: "auto" }} bgcolor={"rgba(247, 236, 220, 1)"}>
                                        {selectedNoteData && selectedNoteData?.map((item) => {
                                            return <Fragment>
                                                <NoteCard item={item} />
                                            </Fragment>
                                        })}
                                    </Box>
                                </Box>)}
                            <Box >
                                <Box p={1} >
                                    <TextField
                                        fullWidth={true}
                                        multiline rows={6}
                                        value={noteContent}
                                        onChange={(e) => setNoteContent(e.target.value)}
                                        placeholder="Enter your message here...."
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end" sx={{ alignSelf: 'flex-end' }}>
                                                    <IconButton

                                                        onClick={() => noteDataHandler(selectedNote)}
                                                    >
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
            </Box>
            {openModal && <MessageModal
                open={openModal}
                close={() => setOpenModal(false)}
            />}

            {isLogout && <ConfirmationModal
                open={isLogout}
                close={() => setIsLogout(false)}
                title={"Logout Pocket Notes"}
                description={"Are you sure you want to logout"}
                onClick={logoutHandler} />

            }
        </Fragment>

    );
};
