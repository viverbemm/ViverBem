import React, { useState } from 'react';
import './crud_imagens.module.css';  

function ImageCrud() {
  const [images, setImages] = useState([]);  
  const [newImage, setNewImage] = useState(null); 
  const [editingIndex, setEditingIndex] = useState(null);  
  const [editedImage, setEditedImage] = useState(null); 
  const [error, setError] = useState("");  
  const [selectedImage, setSelectedImage] = useState(null);  

  const allowedFormats = ["image/jpeg", "image/png", "image/svg+xml", "image/gif", "image/webp"];

  const handleAddImage = (e) => {
    const file = e.target.files[0];  

    if (!file) {
      return alert("Por favor, selecione uma imagem.");
    }

    if (!allowedFormats.includes(file.type)) {
      setError("Formato de imagem não suportado. Apenas JPG, PNG, SVG, GIF, WebP são permitidos.");
      return;
    }

    setError(""); 

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageObject = {
        id: new Date().getTime(),  
        url: reader.result, 
        file: file,  
      };
      setImages([...images, imageObject]);  
    };
    reader.readAsDataURL(file);  
  };

  const handleDeleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);  
  };

  const handleEditImage = (index) => {
    setEditingIndex(index); 
    setEditedImage(images[index].file); 
  };

  const handleSaveEdit = () => {
    if (!editedImage) return alert("Selecione uma imagem para editar.");

    if (!allowedFormats.includes(editedImage.type)) {
      setError("Formato de imagem não suportado. Apenas JPG, PNG, SVG, GIF, WebP são permitidos.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedImages = [...images];
      updatedImages[editingIndex].url = reader.result; 
      updatedImages[editingIndex].file = editedImage;  
      setImages(updatedImages);  
      setEditingIndex(null);  
      setEditedImage(null);  
      setError("");  
    };
    reader.readAsDataURL(editedImage);  
  };

  const handleUpdateImage = () => {
    if (!editedImage) return alert("Selecione uma imagem para atualizar.");

    if (!allowedFormats.includes(editedImage.type)) {
      setError("Formato de imagem não suportado. Apenas JPG, PNG, SVG, GIF, WebP são permitidos.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedImages = [...images];
      updatedImages[editingIndex].url = reader.result;  
      updatedImages[editingIndex].file = editedImage;  
      setImages(updatedImages);  
      setError("");  
    };
    reader.readAsDataURL(editedImage);  
  };

  const handleSelectImage = (image) => {
    setSelectedImage(image);  
  };

  const closeModal = () => {
    setSelectedImage(null);  
  };

  return (
    <div>
      <h1>CRUD de Imagens</h1>

      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

      <div>
        <input type="file" onChange={handleAddImage} />
      </div>

      <div>
        <h2>Imagens Carregadas</h2>
        {images.length === 0 ? (
          <p>Nenhuma imagem carregada.</p>
        ) : (
          <ul>
            {images.map((image, index) => (
              <li key={image.id}>
                <img 
                  src={image.url} 
                  alt={`Imagem ${index}`} 
                  width="100" 
                  onClick={() => handleSelectImage(image)}  
                  style={{ cursor: 'pointer', margin: '10px' }}  
                />
                <div>
                  <button onClick={() => handleDeleteImage(index)}>Deletar</button>
                  <button onClick={() => handleEditImage(index)}>Editar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <img 
              src={selectedImage.url} 
              alt="Imagem Selecionada" 
              className="modal-image"
            />
            <div>
              <button onClick={closeModal} className="close-button">Fechar</button>
            </div>
          </div>
        </div>
      )}

      {editingIndex !== null && (
        <div>
          <h2>{editedImage ? 'Atualizar Imagem' : 'Editar Imagem'}</h2>
          <input
            type="file"
            onChange={(e) => setEditedImage(e.target.files[0])}
          />
          <button onClick={editedImage ? handleUpdateImage : handleSaveEdit}>
            {editedImage ? 'Atualizar' : 'Salvar Edição'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ImageCrud;  
