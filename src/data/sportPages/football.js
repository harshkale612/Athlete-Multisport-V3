import { timelineData } from "../timelineData";
import { trainingData } from "../trainingData";
import { statsData } from "../statsData";

const footballTimeline = timelineData.filter(
  (item) => item.sportKey === "football"
);
const footballTraining = trainingData
  .map((day) => ({
    ...day,
    sessions: day.sessions.filter((session) => session.sportKey === "football"),
  }))
  .filter((day) => day.sessions.length > 0);

export const footballConfig = {
  sportKey: "football",
  sportName: "Football",
  accentColor: "football",
  tagline: "Speed, Vision, Passion",
  description:
    "Football allows me to express myself physically and tactically. Leading the team and controlling the midfield is where I feel most alive.",
  heroHighlights: [
    { label: "Goals", value: "34" },
    { label: "Assists", value: "58" },
    { label: "Matches", value: "120" },
  ],
  stats: statsData.details.football,
  timeline: footballTimeline,
  training: footballTraining,
  media: [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fEZvb3RiYWxsfGVufDB8fDB8fHww?auto=format&fit=crop&q=80&w=1000",
      alt: "Football Match",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=1000",
      alt: "Football Training",
    },
  ],
};
