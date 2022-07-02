import React, { useState } from "react";
import {
  Modal,
  Header,
  Form,
  FormInput,
  Button,
  Image,
} from "semantic-ui-react";
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
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="large" color="green">
          Update
        </Button>
      }
    >
      <Modal.Header>Please Update The News</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Enter Your news to update</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="enter here"
              onChange={handleChange}
              value={news}
            />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="Update News"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              positive
            />
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default UpdateModal;
