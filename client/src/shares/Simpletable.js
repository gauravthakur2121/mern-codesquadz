import React, { useEffect, useState } from 'react';

const Simpletable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    
    fetch('http://localhost:5000/api/alldata')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false); 
      });
  }, []);

  return (
    <div>
      {loading && !error ? (
        <p>Loading...</p> 
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <table className="table table-bordered table table-success table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Class</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.age}</td>
                  <td>{e.classe}</td> 
                  <td>{e.department}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Simpletable;
