import React from 'react';
import SportHome from '../../pages/SportHome';
import { chessConfig } from '../../data/sportPages/chess';

const ChessHome = () => {
    return <SportHome config={chessConfig} />;
};

export default ChessHome;
