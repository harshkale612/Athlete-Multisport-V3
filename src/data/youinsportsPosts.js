// Dummy data for YouInSports posts
// TODO: Replace with real API call when backend is ready
// Expected API endpoint: GET /api/athlete/{athleteId}/posts

export const youinsportsPosts = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        caption: 'Tropical paradise training session! 🌴 Crystal waters and perfect conditions for water sports.',
        sport: 'swimming',
        createdAt: '2024-01-15T10:30:00Z',
        likesCount: 523,
        commentsCount: 47
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        caption: 'Morning beach run with this view 🌊 The perfect start to a training day in paradise.',
        sport: 'running',
        createdAt: '2024-01-14T06:30:00Z',
        likesCount: 412,
        commentsCount: 38
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop',
        caption: 'Exploring hidden waterfalls between training sessions 🏞️ Nature fuels the soul!',
        sport: null,
        createdAt: '2024-01-13T14:20:00Z',
        likesCount: 689,
        commentsCount: 52
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&h=600&fit=crop',
        caption: 'Tropical court tennis session 🎾 The humidity adds an extra challenge to the game!',
        sport: 'tennis',
        createdAt: '2024-01-12T16:45:00Z',
        likesCount: 356,
        commentsCount: 29
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
        caption: 'Sunset yoga flow overlooking the ocean 🧘‍♀️ Balance in body and mind.',
        sport: null,
        createdAt: '2024-01-11T18:00:00Z',
        likesCount: 734,
        commentsCount: 61
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        caption: 'Mountain trail run with tropical views 🏔️ Every step is worth it for scenes like this!',
        sport: 'running',
        createdAt: '2024-01-10T07:15:00Z',
        likesCount: 445,
        commentsCount: 33
    },
    {
        id: '7',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
        caption: 'Beach volleyball tournament 🏐 Sand, sun, and intense competition!',
        sport: 'volleyball',
        createdAt: '2024-01-09T12:30:00Z',
        likesCount: 567,
        commentsCount: 44
    },
    {
        id: '8',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
        caption: 'Kayaking through mangrove forests 🚣‍♀️ Upper body workout in paradise!',
        sport: 'kayaking',
        createdAt: '2024-01-08T10:45:00Z',
        likesCount: 423,
        commentsCount: 36
    },
    {
        id: '9',
        image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop',
        caption: 'Tropical golf course views ⛳ Perfect weather for working on the swing.',
        sport: 'golf',
        createdAt: '2024-01-07T14:20:00Z',
        likesCount: 389,
        commentsCount: 31
    },
    {
        id: '10',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        caption: 'Rock climbing by the sea 🧗‍♀️ The ultimate test of strength and focus.',
        sport: 'climbing',
        createdAt: '2024-01-06T09:30:00Z',
        likesCount: 612,
        commentsCount: 48
    },
    {
        id: '11',
        image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop',
        caption: 'Tropical island cycling adventure 🚴‍♀️ Exploring every scenic route possible!',
        sport: 'cycling',
        createdAt: '2024-01-05T08:00:00Z',
        likesCount: 534,
        commentsCount: 42
    },
    {
        id: '12',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        caption: 'Evening surf session 🏄‍♀️ Chasing waves and golden hour perfection.',
        sport: 'surfing',
        createdAt: '2024-01-04T17:45:00Z',
        likesCount: 789,
        commentsCount: 63
    }
];

// Helper function to format relative time
export const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d ago`;
    
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
};

// Helper function to get sport display name
export const getSportDisplayName = (sportKey) => {
    const sportMap = {
        'football': 'Football',
        'chess': 'Chess',
        'cricket': 'Cricket',
        'basketball': 'Basketball',
        'tennis': 'Tennis',
        'swimming': 'Swimming',
        'running': 'Running',
        'volleyball': 'Volleyball',
        'kayaking': 'Kayaking',
        'golf': 'Golf',
        'climbing': 'Climbing',
        'cycling': 'Cycling',
        'surfing': 'Surfing'
    };
    return sportMap[sportKey] || null;
};

