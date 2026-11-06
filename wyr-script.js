/* ============================================================
   QUESTION BANK
   53 business "Would You Rather" dilemmas — one is auto-selected
   each day based on the calendar date, so it rotates on its own
   (about a 7-8 week cycle before repeating). Zero maintenance
   required. Add, remove, or edit pairs any time; the rotation
   adjusts automatically to however many are in the list.
   ============================================================ */

const QUESTIONS = [
  { q: "Would you rather work for a mission-driven startup or work for an established corporation?", a: "Work for a mission-driven startup", b: "Work for an established corporation" },
  { q: "Would you rather receive a promotion now or wait for a larger promotion later?", a: "Receive a promotion now", b: "Wait for a larger promotion later" },
  { q: "Would you rather manage a large team or be an individual contributor expert?", a: "Manage a large team", b: "Be an individual contributor expert" },
  { q: "Would you rather have a bigger budget or have a smaller team?", a: "Have a bigger budget", b: "Have a smaller team" },
  { q: "Would you rather focus on innovation or focus on efficiency?", a: "Focus on innovation", b: "Focus on efficiency" },
  { q: "Would you rather travel frequently for work or work from one location?", a: "Travel frequently for work", b: "Work from one location" },
  { q: "Would you rather learn a new skill every quarter or master one skill for a year?", a: "Learn a new skill every quarter", b: "Master one skill for a year" },
  { q: "Would you rather earn commission-based pay or earn fixed salary?", a: "Earn commission-based pay", b: "Earn fixed salary" },
  { q: "Would you rather work in finance or work in marketing?", a: "Work in finance", b: "Work in marketing" },
  { q: "Would you rather run payroll for a company or manage its annual budget?", a: "Run payroll for a company", b: "Manage its annual budget" },
  { q: "Would you rather audit a company's books or build its financial model?", a: "Audit a company's books", b: "Build its financial model" },
  { q: "Would you rather negotiate a merger or pitch to investors?", a: "Negotiate a merger", b: "Pitch to investors" },
  { q: "Would you rather work on Wall Street or work in Silicon Valley?", a: "Work on Wall Street", b: "Work in Silicon Valley" },
  { q: "Would you rather specialize in tax or specialize in audit?", a: "Specialize in tax", b: "Specialize in audit" },
  { q: "Would you rather manage a $10M budget or manage a 50-person team?", a: "Manage a $10M budget", b: "Manage a 50-person team" },
  { q: "Would you rather get a bigger signing bonus or get better stock options?", a: "Get a bigger signing bonus", b: "Get better stock options" },
  { q: "Would you rather work for a Fortune 500 company or work for a 10-person startup?", a: "Work for a Fortune 500 company", b: "Work for a 10-person startup" },
  { q: "Would you rather be the company's best salesperson or be its best strategist?", a: "Be the company's best salesperson", b: "Be its best strategist" },
  { q: "Would you rather run your own business or be a partner in someone else's?", a: "Run your own business", b: "Be a partner in someone else's" },
  { q: "Would you rather take a lower salary with equity or a higher salary with no equity?", a: "Take a lower salary with equity", b: "Take a higher salary with no equity" },
  { q: "Would you rather build a product from scratch or scale an existing one?", a: "Build a product from scratch", b: "Scale an existing product" },
  { q: "Would you rather pitch to one big investor or ten small investors?", a: "Pitch to one big investor", b: "Pitch to ten small investors" },
  { q: "Would you rather fail fast and try again or plan for a year before launching?", a: "Fail fast and try again", b: "Plan for a year before launching" },
  { q: "Would you rather hire slow and steady or hire fast and adjust?", a: "Hire slow and steady", b: "Hire fast and adjust" },
  { q: "Would you rather bootstrap your company or raise venture capital?", a: "Bootstrap your company", b: "Raise venture capital" },
  { q: "Would you rather run a five-star hotel or run a major sports arena?", a: "Run a five-star hotel", b: "Run a major sports arena" },
  { q: "Would you rather plan a large conference or plan a small VIP retreat?", a: "Plan a large conference", b: "Plan a small VIP retreat" },
  { q: "Would you rather handle guest complaints all day or manage event logistics all day?", a: "Handle guest complaints all day", b: "Manage event logistics all day" },
  { q: "Would you rather work the front desk or work behind the scenes in operations?", a: "Work the front desk", b: "Work behind the scenes in operations" },
  { q: "Would you rather work for a luxury brand or work for a budget-friendly brand?", a: "Work for a luxury brand", b: "Work for a budget-friendly brand" },
  { q: "Would you rather manage a professional sports team or a college athletics department?", a: "Manage a professional sports team", b: "Manage a college athletics department" },
  { q: "Would you rather negotiate a player's contract or negotiate a sponsorship deal?", a: "Negotiate a player's contract", b: "Negotiate a sponsorship deal" },
  { q: "Would you rather plan game day operations or plan a season-long marketing campaign?", a: "Plan game day operations", b: "Plan a season-long marketing campaign" },
  { q: "Would you rather work in ticket sales or work in community relations?", a: "Work in ticket sales", b: "Work in community relations" },
  { q: "Would you rather optimize a supply chain for speed or optimize it for cost?", a: "Optimize a supply chain for speed", b: "Optimize it for cost" },
  { q: "Would you rather manage a warehouse or manage a fleet of delivery trucks?", a: "Manage a warehouse", b: "Manage a fleet of delivery trucks" },
  { q: "Would you rather solve a shipping delay crisis or solve an inventory shortage crisis?", a: "Solve a shipping delay crisis", b: "Solve an inventory shortage crisis" },
  { q: "Would you rather work with domestic suppliers only or work with global suppliers?", a: "Work with domestic suppliers only", b: "Work with global suppliers" },
  { q: "Would you rather write ad copy or analyze ad performance data?", a: "Write ad copy", b: "Analyze ad performance data" },
  { q: "Would you rather run a viral social campaign or a steady long-term brand campaign?", a: "Run a viral social campaign", b: "Run a steady long-term brand campaign" },
  { q: "Would you rather work on packaging design or work on a product launch event?", a: "Work on packaging design", b: "Work on a product launch event" },
  { q: "Would you rather manage an existing client account or develop new business?", a: "Manage an existing client account", b: "Develop new business" },
  { q: "Would you rather write a company's HR policies or recruit its next 100 employees?", a: "Write a company's HR policies", b: "Recruit its next 100 employees" },
  { q: "Would you rather resolve a workplace conflict or plan the annual team retreat?", a: "Resolve a workplace conflict", b: "Plan the annual team retreat" },
  { q: "Would you rather build a company culture from scratch or fix a broken one?", a: "Build a company culture from scratch", b: "Fix a broken one" },
  { q: "Would you rather interview candidates all day or conduct performance reviews all day?", a: "Interview candidates all day", b: "Conduct performance reviews all day" },
  { q: "Would you rather analyze last quarter's data or forecast next quarter's numbers?", a: "Analyze last quarter's data", b: "Forecast next quarter's numbers" },
  { q: "Would you rather build dashboards or present insights to executives?", a: "Build dashboards", b: "Present insights to executives" },
  { q: "Would you rather work with messy data you have to clean or clean data with boring questions?", a: "Work with messy data you have to clean", b: "Clean data with boring questions" },
  { q: "Would you rather specialize in economic forecasting or specialize in market research?", a: "Specialize in economic forecasting", b: "Specialize in market research" },
  { q: "Would you rather advise on public policy or consult for private companies?", a: "Advise on public policy", b: "Consult for private companies" },
  { q: "Would you rather work for a government agency or work for a global NGO?", a: "Work for a government agency", b: "Work for a global NGO" },
  { q: "Would you rather be known as the hardest worker on your team or the smartest?", a: "Be known as the hardest worker", b: "Be known as the smartest" },
];

/* ============================================================
   RENDER + VOTING LOGIC — no need to touch below this line
   ============================================================ */

// a fixed reference point so the daily index counts continuously
// forward (never resets on Jan 1), avoiding awkward repeats
const EPOCH = new Date(2026, 0, 1);

function getDayKey(d) {
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

function getDaysSinceEpoch(d) {
  const msPerDay = 24 * 60 * 60 * 1000;
  // normalize both dates to midnight so partial-day drift doesn't matter
  const a = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const b = new Date(EPOCH.getFullYear(), EPOCH.getMonth(), EPOCH.getDate());
  return Math.floor((a - b) / msPerDay);
}

function getTodaysQuestion() {
  const daysSinceEpoch = getDaysSinceEpoch(new Date());
  const index = ((daysSinceEpoch % QUESTIONS.length) + QUESTIONS.length) % QUESTIONS.length;
  return QUESTIONS[index];
}

function loadVotes(key) {
  try {
    const raw = localStorage.getItem("wyr_votes_" + key);
    return raw ? JSON.parse(raw) : { a: 0, b: 0 };
  } catch (e) {
    return { a: 0, b: 0 };
  }
}

function saveVotes(key, votes) {
  try {
    localStorage.setItem("wyr_votes_" + key, JSON.stringify(votes));
  } catch (e) {
    /* storage unavailable, fail silently */
  }
}

let dayKey, question, votes, hasVoted;

function goBack() {
  const hasHistory = window.history.length > 1;
  const cameFromSameSite = document.referrer && document.referrer.includes(window.location.host);

  if (hasHistory && cameFromSameSite) {
    window.history.back();
  } else {
    window.location.href = "kiosk.html";
  }
}

function init() {
  dayKey = getDayKey(new Date());
  question = getTodaysQuestion();
  votes = loadVotes(dayKey);
  hasVoted = false;

  document.getElementById("date-label").textContent =
    "Today's business dilemma \u2014 " + new Date().toLocaleDateString(undefined, { month: "long", day: "numeric" });

  document.getElementById("question-text").textContent = question.q;
  document.getElementById("optA-text").textContent = question.a;
  document.getElementById("optB-text").textContent = question.b;

  document.getElementById("optA").addEventListener("click", () => castVote("a"));
  document.getElementById("optB").addEventListener("click", () => castVote("b"));

  renderResults(false);
}

function castVote(side) {
  if (hasVoted) return;
  hasVoted = true;

  votes[side] += 1;
  saveVotes(dayKey, votes);

  renderResults(true, side);

  const note = document.getElementById("vote-note");
  note.innerHTML = 'Thanks for voting! <span class="reset-link" onclick="resetForNextPerson()">Next person?</span>';
}

function renderResults(voted, chosenSide) {
  const total = votes.a + votes.b;
  const pctA = total ? Math.round((votes.a / total) * 100) : 0;
  const pctB = total ? Math.round((votes.b / total) * 100) : 0;
  const voteCountEl = document.getElementById("vote-count");
  voteCountEl.textContent = `${total} ${total === 1 ? "person" : "people"} voted today`;

  const card = document.getElementById("card");
  card.classList.toggle("voted", voted);

  document.getElementById("optA").classList.toggle("chosen", chosenSide === "a");
  document.getElementById("optB").classList.toggle("chosen", chosenSide === "b");

  document.getElementById("optA-bar").style.width = voted ? pctA + "%" : "0%";
  document.getElementById("optB-bar").style.width = voted ? pctB + "%" : "0%";

  document.getElementById("optA-pct").textContent = pctA + "%";
  document.getElementById("optB-pct").textContent = pctB + "%";
}

function resetForNextPerson() {
  hasVoted = false;
  const card = document.getElementById("card");
  card.classList.remove("voted");
  document.getElementById("optA").classList.remove("chosen");
  document.getElementById("optB").classList.remove("chosen");
  document.getElementById("optA-bar").style.width = "0%";
  document.getElementById("optB-bar").style.width = "0%";
  document.getElementById("vote-note").textContent = "Tap an option to vote";
}

init();
