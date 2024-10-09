import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Userdetailspage() {
  const { id } = useParams();
  const [userdetail, userset] = useState(null);

  const singleuser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/singleuser/${id}`);
      console.log(response.data);  // Log response to ensure data is coming back
      userset(response.data.user);  // Update state with the 'user' field from the response
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    singleuser();
  }, []);

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='text-center f-bold mb-4'>User Details Page</h2>
          </div>
          <div className='col-md-12'>
            {userdetail ? (
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Sno</th>
                    <th scope="col">Name</th>
                    <th scope="col">Course</th>
                    <th scope="col">Department</th>
                    <th scope="col">Age</th>
                    <th scope="col">Class</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{userdetail._id}</th>
                    <td>{userdetail.sno}</td>
                    <td>{userdetail.name}</td>
                    <td>{userdetail.course}</td>
                    <td>{userdetail.department}</td>
                    <td>{userdetail.age}</td>
                    <td>{userdetail.class}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p>Loading user details...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetailspage;
