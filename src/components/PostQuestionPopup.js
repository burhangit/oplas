import React from "react";
import "./postQuestionsPopup.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PostQuestionPopup = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ask a Question
        </Modal.Title>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a Poll
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div id="editor">
          <p>This is an example editor.</p>
        </div>

        <button onclick="document.querySelector( '#output' ).innerText = window.editor.getData();">
          Click to refresh the output below:
        </button>

        <pre id="output"></pre>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostQuestionPopup;
