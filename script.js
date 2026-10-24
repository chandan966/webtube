
const videos = [
    {
        title: "Build a Complete Website Using HTML, CSS and JavaScript",
        channel: "Code Academy",
        views: "125K views",
        time: "2 days ago",
        duration: "18:42",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=640&h=360&fit=crop",
        videoId: "UB1O30fR-EE",
        avatar: "C",
        color: "#2563eb"
    },
    {
        title: "Relaxing Music for Studying and Deep Focus",
        channel: "Music World",
        views: "2.4M views",
        time: "1 week ago",
        duration: "1:02:15",
        category: "Music",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=640&h=360&fit=crop",
        videoId: "jfKfPfyJRdk",
        avatar: "M",
        color: "#9333ea"
    },
    {
        title: "The Most Beautiful Places in the World",
        channel: "Travel Stories",
        views: "850K views",
        time: "4 days ago",
        duration: "12:35",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=640&h=360&fit=crop",
        videoId: "ScMzIvxBSi4",
        avatar: "T",
        color: "#059669"
    },
    {
        title: "Epic Gaming Moments You Need to See",
        channel: "Gaming Zone",
        views: "340K views",
        time: "12 hours ago",
        duration: "15:21",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=640&h=360&fit=crop",
        videoId: "aqz-KE-bpKQ",
        avatar: "G",
        color: "#dc2626"
    },
    {
        title: "Learn JavaScript in 30 Minutes",
        channel: "Web Dev Simplified",
        views: "980K views",
        time: "3 weeks ago",
        duration: "30:00",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&h=360&fit=crop",
        videoId: "PkZNo7MFNFg",
        avatar: "W",
        color: "#ea580c"
    },
    {
        title: "Top Technology News and Innovations",
        channel: "Tech Daily",
        views: "90K views",
        time: "1 day ago",
        duration: "9:48",
        category: "News",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=640&h=360&fit=crop",
        videoId: "ysz5S6PUM-U",
        avatar: "T",
        color: "#0f766e"
    },
    {
        title: "A Beautiful Journey Through the Mountains",
        channel: "Nature Life",
        views: "560K views",
        time: "6 days ago",
        duration: "14:12",
        category: "Travel",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&h=360&fit=crop",
        videoId: "ScMzIvxBSi4",
        avatar: "N",
        color: "#65a30d"
    },
    {
        title: "Live Coding: Building a React Application",
        channel: "Developer Live",
        views: "75K views",
        time: "5 hours ago",
        duration: "LIVE",
        category: "Live",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&h=360&fit=crop",
        videoId: "UB1O30fR-EE",
        avatar: "D",
        color: "#7c3aed"
    },
    {
        title: "Best Workout Music to Boost Your Energy",
        channel: "Fitness Beats",
        views: "1.1M views",
        time: "2 weeks ago",
        duration: "45:20",
        category: "Music",
        image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=640&h=360&fit=crop",
        videoId: "jfKfPfyJRdk",
        avatar: "F",
        color: "#db2777"
    },
    {
        title: "Football Skills and Amazing Goals",
        channel: "Sports Arena",
        views: "450K views",
        time: "3 days ago",
        duration: "10:32",
        category: "Sports",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=360&fit=crop",
        videoId: "aqz-KE-bpKQ",
        avatar: "S",
        color: "#0284c7"
    },
    {
        title: "How Computers and the Internet Actually Work",
        channel: "Learn With Tech",
        views: "220K views",
        time: "8 days ago",
        duration: "22:10",
        category: "Programming",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=640&h=360&fit=crop",
        videoId: "PkZNo7MFNFg",
        avatar: "L",
        color: "#4f46e5"
    },
    {
        title: "The Ultimate Gaming Setup Tour",
        channel: "Gaming Zone",
        views: "620K views",
        time: "1 week ago",
        duration: "16:45",
        category: "Gaming",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=640&h=360&fit=crop",
        videoId: "aqz-KE-bpKQ",
        avatar: "G",
        color: "#dc2626"
    }
];

const videoGrid = document.getElementById("videoGrid");
const searchInput = document.getElementById("searchInput");
const searchForm = document.getElementById("searchForm");
const categoryBar = document.getElementById("categoryBar");
const sidebar = document.getElementById("sidebar");
const playerOverlay = document.getElementById("playerOverlay");
const playerFrame = document.getElementById("playerFrame");
const playerTitle = document.getElementById("playerTitle");
const playerChannel = document.getElementById("playerChannel");
const toast = document.getElementById("toast");

let selectedCategory = "All";
let searchTerm = "";

function renderVideos() {
    const filteredVideos = videos.filter(video => {
        const matchesCategory =
            selectedCategory === "All" ||
            video.category.toLowerCase() === selectedCategory.toLowerCase() ||
            (selectedCategory === "Trending" && true) ||
            (selectedCategory === "Recently uploaded" && true);

        const text = `${video.title} ${video.channel} ${video.category}`.toLowerCase();
        const matchesSearch = text.includes(searchTerm.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    videoGrid.replaceChildren();

    if (filteredVideos.length === 0) {
        const message = document.createElement("p");
        message.className = "empty-message";
        message.textContent = "No videos found. Try another search.";
        videoGrid.appendChild(message);
        return;
    }

    filteredVideos.forEach(video => {
        const card = document.createElement("article");
        card.className = "video-card";
        card.tabIndex = 0;
        card.setAttribute("aria-label", `Play ${video.title}`);

        const thumbnailWrap = document.createElement("div");
        thumbnailWrap.className = "thumbnail-wrap";

        const thumbnail = document.createElement("img");
        thumbnail.className = "thumbnail";
        thumbnail.src = video.image;
        thumbnail.alt = video.title;
        thumbnail.loading = "lazy";

        thumbnail.onerror = () => {
            thumbnail.src = "https://placehold.co/640x360/202020/ffffff?text=Video";
        };

        const duration = document.createElement("span");
        duration.className = "duration";
        duration.textContent = video.duration;

        thumbnailWrap.append(thumbnail, duration);

        const info = document.createElement("div");
        info.className = "video-info";

        const avatar = document.createElement("div");
        avatar.className = "channel-avatar";
        avatar.textContent = video.avatar;
        avatar.style.backgroundColor = video.color;

        const details = document.createElement("div");
        details.className = "video-details";

        const title = document.createElement("h2");
        title.className = "video-title";
        title.textContent = video.title;

        const meta = document.createElement("p");
        meta.className = "video-meta";
        meta.textContent = `${video.channel} ✓`;

        const stats = document.createElement("p");
        stats.className = "video-meta";
        stats.textContent = `${video.views} · ${video.time}`;

        details.append(title, meta, stats);

        const more = document.createElement("button");
        more.className = "more-btn";
        more.textContent = "⋮";
        more.setAttribute("aria-label", "More options");
        more.addEventListener("click", event => {
            event.stopPropagation();
            showToast("More video options will be available in a future version.");
        });

        info.append(avatar, details, more);
        card.append(thumbnailWrap, info);

        card.addEventListener("click", () => openPlayer(video));
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openPlayer(video);
            }
        });

        videoGrid.appendChild(card);
    });
}

function openPlayer(video) {
    playerTitle.textContent = video.title;
    playerChannel.textContent = `${video.channel} · ${video.views}`;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}?autoplay=1&rel=0`;
    iframe.title = video.title;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";

    playerFrame.replaceChildren(iframe);
    playerOverlay.hidden = false;
    document.body.style.overflow = "hidden";
}

function closePlayer() {
    playerOverlay.hidden = true;
    playerFrame.replaceChildren();
    document.body.style.overflow = "";
}

document.getElementById("closePlayer").addEventListener("click", closePlayer);

playerOverlay.addEventListener("click", event => {
    if (event.target === playerOverlay) {
        closePlayer();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closePlayer();
    }
});

searchForm.addEventListener("submit", event => {
    event.preventDefault();
    searchTerm = searchInput.value.trim();
    renderVideos();
});

searchInput.addEventListener("input", () => {
    searchTerm = searchInput.value.trim();
    renderVideos();
});

categoryBar.addEventListener("click", event => {
    const button = event.target.closest(".category");
    if (!button) return;

    selectedCategory = button.dataset.category;

    document.querySelectorAll(".category").forEach(item => {
        item.classList.toggle("active", item === button);
    });

    renderVideos();
});

document.getElementById("menuBtn").addEventListener("click", () => {
    document.body.classList.toggle("sidebar-collapsed");
});

document.querySelectorAll(".sidebar .nav-item").forEach(item => {
    item.addEventListener("click", event => {
        event.preventDefault();

        document.querySelectorAll(".sidebar .nav-item").forEach(link => {
            link.classList.remove("active");
        });

        item.classList.add("active");

        if (item.dataset.category) {
            selectedCategory = item.dataset.category;

            document.querySelectorAll(".category").forEach(button => {
                button.classList.toggle(
                    "active",
                    button.dataset.category === selectedCategory
                );
            });

            renderVideos();
        } else if (item.dataset.page === "Home") {
            selectedCategory = "All";
            searchTerm = "";
            searchInput.value = "";

            document.querySelectorAll(".category").forEach(button => {
                button.classList.toggle("active", button.dataset.category === "All");
            });

            renderVideos();
        } else {
            showToast(`${item.dataset.page} is a frontend demo section.`);
        }

        if (window.innerWidth <= 600) {
            document.body.classList.remove("sidebar-collapsed");
        }
    });
});

document.getElementById("createBtn").addEventListener("click", () => {
    showToast("Sign in and backend functionality are not configured in this demo.");
});

let toastTimeout;

function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.display = "none";
    }, 2800);
}

renderVideos();