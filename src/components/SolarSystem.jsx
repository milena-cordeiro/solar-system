import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

export default class SolarSystem extends Component {
  render() {
    const dataPlanets = planets;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {
          dataPlanets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
          ))
        }
      </div>
    );
  }
}
