import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { Button } from './Button/Button';
import Modal from './Modal/Modal';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      page: 1,
      images: [],
      isLoading: false,
      largeURL: "",
      modalAlt: "",
      modalIsOpen: false,
    };
  }

  fetchImages = async () => {
    const { searchQuery, page } = this.state;

    if (this.state.isLoading) return;

    this.setState({ isLoading: true });

    const apiKey = "41298074-cfd64eaa637c088c07f5acf73";
    const url = `https://pixabay.com/api/?q=${encodeURIComponent(
      searchQuery
    )}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    try {
      const response = await axios.get(url);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  

  handleSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  };

  handleMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  openModal = (e) => {
    const img = e.currentTarget;
    const large = img.getAttribute("data-large");
    const alt = img.alt;
    this.setState({
      largeURL: large,
      modalAlt: alt,
      modalIsOpen: true,
    });
    window.addEventListener("keydown", this.handleKey);
  }

  closeModal = () => {
    this.setState({
      largeURL: "",
      modalAlt: "",
      modalIsOpen: false,
    });
    window.removeEventListener("keydown", this.handleKey);
  }

  handleKey = (e) => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  }

  render() {
    const { images, isLoading, largeURL, modalAlt, modalIsOpen } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={this.openModal} />
        {images.length > 0 && !isLoading && (
          <Button onClick={this.handleMore} label="Load more" />
        )}
        {modalIsOpen && <Modal src={largeURL} alt={modalAlt} onClick={this.closeModal} />}
      </div>
    )
  }
}
