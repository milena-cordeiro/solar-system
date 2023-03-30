import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../estilos/SolarSystem.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div className="page__solarSystem" data-testid="solar-system">
          {
            planets.map(({ name, image }) => (
              <PlanetCard key={ name } planetName={ name } planetImage={ image } />
            ))
          }
        </div>
      </>
    );
  }
}
