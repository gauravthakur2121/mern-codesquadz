import * as React from 'react'; 
import { DataGrid } from '@mui/x-data-grid'; 
import Paper from '@mui/material/Paper'; 
import { useEffect , useState } from 'react';  

const columns = [    
  { field: '_id', headerName: 'MongoId', width: 200 },   
  { field: 'name', headerName: 'Name', width: 200 },    
  { field: 'age', headerName: 'Age', width: 100 },   
  { field: 'department', headerName: 'Department', width: 130 },   
  { field: 'class', headerName: 'Class', width: 130 } 
];    

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {   
  const [user, setUser] = useState([]);

  async function getData() {     
    const url = "http://localhost:9005/alldata";     
    try {       
      const response = await fetch(url);       
      if (!response.ok) {         
        throw new Error(`Response status: ${response.status}`);       
      }       

      const data = await response.json();       
      console.log(data); // Check data structure here
      setUser(data);     
    } catch (error) {       
      console.error('Error fetching data:', error.message);     
    }   
  }

  useEffect(() => {     
    getData();   
  }, []);

  return (     
    <Paper  sx={{ width: '100%' }}>     
      <DataGrid         
        rows={user}         
        columns={columns}         
        getRowId={a => a._id}         
        initialState={{ pagination: { paginationModel } }}         
        pageSizeOptions={[5, 10, 15]}         
        checkboxSelection         
        sx={{ border: 0 }}       
      /> 
     
    </Paper>   
  ); 
}
