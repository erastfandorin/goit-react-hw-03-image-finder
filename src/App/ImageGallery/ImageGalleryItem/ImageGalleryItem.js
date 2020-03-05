import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';
import {
  imageGalleryItem,
  imageGalleryItemImage,
} from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
    };
  }

  onImageEnlarge = () => {
    this.setState({ modal: true });
  };

  onClose = () => {
    this.setState({ modal: false });
  };

  render() {
    const { image } = this.props;
    const { modal } = this.state;
    return (
      <>
        {modal ? (
          <Modal largeImage={image.largeImageURL} onClose={this.onClose} />
        ) : (
          <li className={imageGalleryItem}>
            <img
              src={image.webformatURL}
              alt={image.webformatURL}
              className={imageGalleryItemImage}
              onClick={this.onImageEnlarge}
              onKeyPress={this.onImageEnlarge}
              role="presentation"
            />
          </li>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
