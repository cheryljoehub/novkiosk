const questions = [
  {
    q: "Which of these already sounds like your dream job?",
    options: [
      { text: "Accountant or auditor", scores: { accounting: 4 } },
      { text: "Marketing manager", scores: { marketing: 4 } },
      { text: "Startup founder", scores: { entrepreneurship: 4 } },
      { text: "Sports team operations staff", scores: { sportsManagement: 4 } },
      { text: "Supply chain / logistics analyst", scores: { supplyChain: 4 } }
    ]
  },
  {
    q: "Do you prefer working with numbers or people?",
    options: [
      { text: "Numbers", scores: { finance: 3, accounting: 3, analytics: 2 } },
      { text: "People", scores: { hr: 3, hospitality: 3, marketing: 2 } },
      { text: "Systems and processes", scores: { supplyChain: 3, businessManagement: 2 } },
      { text: "Trends and big-picture data", scores: { economics: 3, analytics: 2 } }
    ]
  },
  {
    q: "Do you enjoy creative work?",
    options: [
      { text: "Yes, very much", scores: { marketing: 3, entrepreneurship: 2 } },
      { text: "Somewhat, if it's practical", scores: { hospitality: 2, sportsManagement: 2 } },
      { text: "Not really, I prefer precision", scores: { finance: 2, accounting: 3, analytics: 2 } }
    ]
  },
  {
    q: "Would you rather lead a team or analyze data?",
    options: [
      { text: "Lead a team", scores: { hr: 3, businessManagement: 3, hospitality: 2 } },
      { text: "Analyze data", scores: { analytics: 3, finance: 2, economics: 2 } },
      { text: "Manage a process or system", scores: { supplyChain: 3, accounting: 2 } },
      { text: "Pitch new ideas", scores: { entrepreneurship: 3, marketing: 2 } }
    ]
  },
  {
    q: "How do you feel about risk?",
    options: [
      { text: "I love risk", scores: { entrepreneurship: 3, marketing: 2 } },
      { text: "I like calculated risk backed by data", scores: { analytics: 2, economics: 2 } },
      { text: "I prefer stability and clear rules", scores: { accounting: 3, finance: 2, supplyChain: 2 } }
    ]
  },
  {
    q: "Which task sounds most appealing?",
    options: [
      { text: "Building a financial model", scores: { finance: 3, analytics: 2 } },
      { text: "Reconciling financial records", scores: { accounting: 3 } },
      { text: "Designing an ad campaign", scores: { marketing: 3 } },
      { text: "Planning a live event or trip", scores: { hospitality: 3, sportsManagement: 1 } },
      { text: "Optimizing a delivery route", scores: { supplyChain: 3 } },
      { text: "Forecasting market or economic trends", scores: { economics: 3 } }
    ]
  },
  {
    q: "What's your ideal work environment?",
    options: [
      { text: "Structured and predictable", scores: { accounting: 3, finance: 2, supplyChain: 1 } },
      { text: "Fast-paced and ever-changing", scores: { marketing: 2, entrepreneurship: 3, sportsManagement: 2 } },
      { text: "People-facing and service-oriented", scores: { hospitality: 3, hr: 2 } },
      { text: "Independent and data-focused", scores: { analytics: 3, economics: 2 } }
    ]
  },
  {
    q: "Which subject did you enjoy most in school?",
    options: [
      { text: "Math or Statistics", scores: { finance: 2, accounting: 2, analytics: 3 } },
      { text: "Communications or Art", scores: { marketing: 3 } },
      { text: "Psychology or Sociology", scores: { hr: 3 } },
      { text: "Social Studies or Economics", scores: { economics: 3 } },
      { text: "PE or athletics", scores: { sportsManagement: 3 } },
      { text: "Business or shop class / operations", scores: { supplyChain: 2, businessManagement: 2 } }
    ]
  },
  {
    q: "What motivates you most at work?",
    options: [
      { text: "Financial security and precision", scores: { finance: 2, accounting: 3 } },
      { text: "Recognition and influence", scores: { marketing: 2, entrepreneurship: 3 } },
      { text: "Helping others succeed", scores: { hr: 3, hospitality: 2 } },
      { text: "Solving complex problems", scores: { analytics: 3, economics: 2, supplyChain: 2 } },
      { text: "Competition and teamwork", scores: { sportsManagement: 3, businessManagement: 1 } }
    ]
  },
  {
    q: "How do you handle uncertainty?",
    options: [
      { text: "I plan carefully to avoid it", scores: { accounting: 2, finance: 2, supplyChain: 2 } },
      { text: "I adapt quickly and move on", scores: { entrepreneurship: 3, sportsManagement: 2 } },
      { text: "I talk it through with others", scores: { hr: 2, hospitality: 2 } },
      { text: "I research and model it out", scores: { analytics: 3, economics: 3 } }
    ]
  },
  {
    q: "Which industry excites you most?",
    options: [
      { text: "Banking and investment", scores: { finance: 4 } },
      { text: "Retail and consumer brands", scores: { marketing: 3, businessManagement: 1 } },
      { text: "Hotels, travel, and events", scores: { hospitality: 4 } },
      { text: "Sports and athletics", scores: { sportsManagement: 4 } },
      { text: "Manufacturing and logistics", scores: { supplyChain: 4 } },
      { text: "Startups and new ventures", scores: { entrepreneurship: 4 } },
      { text: "Government and public policy", scores: { economics: 4 } },
      { text: "Corporate compliance and audit", scores: { accounting: 4 } }
    ]
  },
  {
    q: "Which career outcome excites you most?",
    options: [
      { text: "Managing investments or budgets", scores: { finance: 3 } },
      { text: "Auditing or managing financial records", scores: { accounting: 3 } },
      { text: "Building a recognizable brand", scores: { marketing: 3 } },
      { text: "Leading company culture and teams", scores: { hr: 2, businessManagement: 3 } },
      { text: "Founding your own company", scores: { entrepreneurship: 3 } },
      { text: "Running hotel or event operations", scores: { hospitality: 3 } },
      { text: "Directing a sports organization", scores: { sportsManagement: 3 } },
      { text: "Streamlining a supply chain", scores: { supplyChain: 3 } },
      { text: "Advising on economic policy", scores: { economics: 3 } },
      { text: "Uncovering insights from data", scores: { analytics: 3 } }
    ]
  }
];

const careers = {
  finance: {
    title: "Finance",
    desc: "You enjoy numbers, investments, and financial strategy. Careers include financial analyst, banker, or corporate finance.",
    years: "Typical path: 4-year business degree, 2-3 years as a financial analyst, 5-7 years to reach senior analyst or manager, 10-15 years to reach director or CFO-track roles."
  },
  accounting: {
    title: "Accounting",
    desc: "You are precise, detail-oriented, and enjoy tracking financial records and compliance. Careers include staff accountant, auditor, or tax specialist.",
    years: "Typical path: 4-year accounting degree (often with CPA licensure), 1-2 years as a staff accountant, 3-5 years to senior accountant, 7-10 years to controller, 12-15+ years to CFO."
  },
  economics: {
    title: "Economics",
    desc: "You enjoy studying markets, trends, and the bigger forces that drive decisions. Careers include economic analyst, policy researcher, or consultant.",
    years: "Typical path: 4-year economics degree, 1-3 years as a research or policy analyst, 4-6 years to senior economist, 8-10+ years (often with a master's or PhD) to lead economist or consulting partner roles."
  },
  marketing: {
    title: "Marketing",
    desc: "You are creative and people-focused. Careers include digital marketing, branding, and advertising.",
    years: "Typical path: 4-year business or marketing degree, 1-2 years as a marketing coordinator, 3-5 years to marketing manager, 8-10 years to reach director or CMO-track roles."
  },
  hr: {
    title: "Human Resources",
    desc: "You enjoy working with people and teams. Careers include HR manager and organizational development.",
    years: "Typical path: 4-year business or HR degree, 2-3 years as an HR generalist, 5-7 years to HR manager, 10-12 years to reach director or VP of HR."
  },
  analytics: {
    title: "Business Analytics",
    desc: "You are data-driven and logical. Careers include data analyst and business intelligence roles.",
    years: "Typical path: 4-year business analytics or statistics degree, 1-3 years as a data/business analyst, 4-6 years to senior analyst, 8-10 years to reach analytics manager or director."
  },
  entrepreneurship: {
    title: "Entrepreneurship",
    desc: "You like risk and building new ideas. You may enjoy starting your own business or startups.",
    years: "Typical path: varies widely, many founders start within 1-3 years of graduating, 3-5 years to validate and grow a business, and 7-10+ years to build a mature, scalable company."
  },
  hospitality: {
    title: "Hospitality Management",
    desc: "You're a natural host who enjoys creating great experiences and running smooth operations. Careers include hotel management, event planning, and restaurant or resort operations.",
    years: "Typical path: 4-year hospitality management degree, 1-2 years as a shift or department supervisor, 3-5 years to operations or general manager, 8-10+ years to regional director or VP of operations."
  },
  sportsManagement: {
    title: "Sports Management",
    desc: "You combine a love of sports with business skills. Careers include team operations, athletic administration, sports marketing, and event management.",
    years: "Typical path: 4-year sports management degree, 1-3 years as an operations or marketing coordinator for a team or organization, 4-7 years to department manager, 10+ years to athletic director or VP of operations."
  },
  supplyChain: {
    title: "Supply Chain Management",
    desc: "You're logical and process-driven, and enjoy optimizing how goods and services move. Careers include logistics analyst, procurement, and operations management.",
    years: "Typical path: 4-year supply chain or operations degree, 1-3 years as a logistics or procurement analyst, 4-6 years to supply chain manager, 8-12 years to director of operations or VP of supply chain."
  },
  businessManagement: {
    title: "Business Management",
    desc: "You're a natural generalist who enjoys leading teams, solving operational problems, and keeping projects on track. Careers include operations manager, project manager, and general management roles.",
    years: "Typical path: 4-year business management degree, 1-3 years as a coordinator or supervisor, 4-6 years to operations or project manager, 8-12 years to director or general manager roles."
  }
};

let current = 0;
let scores = {};

function initScores() {
  scores = {};
  Object.keys(careers).forEach(key => {
    scores[key] = 0;
  });
}

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText = q.q;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt.text;

    btn.onclick = () => {
      for (let key in opt.scores) {
        scores[key] += opt.scores[key];
      }
      nextQuestion();
    };

    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;

  if (current >= questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}
function goBack() {
  window.history.back();
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");

  let best = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById("result").innerText = careers[best].title;
  document.getElementById("result-desc").innerText = careers[best].desc;
  document.getElementById("result-years").innerText = careers[best].years;
}

function restart() {
  current = 0;
  initScores();
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("result-box").classList.add("hidden");
  loadQuestion();
}

initScores();
loadQuestion();
