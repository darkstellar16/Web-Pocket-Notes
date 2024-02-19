import { React } from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography, Box, Button
} from "@mui/material"


export const ConfirmationModal = ({
    open, close, title, description
}) => {

    console.log(close);
    return (
        <Dialog open={open} onClose={close} maxWidth="sm" fullWidth>
            <DialogTitle position="relative">
                <Typography variant="h5" textAlign="center">
                    {title}
                </Typography>
            </DialogTitle>
            <DialogContent >
                <Typography variant="h6" textAlign="center">
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Box width="100%" sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Button
                        variant='contained'
                        sx={{ marginRight: "20px" }}
                        onClick={close}
                    >Close</Button>

                    <Button
                        variant='contained'>Log out</Button>
                </Box>

            </DialogActions>
        </Dialog >
    )
}
