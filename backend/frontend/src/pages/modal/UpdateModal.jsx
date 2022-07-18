import React, { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";


const UpdateModal = ({ news, setNews }) => {
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setNews(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/update", {
        newNews: news,
      })
      .then((response) => window.alert("News updated"))
      .catch((err) => console.log(err));

    setOpen(false);
  };

  return (
        <div>
            <Button variant="contained" color="success" onClick={()=> setOpen(true)}>
                Update
            </Button>
            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle>Enter the news to update</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    
                </DialogContentText>
                <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="enter here"
                    onChange={handleChange}
                    value={news}
                    />
                    <Button onClick={() => setOpen(false)}>
                        Close
                    </Button>
                    <Button
                    content="Update News"
                    type="submit"
                    >Submit</Button>
                </form>
                </DialogContent>
            </Dialog>
        </div>
  );

};

export default UpdateModal;
