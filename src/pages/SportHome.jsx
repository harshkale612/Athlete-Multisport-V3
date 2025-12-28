import React, { useEffect } from 'react';
import SportHero from '../components/sport/SportHero';
import SportGallery from '../components/sport/SportGallery';
import SportAchievements from '../components/sport/SportAchievements';
import SportJourney from '../components/sport/SportJourney';
import SportMentors from '../components/sport/SportMentors';

const SportHome = ({ config }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [config.sportKey]);

    if (!config) {
        return (
            <div className="min-h-screen text-text flex items-center justify-center">
                Sport configuration not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-text">
            {/* 1. Sport Hero - Full-height with player image and stats */}
            <SportHero config={config} />

            {/* 2. Sport Gallery - Visual gallery */}
            <SportGallery config={config} />

            {/* 3. Achievements - Trophies, milestones */}
            <SportAchievements config={config} />

            {/* 4. Path / Journey - Timeline of progress */}
            <SportJourney config={config} />

            {/* 5. Mentors / Coaches - Mentor cards */}
            <SportMentors config={config} />
        </div>
    );
};

export default SportHome;
