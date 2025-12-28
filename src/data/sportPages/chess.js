import { timelineData } from '../timelineData';
import { trainingData } from '../trainingData';
import { mediaData } from '../mediaData';
import { statsData } from '../statsData';

const chessTimeline = timelineData.filter(item => item.sportKey === 'chess');
const chessTraining = trainingData.map(day => ({
    ...day,
    sessions: day.sessions.filter(session => session.sportKey === 'chess')
})).filter(day => day.sessions.length > 0);

export const chessConfig = {
    sportKey: "chess",
    sportName: "Chess",
    accentColor: "chess", // Refers to tailwind config color
    tagline: "The Art of Strategy",
    description: "Chess is not just a game; it's a battle of minds. It has taught me the importance of planning, patience, and adapting to the opponent's moves.",
    heroHighlights: [
        { label: "Rating", value: "2350" },
        { label: "Title", value: "NM" },
        { label: "Win Rate", value: "65%" }
    ],
    stats: statsData.details.chess,
    timeline: chessTimeline,
    training: chessTraining,
    media: [
        // Filter or add specific media here. using generic for now if not available in mediaData with key
        { type: 'image', src: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000', alt: 'Chess Board' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1000', alt: 'Chess Tournament' }
    ]
};
