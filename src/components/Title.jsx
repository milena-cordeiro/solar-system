import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../estilos/Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="top__title">{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
