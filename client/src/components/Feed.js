import React from 'react'
import { Box} from "@mui/material";
import Posts from './Posts';
import Add from './Add';
const Feed = () => {
  return (
    <Box flex={4} p={0} sx={{position: "relative"}} bgcolor={"background.default"}  >
      <Add  />
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  )
}

export default Feed