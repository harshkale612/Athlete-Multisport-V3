import React from 'react';
import SportHome from '../../pages/SportHome';
import { basketballConfig } from '../../data/sportPages/basketball';

const BasketballHome = () => {
    return <SportHome config={basketballConfig} />;
};

export default BasketballHome;
