import React from 'react'
import { Box, Paper } from "@mui/material";
import Posts from './Posts';
import Add from './Add';
import Rightbar from './Rightbar';
import { Stack } from '@mui/system';
const Settings = () => {
    return (<>
        <Paper sx={{left:"200px"}}>
            {/* <Stack direction="row" spacing={2} justifyContent="space-between"> */}
                {/* <Box flex={4} p={0} sx={{ position: "relative" }} bgcolor={"background.default"}  > */}
                    <Posts />
                {/* </Box> */}
                {/* <Rightbar /> */}
            {/* </Stack> */}
        </Paper>
    </>
    )
}

export default Settings