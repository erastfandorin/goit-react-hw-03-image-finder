import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  searchbar,
  searchForm,
  searchFormButton,
  searchFormButtonLabel,
  searchFormInput,
} from './Searchbar.module.css';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  handlChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handlSubmit = e => {
    e.preventDefault();
    this.props.serviceSearchImages(this.state.query);
  };

  render() {
    const { query } = this.state;
    return (
      <header className={searchbar}>
        <form className={searchForm} onSubmit={this.handlSubmit}>
          <button type="submit" className={searchFormButton}>
            <span className={searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={searchFormInput}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            value={query}
            onChange={this.handlChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  serviceSearchImages: PropTypes.func.isRequired,
};

export default Searchbar;
