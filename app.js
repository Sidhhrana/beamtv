const DEFAULT_DATA = [
  {
    key: "eclipse-harbor",
    title: "Eclipse Harbor",
    type: "tv",
    tmdbId: "119051",
    season: 1,
    episode: 8,
    year: 2026,
    rating: 8.9,
    duration: "S1 - 8 eps",
    tags: ["neo-noir", "mystery", "essential", "blue"],
    description:
      "A neon harbor, a missing captain, and a city that forgets its own tide. Every episode slips between memory and myth.",
    poster:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
    hero: true,
  },
  {
    key: "ion-parallax",
    title: "Ion Parallax",
    type: "movie",
    tmdbId: "1078605",
    year: 2025,
    rating: 8.4,
    duration: "2h 11m",
    tags: ["sci-fi", "action", "blue", "new"],
    description:
      "A deep-space pilot races through collapsing timelines to save a crew she never met.",
    poster:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "glass-signal",
    title: "Glass Signal",
    type: "movie",
    tmdbId: "299534",
    year: 2024,
    rating: 8.1,
    duration: "1h 58m",
    tags: ["thriller", "tech", "essential"],
    description:
      "A privacy engineer discovers a signal that predicts catastrophic events hours before they occur.",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "lumen-drift",
    title: "Lumen Drift",
    type: "tv",
    tmdbId: "1399",
    season: 3,
    episode: 2,
    year: 2023,
    rating: 8.7,
    duration: "S3 - 10 eps",
    tags: ["drama", "blue", "essential"],
    description:
      "A drifting city in the upper atmosphere hides a council of timekeepers.",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "midnight-bay",
    title: "Midnight Bay",
    type: "movie",
    tmdbId: "634649",
    year: 2022,
    rating: 7.9,
    duration: "2h 03m",
    tags: ["romance", "noir"],
    description:
      "A radio host and a runaway find each other through a playlist of unsent messages.",
    poster:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "aurora-index",
    title: "Aurora Index",
    type: "tv",
    tmdbId: "66732",
    season: 2,
    episode: 4,
    year: 2025,
    rating: 8.2,
    duration: "S2 - 9 eps",
    tags: ["mystery", "new", "blue"],
    description:
      "An archivist traces a chain of disappearances to a floating data center above the Arctic.",
    poster:
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "cobalt-ward",
    title: "Cobalt Ward",
    type: "movie",
    tmdbId: "961484",
    year: 2024,
    rating: 8.0,
    duration: "2h 06m",
    tags: ["action", "blue"],
    description:
      "A trauma surgeon runs a covert night shift that saves people who never officially existed.",
    poster:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "signal-ritual",
    title: "Signal Ritual",
    type: "tv",
    tmdbId: "94605",
    season: 1,
    episode: 5,
    year: 2021,
    rating: 8.3,
    duration: "S1 - 6 eps",
    tags: ["mystery", "essential"],
    description:
      "A coastal town's lighthouse records messages from a future that hasn't happened yet.",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "atlas-vi",
    title: "Atlas VI",
    type: "movie",
    tmdbId: "872585",
    year: 2023,
    rating: 7.8,
    duration: "1h 49m",
    tags: ["sci-fi", "new"],
    description:
      "A terraformer wakes after 400 years to find the colony never arrived.",
    poster:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
  },
  {
    key: "tidecode",
    title: "Tidecode",
    type: "movie",
    tmdbId: "438631",
    year: 2022,
    rating: 7.6,
    duration: "2h 00m",
    tags: ["tech", "blue"],
    description:
      "A cryptographer discovers an oceanic signal that rewrites memory itself.",
    poster:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1400&q=80",
  },
];

let DATA = [...DEFAULT_DATA];
let SECTION_DATA = null;

const TMDB = {
  token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGQ2OWYyZDE5NzgwMWI1ZjA4MDhhY2M4NTVkM2M2ZCIsIm5iZiI6MTc3MzY0MjA0Mi45ODcsInN1YiI6IjY5YjdhMTNhZWNhYzk5MDEwYzIxZGM3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.giMqJk1Z5Vsr0WyxK4oazNOYz8BP251Wf6Lg_jbwtjM",
  baseUrl: "https://api.themoviedb.org/3",
};

const STORAGE_KEYS = {
  progress: "beam_progress",
  list: "beam_list",
  settings: "beam_settings",
  profiles: "beam_profiles",
  activeProfile: "beam_active_profile",
};

const DEFAULT_SETTINGS = {
  autoplay: true,
  nextEpisode: true,
  episodeSelector: true,
  quality: "auto",
  provider: "vidking",
  language: "en-US",
  region: "US",
  includeAdult: false,
  accent: "#0a84ff",
  compactCards: false,
  showRatings: true,
  reduceMotion: false,
  tvMode: false,
  theme: "nebula",
  textScale: "normal",
  showTags: true,
  glow: true,
  uiDensity: "comfortable",
  cardRadius: "soft",
};

const elements = {
  heroTitle: document.getElementById("heroTitle"),
  heroDesc: document.getElementById("heroDesc"),
  heroYear: document.getElementById("heroYear"),
  heroType: document.getElementById("heroType"),
  heroRating: document.getElementById("heroRating"),
  heroTags: document.getElementById("heroTags"),
  heroBackdrop: document.getElementById("heroBackdrop"),
  heroPoster: document.getElementById("heroPoster"),
  heroPlay: document.getElementById("heroPlay"),
  heroInfo: document.getElementById("heroInfo"),
  heroList: document.getElementById("heroList"),
  heroBadge: document.getElementById("heroBadge"),
  continueRail: document.getElementById("continueRail"),
  listRail: document.getElementById("listRail"),
  railEssentials: document.getElementById("railEssentials"),
  railBlue: document.getElementById("railBlue"),
  railNew: document.getElementById("railNew"),
  railTopMovies: document.getElementById("railTopMovies"),
  railTopSeries: document.getElementById("railTopSeries"),
  railUpcoming: document.getElementById("railUpcoming"),
  searchInput: document.getElementById("searchInput"),
  searchSection: document.getElementById("searchSection"),
  searchGrid: document.getElementById("searchGrid"),
  searchCount: document.getElementById("searchCount"),
  detailOverlay: document.getElementById("detailOverlay"),
  detailClose: document.getElementById("detailClose"),
  detailPoster: document.getElementById("detailPoster"),
  detailTitle: document.getElementById("detailTitle"),
  detailMeta: document.getElementById("detailMeta"),
  detailDesc: document.getElementById("detailDesc"),
  detailTags: document.getElementById("detailTags"),
  detailSeries: document.getElementById("detailSeries"),
  seasonSelect: document.getElementById("seasonSelect"),
  episodeList: document.getElementById("episodeList"),
  seriesPlay: document.getElementById("seriesPlay"),
  detailPlay: document.getElementById("detailPlay"),
  detailContinue: document.getElementById("detailContinue"),
  detailList: document.getElementById("detailList"),
  detailFullscreen: document.getElementById("detailFullscreen"),
  detailFullpage: document.getElementById("detailFullpage"),
  detailFullpageBack: document.getElementById("detailFullpageBack"),
  detailHeroBackdrop: document.getElementById("detailHeroBackdrop"),
  detailHeroTitle: document.getElementById("detailHeroTitle"),
  detailHeroPlay: document.getElementById("detailHeroPlay"),
  detailHeroList: document.getElementById("detailHeroList"),
  detailHeroDownload: document.getElementById("detailHeroDownload"),
  detailFullTitle: document.getElementById("detailFullTitle"),
  detailFullMeta: document.getElementById("detailFullMeta"),
  detailFullDesc: document.getElementById("detailFullDesc"),
  detailFullStarring: document.getElementById("detailFullStarring"),
  detailMoreGenres: document.getElementById("detailMoreGenres"),
  detailMoreCast: document.getElementById("detailMoreCast"),
  detailRecsGrid: document.getElementById("detailRecsGrid"),
  playerOverlay: document.getElementById("playerOverlay"),
  playerFrame: document.getElementById("playerFrame"),
  playerClose: document.getElementById("playerClose"),
  playerTitle: document.getElementById("playerTitle"),
  playerSub: document.getElementById("playerSub"),
  playerProvider: document.getElementById("playerProvider"),
  playerNextEpisode: document.getElementById("playerNextEpisode"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  searchToggle: document.getElementById("searchToggle"),
  searchOverlay: document.getElementById("searchOverlay"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  mobileMenuOverlay: document.getElementById("mobileMenuOverlay"),
  mobileMenuClose: document.getElementById("mobileMenuClose"),
  settingsNavMobile: document.getElementById("settingsNavMobile"),
  settingsNavBottom: document.getElementById("settingsNavBottom"),
  settingsNav: document.getElementById("settingsNav"),
  settingsOverlay: document.getElementById("settingsOverlay"),
  settingsClose: document.getElementById("settingsClose"),
  settingAutoplay: document.getElementById("settingAutoplay"),
  settingNextEpisode: document.getElementById("settingNextEpisode"),
  settingEpisodeSelector: document.getElementById("settingEpisodeSelector"),
  settingQuality: document.getElementById("settingQuality"),
  settingProvider: document.getElementById("settingProvider"),
  settingLanguage: document.getElementById("settingLanguage"),
  settingRegion: document.getElementById("settingRegion"),
  settingAdult: document.getElementById("settingAdult"),
  settingAccent: document.getElementById("settingAccent"),
  settingCompactCards: document.getElementById("settingCompactCards"),
  settingShowRatings: document.getElementById("settingShowRatings"),
  settingTheme: document.getElementById("settingTheme"),
  settingTextScale: document.getElementById("settingTextScale"),
  settingShowTags: document.getElementById("settingShowTags"),
  settingGlow: document.getElementById("settingGlow"),
  settingDensity: document.getElementById("settingDensity"),
  settingCardRadius: document.getElementById("settingCardRadius"),
  settingReduceMotion: document.getElementById("settingReduceMotion"),
  settingTvMode: document.getElementById("settingTvMode"),
  settingClearHistory: document.getElementById("settingClearHistory"),
};

const profileElements = {
  overlay: document.getElementById("profileOverlay"),
  grid: document.getElementById("profileGrid"),
  addBtn: document.getElementById("addProfileBtn"),
  loading: document.getElementById("profileLoading"),
  manageOverlay: document.getElementById("manageOverlay"),
  manageGrid: document.getElementById("manageGrid"),
  manageClose: document.getElementById("manageCloseBtn"),
  avatar: document.getElementById("profileAvatar"),
  menu: document.getElementById("profileMenu"),
  switchBtn: document.getElementById("switchProfileBtn"),
  manageBtn: document.getElementById("manageProfilesBtn"),
};

let activeItem = null;
let activeSeason = null;
let activeEpisode = null;
let settings = {
  ...DEFAULT_SETTINGS,
  ...loadStore(STORAGE_KEYS.settings, DEFAULT_SETTINGS),
};
let currentView = "home";
let currentTypeFilter = null;
let currentPlayerItem = null;
let currentPlayerSeason = null;
let currentPlayerEpisode = null;
let currentPlayerProgress = 0;
let nextEpisodeRequestId = 0;
let activeProfileId = loadStore(STORAGE_KEYS.activeProfile, null);

const tmdbMeta = {
  config: null,
  genresMap: null,
};

const tvCache = new Map();
const seasonCache = new Map();
const creditsCache = new Map();

let searchTimer = null;
let searchRequestId = 0;
let detailFullscreenActive = false;
function buildKey(item, season = item.season, episode = item.episode) {
  if (item.type === "tv") {
    return `${item.tmdbId}:S${season}:E${episode}`;
  }
  return `${item.tmdbId}`;
}

function loadStore(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getProfileKey(baseKey) {
  const id = activeProfileId || "guest";
  return `${baseKey}:${id}`;
}

function loadProfileStore(baseKey, fallback) {
  return loadStore(getProfileKey(baseKey), fallback);
}

function saveProfileStore(baseKey, value) {
  saveStore(getProfileKey(baseKey), value);
}

function applySettings() {
  document.documentElement.style.setProperty("--accent", settings.accent);
  document.documentElement.style.setProperty("--accent-2", getAccent2(settings.accent));
  document.body.classList.toggle("compact-cards", settings.compactCards);
  document.body.classList.toggle("reduce-motion", settings.reduceMotion);
  document.body.classList.toggle("hide-tags", !settings.showTags);
  document.body.classList.toggle("glow-off", !settings.glow);
  document.body.classList.toggle("dense-ui", settings.uiDensity === "compact");
  document.body.classList.toggle("sharp-cards", settings.cardRadius === "sharp");

  const themes = {
    nebula: {
      bg: "#0a0a0b",
      bg2: "#0b0b0f",
      glass: "rgba(10, 10, 12, 0.7)",
      glassStrong: "rgba(10, 10, 12, 0.92)",
    },
    noir: {
      bg: "#050607",
      bg2: "#0a0a0b",
      glass: "rgba(8, 8, 10, 0.68)",
      glassStrong: "rgba(8, 8, 10, 0.9)",
    },
    ember: {
      bg: "#0b0606",
      bg2: "#12090a",
      glass: "rgba(16, 8, 8, 0.7)",
      glassStrong: "rgba(16, 8, 8, 0.9)",
    },
  };

  const theme = themes[settings.theme] || themes.nebula;
  document.documentElement.style.setProperty("--bg", theme.bg);
  document.documentElement.style.setProperty("--bg-2", theme.bg2);
  document.documentElement.style.setProperty("--glass", theme.glass);
  document.documentElement.style.setProperty("--glass-strong", theme.glassStrong);
  document.documentElement.style.setProperty("--glass-highlight", "rgba(255, 255, 255, 0.08)");
  document.documentElement.style.setProperty("--glass-shadow", "rgba(0, 0, 0, 0.35)");

  const scaleMap = { small: 0.95, normal: 1, large: 1.05 };
  document.documentElement.style.setProperty("--text-scale", scaleMap[settings.textScale] || 1);
}

function setPlatformClass() {
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  document.body.classList.toggle("android", isAndroid);
}

function syncSettingsUI() {
  elements.settingAutoplay.checked = settings.autoplay;
  elements.settingNextEpisode.checked = settings.nextEpisode;
  elements.settingEpisodeSelector.checked = settings.episodeSelector;
  elements.settingQuality.value = settings.quality;
  elements.settingProvider.value = settings.provider;
  elements.settingLanguage.value = settings.language;
  elements.settingRegion.value = settings.region;
  elements.settingAdult.checked = settings.includeAdult;
  elements.settingAccent.value = settings.accent;
  elements.settingCompactCards.checked = settings.compactCards;
  elements.settingShowRatings.checked = settings.showRatings;
  elements.settingTheme.value = settings.theme;
  elements.settingTextScale.value = settings.textScale;
  elements.settingShowTags.checked = settings.showTags;
  elements.settingGlow.checked = settings.glow;
  elements.settingDensity.value = settings.uiDensity;
  elements.settingCardRadius.value = settings.cardRadius;
  elements.settingReduceMotion.checked = settings.reduceMotion;
  elements.settingTvMode.checked = settings.tvMode;
}

function getAccent2(color) {
  const map = {
    "#0a84ff": "#6bc8ff",
    "#34c759": "#8cf3b6",
    "#ff9f0a": "#ffd166",
    "#ff375f": "#ff8aa0",
    "#bf5af2": "#dba7ff",
  };
  return map[color] || "#6bc8ff";
}

function setSetting(key, value) {
  settings = {
    ...settings,
    [key]: value,
  };
  saveStore(STORAGE_KEYS.settings, settings);
  applySettings();
}

function renderTags(container, tags) {
  container.innerHTML = "";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    container.appendChild(span);
  });
}

function renderCard(item, progressData, options = {}) {
  const card = document.createElement("div");
  card.className = `card ${item.type === "tv" ? "card-series" : "card-movie"}`;
  card.dataset.key = item.key;
  if (progressData) {
    card.classList.add("has-progress");
  }

  const img = document.createElement("img");
  img.src = item.poster || "";
  img.alt = item.title;

  const body = document.createElement("div");
  body.className = "card-body";

  const top = document.createElement("div");
  top.className = "card-top";

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.type === "tv" ? "Series" : "Movie";
  top.appendChild(badge);

  if (progressData && item.type === "tv") {
    const progressBadge = document.createElement("span");
    progressBadge.className = "badge strong";
    progressBadge.textContent = `S${progressData.season || 1} • E${progressData.episode || 1}`;
    top.appendChild(progressBadge);
  }

  if (settings.showRatings && item.rating && item.rating !== "N/A") {
    const rating = document.createElement("span");
    rating.className = "rating-badge";
    rating.textContent = item.rating;
    top.appendChild(rating);
  }

  const title = document.createElement("div");
  title.className = "card-title";
  title.textContent = item.title;

  const meta = document.createElement("div");
  meta.className = "card-meta";
  if (item.type === "tv" && item.seasonsCount) {
    meta.textContent = `${item.year} - ${item.seasonsCount} Seasons`;
  } else {
    meta.textContent = `${item.year} - ${item.type === "tv" ? "Series" : "Movie"}`;
  }

  body.appendChild(top);
  body.appendChild(title);
  body.appendChild(meta);

  if (progressData) {
    const bar = document.createElement("div");
    bar.className = "progress-bar";
    const fill = document.createElement("span");
    fill.style.width = `${progressData.progress}%`;
    bar.appendChild(fill);
    body.appendChild(bar);
  }

  card.appendChild(img);
  card.appendChild(body);

  const onClick = options.onClick || (() => openDetail(item));
  card.addEventListener("click", onClick);
  return card;
}

function renderRail(container, items) {
  container.innerHTML = "";
  const filtered = currentTypeFilter
    ? items.filter((item) => item.type === currentTypeFilter)
    : items;
  filtered.forEach((item) => {
    container.appendChild(renderCard(item));
  });
}

function mergeData(items) {
  items.forEach((item) => {
    const exists = DATA.find((entry) => entry.tmdbId === item.tmdbId);
    if (!exists) {
      DATA.push(item);
    }
  });
}

function buildFallbackItem(entry) {
  const snapshot = entry.item || {};
  return {
    key: snapshot.key || `tmdb-${entry.tmdbId}`,
    title: snapshot.title || "Unknown title",
    type: snapshot.type || entry.mediaType || "movie",
    tmdbId: entry.tmdbId,
    season: snapshot.season,
    episode: snapshot.episode,
    year: snapshot.year || "",
    rating: snapshot.rating || "N/A",
    duration: snapshot.duration || "",
    tags: snapshot.tags || [],
    description: snapshot.description || "No overview available.",
    poster: snapshot.poster || "",
    backdrop: snapshot.backdrop || snapshot.poster || "",
  };
}

function renderContinueWatching() {
  const progressStore = loadProfileStore(STORAGE_KEYS.progress, {});
  const entries = Object.values(progressStore)
    .filter((entry) => entry.progress > 1 && entry.progress < 95)
    .sort((a, b) => b.timestamp - a.timestamp);

  const uniqueByTitle = new Map();
  entries.forEach((entry) => {
    if (!uniqueByTitle.has(entry.tmdbId)) {
      uniqueByTitle.set(entry.tmdbId, entry);
    }
  });

  elements.continueRail.innerHTML = "";
  if (!uniqueByTitle.size) {
    elements.continueRail.innerHTML = "<div class=\"muted\">No recent progress yet.</div>";
    return;
  }

  uniqueByTitle.forEach((entry) => {
    let item = DATA.find((d) => d.tmdbId === entry.tmdbId);
    let isFallback = false;
    if (!item && entry.item) {
      item = buildFallbackItem(entry);
      mergeData([item]);
      isFallback = true;
    }
    if (!item) return;
    if (currentTypeFilter && item.type !== currentTypeFilter) return;
    const card = renderCard(item, entry, isFallback ? { onClick: () => openPlayer(item, { resume: true }) } : {});
    const actions = document.createElement("div");
    actions.className = "card-actions";
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      const updated = Object.fromEntries(
        Object.entries(progressStore).filter(([, value]) => value.tmdbId !== entry.tmdbId)
      );
    saveProfileStore(STORAGE_KEYS.progress, updated);
      renderContinueWatching();
    });
    actions.appendChild(removeBtn);
    card.querySelector(".card-body")?.appendChild(actions);
    elements.continueRail.appendChild(card);
  });
}

function renderMyList() {
  if (currentView !== "list") {
    elements.listRail.innerHTML = "";
    return;
  }
  const list = loadProfileStore(STORAGE_KEYS.list, []);
  elements.listRail.innerHTML = "";
  if (!list.length) {
    elements.listRail.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon" aria-hidden="true">≡</div>
        <h3>Your list is empty</h3>
        <button class="primary-btn" id="browseContentBtn">Browse Content</button>
      </div>
    `;
    const browseBtn = document.getElementById("browseContentBtn");
    if (browseBtn) {
      browseBtn.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-active"));
        const homeLink = document.querySelector(".nav-link[data-view=\"home\"]");
        homeLink?.classList.add("is-active");
        applyView("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
    return;
  }

  list.forEach((key) => {
    const item = DATA.find((d) => d.key === key);
    if (item) {
      if (currentTypeFilter && item.type !== currentTypeFilter) return;
      elements.listRail.appendChild(renderCard(item));
    }
  });
}

function setHero(item) {
  const nowYear = new Date().getFullYear();
  elements.heroTitle.textContent = item.title;
  elements.heroDesc.textContent = item.description;
  elements.heroYear.textContent = item.year;
  elements.heroType.textContent = item.type === "tv" ? "Series" : "Movie";
  elements.heroRating.textContent = item.rating;
  renderTags(elements.heroTags, item.tags || []);
  if (elements.heroBackdrop) {
    elements.heroBackdrop.style.backgroundImage = `url(${item.backdrop || item.poster || ""})`;
  }
  if (elements.heroPoster) {
    elements.heroPoster.src = item.poster || "";
    elements.heroPoster.alt = item.title;
  }
  if (elements.heroBadge) {
    elements.heroBadge.textContent = Number(item.year) >= nowYear ? "Coming Soon" : "Now Streaming";
  }

  elements.heroPlay.onclick = () => openPlayer(item, { resume: false });
  elements.heroInfo.onclick = () => openDetail(item);
  elements.heroList.onclick = () => toggleList(item);
}

function setDetailFullscreen(on) {
  detailFullscreenActive = on;
  if (elements.detailOverlay) {
    elements.detailOverlay.classList.toggle("fullpage-open", on);
  }
  if (elements.detailFullpage) {
    elements.detailFullpage.classList.toggle("hidden", !on);
    elements.detailFullpage.setAttribute("aria-hidden", on ? "false" : "true");
  }
  if (elements.detailFullscreen) {
    elements.detailFullscreen.setAttribute("aria-pressed", on ? "true" : "false");
  }
  if (on && elements.detailFullpage) {
    elements.detailFullpage.scrollTop = 0;
  }
}

async function loadCredits(item) {
  const cacheKey = `${item.type}:${item.tmdbId}`;
  if (creditsCache.has(cacheKey)) {
    return creditsCache.get(cacheKey);
  }
  try {
    const endpoint = item.type === "tv" ? `/tv/${item.tmdbId}/credits` : `/movie/${item.tmdbId}/credits`;
    const credits = await fetchTmdb(endpoint, { language: settings.language });
    creditsCache.set(cacheKey, credits);
    return credits;
  } catch (error) {
    return null;
  }
}

function getRecommendations(item) {
  const tags = new Set(item.tags || []);
  const pool = DATA.filter((entry) => entry.tmdbId !== item.tmdbId);
  const scored = pool.map((entry) => {
    const overlap = (entry.tags || []).filter((tag) => tags.has(tag)).length;
    return { entry, score: overlap + (entry.type === item.type ? 0.5 : 0) };
  });
  scored.sort((a, b) => b.score - a.score);
  const top = scored.filter((row) => row.score > 0).slice(0, 10).map((row) => row.entry);
  if (top.length >= 8) return top.slice(0, 8);
  const fallback = scored.map((row) => row.entry).slice(0, 12);
  return [...new Set([...top, ...fallback])].slice(0, 8);
}

async function hydrateFullscreenDetail(item) {
  if (elements.detailHeroBackdrop) {
    elements.detailHeroBackdrop.style.backgroundImage = `url(${item.backdrop || item.poster || ""})`;
  }
  if (elements.detailHeroTitle) {
    elements.detailHeroTitle.textContent = item.title;
  }
  if (elements.detailFullTitle) {
    elements.detailFullTitle.textContent = item.title;
  }
  if (elements.detailFullMeta) {
    elements.detailFullMeta.textContent = `${item.year} · ${item.type === "tv" ? "Series" : "Movie"} · ${item.duration || ""} · ${item.rating}`;
  }
  if (elements.detailFullDesc) {
    elements.detailFullDesc.textContent = item.description;
  }

  if (elements.detailMoreGenres) {
    const tags = (item.tags || []).map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1)).join(", ");
    elements.detailMoreGenres.innerHTML = `
      <div class="detail-more-title">Genres</div>
      <div class="detail-more-body">${tags || "Not available"}</div>
      <div class="detail-more-title">About</div>
      <div class="detail-more-body">${item.description.slice(0, 120)}${item.description.length > 120 ? "..." : ""}</div>
    `;
  }

  if (elements.detailMoreCast || elements.detailFullStarring) {
    const credits = await loadCredits(item);
    const cast = credits?.cast?.slice(0, 8).map((person) => person.name).filter(Boolean) || [];
    if (elements.detailFullStarring) {
      elements.detailFullStarring.textContent = cast.length ? `Starring: ${cast.join(", ")}` : "";
    }
    if (elements.detailMoreCast) {
      elements.detailMoreCast.innerHTML = `
        <div class="detail-more-title">Cast</div>
        <div class="detail-more-body">${cast.length ? cast.join(", ") : "Not available"}</div>
      `;
    }
  }

  if (elements.detailRecsGrid) {
    elements.detailRecsGrid.innerHTML = "";
    getRecommendations(item).forEach((entry) => {
      elements.detailRecsGrid.appendChild(renderCard(entry));
    });
  }
}

async function openDetail(item) {
  activeItem = item;
  activeSeason = null;
  activeEpisode = null;

  if (elements.searchOverlay && !elements.searchOverlay.classList.contains("hidden")) {
    elements.searchOverlay.classList.add("hidden");
  }

  elements.detailPoster.src = item.backdrop || item.poster || "";
  elements.detailTitle.textContent = item.title;
  elements.detailMeta.textContent = `${item.year} - ${item.type === "tv" ? "Series" : "Movie"} - ${item.duration || ""} - ${item.rating}`;
  elements.detailDesc.textContent = item.description;
  renderTags(elements.detailTags, item.tags || []);

  elements.detailOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");

  elements.detailPlay.onclick = () => {
    if (item.type === "tv" && activeSeason && activeEpisode) {
      openPlayer(item, { season: activeSeason, episode: activeEpisode, resume: false });
      return;
    }
    openPlayer(item, { resume: false });
  };

  elements.detailContinue.onclick = () => openPlayer(item, { resume: true });
  elements.detailList.onclick = () => toggleList(item);
  if (elements.detailHeroPlay) {
    elements.detailHeroPlay.onclick = () => {
      if (item.type === "tv" && activeSeason && activeEpisode) {
        openPlayer(item, { season: activeSeason, episode: activeEpisode, resume: false });
        return;
      }
      openPlayer(item, { resume: false });
    };
  }
  if (elements.detailHeroList) {
    elements.detailHeroList.onclick = () => toggleList(item);
  }
  if (elements.detailHeroDownload) {
    elements.detailHeroDownload.disabled = true;
  }

  if (item.type === "tv") {
    elements.detailSeries.classList.remove("hidden");
    await hydrateSeriesDetail(item);
  } else {
    elements.detailSeries.classList.add("hidden");
  }

  hydrateFullscreenDetail(item);
}

function closeDetail() {
  elements.detailOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  activeItem = null;
  setDetailFullscreen(false);
}

function buildPlayerUrl(item, options = {}) {
  const accent = settings.accent.replace("#", "");
  const autoPlay = settings.autoplay ? "true" : "false";
  const nextEpisode = settings.nextEpisode ? "true" : "false";
  const episodeSelector = settings.episodeSelector ? "true" : "false";

  let src = "";
  if (settings.provider === "custom") {
    const base = "https://xk4l.mzt4pr8wlkxnv0qsha5g.website";
    if (item.type === "tv") {
      src = `${base}/watch/${item.tmdbId}/${options.season}/${options.episode}`;
    } else {
      src = `${base}/watch/${item.tmdbId}`;
    }
  } else if (settings.provider === "custom2") {
    const base = "https://67movies.net";
    if (item.type === "tv") {
      src = `${base}/watch/tv/${item.tmdbId}/${options.season}/${options.episode}`;
    } else {
      src = `${base}/watch/movie/${item.tmdbId}`;
    }
  } else if (settings.provider === "custom3") {
    const base = "https://tv.vynx.cc";
    if (item.type === "tv") {
      src = `${base}/watch/${item.tmdbId}?type=tv&season=${options.season}&episode=${options.episode}&title=${encodeURIComponent(item.title)}`;
    } else {
      src = `${base}/watch/${item.tmdbId}?type=movie&title=${encodeURIComponent(item.title)}`;
    }
  } else if (item.type === "tv") {
    src = `https://www.vidking.net/embed/tv/${item.tmdbId}/${options.season}/${options.episode}?color=${accent}&autoPlay=${autoPlay}&nextEpisode=${nextEpisode}&episodeSelector=${episodeSelector}`;
  } else {
    src = `https://www.vidking.net/embed/movie/${item.tmdbId}?color=${accent}&autoPlay=${autoPlay}`;
  }

  if (options.progress) {
    src += `&progress=${options.progress}`;
  }

  return src;
}

function getLatestProgress(item) {
  const progressStore = loadProfileStore(STORAGE_KEYS.progress, {});
  const entries = Object.values(progressStore).filter((entry) => entry.tmdbId === item.tmdbId);
  return entries.sort((a, b) => b.timestamp - a.timestamp)[0];
}

async function updateNextEpisodeButton() {
  if (!elements.playerNextEpisode) return;
  const isTv = currentPlayerItem && currentPlayerItem.type === "tv";
  elements.playerNextEpisode.classList.toggle("hidden", !isTv);
  if (!isTv) {
    elements.playerNextEpisode.disabled = true;
    elements.playerNextEpisode.setAttribute("aria-disabled", "true");
    return;
  }

  elements.playerNextEpisode.disabled = true;
  elements.playerNextEpisode.setAttribute("aria-disabled", "true");
  const requestId = ++nextEpisodeRequestId;
  const next = await getNextEpisode(currentPlayerItem, currentPlayerSeason, currentPlayerEpisode);
  if (requestId !== nextEpisodeRequestId) return;
  if (next) {
    elements.playerNextEpisode.disabled = false;
    elements.playerNextEpisode.setAttribute("aria-disabled", "false");
    elements.playerNextEpisode.dataset.nextSeason = String(next.season);
    elements.playerNextEpisode.dataset.nextEpisode = String(next.episode);
  } else {
    delete elements.playerNextEpisode.dataset.nextSeason;
    delete elements.playerNextEpisode.dataset.nextEpisode;
  }
}

function openPlayer(item, options = {}) {
  const progressStore = loadProfileStore(STORAGE_KEYS.progress, {});
  let season = options.season || item.season || 1;
  let episode = options.episode || item.episode || 1;
  let progress = 0;

  const latest = getLatestProgress(item);

  if (item.type === "tv" && latest && !options.season && !options.episode) {
    season = latest.season || season;
    episode = latest.episode || episode;
  }

  const key = item.type === "tv" ? `${item.tmdbId}:S${season}:E${episode}` : item.tmdbId;
  const entry = progressStore[key] || latest;
  if (
    options.resume &&
    entry &&
    entry.currentTime > 30 &&
    (!entry.duration || entry.currentTime < entry.duration - 60)
  ) {
    progress = Math.floor(entry.currentTime);
  }

  const src = buildPlayerUrl(item, { season, episode, progress });

  currentPlayerItem = item;
  currentPlayerSeason = season;
  currentPlayerEpisode = episode;
  currentPlayerProgress = progress;

  elements.playerFrame.src = src;
  elements.playerTitle.textContent = item.title;
  elements.playerSub.textContent = item.type === "tv" ? `Season ${season} - Episode ${episode}` : item.duration || "";
  elements.playerOverlay.classList.remove("hidden");
  elements.detailOverlay.classList.add("hidden");
  document.body.classList.add("no-scroll");

  updateNextEpisodeButton();
}

function closePlayer() {
  elements.playerOverlay.classList.add("hidden");
  elements.playerFrame.src = "";
  document.body.classList.remove("no-scroll");
  currentPlayerItem = null;
  if (elements.playerNextEpisode) {
    elements.playerNextEpisode.classList.add("hidden");
    elements.playerNextEpisode.disabled = true;
    elements.playerNextEpisode.setAttribute("aria-disabled", "true");
  }
}

function toggleList(item) {
  const list = loadProfileStore(STORAGE_KEYS.list, []);
  const index = list.indexOf(item.key);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(item.key);
  }
  saveProfileStore(STORAGE_KEYS.list, list);
  renderMyList();
}

function showSearchLoading() {
  elements.searchSection.classList.remove("hidden");
  elements.searchGrid.innerHTML = "<div class=\"muted\">Searching...</div>";
  elements.searchCount.textContent = "";
}

async function renderSearchResults(query) {
  const q = query.trim();
  if (!q) {
    elements.searchSection.classList.add("hidden");
    return;
  }

  const requestId = ++searchRequestId;
  showSearchLoading();

  try {
    await ensureTmdbMeta();
    const results = await fetchTmdb("/search/multi", {
      query: q,
      include_adult: settings.includeAdult,
      language: settings.language,
      region: settings.region,
    });

    if (requestId !== searchRequestId) return;

    const mapped = (results.results || [])
      .filter((item) => item.media_type === "movie" || item.media_type === "tv")
      .map((item) => mapItem(item, item.media_type, tmdbMeta.config, tmdbMeta.genresMap))
      .slice(0, 30);

    mergeData(mapped);

    elements.searchSection.classList.remove("hidden");
    elements.searchGrid.innerHTML = "";
    mapped.forEach((item) => elements.searchGrid.appendChild(renderCard(item)));
    elements.searchCount.textContent = `${mapped.length} result${mapped.length === 1 ? "" : "s"}`;
  } catch (error) {
    if (requestId !== searchRequestId) return;
    elements.searchSection.classList.remove("hidden");
    elements.searchGrid.innerHTML = "<div class=\"muted\">Search failed. Check token and try again.</div>";
    elements.searchCount.textContent = "";
  }
}

function handleSearchInput(value) {
  if (searchTimer) {
    clearTimeout(searchTimer);
  }
  searchTimer = setTimeout(() => renderSearchResults(value), 320);
}

function toYear(value) {
  if (!value) return "";
  const parts = value.split("-");
  return parts[0] || "";
}
async function fetchTmdb(path, params = {}) {
  if (!TMDB.token || TMDB.token.includes("PASTE_")) {
    throw new Error("Missing TMDB token");
  }
  const url = new URL(`${TMDB.baseUrl}${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  const response = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${TMDB.token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  if (!response.ok) {
    throw new Error(`TMDB error ${response.status}`);
  }
  return response.json();
}

function buildImageUrl(config, size, path) {
  if (!config?.images?.secure_base_url || !path) return "";
  return `${config.images.secure_base_url}${size}${path}`;
}

function buildGenresMap(movieGenres, tvGenres) {
  const map = new Map();
  (movieGenres || []).forEach((g) => map.set(g.id, g.name));
  (tvGenres || []).forEach((g) => map.set(g.id, g.name));
  return map;
}

function mapItem(raw, mediaType, config, genresMap) {
  const title = raw.title || raw.name || "Untitled";
  const year = toYear(raw.release_date || raw.first_air_date);
  const tags = (raw.genre_ids || [])
    .map((id) => genresMap.get(id))
    .filter(Boolean)
    .slice(0, 3)
    .map((tag) => tag.toLowerCase());

  return {
    key: `${mediaType}-${raw.id}`,
    title,
    type: mediaType,
    tmdbId: String(raw.id),
    year: year || "N/A",
    rating: raw.vote_average ? Number(raw.vote_average.toFixed(1)) : "N/A",
    duration: mediaType === "tv" ? "Series" : "Movie",
    tags,
    description: raw.overview || "No summary available.",
    poster: buildImageUrl(config, "w500", raw.poster_path),
    backdrop: buildImageUrl(config, "w780", raw.backdrop_path) || buildImageUrl(config, "w500", raw.poster_path),
  };
}

async function ensureTmdbMeta() {
  if (tmdbMeta.config && tmdbMeta.genresMap) return;
  const [config, movieGenres, tvGenres] = await Promise.all([
    fetchTmdb("/configuration"),
    fetchTmdb("/genre/movie/list", { language: settings.language }),
    fetchTmdb("/genre/tv/list", { language: settings.language }),
  ]);
  tmdbMeta.config = config;
  tmdbMeta.genresMap = buildGenresMap(movieGenres.genres, tvGenres.genres);
}

async function loadTmdbData() {
  await ensureTmdbMeta();

  const [trending, moviePopular, tvPopular, movieTop, tvTop, upcoming] = await Promise.all([
    fetchTmdb("/trending/all/day", { language: settings.language, region: settings.region }),
    fetchTmdb("/movie/popular", { language: settings.language, region: settings.region }),
    fetchTmdb("/tv/popular", { language: settings.language, region: settings.region }),
    fetchTmdb("/movie/top_rated", { language: settings.language, region: settings.region }),
    fetchTmdb("/tv/top_rated", { language: settings.language, region: settings.region }),
    fetchTmdb("/movie/upcoming", { language: settings.language, region: settings.region }),
  ]);

  const trendingItems = (trending.results || [])
    .filter((item) => item.media_type === "movie" || item.media_type === "tv")
    .slice(0, 20)
    .map((item) => mapItem(item, item.media_type, tmdbMeta.config, tmdbMeta.genresMap));

  const movieItems = (moviePopular.results || [])
    .slice(0, 20)
    .map((item) => mapItem(item, "movie", tmdbMeta.config, tmdbMeta.genresMap));

  const tvItems = (tvPopular.results || [])
    .slice(0, 20)
    .map((item) => mapItem(item, "tv", tmdbMeta.config, tmdbMeta.genresMap));

  const movieTopItems = (movieTop.results || [])
    .slice(0, 20)
    .map((item) => mapItem(item, "movie", tmdbMeta.config, tmdbMeta.genresMap));

  const tvTopItems = (tvTop.results || [])
    .slice(0, 20)
    .map((item) => mapItem(item, "tv", tmdbMeta.config, tmdbMeta.genresMap));

  const upcomingItems = (upcoming.results || [])
    .slice(0, 20)
    .map((item) => mapItem(item, "movie", tmdbMeta.config, tmdbMeta.genresMap));

  const all = [...trendingItems, ...movieItems, ...tvItems, ...movieTopItems, ...tvTopItems, ...upcomingItems];

  return {
    all,
    sections: {
      essentials: trendingItems,
      blue: movieItems,
      newest: tvItems,
      topMovies: movieTopItems,
      topSeries: tvTopItems,
      upcoming: upcomingItems,
    },
  };
}

async function hydrateSeriesDetail(item) {
  try {
    await ensureTmdbMeta();
    let detail = tvCache.get(item.tmdbId);
    if (!detail) {
      detail = await fetchTmdb(`/tv/${item.tmdbId}`, { language: settings.language });
      tvCache.set(item.tmdbId, detail);
    }

    if (detail.number_of_seasons) {
      item.seasonsCount = detail.number_of_seasons;
    }

    const seasons = (detail.seasons || []).filter((season) => season.season_number >= 1);
    if (!seasons.length) {
      elements.episodeList.innerHTML = "<div class=\"muted\">No episodes found.</div>";
      return;
    }

    elements.seasonSelect.innerHTML = "";
    seasons.forEach((season) => {
      const option = document.createElement("option");
      option.value = String(season.season_number);
      option.textContent = `${season.name} (${season.episode_count || 0} eps)`;
      elements.seasonSelect.appendChild(option);
    });

    const latest = getLatestProgress(item);
    const fallbackSeason = latest?.season || seasons[0].season_number;
    activeSeason = fallbackSeason;
    elements.seasonSelect.value = String(fallbackSeason);

    await renderEpisodes(item, activeSeason, latest?.episode);

    elements.seasonSelect.onchange = async (event) => {
      activeSeason = Number(event.target.value);
      await renderEpisodes(item, activeSeason);
    };

    elements.seriesPlay.onclick = () => {
      if (activeSeason && activeEpisode) {
        openPlayer(item, { season: activeSeason, episode: activeEpisode, resume: false });
      }
    };
  } catch (error) {
    elements.episodeList.innerHTML = "<div class=\"muted\">Unable to load episodes.</div>";
  }
}

async function renderEpisodes(item, seasonNumber, preferredEpisode) {
  elements.episodeList.innerHTML = "<div class=\"muted\">Loading episodes...</div>";

  const cacheKey = `${item.tmdbId}-S${seasonNumber}`;
  let seasonDetail = seasonCache.get(cacheKey);
  if (!seasonDetail) {
    seasonDetail = await fetchTmdb(`/tv/${item.tmdbId}/season/${seasonNumber}`, {
      language: settings.language,
    });
    seasonCache.set(cacheKey, seasonDetail);
  }

  const episodes = seasonDetail.episodes || [];
  if (!episodes.length) {
    elements.episodeList.innerHTML = "<div class=\"muted\">No episodes found.</div>";
    return;
  }

  elements.episodeList.innerHTML = "";

  const chosen = preferredEpisode || episodes[0].episode_number;
  activeEpisode = chosen;

  episodes.forEach((episode) => {
    const row = document.createElement("div");
    row.className = "episode-item";
    if (episode.episode_number === chosen) {
      row.classList.add("is-active");
    }

    const thumb = document.createElement("img");
    thumb.className = "episode-thumb";
    thumb.src = buildImageUrl(tmdbMeta.config, "w300", episode.still_path) || item.backdrop || item.poster || "";
    thumb.alt = episode.name || "Episode";

    const meta = document.createElement("div");
    meta.className = "episode-meta";

    const title = document.createElement("div");
    title.className = "episode-title";
    title.textContent = `E${episode.episode_number} - ${episode.name || "Episode"}`;

    const desc = document.createElement("div");
    desc.className = "episode-desc";
    desc.textContent = episode.overview || "No summary available.";

    meta.appendChild(title);
    meta.appendChild(desc);

    row.appendChild(thumb);
    row.appendChild(meta);

    row.addEventListener("click", () => {
      activeEpisode = episode.episode_number;
      Array.from(elements.episodeList.children).forEach((child) => child.classList.remove("is-active"));
      row.classList.add("is-active");
    });

    elements.episodeList.appendChild(row);
  });
}

async function getSeasonDetail(item, seasonNumber) {
  const cacheKey = `${item.tmdbId}-S${seasonNumber}`;
  let seasonDetail = seasonCache.get(cacheKey);
  if (!seasonDetail) {
    seasonDetail = await fetchTmdb(`/tv/${item.tmdbId}/season/${seasonNumber}`, {
      language: settings.language,
    });
    seasonCache.set(cacheKey, seasonDetail);
  }
  return seasonDetail;
}

async function getNextEpisode(item, seasonNumber, episodeNumber) {
  if (!item || item.type !== "tv") return null;
  try {
    const seasonDetail = await getSeasonDetail(item, seasonNumber);
    const episodes = seasonDetail?.episodes || [];
    const nextInSeason = episodes.find((ep) => ep.episode_number === episodeNumber + 1);
    if (nextInSeason) {
      return { season: seasonNumber, episode: nextInSeason.episode_number };
    }
    const nextSeasonNumber = seasonNumber + 1;
    const nextSeasonDetail = await getSeasonDetail(item, nextSeasonNumber);
    const nextSeasonEpisodes = nextSeasonDetail?.episodes || [];
    if (nextSeasonEpisodes.length) {
      return { season: nextSeasonNumber, episode: nextSeasonEpisodes[0].episode_number || 1 };
    }
  } catch (error) {
    return null;
  }
  return null;
}

function handlePlayerEvents(event) {
  if (event.origin !== "https://www.vidking.net") return;
  if (typeof event.data !== "string") return;

  let payload = null;
  try {
    payload = JSON.parse(event.data);
  } catch (error) {
    return;
  }

  if (!payload || payload.type !== "PLAYER_EVENT") return;

  const data = payload.data;
  if (!data) return;

  const progressStore = loadProfileStore(STORAGE_KEYS.progress, {});
  const key = data.mediaType === "tv" ? `${data.id}:S${data.season}:E${data.episode}` : `${data.id}`;
  const prev = progressStore[key] || {};
  const duration = data.duration || prev.duration || 0;
  const currentTime = data.currentTime || prev.currentTime || 0;
  const snapshot = currentPlayerItem
    ? {
        key: currentPlayerItem.key,
        title: currentPlayerItem.title,
        type: currentPlayerItem.type,
        tmdbId: currentPlayerItem.tmdbId,
        season: currentPlayerItem.season,
        episode: currentPlayerItem.episode,
        year: currentPlayerItem.year,
        rating: currentPlayerItem.rating,
        duration: currentPlayerItem.duration,
        tags: currentPlayerItem.tags,
        description: currentPlayerItem.description,
        poster: currentPlayerItem.poster,
        backdrop: currentPlayerItem.backdrop,
      }
    : prev.item || null;
  const progressValue = duration
    ? Math.min(100, Math.max(0, (currentTime / duration) * 100))
    : prev.progress || (currentTime ? 2 : 0);

  progressStore[key] = {
    tmdbId: `${data.id}`,
    mediaType: data.mediaType,
    season: data.season,
    episode: data.episode,
    currentTime,
    duration,
    progress: progressValue,
    timestamp: Date.now(),
    item: snapshot,
  };

  saveProfileStore(STORAGE_KEYS.progress, progressStore);
  renderContinueWatching();
}

function openSettings() {
  syncSettingsUI();
  elements.settingsOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

function closeSettings() {
  elements.settingsOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function attachSettingsHandlers() {
  elements.settingAutoplay.addEventListener("change", (event) => {
    setSetting("autoplay", event.target.checked);
  });
  elements.settingNextEpisode.addEventListener("change", (event) => {
    setSetting("nextEpisode", event.target.checked);
  });
  elements.settingEpisodeSelector.addEventListener("change", (event) => {
    setSetting("episodeSelector", event.target.checked);
  });
  elements.settingQuality.addEventListener("change", (event) => {
    setSetting("quality", event.target.value);
  });
  elements.settingProvider.addEventListener("change", (event) => {
    setSetting("provider", event.target.value);
  });
  elements.settingLanguage.addEventListener("change", async (event) => {
    setSetting("language", event.target.value);
    await refreshTmdb();
  });
  elements.settingRegion.addEventListener("change", async (event) => {
    setSetting("region", event.target.value);
    await refreshTmdb();
  });
  elements.settingAdult.addEventListener("change", (event) => {
    setSetting("includeAdult", event.target.checked);
  });
  elements.settingAccent.addEventListener("change", (event) => {
    setSetting("accent", event.target.value);
  });
  elements.settingCompactCards.addEventListener("change", (event) => {
    setSetting("compactCards", event.target.checked);
  });
  elements.settingShowRatings.addEventListener("change", (event) => {
    setSetting("showRatings", event.target.checked);
    rerenderRails();
  });
  elements.settingTheme.addEventListener("change", (event) => {
    setSetting("theme", event.target.value);
  });
  elements.settingTextScale.addEventListener("change", (event) => {
    setSetting("textScale", event.target.value);
  });
  elements.settingShowTags.addEventListener("change", (event) => {
    setSetting("showTags", event.target.checked);
  });
  elements.settingGlow.addEventListener("change", (event) => {
    setSetting("glow", event.target.checked);
  });
  elements.settingDensity.addEventListener("change", (event) => {
    setSetting("uiDensity", event.target.value);
  });
  elements.settingCardRadius.addEventListener("change", (event) => {
    setSetting("cardRadius", event.target.value);
  });
  elements.settingReduceMotion.addEventListener("change", (event) => {
    setSetting("reduceMotion", event.target.checked);
  });
  elements.settingTvMode.addEventListener("change", (event) => {
    setSetting("tvMode", event.target.checked);
    updateTvMode();
  });
  elements.settingClearHistory.addEventListener("click", () => {
    saveProfileStore(STORAGE_KEYS.progress, {});
    renderContinueWatching();
  });
}

function rerenderRails() {
  if (SECTION_DATA) {
    renderRail(elements.railEssentials, SECTION_DATA.essentials);
    renderRail(elements.railBlue, SECTION_DATA.blue);
    renderRail(elements.railNew, SECTION_DATA.newest);
    if (elements.railTopMovies) renderRail(elements.railTopMovies, SECTION_DATA.topMovies || []);
    if (elements.railTopSeries) renderRail(elements.railTopSeries, SECTION_DATA.topSeries || []);
    if (elements.railUpcoming) renderRail(elements.railUpcoming, SECTION_DATA.upcoming || []);
  } else {
    renderRail(elements.railEssentials, DATA.filter((item) => item.tags.includes("essential")));
    renderRail(elements.railBlue, DATA.filter((item) => item.tags.includes("blue")));
    renderRail(elements.railNew, DATA.filter((item) => item.tags.includes("new")));
  }
  renderContinueWatching();
  renderMyList();
}

function applyView(view) {
  currentView = view;
  if (view === "series") {
    currentTypeFilter = "tv";
  } else if (view === "movies") {
    currentTypeFilter = "movie";
  } else {
    currentTypeFilter = null;
  }

  const show = (id, on) => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.toggle("hidden", !on);
    }
  };

  const isHome = view === "home";
  const isSeries = view === "series";
  const isMovies = view === "movies";
  const isCollections = view === "collections";
  const isList = view === "list";

  show("hero", isHome);
  show("continueSection", isHome);
  show("listSection", isList);
  show("essentialsSection", isHome || isCollections);
  show("moviesSection", isHome || isMovies);
  show("seriesSection", isHome || isSeries);
  show("topRatedMoviesSection", isHome || isMovies);
  show("topRatedSeriesSection", isHome || isSeries);
  show("upcomingSection", isHome || isMovies);

  rerenderRails();
}

async function refreshTmdb() {
  tmdbMeta.config = null;
  tmdbMeta.genresMap = null;
  tvCache.clear();
  seasonCache.clear();
  try {
    const tmdbData = await loadTmdbData();
    DATA = tmdbData.all;
    SECTION_DATA = tmdbData.sections;
    const hero = (SECTION_DATA?.essentials?.[0]) || DATA[0];
    setHero(hero);
    rerenderRails();
  } catch (error) {
    DATA = [...DEFAULT_DATA];
    SECTION_DATA = null;
    const hero = DATA.find((item) => item.hero) || DATA[0];
    setHero(hero);
    rerenderRails();
  }
}

function attachBaseHandlers() {
  elements.detailClose.addEventListener("click", closeDetail);
  elements.playerClose.addEventListener("click", closePlayer);
  elements.settingsClose.addEventListener("click", closeSettings);
  elements.settingsNav.addEventListener("click", (event) => {
    event.preventDefault();
    openSettings();
  });
  if (elements.settingsNavMobile) {
    elements.settingsNavMobile.addEventListener("click", (event) => {
      event.preventDefault();
      openSettings();
      if (elements.mobileMenuOverlay) {
        elements.mobileMenuOverlay.classList.add("hidden");
        elements.mobileMenuOverlay.setAttribute("aria-hidden", "true");
      }
    });
  }
  if (elements.settingsNavBottom) {
    elements.settingsNavBottom.addEventListener("click", (event) => {
      event.preventDefault();
      openSettings();
    });
  }

  if (elements.mobileMenuBtn && elements.mobileMenuOverlay) {
    elements.mobileMenuBtn.addEventListener("click", () => {
      elements.mobileMenuOverlay.classList.remove("hidden");
      elements.mobileMenuOverlay.setAttribute("aria-hidden", "false");
    });
  }

  if (elements.mobileMenuClose && elements.mobileMenuOverlay) {
    elements.mobileMenuClose.addEventListener("click", () => {
      elements.mobileMenuOverlay.classList.add("hidden");
      elements.mobileMenuOverlay.setAttribute("aria-hidden", "true");
    });
  }

  if (elements.mobileMenuOverlay) {
    elements.mobileMenuOverlay.addEventListener("click", (event) => {
      if (event.target.classList.contains("mobile-menu-scrim")) {
        elements.mobileMenuOverlay.classList.add("hidden");
        elements.mobileMenuOverlay.setAttribute("aria-hidden", "true");
      }
    });
  }

  elements.detailOverlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay-scrim")) {
      closeDetail();
    }
  });
  elements.playerOverlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay-scrim")) {
      closePlayer();
    }
  });
  elements.settingsOverlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("overlay-scrim")) {
      closeSettings();
    }
  });

  elements.shuffleBtn.addEventListener("click", () => {
    const random = DATA[Math.floor(Math.random() * DATA.length)];
    openDetail(random);
  });

  elements.searchInput.addEventListener("input", (event) => {
    handleSearchInput(event.target.value);
  });

  if (elements.playerProvider) {
    elements.playerProvider.value = settings.provider;
    elements.playerProvider.addEventListener("change", (event) => {
      setSetting("provider", event.target.value);
      if (currentPlayerItem) {
        const src = buildPlayerUrl(currentPlayerItem, {
          season: currentPlayerSeason,
          episode: currentPlayerEpisode,
          progress: currentPlayerProgress,
        });
        elements.playerFrame.src = src;
      }
    });
  }

  if (elements.playerNextEpisode) {
    elements.playerNextEpisode.addEventListener("click", async () => {
      if (!currentPlayerItem || currentPlayerItem.type !== "tv") return;
      let nextSeason = Number(elements.playerNextEpisode.dataset.nextSeason);
      let nextEpisode = Number(elements.playerNextEpisode.dataset.nextEpisode);
      if (!nextSeason || !nextEpisode) {
        const next = await getNextEpisode(currentPlayerItem, currentPlayerSeason, currentPlayerEpisode);
        if (!next) return;
        nextSeason = next.season;
        nextEpisode = next.episode;
      }
      openPlayer(currentPlayerItem, { season: nextSeason, episode: nextEpisode, resume: false });
    });
  }

  document.querySelectorAll(".nav-link[data-view]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("is-active"));
      link.classList.add("is-active");
      applyView(link.dataset.view);
      if (elements.mobileMenuOverlay && !elements.mobileMenuOverlay.classList.contains("hidden")) {
        elements.mobileMenuOverlay.classList.add("hidden");
        elements.mobileMenuOverlay.setAttribute("aria-hidden", "true");
      }
    });
  });

  if (elements.searchToggle && elements.searchOverlay) {
    elements.searchToggle.addEventListener("click", () => {
      elements.searchOverlay.classList.remove("hidden");
      document.body.classList.add("no-scroll");
      elements.searchInput?.focus();
    });
    elements.searchOverlay.addEventListener("click", (event) => {
      if (event.target.classList.contains("overlay-scrim")) {
        elements.searchOverlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      }
    });
  }

  if (elements.detailFullscreen) {
    elements.detailFullscreen.addEventListener("click", () => {
      setDetailFullscreen(!detailFullscreenActive);
    });
  }
  if (elements.detailFullpageBack) {
    elements.detailFullpageBack.addEventListener("click", () => {
      setDetailFullscreen(false);
    });
  }

  document.querySelectorAll(".rail-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const railId = button.getAttribute("data-rail");
      const rail = document.getElementById(railId);
      if (!rail) return;
      const direction = button.classList.contains("left") ? -1 : 1;
      rail.scrollBy({
        left: direction * (rail.clientWidth * 0.8),
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetail();
      closePlayer();
      closeSettings();
      if (elements.searchOverlay) {
        elements.searchOverlay.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      }
      if (elements.mobileMenuOverlay) {
        elements.mobileMenuOverlay.classList.add("hidden");
        elements.mobileMenuOverlay.setAttribute("aria-hidden", "true");
      }
    }
  });

  window.addEventListener("message", handlePlayerEvents);
}

function getProfiles() {
  const stored = loadStore(STORAGE_KEYS.profiles, null);
  if (stored && Array.isArray(stored) && stored.length) return stored;
  return [{ id: "guest", name: "Guest" }];
}

function saveProfiles(profiles) {
  saveStore(STORAGE_KEYS.profiles, profiles);
}

function setActiveProfile(id) {
  activeProfileId = id;
  saveStore(STORAGE_KEYS.activeProfile, id);
  if (profileElements.avatar) {
    profileElements.avatar.textContent = getProfileInitials();
  }
}

function getProfileInitials() {
  const profiles = getProfiles();
  const profile = profiles.find((p) => p.id === (activeProfileId || "guest")) || profiles[0];
  const parts = (profile.name || "G").trim().split(" ");
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

function renderProfiles() {
  if (!profileElements.grid) return;
  const profiles = getProfiles();
  profileElements.grid.innerHTML = "";
  if (profileElements.loading) {
    profileElements.loading.classList.add("hidden");
  }
  profiles.forEach((profile) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    const avatar = document.createElement("div");
    avatar.className = "profile-avatar";
    avatar.textContent = profile.name.slice(0, 2).toUpperCase();
    const name = document.createElement("div");
    name.className = "profile-name";
    name.textContent = profile.name;
    card.appendChild(avatar);
    card.appendChild(name);
    card.addEventListener("click", () => {
      const intro = document.getElementById("introSequence");
      if (intro) {
        intro.classList.remove("hidden");
        intro.classList.add("is-active");
      }
      if (profileElements.loading) {
        profileElements.loading.classList.remove("hidden");
      }
      setTimeout(() => {
        setActiveProfile(profile.id);
        if (profileElements.loading) {
          profileElements.loading.classList.add("hidden");
        }
        if (profileElements.overlay) {
          profileElements.overlay.classList.add("hidden");
        }
        if (profileElements.menu) {
          profileElements.menu.classList.add("hidden");
        }
        if (intro) {
          intro.classList.remove("is-active");
          intro.classList.add("hidden");
        }
      }, 3200);
    });
    profileElements.grid.appendChild(card);
  });
}

function attachProfileHandlers() {
  if (!profileElements.overlay) return;
  profileElements.addBtn.addEventListener("click", () => {
    const name = prompt("Profile name");
    if (!name) return;
    const profiles = getProfiles();
    const id = `p_${Date.now()}`;
    profiles.push({ id, name });
    saveProfiles(profiles);
    renderProfiles();
  });

  if (profileElements.avatar && profileElements.menu) {
    profileElements.avatar.addEventListener("click", () => {
      profileElements.menu.classList.toggle("hidden");
    });
  }

  if (profileElements.switchBtn) {
    profileElements.switchBtn.addEventListener("click", () => {
      profileElements.menu?.classList.add("hidden");
      profileElements.overlay.classList.remove("hidden");
    });
  }

  if (profileElements.manageBtn) {
    profileElements.manageBtn.addEventListener("click", () => {
      profileElements.menu?.classList.add("hidden");
      renderManageProfiles();
      profileElements.manageOverlay.classList.remove("hidden");
    });
  }

  if (profileElements.manageClose) {
    profileElements.manageClose.addEventListener("click", () => {
      profileElements.manageOverlay.classList.add("hidden");
    });
  }
}

function renderManageProfiles() {
  if (!profileElements.manageGrid) return;
  const profiles = getProfiles();
  profileElements.manageGrid.innerHTML = "";
  profiles.forEach((profile) => {
    const card = document.createElement("div");
    card.className = "profile-card manage-card";
    const avatar = document.createElement("div");
    avatar.className = "profile-avatar";
    avatar.textContent = profile.name.slice(0, 2).toUpperCase();
    const name = document.createElement("div");
    name.className = "profile-name";
    name.textContent = profile.name;
    const actions = document.createElement("div");
    actions.className = "manage-actions";
    const rename = document.createElement("button");
    rename.className = "tiny-btn";
    rename.textContent = "Rename";
    rename.addEventListener("click", () => {
      const next = prompt("New name", profile.name);
      if (!next) return;
      const updated = profiles.map((p) => (p.id === profile.id ? { ...p, name: next } : p));
      saveProfiles(updated);
      renderProfiles();
      renderManageProfiles();
      if (activeProfileId === profile.id) {
        setActiveProfile(profile.id);
      }
    });
    actions.appendChild(rename);
    if (profile.id !== "guest") {
      const remove = document.createElement("button");
      remove.className = "tiny-btn";
      remove.textContent = "Delete";
      remove.addEventListener("click", () => {
        const filtered = profiles.filter((p) => p.id !== profile.id);
        saveProfiles(filtered);
        if (activeProfileId === profile.id) {
          setActiveProfile("guest");
        }
        renderProfiles();
        renderManageProfiles();
      });
      actions.appendChild(remove);
    }
    card.appendChild(avatar);
    card.appendChild(name);
    card.appendChild(actions);
    profileElements.manageGrid.appendChild(card);
  });
}

async function boot() {
  applySettings();
  setPlatformClass();
  attachSettingsHandlers();
  attachBaseHandlers();
  attachProfileHandlers();

  initTvMode();

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./sw.js")
        .then((reg) => {
          reg.update();
          if (reg.waiting) {
            reg.waiting.postMessage({ type: "SKIP_WAITING" });
          }
          reg.addEventListener("updatefound", () => {
            const worker = reg.installing;
            if (!worker) return;
            worker.addEventListener("statechange", () => {
              if (worker.state === "installed" && navigator.serviceWorker.controller) {
                worker.postMessage({ type: "SKIP_WAITING" });
              }
            });
          });
        })
        .catch(() => {});
    });
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });
  }

  try {
    const tmdbData = await loadTmdbData();
    DATA = tmdbData.all;
    SECTION_DATA = tmdbData.sections;
  } catch (error) {
    DATA = [...DEFAULT_DATA];
    SECTION_DATA = null;
  }

  const hero = (SECTION_DATA?.essentials?.[0]) || DATA.find((item) => item.hero) || DATA[0];
  setHero(hero);
  applyView("home");

  renderProfiles();
  if (profileElements.avatar) {
    profileElements.avatar.textContent = getProfileInitials();
  }
  if (profileElements.menu) {
    profileElements.menu.classList.add("hidden");
  }
  if (profileElements.overlay) {
    profileElements.overlay.classList.remove("hidden");
  }
}

boot();

function initTvMode() {
  updateTvMode();

  const focusableSelector = [
    "button",
    "a.nav-link",
    ".card",
    ".profile-card",
    ".menu-item",
    ".select",
    "input[type='search']",
  ].join(",");

  let currentIndex = 0;

  function getFocusable() {
    return Array.from(document.querySelectorAll(focusableSelector))
      .filter((el) => !el.classList.contains("hidden") && el.offsetParent !== null);
  }

  function setFocus(index) {
    const focusables = getFocusable();
    if (!focusables.length) return;
    currentIndex = Math.max(0, Math.min(index, focusables.length - 1));
    focusables.forEach((el) => el.classList.remove("focus-ring"));
    const el = focusables[currentIndex];
    el.classList.add("focus-ring");
    el.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  if (settings.tvMode) {
    setFocus(0);
  }

  window.addEventListener("keydown", (event) => {
    if (!settings.tvMode) return;
    const focusables = getFocusable();
    if (!focusables.length) return;

    const cols = window.innerWidth > 1200 ? 6 : window.innerWidth > 900 ? 4 : 2;
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        setFocus(currentIndex + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        setFocus(currentIndex - 1);
        break;
      case "ArrowDown":
        event.preventDefault();
        setFocus(currentIndex + cols);
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocus(currentIndex - cols);
        break;
      case "Enter":
        event.preventDefault();
        focusables[currentIndex].click();
        break;
      default:
        break;
    }
  });
}

function updateTvMode() {
  document.body.classList.toggle("tv-mode", !!settings.tvMode);
  if (!settings.tvMode) {
    document.querySelectorAll(".focus-ring").forEach((el) => el.classList.remove("focus-ring"));
  }
}
