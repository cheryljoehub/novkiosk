// Data structure
const data = {
  "Bachelors": {
    icon: "🎓",
    desc: "Undergraduate programs designed to prepare you for a successful career in business.",
    years: "Typically 4 years",
    programs: [
      "BS in Accounting",
      "BS in Accounting: Public Accounting",
      "BS in Applied Business Analytics",
      "BS in Applied Business Information Systems",
      "BS in Applied Cybersecurity Management",
      "BS in Applied Entrepreneurship",
      "BS in Applied Human Resources Management",
      "BS in Applied Management",
      "BS in Applied Marketing and Advertising",
      "BS in Business Administration",
      "BS in Business Analytics",
      "BS in Business Information Systems",
      "BS in Business Management",
      "BS in Cybersecurity Management",
      "BS in Economics",
      "BS in Entrepreneurial Studies",
      "BS in Entrepreneurial Studies: Engineering Management",
      "BS in Entrepreneurial Studies: Technology Management",
      "BS in Finance",
      "BS in Finance: Financial Planning",
      "BS in Homeland Security and Emergency Management",
      "BS in Hospitality and Tourism Management",
      "BS in Human Resource Management",
      "BS in Marketing and Advertising",
      "BS in Professional Sales and Marketing",
      "BS in Risk Management",
      "BS in Sports and Entertainment Management",
      "BS in Supply Chain and Logistics Management"
    ]
  },
  "Masters": {
    icon: "🎓",
    desc: "Graduate programs to advance your expertise and leadership in business.",
    years: "Typically 1-2 years",
    programs: [
      "Master of Business Administration (MBA)",
      "MBA and MS in Leadership",
      "MBA: Accounting",
      "MBA: Business Analytics",
      "MBA: Christian Leadership",
      "MBA: Cybersecurity",
      "MBA: Finance",
      "MBA: Health Systems Management",
      "MBA: Leadership",
      "MBA: Marketing",
      "MBA: Nonprofit Management",
      "MBA: Project Management",
      "MBA: Sports Business",
      "MBA: Strategic Human Resource Management",
      "MBA: Supply Chain Management",
      "MPA: Government and Policy",
      "MPA: Health Care Management",
      "MPA: Nonprofit Management",
      "MS in Accounting",
      "MS in Accounting: Tax Compliance and Planning",
      "MS in Business Analytics",
      "MS in Cybersecurity Management",
      "MS in Human Computer Interaction",
      "MS in Leadership",
      "MS in Leadership: Homeland Security and Emergency Management"
    ]
  },
  "Doctorate": {
    icon: "🎓",
    desc: "Doctoral programs for advanced research and scholarship in business.",
    years: "Typically 3-5 years",
    programs: [
      "DBA: Data Analytics (Qualitative Research)",
      "DBA: Data Analytics (Quantitative Research)",
      "DBA: Innovation and Corporate Entrepreneurship (Qualitative Research)",
      "DBA: Innovation and Corporate Entrepreneurship (Quantitative Research)",
      "DBA: Management (Qualitative Research)",
      "DBA: Management (Quantitative Research)",
      "DBA: Marketing (Qualitative Research)",
      "DBA: Marketing (Quantitative Research)"
    ]
  }
};

// State
let history = [];
let currentLevel = 'root';
let selectedDegree = null;
let selectedProgram = null;

// Initialize
function init() {
  showRoot();
}

function showRoot() {
  currentLevel = 'root';
  history = [];
  selectedDegree = null;
  selectedProgram = null;
  document.getElementById('quiz-box').classList.remove('hidden');
  document.getElementById('result-box').classList.add('hidden');
  document.getElementById('question').textContent = 'Select a degree level to begin';
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  Object.keys(data).forEach(level => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = level;
    btn.onclick = () => selectDegree(level);
    opts.appendChild(btn);
  });
}

function renderDegreePrograms(level) {
  currentLevel = 'degree';
  selectedDegree = level;
  selectedProgram = null;
  document.getElementById('question').textContent = level + ' Programs — Select a major';
  const opts = document.getElementById('options');
  opts.innerHTML = '';
  document.getElementById('quiz-box').classList.remove('hidden');
  document.getElementById('result-box').classList.add('hidden');
  data[level].programs.forEach(prog => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.textContent = prog;
    btn.onclick = () => showResult(level, prog);
    opts.appendChild(btn);
  });
}

function selectDegree(level) {
  history.push('root');
  renderDegreePrograms(level);
}

function showResult(level, program) {
  history.push('degree');
  selectedProgram = program;
  document.getElementById('quiz-box').classList.add('hidden');
  document.getElementById('result-box').classList.remove('hidden');
  document.getElementById('result').textContent = program;
  document.getElementById('result-desc').textContent = data[level].desc;
  document.getElementById('result-years').textContent = data[level].years;
}

function goBack() {
  if (currentLevel === 'root') {
    window.history.back();
    return;
  }

  const prev = history.pop();
  if (!prev) {
    showRoot();
    return;
  }

  if (prev === 'root') {
    showRoot();
  } else if (prev === 'degree') {
    renderDegreePrograms(selectedDegree);
  }
}

function restart() {
  showRoot();
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);