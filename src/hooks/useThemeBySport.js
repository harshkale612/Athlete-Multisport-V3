export const getThemeBySport = (sportKey) => {
    const themes = {
        chess: {
            accentColor: "#F59E0B", // amber-500
            tailwindText: "text-chess",
            tailwindBg: "bg-chess",
            tailwindBorder: "border-chess",
            label: "Chess",
        },
        football: {
            accentColor: "#10B981", // emerald-500
            tailwindText: "text-football",
            tailwindBg: "bg-football",
            tailwindBorder: "border-football",
            label: "Football",
        },
        cricket: {
            accentColor: "#06B6D4", // cyan-500
            tailwindText: "text-cricket",
            tailwindBg: "bg-cricket",
            tailwindBorder: "border-cricket",
            label: "Cricket",
        },
        basketball: {
            accentColor: "#F97316", // orange-500
            tailwindText: "text-basketball",
            tailwindBg: "bg-basketball",
            tailwindBorder: "border-basketball",
            label: "Basketball",
        },
        tennis: {
            accentColor: "#84CC16", // lime-500
            tailwindText: "text-tennis",
            tailwindBg: "bg-tennis",
            tailwindBorder: "border-tennis",
            label: "Tennis",
        },
        multi: {
            accentColor: "#2563EB", // blue-600 (primary)
            tailwindText: "text-primary",
            tailwindBg: "bg-primary",
            tailwindBorder: "border-primary",
            label: "Multi-Sport",
        },
        training: {
            accentColor: "#9CA3AF", // gray-400
            tailwindText: "text-gray-400",
            tailwindBg: "bg-gray-400",
            tailwindBorder: "border-gray-400",
            label: "Training",
        }
    };

    return themes[sportKey] || themes['multi'];
};

// Aliases for backward compatibility if needed, but we will update all usages.
export const useThemeBySport = getThemeBySport;
