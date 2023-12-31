import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../estilos/MissionCard.css';

class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="page__missionCard" data-testid="mission-card">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MissionCard;
