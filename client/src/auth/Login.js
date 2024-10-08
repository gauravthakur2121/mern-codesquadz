import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AnimatedNavbar from "../shares/Navbar";
import { json } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const notify = () => toast.success('🦄 Login Successfully!', {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    const {email , password} = formData;

    if(!email || !password){
      return alert("please fill the fields");
    }
    try{
      const res = await fetch("http://localhost:5000/api/login/loginuser" , {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email,
          password
        })
      });
      if(!res.ok){
        throw new Error("Failed to Logged In : please try again")
      }
      const data = res.json()
      console.log(data);
      e.preventDefault(); 

    } catch (error) {
      console.error("Error during Logged In:", error);
      alert("Error during Login: " + error.message);
    }
  };
   


  return (
    <>
    <AnimatedNavbar/>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <div className="p-4 shadow rounded">
              <h3 className="text-center mb-4">Login</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100" onClick={notify}>
                  Login
                </Button>
                <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
    </>
  );
};

export default Login;
