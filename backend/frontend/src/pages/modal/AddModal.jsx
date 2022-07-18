import React, { useState } from "react";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

const AddModal = ({ news, setNews }) => {
  const [open, setOpen] = useState(false);
  const [addNews, setAddNews] = useState("");

  const handleChange = (event) => {
    setAddNews(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/add", {
        news: addNews,
      })
      .then((response) => window.alert("News added "))
      .catch((err) => console.log(err));
    setNews(addNews);
    setAddNews("");
    setOpen(false);
  };

  return (
    <div>
        <Button variant="contained" color="success" onClick={()=> setOpen(true)}>
        Add
        </Button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Enter the News to Add</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <form onSubmit={handleSubmit}>
           <Input
              type="text"
              placeholder="enter here"
              onChange={handleChange}
              value={addNews}
            />
            <Button onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="Add News"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            >Submit</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddModal;
