import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimatedNavbar from "../shares/Navbar";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(formData);
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

                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
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
