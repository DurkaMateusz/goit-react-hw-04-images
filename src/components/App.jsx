import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './FetchImages/FetchImages';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeURL, setLargeURL] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  
  useEffect(() => {
    const addImages = async () => {
      try {
       setIsLoading(true);
       const { data } = await fetchImages(searchQuery, currentPage);
       setImages((prev) => [...prev, ...data.hits]);
       setTotalPages(Math.ceil(data.totalHits / 12));
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    if (searchQuery) addImages()
  }, [searchQuery, currentPage]);

  const handleSubmit = query => {
    setSearchQuery(query);
    setCurrentPage(1);
    setImages([]);
  };

  const handleMore = () => {
    setCurrentPage(prevPage => prevPage +1);
  };

  const openModal = (e) => {
    const img = e.currentTarget;
    const largeURL = img.getAttribute("data-large");
    const alt = img.alt;
    setLargeURL(largeURL);
    setModalAlt(alt);
    setModalIsOpen(true);

    window.addEventListener("keydown", handleKey);
  }

  const closeModal = () => {
    setLargeURL("");
    setModalAlt("");
    setModalIsOpen(false);
    window.removeEventListener("keydown", handleKey);
  }

  const handleKey = (e) => {
    if (e.code === "Escape") {
      closeModal();
    }
  }
   
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={openModal} />
        {images.length > 0 && !isLoading && currentPage < totalPages && (
          <Button onClick={handleMore} label="Load more" />
        )}
        {modalIsOpen && <Modal src={largeURL} alt={modalAlt} onClick={closeModal} />}
      </div>
    );
  };

