/**
 * WebTube — Next-Generation YouTube Web Application
 * Modular, vanilla JavaScript featuring full client-side state management,
 * YouTube watch experience, vertical Shorts reel, voice search, & themes.
 */

// =============================================================================
// 1. Initial Video Dataset (24+ Curated Real YouTube Videos)
// =============================================================================
const INITIAL_VIDEOS = [
    {
        id: "PkZNo7MFNFg",
        title: "Learn JavaScript in 30 Minutes (Fast & Complete)",
        channel: "Web Dev Simplified",
        subscribers: "1.45M",
        views: "1.2M views",
        rawViews: 1200000,
        time: "3 days ago",
        duration: "30:00",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=720&h=405&fit=crop",
        avatar: "W",
        color: "#ea580c",
        description: `Everything you need to know to get started with modern JavaScript in 30 minutes! In this video we cover variables, data types, functions, arrow functions, DOM manipulation, arrays, promises, and async/await.\n\nTimestamps:\n0:00 - Introduction\n2:15 - Variables & Data Types\n8:40 - Functions\n15:10 - Array Methods\n22:30 - Async JS`
    },
    {
        id: "jfKfPfyJRdk",
        title: "lofi hip hop radio 📚 - beats to relax/study to",
        channel: "Lofi Girl",
        subscribers: "14.2M",
        views: "52M views",
        rawViews: 52000000,
        time: "Streamed live",
        duration: "LIVE",
        category: "Live",
        image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=720&h=405&fit=crop",
        avatar: "L",
        color: "#db2777",
        description: `Welcome to the Lofi Girl livestream! Peaceful lo-fi hip hop beats to help you study, work, code, or chill. Relax and enjoy the cozy atmosphere.\n\n🎶 Music provided by Lofi Records\n🎨 Animation by Juan Pablo`
    },
    {
        id: "UB1O30fR-EE",
        title: "HTML, CSS & JavaScript Complete Masterclass Project",
        channel: "Code Academy",
        subscribers: "890K",
        views: "420K views",
        rawViews: 420000,
        time: "1 week ago",
        duration: "45:15",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&h=405&fit=crop",
        avatar: "C",
        color: "#2563eb",
        description: `Build and deploy a full responsive website using HTML5, modern CSS3 Flexbox/Grid, and vanilla JavaScript from scratch with zero external libraries.\n\nSource code and assets linked below!`
    },
    {
        id: "bMknfKXIFA8",
        title: "React Course - Beginner's Tutorial for 2026",
        channel: "freeCodeCamp",
        subscribers: "9.8M",
        views: "3.1M views",
        rawViews: 3100000,
        time: "2 weeks ago",
        duration: "2:14:10",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=720&h=405&fit=crop",
        avatar: "F",
        color: "#059669",
        description: `Learn React by building 8 real-world interactive web applications with Hooks, Context API, state management, and modern component design patterns.`
    },
    {
        id: "W6NZfCO5SIk",
        title: "Next-Gen Unreal Engine 5.5 Gameplay Showcase",
        channel: "Gaming Pulse",
        subscribers: "650K",
        views: "890K views",
        rawViews: 890000,
        time: "4 days ago",
        duration: "14:28",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&h=405&fit=crop",
        avatar: "G",
        color: "#dc2626",
        description: `Experience the breathtaking photorealistic capabilities of Unreal Engine 5.5 Nanite and Lumen lighting in this ultra-high performance gaming demo.`
    },
    {
        id: "aircAruvnKk",
        title: "Neural Networks from Scratch — Deep Learning Visualized",
        channel: "3Blue1Brown Tech",
        subscribers: "5.7M",
        views: "4.8M views",
        rawViews: 4800000,
        time: "3 weeks ago",
        duration: "19:13",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=720&h=405&fit=crop",
        avatar: "3",
        color: "#4f46e5",
        description: `What actually happens inside an artificial neural network? Watch step-by-step visual intuitions of forward propagation, loss calculations, and gradient descent backpropagation.`
    },
    {
        id: "ScMzIvxBSi4",
        title: "Switzerland in 4K — Ultra HD Scenic Drone Flight",
        channel: "Nature & Beyond",
        subscribers: "1.1M",
        views: "2.4M views",
        rawViews: 2400000,
        time: "5 days ago",
        duration: "16:45",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=720&h=405&fit=crop",
        avatar: "N",
        color: "#16a34a",
        description: `Relax with majestic views of the Swiss Alps, crystal-clear glacial lakes, and picturesque mountain villages captured in stunning 4K 60fps drone cinematography.`
    },
    {
        id: "DWcJFNfaw9c",
        title: "Synthwave Radio — Chill Beats for Night Coding",
        channel: "Chillwave Space",
        subscribers: "430K",
        views: "980K views",
        rawViews: 980000,
        time: "1 month ago",
        duration: "1:15:30",
        category: "Music",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=720&h=405&fit=crop",
        avatar: "C",
        color: "#9333ea",
        description: `Retro 80s futuristic synthwave and retrowave music mix designed for late-night programming sessions, gaming, and deep creative focus.`
    },
    {
        id: "ujKkV472-V8",
        title: "The Scale of the Universe — From Atoms to Galaxies",
        channel: "Cosmos & Science",
        subscribers: "2.9M",
        views: "6.2M views",
        rawViews: 6200000,
        time: "2 months ago",
        duration: "24:10",
        category: "Science",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=720&h=405&fit=crop",
        avatar: "C",
        color: "#0284c7",
        description: `A mind-expanding visual journey illustrating the astronomical scale of the observable universe compared to subatomic particles and quantum fields.`
    },
    {
        id: "ysz5S6PUM-U",
        title: "AI Robots Are Evolving Faster Than Expected",
        channel: "Tech Daily",
        subscribers: "920K",
        views: "710K views",
        rawViews: 710000,
        time: "2 days ago",
        duration: "11:55",
        category: "Tech",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=720&h=405&fit=crop",
        avatar: "T",
        color: "#0f766e",
        description: `Humanoid robots are mastering real-time physical reasoning, dexterity, and multimodal voice interaction. Here is our breakdown of this year's biggest milestones.`
    },
    {
        id: "aqz-KE-bpKQ",
        title: "Top 20 Most Insane Pro Esports Moments of the Decade",
        channel: "Esports Hub",
        subscribers: "1.3M",
        views: "1.8M views",
        rawViews: 1800000,
        time: "6 days ago",
        duration: "18:02",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=720&h=405&fit=crop",
        avatar: "E",
        color: "#e11d48",
        description: `Relive the most clutch 1v5 tournament comebacks, impossible trickshots, and roar of the stadium crowds in esports history.`
    },
    {
        id: "e-ORhEE9VVg",
        title: "Design Systems in 2026: UI Components & Micro-Interactions",
        channel: "DesignCourse",
        subscribers: "1.05M",
        views: "340K views",
        rawViews: 340000,
        time: "5 days ago",
        duration: "21:30",
        category: "Design",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=720&h=405&fit=crop",
        avatar: "D",
        color: "#7c3aed",
        description: `How top product companies architect design tokens, fluid typography, dark mode palettes, and frictionless UI micro-interactions.`
    },
    {
        id: "1La4QzGeaaQ",
        title: "Dolomites Italy: Alpine Wonderland 4K Film",
        channel: "Wanderlust Films",
        subscribers: "740K",
        views: "1.1M views",
        rawViews: 1100000,
        time: "1 week ago",
        duration: "13:40",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=720&h=405&fit=crop",
        avatar: "W",
        color: "#65a30d",
        description: `A cinematic exploration of the dramatic jagged peaks and misty pine valleys of the Italian Dolomites.`
    },
    {
        id: "FmS04uP3DqE",
        title: "Quantum Computing: The Race for Supremacy",
        channel: "Veritasium Tech",
        subscribers: "16.1M",
        views: "4.2M views",
        rawViews: 4200000,
        time: "3 weeks ago",
        duration: "27:50",
        category: "Science",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&h=405&fit=crop",
        avatar: "V",
        color: "#2563eb",
        description: `How superconducting qubits, entanglement, and quantum error correction are shaping the next computing revolution.`
    },
    {
        id: "5qap5aO4i9A",
        title: "Morning Coffee Lo-Fi Chill Beats to Wake Up",
        channel: "Coffee Shop Sounds",
        subscribers: "880K",
        views: "2.7M views",
        rawViews: 2700000,
        time: "2 weeks ago",
        duration: "58:00",
        category: "Music",
        image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=720&h=405&fit=crop",
        avatar: "C",
        color: "#d97706",
        description: `Start your day productive and calm with warm acoustic lo-fi vibes, bird songs, and soft jazz piano chords.`
    },
    {
        id: "7a7PqRjK6-M",
        title: "Building an Autonomous Drone with Computer Vision",
        channel: "Robotics Laboratory",
        subscribers: "410K",
        views: "520K views",
        rawViews: 520000,
        time: "4 days ago",
        duration: "32:15",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=720&h=405&fit=crop",
        avatar: "R",
        color: "#0891b2",
        description: `Step-by-step tutorial on integrating OpenCV optical flow and ROS2 flight controllers on a customized quadcopter.`
    }
];

// YouTube Shorts Dataset
const SHORTS_VIDEOS = [
    {
        id: "ScMzIvxBSi4",
        title: "Mind-blowing Alpine views you have to see in person! 🏔️✨",
        channel: "@wanderlust",
        avatar: "W",
        color: "#16a34a",
        likes: "142K",
        comments: "1.8K",
        embedUrl: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&loop=1&playlist=ScMzIvxBSi4"
    },
    {
        id: "PkZNo7MFNFg",
        title: "The ONE JavaScript trick every developer should know! ⚡💻",
        channel: "@webdevsimple",
        avatar: "W",
        color: "#ea580c",
        likes: "89K",
        comments: "940",
        embedUrl: "https://www.youtube-nocookie.com/embed/PkZNo7MFNFg?autoplay=1&mute=0&loop=1&playlist=PkZNo7MFNFg"
    },
    {
        id: "W6NZfCO5SIk",
        title: "Is this real life or a video game?! UE5 physics test 🎮🔥",
        channel: "@gamingpulse",
        avatar: "G",
        color: "#dc2626",
        likes: "320K",
        comments: "4.2K",
        embedUrl: "https://www.youtube-nocookie.com/embed/W6NZfCO5SIk?autoplay=1&mute=0&loop=1&playlist=W6NZfCO5SIk"
    }
];

// =============================================================================
// 2. Client-Side Persistent Storage (localStorage)
// =============================================================================
class StorageManager {
    static get(key, fallback) {
        try {
            const data = localStorage.getItem(`webtube_${key}`);
            return data ? JSON.parse(data) : fallback;
        } catch (e) {
            console.warn(`Error reading localStorage ${key}:`, e);
            return fallback;
        }
    }

    static set(key, value) {
        try {
            localStorage.setItem(`webtube_${key}`, JSON.stringify(value));
        } catch (e) {
            console.warn(`Error saving to localStorage ${key}:`, e);
        }
    }

    // App State getters / setters
    static getHistory() { return this.get('history', []); }
    static setHistory(list) { this.set('history', list); }
    
    static getWatchLater() { return this.get('watchlater', []); }
    static setWatchLater(list) { this.set('watchlater', list); }
    
    static getLiked() { return this.get('liked', []); }
    static setLiked(list) { this.set('liked', list); }
    
    static getSubscriptions() { 
        return this.get('subscriptions', ["Web Dev Simplified", "freeCodeCamp", "Lofi Girl"]); 
    }
    static setSubscriptions(list) { this.set('subscriptions', list); }
    
    static getCustomVideos() { return this.get('custom_videos', []); }
    static setCustomVideos(list) { this.set('custom_videos', list); }
    
    static getComments(videoId) {
        const allComments = this.get('comments_map', {});
        return allComments[videoId] || [
            {
                id: 'c1',
                author: 'Alex River',
                avatar: 'A',
                color: '#2563eb',
                time: '2 hours ago',
                text: 'This video explained this concept way better than my entire college semester. Thank you!',
                likes: 42
            },
            {
                id: 'c2',
                author: 'Maya Lin',
                avatar: 'M',
                color: '#9333ea',
                time: '1 day ago',
                text: 'The production quality and pacing is top tier. Subscribed immediately!',
                likes: 19
            }
        ];
    }

    static addComment(videoId, commentObj) {
        const allComments = this.get('comments_map', {});
        if (!allComments[videoId]) {
            allComments[videoId] = this.getComments(videoId);
        }
        allComments[videoId].unshift(commentObj);
        this.set('comments_map', allComments);
        return allComments[videoId];
    }

    static deleteComment(videoId, commentId) {
        const allComments = this.get('comments_map', {});
        if (allComments[videoId]) {
            allComments[videoId] = allComments[videoId].filter(c => c.id !== commentId);
            this.set('comments_map', allComments);
        }
        return allComments[videoId] || [];
    }
}

// =============================================================================
// 3. Application State & DOM References
// =============================================================================
const state = {
    allVideos: [],
    currentView: 'browse', // 'browse' | 'watch' | 'shorts'
    activePage: 'Home',    // 'Home' | 'Subscriptions' | 'History' | 'Watch Later' | 'Liked Videos'
    selectedCategory: 'All',
    searchQuery: '',
    currentWatchVideo: null,
    currentShortIndex: 0,
    theme: localStorage.getItem('webtube_theme') || 'dark'
};

// DOM Elements
const dom = {
    // Header
    menuBtn: document.getElementById('menuBtn'),
    homeLogo: document.getElementById('homeLogo'),
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    searchSuggestions: document.getElementById('searchSuggestions'),
    voiceSearchBtn: document.getElementById('voiceSearchBtn'),
    createBtn: document.getElementById('createBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    notifBtn: document.getElementById('notifBtn'),
    profileBtn: document.getElementById('profileBtn'),
    profileDropdown: document.getElementById('profileDropdown'),
    
    // Sidebar
    sidebar: document.getElementById('sidebar'),
    sidebarNavItems: document.querySelectorAll('.sidebar .nav-item'),
    subChannelsList: document.getElementById('subChannelsList'),
    
    // Browse & Main
    mainContent: document.getElementById('mainContent'),
    browseView: document.getElementById('browseView'),
    categoryBar: document.getElementById('categoryBar'),
    catScrollLeft: document.getElementById('catScrollLeft'),
    catScrollRight: document.getElementById('catScrollRight'),
    pageBanner: document.getElementById('pageBanner'),
    pageBannerIcon: document.getElementById('pageBannerIcon'),
    pageBannerTitle: document.getElementById('pageBannerTitle'),
    pageBannerSubtitle: document.getElementById('pageBannerSubtitle'),
    pageBannerActions: document.getElementById('pageBannerActions'),
    videoGrid: document.getElementById('videoGrid'),
    
    // Watch Page
    watchView: document.getElementById('watchView'),
    backToBrowseBtn: document.getElementById('backToBrowseBtn'),
    playerAspect: document.getElementById('playerAspect'),
    watchTitle: document.getElementById('watchTitle'),
    watchChannelAvatar: document.getElementById('watchChannelAvatar'),
    watchChannelName: document.getElementById('watchChannelName'),
    watchSubsCount: document.getElementById('watchSubsCount'),
    watchSubscribeBtn: document.getElementById('watchSubscribeBtn'),
    watchLikeBtn: document.getElementById('watchLikeBtn'),
    watchLikeCount: document.getElementById('watchLikeCount'),
    watchDislikeBtn: document.getElementById('watchDislikeBtn'),
    watchShareBtn: document.getElementById('watchShareBtn'),
    watchSaveBtn: document.getElementById('watchSaveBtn'),
    watchDownloadBtn: document.getElementById('watchDownloadBtn'),
    videoDescBox: document.getElementById('videoDescBox'),
    descViews: document.getElementById('descViews'),
    descTime: document.getElementById('descTime'),
    descTags: document.getElementById('descTags'),
    descText: document.getElementById('descText'),
    descExpandBtn: document.getElementById('descExpandBtn'),
    commentsCount: document.getElementById('commentsCount'),
    commentForm: document.getElementById('commentForm'),
    commentInput: document.getElementById('commentInput'),
    commentActions: document.getElementById('commentActions'),
    cancelCommentBtn: document.getElementById('cancelCommentBtn'),
    submitCommentBtn: document.getElementById('submitCommentBtn'),
    commentsList: document.getElementById('commentsList'),
    relatedVideosList: document.getElementById('relatedVideosList'),
    
    // Shorts
    shortsView: document.getElementById('shortsView'),
    shortsVideoFrame: document.getElementById('shortsVideoFrame'),
    shortsAvatar: document.getElementById('shortsAvatar'),
    shortsChannelName: document.getElementById('shortsChannelName'),
    shortsSubBtn: document.getElementById('shortsSubBtn'),
    shortsTitle: document.getElementById('shortsTitle'),
    shortLikeBtn: document.getElementById('shortLikeBtn'),
    shortLikeCount: document.getElementById('shortLikeCount'),
    shortDislikeBtn: document.getElementById('shortDislikeBtn'),
    shortCommentBtn: document.getElementById('shortCommentBtn'),
    shortShareBtn: document.getElementById('shortShareBtn'),
    shortsPrevBtn: document.getElementById('shortsPrevBtn'),
    shortsNextBtn: document.getElementById('shortsNextBtn'),
    
    // Modals & Popups
    createModal: document.getElementById('createModal'),
    createVideoForm: document.getElementById('createVideoForm'),
    closeCreateModal: document.getElementById('closeCreateModal'),
    cancelCreateBtn: document.getElementById('cancelCreateBtn'),
    mobileCreateBtn: document.getElementById('mobileCreateBtn'),
    shareModal: document.getElementById('shareModal'),
    closeShareModal: document.getElementById('closeShareModal'),
    shareLinkInput: document.getElementById('shareLinkInput'),
    copyShareLinkBtn: document.getElementById('copyShareLinkBtn'),
    voiceModal: document.getElementById('voiceModal'),
    closeVoiceModal: document.getElementById('closeVoiceModal'),
    cardContextMenu: document.getElementById('cardContextMenu'),
    toastContainer: document.getElementById('toastContainer'),
    
    // Mobile Bottom Nav
    mobileNavBtns: document.querySelectorAll('.mobile-nav-btn')
};

// =============================================================================
// 4. Utility Helpers
// =============================================================================
function showToast(message, icon = '✓') {
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    dom.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.25s ease';
        setTimeout(() => toast.remove(), 250);
    }, 3200);
}

function parseYouTubeId(input) {
    if (!input) return null;
    input = input.trim();
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
    
    const patterns = [
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/i
    ];
    for (const pattern of patterns) {
        const match = input.match(pattern);
        if (match && match[1]) return match[1];
    }
    return null;
}

function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('webtube_theme', state.theme);
    showToast(`Switched to ${state.theme === 'dark' ? 'Dark' : 'Light'} Mode`, '🌓');
}

// =============================================================================
// 5. Video Feeds & Rendering Logic
// =============================================================================
function loadAllVideos() {
    const custom = StorageManager.getCustomVideos();
    // Custom videos go first so users immediately see their added videos!
    state.allVideos = [...custom, ...INITIAL_VIDEOS];
}

function renderSidebarSubscriptions() {
    const subs = StorageManager.getSubscriptions();
    dom.subChannelsList.replaceChildren();

    if (subs.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'form-hint';
        empty.style.padding = '4px 12px';
        empty.textContent = 'No subscriptions yet.';
        dom.subChannelsList.appendChild(empty);
        return;
    }

    subs.forEach(channelName => {
        const item = document.createElement('button');
        item.className = 'sub-channel-item';
        const initial = channelName.charAt(0).toUpperCase();
        
        item.innerHTML = `
            <div class="sub-channel-avatar" style="background:#${Math.floor(Math.abs(Math.sin(channelName.length)*16777215)).toString(16).padEnd(6, '0')}">${initial}</div>
            <span class="sub-channel-name">${channelName}</span>
            <span class="sub-channel-live" title="Live / Active"></span>
        `;

        item.addEventListener('click', () => {
            state.searchQuery = channelName;
            dom.searchInput.value = channelName;
            state.selectedCategory = 'All';
            dom.clearSearchBtn.hidden = false;
            switchView('browse', 'Home');
        });

        dom.subChannelsList.appendChild(item);
    });
}

function getFilteredVideos() {
    let list = [...state.allVideos];

    // Page Level Filters
    if (state.activePage === 'History') {
        const historyIds = StorageManager.getHistory().map(h => h.id);
        list = historyIds.map(id => state.allVideos.find(v => v.id === id)).filter(Boolean);
    } else if (state.activePage === 'Liked Videos') {
        const likedIds = StorageManager.getLiked();
        list = state.allVideos.filter(v => likedIds.includes(v.id));
    } else if (state.activePage === 'Watch Later') {
        const wlIds = StorageManager.getWatchLater();
        list = state.allVideos.filter(v => wlIds.includes(v.id));
    } else if (state.activePage === 'Subscriptions') {
        const subs = StorageManager.getSubscriptions();
        list = state.allVideos.filter(v => subs.includes(v.channel));
    }

    // Category Filter
    if (state.selectedCategory !== 'All') {
        if (state.selectedCategory === 'Trending') {
            list = [...list].sort((a, b) => (b.rawViews || 0) - (a.rawViews || 0));
        } else if (state.selectedCategory === 'Recently uploaded') {
            // Keep recent items
        } else {
            list = list.filter(v => (v.category || '').toLowerCase() === state.selectedCategory.toLowerCase());
        }
    }

    // Search Query Filter
    if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase();
        list = list.filter(v => 
            v.title.toLowerCase().includes(q) ||
            v.channel.toLowerCase().includes(q) ||
            (v.category && v.category.toLowerCase().includes(q))
        );
    }

    return list;
}

function updatePageBanner() {
    if (state.activePage === 'Home') {
        dom.pageBanner.hidden = true;
        return;
    }

    dom.pageBanner.hidden = false;
    dom.pageBannerActions.replaceChildren();

    if (state.activePage === 'History') {
        dom.pageBannerIcon.innerHTML = `<svg viewBox="0 0 24 24" class="svg-icon"><path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>`;
        dom.pageBannerTitle.textContent = 'Watch History';
        dom.pageBannerSubtitle.textContent = 'Videos you have previously watched on WebTube';
        
        const clearBtn = document.createElement('button');
        clearBtn.className = 'banner-action-btn';
        clearBtn.textContent = 'Clear All History';
        clearBtn.addEventListener('click', () => {
            StorageManager.setHistory([]);
            renderVideoGrid();
            showToast('Watch history cleared', '🗑️');
        });
        dom.pageBannerActions.appendChild(clearBtn);

    } else if (state.activePage === 'Liked Videos') {
        dom.pageBannerIcon.innerHTML = `<svg viewBox="0 0 24 24" class="svg-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>`;
        dom.pageBannerTitle.textContent = 'Liked Videos';
        dom.pageBannerSubtitle.textContent = `${StorageManager.getLiked().length} videos you have liked`;

    } else if (state.activePage === 'Watch Later') {
        dom.pageBannerIcon.innerHTML = `<svg viewBox="0 0 24 24" class="svg-icon"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"/></svg>`;
        dom.pageBannerTitle.textContent = 'Watch Later';
        dom.pageBannerSubtitle.textContent = 'Saved videos to watch anytime';

    } else if (state.activePage === 'Subscriptions') {
        dom.pageBannerIcon.innerHTML = `<svg viewBox="0 0 24 24" class="svg-icon"><path d="M20 8H4V6h16v2zm-2-6H6v2h12V2zm4 10v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-6 4-6-3.27v6.53L16 16z"/></svg>`;
        dom.pageBannerTitle.textContent = 'Subscriptions Feed';
        dom.pageBannerSubtitle.textContent = 'Latest uploads from channels you follow';
    }
}

function renderVideoGrid() {
    updatePageBanner();
    const videos = getFilteredVideos();
    dom.videoGrid.replaceChildren();

    if (videos.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'empty-state';
        empty.innerHTML = `
            <svg viewBox="0 0 24 24" class="empty-state-icon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            <h3>No videos found</h3>
            <p>Try searching with another keyword or explore different categories.</p>
        `;
        dom.videoGrid.appendChild(empty);
        return;
    }

    videos.forEach(video => {
        const card = document.createElement('article');
        card.className = 'video-card';
        card.tabIndex = 0;
        card.setAttribute('aria-label', video.title);

        const isLive = video.duration === 'LIVE';

        card.innerHTML = `
            <div class="thumbnail-wrap">
                <img class="thumbnail" src="${video.image}" alt="${video.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&h=405&fit=crop'">
                <span class="duration-badge ${isLive ? 'live' : ''}">${video.duration}</span>
            </div>
            <div class="video-info-row">
                <div class="channel-avatar" style="background-color: ${video.color || '#2563eb'}">${video.avatar || video.channel.charAt(0)}</div>
                <div class="video-meta-col">
                    <h3 class="video-title">${video.title}</h3>
                    <div class="channel-name-row">
                        <span>${video.channel}</span>
                        <svg viewBox="0 0 24 24" class="verified-badge" title="Verified"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div class="video-stats-row">${video.views} • ${video.time}</div>
                </div>
                <button class="card-options-btn" aria-label="More options" title="More options">
                    <svg viewBox="0 0 24 24" class="svg-icon" style="width:18px;height:18px;"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>
            </div>
        `;

        // Card Click opens Watch Page
        card.addEventListener('click', (e) => {
            if (e.target.closest('.card-options-btn')) return;
            openWatchView(video);
        });

        // Keyboard Enter or Space opens video
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openWatchView(video);
            }
        });

        // 3-dot context menu
        const optionsBtn = card.querySelector('.card-options-btn');
        optionsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openCardContextMenu(e, video);
        });

        dom.videoGrid.appendChild(card);
    });
}

// =============================================================================
// 6. View Switcher & YouTube Watch Experience
// =============================================================================
function switchView(viewName, pageName = 'Home') {
    state.currentView = viewName;
    state.activePage = pageName;

    // Hide all main containers
    dom.browseView.hidden = true;
    dom.watchView.hidden = true;
    dom.shortsView.hidden = true;

    // Reset player if moving away from watch
    if (viewName !== 'watch') {
        dom.playerAspect.replaceChildren();
        document.title = 'WebTube — Watch, Share, and Discover';
    }

    if (viewName === 'browse') {
        dom.browseView.hidden = false;
        renderVideoGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (viewName === 'watch') {
        dom.watchView.hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });

    } else if (viewName === 'shorts') {
        dom.shortsView.hidden = false;
        renderShortsReel();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active state in sidebar
    dom.sidebarNavItems.forEach(item => {
        const itemPage = item.dataset.page;
        item.classList.toggle('active', itemPage === pageName);
    });

    // Update mobile bottom nav
    dom.mobileNavBtns.forEach(btn => {
        const btnPage = btn.dataset.page;
        btn.classList.toggle('active', (viewName === 'shorts' && btnPage === 'Shorts') || (viewName === 'browse' && btnPage === pageName));
    });
}

function openWatchView(video) {
    state.currentWatchVideo = video;

    // Save to Watch History
    const history = StorageManager.getHistory().filter(item => item.id !== video.id);
    history.unshift({ ...video, watchedAt: Date.now() });
    StorageManager.setHistory(history.slice(0, 50)); // keep last 50

    // Set YouTube Embed Player
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.id)}?autoplay=1&rel=0`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    dom.playerAspect.replaceChildren(iframe);

    // Populate Video Metadata
    dom.watchTitle.textContent = video.title;
    dom.watchChannelAvatar.textContent = video.avatar || video.channel.charAt(0);
    dom.watchChannelAvatar.style.backgroundColor = video.color || '#2563eb';
    dom.watchChannelName.querySelector('span').textContent = video.channel;
    dom.watchSubsCount.textContent = `${video.subscribers || '1.2M'} subscribers`;
    
    // Subscribe button state
    updateSubscribeBtnState(video.channel);

    // Likes & Save button states
    updateWatchActionStates(video.id);

    // Description
    dom.descViews.textContent = video.views;
    dom.descTime.textContent = video.time;
    dom.descTags.textContent = `#${video.category} #WebTube #Video`;
    dom.descText.textContent = video.description || `Enjoy this trending video by ${video.channel}! Don't forget to like and subscribe.`;
    dom.videoDescBox.classList.remove('expanded');
    dom.descExpandBtn.textContent = 'Show more';

    // Comments Section
    renderComments(video.id);

    // Related Videos Column
    renderRelatedVideos(video);

    document.title = `${video.title} - WebTube`;
    switchView('watch', 'Home');
}

function updateSubscribeBtnState(channelName) {
    const subs = StorageManager.getSubscriptions();
    const isSubscribed = subs.includes(channelName);
    dom.watchSubscribeBtn.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
    dom.watchSubscribeBtn.classList.toggle('subscribed', isSubscribed);
}

function updateWatchActionStates(videoId) {
    const liked = StorageManager.getLiked();
    const isLiked = liked.includes(videoId);
    dom.watchLikeBtn.classList.toggle('active', isLiked);
    dom.watchLikeCount.textContent = isLiked ? '13K' : '12K';

    const wl = StorageManager.getWatchLater();
    const isSaved = wl.includes(videoId);
    dom.watchSaveBtn.classList.toggle('active', isSaved);
    dom.watchSaveBtn.querySelector('span').textContent = isSaved ? 'Saved' : 'Save';
}

function renderRelatedVideos(currentVideo) {
    dom.relatedVideosList.replaceChildren();
    // Get suggestions (filter out currently playing video)
    const related = state.allVideos.filter(v => v.id !== currentVideo.id).slice(0, 10);

    related.forEach(item => {
        const card = document.createElement('div');
        card.className = 'related-card';
        card.innerHTML = `
            <div class="related-thumb-wrap">
                <img class="related-thumb" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1518770660439-4636190af475?w=720&h=405&fit=crop'">
                <span class="duration-badge" style="font-size:10px;padding:2px 4px;">${item.duration}</span>
            </div>
            <div class="related-meta">
                <h4 class="related-title">${item.title}</h4>
                <div class="related-channel">${item.channel}</div>
                <div class="related-stats">${item.views} • ${item.time}</div>
            </div>
        `;
        card.addEventListener('click', () => openWatchView(item));
        dom.relatedVideosList.appendChild(card);
    });
}

// =============================================================================
// 7. Interactive Comments Logic
// =============================================================================
function renderComments(videoId) {
    const comments = StorageManager.getComments(videoId);
    dom.commentsCount.textContent = `${comments.length} Comments`;
    dom.commentsList.replaceChildren();

    comments.forEach(comment => {
        const item = document.createElement('div');
        item.className = 'comment-item';
        
        item.innerHTML = `
            <div class="comment-avatar" style="background-color:${comment.color || '#0284c7'}">${comment.avatar}</div>
            <div class="comment-content">
                <div class="comment-meta">
                    <span class="comment-author">${comment.author}</span>
                    <span class="comment-time">${comment.time}</span>
                </div>
                <p class="comment-text">${comment.text}</p>
                <div class="comment-actions-bar">
                    <button class="comment-btn like-comment-btn">
                        <svg viewBox="0 0 24 24" class="svg-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
                        <span>${comment.likes || 0}</span>
                    </button>
                    <button class="comment-btn">Reply</button>
                    ${comment.isUser ? `<button class="comment-delete-btn" data-cid="${comment.id}">Delete</button>` : ''}
                </div>
            </div>
        `;

        // Like comment toggle
        const likeBtn = item.querySelector('.like-comment-btn');
        likeBtn.addEventListener('click', () => {
            const countSpan = likeBtn.querySelector('span');
            let count = parseInt(countSpan.textContent) || 0;
            countSpan.textContent = count + 1;
            likeBtn.style.color = 'var(--brand-blue)';
        });

        // Delete user comment
        const deleteBtn = item.querySelector('.comment-delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                StorageManager.deleteComment(videoId, comment.id);
                renderComments(videoId);
                showToast('Comment deleted', '🗑️');
            });
        }

        dom.commentsList.appendChild(item);
    });
}

// =============================================================================
// 8. YouTube Shorts Reel Experience
// =============================================================================
function renderShortsReel() {
    const short = SHORTS_VIDEOS[state.currentShortIndex];
    if (!short) return;

    dom.shortsVideoFrame.replaceChildren();
    const iframe = document.createElement('iframe');
    iframe.src = short.embedUrl;
    iframe.title = short.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    dom.shortsVideoFrame.appendChild(iframe);

    dom.shortsAvatar.textContent = short.avatar;
    dom.shortsAvatar.style.backgroundColor = short.color;
    dom.shortsChannelName.textContent = short.channel;
    dom.shortsTitle.textContent = short.title;
    dom.shortLikeCount.textContent = short.likes;
}

function nextShort() {
    state.currentShortIndex = (state.currentShortIndex + 1) % SHORTS_VIDEOS.length;
    renderShortsReel();
}

function prevShort() {
    state.currentShortIndex = (state.currentShortIndex - 1 + SHORTS_VIDEOS.length) % SHORTS_VIDEOS.length;
    renderShortsReel();
}

// =============================================================================
// 9. Search, Suggestions & Voice Search Logic
// =============================================================================
function handleSearchInput(e) {
    const val = e.target.value.trim();
    dom.clearSearchBtn.hidden = val.length === 0;

    if (val.length < 2) {
        dom.searchSuggestions.hidden = true;
        return;
    }

    // Find suggestions from titles, channels, and categories
    const matches = [];
    const lower = val.toLowerCase();

    state.allVideos.forEach(v => {
        if (v.title.toLowerCase().includes(lower) && !matches.includes(v.title)) {
            matches.push(v.title);
        }
    });

    if (matches.length === 0) {
        dom.searchSuggestions.hidden = true;
        return;
    }

    dom.searchSuggestions.replaceChildren();
    matches.slice(0, 6).forEach(title => {
        const item = document.createElement('div');
        item.className = 'search-suggestion-item';
        item.innerHTML = `
            <svg viewBox="0 0 24 24" class="svg-icon"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            <span>${title}</span>
        `;
        item.addEventListener('click', () => {
            dom.searchInput.value = title;
            dom.searchSuggestions.hidden = true;
            executeSearch(title);
        });
        dom.searchSuggestions.appendChild(item);
    });

    dom.searchSuggestions.hidden = false;
}

function executeSearch(query) {
    state.searchQuery = query;
    state.selectedCategory = 'All';
    document.querySelectorAll('.category').forEach(b => b.classList.toggle('active', b.dataset.category === 'All'));
    switchView('browse', 'Home');
}

function startVoiceSearch() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        showToast('Voice Search is not supported on this browser. Try Chrome or Edge.', '🎙️');
        dom.searchInput.focus();
        return;
    }

    dom.voiceModal.hidden = false;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        dom.voiceModal.hidden = true;
        dom.searchInput.value = transcript;
        dom.clearSearchBtn.hidden = false;
        showToast(`Heard: "${transcript}"`, '🎙️');
        executeSearch(transcript);
    };

    recognition.onerror = (event) => {
        dom.voiceModal.hidden = true;
        showToast(`Voice search paused: ${event.error}`, '⚠️');
    };

    recognition.onend = () => {
        dom.voiceModal.hidden = true;
    };

    try {
        recognition.start();
    } catch (e) {
        console.warn('Speech recognition start error:', e);
    }
}

// =============================================================================
// 10. Modals, Context Menu & Events
// =============================================================================
let activeMenuVideo = null;

function openCardContextMenu(e, video) {
    activeMenuVideo = video;
    const menu = dom.cardContextMenu;
    menu.hidden = false;

    const x = Math.min(e.clientX, window.innerWidth - 220);
    const y = Math.min(e.clientY, window.innerHeight - 150);
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;
}

function openShareModal(video) {
    dom.shareModal.hidden = false;
    const shareUrl = `https://youtu.be/${video.id}`;
    dom.shareLinkInput.value = shareUrl;

    // Social buttons
    const titleEnc = encodeURIComponent(video.title);
    const urlEnc = encodeURIComponent(shareUrl);
    
    document.getElementById('shareWhatsApp').onclick = () => window.open(`https://api.whatsapp.com/send?text=${titleEnc}%20${urlEnc}`, '_blank');
    document.getElementById('shareTwitter').onclick = () => window.open(`https://twitter.com/intent/tweet?text=${titleEnc}&url=${urlEnc}`, '_blank');
    document.getElementById('shareFacebook').onclick = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlEnc}`, '_blank');
    document.getElementById('shareReddit').onclick = () => window.open(`https://reddit.com/submit?url=${urlEnc}&title=${titleEnc}`, '_blank');
    document.getElementById('shareEmail').onclick = () => window.location.href = `mailto:?subject=${titleEnc}&body=${urlEnc}`;
}

// =============================================================================
// 11. Event Listeners Initialization
// =============================================================================
function initEventListeners() {
    // Logo Click -> Go Home
    dom.homeLogo.addEventListener('click', (e) => {
        e.preventDefault();
        state.searchQuery = '';
        dom.searchInput.value = '';
        dom.clearSearchBtn.hidden = true;
        state.selectedCategory = 'All';
        document.querySelectorAll('.category').forEach(b => b.classList.toggle('active', b.dataset.category === 'All'));
        switchView('browse', 'Home');
    });

    // Sidebar Toggle
    dom.menuBtn.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-collapsed');
    });

    // Theme Toggle
    dom.themeToggleBtn.addEventListener('click', toggleTheme);

    // Profile Dropdown
    dom.profileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dom.profileDropdown.hidden = !dom.profileDropdown.hidden;
    });

    dom.profileDropdown.addEventListener('click', (e) => {
        const action = e.target.closest('[data-action]')?.dataset.action;
        if (!action) return;

        dom.profileDropdown.hidden = true;
        if (action === 'theme') {
            toggleTheme();
        } else if (action === 'history') {
            switchView('browse', 'History');
        } else if (action === 'clear-data') {
            if (confirm('Reset custom videos and watch data to default demo state?')) {
                localStorage.clear();
                state.theme = 'dark';
                initTheme();
                loadAllVideos();
                renderSidebarSubscriptions();
                renderVideoGrid();
                showToast('All local demo data reset', '✓');
            }
        } else {
            showToast('Chandan @chandandev profile is active', '👤');
        }
    });

    // Search Form Submit & Inputs
    dom.searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        dom.searchSuggestions.hidden = true;
        executeSearch(dom.searchInput.value.trim());
    });

    dom.searchInput.addEventListener('input', handleSearchInput);

    dom.clearSearchBtn.addEventListener('click', () => {
        dom.searchInput.value = '';
        dom.clearSearchBtn.hidden = true;
        dom.searchSuggestions.hidden = true;
        executeSearch('');
    });

    dom.voiceSearchBtn.addEventListener('click', startVoiceSearch);
    dom.closeVoiceModal.addEventListener('click', () => dom.voiceModal.hidden = true);

    // Close popups on click outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('.search-form')) {
            dom.searchSuggestions.hidden = true;
        }
        if (!e.target.closest('.profile-dropdown') && e.target !== dom.profileBtn) {
            dom.profileDropdown.hidden = true;
        }
        if (!e.target.closest('.context-menu')) {
            dom.cardContextMenu.hidden = true;
        }
    });

    // Category / Topic Chips Bar Click
    dom.categoryBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.category');
        if (!btn) return;

        state.selectedCategory = btn.dataset.category;
        document.querySelectorAll('.category').forEach(b => b.classList.toggle('active', b === btn));
        renderVideoGrid();
    });

    // Category Bar Left / Right Scroll
    dom.catScrollLeft.addEventListener('click', () => {
        dom.categoryBar.scrollBy({ left: -220, behavior: 'smooth' });
    });
    dom.catScrollRight.addEventListener('click', () => {
        dom.categoryBar.scrollBy({ left: 220, behavior: 'smooth' });
    });

    dom.categoryBar.addEventListener('scroll', () => {
        dom.catScrollLeft.hidden = dom.categoryBar.scrollLeft <= 10;
    });

    // Sidebar Navigation Click
    dom.sidebarNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = item.dataset.page;
            const category = item.dataset.category;

            if (category) {
                state.selectedCategory = category;
                document.querySelectorAll('.category').forEach(b => {
                    b.classList.toggle('active', b.dataset.category === category);
                });
                switchView('browse', 'Home');
            } else if (page === 'Shorts') {
                switchView('shorts', 'Shorts');
            } else if (page) {
                switchView('browse', page);
            }
        });
    });

    // Mobile Bottom Nav
    dom.mobileNavBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const page = btn.dataset.page;
            if (page === 'Shorts') {
                switchView('shorts', 'Shorts');
            } else if (page) {
                switchView('browse', page);
            }
        });
    });

    // Back to browse from watch page
    dom.backToBrowseBtn.addEventListener('click', () => {
        switchView('browse', state.activePage || 'Home');
    });

    // Subscribe Button in Watch Page
    dom.watchSubscribeBtn.addEventListener('click', () => {
        if (!state.currentWatchVideo) return;
        const channel = state.currentWatchVideo.channel;
        let subs = StorageManager.getSubscriptions();

        if (subs.includes(channel)) {
            subs = subs.filter(s => s !== channel);
            showToast(`Unsubscribed from ${channel}`, '✕');
        } else {
            subs.push(channel);
            showToast(`Subscribed to ${channel}!`, '🔔');
        }
        StorageManager.setSubscriptions(subs);
        updateSubscribeBtnState(channel);
        renderSidebarSubscriptions();
    });

    // Like Button in Watch Page
    dom.watchLikeBtn.addEventListener('click', () => {
        if (!state.currentWatchVideo) return;
        const id = state.currentWatchVideo.id;
        let liked = StorageManager.getLiked();

        if (liked.includes(id)) {
            liked = liked.filter(item => item !== id);
            showToast('Removed from Liked videos');
        } else {
            liked.push(id);
            showToast('Added to Liked videos', '👍');
        }
        StorageManager.setLiked(liked);
        updateWatchActionStates(id);
    });

    // Dislike Button in Watch Page
    dom.watchDislikeBtn.addEventListener('click', () => {
        dom.watchDislikeBtn.classList.toggle('active');
        showToast('Feedback submitted', '👎');
    });

    // Save (Watch Later) Button in Watch Page
    dom.watchSaveBtn.addEventListener('click', () => {
        if (!state.currentWatchVideo) return;
        const id = state.currentWatchVideo.id;
        let wl = StorageManager.getWatchLater();

        if (wl.includes(id)) {
            wl = wl.filter(item => item !== id);
            showToast('Removed from Watch Later');
        } else {
            wl.push(id);
            showToast('Saved to Watch Later', '⏱️');
        }
        StorageManager.setWatchLater(wl);
        updateWatchActionStates(id);
    });

    // Share Button in Watch Page
    dom.watchShareBtn.addEventListener('click', () => {
        if (state.currentWatchVideo) openShareModal(state.currentWatchVideo);
    });

    // Download Button simulation
    dom.watchDownloadBtn.addEventListener('click', () => {
        showToast('Offline download started in HD quality...', '⬇️');
    });

    // Expand / Collapse Description
    dom.videoDescBox.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') return;
        dom.videoDescBox.classList.toggle('expanded');
        dom.descExpandBtn.textContent = dom.videoDescBox.classList.contains('expanded') ? 'Show less' : 'Show more';
    });

    // Comment Input Focus & Submission
    dom.commentInput.addEventListener('focus', () => {
        dom.commentActions.hidden = false;
    });

    dom.commentInput.addEventListener('input', () => {
        dom.submitCommentBtn.disabled = !dom.commentInput.value.trim();
    });

    dom.cancelCommentBtn.addEventListener('click', () => {
        dom.commentInput.value = '';
        dom.commentActions.hidden = true;
    });

    dom.commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = dom.commentInput.value.trim();
        if (!text || !state.currentWatchVideo) return;

        const newComment = {
            id: 'c_' + Date.now(),
            author: 'Chandan (You)',
            avatar: 'C',
            color: '#0284c7',
            time: 'Just now',
            text: text,
            likes: 0,
            isUser: true
        };

        StorageManager.addComment(state.currentWatchVideo.id, newComment);
        dom.commentInput.value = '';
        dom.commentActions.hidden = true;
        renderComments(state.currentWatchVideo.id);
        showToast('Comment posted publicly!', '💬');
    });

    // Shorts Controls
    dom.shortsPrevBtn.addEventListener('click', prevShort);
    dom.shortsNextBtn.addEventListener('click', nextShort);
    dom.shortLikeBtn.addEventListener('click', () => {
        dom.shortLikeBtn.classList.toggle('active');
        showToast('Liked this short!', '❤️');
    });
    dom.shortShareBtn.addEventListener('click', () => {
        const short = SHORTS_VIDEOS[state.currentShortIndex];
        if (short) openShareModal(short);
    });
    dom.shortsSubBtn.addEventListener('click', () => {
        showToast('Subscribed from Shorts!', '🔔');
        dom.shortsSubBtn.textContent = 'Subscribed';
    });

    // Create Modal Handlers
    function openCreateModal() {
        dom.createModal.hidden = false;
        document.getElementById('createUrl').focus();
    }
    dom.createBtn.addEventListener('click', openCreateModal);
    dom.mobileCreateBtn.addEventListener('click', openCreateModal);
    dom.closeCreateModal.addEventListener('click', () => dom.createModal.hidden = true);
    dom.cancelCreateBtn.addEventListener('click', () => dom.createModal.hidden = true);

    dom.createVideoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const rawUrl = document.getElementById('createUrl').value;
        const videoId = parseYouTubeId(rawUrl);

        if (!videoId) {
            alert('Please enter a valid YouTube URL or 11-character video ID.');
            return;
        }

        const newVideo = {
            id: videoId,
            title: document.getElementById('createTitle').value.trim(),
            channel: document.getElementById('createChannel').value.trim(),
            subscribers: '10K',
            views: document.getElementById('createViews').value.trim() || '1 view',
            rawViews: 100,
            time: 'Just now',
            duration: document.getElementById('createDuration').value.trim() || '10:00',
            category: document.getElementById('createCategory').value,
            image: `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=720&h=405&fit=crop`,
            avatar: document.getElementById('createChannel').value.trim().charAt(0).toUpperCase(),
            color: '#7c3aed',
            description: `Added by user to WebTube. Watch in high quality!`
        };

        const custom = StorageManager.getCustomVideos();
        custom.unshift(newVideo);
        StorageManager.setCustomVideos(custom);

        loadAllVideos();
        dom.createModal.hidden = true;
        dom.createVideoForm.reset();
        showToast('New video uploaded successfully!', '🎬');
        switchView('browse', 'Home');
    });

    // Share Modal Copy Link
    dom.copyShareLinkBtn.addEventListener('click', () => {
        dom.shareLinkInput.select();
        navigator.clipboard.writeText(dom.shareLinkInput.value).then(() => {
            dom.copyShareLinkBtn.textContent = 'Copied!';
            showToast('Link copied to clipboard', '📋');
            setTimeout(() => {
                dom.copyShareLinkBtn.textContent = 'Copy';
            }, 2000);
        });
    });
    dom.closeShareModal.addEventListener('click', () => dom.shareModal.hidden = true);

    // Card Context Menu Items
    document.getElementById('menuWatchLater').addEventListener('click', () => {
        if (!activeMenuVideo) return;
        const wl = StorageManager.getWatchLater();
        if (!wl.includes(activeMenuVideo.id)) {
            wl.push(activeMenuVideo.id);
            StorageManager.setWatchLater(wl);
            showToast('Added to Watch Later', '⏱️');
        } else {
            showToast('Already in Watch Later');
        }
        dom.cardContextMenu.hidden = true;
    });

    document.getElementById('menuShare').addEventListener('click', () => {
        dom.cardContextMenu.hidden = true;
        if (activeMenuVideo) openShareModal(activeMenuVideo);
    });

    document.getElementById('menuNotInterested').addEventListener('click', () => {
        if (!activeMenuVideo) return;
        state.allVideos = state.allVideos.filter(v => v.id !== activeMenuVideo.id);
        renderVideoGrid();
        dom.cardContextMenu.hidden = true;
        showToast('Video hidden from your feed', '✕');
    });

    // Notifications Button
    dom.notifBtn.addEventListener('click', () => {
        showToast('You are all caught up! No new notifications.', '🔔');
    });

    // Global Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dom.createModal.hidden = true;
            dom.shareModal.hidden = true;
            dom.voiceModal.hidden = true;
            dom.profileDropdown.hidden = true;
            dom.cardContextMenu.hidden = true;
            dom.searchSuggestions.hidden = true;
            if (state.currentView === 'watch') {
                switchView('browse', state.activePage || 'Home');
            }
        } else if (e.key === '/' && document.activeElement !== dom.searchInput) {
            e.preventDefault();
            dom.searchInput.focus();
        } else if (state.currentView === 'shorts') {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                nextShort();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                prevShort();
            }
        }
    });
}

// =============================================================================
// 12. Application Bootstrap
// =============================================================================
function initApp() {
    initTheme();
    loadAllVideos();
    renderSidebarSubscriptions();
    initEventListeners();
    renderVideoGrid();
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
