import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className="flex-shrink-0 p-3 bg-info c-hight">
    <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
      <span className="fs-5 fw-semibold">Collapsible</span>
    </a>
    <ul className="list-unstyled ps-0">
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
          Home
        </button>
        <div className="collapse" id="home-collapse">
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><Link to="/dashboard" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Dashboard</Link></li>
            <li><Link to="/datauser" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Datauser</Link></li>
            <li><Link to="contact" className="link-body-emphasis d-inline-flex text-decoration-none rounded">condition return</Link></li>
            <li><Link to="myaxios" className="link-body-emphasis d-inline-flex text-decoration-none rounded">axios</Link></li>
            <li><Link to="myprops" className="link-body-emphasis d-inline-flex text-decoration-none rounded">props</Link></li>
            <li><Link to="mygraph" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Graphs</Link></li>
            <li><Link to="mylazy" className="link-body-emphasis d-inline-flex text-decoration-none rounded">Lazyloading</Link></li>
            <li><Link to="myreature" className="link-body-emphasis d-inline-flex text-decoration-none rounded">features</Link></li>
          </ul>
        </div>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
          Dashboard
        </button>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
          Orders
        </button>
        
      </li>
      <li className="border-top my-3"></li>
      <li className="mb-1">
        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
          Account
        </button>
      
      </li>
    </ul>
  </div>
      
    </div>
  )
}

export default Sidebar
