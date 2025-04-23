import { Button } from '@mui/material'
import React from 'react'

const CustomButton = ({ href, onClick, ...props }) => {
  return (
    <Button
    variant="contained"
    color="#000"
  
  
     sx={{background:"#bbb", color:"#000", fontWeight:"bold"}}
    href={href}
    onClick={onClick}
    {...props}
  />
  )
}

export default CustomButton