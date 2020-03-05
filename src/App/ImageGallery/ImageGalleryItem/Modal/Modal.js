import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { overlay, modal } from './Modal.module.css';

class Modal extends Component {
  beckdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBeckdrop = e => {
    const { current } = this.beckdropRef;

    if (current && e.target !== current) return;
    this.props.onClose();
  };

  render() {
    const { largeImage } = this.props;
    return (
      <div
        className={overlay}
        ref={this.beckdropRef}
        onClick={this.handleBeckdrop}
        onKeyPress={this.handleKeyPress}
        role="presentation"
      >
        <img className={modal} src={largeImage} alt={largeImage} />
      </div>
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
