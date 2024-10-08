const Data=require('../Models/dataModel')

 exports.deleterecord = async (req, res) => {
  try {
    const id = req.params.id; 
    const record = await Data.findByIdAndDelete(id); 
    
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
