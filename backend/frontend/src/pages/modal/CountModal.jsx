import React, {  useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

const CountModal = ({ news }) => {
  const [open, setOpen] = useState(false);
  const [apiCalls, setApiCalls] = useState(-1);

  const count=()=>{
    axios
      .get("/count")
      .then((response) => {
        setApiCalls(response.data.count);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
        <Button variant="contained" onClick={()=>setOpen(true)}>
            API Count
        </Button>
        <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>API Calls </DialogTitle>
        <DialogContent>
            {count()}
            {apiCalls < 0 ? (
            <p>No API calls have been made</p>
            ) : (
            <p>
              <strong>API calls : {apiCalls}</strong>
            </p>
            )}
            <Button onClick={() => setOpen(false)}>
              Close
            </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CountModal;
