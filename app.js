// ===== Config =====
const CONFIG = {
  MAX_SPOKES: 8,
  CONFIRMATION_KEEPS: 2,   // Reduced from 3 to 2
  EVICTION_SKIPS: 3,       // 3 skips on a spoke evicts it
  TOTAL_TOPICS: 50
};

// ===== Topic pool (50) =====
const TOPICS = [
  { title: "Healthcare Access and Affordability", icon: "fa-solid fa-stethoscope", desc: "Lower costs and broader coverage" },
  { title: "Climate Change and Environmental Protection", icon: "fa-solid fa-leaf", desc: "Cut emissions and protect habitats" },
  { title: "Economic Inequality and Job Security", icon: "fa-solid fa-briefcase", desc: "Stability and fair opportunity" },
  { title: "Education Quality and Funding", icon: "fa-solid fa-school", desc: "Better schools and resources" },
  { title: "Gun Laws and Public Safety", icon: "fa-solid fa-shield-halved", desc: "Safety measures and rights" },
  { title: "Reproductive Rights and Abortion Access", icon: "fa-solid fa-heart-pulse", desc: "Access and privacy in care" },
  { title: "Policing and Criminal Justice Reform", icon: "fa-solid fa-scale-balanced", desc: "Fairness and accountability" },
  { title: "Immigration Policy", icon: "fa-solid fa-passport", desc: "Border, visas, and paths" },
  { title: "Civil Rights and Social Justice", icon: "fa-solid fa-handshake", desc: "Equal protection under law" },
  { title: "Taxation and Government Spending", icon: "fa-solid fa-coins", desc: "Priorities and tradeoffs" },
  { title: "Affordable Housing and Homelessness", icon: "fa-solid fa-house", desc: "Supply, zoning, and services" },
  { title: "Voting Rights and Electoral Integrity", icon: "fa-solid fa-square-check", desc: "Ballot access and trust" },
  { title: "Foreign Policy and National Security", icon: "fa-solid fa-globe", desc: "Alliances and defense" },
  { title: "Infrastructure and Transportation", icon: "fa-solid fa-road", desc: "Build and maintain systems" },
  { title: "Technology and Data Privacy", icon: "fa-solid fa-user-shield", desc: "Rights in a digital world" },
  { title: "Corporate Regulation and Consumer Protection", icon: "fa-solid fa-scale-unbalanced", desc: "Rules for fair markets" },
  { title: "Wages and Labor Rights", icon: "fa-solid fa-people-carry-box", desc: "Pay, benefits and safety" },
  { title: "Support for Small Businesses and Entrepreneurship", icon: "fa-solid fa-shop", desc: "Capital and less red tape" },
  { title: "Mental Health and Addiction Services", icon: "fa-solid fa-brain", desc: "Care access and stigma" },
  { title: "Campaign Finance Reform", icon: "fa-solid fa-landmark", desc: "Money in politics rules" },
  { title: "Policing in Schools", icon: "fa-solid fa-graduation-cap", desc: "Safety, discipline and equity" },
  { title: "Government Role in Childcare and Parental Leave", icon: "fa-solid fa-baby-carriage", desc: "Care access and paid time" },
  { title: "Internet Access and Digital Equity", icon: "fa-solid fa-wifi", desc: "Affordable broadband access" },
  { title: "Book Bans and Curriculum Restrictions in Schools", icon: "fa-solid fa-book", desc: "Content rules and oversight" },
  { title: "Religious Freedom and the Role of Religion in Government", icon: "fa-solid fa-church", desc: "Balance rights and neutrality" },
  { title: "DEI Programs and Workplace Policy", icon: "fa-solid fa-people-group", desc: "Hiring, inclusion and outcomes" },
  { title: "Israel-Palestine Conflict / War in Gaza", icon: "fa-solid fa-dove", desc: "War, civilians and diplomacy" },
  { title: "U.S. Military Support to Ukraine", icon: "fa-solid fa-helmet-safety", desc: "Aid, weapons and oversight" },
  { title: "U.S.-China Relations and Taiwan", icon: "fa-solid fa-dragon", desc: "Trade, tech and deterrence" },
  { title: "Defense Treaties and NATO Commitments", icon: "fa-solid fa-shield", desc: "Allied burden sharing" },
  { title: "Foreign Aid and International Development", icon: "fa-solid fa-hand-holding-heart", desc: "Aid goals and accountability" },
  { title: "Global Refugee and Asylum Policies", icon: "fa-solid fa-person-walking-luggage", desc: "Protection and resettlement" },
  { title: "American Tariff Policy", icon: "fa-solid fa-arrow-trend-up", desc: "Tradeoffs for growth and jobs" },
  { title: "Supply Chain Resilience and Domestic Manufacturing", icon: "fa-solid fa-industry", desc: "Reshoring and security" },
  { title: "Universal Basic Income (UBI)", icon: "fa-solid fa-hand-holding-dollar", desc: "Cash floors and work" },
  { title: "Artificial Intelligence and Job Displacement", icon: "fa-solid fa-robot", desc: "Automation and training" },
  { title: "Online Censorship and Platform Accountability", icon: "fa-solid fa-scale-balanced", desc: "Speech rules and harms" },
  { title: "TikTok and Foreign-Owned Social Media Regulation", icon: "fa-brands fa-tiktok", desc: "Data, youth and security" },
  { title: "Misinformation and Algorithms in Democracy", icon: "fa-solid fa-diagram-project", desc: "Ranking, reach and trust" },
  { title: "Pandemic Preparedness and Vaccine Mandates", icon: "fa-solid fa-syringe", desc: "Readiness and public health" },
  { title: "Water Access and Drought Management", icon: "fa-solid fa-faucet-drip", desc: "Scarcity and rights" },
  { title: "Food Security and Agricultural Policy", icon: "fa-solid fa-wheat-awn", desc: "Prices, farms and aid" },
  { title: "Natural Disasters and Climate Resilience Funding", icon: "fa-solid fa-house-flood-water", desc: "Rebuild and insure risk" },
  { title: "January 6th and the 2020 Election", icon: "fa-solid fa-flag-usa", desc: "Accountability and norms" },
  { title: "Term Limits and Congressional Reform", icon: "fa-solid fa-timeline", desc: "Turnover and rules" },
  { title: "National Debt and Deficit Spending", icon: "fa-solid fa-scale-unbalanced-flip", desc: "Debt paths and priorities" },
  { title: "Healthcare for Veterans and Military Support", icon: "fa-solid fa-ribbon", desc: "Care access and benefits" },
  { title: "Space Exploration and Federal Investment", icon: "fa-solid fa-moon", desc: "Science and spinoffs" },
  { title: "Cryptocurrency and Digital Currency Regulation", icon: "fa-solid fa-coins", desc: "Innovation and consumer protection" },
  { title: "Social Security and Medicare Reform", icon: "fa-solid fa-hand-holding-heart", desc: "Long-term sustainability and benefits" }
];

// ===== One-word labels =====
const LABEL = {
  "Healthcare Access and Affordability": "Healthcare",
  "Climate Change and Environmental Protection": "Climate",
  "Economic Inequality and Job Security": "Economy",
  "Education Quality and Funding": "Education",
  "Gun Laws and Public Safety": "Guns",
  "Reproductive Rights and Abortion Access": "Reproductive",
  "Policing and Criminal Justice Reform": "Justice",
  "Immigration Policy": "Immigration",
  "Civil Rights and Social Justice": "Rights",
  "Taxation and Government Spending": "Taxes",
  "Affordable Housing and Homelessness": "Housing",
  "Voting Rights and Electoral Integrity": "Voting",
  "Foreign Policy and National Security": "Security",
  "Infrastructure and Transportation": "Transit",
  "Technology and Data Privacy": "Privacy",
  "Corporate Regulation and Consumer Protection": "Consumers",
  "Wages and Labor Rights": "Labor",
  "Support for Small Businesses and Entrepreneurship": "Business",
  "Mental Health and Addiction Services": "Mental",
  "Campaign Finance Reform": "Campaigns",
  "Policing in Schools": "SchoolPolicing",
  "Government Role in Childcare and Parental Leave": "Childcare",
  "Internet Access and Digital Equity": "Internet",
  "Book Bans and Curriculum Restrictions in Schools": "Curriculum",
  "Religious Freedom and the Role of Religion in Government": "Religion",
  "DEI Programs and Workplace Policy": "DEI",
  "Israel-Palestine Conflict / War in Gaza": "Gaza",
  "U.S. Military Support to Ukraine": "Ukraine",
  "U.S.-China Relations and Taiwan": "China",
  "Defense Treaties and NATO Commitments": "NATO",
  "Foreign Aid and International Development": "Aid",
  "Global Refugee and Asylum Policies": "Refugees",
  "American Tariff Policy": "Tariffs",
  "Supply Chain Resilience and Domestic Manufacturing": "Supply",
  "Universal Basic Income (UBI)": "UBI",
  "Artificial Intelligence and Job Displacement": "AI",
  "Online Censorship and Platform Accountability": "Platforms",
  "TikTok and Foreign-Owned Social Media Regulation": "TikTok",
  "Misinformation and Algorithms in Democracy": "Algorithms",
  "Pandemic Preparedness and Vaccine Mandates": "Pandemic",
  "Water Access and Drought Management": "Water",
  "Food Security and Agricultural Policy": "Food",
  "Natural Disasters and Climate Resilience Funding": "Disasters",
  "January 6th and the 2020 Election": "Jan6",
  "Term Limits and Congressional Reform": "TermLimits",
  "National Debt and Deficit Spending": "Debt",
  "Healthcare for Veterans and Military Support": "Veterans",
  "Space Exploration and Federal Investment": "Space",
  "Cryptocurrency and Digital Currency Regulation": "Crypto",
  "Social Security and Medicare Reform": "SocialSecurity"
};
const oneWordLabel = t => LABEL[t] || "Topic";

// ===== State =====
const state = {
  pool: [],
  pairQueue: [],
  currentPairIndex: 0,
  radar: null,
  finalRadar: null,
  spokes: Array(CONFIG.MAX_SPOKES).fill(null),
  labelsLive: Array(CONFIG.MAX_SPOKES).fill(""),
  challengerMode: false,
  totalPairsProcessed: 0
};

// ===== DOM =====
const els = {
  progressText: document.getElementById('progressText'),
  barInner: document.getElementById('barInner'),
  cardArea: document.getElementById('cardArea'),
  radarCanvas: document.getElementById('radarChart'),
  summary: document.getElementById('summary'),
  finalRadar: document.getElementById('finalRadar'),
  summaryList: document.getElementById('summaryList'),
  restartBtn: document.getElementById('restartBtn')
};

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  bootstrapPool();
  createInitialPairs();
  updateProgress();
  renderCurrentPair();
  initRadar();
  bindControls();
});

// ===== Pool & Pairing =====
function bootstrapPool() {
  state.pool = shuffle(TOPICS.map((t, i) => ({
    ...t,
    id: i,
    shown: 0,
    kept: 0,
    onSpokeSkips: 0,
    onSpokeIndex: -1,
    firstKeptAt: Infinity
  })));
}

function createInitialPairs() {
  const topics = [...state.pool];
  const pairs = [];
  
  // Create pairs from shuffled topics - exactly 25 pairs for 50 topics
  for (let i = 0; i < topics.length - 1; i += 2) {
    pairs.push([topics[i], topics[i + 1]]);
  }
  
  state.pairQueue = pairs;
  state.challengerMode = false;
}

function createChallengerPairs() {
  const untested = state.pool.filter(t => t.shown === 0);
  
  const unconfirmed = state.pool.filter(t => 
    t.kept > 0 && t.kept < CONFIG.CONFIRMATION_KEEPS && t.onSpokeIndex === -1
  );
  
  const challengers = state.pool.filter(t => 
    t.kept >= CONFIG.CONFIRMATION_KEEPS && t.onSpokeIndex === -1
  );

  const pairs = [];

  // First priority: pair untested topics
  for (let i = 0; i < untested.length - 1; i += 2) {
    pairs.push([untested[i], untested[i + 1]]);
  }

  // Second priority: challengers vs vulnerable spoke holders
  challengers.forEach(challenger => {
    const vulnerable = findMostVulnerableSpokeHolder();
    if (vulnerable) {
      pairs.push([challenger, vulnerable]);
    }
  });

  // Third priority: pair unconfirmed topics
  for (let i = 0; i < unconfirmed.length - 1; i += 2) {
    pairs.push([unconfirmed[i], unconfirmed[i + 1]]);
  }

  return shuffle(pairs);
}

// ===== UI helpers =====
function updateProgress() {
  if (!state.challengerMode) {
    // Initial phase: show pair progress
    const totalPairs = Math.floor(CONFIG.TOTAL_TOPICS / 2);
    const current = Math.min(state.currentPairIndex, totalPairs);
    els.progressText.textContent = `Pair ${current + 1} of ${totalPairs}`;
    const pct = totalPairs ? ((current + 1) / totalPairs) * 100 : 0;
    els.barInner.style.width = `${pct}%`;
  } else {
    // Challenger phase: show topics tested
    const totalTested = state.pool.filter(t => t.shown > 0).length;
    els.progressText.textContent = `${totalTested} of ${CONFIG.TOTAL_TOPICS} topics evaluated`;
    const pct = (totalTested / CONFIG.TOTAL_TOPICS) * 100;
    els.barInner.style.width = `${pct}%`;
  }
}

function renderCurrentPair() {
  if (finishConditionMet()) { 
    showSummary(); 
    return; 
  }

  // Check if we need to switch to challenger mode or create new pairs
  if (state.currentPairIndex >= state.pairQueue.length) {
    if (!state.challengerMode) {
      switchToChallengerMode();
      return;
    } else {
      const newPairs = createChallengerPairs();
      if (newPairs.length === 0) {
        showSummary();
        return;
      }
      state.pairQueue = newPairs;
      state.currentPairIndex = 0;
      updateProgress();
    }
  }

  const currentPair = state.pairQueue[state.currentPairIndex];
  if (!currentPair) {
    showSummary();
    return;
  }

  const [topicA, topicB] = currentPair;
  
  const isChallenger = (topic) => {
    return state.challengerMode && 
           topic.kept >= CONFIG.CONFIRMATION_KEEPS && 
           topic.onSpokeIndex === -1;
  };

  const instructionText = state.challengerMode ? 
    "Choose which topic should remain in your top priorities" : 
    "Choose the topic you care more about";

  els.cardArea.innerHTML = `
    <div class="instruction">${instructionText}</div>
    <div class="two-card-container">
      <div class="card" data-topic-id="${topicA.id}">
        ${isChallenger(topicA) ? '<div class="challenger-indicator">!</div>' : ''}
        <div class="title">
          <i class="${topicA.icon}" aria-hidden="true"></i>
          <span>${topicA.title}</span>
        </div>
        <div class="subtitle">${topicA.desc}</div>
      </div>
      <div class="card" data-topic-id="${topicB.id}">
        ${isChallenger(topicB) ? '<div class="challenger-indicator">!</div>' : ''}
        <div class="title">
          <i class="${topicB.icon}" aria-hidden="true"></i>
          <span>${topicB.title}</span>
        </div>
        <div class="subtitle">${topicB.desc}</div>
      </div>
    </div>
  `;

  // Add click handlers
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const topicId = parseInt(card.dataset.topicId);
      const selectedTopic = getById(topicId);
      const otherTopic = topicId === topicA.id ? topicB : topicA;
      
      animateSelection(card, () => {
        handleChoice(selectedTopic, otherTopic);
      });
    });
  });
}

function switchToChallengerMode() {
  state.challengerMode = true;
  const newPairs = createChallengerPairs();
  
  if (newPairs.length === 0) {
    showSummary();
    return;
  }
  
  state.pairQueue = newPairs;
  state.currentPairIndex = 0;
  updateProgress();
  renderCurrentPair();
}

function animateSelection(selectedCard, callback) {
  selectedCard.classList.add('selected');
  setTimeout(() => {
    callback();
  }, 300);
}

function bindControls() {
  els.restartBtn.addEventListener('click', restart);
  
  // Keyboard support
  window.addEventListener('keydown', e => {
    if (!els.summary.classList.contains('hidden')) return;
    const cards = document.querySelectorAll('.card');
    if (e.key === 'ArrowLeft' && cards[0]) {
      cards[0].click();
    } else if (e.key === 'ArrowRight' && cards[1]) {
      cards[1].click();
    }
  });
}

// ===== Choice handling =====
function handleChoice(selectedTopic, rejectedTopic) {
  selectedTopic.shown += 1;
  selectedTopic.kept += 1;
  if (selectedTopic.firstKeptAt === Infinity) {
    selectedTopic.firstKeptAt = performance.now();
  }

  rejectedTopic.shown += 1;

  // Handle rejected topic if it's on a spoke
  if (rejectedTopic.onSpokeIndex !== -1) {
    rejectedTopic.onSpokeSkips += 1;
    if (rejectedTopic.onSpokeSkips >= CONFIG.EVICTION_SKIPS) {
      evictFromSpoke(rejectedTopic.onSpokeIndex);
    }
  }

  // Handle selected topic placement
  if (selectedTopic.kept >= CONFIG.CONFIRMATION_KEEPS && selectedTopic.onSpokeIndex === -1) {
    const free = firstFreeSpoke();
    if (free !== -1) {
      placeOnSpoke(selectedTopic, free);
    } else {
      // In challenger mode, if the selected topic beat an incumbent
      if (state.challengerMode && rejectedTopic.onSpokeIndex !== -1) {
        const spokeIndex = rejectedTopic.onSpokeIndex;
        evictFromSpoke(spokeIndex);
        placeOnSpoke(selectedTopic, spokeIndex);
      }
    }
  }

  state.currentPairIndex += 1;
  state.totalPairsProcessed += 1;
  updateProgress();
  renderCurrentPair();
}

// ===== Live radar =====
function initRadar() {
  els.radarCanvas.width = 400;
  els.radarCanvas.height = 400;
  els.radarCanvas.style.width = '400px';
  els.radarCanvas.style.height = '400px';

  const ctx = els.radarCanvas.getContext('2d');
  state.radar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [...state.labelsLive],
      datasets: [{
        label: 'Selected Topics',
        data: Array(CONFIG.MAX_SPOKES).fill(0),
        fill: true,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: 'rgba(59,130,246,0.10)',
        borderColor: 'rgba(59,130,246,0.85)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      animation: { duration: 0 },
      layout: { padding: 42 },
      elements: { point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },
      scales: {
        r: {
          min: 0, max: 1,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(255,255,255,0.10)' },
          angleLines: { color: 'rgba(255,255,255,0.18)' },
          pointLabels: {
            display: true, color: '#e5e7eb', padding: 12,
            font: { size: 16, weight: '700', family: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }
          }
        }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });
}

function placeOnSpoke(topic, spokeIndex) {
  state.spokes[spokeIndex] = topic.id;
  topic.onSpokeIndex = spokeIndex;
  topic.onSpokeSkips = 0;

  state.labelsLive[spokeIndex] = oneWordLabel(topic.title);
  state.radar.data.labels = [...state.labelsLive];
  state.radar.data.datasets[0].data[spokeIndex] = 1;
  state.radar.update('none');
}

function evictFromSpoke(spokeIndex) {
  const id = state.spokes[spokeIndex];
  if (id == null) return;
  const topic = getById(id);
  topic.onSpokeIndex = -1;

  state.spokes[spokeIndex] = null;
  state.labelsLive[spokeIndex] = "";
  state.radar.data.labels = [...state.labelsLive];
  state.radar.data.datasets[0].data[spokeIndex] = 0;
  state.radar.update('none');
}

function findMostVulnerableSpokeHolder() {
  let most = null;
  let bestScore = -1;
  
  state.spokes.forEach(id => {
    if (id === null) return;
    const topic = getById(id);
    // Higher skips and lower keeps = more vulnerable
    const score = topic.onSpokeSkips * 2 - topic.kept;
    if (score > bestScore) {
      bestScore = score;
      most = topic;
    }
  });
  
  return most;
}

// ===== Summary =====
function showSummary() {
  // Winners are whatever is on the spokes at the end
  const winners = state.spokes
    .map(id => getById(id))
    .filter(Boolean);

  // If fewer than 8 are filled, pad with best candidates
  while (winners.length < CONFIG.MAX_SPOKES) {
    const c = bestCandidate(winners.map(w => w.id));
    if (!c) break;
    winners.push(c);
  }

  els.summaryList.innerHTML = winners
    .map(t => `<li><i class="${t.icon}" aria-hidden="true"></i> ${t.title}</li>`)
    .join('');

  // Fixed size to avoid squish
  els.finalRadar.width = 500;
  els.finalRadar.height = 500;
  els.finalRadar.style.width = '500px';
  els.finalRadar.style.height = '500px';

  const labels = winners.map(t => oneWordLabel(t.title));
  const values = winners.map(() => 1);

  const ctx = els.finalRadar.getContext('2d');
  if (state.finalRadar) state.finalRadar.destroy();
  state.finalRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: "Your 8 Topics",
        data: values,
        fill: true,
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: 'rgba(59,130,246,0.20)',
        borderColor: 'rgba(59,130,246,1)',
        borderWidth: 3
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      animation: { duration: 600 },
      layout: { padding: 42 },
      elements: { point: { radius: 0, hitRadius: 0, hoverRadius: 0 } },
      scales: {
        r: {
          min: 0, max: 1,
          ticks: { display: false },
          grid: { circular: true, color: 'rgba(255,255,255,0.10)' },
          angleLines: { color: 'rgba(255,255,255,0.18)' },
          pointLabels: {
            display: true, color: '#e5e7eb', padding: 12,
            font: { size: 16, weight: '700', family: 'system-ui, -apple-system, Segoe UI, Roboto, Arial' }
          }
        }
      },
      plugins: { legend: { display: false }, tooltip: { enabled: false } }
    }
  });

  els.summary.classList.remove('hidden');
}

// ===== Finish condition =====
function finishConditionMet() {
  const allShownOnce = state.pool.every(t => t.shown > 0);
  const spokesFull = state.spokes.filter(Boolean).length === CONFIG.MAX_SPOKES;
  return allShownOnce && spokesFull;
}

// ===== Spoke helpers =====
function firstFreeSpoke() {
  for (let i = 0; i < CONFIG.MAX_SPOKES; i++) {
    if (state.spokes[i] === null) return i;
  }
  return -1;
}

function bestCandidate(excludeIds = []) {
  const ex = new Set(excludeIds);
  const cands = state.pool.filter(t =>
    t.kept >= CONFIG.CONFIRMATION_KEEPS && t.onSpokeIndex === -1 && !ex.has(t.id)
  );
  if (!cands.length) return null;
  cands.sort((a, b) => {
    if (b.kept !== a.kept) return b.kept - a.kept;
    if (a.firstKeptAt !== b.firstKeptAt) return a.firstKeptAt - b.firstKeptAt;
    return a.shown - b.shown;
  });
  return cands[0];
}

// ===== Restart =====
function restart() {
  state.pairQueue = [];
  state.currentPairIndex = 0;
  state.spokes = Array(CONFIG.MAX_SPOKES).fill(null);
  state.labelsLive = Array(CONFIG.MAX_SPOKES).fill("");
  state.challengerMode = false;
  state.totalPairsProcessed = 0;

  bootstrapPool();
  createInitialPairs();

  if (state.radar) {
    state.radar.data.labels = [...state.labelsLive];
    state.radar.data.datasets[0].data = Array(CONFIG.MAX_SPOKES).fill(0);
    state.radar.update('none');
  }

  els.summary.classList.add('hidden');
  updateProgress();
  renderCurrentPair();
}

// ===== Utils =====
function getById(id) { return state.pool.find(t => t.id === id) || null; }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}