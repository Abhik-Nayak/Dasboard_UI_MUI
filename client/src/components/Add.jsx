import React, { useState } from 'react'
import { Fab, Tooltip, Modal, Box, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material";
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";

const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: '10px',
    marginBottom: '20px'
    // justifyContent: "center"
})
const Add = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip  title="Add new Post" onClick={e => setOpen(true)}
                sx={{ position: "fixed", bottom: 20,marginLeft:"40px"}}>
                <Fab color='primary' aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyleModal
                open={open}
                onClose={(e) => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: '100%' }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your Mind ?"
                        variant='standard' />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color='success' />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant='contained'
                        aria-label='outlined primary button group'
                    >
                        <Button>Post</Button>
                        <Button sx={{width: '100px'}}><DateRange/></Button>
                    </ButtonGroup>
                </Box>
            </StyleModal>
        </>
    )
}

export default Add