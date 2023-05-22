import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BidModal() {
  const [show, setShow] = useState(false);
  const [bidValue, setBidValue] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBidValueChange = (event) => setBidValue(event.target.value);
  const handleQuantityChange = (event) => setQuantity(event.target.value);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Place a Bid
      </Button>

      <Modal backdrop="static" centered className="modal fade popup" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Place a Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">You must bid at least <span className="price color-popup">5.23 ETH</span></p>
          <input type="text" className="form-control" placeholder="00.00 ETH" value={bidValue} onChange={handleBidValueChange} />
          <p>Enter quantity. <span className="color-popup">1 available</span></p>
          <input type="text" className="form-control quantity" value={quantity} onChange={handleQuantityChange} />
          <div className="hr"></div>
          <div className="d-flex justify-content-between">
            <p> Current Bid</p>
            <p className="text-right price color-popup"> 5.23 ETH </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Place a bid
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BidModal;
