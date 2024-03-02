import React, { Component } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      page: 1,
      images: [],
      largeImageURL: '',
      isLoading: false,
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

  render() {
    const { images, isLoading } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        <ImageGallery images={images} />
      </div>
    )
  }
}
