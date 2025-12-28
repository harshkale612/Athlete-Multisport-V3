import React from 'react';
import SportHome from '../../pages/SportHome';
import { cricketConfig } from '../../data/sportPages/cricket';

const CricketHome = () => {
    return <SportHome config={cricketConfig} />;
};

export default CricketHome;
