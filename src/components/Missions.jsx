import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../estilos/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div className="page__missions" data-testid="missions">
          {
            missions.map(({ name, year, country, destination }) => (
              <MissionCard
                key={ name }
                name={ name }
                year={ year }
                country={ country }
                destination={ destination }
              />
            ))
          }
        </div>
      </>
    );
  }
}
