import { timelineData } from '../timelineData';
import { trainingData } from '../trainingData';
import { statsData } from '../statsData';

const cricketTimeline = timelineData.filter(item => item.sportKey === 'cricket');
const cricketTraining = trainingData.map(day => ({
    ...day,
    sessions: day.sessions.filter(session => session.sportKey === 'cricket')
})).filter(day => day.sessions.length > 0);

export const cricketConfig = {
    sportKey: "cricket",
    sportName: "Cricket",
    accentColor: "cricket",
    tagline: "Patience meets Power",
    description: "In cricket, every ball is an event. It requires immense concentration and the ability to switch from defense to attack in a split second.",
    heroHighlights: [
        { label: "Runs", value: "3200" },
        { label: "Average", value: "45.5" },
        { label: "High Score", value: "112*" }
    ],
    stats: statsData.details.cricket,
    timeline: cricketTimeline,
    training: cricketTraining,
    media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972', alt: 'Cricket Field' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1531415074968-0dc416345853', alt: 'Cricket Batting' }
    ]
};
