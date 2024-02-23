import React from 'react'
import { Grid, Typography } from "@mui/material"
import moment from "moment";


export const NoteCard = ({ item }) => {

    console.log(moment(item?.createdAt)?.format("DD/MM/YYYY"));

    return (
        <Grid container spacing={1} mt={2}>
            <Grid item lg={2} md={3} sm={3} xs={4}>
                <Typography variant='body2'>{moment(item?.createdAt).format("HH:mm:ss")}</Typography>
                <Typography variant='body2'>{moment(item?.createdAt)?.format("DD/MM/YYYY")}</Typography>
            </Grid>
            <Grid item lg={10} md={9} sm={9} xs={8}>
                <Typography variant='body2'>
                    {item?.content}
                </Typography>
            </Grid>
        </Grid>
    )
}
