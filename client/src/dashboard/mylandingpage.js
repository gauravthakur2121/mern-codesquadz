import React from 'react'
import Sidebar from '../shares/Sidebar'
import AnimatedNavbar from '../shares/Navbar'
import { Outlet } from 'react-router-dom'
  // import DataTable from '../shares/Datatable'
import Simpletable from '../shares/Simpletable'

const Mylandingpage = () => {
  return (
    <div>
      <div className='container-fluid'>
            <div className='row '>
                <div className='col-md-2 g-0'>
                   <Sidebar/>
                </div>
                <div className='col-md-10 g-0'>
                    <AnimatedNavbar/>
                    <div className='page'>
                    
                     <Outlet>
                     
                     </Outlet>
                     <div className='row'>
                      <div className='col-md-12 mb-3 mt-2'>
                        <Simpletable/>
                          {/*<DataTable/> */}

                      </div>
                    </div>
                     
                    </div>

                    
                      
                      </div>
                    </div>
                   
            </div>
            </div>

  )
}

export default Mylandingpage
