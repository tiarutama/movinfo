import { useState } from 'react';
import { Button, Card, Col, Image, Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Col md={4}>
        <Card bg="success" className="text-white text-center movieImage my-4">
            <Image src={API_IMG + poster_path} className="img" />
            <Card.Title className="my-3">{title}</Card.Title>
            <Button variant="light" onClick={handleShow}>See Detail</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <h3>{title}</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Image src={API_IMG + poster_path} className="imgDetail"/>
                <h6>IMDb : {vote_average}</h6>
                <h6>Release Date : {release_date}</h6>
                <h6>Storyline :</h6>
                <p>{overview}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Card>
        </Col>
    )
}

export default MovieBox;