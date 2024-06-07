

import { Button, Box, Grid } from '@mui/material';
import './style.css'


export const CustomButton = ({
    lable,
    handleOnCrawl,
    handleOnFetch,
    className='',
}) => {
  return (
    <>
        <Box sx={{ width: '100%' }}>
            <button
                onClick={()=> handleOnCrawl()}
                className='btnStyle'
            >
                {lable}
            </button>
        </Box>
    </>
  )
}
