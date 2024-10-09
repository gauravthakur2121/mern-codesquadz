const Data = require('../Models/dataModel');
const mongoose = require('mongoose')
module.exports.home = async (req, res) => {
  try {
    const mydbs = await Data.find({});
    console.log(mydbs);
    res.status(200).json({ msg: "All data is here", mydbs });
  } catch (error) {
    res.status(500).json({ msg: "Error retrieving data", error: error.message });
  }
};

module.exports.deleterecord = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Data.findByIdAndDelete(id); 

    if (!del) {
      return res.status(404).json({ msg: "Record not found" });
    }

    console.log(del);
    res.status(200).json({ msg: "Record deleted", del });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting record", error: error.message });
  }
};

  /* module.exports.viewrecord = async (req, res) => {
     try {
      const { id } = req.params;
      console.log("ID received:", id); 
  
      const users = await Data.findOne({_id:id});
      if (!users) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      res.status(200).json({ msg: "User found", users });
    } catch (error) {
      res.status(500).json({ msg: "Error fetching user data", error: error.message });
    }  
  }; */


  module.exports.viewrecord = async (req, res) => {
    try {
      const { id } = req.params;

      console.log("Received ID:", id); 
      
      const user = await Data.findById(id);
      
      if (!user) {
        return res.status(404).json({ msg: "User not found" });
      }
  
      // Log the user data to ensure it's being retrieved
      console.log("User data:", user);
  
      // Send user data in response
      res.status(200).json({ msg: "User found", user });
    } catch (error) {
      res.status(500).json({ msg: "Error fetching user data", error: error.message });
    }
  };
  
  

module.exports.addData = async (req, res) => {
  try {
    const { name, age, classe, department } = req.body;

    if (!name || !age || !classe || !department) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    const newData = await Data.create({ name, age, classe, department });
    res.status(201).json({ msg: "Data added successfully", data: newData });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error", error: error.message });
  }
};
