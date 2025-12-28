import React from 'react';
import SportHome from '../../pages/SportHome';
import { footballConfig } from '../../data/sportPages/football';

const FootballHome = () => {
    return <SportHome config={footballConfig} />;
};

export default FootballHome;
