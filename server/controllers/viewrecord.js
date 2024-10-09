const Data=require('../Models/dataModel')
exports.viewrecords = async (req, res) => {
    try {
        const {id} = req.params;
        const users = await Data.findOne({_id:id});
            res.status(288).json(users);
      
      if (!users) {
        return res.status(404).json({ message: 'users not found' });
      }
  
      res.status(200).json({ message: 'view record successfully' });
    } catch (error) {
      console.error('Error deleting record:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  