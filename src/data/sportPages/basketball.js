export const basketballConfig = {
    sportKey: "basketball",
    sportName: "Basketball",
    accentColor: "basketball",
    tagline: "Rise Above",
    description: "Basketball is fast, physical, and rhythm-based. It challenges my agility and ability to make split-second decisions under pressure.",
    heroHighlights: [
        { label: "PPG", value: "15.2" },
        { label: "APG", value: "6.5" },
        { label: "Steals", value: "2.1" }
    ],
    stats: {
        games: 40,
        pointsPerGame: 15.2,
        assistsPerGame: 6.5,
        reboundsPerGame: 4.2
    },
    timeline: [
        {
            id: 1,
            yearOrDate: "2018",
            title: "School Team Selection",
            description: "Made the varsity basketball team as a freshman.",
            isHighlight: false
        },
        {
            id: 2,
            yearOrDate: "2022",
            title: "Regional MVP",
            description: "Awarded Most Valuable Player in the regional inter-school tournament.",
            isHighlight: true
        }
    ],
    training: [
        {
            day: "Tuesday",
            sessions: [
                { title: "Shooting Drills", description: "300 made shots.", intensity: "Medium" }
            ],
            focusAreas: ["Shooting"]
        },
        {
            day: "Thursday",
            sessions: [
                { title: "Scrimmage", description: "Full court practice game.", intensity: "High" }
            ],
            focusAreas: ["Game IQ"]
        }
    ],
    media: [
        { type: 'image', src: 'https://images.unsplash.com/photo-1519861531473-92002639313a', alt: 'Basketball Action' },
        { type: 'image', src: 'https://images.unsplash.com/photo-1546519638-68e109498ee2', alt: 'Basketball Hoop' }
    ]
};
