import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import services from './services/apiService';
import { app, loader } from './App.module.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isLoading: false,
      error: false,
    };
  }

  serviceSearchImages = async query => {
    try {
      this.setState({ isLoading: true });
      if (query) {
        services.resetPage();
        services.searchQuery(query);
        const { hits } = await services.fatchImages();
        this.setState({ images: [...hits] });
      } else {
        services.incrementPage();
        const { hits } = await services.fatchImages();
        const newArray = [...this.state.images, ...hits];
        this.setState({ images: [...newArray] });
      }
      this.setState({ isLoading: false });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch {
      this.setState({ error: true });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <div className={app}>
        <Searchbar serviceSearchImages={this.serviceSearchImages} />
        {error && (
          <p>Something terrible happened, but we are already fixing it</p>
        )}
        <ImageGallery images={images} />
        {isLoading && (
          <Loader
            className={loader}
            type="ThreeDots"
            color="#3F51B5"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {images.length > 0 && (
          <Button serviceSearchImages={this.serviceSearchImages} />
        )}
      </div>
    );
  }
}

export default App;
