import React, { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedNavbar from "../shares/Navbar";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const notify = () => toast.success('🦄 Register Succesfully!', {
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

    const { name, email, password, confirmPassword } = formData;

    if (!name || !email || !password || !confirmPassword) {
      return alert("Please fill all fields");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/registoruser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPassword,
        }),
      });

      if (!res.ok) {
        // Check if response is not OK (e.g., 400 or 500 HTTP status codes)
        throw new Error("Failed to register. Please try again.");
      }

      const data = await res.json();
      console.log(data);
      e.preventDefault(); 
      alert("Welcome to registration!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration: " + error.message);
    }
  };

  return (
    <>
      <AnimatedNavbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Row className="w-100">
            <Col md={{ span: 6, offset: 3 }}>
              <div className="p-4 shadow rounded">
                <h3 className="text-center mb-4">Register</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onInput={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onInput={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={formData.password}
                      onInput={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onInput={handleChange}
                    />
                  </Form.Group>
                  
                  <button type="submit" className="btn btn-success c-btn" onClick={notify}>
                    Register Now
                  </button>
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
                  <Link to="/login" className="ms-3">Login page</Link>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </motion.div>
    </>
  );
};

export default Register;
