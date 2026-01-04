import { Typography,Box, Paper, TextField, FormControl, Select, InputLabel, MenuItem, Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { host } from '../components/Api'
import { toast } from 'react-toastify'

export default function Form() {
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        title:'',
        amount:'',
        category:''

        
    })
    const handleSubmit=async()=>{
        try {
          const res = await axios.post(`${host}/add`,formData)
        //   console.log(res)
        if(res.data.success){
            toast.success(res.data.message)
        }
        navigate('/')
        } catch (error) {

            toast.error(res.data.message)
            console.log(error)
            
        }

    }
  return (
    <div>
        <Box>
            <Typography>
                Insert my Expense
            </Typography>
        </Box>
        <Box>
            <Paper>
                <TextField id="outlined-basic" label="Expense Title" variant="outlined"fullWidth sx={{mb:2}} 
                onChange={(e)=>setFormData({...formData,title:e.target.value})}
                    value={formData.title}/>

                <TextField type="Number" id="outlined-basic" label="Amount" variant="outlined" fullWidth sx={{mb:2}}
                onChange={(e)=>setFormData({...formData,amount:e.target.value})}
                    value={formData.amount}/>
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Category"
    onChange={(e)=>setFormData({...formData,category:e.target.value})}
    value={formData.category}
  >
    <MenuItem value='Food'>Food</MenuItem>
    <MenuItem value='TransPort'>TransPort</MenuItem>
    <MenuItem value='Design'>Design</MenuItem>
  </Select>
</FormControl>
<Button variant="contained" fullWidth sx={{mb:3,color:"red"}} onClick={handleSubmit}>Submit</Button>
<Button variant="contained" fullWidth sx={{mb:3,color:"red" }} onClick={()=>navigate('/')}>Return to Expenses</Button>

            </Paper>
        </Box>
    </div>
  )
}
