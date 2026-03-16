const DATA = [
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

const STORAGE_KEYS = {
  progress: "beam_progress",
  list: "beam_list",
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
  continueRail: document.getElementById("continueRail"),
  listRail: document.getElementById("listRail"),
  railEssentials: document.getElementById("railEssentials"),
  railBlue: document.getElementById("railBlue"),
  railNew: document.getElementById("railNew"),
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
  detailPlay: document.getElementById("detailPlay"),
  detailContinue: document.getElementById("detailContinue"),
  detailList: document.getElementById("detailList"),
  playerOverlay: document.getElementById("playerOverlay"),
  playerFrame: document.getElementById("playerFrame"),
  playerClose: document.getElementById("playerClose"),
  playerTitle: document.getElementById("playerTitle"),
  playerSub: document.getElementById("playerSub"),
  shuffleBtn: document.getElementById("shuffleBtn"),
};

let activeItem = null;

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

function renderTags(container, tags) {
  container.innerHTML = "";
  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = tag;
    container.appendChild(span);
  });
}

function renderCard(item, progressData) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.key = item.key;

  const img = document.createElement("img");
  img.src = item.poster;
  img.alt = item.title;

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("div");
  title.className = "card-title";
  title.textContent = item.title;

  const meta = document.createElement("div");
  meta.className = "card-meta";
  meta.textContent = `${item.year} - ${item.type === "tv" ? "Series" : "Movie"}`;

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

  card.addEventListener("click", () => openDetail(item));
  return card;
}

function renderRail(container, items) {
  container.innerHTML = "";
  items.forEach((item) => {
    container.appendChild(renderCard(item));
  });
}

function renderContinueWatching() {
  const progressStore = loadStore(STORAGE_KEYS.progress, {});
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
    const item = DATA.find((d) => d.tmdbId === entry.tmdbId);
    if (!item) return;
    const card = renderCard(item, entry);
    elements.continueRail.appendChild(card);
  });
}

function renderMyList() {
  const list = loadStore(STORAGE_KEYS.list, []);
  elements.listRail.innerHTML = "";
  if (!list.length) {
    elements.listRail.innerHTML = "<div class=\"muted\">No saved titles yet.</div>";
    return;
  }

  list.forEach((key) => {
    const item = DATA.find((d) => d.key === key);
    if (item) {
      elements.listRail.appendChild(renderCard(item));
    }
  });
}

function setHero(item) {
  elements.heroTitle.textContent = item.title;
  elements.heroDesc.textContent = item.description;
  elements.heroYear.textContent = item.year;
  elements.heroType.textContent = item.type === "tv" ? "Series" : "Movie";
  elements.heroRating.textContent = item.rating;
  renderTags(elements.heroTags, item.tags);
  if (elements.heroBackdrop) {
    elements.heroBackdrop.style.backgroundImage = `url(${item.backdrop || item.poster})`;
  }
  if (elements.heroPoster) {
    elements.heroPoster.src = item.poster;
    elements.heroPoster.alt = item.title;
  }

  elements.heroPlay.onclick = () => openPlayer(item);
  elements.heroInfo.onclick = () => openDetail(item);
  elements.heroList.onclick = () => toggleList(item);
}

function openDetail(item) {
  activeItem = item;
  elements.detailPoster.src = item.backdrop || item.poster;
  elements.detailTitle.textContent = item.title;
  elements.detailMeta.textContent = `${item.year} - ${item.type === "tv" ? "Series" : "Movie"} - ${item.duration} - ${item.rating}`;
  elements.detailDesc.textContent = item.description;
  renderTags(elements.detailTags, item.tags);
  elements.detailOverlay.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  elements.detailPlay.onclick = () => openPlayer(item);
  elements.detailContinue.onclick = () => openPlayer(item, true);
  elements.detailList.onclick = () => toggleList(item);
}

function closeDetail() {
  elements.detailOverlay.classList.add("hidden");
  document.body.classList.remove("no-scroll");
  activeItem = null;
}

function openPlayer(item, resume = false) {
  const progressStore = loadStore(STORAGE_KEYS.progress, {});
  let season = item.season;
  let episode = item.episode;
  let progress = 0;

  const entries = Object.values(progressStore).filter((entry) => entry.tmdbId === item.tmdbId);
  const latest = entries.sort((a, b) => b.timestamp - a.timestamp)[0];

  if (item.type === "tv" && latest) {
    season = latest.season || item.season;
    episode = latest.episode || item.episode;
  }

  const key = item.type === "tv" ? `${item.tmdbId}:S${season}:E${episode}` : item.tmdbId;
  const entry = progressStore[key] || latest;
  if (resume && entry && entry.currentTime > 30 && entry.currentTime < entry.duration - 60) {
    progress = Math.floor(entry.currentTime);
  }

  let src = "";
  if (item.type === "tv") {
    src = `https://www.vidking.net/embed/tv/${item.tmdbId}/${season}/${episode}?color=0a84ff&autoPlay=true&nextEpisode=true&episodeSelector=true`;
  } else {
    src = `https://www.vidking.net/embed/movie/${item.tmdbId}?color=0a84ff&autoPlay=true`;
  }

  if (progress) {
    src += `&progress=${progress}`;
  }

  elements.playerFrame.src = src;
  elements.playerTitle.textContent = item.title;
  elements.playerSub.textContent = item.type === "tv" ? `Season ${season} - Episode ${episode}` : item.duration;
  elements.playerOverlay.classList.remove("hidden");
  elements.detailOverlay.classList.add("hidden");
  document.body.classList.add("no-scroll");
}

function closePlayer() {
  elements.playerOverlay.classList.add("hidden");
  elements.playerFrame.src = "";
  document.body.classList.remove("no-scroll");
}

function toggleList(item) {
  const list = loadStore(STORAGE_KEYS.list, []);
  const index = list.indexOf(item.key);
  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(item.key);
  }
  saveStore(STORAGE_KEYS.list, list);
  renderMyList();
}

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    elements.searchSection.classList.add("hidden");
    return;
  }

  const results = DATA.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  elements.searchSection.classList.remove("hidden");
  elements.searchGrid.innerHTML = "";
  results.forEach((item) => elements.searchGrid.appendChild(renderCard(item)));
  elements.searchCount.textContent = `${results.length} result${results.length === 1 ? "" : "s"}`;
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

  const progressStore = loadStore(STORAGE_KEYS.progress, {});
  const key = data.mediaType === "tv" ? `${data.id}:S${data.season}:E${data.episode}` : `${data.id}`;

  progressStore[key] = {
    tmdbId: `${data.id}`,
    mediaType: data.mediaType,
    season: data.season,
    episode: data.episode,
    currentTime: data.currentTime,
    duration: data.duration,
    progress: data.duration
      ? Math.min(100, Math.max(0, (data.currentTime / data.duration) * 100))
      : 0,
    timestamp: Date.now(),
  };

  saveStore(STORAGE_KEYS.progress, progressStore);
  renderContinueWatching();
}

function init() {
  const hero = DATA.find((item) => item.hero) || DATA[0];
  setHero(hero);

  renderRail(elements.railEssentials, DATA.filter((item) => item.tags.includes("essential")));
  renderRail(elements.railBlue, DATA.filter((item) => item.tags.includes("blue")));
  renderRail(elements.railNew, DATA.filter((item) => item.tags.includes("new")));

  renderContinueWatching();
  renderMyList();

  elements.detailClose.addEventListener("click", closeDetail);
  elements.playerClose.addEventListener("click", closePlayer);
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
  elements.shuffleBtn.addEventListener("click", () => {
    const random = DATA[Math.floor(Math.random() * DATA.length)];
    openDetail(random);
  });

  elements.searchInput.addEventListener("input", (event) => {
    renderSearchResults(event.target.value);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDetail();
      closePlayer();
    }
  });

  window.addEventListener("message", handlePlayerEvents);
}

init();
