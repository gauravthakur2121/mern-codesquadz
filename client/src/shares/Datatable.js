import * as React from 'react'; 
import { DataGrid } from '@mui/x-data-grid'; 
import Paper from '@mui/material/Paper'; 
import { useEffect, useState } from 'react';  

const columns = [    
  { field: '_id', headerName: 'MongoId', width: 300 },   
  { field: 'sno', headerName: 'S.No', width: 160 }, 
  { field: 'name', headerName: 'Name', width: 250 }, 
  { field: 'course', headerName: 'Course', width: 250 },    
  { field: 'age', headerName: 'Age', width: 100 },   
  { field: 'department', headerName: 'Department', width: 130 },   
  { field: 'class', headerName: 'Class', width: 130 } 
];    

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {   
  const [user, setUser] = useState([]);

  async function getData() {     
    const url = "http://localhost:5000/api/alldata";     
    try {       
      const response = await fetch(url);       
      if (!response.ok) {         
        throw new Error(`Response status: ${response.status}`);       
      }       

      const data = await response.json();       
      console.log(data); // Check data structure here

      // Check if the data contains 'mydbs' array
      if (data.mydbs && Array.isArray(data.mydbs)) {
        setUser(data.mydbs); // Set the 'mydbs' array to the state
      } else {
        console.error("Unexpected data structure:", data);
      }
    } catch (error) {       
      console.error('Error fetching data:', error.message);     
    }   
  }

  useEffect(() => {     
    getData();   
  }, []);

  return (     
    <Paper sx={{ width: '100%' }}>     
      <DataGrid         
        rows={user} // Use the 'user' array from 'mydbs'
        columns={columns}         
        getRowId={a => a._id} // Use '_id' as the unique identifier for each row         
        initialState={{ pagination: { paginationModel } }}         
        pageSizeOptions={[5, 10, 15]}         
        checkboxSelection         
        sx={{ border: 0 }}       
      />     
    </Paper>   
  ); 
}
