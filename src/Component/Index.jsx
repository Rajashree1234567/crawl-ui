
import React from 'react'

import { Typography, AppBar,Box  } from '@mui/material'
import styled from './style.module.css';
import { TableData } from './TableData';

export const Index = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styled.navBar}>
                <Typography>Stock Analysis</Typography>
            </AppBar>
        </Box>
        <TableData />
    </>
  )
}
