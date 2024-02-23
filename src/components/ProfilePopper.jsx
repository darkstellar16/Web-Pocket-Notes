import React, { Fragment, useState } from 'react';
import { Avatar, Popover, Typography, IconButton, Box } from '@mui/material';
import { useNavigate } from "react-router-dom"
import { Logout } from '@mui/icons-material';
import { StyledBadge } from './StyledBadge';
import { ConfirmationModal } from './Modals/ConfirmationModal';

export const ProfilePopper = ({ userName }) => {
    const navigate = useNavigate();
    const [isLogout, setIsLogout] = useState(false);
    const [popoverOpen, setPopoverOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setPopoverOpen(true);
    };

    const handleClose = () => {
        setPopoverOpen(false);
    };

    const open = Boolean(anchorEl);


    //--funtion for the logout of the user--//
    const logoutHandler = () => {
        localStorage.clear();
        navigate("/login");
    }


    const getUserName = (value) => {
        const response = value.split(" ");
        console.log(response);
        const ans = (response?.[0]?.substring(0, 1)) + (response?.[1]?.substring(0, 1))?.toUpperCase();
        return ans
    }

    return (
        <Fragment>
            <StyledBadge
                sx={{ cursor: "pointer" }}
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                onClick={handleClick}
            >
                <Avatar sx={{ color: "black", fontFamily: "cursive" }}>
                    {getUserName(userName)}
                </Avatar>
            </StyledBadge>

            <Popover
                open={popoverOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography sx={{ p: 2, fontFamily: "cursive" }}>Welcome {userName} !</Typography>
                <Box paddingLeft={1}>
                    <IconButton
                        onClick={() => setIsLogout(true)}
                    >
                        <Logout />
                    </IconButton>
                </Box>
            </Popover>

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
