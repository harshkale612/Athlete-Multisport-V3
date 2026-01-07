// Dummy data for YouInSports posts
// TODO: Replace with real API call when backend is ready
// Expected API endpoint: GET /api/athlete/{athleteId}/posts

export const youinsportsPosts = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        caption: 'Just finished an intense training session. The grind never stops! 💪 Ready for the upcoming tournament.',
        sport: 'football',
        createdAt: '2024-01-15T10:30:00Z',
        likesCount: 234,
        commentsCount: 18
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=600&fit=crop',
        caption: 'Victory in today\'s chess championship! Strategic thinking and patience paid off. 🏆',
        sport: 'chess',
        createdAt: '2024-01-12T14:20:00Z',
        likesCount: 456,
        commentsCount: 32
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop',
        caption: 'Team practice session. Building chemistry and perfecting our game plan. Great energy today! ⚽',
        sport: 'football',
        createdAt: '2024-01-10T16:45:00Z',
        likesCount: 189,
        commentsCount: 12
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=800&h=600&fit=crop',
        caption: 'Net practice before the big match. Focus on technique and consistency. Cricket is all about precision! 🏏',
        sport: 'cricket',
        createdAt: '2024-01-08T09:15:00Z',
        likesCount: 312,
        commentsCount: 24
    },
    {
        id: '5',
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        caption: 'Morning run to build endurance. Cross-training is key for multi-sport athletes. Every step counts! 🏃',
        sport: null,
        createdAt: '2024-01-05T07:00:00Z',
        likesCount: 178,
        commentsCount: 15
    },
    {
        id: '6',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        caption: 'Analyzing game footage from yesterday\'s match. Learning from every play, every move. Growth mindset! 📊',
        sport: 'football',
        createdAt: '2024-01-03T20:30:00Z',
        likesCount: 267,
        commentsCount: 19
    },
    {
        id: '7',
        image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop',
        caption: 'Chess tournament preparation. Studying grandmaster games and sharpening tactical skills. 🎯',
        sport: 'chess',
        createdAt: '2024-01-01T11:00:00Z',
        likesCount: 389,
        commentsCount: 28
    },
    {
        id: '8',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        caption: 'Grateful for the support from my coaches and teammates. Together we achieve greatness! 🙏',
        sport: null,
        createdAt: '2023-12-28T18:20:00Z',
        likesCount: 523,
        commentsCount: 41
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
        'tennis': 'Tennis'
    };
    return sportMap[sportKey] || null;
};

