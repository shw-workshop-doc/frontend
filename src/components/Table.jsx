import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { host } from './Api';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable({fetchData}) {
    const [data,setData]=useState([])
       const navigate=useNavigate();
       const handleDelete=async(id)=>{
        try {
          const res=await axios.delete(`${host}/delete/${id}`)
          console.log(res)
          if(res.data.success){
            toast.success(res.data.message)
          }
        } catch (error) {
          console.log(error)
          
        }
       }
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           <TableCell>sl.no</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchData.map((row,index) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
                <TableCell component="th" scope="row"></TableCell>
                {row.name}</TableCell>
              <TableCell >{row.title}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.category}</TableCell>
              <TableCell >{row.createdAt
                }</TableCell> 
                <TableCell > 
                <Button color='secondary' onClick={()=>navigate(`/edit/${row._id}`)}>Edit</Button>
                <Button color='error' onClick={()=>handleDelete(`${row._id}`)}>Delete</Button>
              </TableCell>

             
               </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
