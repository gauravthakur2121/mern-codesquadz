
import React  from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios'
const Myhomepage = () => {
    const [user,setUser] = useState([])

      const getData = ()=>{
            axios.get("http://localhost:5000/alldata").then((d)=>{
                console.log(d.data);
                setUser(d.data)
           });
    }

    

    /* async function getData() {
        try{
          const response = await fetch("http://localhost:9005/alldata");
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const Data = await response.json();
          console.log(Data);
          setUser(Data)
      } catch (error) {
        console.error(error.message);
      }
    }
      */


    useEffect(()=>{
      getData()
    },[])

   

  return (
    <div>
      <div className='container-fluid'>
                <div className='row'>
                            <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-success text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total:{user.length}</span>
                               
                            </div>
                        </div>
                    </div>

                    
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-warning text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total:</span>

                            </div>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-info text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total:</span>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-primary text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total:</span>
                                
                            </div>
                        </div>
                    </div>
                    <div className='col mt-3'>
                        <div className="card mb-3 shadow bg-danger text-white">
                            <div className="card-body">
                                <span className="card-title h4">Total:</span>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default Myhomepage
