/*
 * Topic Duel · AB Test (A/B picker) — v2
 * Fixes: no overlap, horizontal spoke labels, radar grid, completion flow, arrow-key instructions only.
 */

// ===== Topics (from your Tinder build) =====
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
  { title: "Space Exploration and Federal Investment", icon: "fa-solid fa-moon", desc: "Science and spinoffs" }
];

// ===== One-word labels for spokes =====
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
  "Space Exploration and Federal Investment": "Space"
};

// ===== Game constants =====
const SPOKE_COUNT = 8;
const KEEPS_TO_LOCK = 3;       // add after 3 keeps
const POST_LOCK_SKIPS_OUT = 3; // remove locked after 3 post-lock skips
const END_WHEN_ALL_SEEN = true; // if false, continue until 8 spokes filled as well

/** Runtime shape
 * id, title, icon, seen, kept, skipped, locked, postLockSkips, spokeIndex, isChallenger
 */
let TOPIC_DATA = [];
const spokes = new Array(SPOKE_COUNT).fill(null); // topic ids or null

// UI refs
const coverageLabel = document.getElementById('coverageLabel');
const progressBar = document.getElementById('progressBar');
const showResultsBtn = document.getElementById('showResultsBtn');

const leftCard = document.getElementById('leftCard');
const rightCard = document.getElementById('rightCard');
const leftPick = document.getElementById('leftPick');
const rightPick = document.getElementById('rightPick');

const leftTitle = document.getElementById('leftTitle');
const rightTitle = document.getElementById('rightTitle');
const leftIcon = document.getElementById('leftIcon');
const rightIcon = document.getElementById('rightIcon');

const spokeList = document.getElementById('spokeList');
const wheel = document.getElementById('wheel');
const radarSvg = document.getElementById('radarSvg');

const resultsModal = document.getElementById('resultsModal');
const resultsList = document.getElementById('resultsList');
const restartBtn = document.getElementById('restartBtn');

let currentLeft = null;
let currentRight = null;
let inputLocked = false;
let finished = false;

function hydrateTopics(raw) {
  return raw.map((t, idx) => ({
    id: idx,
    title: t.title || `Topic ${idx+1}`,
    icon: t.icon || "fa-solid fa-circle-question",
    seen: 0,
    kept: 0,
    skipped: 0,
    locked: false,
    postLockSkips: 0,
    spokeIndex: null,
    isChallenger: false
  }));
}

function initGame() {
  const raw = Array.isArray(TOPICS) && TOPICS.length ? TOPICS : generatePlaceholders(50);
  TOPIC_DATA = hydrateTopics(raw);
  buildWheel();
  drawRadarGrid();
  nextDuel();
  updateHUD();
}

function generatePlaceholders(n = 50) {
  const sample = [];
  const fa = ["fa-scale-balanced","fa-stethoscope","fa-earth-americas","fa-graduation-cap","fa-seedling","fa-bolt","fa-shield","fa-people-group","fa-water","fa-industry"];
  for (let i = 1; i <= n; i++) {
    sample.push({ title: `Topic ${i}`, icon: `fa-solid ${fa[i % fa.length]}` });
  }
  return sample;
}

function coverageCount() { return TOPIC_DATA.reduce((acc, t) => acc + (t.seen > 0 ? 1 : 0), 0) }

function updateHUD() {
  const total = TOPIC_DATA.length;
  const seen = coverageCount();
  const pct = Math.round((seen / total) * 100);
  coverageLabel.textContent = `Seen ${seen} of ${total}`;
  progressBar.style.width = `${pct}%`;
  showResultsBtn.disabled = !(seen >= total);
  renderLegend();

  if (!finished && END_WHEN_ALL_SEEN && seen >= total) {
    finished = true;
    inputLocked = true;
    showResults();
  }
  if (!finished && !END_WHEN_ALL_SEEN && seen >= total && spokes.filter(x => x !== null).length === SPOKE_COUNT) {
    finished = true;
    inputLocked = true;
    showResults();
  }
}

function nextDuel() {
  if (inputLocked) return;
  // include at least one least-seen item to drive coverage
  const bySeen = [...TOPIC_DATA].sort((a,b) => a.seen - b.seen);
  const minSeen = bySeen[0].seen;
  const leastSeen = bySeen.filter(t => t.seen === minSeen);
  const pickOne = (arr) => arr[Math.floor(Math.random()*arr.length)];

  let t1 = pickOne(leastSeen);
  // 30% chance to pit against a locked topic to allow dethroning
  let candidates;
  if (Math.random() < 0.3) {
    candidates = TOPIC_DATA.filter(t => t.locked && t.id !== t1.id);
    if (!candidates.length) candidates = TOPIC_DATA.filter(t => t.id !== t1.id);
  } else {
    candidates = TOPIC_DATA.filter(t => t.id !== t1.id);
  }
  let t2 = pickOne(candidates);

  currentLeft = t1.id;
  currentRight = t2.id;
  applyCard(leftTitle, leftIcon, t1);
  applyCard(rightTitle, rightIcon, t2);
}

function applyCard(titleEl, iconEl, t) {
  titleEl.textContent = t.title;
  iconEl.className = t.icon || 'fa-solid fa-circle-question';
}

function handlePick(side) {
  if (inputLocked) return;
  if (currentLeft === null || currentRight === null) return;
  const left = TOPIC_DATA[currentLeft];
  const right = TOPIC_DATA[currentRight];
  const chosen = side === 'left' ? left : right;
  const other = side === 'left' ? right : left;

  chosen.kept += 1; chosen.seen += 1;
  other.skipped += 1; other.seen += 1;

  if (other.locked) {
    other.postLockSkips += 1;
    if (other.postLockSkips >= POST_LOCK_SKIPS_OUT) {
      removeFromSpoke(other);
      tryPromoteChallenger();
    }
  }

  if (!chosen.locked && chosen.kept >= KEEPS_TO_LOCK) {
    const freeIndex = spokes.indexOf(null);
    if (freeIndex !== -1) placeOnSpoke(chosen, freeIndex);
    else chosen.isChallenger = true;
  }

  updateHUD();
  if (!finished) nextDuel();
}

function placeOnSpoke(topic, index) {
  spokes[index] = topic.id;
  topic.locked = true;
  topic.spokeIndex = index;
  topic.postLockSkips = 0;
  drawWheelLabels();
}

function removeFromSpoke(topic) {
  if (topic.spokeIndex !== null && spokes[topic.spokeIndex] === topic.id) spokes[topic.spokeIndex] = null;
  topic.locked = false; topic.spokeIndex = null; topic.postLockSkips = 0;
  drawWheelLabels();
}

function tryPromoteChallenger() {
  const c = TOPIC_DATA.filter(t => t.isChallenger && !t.locked && t.kept >= KEEPS_TO_LOCK).sort((a,b) => b.kept - a.kept)[0];
  if (!c) return;
  const idx = spokes.indexOf(null);
  if (idx !== -1) { c.isChallenger = false; placeOnSpoke(c, idx) }
}

function labelFor(title) { return LABEL[title] || safeTrim(title, 28) }

function buildWheel() {
  // Clear chips
  wheel.querySelectorAll('.spoke-chip').forEach(n => n.remove());
  const centerX = 180, centerY = 180, radius = 150; // match 360x360 SVG
  for (let i = 0; i < SPOKE_COUNT; i++) {
    const angle = (i / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2; // start at top
    const chip = document.createElement('div');
    chip.className = 'spoke-chip';
    chip.style.left = centerX + 'px';
    chip.style.top = centerY + 'px';
    chip.style.transform = `rotate(${angle}rad) translate(${radius}px)`;
    chip.dataset.index = i;
    // inner text span with counter-rotation so text stays horizontal
    const span = document.createElement('span');
    span.className = 'txt';
    span.style.transform = `rotate(${-angle}rad)`;
    span.textContent = `Slot ${i+1}`;
    chip.appendChild(span);
    wheel.appendChild(chip);
  }
}

function drawWheelLabels() {
  const chips = wheel.querySelectorAll('.spoke-chip');
  chips.forEach(chip => {
    const idx = Number(chip.dataset.index);
    const topicId = spokes[idx];
    const span = chip.querySelector('.txt');
    if (topicId === null) {
      span.textContent = `Slot ${idx+1}`;
      chip.classList.remove('success');
    } else {
      span.textContent = labelFor(TOPIC_DATA[topicId].title);
      chip.classList.add('success');
    }
  });
}

function renderLegend() {
  const rows = [];
  for (let i = 0; i < SPOKE_COUNT; i++) {
    const id = spokes[i];
    if (id === null) continue;
    const t = TOPIC_DATA[id];
    rows.push(`<div class="row"><div>${escapeHtml(labelFor(t.title))}</div><div>${t.kept}</div><div>${t.postLockSkips}</div><div>${t.locked ? 'Locked' : ''}</div></div>`);
  }
  spokeList.innerHTML = rows.join('');
}

/* Simple radar grid (8 axes, 4 rings) to match Topic Swipe style */
function drawRadarGrid() {
  const svg = radarSvg;
  while (svg.firstChild) svg.removeChild(svg.firstChild);

  const size = 360;
  const cx = size/2, cy = size/2;
  const R = 150;
  const rings = 4;

  // Rings (polygons)
  for (let r = 1; r <= rings; r++) {
    const rr = (R * r) / rings;
    const pts = [];
    for (let i = 0; i < SPOKE_COUNT; i++) {
      const a = (i / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      pts.push(`${x},${y}`);
    }
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', pts.join(' '));
    poly.setAttribute('class', 'ring');
    if (r === rings) poly.classList.add('outer');
    svg.appendChild(poly);
  }

  // Axes
  for (let i = 0; i < SPOKE_COUNT; i++) {
    const a = (i / SPOKE_COUNT) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * R;
    const y = cy + Math.sin(a) * R;
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', cx); line.setAttribute('y1', cy);
    line.setAttribute('x2', x);  line.setAttribute('y2', y);
    line.setAttribute('class', 'axis');
    svg.appendChild(line);
  }

  // Center dot
  const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('cx', cx); dot.setAttribute('cy', cy); dot.setAttribute('r', 2.5);
  dot.setAttribute('class', 'center-dot');
  svg.appendChild(dot);
}

function showResults() {
  // Populate list with locked topics in spoke order
  resultsList.innerHTML = '';
  for (let i = 0; i < SPOKE_COUNT; i++) {
    const id = spokes[i];
    const li = document.createElement('li');
    if (id === null) {
      li.textContent = `Slot ${i+1}: —`;
    } else {
      const t = TOPIC_DATA[id];
      li.textContent = `Slot ${i+1}: ${labelFor(t.title)} (${t.kept} keeps)`;
    }
    resultsList.appendChild(li);
  }
  resultsModal.classList.remove('hidden');
}

function hideResults() {
  resultsModal.classList.add('hidden');
}

function escapeHtml(str) { return String(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])) }
function safeTrim(str, max) { const s = String(str); return s.length > max ? s.slice(0, max-1) + '…' : s }

// Events
leftPick.addEventListener('click', () => handlePick('left'));
rightPick.addEventListener('click', () => handlePick('right'));
leftCard.addEventListener('click', (e) => { if (!e.target.closest('button')) handlePick('left') });
rightCard.addEventListener('click', (e) => { if (!e.target.closest('button')) handlePick('right') });

// Arrow keys only
window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') handlePick('left');
  if (e.key === 'ArrowRight') handlePick('right');
});

showResultsBtn.addEventListener('click', () => {
  inputLocked = true;
  showResults();
});
restartBtn.addEventListener('click', () => {
  // Reset all state
  for (let i = 0; i < SPOKE_COUNT; i++) spokes[i] = null;
  TOPIC_DATA.forEach(t => {
    t.seen = 0; t.kept = 0; t.skipped = 0; t.locked = false; t.postLockSkips = 0; t.spokeIndex = null; t.isChallenger = false;
  });
  drawWheelLabels();
  finished = false; inputLocked = false;
  hideResults();
  nextDuel();
  updateHUD();
});

// Start
initGame();
