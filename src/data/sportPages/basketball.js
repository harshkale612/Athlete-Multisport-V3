export const basketballConfig = {
  sportKey: "basketball",
  sportName: "Basketball",
  accentColor: "basketball",
  tagline: "Rise Above",
  description:
    "Basketball is fast, physical, and rhythm-based. It challenges my agility and ability to make split-second decisions under pressure.",
  heroHighlights: [
    { label: "PPG", value: "15.2" },
    { label: "APG", value: "6.5" },
    { label: "Steals", value: "2.1" },
  ],
  stats: {
    games: 40,
    pointsPerGame: 15.2,
    assistsPerGame: 6.5,
    reboundsPerGame: 4.2,
  },
  timeline: [
    {
      id: 1,
      yearOrDate: "2018",
      title: "School Team Selection",
      description: "Made the varsity basketball team as a freshman.",
      isHighlight: false,
    },
    {
      id: 2,
      yearOrDate: "2022",
      title: "Regional MVP",
      description:
        "Awarded Most Valuable Player in the regional inter-school tournament.",
      isHighlight: true,
    },
  ],
  training: [
    {
      day: "Tuesday",
      sessions: [
        {
          title: "Shooting Drills",
          description: "300 made shots.",
          intensity: "Medium",
        },
      ],
      focusAreas: ["Shooting"],
    },
    {
      day: "Thursday",
      sessions: [
        {
          title: "Scrimmage",
          description: "Full court practice game.",
          intensity: "High",
        },
      ],
      focusAreas: ["Game IQ"],
    },
  ],
  media: [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Basketball Action",
    },
    {
      type: "image",
      src: "https://media.istockphoto.com/id/2162674652/photo/basketball-player-jumping-and-placing-ball-in-the-hoop-silhouette-of-man.webp?a=1&b=1&s=612x612&w=0&k=20&c=bm-AgeCzaPgkZc9K7Yfw9tNTZkreaIXb-fvsf4bOkyQ=",
      alt: "Basketball Hoop",
    },
  ],
};
