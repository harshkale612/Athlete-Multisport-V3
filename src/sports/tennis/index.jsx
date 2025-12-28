import React from 'react';
import SportHome from '../../pages/SportHome';
import { tennisConfig } from '../../data/sportPages/tennis';

const TennisHome = () => {
    return <SportHome config={tennisConfig} />;
};

export default TennisHome;
