export const tennisConfig = {
    sportKey: "tennis",
    sportName: "Tennis",
    accentColor: "tennis",
    tagline: "Serve & Volley",
    description: "Tennis is individual warfare. It forces me to rely completely on my own skills and mental resilience.",
    heroHighlights: [
        { label: "Win %", value: "72%" },
        { label: "Aces", value: "150+" },
        { label: "Titles", value: "3" }
    ],
    stats: {
        matches: 60,
        winRate: "72%",
        aces: 150,
        firstServePercentage: "65%"
    },
    timeline: [
        {
            id: 1,
            yearOrDate: "2020",
            title: "Started Competing",
            description: "Entered first local tennis championship.",
            isHighlight: false
        },
        {
            id: 2,
            yearOrDate: "2023",
            title: "City Open Finalist",
            description: "Reached the finals of the annual City Open tournament.",
            isHighlight: true
        }
    ],
    training: [
        {
            day: "Wednesday",
            sessions: [
                { title: "Serve Practice", description: "Focusing on placement and power.", intensity: "Medium" }
            ],
            focusAreas: ["Technique"]
        },
        {
            day: "Saturday",
            sessions: [
                { title: "Match Play", description: "Competitive sets against practice partners.", intensity: "High" }
            ],
            focusAreas: ["Competition"]
        }
    ],
    media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1595435934249-fd96316cd29a?auto=format&fit=crop&q=80&w=1000', alt: 'Tennis Racket' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80&w=1000', alt: 'Tennis Court' }
    ]
};
