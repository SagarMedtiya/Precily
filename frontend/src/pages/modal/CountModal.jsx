import React, { useEffect, useState } from "react";
import { Modal, Header, Button} from "semantic-ui-react";

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
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button onClick={count} size="large" color="violet">
          API count
        </Button>
      }
    >
      <Modal.Header>API Calls </Modal.Header>
      <Modal.Content image>
        
        <Modal.Description>
          <Header>Total Number of API Calls</Header>

          {apiCalls < 0 ? (
            <p>No API calls have been made</p>
          ) : (
            <p>
              <strong>API calls : {apiCalls}</strong>
            </p>
          )}

          <Button color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CountModal;
