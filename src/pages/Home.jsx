import React from 'react';
import HomeHero from '../components/hero/HomeHero';
import AboutSection from '../components/about/AboutSection';
import SportsOverview from '../components/sports/SportsOverview';
import YouInSportsPostsSection from '../components/youinsports/YouInSportsPostsSection';
import PhilosophySection from '../components/philosophy/PhilosophySection';
import CTASection from '../components/cta/CTASection';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-text overflow-hidden">
            {/* 1. Home Hero (Global) - Athlete identity, multi-sport representation */}
            <HomeHero />

            {/* 2. About the Athlete - Editorial storytelling */}
            <AboutSection />

            {/* 3. Sports Overview - Interactive sport selector/cards */}
            <SportsOverview />

            {/* 4. YouInSports Posts - Recent updates and achievements */}
            <YouInSportsPostsSection />

            {/* 5. Philosophy / Path Overview - Short narrative */}
            <PhilosophySection />

            {/* 6. Call to Action - Explore sports / journey / contact */}
            <CTASection />
        </div>
    );
};

export default Home;
