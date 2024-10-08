import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Simpletable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data function
  const getdata = () => {
    fetch('http://localhost:5000/api/alldata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        if (data.mydbs && Array.isArray(data.mydbs)) {
          setData(data.mydbs);
        } else {
          console.error("Unexpected data structure:", data);
          setData([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  };

  // Initial data fetch
  useEffect(() => {
    getdata();
  }, []);

  // Delete data function with toast notifications
  const deletedata = async (id) => {
    try {

      console.log(`Deleting record with ID: ${id}`);
      const response = await axios.delete(`http://localhost:5000/api/deleterecords/${id}`);
      console.log("Delete response:", response);
      getdata()
      const confirmDelete = window.confirm("Are you sure you want to delete this record?");
      if (!confirmDelete) return; 

      if (response.status === 200) {
        
        // Remove the deleted record from the state
        setData((prevData) => prevData.filter(item => item._id !== id));
       
        toast.success("Record deleted successfully!");
      }else{
        toast.error("Record deleted successfully")
      }
    } catch (error) {
      toast.error('Error deleting data: ' + (error.message || error)); // Notify error
    }
  };

  return (
    <div>
      <ToastContainer /> {/* Toast container for displaying notifications */}

      <div className='container-fluid'>
    <div className='row'>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-success text-white">
                <div className="card-body">
                    <span className="card-title h4">Total: {data.length}</span>
                    <span className='h3 c-float'></span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-warning text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-info text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-primary text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
        <div className='col mt-3'>
            <div className="card mb-3 shadow bg-danger text-white">
                <div className="card-body">
                    <span className="card-title h4">Total:</span>
                    <span className='h3 c-float'>874524</span>
                </div>
            </div>
        </div>
    </div>
    </div>
      <div className='container-fluid'>
        <div className='row'>
          {/* Your card components here */}
        </div>
      </div>
      {loading && !error ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        Array.isArray(data) && data.length > 0 ? (
          <table className="table table-bordered table-success table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Sno</th>
                <th>Name</th>
                <th>Course</th>
                <th>Department</th>
                <th>Age</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>{e.sno}</td>
                  <td>{e.name}</td>
                  <td>{e.course}</td>
                  <td>{e.department}</td>
                  <td>{e.age}</td>
                  <td>{e.class}</td>
                  <td className='right'>
                    <button type="button" className="btn btn-primary right">View</button>
                    <span><button type="button" className="btn btn-success">Edit</button></span>
                    <span>
                      <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={() => deletedata(e._id)}> {/* Invoke delete function */}
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )
      )}
    </div>
  );
};

export default Simpletable;
