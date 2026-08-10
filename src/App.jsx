import React, { useState, useEffect } from 'react';
import {
  Calculator,
  Droplets,
  Activity,
  Radio,
  BookOpen,
  Hand,
  ShieldCheck,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  ChevronRight,
  Code2,
  Cpu,
  Layers,
  Globe,
  Sliders,
  X,
  FileText,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Brain,
  Lock,
  Menu,
  Award
} from 'lucide-react';

export default function App() {
  // State management
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'LazyVim v0.10.0 (Pranav OS) - Type "help" or "ls" to list commands.' }
  ]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Risk Calculator Interactive State
  const [calcData, setCalcData] = useState({
    purchasePrice: 15000,
    currentLiquidity: 45000,
    depreciationRate: 25,
    opportunityYield: 12
  });

  // Calculate Risk Engine Metrics
  const liquidityRatio = calcData.currentLiquidity > 0 ? (calcData.purchasePrice / calcData.currentLiquidity) * 100 : 100;
  const oppCostYearly = Math.round(calcData.purchasePrice * (calcData.opportunityYield / 100));
  const depreciationValue = Math.round(calcData.purchasePrice * (calcData.depreciationRate / 100));
  const riskIndex = Math.min(100, Math.round((liquidityRatio * 0.5) + (calcData.depreciationRate * 0.3) + (calcData.opportunityYield * 0.2)));
  
  let riskStatus = 'APPROVED';
  let riskBadgeStyle = 'border-white bg-white text-black font-bold';
  if (riskIndex > 65) {
    riskStatus = 'HIGH RISK / DECLINED';
    riskBadgeStyle = 'border-neutral-500 bg-neutral-900 text-neutral-200';
  } else if (riskIndex > 35) {
    riskStatus = 'MODERATE RISK / CAUTION';
    riskBadgeStyle = 'border-neutral-400 text-white';
  }

  // Copy Email Handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pranavpoola69@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Terminal Handler
  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = '';
    if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'help') {
      response = 'Available commands: whoami, bio, skills, projects, research, mun, contact, risk-sim, clear';
    } else if (cmd === 'whoami' || cmd === 'bio') {
      response = 'Pranav (ప్రణవ్) | 17 y/o CSE @ SRMIST. AI, Systems Architecture & Financial Risk Tech.';
    } else if (cmd === 'skills') {
      response = 'Languages: Python, C++, Java, C | Tools: Neovim (LazyVim), IntelliJ, Git, Antigravity | AI: Claude, Gemini, Kimi, Codex.';
    } else if (cmd === 'projects') {
      response = '1. Student Capital Allocation Model 2. Jal-Drishti 3. FitFlow AI 4. Wireless Audio Amplifier 5. MangaForge';
    } else if (cmd === 'research') {
      response = 'Ongoing 1: ISL -> Text/Speech (MediaPipe+GRU+LLM) | Ongoing 2: AI Security Layers (Verifiable Inference)';
    } else if (cmd === 'mun') {
      response = 'Active Model UN participant representing Germany on international governance & multilateral regulatory risk.';
    } else if (cmd === 'contact') {
      response = 'Email: pranavpoola69@gmail.com | GitHub: Pskp6769 | LinkedIn: in/pskpranav';
    } else if (cmd === 'risk-sim') {
      response = `Current Sim: Price ₹${calcData.purchasePrice} | Risk Index: ${riskIndex}/100 [${riskStatus}]`;
    } else {
      response = `zsh: command not found: ${cmd}. Type "help" for valid commands.`;
    }

    setTerminalLogs(prev => [
      ...prev,
      { type: 'user', text: `$ ${terminalInput}` },
      { type: 'sys', text: response }
    ]);
    setTerminalInput('');
  };

  // Skill Grid Data
  const skillCategories = ['All', 'Languages', 'Tools & Env', 'AI & Applied Tech', 'Domain Knowledge'];
  const skillsData = [
    { name: 'Python', category: 'Languages', level: 'Advanced', detail: 'Algorithmic logic, financial modeling, PyTorch/MediaPipe' },
    { name: 'C++', category: 'Languages', level: 'High Performance', detail: 'Data structures, low-level memory, systems execution' },
    { name: 'Java', category: 'Languages', level: 'Object-Oriented', detail: 'Enterprise logic, design patterns, clean architecture' },
    { name: 'C', category: 'Languages', level: 'Low-Level', detail: 'Pointer arithmetic, hardware interaction, embedded concepts' },
    { name: 'Neovim (LazyVim)', category: 'Tools & Env', level: 'Primary IDE', detail: 'Configured on macOS for maximum developer velocity' },
    { name: 'IntelliJ IDEA', category: 'Tools & Env', level: 'Workflow', detail: 'Large-scale Java & OOP application design' },
    { name: 'Git & GitHub', category: 'Tools & Env', level: 'Version Control', detail: 'Branch strategy, multi-repo management, CI/CD basics' },
    { name: 'Antigravity IDE', category: 'Tools & Env', level: 'AI Agent Stack', detail: 'Advanced pair-programming & agent orchestration' },
    { name: 'AI Integration', category: 'AI & Applied Tech', level: 'Core Focus', detail: 'Claude, Gemini, Kimi, Codex APIs & system hooks' },
    { name: 'Prompt Engineering', category: 'AI & Applied Tech', level: 'Systemic', detail: 'Structured JSON output schemas, meta-prompts' },
    { name: 'Ontology Engineering', category: 'AI & Applied Tech', level: 'Architectural', detail: 'Knowledge graph schemas & domain relationships' },
    { name: 'System Architecture', category: 'AI & Applied Tech', level: 'Design', detail: 'Decoupled services, event flow, API contract design' },
    { name: 'Financial Risk Modeling', category: 'Domain Knowledge', level: 'Specialization', detail: 'Capital allocation engines, liquidity risk, opportunity cost' },
    { name: 'Algorithmic Logic', category: 'Domain Knowledge', level: 'Core', detail: 'Deterministic decision trees & optimization rules' },
    { name: 'Engineering Design Process', category: 'Domain Knowledge', level: 'Methodology', detail: 'Iterative design, constraint mapping, validation' },
  ];

  const filteredSkills = activeSkillCategory === 'All' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeSkillCategory);

  // Projects Data
  const projectsData = [
    {
      id: 'p1',
      title: 'Student Capital Allocation Model',
      icon: Calculator,
      shortDesc: 'A Python-based financial decision engine and risk management tool that evaluates purchases against liquidity risk, asset depreciation, and opportunity cost.',
      fullDesc: 'Built to bring institutional financial risk principles to personal capital decisions. Evaluates purchasing decisions through multi-variable stress testing: calculating immediate liquidity impact, 12-month asset depreciation curves, and opportunity cost against baseline investment yields.',
      tags: ['Python', 'Financial Risk', 'Algorithmic Logic', 'Capital Allocation'],
      highlights: ['Deterministic Risk Index Algorithm', 'Stress-testing against cash reserves', 'Opportunity cost yield comparison']
    },
    {
      id: 'p2',
      title: 'Jal-Drishti',
      icon: Droplets,
      shortDesc: 'An AI-powered urban sustainability project focused on water loss prevention, designed for an ideathon addressing SDG 11.',
      fullDesc: 'Conceived for UN Sustainable Development Goal 11 (Sustainable Cities and Communities). Jal-Drishti integrates computer vision and acoustic sensor data streams to identify municipal water pipeline leaks in real-time before catastrophic pipe failure.',
      tags: ['AI / Computer Vision', 'Python', 'SDG 11', 'Sustainability Tech'],
      highlights: ['Real-time leak detection pipeline', 'SDG 11 urban planning metrics', 'Computer vision sensor synthesis']
    },
    {
      id: 'p3',
      title: 'FitFlow AI',
      icon: Activity,
      shortDesc: 'An adaptive AI fitness application featuring rule-based workout generation and feedback-driven adaptation.',
      fullDesc: 'Designed to replace generic static workout plans with an algorithmic rule engine that dynamically recalculates training volume and exercise selection based on daily user fatigue, heart rate metrics, and feedback loops.',
      tags: ['React', 'AI Rule Engine', 'Adaptive Logic', 'UX Architecture'],
      highlights: ['Dynamic training volume recalculation', 'Rule-based feedback adaptation loop', 'Clean responsive UI']
    },
    {
      id: 'p4',
      title: 'Wireless Audio Amplifier',
      icon: Radio,
      shortDesc: 'A hardware engineering project involving EPC and RF modules, complete with a custom-designed 3D enclosure.',
      fullDesc: 'Hands-on hardware engineering project integrating Electronic Product Code (EPC) components with High-Frequency RF audio receiver modules. Built with low-noise amplification circuitry and housed in a custom CAD 3D enclosure.',
      tags: ['RF Modules', 'EPC Hardware', 'Circuit Design', '3D CAD'],
      highlights: ['Custom RF receiver circuitry', 'Low-noise pre-amp stage', 'Custom 3D CAD printed chassis']
    },
    {
      id: 'p5',
      title: 'MangaForge',
      icon: BookOpen,
      shortDesc: 'AI manga creation studio with speech synthesis and accessibility-first design.',
      fullDesc: 'A full-stack creative web platform leveraging generative AI image composition, automated panel arrangement, text-to-speech accessibility features for visually impaired readers, and customizable narrative scripting.',
      tags: ['Web Speech API', 'Generative AI', 'Accessibility (a11y)', 'HTML5 Canvas'],
      highlights: ['Speech synthesis integration', 'Panel auto-layout engine', 'Accessibility-first interface']
    }
  ];

  // In-Progress Research Data
  const researchData = [
    {
      id: 'r1',
      title: 'ISL → Text/Speech',
      subtitle: 'Indian Sign Language Real-Time Translation Stack',
      icon: Hand,
      status: 'ACTIVE RESEARCH',
      desc: 'MediaPipe → GRU → LLM gloss composition for Indian Sign Language recognition.',
      details: 'Pioneering a multi-stage continuous gesture translation pipeline. Spatial hand keypoints extracted via MediaPipe feed a temporal Gated Recurrent Unit (GRU) neural network, which outputs ISL gloss tokens. An LLM context layer synthesizes these glosses into grammatically natural spoken English or regional languages.',
      tags: ['MediaPipe', 'GRU Networks', 'LLM Gloss Composition', 'Computer Vision']
    },
    {
      id: 'r2',
      title: 'AI Security Layers',
      subtitle: 'Toward Verifiable Inference: A Layered Defense Architecture for LLMs',
      icon: ShieldCheck,
      status: 'WORKING PAPER',
      desc: 'A Layered Defense Architecture for Detecting and Suppressing Hallucinated Outputs in Large Language Models.',
      details: 'Exploring intermediate verification layers — retrieval grounding, confidence calibration, and cross-model consistency checks — inserted between generation and output to catch and suppress hallucinated content before it reaches the user. Designed for critical risk applications in finance, law, and engineering.',
      tags: ['Verifiable AI', 'Hallucination Suppression', 'Confidence Calibration', 'Retrieval Grounding']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-neutral-100 font-sans selection:bg-white selection:text-black relative">
      
      {/* Background Subtly Patterned Grid */}
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient-mask pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo: పిఎస్केP */}
          <a href="#" className="group flex items-center gap-3">
            <div className="bg-neutral-900 border-2 border-white px-3 py-1 rounded font-mono font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              పిఎస్केP
            </div>
            <div className="hidden sm:flex flex-col text-left">
              <span className="text-xs font-mono font-semibold tracking-widest text-neutral-400 uppercase">PRANAV</span>
              <span className="text-[10px] font-mono text-neutral-500">SRMIST CSE '29</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono tracking-tight">
            <a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-200">[01. About]</a>
            <a href="#skills" className="text-neutral-400 hover:text-white transition-colors duration-200">[02. Skills]</a>
            <a href="#projects" className="text-neutral-400 hover:text-white transition-colors duration-200">[03. Projects]</a>
            <a href="#research" className="text-neutral-400 hover:text-white transition-colors duration-200">[04. Research]</a>
            <a href="#risk-sim" className="text-neutral-400 hover:text-white transition-colors duration-200">[05. Risk Sim]</a>
            <a href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-200">[06. Contact]</a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowTerminal(true)}
              className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-xs font-mono px-3 py-2 rounded text-neutral-300 hover:text-white transition-all"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>CLI</span>
            </button>
            <a
              href="#contact"
              className="bg-white hover:bg-neutral-200 text-black font-semibold text-xs font-mono px-4 py-2 rounded transition-all shadow-[0_0_10px_rgba(255,255,255,0.15)]"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-b border-neutral-800 px-6 py-6 space-y-4 font-mono text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[01. About]</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[02. Skills]</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[03. Projects]</a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[04. Research]</a>
            <a href="#risk-sim" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[05. Risk Sim]</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-neutral-300 hover:text-white">[06. Contact]</a>
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              <button
                onClick={() => { setShowTerminal(true); setMobileMenuOpen(false); }}
                className="flex items-center gap-2 bg-neutral-900 text-xs font-mono px-3 py-2 rounded border border-neutral-700 text-white"
              >
                <Terminal className="w-4 h-4" /> Open LazyVim CLI
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-3.5 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-xs font-mono text-neutral-300 tracking-wide">
              Computer Science Engineering @ SRMIST
            </span>
          </div>

          <div className="space-y-6 max-w-4xl">
            {/* Name */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
              Pranav <span className="text-neutral-500 font-mono text-3xl sm:text-5xl font-normal">(ప్రణవ్)</span>
            </h1>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-300 tracking-tight leading-snug">
              Computer Science Engineering Student @ SRMIST <span className="text-neutral-600">|</span> AI, Systems Architecture & Risk Tech
            </h2>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl leading-relaxed font-light">
              Building algorithmic solutions for urban sustainability, financial modeling, and verifiable AI systems.
            </p>

            {/* Quick Spec Pills */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-neutral-300">Targeting Big 4 / FinTech</span>
              <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-neutral-300">LazyVim / macOS</span>
              <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-neutral-300">MUN Germany Delegate</span>
              <span className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded text-neutral-300">Chennai, IN</span>
            </div>

            {/* Call To Action Buttons */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-white text-black font-bold px-8 py-4 rounded border-2 border-white transition-all duration-300 hover:bg-black hover:text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] text-sm tracking-wide"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="bg-black text-white font-semibold px-8 py-4 rounded border border-neutral-700 hover:border-white transition-all duration-300 text-sm tracking-wide"
              >
                Contact Me
              </a>
              <a
                href="#risk-sim"
                className="hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white px-4 py-4 transition-colors"
              >
                <Sliders className="w-4 h-4" /> Run Risk Engine Sim &rarr;
              </a>
            </div>
          </div>

          {/* Subtle Terminal Banner Teaser */}
          <div className="mt-16 bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-xs text-neutral-400 flex items-center justify-between max-w-4xl">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="text-white font-bold">$</span>
              <span className="truncate">neovim --mode=orchestrator --target=financial-risk-ai</span>
            </div>
            <button
              onClick={() => setShowTerminal(true)}
              className="ml-4 shrink-0 bg-neutral-900 hover:bg-neutral-800 text-white px-3 py-1.5 rounded border border-neutral-700 text-[11px] transition-colors"
            >
              Launch Interactive CLI
            </button>
          </div>
        </section>


        {/* ABOUT ME SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-[2px] bg-white" />
            <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">01 // About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Bio Column */}
            <div className="lg:col-col-span-7 space-y-6 lg:col-span-7">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Architecting Low-Level Logic & Financial Risk Algorithms
              </h3>
              
              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                I am a 17-year-old engineering student based in Chennai, currently developing AI-integrated workflows to solve real-world problems. My technical foundation spans low-level programming (C, C++, Java) and AI orchestration (Claude, Gemini, Kimi, Codex).
              </p>

              <p className="text-neutral-300 text-base leading-relaxed font-normal">
                My primary focus is applying deterministic algorithmic logic to financial systems, capital allocation, and risk management — targeting strategic roles in the <strong className="text-white font-semibold">Big 4</strong> (Deloitte, PwC, EY, KPMG) where engineering rigor meets enterprise governance.
              </p>

              {/* Model UN Subsection */}
              <div className="mt-8 p-6 bg-neutral-950 border border-neutral-800 rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Globe className="w-4 h-4 text-neutral-300" />
                  <span>Geopolitical & Regulatory Risk — Model United Nations</span>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Beyond pure code, I actively participate in Model United Nations (MUN), specifically debating international governance and multilateralism on behalf of nations like <strong className="text-neutral-200">Germany</strong>. This experience drives my fundamental understanding of geopolitical risk, compliance frameworks, and multilateral policy impact on global markets.
                </p>
              </div>
            </div>

            {/* Side Key Metrics Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              
              <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2 hover:border-neutral-600 transition-colors">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">PILLAR 01</div>
                <div className="text-lg font-bold text-white">Engineering Core</div>
                <p className="text-xs text-neutral-400">SRMIST Computer Science student combining systems architecture with Neovim-optimized development speed.</p>
              </div>

              <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2 hover:border-neutral-600 transition-colors">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">PILLAR 02</div>
                <div className="text-lg font-bold text-white">Financial & Capital Risk</div>
                <p className="text-xs text-neutral-400">Algorithmic risk evaluation engines analyzing opportunity cost, asset depreciation curves, and liquidity reserve safety.</p>
              </div>

              <div className="p-6 bg-neutral-950 border border-neutral-800 rounded-lg space-y-2 hover:border-neutral-600 transition-colors">
                <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">PILLAR 03</div>
                <div className="text-lg font-bold text-white">Verifiable AI Systems</div>
                <p className="text-xs text-neutral-400">Engineering hallucination detection layers and confidence calibration between model inference and target output.</p>
              </div>

            </div>

          </div>
        </section>


        {/* SKILLS GRID SECTION */}
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-white" />
              <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">02 // Technical Skills Matrix</h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {skillCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveSkillCategory(cat)}
                  className={`px-3 py-1.5 rounded transition-all ${
                    activeSkillCategory === cat
                      ? 'bg-white text-black font-bold'
                      : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="p-5 bg-neutral-950 border border-neutral-800 rounded-lg hover:border-neutral-500 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">{skill.category}</span>
                  <span className="font-mono text-[10px] bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-300">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {skill.detail}
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* PROJECTS PORTFOLIO SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-[2px] bg-white" />
            <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">03 // Featured Engineering Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => {
              const IconComp = project.icon;
              return (
                <div
                  key={project.id}
                  className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
                >
                  <div className="space-y-4">
                    
                    {/* Icon & Title */}
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-neutral-900 border border-neutral-800 rounded text-white group-hover:bg-white group-hover:text-black transition-all">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs text-neutral-600">ID: {project.id.toUpperCase()}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tech Stack Tags & Action */}
                  <div className="pt-6 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 bg-neutral-900 hover:bg-white hover:text-black border border-neutral-800 text-white font-mono text-xs py-2.5 rounded transition-all duration-200"
                    >
                      <span>Explore System Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* IN-PROGRESS RESEARCH SECTION */}
        <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-[2px] bg-white" />
            <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">04 // Ongoing Research & Technical Papers</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchData.map((res) => {
              const IconComp = res.icon;
              return (
                <div
                  key={res.id}
                  className="bg-neutral-950 border border-neutral-800 rounded-lg p-8 space-y-6 hover:border-neutral-500 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-neutral-900 border border-neutral-800 rounded text-white">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] bg-neutral-900 border border-neutral-700 px-2.5 py-1 rounded text-white tracking-wider font-semibold">
                          {res.status}
                        </span>
                        <h3 className="text-2xl font-bold text-white mt-1">{res.title}</h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-mono text-neutral-300 italic border-l-2 border-white pl-4 py-1">
                    "{res.desc}"
                  </p>

                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {res.details}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {res.tags.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* INTERACTIVE RISK ENGINE SIMULATOR */}
        <section id="risk-sim" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-neutral-900">
          
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-white" />
              <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">05 // Interactive Student Capital Allocation Simulator</h2>
            </div>
            <span className="text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1 rounded">
              Live Algorithmic Risk Engine
            </span>
          </div>

          <div className="bg-neutral-950 border border-neutral-800 rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Student Purchase Decision Engine</h3>
                <p className="text-xs text-neutral-400 mt-1">Adjust purchase parameters to compute liquidity risk, opportunity cost, and deterministic decision index.</p>
              </div>

              {/* Slider 1: Purchase Price */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Purchase Amount (₹)</span>
                  <span className="text-white font-bold">₹{calcData.purchasePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={calcData.purchasePrice}
                  onChange={(e) => setCalcData({ ...calcData, purchasePrice: Number(e.target.value) })}
                  className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Current Liquidity */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Available Capital Reserve (₹)</span>
                  <span className="text-white font-bold">₹{calcData.currentLiquidity.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={calcData.currentLiquidity}
                  onChange={(e) => setCalcData({ ...calcData, currentLiquidity: Number(e.target.value) })}
                  className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 3: Asset Depreciation Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Expected 1-Yr Depreciation (%)</span>
                  <span className="text-white font-bold">{calcData.depreciationRate}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={calcData.depreciationRate}
                  onChange={(e) => setCalcData({ ...calcData, depreciationRate: Number(e.target.value) })}
                  className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 4: Opportunity Yield */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-300">Baseline Investment Yield (% p.a.)</span>
                  <span className="text-white font-bold">{calcData.opportunityYield}%</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="24"
                  step="1"
                  value={calcData.opportunityYield}
                  onChange={(e) => setCalcData({ ...calcData, opportunityYield: Number(e.target.value) })}
                  className="w-full accent-white bg-neutral-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                />
              </div>

            </div>

            {/* Output Display */}
            <div className="lg:col-span-6 bg-neutral-900 border border-neutral-800 rounded-lg p-6 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-xs font-mono text-neutral-400 uppercase">ALGORITHMIC DECISION</span>
                  <span className={`px-3 py-1 rounded text-xs font-mono border ${riskBadgeStyle}`}>
                    {riskStatus}
                  </span>
                </div>

                <div className="flex items-baseline justify-between pt-2">
                  <span className="text-xs font-mono text-neutral-400">Risk Severity Score:</span>
                  <span className="text-3xl font-extrabold text-white font-mono">{riskIndex} <span className="text-xs font-normal text-neutral-500">/ 100</span></span>
                </div>

                {/* Meter Bar */}
                <div className="w-full bg-black h-3 rounded-full overflow-hidden border border-neutral-800">
                  <div 
                    className="bg-white h-full transition-all duration-300"
                    style={{ width: `${riskIndex}%` }}
                  />
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-black p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-neutral-500 block">Liquidity Drain</span>
                  <span className="text-white font-bold">{liquidityRatio.toFixed(1)}% of reserves</span>
                </div>

                <div className="bg-black p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-neutral-500 block">Yearly Opportunity Cost</span>
                  <span className="text-white font-bold">₹{oppCostYearly.toLocaleString()} / yr</span>
                </div>

                <div className="bg-black p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-neutral-500 block">Yr-1 Depreciation Drag</span>
                  <span className="text-white font-bold">₹{depreciationValue.toLocaleString()}</span>
                </div>

                <div className="bg-black p-3 rounded border border-neutral-800 space-y-1">
                  <span className="text-neutral-500 block">Capital Safety</span>
                  <span className="text-white font-bold">₹{(calcData.currentLiquidity - calcData.purchasePrice).toLocaleString()} net</span>
                </div>
              </div>

              <div className="text-[11px] font-mono text-neutral-400 bg-black p-3 rounded border border-neutral-800 leading-relaxed">
                <strong className="text-white font-semibold">Engine Logic:</strong> Evaluates purchase size against immediate liquidity reserves, foregone compounding interest yields, and asset value decay.
              </div>

            </div>

          </div>
        </section>


        {/* FOOTER & CONTACT SECTION */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-[2px] bg-white" />
            <h2 className="text-xs font-mono tracking-widest text-neutral-400 uppercase">06 // Initiate Contact & Profiles</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-3xl font-extrabold text-white tracking-tight">
                Let's Discuss Systems, Risk & AI Integration.
              </h3>
              
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                Open to discussions regarding high-performance engineering projects, algorithmic risk management, verifiable AI research, or strategic Big 4 / FinTech opportunities.
              </p>

              {/* Direct Email Box */}
              <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-neutral-400 shrink-0" />
                  <span className="font-mono text-xs text-white truncate">pranavpoola69@gmail.com</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="bg-neutral-900 hover:bg-white hover:text-black border border-neutral-700 text-white p-2 rounded transition-all shrink-0 ml-2"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Stark B&W Social Profile Links */}
              <div className="pt-4 space-y-3 font-mono text-xs">
                <a
                  href="https://www.linkedin.com/in/pskpranav"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 hover:border-white hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn // www.linkedin.com/in/pskpranav</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                </a>

                <a
                  href="https://github.com/Pskp6769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-300 hover:border-white hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <span>GitHub // Pskp6769</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Stark Contact Form */}
            <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-lg p-6 sm:p-8 space-y-6">
              <h4 className="text-lg font-bold text-white font-mono">Send Direct Message</h4>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('Message dispatched! Thank you for reaching out to Pranav.'); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name / Organization"
                      className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-neutral-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-400">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="System Architecture / Risk Engine / Inquiry"
                    className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-400">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full bg-black border border-neutral-800 rounded px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors font-mono"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white hover:bg-neutral-200 text-black font-bold font-mono text-xs py-4 rounded border-2 border-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] uppercase tracking-wider"
                >
                  Send Transmission &rarr;
                </button>
              </form>
            </div>

          </div>

          {/* Footer Bottom Info */}
          <div className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
            <div>
              &copy; {new Date().getFullYear()} Pranav (పిఎస్केP). Built with React & Monochromatic Tailwind.
            </div>
            <div className="flex items-center gap-6">
              <span>SRMIST CSE '29</span>
              <span>Chennai, India</span>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-neutral-300 hover:text-white">
                [Back to Top &uarr;]
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-700 rounded-lg max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-900 border border-neutral-800 rounded text-white">
                {React.createElement(selectedProject.icon, { className: 'w-6 h-6' })}
              </div>
              <div>
                <span className="font-mono text-xs text-neutral-500">PROJECT DETAIL // {selectedProject.id.toUpperCase()}</span>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {selectedProject.fullDesc}
            </p>

            {/* Key System Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">System Architecture Highlights</h4>
              <ul className="space-y-2 text-xs font-mono text-neutral-300">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 bg-neutral-900 p-2.5 rounded border border-neutral-800">
                    <ChevronRight className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Tech Stack Tags</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((t, i) => (
                  <span key={i} className="text-xs font-mono bg-neutral-900 border border-neutral-700 text-white px-3 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-white text-black font-bold font-mono text-xs px-6 py-2.5 rounded hover:bg-neutral-200 transition-colors"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* LAZYVIM CLI OVERLAY MODAL */}
      {showTerminal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-black border border-neutral-700 rounded-lg max-w-3xl w-full p-4 font-mono text-xs space-y-4 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <div className="w-3 h-3 rounded-full bg-neutral-700" />
                <span className="text-neutral-400 text-[11px] ml-2">pranav@macbook-pro ~ neovim (LazyVim)</span>
              </div>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal Output Stream */}
            <div className="h-64 overflow-y-auto space-y-2 p-2 bg-neutral-950 border border-neutral-900 rounded">
              {terminalLogs.map((log, index) => (
                <div key={index} className={log.type === 'user' ? 'text-white font-bold' : 'text-neutral-400'}>
                  {log.text}
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-white font-bold">$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type 'help', 'bio', 'projects', 'skills', or 'risk-sim'..."
                autoFocus
                className="w-full bg-transparent text-white border-none focus:outline-none font-mono text-xs"
              />
              <button type="submit" className="hidden">Submit</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
