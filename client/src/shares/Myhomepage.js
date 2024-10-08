import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Myhomepage = () => {
  const [user, setUser] = useState([]); // Holds the data from the API
  const [loading, setLoading] = useState(true); // To show loading state
  const [error, setError] = useState(null); // To show any errors

  // Fetch data from the API
  const getData = () => {
    axios
      .get("http://localhost:5000/api/alldata")
      .then((d) => {
        console.log("API Response:", d.data); // Log the response for debugging

        // If the response is an object with the 'mydbs' array, set it to 'user'
        if (d.data.mydbs && Array.isArray(d.data.mydbs)) {
          setUser(d.data.mydbs);
        } else {
          console.error("Unexpected data structure:", d.data);
        }

        setLoading(false); // Stop the loading state
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError("Failed to fetch data.");
        setLoading(false); // Stop the loading state
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
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
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="container-fluid">
          <div className="row">
            <div className="col mt-3">
              <div className="card mb-3 shadow bg-success text-white">
                <div className="card-body">
                  <span className="card-title h4">Total Users: {user.length}</span>
                </div>
              </div>
            </div>

            {/* You can add more cards here, depending on what else you want to show */}
            <div className="col mt-3">
              <div className="card mb-3 shadow bg-warning text-white">
                <div className="card-body">
                  <span className="card-title h4">Some other data</span>
                </div>
              </div>
            </div>

            <div className="col mt-3">
              <div className="card mb-3 shadow bg-info text-white">
                <div className="card-body">
                  <span className="card-title h4">More data here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myhomepage;
