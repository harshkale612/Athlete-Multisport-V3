import { timelineData } from '../timelineData';
import { trainingData } from '../trainingData';
import { statsData } from '../statsData';

const footballTimeline = timelineData.filter(item => item.sportKey === 'football');
const footballTraining = trainingData.map(day => ({
    ...day,
    sessions: day.sessions.filter(session => session.sportKey === 'football')
})).filter(day => day.sessions.length > 0);

export const footballConfig = {
    sportKey: "football",
    sportName: "Football",
    accentColor: "football",
    tagline: "Speed, Vision, Passion",
    description: "Football allows me to express myself physically and tactically. Leading the team and controlling the midfield is where I feel most alive.",
    heroHighlights: [
        { label: "Goals", value: "34" },
        { label: "Assists", value: "58" },
        { label: "Matches", value: "120" }
    ],
    stats: statsData.details.football,
    timeline: footballTimeline,
    training: footballTraining,
    media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=1000', alt: 'Football Match' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1000', alt: 'Football Training' }
    ]
};
