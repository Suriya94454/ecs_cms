import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(true);

  return (
    <div className="d-flex justify-content-start p-2">
      <button className="btn btn-outline-dark"
        style={{ marginTop: "10px" }}
        onClick={handleShow}>
        Add +
      </button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Popup Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row py-4">
              <div className="col-md-6 col-12 mb-2 card shadow-lg">
                Some quick example text to build on the card title and
                make up the bulk of the card's content.
              </div>
              <div className="col-md-6 col-12 mb-2 card shadow-lg">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </div>
              <div className="col-md-6 col-12 mb-2 card shadow-lg">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
