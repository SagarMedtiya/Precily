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

const AddModal = ({ news, setNews }) => {
  const [open, setOpen] = useState(false);
  const [addNews, setAddNews] = useState("");

  const add = () => {};

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
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button size="large" color="purple">
          Add
        </Button>
      }
    >
      <Modal.Header>Enter the News to Add</Modal.Header>
      <Modal.Content image>
        
        <Modal.Description>
          <Header>Enter your news to add</Header>
          <Form onSubmit={handleSubmit}>
            <FormInput
              type="text"
              placeholder="enter here"
              onChange={handleChange}
              value={addNews}
            />
            <Button color="black" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button
              content="Add News"
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

export default AddModal;
