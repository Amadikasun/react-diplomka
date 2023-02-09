import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';

interface Image {
  id: string;
  title: string;
  description: string;
  url: string;
}

const ImageList: React.FunctionComponent = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(process.env.REACT_APP_API_URL + '/index.json');
      
      const data = await response.json();
      console.log(Array.isArray(data));
      setImages(data);
    };
    fetchImages();
  }, []);

  const handleClose = () => setShowModal(false);
  const handleOpen = (image: Image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <div className='d-flex flex-wrap'>
      {images.map((image) => (
        <div className='col-12 col-sm-6 text-center p-2' key={image.id}>
          <h6>{image.title}</h6>
          <img className='imagesAPI' src={image.url} alt={image.title} onClick={() => handleOpen(image)} />
        </div>
      ))}
      <Modal size="lg" show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          <img className="modalimg p-3" src={selectedImage?.url} alt={selectedImage?.title} />
        </Modal.Body>
        <Modal.Footer>
          <p>{selectedImage?.description}</p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ImageList;