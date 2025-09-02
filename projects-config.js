// =============================================
// 🎯 PORTFOLIO PROJECTS CONFIGURATION
// =============================================
// This file contains all project data for easy management
// Last updated: September 2, 2025

// Instructions for updating projects:
// 1. To add a new project: Add a new object to the respective array
// 2. To modify links: Update liveLink or githubLink properties  
// 3. To remove a project: Delete the object from the array
// 4. Set liveLink to null if no live demo is available
// 5. Set githubLink to null if no GitHub repository is available
// 6. Tech array can contain any technology tags you want to display

// =============================================
// FEATURED PROJECTS (shown initially on page)
// =============================================
// Note: These are currently managed in index.html
// You can move them here if you want to manage them via JavaScript

const FEATURED_PROJECTS = [
    {
        title: 'PopChoice 🎬',
        description: 'AI Movie Recommendation App with semantic search and machine learning',
        image: './assets/popchoice.png',
        liveLink: 'https://pppppop-choice-app.netlify.app',
        githubLink: 'https://github.com/vishalnarayan2809/PopChoice',
        tech: ['React', 'AI/ML', 'Supabase', 'Vite']
    },
    {
        title: 'Thirtfifth',
        description: 'Co-founded streetwear startup with full e-commerce platform',
        image: './assets/thirtyfifth.png',
        liveLink: 'https://thirtyfifth.company.site/',
        githubLink: 'https://github.com/vishalnarayan2809/Thirtfifth',
        tech: ['React.js', 'E-commerce', 'Startup']
    }
    // Add more featured projects here...
];

// =============================================
// HIDDEN PROJECTS (shown when "View More" is clicked)
// =============================================
const HIDDEN_PROJECTS = [
    {
        title: 'Hangman Game',
        description: 'Programming-themed hangman game with modern UI',
        image: './assets/hangman.png',
        liveLink: 'https://proghangman.netlify.app/',
        githubLink: 'https://github.com/vishalnarayan2809/Hangman-Game',
        tech: ['JavaScript', 'CSS3', 'HTML5']
    },
    {
        title: 'React Trivia',
        description: 'Interactive trivia application with API integration',
        image: './assets/react_trivia.png',
        liveLink: 'https://reactriviaa.netlify.app/', // 🔧 UPDATE: Add your actual live link here
        githubLink: 'https://github.com/vishalnarayan2809/React-Trivia',
        tech: ['React', 'API', 'CSS']
    },
    {
        title: 'Password Generator',
        description: 'Secure password generator with multiple options',
        image: './assets/password_gen.png',
        liveLink: null, // 🔧 UPDATE: Add your actual live link here
        githubLink: 'https://github.com/vishalnarayan2809/Password-Generator',
        tech: ['JavaScript', 'Security', 'Web']
    },
    {
        title: 'Color Scheme Chooser',
        description: 'Generate beautiful color schemes for your projects',
        image: './assets/color_picker.png',
        liveLink: 'https://colorrrrpicker.netlify.app/', // 🔧 UPDATE: Add your actual live link here
        githubLink: 'https://github.com/vishalnarayan2809/color-scheme',
        tech: ['JavaScript', 'CSS', 'API']
    },
    {
        title: 'Movie Watchlist App',
        description: 'Search and save movies to your personal watchlist',
        image: './assets/watchlist.png',
        liveLink: 'https://watchhhhlist.netlify.app/search/index.html', // 🔧 UPDATE: Add your actual live link here
        githubLink: 'https://github.com/vishalnarayan2809/Watchlist',
        tech: ['JavaScript', 'API', 'LocalStorage']
    },
    {
        title: 'Personal Finance Tracker',
        description: 'Track expenses and visualize financial data with charts',
        image: './assets/personal-finance.png',
        liveLink: null, // 🔧 UPDATE: Add your actual live link here
        githubLink: 'https://github.com/vishalnarayan2809/Personal-Finance-Tracker',
        tech: ['JavaScript', 'Chart.js', 'CSS']
    },
    {
        title: 'Social Media App',
        description: 'Flutter social platform with Firebase backend',
        image: './assets/social.jpg',
        liveLink: null, // No live demo for mobile app
        githubLink: 'https://github.com/vishalnarayan2809/social',
        tech: ['Flutter', 'Firebase', 'Social']
    },
    {
        title: 'Habit Tracker',
        description: 'Track daily habits with heat map visualization',
        image: './assets/habit.jpg',
        liveLink: null, // No live demo for mobile app
        githubLink: 'https://github.com/vishalnarayan2809/Habit_Tracker',
        tech: ['Flutter', 'ISAR', 'State Management']
    },
    {
        title: 'Flutter Authentication',
        description: 'Complete authentication system with Firebase',
        image: './assets/Auth.jpg',
        liveLink: null, // No live demo for mobile app
        githubLink: 'https://github.com/vishalnarayan2809/Firebase_Authentication_in_Flutter',
        tech: ['Flutter', 'Firebase Auth', 'Google Sign-in']
    }
];

// =============================================
// PROJECT TEMPLATE (copy this for new projects)
// =============================================
/*
{
    title: 'Project Name',
    description: 'Brief description of what the project does',
    image: './assets/project-image.png',
    liveLink: 'https://your-live-demo.netlify.app/', // or null if no demo
    githubLink: 'https://github.com/username/repository', // or null if no repo
    tech: ['Technology1', 'Technology2', 'Technology3'] // array of tech stack
}
*/

// =============================================
// EXPORT CONFIGURATIONS
// =============================================
// Make configurations available to main script
window.PORTFOLIO_CONFIG = {
    FEATURED_PROJECTS,
    HIDDEN_PROJECTS
};

// =============================================
// 📋 MAINTENANCE CHECKLIST
// =============================================
// □ Update live links with actual deployed URLs
// □ Verify all GitHub repository links are correct
// □ Check that all image paths are valid
// □ Test links open in new tabs correctly
// □ Ensure tech stack tags are consistent
// □ Validate project descriptions are clear and professional
// =============================================
