import React from 'react'
import { Grid, Typography } from "@mui/material"



export const NoteCard = () => {
    return (
        <Grid container spacing={1} mt={2}>
            <Grid item lg={2} md={3} sm={3} xs={4}>
                <Typography variant='body2'>10:10 Am</Typography>
                <Typography variant='body2'>18 Feb 2024</Typography>
            </Grid>
            <Grid item lg={10} md={9} sm={9} xs={8}>
                <Typography variant='body2'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Grid>
        </Grid>
    )
}
