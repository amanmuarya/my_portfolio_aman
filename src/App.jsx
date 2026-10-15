/* 
 * 3. REUSABLE UI HELPER COMPONENTS
*/
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
    Code2,
    Terminal,
    Database,
    Cpu,
    Globe,
    Github,
    Linkedin,
    Mail,
    FileText,
    Download,
    ExternalLink,
    ChevronRight,
    ChevronUp,
    Menu,
    X,
    Sun,
    Moon,
    CheckCircle2,
    Clock,
    BookOpen,
    Sparkles,
    Layers,
    Filter,
    Copy,
    Check,
    AlertCircle,
    Award,
    Send,
    MapPin,
    FolderGit2,
    Star,
    GitFork,
    RefreshCw,
    Eye,
    Info,
    ArrowUpRight,
    CheckSquare
} from 'lucide-react';

/**

 * 1. CENTRALIZED CONFIGURATION DATA (src/data/*)
 * ============================================================================
 * Keep all personal information, skills, projects, learning milestones, and
 * certifications in centralized structures so they can be updated easily
 * without modifying UI components. Never fabricate experience or metrics.
 */

export const PERSONAL_INFO = {
    name: 'Aman Kushwaha',
    logoText: 'AK',
    roleSummary: 'Developer | Python & Data Analytics Enthusiast | Aspiring AI/ML Engineer',
    animatedRoles: [
        'Developer',
        'Python Programmer',
        'Data Analytics Enthusiast',
        'Aspiring AI/ML Engineer'
    ],
    location: 'India',
    shortIntroduction:
        'I am a technology enthusiast passionate about software development, Python programming, data analysis, and artificial intelligence. I enjoy learning new technologies, solving problems, and building practical projects that turn ideas into useful solutions.',
    careerGoal:
        'To become a skilled software developer and AI/ML professional by continuously learning, building real-world projects, and improving my technical skills.',
    aboutParagraphs: [
        'My journey in technology started with a curiosity about how software applications and data-driven systems work behind the scenes. That curiosity quickly grew into a disciplined habit of writing code, experimenting with web interfaces, and exploring how Python can be used to process and understand structured data.',
        'Rather than rushing through buzzwords, I focus on building strong fundamentals—from semantic HTML, modern CSS, and component-driven React interfaces to Python programming, data cleaning with Pandas and NumPy, and the mathematical and algorithmic foundations of Machine Learning.',
        'Every project I build is a step toward understanding how clean architecture, thoughtful user experience, and reliable data pipelines come together to solve real-world problems.'
    ],
    highlightPillars: [
        {
            id: 'learning',
            title: 'Continuous Learning',
            description:
                'Committed to mastering core computer science, web development, Python, and AI/ML concepts step by step with depth and clarity.',
            iconName: 'BookOpen'
        },
        {
            id: 'building',
            title: 'Practical Project Building',
            description:
                'Translating theoretical concepts into working web interfaces, clean Python scripts, and structured data analysis workflows.',
            iconName: 'Code2'
        },
        {
            id: 'solving',
            title: 'Problem Solving',
            description:
                'Approaching technical challenges analytically—breaking complex problems into manageable, testable steps.',
            iconName: 'Cpu'
        }
    ],
    // Configurable Social & Contact Links (Set isConfigured: true once updated with your personal URLs)
    contact: {
        email: 'aman.kushwaha.dev@example.com',
        emailConfigured: true,
        githubUrl: 'https://github.com',
        githubUsername: '', // Leave empty by default; add your real GitHub handle (e.g., 'amankushwaha') to enable automatic live repo fetching
        githubConfigured: false,
        linkedinUrl: 'https://www.linkedin.com',
        linkedinConfigured: false,
        resumeFileName: 'Aman_Kushwaha_Resume.pdf'
    },
    // Manual availability badge configuration — does not claim availability automatically
    availabilityBadge: {
        enabled: true,
        statusText: 'Focused on Learning & Building Practical Projects',
        subText: 'Configurable status in personalInfo.js',
        mode: 'learning' // 'learning' | 'open' | 'hidden'
    }
};

export const SKILLS_DATA = [
    {
        id: 'frontend',
        category: 'Frontend Development',
        description: 'Building semantic, accessible, and responsive user interfaces.',
        iconName: 'Globe',
        skills: [
            { name: 'HTML5', status: 'Comfortable Using', detail: 'Semantic markup, accessibility, SEO structure' },
            { name: 'CSS3', status: 'Comfortable Using', detail: 'Flexbox, CSS Grid, responsive media queries, animations' },
            { name: 'JavaScript', status: 'Practicing', detail: 'ES6+ syntax, DOM manipulation, async logic, array methods' },
            { name: 'React.js', status: 'Practicing', detail: 'Reusable components, hooks (useState, useEffect), props & state' },
            { name: 'Responsive Web Design', status: 'Comfortable Using', detail: 'Mobile-first layouts, fluid grids, cross-device testing' }
        ]
    },
    {
        id: 'programming',
        category: 'Programming',
        description: 'Writing clean, modular logic and automation scripts.',
        iconName: 'Terminal',
        skills: [
            { name: 'Python', status: 'Comfortable Using', detail: 'Core syntax, data structures, functions, file handling, scripting' }
        ]
    },
    {
        id: 'data-analytics',
        category: 'Data Analytics',
        description: 'Inspecting, cleaning, transforming, and exploring structured datasets.',
        iconName: 'Database',
        skills: [
            { name: 'NumPy', status: 'Practicing', detail: 'N-dimensional arrays, vectorized operations, numerical computing' },
            { name: 'Pandas', status: 'Practicing', detail: 'DataFrames, Series, indexing, filtering, grouping, aggregations' },
            { name: 'Data Cleaning', status: 'Practicing', detail: 'Handling missing values, duplicates, inconsistent data types' },
            { name: 'Data Transformation', status: 'Practicing', detail: 'Feature mapping, reshaping datasets, column engineering' },
            { name: 'Data Normalization', status: 'Practicing', detail: 'Scaling numerical values, standardizing ranges for analysis' },
            { name: 'Data Visualization', status: 'Learning', detail: 'Creating exploratory charts and visual summaries from datasets' }
        ]
    },
    {
        id: 'tools',
        category: 'Tools & Platforms',
        description: 'Version control, development environments, and modern build tools.',
        iconName: 'Layers',
        skills: [
            { name: 'Git', status: 'Comfortable Using', detail: 'Version tracking, branching, commits, repository management' },
            { name: 'GitHub', status: 'Comfortable Using', detail: 'Code hosting, documentation, project organization' },
            { name: 'VS Code', status: 'Comfortable Using', detail: 'Primary code editor, debugging, extensions, integrated terminal' },
            { name: 'Vite', status: 'Practicing', detail: 'Fast frontend build tooling and React project scaffolding' },
            { name: 'Vercel', status: 'Practicing', detail: 'Deploying static and single-page React web applications' }
        ]
    },
    {
        id: 'ai-ml',
        category: 'AI / Machine Learning',
        description: 'Exploring foundational machine learning workflows and data preparation.',
        iconName: 'Cpu',
        skills: [
            { name: 'Machine Learning Fundamentals', status: 'Learning', detail: 'Supervised vs. unsupervised concepts, train/test splits, basic models' },
            { name: 'Data Preprocessing', status: 'Practicing', detail: 'Preparing clean tabular datasets, encoding, and scaling inputs' }
        ]
    }
];

export const PROJECTS_DATA = [
    {
        id: 'responsive-react-navbar',
        title: 'Responsive React Navbar & Navigation Architecture',
        category: 'Web Development',
        tags: ['Web Development'],
        isSampleTemplate: true,
        shortDescription:
            'A reusable, accessible navigation system built with React and CSS featuring scroll-spy active link tracking, dark/light theme switching, and a touch-friendly mobile drawer.',
        overview:
            'This project focuses on solving one of the most common frontend layout challenges: building a navigation bar that works seamlessly across 320px mobile screens, tablets, and wide desktop monitors without horizontal overflow or layout shifts.',
        problemStatement:
            'Many beginner navigation bars break on smaller viewports, lack keyboard accessibility, or fail to close properly after a mobile user selects a section link.',
        solutionApproach:
            'Built a modular React Navbar component using semantic HTML (<header> and <nav>), state-driven mobile drawer toggles, IntersectionObserver-based section tracking, and keyboard Escape key listeners.',
        technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / Tailwind CSS', 'Lucide Icons'],
        features: [
            'Sticky header with backdrop blur and scroll-state border transitions',
            'Full-width responsive mobile menu that automatically closes on link selection',
            'Persistent Dark/Light theme switcher synced with localStorage',
            'Keyboard accessible navigation and visible focus states'
        ],
        challengesFaced:
            'Preventing background page scroll when the mobile menu drawer is open and ensuring active section highlighting remains accurate during smooth scrolling.',
        whatILearned:
            'Deepened my understanding of React state hooks, DOM event cleanup in useEffect, responsive breakpoints, and WAI-ARIA navigation attributes.',
        githubUrl: null, // Replace with actual repo URL e.g. 'https://github.com/yourusername/react-navbar'
        liveDemoUrl: null, // Replace with actual live URL
        visualTheme: 'web-nav'
    },
    {
        id: 'task-management-app',
        title: 'Interactive Task Management Application',
        category: 'Web Development',
        tags: ['Web Development'],
        isSampleTemplate: true,
        shortDescription:
            'A clean, client-side task organizer built with React that supports creating, filtering, prioritizing, and persisting daily learning and development tasks.',
        overview:
            'Designed as a practical React state management exercise, this application allows users to organize technical study goals and daily tasks with category tags, priority levels, and completion filters.',
        problemStatement:
            'Keeping track of daily coding practice and project milestones requires a lightweight, distraction-free interface that persists data across browser sessions without requiring a heavy backend setup.',
        solutionApproach:
            'Implemented a component-driven architecture in React where task state is synchronized with browser localStorage, paired with instant multi-criteria filtering (All, Active, Completed) and form validation.',
        technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'LocalStorage API'],
        features: [
            'Create, edit, toggle completion, and delete tasks with validation',
            'Filter tasks by completion status and priority level',
            'Automatic state persistence using browser localStorage',
            'Responsive card grid adaptable to mobile and desktop screens'
        ],
        challengesFaced:
            'Structuring state updates immutably when editing nested task properties and maintaining smooth UI transitions when filtering lists.',
        whatILearned:
            'Practiced controlled form inputs in React, immutable array operations (map, filter, reduce), and synchronizing React state with browser storage safely.',
        githubUrl: null,
        liveDemoUrl: null,
        visualTheme: 'task-app'
    },
    {
        id: 'python-data-cleaning-pipeline',
        title: 'Python Data Cleaning & Transformation Workflow',
        category: 'Python',
        tags: ['Python', 'Data Analytics'],
        isSampleTemplate: true,
        shortDescription:
            'A structured Python workflow demonstrating how raw, messy tabular datasets with missing values and inconsistent formatting are cleaned and normalized for analysis.',
        overview:
            'Real-world data is rarely ready for immediate analysis. This project demonstrates a step-by-step Python script and notebook workflow that takes raw CSV data containing null entries, duplicate rows, and inconsistent text casing, and outputs a clean, analysis-ready dataset.',
        problemStatement:
            'Raw datasets frequently contain missing numerical values, duplicate records, and unformatted strings that distort summary statistics and downstream models.',
        solutionApproach:
            'Used Python along with Pandas and NumPy to inspect dataset schemas, impute or remove missing values based on column distribution, standardize categorical strings, and normalize numerical features.',
        technologies: ['Python', 'Pandas', 'NumPy', 'Jupyter / VS Code'],
        features: [
            'Automated detection and summary reporting of missing values and duplicate rows',
            'Data type conversion and string standardization across categorical columns',
            'Min-Max normalization and Z-score scaling examples for numerical columns',
            'Export of cleaned dataset with before-and-after comparison summary'
        ],
        challengesFaced:
            'Deciding when to drop rows with missing values versus imputing them with median/mean statistics without introducing bias into the dataset.',
        whatILearned:
            'Gained hands-on familiarity with Pandas DataFrame manipulation, vectorized operations in NumPy, and systematic data preprocessing techniques.',
        githubUrl: null,
        liveDemoUrl: null,
        visualTheme: 'python-clean'
    },
    {
        id: 'exploratory-data-analysis-pandas',
        title: 'Exploratory Data Analysis (EDA) using Pandas & NumPy',
        category: 'Data Analytics',
        tags: ['Data Analytics', 'Python'],
        isSampleTemplate: true,
        shortDescription:
            'An exploratory data analysis study uncovering patterns, summary statistics, and feature correlations from structured tabular datasets using Pandas and NumPy.',
        overview:
            'This project applies descriptive statistics and data aggregation techniques to understand dataset distributions, identify outliers, and answer structured analytical questions using Python data tools.',
        problemStatement:
            'Before applying any predictive modeling or making conclusions from data, analysts need a systematic way to summarize distributions, spot anomalies, and understand relationships between variables.',
        solutionApproach:
            'Developed a structured EDA workflow using NumPy and Pandas to compute central tendencies, interquartile ranges, group-by aggregations, and cross-tabulations.',
        technologies: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'Data Transformation'],
        features: [
            'Comprehensive descriptive statistics (mean, median, variance, percentiles)',
            'Multi-column group-by aggregations and pivot table summaries',
            'Outlier detection using Interquartile Range (IQR) filtering',
            'Clear markdown documentation explaining analytical observations'
        ],
        challengesFaced:
            'Writing clean, vectorized Pandas queries instead of slow iterative loops when aggregating multi-condition subgroups.',
        whatILearned:
            'Strengthened my fluency in Pandas groupby operations, boolean indexing, NumPy statistical functions, and communicating analytical findings clearly.',
        githubUrl: null,
        liveDemoUrl: null,
        visualTheme: 'eda-analytics'
    },
    {
        id: 'beginner-machine-learning-project',
        title: 'Beginner Machine Learning Exploration Project',
        category: 'Python',
        tags: ['Python', 'Data Analytics'],
        isSampleTemplate: true,
        shortDescription:
            'A foundational machine learning practice project exploring data preprocessing, train-test splitting, and basic supervised model training and evaluation in Python.',
        overview:
            'Built as part of my ongoing learning journey into Artificial Intelligence and Machine Learning, this project connects my data preprocessing skills with foundational supervised learning concepts.',
        problemStatement:
            'Understanding how cleaned tabular features are fed into a machine learning algorithm—and how to evaluate whether a model is actually learning rather than memorizing—requires hands-on experimentation.',
        solutionApproach:
            'Prepared a clean dataset using Pandas and NumPy, performed feature scaling and train/test splitting, trained a baseline supervised model, and inspected evaluation metrics.',
        technologies: ['Python', 'NumPy', 'Pandas', 'Data Preprocessing', 'ML Fundamentals'],
        features: [
            'End-to-end data preparation pipeline prior to model training',
            'Proper train/test dataset split to avoid data leakage',
            'Baseline supervised model training and prediction workflow',
            'Evaluation of model predictions using foundational error and accuracy metrics'
        ],
        challengesFaced:
            'Understanding the importance of fitting scalers only on the training set before transforming the test set to prevent data leakage.',
        whatILearned:
            'Learned the core lifecycle of a machine learning experiment, how data quality directly impacts model behavior, and why proper validation splits are essential.',
        githubUrl: null,
        liveDemoUrl: null,
        visualTheme: 'ml-beginner'
    }
];

export const LEARNING_JOURNEY_DATA = [
    {
        id: 'milestone-1',
        title: 'Web Development Fundamentals',
        status: 'Completed Core',
        timeframe: 'Foundation Stage',
        summary:
            'Built a solid grounding in how the web works, semantic HTML5 document structure, modern CSS3 styling, Flexbox, CSS Grid, and mobile-first responsive web design.',
        topics: ['HTML5 Semantic Elements', 'CSS3 & Responsive Layouts', 'Flexbox & Grid', 'Web Accessibility Basics']
    },
    {
        id: 'milestone-2',
        title: 'JavaScript & React.js Development',
        status: 'Actively Practicing',
        timeframe: 'Frontend Architecture',
        summary:
            'Learned core JavaScript programming (ES6+, DOM manipulation, asynchronous operations) and progressed to building modular, component-based user interfaces with React.js and Vite.',
        topics: ['JavaScript ES6+', 'React Components & Props', 'React Hooks (useState, useEffect)', 'Interactive UI State']
    },
    {
        id: 'milestone-3',
        title: 'Python Programming',
        status: 'Completed Core',
        timeframe: 'Core Programming',
        summary:
            'Developed proficiency in Python syntax, control flow, functions, modular scripting, file handling, and core data structures (lists, dictionaries, tuples, sets).',
        topics: ['Python Syntax & Logic', 'Data Structures', 'Functions & Modules', 'Problem Solving with Python']
    },
    {
        id: 'milestone-4',
        title: 'NumPy & Pandas for Data Analysis',
        status: 'Actively Practicing',
        timeframe: 'Data Manipulation',
        summary:
            'Focused on numerical computing and tabular data manipulation in Python—working with NumPy arrays and Pandas DataFrames to inspect, filter, and aggregate datasets.',
        topics: ['NumPy Arrays & Vectorization', 'Pandas Series & DataFrames', 'Data Indexing & Filtering', 'Groupby & Aggregations']
    },
    {
        id: 'milestone-5',
        title: 'Data Cleaning, Transformation & Normalization',
        status: 'Actively Practicing',
        timeframe: 'Data Preparation',
        summary:
            'Practicing real-world data preparation techniques including handling missing values, removing duplicates, standardizing formats, and normalizing numerical features.',
        topics: ['Missing Value Handling', 'Data Type Standardization', 'Feature Scaling & Normalization', 'Exploratory Data Analysis']
    },
    {
        id: 'milestone-6',
        title: 'Backend Development Fundamentals',
        status: 'Currently Learning',
        timeframe: 'Full-Stack Exploration',
        summary:
            'Exploring how client applications communicate with servers, HTTP request/response lifecycles, RESTful API design principles, and backend integration.',
        topics: ['HTTP & REST Concepts', 'JSON Data Exchange', 'API Integration', 'Server-Side Fundamentals']
    },
    {
        id: 'milestone-7',
        title: 'Exploring AI and Machine Learning',
        status: 'Currently Learning',
        timeframe: 'Current Focus & Goal',
        summary:
            'Studying the foundational concepts of Artificial Intelligence and Machine Learning—connecting data preprocessing pipelines with supervised learning algorithms and model evaluation.',
        topics: ['ML Workflow Fundamentals', 'Data Preprocessing for ML', 'Supervised Learning Concepts', 'Model Evaluation Basics']
    }
];

/**
 * Certifications & Achievements Data
 * Kept empty by default as instructed ("If no verified entries are provided, show an elegant empty state... Never generate fake credentials").
 * A sample schema structure is documented below for easy updates.
 */
export const CERTIFICATIONS_DATA = [
    // Example schema when adding real verified entries later:
    // {
    //   id: 'cert-1',
    //   title: 'Course or Certification Title',
    //   issuer: 'Issuing Organization',
    //   completionDate: 'Month Year',
    //   credentialUrl: 'https://...'
    // }
];

/**
 * Manually maintained repository templates shown when live GitHub API username is not yet configured.
 * Explicitly marked as template structures without fake star counts.
 */
export const MANUAL_GITHUB_REPOS = [
    {
        id: 'repo-portfolio',
        name: 'developer-portfolio',
        description: 'Personal developer portfolio built with React.js, Tailwind CSS, and Lucide icons featuring centralized configuration and responsive design.',
        language: 'JavaScript / React',
        isTemplatePlaceholder: true,
        topics: ['react', 'vite', 'tailwindcss', 'portfolio']
    },
    {
        id: 'repo-python-data',
        name: 'python-data-analysis-practice',
        description: 'Collection of Python scripts and notebooks practicing data cleaning, transformation, and exploratory analysis using Pandas and NumPy.',
        language: 'Python',
        isTemplatePlaceholder: true,
        topics: ['python', 'pandas', 'numpy', 'data-cleaning']
    },
    {
        id: 'repo-ml-foundations',
        name: 'ml-preprocessing-explorations',
        description: 'Hands-on learning repository covering tabular data normalization, feature preparation, and foundational machine learning workflows.',
        language: 'Python',
        isTemplatePlaceholder: true,
        topics: ['machine-learning', 'data-preprocessing', 'python']
    }
];

/**
 * ============================================================================
 * 2. REAL PDF RESUME GENERATOR UTILITY
 * ============================================================================
 * Generates a valid, self-contained PDF 1.4 document in memory containing
 * Aman Kushwaha's accurate portfolio profile so clicking "Download Resume"
 * downloads an actual working .pdf file immediately.
 */
function createResumePDFBlob(info, skills) {
    const escapePDFText = (str) =>
        String(str)
            .replace(/\\/g, '\\\\')
            .replace(/\(/g, '\\(')
            .replace(/\)/g, '\\)');

    const lines = [
        { text: info.name.toUpperCase(), size: 20, bold: true, spacing: 26 },
        { text: info.roleSummary, size: 11, bold: true, spacing: 16 },
        { text: `Location: ${info.location}  |  Email: ${info.contact.email}`, size: 9.5, bold: false, spacing: 22 },
        { text: 'PROFILE SUMMARY', size: 12, bold: true, spacing: 16 },
        { text: 'Technology enthusiast passionate about software development, Python programming,', size: 10, bold: false, spacing: 14 },
        { text: 'data analysis, and artificial intelligence. Focused on learning new technologies,', size: 10, bold: false, spacing: 14 },
        { text: 'solving problems, and building practical projects that turn ideas into useful solutions.', size: 10, bold: false, spacing: 20 },
        { text: 'CAREER OBJECTIVE', size: 12, bold: true, spacing: 16 },
        { text: 'To become a skilled software developer and AI/ML professional by continuously learning,', size: 10, bold: false, spacing: 14 },
        { text: 'building real-world projects, and improving my technical skills.', size: 10, bold: false, spacing: 22 },
        { text: 'TECHNICAL SKILLS (BY FAMILIARITY)', size: 12, bold: true, spacing: 16 }
    ];

    skills.forEach((cat) => {
        const skillList = cat.skills.map((s) => `${s.name} (${s.status})`).join(', ');
        lines.push({ text: `${cat.category}:`, size: 10.5, bold: true, spacing: 14 });
        // Wrap long skill lists cleanly
        if (skillList.length > 82) {
            const mid = skillList.lastIndexOf(', ', 82);
            lines.push({ text: `  ${skillList.slice(0, mid)}`, size: 9.5, bold: false, spacing: 13 });
            lines.push({ text: `  ${skillList.slice(mid + 2)}`, size: 9.5, bold: false, spacing: 15 });
        } else {
            lines.push({ text: `  ${skillList}`, size: 9.5, bold: false, spacing: 15 });
        }
    });

    lines.push({ text: 'KEY LEARNING & PRACTICE AREAS', size: 12, bold: true, spacing: 18 });
    lines.push({ text: '- Frontend Web Development: Semantic HTML5, CSS3, Responsive Design, JavaScript, React.js', size: 9.5, bold: false, spacing: 14 });
    lines.push({ text: '- Python & Data Analytics: Python scripting, NumPy arrays, Pandas DataFrames, Data Cleaning', size: 9.5, bold: false, spacing: 14 });
    lines.push({ text: '- Data Preparation & AI/ML: Data transformation, normalization, preprocessing, ML fundamentals', size: 9.5, bold: false, spacing: 14 });
    lines.push({ text: '- Developer Workflow: Git version control, GitHub, VS Code, Vite, Vercel deployment', size: 9.5, bold: false, spacing: 24 });
    lines.push({ text: 'Note: Replace public/resume.pdf in the project repository to serve your custom static PDF file.', size: 8.5, bold: false, spacing: 14 });

    let y = 750;
    let contentStream = 'BT\n';
    lines.forEach((line) => {
        const fontKey = line.bold ? '/F2' : '/F1';
        contentStream += `${fontKey} ${line.size} Tf\n`;
        contentStream += `1 0 0 1 50 ${y} Tm\n`;
        contentStream += `(${escapePDFText(line.text)}) Tj\n`;
        y -= line.spacing;
    });
    contentStream += 'ET\n';

    const objects = [
        '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
        '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
        '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n',
        `4 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream\nendobj\n`,
        '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
        '6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n'
    ];

    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    objects.forEach((obj) => {
        offsets.push(pdf.length);
        pdf += obj;
    });

    const xrefStart = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += '0000000000 65535 f \n';
    for (let i = 1; i <= objects.length; i++) {
        pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    return new Blob([pdf], { type: 'application/pdf' });
}

/**
 * ============================================================================
function SectionHeader({ badge, title, subtitle, isDark }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark
              ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
              : 'bg-cyan-50 text-cyan-700 border-cyan-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight ${
          isDark ? 'text-slate-100' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Custom SVG Project Illustration Component
 * Avoids external broken image URLs and renders crisp, responsive developer visuals.
 * 
 * ===================================================================================
 */


function ProjectVisualThumbnail({ theme, isDark }) {
    const bgClass = isDark
        ? 'bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900'
        : 'bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50/40';

    return (
        <div className={`relative w-full h-48 overflow-hidden border-b ${isDark ? 'border-slate-800' : 'border-slate-200'} ${bgClass} flex items-center justify-center p-6`}>
            {/* Subtle architectural grid pattern */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(${isDark ? '#38bdf8' : '#0284c7'} 1px, transparent 1px)`,
                    backgroundSize: '18px 18px'
                }}
                aria-hidden="true"
            />

            {theme === 'web-nav' && (
                <div className={`relative z-10 w-full max-w-xs rounded-lg border p-3 shadow-lg ${isDark ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-cyan-500/20">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                            <span className={`text-xs font-bold font-mono ${isDark ? 'text-white' : 'text-slate-800'}`}>AK.nav</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-8 rounded bg-cyan-500/40" />
                            <span className={`h-2 w-8 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                            <span className={`h-2 w-8 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                            <span className="h-4 w-4 rounded-full bg-purple-500/30 border border-purple-500/50" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className={`h-3 w-3/4 rounded ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`} />
                        <div className={`h-2 w-1/2 rounded ${isDark ? 'bg-slate-800/70' : 'bg-slate-100'}`} />
                    </div>
                </div>
            )}

            {theme === 'task-app' && (
                <div className={`relative z-10 w-full max-w-xs rounded-lg border p-3.5 shadow-lg ${isDark ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-cyan-400 font-semibold">Tasks [3]</span>
                        <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-400 font-medium">LocalStorage</span>
                    </div>
                    <div className="space-y-2">
                        {[
                            { done: true, label: 'Practice React Hooks' },
                            { done: true, label: 'Build Responsive Grid' },
                            { done: false, label: 'Add Filter Controls' }
                        ].map((item, idx) => (
                            <div key={idx} className={`flex items-center gap-2 px-2.5 py-1.5 rounded border text-xs ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                                <span className={`w-3.5 h-3.5 rounded flex items-center justify-center ${item.done ? 'bg-cyan-500 text-slate-950' : 'border border-slate-500'}`}>
                                    {item.done && <Check className="w-2.5 h-2.5 stroke-3" />}
                                </span>
                                <span className={item.done ? 'line-through opacity-60' : ''}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {theme === 'python-clean' && (
                <div className={`relative z-10 w-full max-w-xs rounded-lg border p-3.5 shadow-lg font-mono text-xs ${isDark ? 'bg-slate-950/90 border-slate-700 text-slate-300' : 'bg-slate-900 border-slate-700 text-slate-200'}`}>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800">
                        <span>clean_pipeline.py</span>
                        <span className="text-cyan-400">Pandas / NumPy</span>
                    </div>
                    <div className="space-y-1 text-[11px] leading-relaxed">
                        <div><span className="text-purple-400">df</span> = df.drop_duplicates()</div>
                        <div><span className="text-purple-400">df</span>[<span className="text-emerald-400">'score'</span>] = df[<span className="text-emerald-400">'score'</span>].fillna(median)</div>
                        <div><span className="text-cyan-400"># Normalize numerical range [0, 1]</span></div>
                        <div>scaled = (x - x.min()) / (x.max() - x.min())</div>
                    </div>
                </div>
            )}

            {theme === 'eda-analytics' && (
                <div className={`relative z-10 w-full max-w-xs rounded-lg border p-3.5 shadow-lg ${isDark ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className={`text-xs font-mono font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>df.describe()</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400">EDA Summary</span>
                    </div>
                    <div className="flex items-end gap-2.5 h-20 pt-2 px-2">
                        {[40, 68, 52, 88, 60, 75, 45].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                <div
                                    className="w-full rounded-t bg-linear-to-t from-cyan-600 to-cyan-400 transition-all duration-300"
                                    style={{ height: `${h}%` }}
                                />
                                <span className="text-[9px] font-mono text-slate-500">Q{i + 1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {theme === 'ml-beginner' && (
                <div className={`relative z-10 w-full max-w-xs rounded-lg border p-3.5 shadow-lg ${isDark ? 'bg-slate-950/90 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-purple-400 font-semibold">ML Workflow</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/15 text-purple-400 font-medium">Learning</span>
                    </div>
                    <div className="flex items-center justify-between gap-1.5 text-[11px] font-mono">
                        <div className={`flex-1 p-2 rounded border text-center ${isDark ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'}`}>
                            Raw Data
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <div className={`flex-1 p-2 rounded border text-center ${isDark ? 'bg-cyan-950/40 border-cyan-800/60 text-cyan-300' : 'bg-cyan-50 border-cyan-200 text-cyan-800'}`}>
                            Preprocess
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <div className={`flex-1 p-2 rounded border text-center ${isDark ? 'bg-purple-950/40 border-purple-800/60 text-purple-300' : 'bg-purple-50 border-purple-200 text-purple-800'}`}>
                            Evaluate
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

/**
 * ============================================================================
 * 4. MAIN PORTFOLIO APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
    // Theme state (Dark by default, persisted to localStorage)
    const [isDark, setIsDark] = useState(() => {
        try {
            const saved = localStorage.getItem('ak_portfolio_theme');
            return saved ? saved === 'dark' : true;
        } catch {
            return true;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('ak_portfolio_theme', isDark ? 'dark' : 'light');
        } catch {
            // Ignore storage errors in restricted environments
        }
        document.title = `${PERSONAL_INFO.name} | Developer Portfolio`;
    }, [isDark]);

    // Navigation & Scroll Spy State
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [showBackToTop, setShowBackToTop] = useState(false);

    // Animated Hero Role Cycling
    const [roleIndex, setRoleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.animatedRoles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    // Hero Code Editor Card State
    const [activeCodeTab, setActiveCodeTab] = useState('python');
    const [codeCopied, setCodeCopied] = useState(false);

    // Skills Filter State
    const [skillCategoryFilter, setSkillCategoryFilter] = useState('All');
    const [skillStatusFilter, setSkillStatusFilter] = useState('All');

    // Projects Filter & Detail Modal State
    const [projectFilter, setProjectFilter] = useState('All Projects');
    const [selectedProject, setSelectedProject] = useState(null);

    // Learning Journey Filter State
    const [journeyFilter, setJourneyFilter] = useState('All');

    // GitHub Live Explorer State (Optional live GitHub API integration with graceful fallback)
    const [githubUsernameInput, setGithubUsernameInput] = useState(
        PERSONAL_INFO.contact.githubUsername || ''
    );
    const [githubRepos, setGithubRepos] = useState([]);
    const [githubLoading, setGithubLoading] = useState(false);
    const [githubError, setGithubError] = useState(null);
    const [usingLiveGithub, setUsingLiveGithub] = useState(false);

    // Certifications Schema Preview Toggle
    const [showCertTemplatePreview, setShowCertTemplatePreview] = useState(false);

    // Modals: Resume Preview & Architecture/Deployment Guide
    const [resumeModalOpen, setResumeModalOpen] = useState(false);
    const [docsModalOpen, setDocsModalOpen] = useState(false);

    // Contact Form State
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '' // Hidden anti-spam field
    });
    const [contactErrors, setContactErrors] = useState({});
    const [contactStatus, setContactStatus] = useState('idle'); // 'idle' | 'submitting' | 'mailto_ready'
    const [emailCopied, setEmailCopied] = useState(false);
    const [formattedMsgCopied, setFormattedMsgCopied] = useState(false);

    // Toast Notification for unconfigured placeholder links
    const [toastMessage, setToastMessage] = useState(null);
    const triggerToast = (msg) => {
        setToastMessage(msg);
    };
    useEffect(() => {
        if (!toastMessage) return;
        const timer = setTimeout(() => setToastMessage(null), 4000);
        return () => clearTimeout(timer);
    }, [toastMessage]);

    // Scroll Spy & Back-To-Top Listener
    const navItems = useMemo(
        () => [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About' },
            { id: 'skills', label: 'Skills' },
            { id: 'projects', label: 'Projects' },
            { id: 'journey', label: 'Learning Journey' },
            { id: 'github', label: 'GitHub' },
            { id: 'certifications', label: 'Certifications' },
            { id: 'contact', label: 'Contact' }
        ],
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 450);

            const scrollPosition = window.scrollY + 160;
            for (let i = navItems.length - 1; i >= 0; i--) {
                const sectionEl = document.getElementById(navItems[i].id);
                if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
                    setActiveSection(navItems[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    // Close modals or mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setSelectedProject(null);
                setResumeModalOpen(false);
                setDocsModalOpen(false);
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);



    // hellosir
    // SectionHeader Component
  
    const SectionHeader = ({ title, subtitle }) => {
        return (
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-500 dark:text-white-300 mb-4">
                    {title}
                </h2>
                <div className="w-20 h-1.5 bg-cyan-600 mx-auto rounded-full mb-4"></div>
                {subtitle && (
                    <p className="text-gray-500 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                        {subtitle}
                    </p>
                )}
            </div>
        );
    };
    

    // Smooth Scroll Helper
    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Real File Resume Download Handler
    const handleDownloadResume = () => {
        try {
            const blob = createResumePDFBlob(PERSONAL_INFO, SKILLS_DATA);
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = PERSONAL_INFO.contact.resumeFileName || 'Aman_Kushwaha_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            setTimeout(() => URL.revokeObjectURL(url), 3000);
            triggerToast('Downloading Aman_Kushwaha_Resume.pdf...');
        } catch (err) {
            triggerToast('Unable to generate resume file automatically. Opening Resume Preview instead.');
            setResumeModalOpen(true);
        }
    };

    // Copy Hero Code Snippet
    const heroCodeSnippets = {
        python: `# developer_profile.py
class DeveloperPortfolio:
    def __init__(self):
        self.name = "Aman Kushwaha"
        self.location = "India"
        self.core_stack = ["Python", "React.js", "JavaScript", "HTML5/CSS3"]
        self.data_tools = ["NumPy", "Pandas", "Data Cleaning", "Normalization"]
        self.currently_exploring = ["Machine Learning Fundamentals", "AI Systems"]

    def mission(self) -> str:
        return (
            "Continuously learning, solving problems, and building "
            "practical software & data-driven projects."
        )

if __name__ == "__main__":
    aman = DeveloperPortfolio()
    print(aman.mission())`,
        javascript: `// learning_focus.js
export const developerFocus = {
  name: "Aman Kushwaha",
  role: "Developer & Aspiring AI/ML Engineer",
  frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite"],
  dataAnalytics: ["Python", "NumPy", "Pandas", "Data Preprocessing"],
  principles: [
    "Write clean, maintainable, and semantic code",
    "Build responsive interfaces for every screen size",
    "Turn raw data into structured, reliable insights"
  ]
};`
    };

    const handleCopyHeroCode = () => {
        navigator.clipboard?.writeText(heroCodeSnippets[activeCodeTab]);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 2000);
    };

    // Filtered Skills
    const filteredSkillsCategories = useMemo(() => {
        return SKILLS_DATA.filter((cat) =>
            skillCategoryFilter === 'All' ? true : cat.category === skillCategoryFilter
        )
            .map((cat) => ({
                ...cat,
                skills: cat.skills.filter((s) =>
                    skillStatusFilter === 'All' ? true : s.status === skillStatusFilter
                )
            }))
            .filter((cat) => cat.skills.length > 0);
    }, [skillCategoryFilter, skillStatusFilter]);

    // Filtered Projects
    const filteredProjects = useMemo(() => {
        if (projectFilter === 'All Projects') return PROJECTS_DATA;
        return PROJECTS_DATA.filter((project) => project.tags.includes(projectFilter));
    }, [projectFilter]);

    // Filtered Learning Journey
    const filteredJourney = useMemo(() => {
        if (journeyFilter === 'All') return LEARNING_JOURNEY_DATA;
        return LEARNING_JOURNEY_DATA.filter((item) => item.status === journeyFilter);
    }, [journeyFilter]);

    // Live GitHub Repository Fetcher (Optional interactive feature with full error & rate-limit handling)
    const fetchGithubRepositories = async (usernameToFetch) => {
        const cleanUser = usernameToFetch.trim();
        if (!cleanUser) {
            setUsingLiveGithub(false);
            setGithubRepos([]);
            setGithubError(null);
            return;
        }

        setGithubLoading(true);
        setGithubError(null);
        try {
            const response = await fetch(
                `https://api.github.com/users/${encodeURIComponent(cleanUser)}/repos?sort=updated&per_page=6`,
                {
                    headers: {
                        Accept: 'application/vnd.github.v3+json'
                    }
                }
            );

            if (response.status === 404) {
                throw new Error(`GitHub user "${cleanUser}" was not found. Check the spelling or update personalInfo.js.`);
            }
            if (response.status === 403) {
                throw new Error('GitHub API rate limit reached. Falling back to manually configured repository data.');
            }
            if (!response.ok) {
                throw new Error(`GitHub API returned status ${response.status}.`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error('Unexpected response format from GitHub API.');
            }

            setGithubRepos(data);
            setUsingLiveGithub(true);
        } catch (err) {
            setGithubError(err.message || 'Failed to fetch live GitHub repositories.');
            setUsingLiveGithub(false);
        } finally {
            setGithubLoading(false);
        }
    };

    useEffect(() => {
        if (PERSONAL_INFO.contact.githubUsername) {
            fetchGithubRepositories(PERSONAL_INFO.contact.githubUsername);
        }
    }, []);

    // Contact Form Validation & Honest Submission
    const validateContactForm = () => {
        const errors = {};
        if (!contactForm.name.trim() || contactForm.name.trim().length < 2) {
            errors.name = 'Please enter your name (at least 2 characters).';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!contactForm.email.trim() || !emailRegex.test(contactForm.email.trim())) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!contactForm.subject.trim() || contactForm.subject.trim().length < 3) {
            errors.subject = 'Please enter a clear subject (at least 3 characters).';
        }
        if (!contactForm.message.trim() || contactForm.message.trim().length < 10) {
            errors.message = 'Please enter a message of at least 10 characters.';
        }
        return errors;
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Anti-spam honeypot check
        if (contactForm.honeypot) {
            return;
        }

        const validationErrors = validateContactForm();
        setContactErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setContactStatus('submitting');
        setTimeout(() => {
            setContactStatus('mailto_ready');
            const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${contactForm.subject.trim()}`);
            const mailtoBody = encodeURIComponent(
                `Hello Aman,\n\n${contactForm.message.trim()}\n\n---\nFrom: ${contactForm.name.trim()}\nReply Email: ${contactForm.email.trim()}`
            );
            window.location.href = `mailto:${PERSONAL_INFO.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
        }, 350);
    };

    const handleCopyEmail = () => {
        navigator.clipboard?.writeText(PERSONAL_INFO.contact.email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2500);
    };

    const handleCopyFormattedMessage = () => {
        const formatted = `To: ${PERSONAL_INFO.contact.email}\nFrom: ${contactForm.name} <${contactForm.email}>\nSubject: ${contactForm.subject}\n\n${contactForm.message}`;
        navigator.clipboard?.writeText(formatted);
        setFormattedMsgCopied(true);
        setTimeout(() => setFormattedMsgCopied(false), 2500);
    };

    // Status Badge Helper for Skills
    const getSkillBadgeClasses = (status) => {
        if (status === 'Comfortable Using') {
            return isDark
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                : 'bg-emerald-50 text-emerald-700 border-emerald-200';
        }
        if (status === 'Practicing') {
            return isDark
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
                : 'bg-cyan-50 text-cyan-700 border-cyan-200';
        }
        return isDark
            ? 'bg-purple-500/10 text-purple-300 border-purple-500/25'
            : 'bg-purple-50 text-purple-700 border-purple-200';
    };

    return (
        <div
            className={`min-h-screen transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden ${isDark ? 'bg-[#0a0f1d] text-slate-100' : 'bg-slate-50 text-slate-900'
                }`}
        >
            {/* Accessible Skip-to-Content Link */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold"
            >
                Skip to main content
            </a>

            {/* Non-intrusive Toast Notification */}
            {toastMessage && (
                <div
                    role="status"
                    aria-live="polite"
                    className={`fixed bottom-6 right-6 z-[90] max-w-sm px-4 py-3 rounded-xl border shadow-xl flex items-center gap-3 transition-all ${isDark
                        ? 'bg-slate-900/95 border-cyan-500/40 text-slate-100'
                        : 'bg-white border-cyan-600/30 text-slate-800'
                        }`}
                >
                    <Info className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-sm font-medium">{toastMessage}</span>
                    <button
                        onClick={() => setToastMessage(null)}
                        className="ml-auto p-1 rounded hover:bg-slate-800/50 text-slate-400"
                        aria-label="Close notification"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            )}

            {/* ====================================================================
          A. STICKY NAVIGATION BAR
      ==================================================================== */}
            <header
                className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-200 ${isDark
                    ? 'bg-[#0a0f1d]/85 border-slate-800/80'
                    : 'bg-white/85 border-slate-200/90'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3">
                    {/* Personal Logo: AK */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
                        aria-label="Aman Kushwaha Home"
                    >
                        <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-lg tracking-tight border transition-transform group-hover:scale-105 ${isDark
                                ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-500/40 text-cyan-400 shadow-sm shadow-cyan-500/10'
                                : 'bg-gradient-to-br from-cyan-50 to-slate-100 border-cyan-300 text-cyan-700'
                                }`}
                        >
                            {PERSONAL_INFO.logoText}
                        </div>
                        <div className="hidden sm:block">
                            <span
                                className={`block font-bold text-sm tracking-tight leading-none ${isDark ? 'text-slate-100' : 'text-slate-900'
                                    }`}
                            >
                                {PERSONAL_INFO.name}
                            </span>
                            <span className="block text-[11px] font-mono text-cyan-500 mt-0.5">
                                Developer Portfolio
                            </span>
                        </div>
                    </button>

                    {/* Desktop Navigation Links */}
                    <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isActive
                                        ? isDark
                                            ? 'bg-cyan-500/15 text-cyan-400 font-semibold'
                                            : 'bg-cyan-50 text-cyan-700 font-semibold'
                                        : isDark
                                            ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Right Action Controls: Docs Guide, Theme Toggle, Resume CTA, Mobile Menu Button */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                        <button
                            onClick={() => setDocsModalOpen(true)}
                            className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium border transition-colors ${isDark
                                ? 'border-slate-800 bg-slate-900/80 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400'
                                : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-cyan-300 hover:text-cyan-700'
                                }`}
                            title="View Project Folder Structure, Setup & Vercel Deployment Guide"
                        >
                            <FolderGit2 className="w-3.5 h-3.5 text-cyan-500" />
                            <span>Setup & Docs</span>
                        </button>

                        <button
                            onClick={() => setIsDark((prev) => !prev)}
                            className={`p-2.5 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isDark
                                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                            title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                        >
                            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                        </button>

                        <button
                            onClick={handleDownloadResume}
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-sm shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                        >
                            <Download className="w-4 h-4" />
                            <span>Resume</span>
                        </button>

                        {/* Mobile Hamburger Button */}
                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className={`lg:hidden p-2.5 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isDark
                                ? 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800'
                                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                }`}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-navigation-menu"
                            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* Full-Width Responsive Mobile Navigation Drawer */}
                {mobileMenuOpen && (
                    <nav
                        id="mobile-navigation-menu"
                        aria-label="Mobile Navigation"
                        className={`lg:hidden w-full border-b px-4 pt-3 pb-6 space-y-2 ${isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
                            }`}
                    >
                        <div className="grid grid-cols-1 gap-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${isActive
                                            ? isDark
                                                ? 'bg-cyan-500/15 text-cyan-400 font-semibold'
                                                : 'bg-cyan-50 text-cyan-700 font-semibold'
                                            : isDark
                                                ? 'text-slate-300 hover:bg-slate-800/70'
                                                : 'text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronRight className="w-4 h-4 opacity-60" />
                                    </button>
                                );
                            })}
                        </div>

                        <div className="pt-3 mt-3 border-t border-slate-800/40 flex flex-col sm:flex-row gap-2.5">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    handleDownloadResume();
                                }}
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all"
                            >
                                <Download className="w-4 h-4" />
                                <span>Download Resume (PDF)</span>
                            </button>
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setDocsModalOpen(true);
                                }}
                                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border ${isDark
                                    ? 'border-slate-700 bg-slate-900 text-slate-200'
                                    : 'border-slate-300 bg-slate-100 text-slate-800'
                                    }`}
                            >
                                <FolderGit2 className="w-4 h-4 text-cyan-500" />
                                <span>Project Setup & Deployment Guide</span>
                            </button>
                        </div>
                    </nav>
                )}
            </header>

            <main id="main-content">
                {/* ====================================================================
            B. HERO SECTION
        ==================================================================== */}
                <section
                    id="home"
                    className="relative pt-10 pb-20 md:pt-20 md:pb-28 overflow-hidden"
                >
                    {/* Subtle Ambient Background Glow (Non-distracting) */}
                    <div
                        className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute top-32 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
                        aria-hidden="true"
                    />

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
                            {/* Left Column: Introduction & Actions */}
                            <div className="lg:col-span-7 space-y-6">
                                {/* Manually Configurable Availability / Focus Badge */}
                                {PERSONAL_INFO.availabilityBadge.enabled && (
                                    <div
                                        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border ${isDark
                                            ? 'bg-slate-900/90 border-slate-800 text-slate-300'
                                            : 'bg-white border-slate-200 text-slate-700 shadow-sm'
                                            }`}
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                                        </span>
                                        <span>{PERSONAL_INFO.availabilityBadge.statusText}</span>
                                    </div>
                                )}

                                <div className="space-y-2">
                                    <p
                                        className={`text-sm sm:text-base font-mono font-medium tracking-wide ${isDark ? 'text-cyan-400' : 'text-cyan-700'
                                            }`}
                                    >
                                        Hello, I&apos;m
                                    </p>
                                    <h1
                                        className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${isDark ? 'text-white' : 'text-slate-900'
                                            }`}
                                    >
                                        {PERSONAL_INFO.name}
                                    </h1>

                                    {/* Animated Cycling Role Text */}
                                    <div className="h-10 sm:h-12 flex items-center">
                                        <span
                                            className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${isDark
                                                ? 'from-cyan-400 via-sky-300 to-purple-400'
                                                : 'from-cyan-700 via-sky-600 to-purple-700'
                                                } bg-clip-text text-transparent transition-all duration-300`}
                                            aria-live="polite"
                                        >
                                            {PERSONAL_INFO.animatedRoles[roleIndex]}
                                        </span>
                                        <span
                                            className="ml-1.5 inline-block w-0.5 h-6 sm:h-7 bg-cyan-400 animate-pulse"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>

                                {/* Concise Introduction */}
                                <p
                                    className={`text-base sm:text-lg leading-relaxed max-w-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'
                                        }`}
                                >
                                    {PERSONAL_INFO.shortIntroduction}
                                </p>

                                {/* Location & Quick Focus Pill */}
                                <div
                                    className={`flex flex-wrap items-center gap-4 text-xs sm:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-cyan-400" />
                                        {PERSONAL_INFO.location}
                                    </span>
                                    <span aria-hidden="true">•</span>
                                    <span className="inline-flex items-center gap-1.5 font-mono">
                                        <Terminal className="w-4 h-4 text-purple-400" />
                                        Python • React.js • Data Analytics • AI/ML
                                    </span>
                                </div>

                                {/* Primary & Secondary Action Buttons */}
                                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                    >
                                        <span>Explore My Projects</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </button>

                                    <button
                                        onClick={handleDownloadResume}
                                        className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold border transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${isDark
                                            ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-100 border-slate-700'
                                            : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm'
                                            }`}
                                    >
                                        <Download className="w-4 h-4 text-cyan-400" />
                                        <span>Download Resume</span>
                                    </button>

                                    <button
                                        onClick={() => setResumeModalOpen(true)}
                                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-sm font-medium border transition-colors ${isDark
                                            ? 'border-slate-800 bg-slate-900/40 text-slate-300 hover:text-cyan-400 hover:border-slate-700'
                                            : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-cyan-700'
                                            }`}
                                        title="Preview Resume in Browser"
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span>Preview</span>
                                    </button>
                                </div>

                                {/* Social Links Row */}
                                <div className="pt-2 flex items-center gap-3">
                                    <span
                                        className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-500'
                                            }`}
                                    >
                                        Connect:
                                    </span>
                                    <a
                                        href={PERSONAL_INFO.contact.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                                            : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 shadow-sm'
                                            }`}
                                        aria-label="GitHub Profile"
                                        title="GitHub Profile (Configurable in personalInfo.js)"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={PERSONAL_INFO.contact.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                                            : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 shadow-sm'
                                            }`}
                                        aria-label="LinkedIn Profile"
                                        title="LinkedIn Profile (Configurable in personalInfo.js)"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className={`p-2.5 rounded-xl border transition-all hover:-translate-y-0.5 ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                                            : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-700 hover:border-cyan-300 shadow-sm'
                                            }`}
                                        aria-label="Scroll to Contact Section"
                                        title="Contact via Email"
                                    >
                                        <Mail className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Right Column: Code-Editor Inspired Visual Card */}
                            <div className="lg:col-span-5">
                                <div
                                    className={`rounded-2xl border overflow-hidden shadow-2xl transition-colors ${isDark
                                        ? 'bg-[#0f172a] border-slate-800 shadow-cyan-950/20'
                                        : 'bg-slate-900 border-slate-800 shadow-slate-300'
                                        }`}
                                >
                                    {/* Editor Window Top Bar */}
                                    <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                                            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                                            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                        </div>

                                        {/* File Tabs */}
                                        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                                            <button
                                                onClick={() => setActiveCodeTab('python')}
                                                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${activeCodeTab === 'python'
                                                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                                                    : 'text-slate-400 hover:text-slate-200'
                                                    }`}
                                            >
                                                profile.py
                                            </button>
                                            <button
                                                onClick={() => setActiveCodeTab('javascript')}
                                                className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${activeCodeTab === 'javascript'
                                                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                                                    : 'text-slate-400 hover:text-slate-200'
                                                    }`}
                                            >
                                                focus.js
                                            </button>
                                        </div>

                                        <button
                                            onClick={handleCopyHeroCode}
                                            className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono text-slate-400 hover:text-cyan-300 bg-slate-900 border border-slate-800"
                                            aria-label="Copy code snippet"
                                        >
                                            {codeCopied ? (
                                                <>
                                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                    <span className="text-emerald-400">Copied</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Copy className="w-3.5 h-3.5" />
                                                    <span>Copy</span>
                                                </>
                                            )}
                                        </button>
                                    </div>

                                    {/* Code Content Area */}
                                    <div className="p-4 sm:p-5 overflow-x-auto">
                                        <pre className="text-xs sm:text-[13px] font-mono leading-relaxed text-slate-200">
                                            <code>{heroCodeSnippets[activeCodeTab]}</code>
                                        </pre>
                                    </div>

                                    {/* Terminal Output Footer */}
                                    <div className="px-4 py-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                                        <div className="flex items-center gap-2 truncate">
                                            <span className="text-emerald-400">➜</span>
                                            <span className="text-cyan-400">~/aman-kushwaha</span>
                                            <span className="truncate">status: learning &amp; building</span>
                                        </div>
                                        <span className="text-[11px] text-slate-500 shrink-0">UTF-8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ====================================================================
            C. ABOUT ME SECTION
        ==================================================================== */}
                <section
                    id="about"
                    className={`py-20 border-t ${isDark
                        ? 'bg-[#0d1326] border-slate-800/80'
                        : 'bg-white border-slate-200/80'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="About Me"
                            title="Driven by Curiosity, Guided by Practical Building"
                            subtitle="Exploring software development, data analysis, and machine learning through consistent hands-on practice."
                            isDark={isDark}
                        />


                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            {/* Left Narrative Column */}
                            <div className="lg:col-span-7 space-y-5">
                                {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
                                    <p
                                        key={idx}
                                        className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'
                                            }`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}

                                {/* Career Goal Callout Box */}
                                <div
                                    className={`mt-6 p-6 rounded-2xl border ${isDark
                                        ? 'bg-gradient-to-r from-cyan-950/40 via-slate-900 to-purple-950/30 border-cyan-500/30'
                                        : 'bg-gradient-to-r from-cyan-50/80 to-slate-50 border-cyan-200'
                                        }`}
                                >
                                    <div className="flex items-start gap-3.5">
                                        <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 shrink-0 mt-0.5">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3
                                                className={`text-base font-bold uppercase tracking-wider font-mono ${isDark ? 'text-cyan-400' : 'text-cyan-800'
                                                    }`}
                                            >
                                                Career Goal
                                            </h3>
                                            <p
                                                className={`mt-1.5 text-base leading-relaxed font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'
                                                    }`}
                                            >
                                                {PERSONAL_INFO.careerGoal}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Three Highlight Cards */}
                            <div className="lg:col-span-5 space-y-4">
                                {PERSONAL_INFO.highlightPillars.map((pillar) => {
                                    const IconComp =
                                        pillar.iconName === 'BookOpen'
                                            ? BookOpen
                                            : pillar.iconName === 'Code2'
                                                ? Code2
                                                : Cpu;
                                    return (
                                        <div
                                            key={pillar.id}
                                            className={`p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${isDark
                                                ? 'bg-[#0f172a] border-slate-800 hover:border-cyan-500/40'
                                                : 'bg-slate-50 border-slate-200 hover:border-cyan-300 shadow-sm'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`p-3 rounded-xl border shrink-0 ${isDark
                                                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                                                        : 'bg-white border-cyan-200 text-cyan-700'
                                                        }`}
                                                >
                                                    <IconComp className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h3
                                                        className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                                            }`}
                                                    >
                                                        {pillar.title}
                                                    </h3>
                                                    <p
                                                        className={`mt-1.5 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                            }`}
                                                    >
                                                        {pillar.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ====================================================================
            D. TECHNICAL SKILLS SECTION
        ==================================================================== */}
                <section
                    id="skills"
                    className={`py-20 border-t ${isDark ? 'bg-[#0a0f1d] border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Technical Skills"
                            title="Technologies & Current Familiarity"
                            subtitle="Organized by domain with transparent familiarity indicators instead of arbitrary percentage bars."
                            isDark={isDark}
                        />

                        {/* Familiarity Legend & Filter Bar */}
                        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Category Pills */}
                            <div
                                className="flex flex-wrap items-center justify-center gap-2"
                                role="group"
                                aria-label="Filter skills by category"
                            >
                                {['All', ...SKILLS_DATA.map((c) => c.category)].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSkillCategoryFilter(cat)}
                                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${skillCategoryFilter === cat
                                            ? 'bg-cyan-500 text-slate-950 border-cyan-500 font-semibold shadow-sm shadow-cyan-500/20'
                                            : isDark
                                                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>

                            {/* Status Filter Pills */}
                            <div
                                className="flex flex-wrap items-center justify-center gap-2"
                                role="group"
                                aria-label="Filter skills by familiarity status"
                            >
                                {['All', 'Comfortable Using', 'Practicing', 'Learning'].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setSkillStatusFilter(status)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${skillStatusFilter === status
                                            ? isDark
                                                ? 'bg-purple-500/20 text-purple-300 border-purple-500/50 font-semibold'
                                                : 'bg-purple-100 text-purple-800 border-purple-300 font-semibold'
                                            : isDark
                                                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                                                : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                                            }`}
                                    >
                                        {status === 'All' ? 'All Levels' : status}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Skills Categories Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredSkillsCategories.map((categoryGroup) => {
                                const CategoryIcon =
                                    categoryGroup.iconName === 'Globe'
                                        ? Globe
                                        : categoryGroup.iconName === 'Terminal'
                                            ? Terminal
                                            : categoryGroup.iconName === 'Database'
                                                ? Database
                                                : categoryGroup.iconName === 'Layers'
                                                    ? Layers
                                                    : Cpu;

                                return (
                                    <div
                                        key={categoryGroup.id}
                                        className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 hover:border-cyan-500/40 ${isDark
                                            ? 'bg-[#0f172a] border-slate-800'
                                            : 'bg-white border-slate-200 shadow-sm'
                                            }`}
                                    >
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div
                                                    className={`p-2.5 rounded-xl border ${isDark
                                                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                                                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                                                        }`}
                                                >
                                                    <CategoryIcon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3
                                                        className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                                            }`}
                                                    >
                                                        {categoryGroup.category}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p
                                                className={`text-xs sm:text-sm mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                    }`}
                                            >
                                                {categoryGroup.description}
                                            </p>

                                            <div className="space-y-3">
                                                {categoryGroup.skills.map((skill) => (
                                                    <div
                                                        key={skill.name}
                                                        className={`p-3 rounded-xl border transition-colors ${isDark
                                                            ? 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700'
                                                            : 'bg-slate-50 border-slate-200/80 hover:border-slate-300'
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                                            <span
                                                                className={`font-semibold text-sm ${isDark ? 'text-slate-100' : 'text-slate-900'
                                                                    }`}
                                                            >
                                                                {skill.name}
                                                            </span>
                                                            <span
                                                                className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${getSkillBadgeClasses(
                                                                    skill.status
                                                                )}`}
                                                            >
                                                                {skill.status}
                                                            </span>
                                                        </div>
                                                        <p
                                                            className={`mt-1 text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                                }`}
                                                        >
                                                            {skill.detail}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ====================================================================
            E. FEATURED PROJECTS SECTION
        ==================================================================== */}
                <section
                    id="projects"
                    className={`py-20 border-t ${isDark ? 'bg-[#0d1326] border-slate-800/80' : 'bg-white border-slate-200/80'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Featured Projects"
                            title="Practical Development & Data Projects"
                            subtitle="Filterable showcase of web development, Python programming, and data analytics projects. Sample entries are clearly marked and structured in projects.js for easy customization."
                            isDark={isDark}
                        />

                        {/* Project Category Filter Buttons */}
                        <div
                            className="flex flex-wrap items-center justify-center gap-2.5 mb-12"
                            role="group"
                            aria-label="Filter projects by category"
                        >
                            {['All Projects', 'Web Development', 'Python', 'Data Analytics'].map(
                                (category) => (
                                    <button
                                        key={category}
                                        onClick={() => setProjectFilter(category)}
                                        className={`px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${projectFilter === category
                                            ? 'bg-cyan-500 text-slate-950 border-cyan-500 font-semibold shadow-md shadow-cyan-500/20'
                                            : isDark
                                                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                                                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                            {filteredProjects.map((project) => (
                                <article
                                    key={project.id}
                                    className={`group rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${isDark
                                        ? 'bg-[#0f172a] border-slate-800 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/20'
                                        : 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/70'
                                        }`}
                                >
                                    <div>
                                        {/* Visual SVG Preview */}
                                        <ProjectVisualThumbnail
                                            theme={project.visualTheme}
                                            isDark={isDark}
                                        />

                                        {/* Card Body */}
                                        <div className="p-6">
                                            {/* Category & Sample Data Transparency Badge */}
                                            <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                                                <span
                                                    className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${isDark
                                                        ? 'bg-cyan-500/10 text-cyan-400'
                                                        : 'bg-cyan-50 text-cyan-700'
                                                        }`}
                                                >
                                                    {project.category}
                                                </span>
                                                {project.isSampleTemplate && (
                                                    <span
                                                        className={`text-[11px] font-mono px-2 py-0.5 rounded border ${isDark
                                                            ? 'bg-amber-500/10 text-amber-300 border-amber-500/25'
                                                            : 'bg-amber-50 text-amber-800 border-amber-200'
                                                            }`}
                                                        title="Sample placeholder structure — replace with your actual project details in src/data/projects.js"
                                                    >
                                                        Sample Data Template
                                                    </span>
                                                )}
                                            </div>

                                            <h3
                                                className={`text-xl font-bold leading-snug group-hover:text-cyan-400 transition-colors ${isDark ? 'text-white' : 'text-slate-900'
                                                    }`}
                                            >
                                                {project.title}
                                            </h3>

                                            <p
                                                className={`mt-2.5 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                    }`}
                                            >
                                                {project.shortDescription}
                                            </p>

                                            {/* Key Features Preview */}
                                            <ul
                                                className={`mt-4 space-y-1.5 text-xs ${isDark ? 'text-slate-300' : 'text-slate-700'
                                                    }`}
                                            >
                                                {project.features.slice(0, 2).map((feat, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                                                        <span>{feat}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Tech Stack Badges */}
                                            <div className="mt-5 flex flex-wrap gap-1.5">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className={`px-2.5 py-1 rounded-md text-xs font-mono border ${isDark
                                                            ? 'bg-slate-900 border-slate-800 text-slate-300'
                                                            : 'bg-slate-100 border-slate-200 text-slate-700'
                                                            }`}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card Footer Actions */}
                                    <div
                                        className={`px-6 py-4 border-t flex items-center justify-between gap-2 ${isDark
                                            ? 'bg-slate-900/50 border-slate-800/80'
                                            : 'bg-slate-50 border-slate-200/80'
                                            }`}
                                    >
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1"
                                        >
                                            <span>View Details</span>
                                            <ChevronRight className="w-4 h-4" />
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {project.githubUrl ? (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`p-2 rounded-lg border transition-colors ${isDark
                                                        ? 'border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                                                        : 'border-slate-300 text-slate-700 hover:text-cyan-700'
                                                        }`}
                                                    aria-label={`GitHub repository for ${project.title}`}
                                                >
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        triggerToast(
                                                            'Repository URL not added yet. Add your GitHub link in src/data/projects.js.'
                                                        )
                                                    }
                                                    className={`p-2 rounded-lg border transition-colors opacity-75 hover:opacity-100 ${isDark
                                                        ? 'border-slate-800 text-slate-400 hover:border-slate-700'
                                                        : 'border-slate-200 text-slate-500 hover:border-slate-300'
                                                        }`}
                                                    title="GitHub URL configurable in projects.js"
                                                    aria-label="GitHub repository link not configured yet"
                                                >
                                                    <Github className="w-4 h-4" />
                                                </button>
                                            )}

                                            {project.liveDemoUrl ? (
                                                <a
                                                    href={project.liveDemoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`p-2 rounded-lg border transition-colors ${isDark
                                                        ? 'border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40'
                                                        : 'border-slate-300 text-slate-700 hover:text-cyan-700'
                                                        }`}
                                                    aria-label={`Live demo for ${project.title}`}
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </a>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        triggerToast(
                                                            'Live Demo URL not configured yet. Update liveDemoUrl in src/data/projects.js.'
                                                        )
                                                    }
                                                    className={`p-2 rounded-lg border transition-colors opacity-75 hover:opacity-100 ${isDark
                                                        ? 'border-slate-800 text-slate-400 hover:border-slate-700'
                                                        : 'border-slate-200 text-slate-500 hover:border-slate-300'
                                                        }`}
                                                    title="Live Demo URL configurable in projects.js"
                                                    aria-label="Live demo link not configured yet"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ====================================================================
            G. LEARNING JOURNEY SECTION
        ==================================================================== */}
                <section
                    id="journey"
                    className={`py-20 border-t ${isDark ? 'bg-[#0a0f1d] border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                        }`}
                >
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Learning Journey"
                            title="Technical Progression & Milestones"
                            subtitle="A transparent roadmap of topics I have completed, skills I am actively practicing, and areas I am currently exploring."
                            isDark={isDark}
                        />

                        {/* Milestone Filter Controls */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                            {['All', 'Completed Core', 'Actively Practicing', 'Currently Learning'].map(
                                (status) => (
                                    <button
                                        key={status}
                                        onClick={() => setJourneyFilter(status)}
                                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${journeyFilter === status
                                            ? 'bg-cyan-500 text-slate-950 border-cyan-500 font-semibold'
                                            : isDark
                                                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                                                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                                            }`}
                                    >
                                        {status}
                                    </button>
                                )
                            )}
                        </div>

                        {/* Vertical Timeline */}
                        <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-8">
                            {filteredJourney.map((milestone, index) => {
                                const isCompleted = milestone.status === 'Completed Core';
                                const isPracticing = milestone.status === 'Actively Practicing';

                                return (
                                    <div key={milestone.id} className="relative group">
                                        {/* Timeline Node Dot */}
                                        <div
                                            className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform group-hover:scale-125 ${isCompleted
                                                ? 'bg-emerald-400 border-slate-950'
                                                : isPracticing
                                                    ? 'bg-cyan-400 border-slate-950'
                                                    : 'bg-purple-400 border-slate-950'
                                                }`}
                                            aria-hidden="true"
                                        />

                                        <div
                                            className={`p-6 rounded-2xl border transition-all ${isDark
                                                ? 'bg-[#0f172a] border-slate-800 hover:border-cyan-500/40'
                                                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
                                                }`}
                                        >
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                                <span className="text-xs font-mono text-cyan-400 font-semibold">
                                                    Step 0{index + 1} • {milestone.timeframe}
                                                </span>

                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${isCompleted
                                                        ? isDark
                                                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                                                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                                        : isPracticing
                                                            ? isDark
                                                                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25'
                                                                : 'bg-cyan-50 text-cyan-700 border-cyan-200'
                                                            : isDark
                                                                ? 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                                                                : 'bg-purple-50 text-purple-700 border-purple-200'
                                                        }`}
                                                >
                                                    {isCompleted ? (
                                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                                    ) : (
                                                        <Clock className="w-3.5 h-3.5" />
                                                    )}
                                                    {milestone.status}
                                                </span>
                                            </div>

                                            <h3
                                                className={`text-lg sm:text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                                    }`}
                                            >
                                                {milestone.title}
                                            </h3>

                                            <p
                                                className={`mt-2 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                    }`}
                                            >
                                                {milestone.summary}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {milestone.topics.map((topic) => (
                                                    <span
                                                        key={topic}
                                                        className={`px-2.5 py-1 rounded-md text-xs font-mono border ${isDark
                                                            ? 'bg-slate-900 border-slate-800 text-slate-300'
                                                            : 'bg-slate-50 border-slate-200 text-slate-700'
                                                            }`}
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ====================================================================
            H. GITHUB SECTION
        ==================================================================== */}
                <section
                    id="github"
                    className={`py-20 border-t ${isDark ? 'bg-[#0d1326] border-slate-800/80' : 'bg-white border-slate-200/80'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Open Source & Code"
                            title="GitHub Profile & Repository Showcase"
                            subtitle="Connect your GitHub username in personalInfo.js (or test live below) to fetch real public repositories via the GitHub REST API. Never displays fabricated star counts."
                            isDark={isDark}
                        />

                        {/* Top Profile & Live API Fetch Bar */}
                        <div
                            className={`mb-10 p-6 rounded-2xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${isDark
                                ? 'bg-[#0f172a] border-slate-800'
                                : 'bg-slate-50 border-slate-200'
                                }`}
                        >
                            <div className="flex items-start sm:items-center gap-4">
                                <div
                                    className={`p-3.5 rounded-2xl border shrink-0 ${isDark
                                        ? 'bg-slate-900 border-slate-700 text-white'
                                        : 'bg-white border-slate-300 text-slate-900'
                                        }`}
                                >
                                    <Github className="w-8 h-8" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2.5 flex-wrap">
                                        <h3
                                            className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                                }`}
                                        >
                                            {PERSONAL_INFO.name} on GitHub
                                        </h3>
                                        <span
                                            className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${usingLiveGithub
                                                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                                                : isDark
                                                    ? 'bg-slate-800 text-slate-300 border-slate-700'
                                                    : 'bg-slate-200 text-slate-700 border-slate-300'
                                                }`}
                                        >
                                            {usingLiveGithub
                                                ? `Live API: @${githubUsernameInput}`
                                                : 'Manual Repository Configuration'}
                                        </span>
                                    </div>
                                    <p
                                        className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'
                                            }`}
                                    >
                                        Explore my code repositories, Python scripts, and frontend experiments.
                                    </p>
                                </div>
                            </div>

                            {/* Optional Live GitHub Username Loader */}
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    fetchGithubRepositories(githubUsernameInput);
                                }}
                                className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
                            >
                                <label htmlFor="github-username-input" className="sr-only">
                                    GitHub Username for Live API Fetch
                                </label>
                                <input
                                    id="github-username-input"
                                    type="text"
                                    value={githubUsernameInput}
                                    onChange={(e) => setGithubUsernameInput(e.target.value)}
                                    placeholder="Enter GitHub username to fetch live..."
                                    className={`px-3.5 py-2.5 rounded-xl text-sm font-mono border focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:w-64 ${isDark
                                        ? 'bg-slate-950 border-slate-800 text-slate-100 placeholder:text-slate-500'
                                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                                        }`}
                                />
                                <button
                                    type="submit"
                                    disabled={githubLoading}
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 transition-all"
                                >
                                    <RefreshCw
                                        className={`w-4 h-4 ${githubLoading ? 'animate-spin' : ''}`}
                                    />
                                    <span>{githubLoading ? 'Fetching...' : 'Load Live Repos'}</span>
                                </button>
                                {usingLiveGithub && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setGithubUsernameInput('');
                                            setUsingLiveGithub(false);
                                            setGithubRepos([]);
                                            setGithubError(null);
                                        }}
                                        className={`px-3 py-2.5 rounded-xl text-xs font-mono border ${isDark
                                            ? 'border-slate-700 text-slate-300 hover:bg-slate-800'
                                            : 'border-slate-300 text-slate-700 hover:bg-slate-200'
                                            }`}
                                    >
                                        Reset
                                    </button>
                                )}
                            </form>
                        </div>

                        {/* Error State */}
                        {githubError && (
                            <div
                                role="alert"
                                className={`mb-8 p-4 rounded-xl border flex items-start gap-3 ${isDark
                                    ? 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                                    : 'bg-rose-50 border-rose-200 text-rose-800'
                                    }`}
                            >
                                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                                <div className="text-sm">
                                    <p className="font-semibold">GitHub API Notice</p>
                                    <p className="mt-0.5 opacity-90">{githubError}</p>
                                </div>
                            </div>
                        )}

                        {/* Repository Showcase Grid */}
                        {githubLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[1, 2, 3].map((n) => (
                                    <div
                                        key={n}
                                        className={`p-6 rounded-2xl border animate-pulse h-48 ${isDark
                                            ? 'bg-slate-900/50 border-slate-800'
                                            : 'bg-slate-100 border-slate-200'
                                            }`}
                                    />
                                ))}
                            </div>
                        ) : usingLiveGithub ? (
                            githubRepos.length === 0 ? (
                                <div
                                    className={`p-10 rounded-2xl border text-center ${isDark
                                        ? 'bg-[#0f172a] border-slate-800 text-slate-400'
                                        : 'bg-slate-50 border-slate-200 text-slate-600'
                                        }`}
                                >
                                    No public repositories found for @{githubUsernameInput}.
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {githubRepos.map((repo) => (
                                        <a
                                            key={repo.id}
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`group p-6 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-1 ${isDark
                                                ? 'bg-[#0f172a] border-slate-800 hover:border-cyan-500/40'
                                                : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
                                                }`}
                                        >
                                            <div>
                                                <div className="flex items-center justify-between gap-2 mb-3">
                                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold truncate">
                                                        <FolderGit2 className="w-4 h-4 shrink-0" />
                                                        <span className="truncate">{repo.name}</span>
                                                    </div>
                                                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-cyan-400 shrink-0" />
                                                </div>
                                                <p
                                                    className={`text-sm leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                        }`}
                                                >
                                                    {repo.description || 'No description provided in repository.'}
                                                </p>
                                            </div>

                                            <div className="mt-5 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono text-slate-400">
                                                <span>{repo.language || 'Code'}</span>
                                                <div className="flex items-center gap-3">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Star className="w-3.5 h-3.5 text-amber-400" />
                                                        {repo.stargazers_count}
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <GitFork className="w-3.5 h-3.5 text-cyan-400" />
                                                        {repo.forks_count}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )
                        ) : (
                            /* Manually Maintained Repository Structure (No fabricated star metrics) */
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {MANUAL_GITHUB_REPOS.map((repo) => (
                                    <div
                                        key={repo.id}
                                        className={`p-6 rounded-2xl border flex flex-col justify-between ${isDark
                                            ? 'bg-[#0f172a] border-slate-800'
                                            : 'bg-white border-slate-200 shadow-sm'
                                            }`}
                                    >
                                        <div>
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-bold">
                                                    <FolderGit2 className="w-4 h-4 shrink-0" />
                                                    <span>{repo.name}</span>
                                                </div>
                                                <span
                                                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isDark
                                                        ? 'bg-slate-900 border-slate-700 text-slate-400'
                                                        : 'bg-slate-100 border-slate-300 text-slate-600'
                                                        }`}
                                                >
                                                    Template
                                                </span>
                                            </div>

                                            <p
                                                className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                                    }`}
                                            >
                                                {repo.description}
                                            </p>

                                            <div className="mt-4 flex flex-wrap gap-1.5">
                                                {repo.topics.map((topic) => (
                                                    <span
                                                        key={topic}
                                                        className={`px-2 py-0.5 rounded text-[11px] font-mono ${isDark
                                                            ? 'bg-slate-900 text-slate-400'
                                                            : 'bg-slate-100 text-slate-600'
                                                            }`}
                                                    >
                                                        #{topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-3 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono">
                                            <span className="text-cyan-400">{repo.language}</span>
                                            <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>
                                                Configure in personalInfo.js
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* ====================================================================
            I. CERTIFICATIONS AND ACHIEVEMENTS SECTION
        ==================================================================== */}
                <section
                    id="certifications"
                    className={`py-20 border-t ${isDark ? 'bg-[#0a0f1d] border-slate-800/80' : 'bg-slate-50 border-slate-200/80'
                        }`}
                >
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Credentials"
                            title="Certifications & Achievements"
                            subtitle="Verified courses, hackathons, and technical credentials."
                            isDark={isDark}
                        />

                        {CERTIFICATIONS_DATA.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {CERTIFICATIONS_DATA.map((cert) => (
                                    <div
                                        key={cert.id}
                                        className={`p-6 rounded-2xl border ${isDark ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
                                            }`}
                                    >
                                        <h3 className="text-lg font-bold">{cert.title}</h3>
                                        <p className="text-sm text-cyan-400 mt-1">{cert.issuer}</p>
                                        <p className="text-xs text-slate-400 mt-1">{cert.completionDate}</p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            /* Honest, Elegant Empty State (as strictly required when no verified credentials are provided yet) */
                            <div
                                className={`p-8 sm:p-10 rounded-2xl border text-center max-w-2xl mx-auto ${isDark
                                    ? 'bg-[#0f172a] border-slate-800'
                                    : 'bg-white border-slate-200 shadow-sm'
                                    }`}
                            >
                                <div
                                    className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center border mb-4 ${isDark
                                        ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                                        : 'bg-cyan-50 border-cyan-200 text-cyan-700'
                                        }`}
                                >
                                    <Award className="w-7 h-7" />
                                </div>

                                <h3
                                    className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                        }`}
                                >
                                    Certifications and achievements will be added here.
                                </h3>

                                <p
                                    className={`mt-2.5 text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'
                                        }`}
                                >
                                    As I complete verified courses, technical certifications, and hackathons in
                                    software development, Python, and AI/ML, they will be published here with
                                    direct credential verification links.
                                </p>

                                <div className="mt-6">
                                    <button
                                        onClick={() => setShowCertTemplatePreview((prev) => !prev)}
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono border transition-colors ${isDark
                                            ? 'bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-500/40'
                                            : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                                            }`}
                                    >
                                        <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                                        <span>
                                            {showCertTemplatePreview
                                                ? 'Hide Card Schema Preview'
                                                : 'Preview Entry Format (certifications.js)'}
                                        </span>
                                    </button>
                                </div>

                                {showCertTemplatePreview && (
                                    <div
                                        className={`mt-6 p-5 rounded-xl border text-left ${isDark
                                            ? 'bg-slate-950/90 border-slate-800'
                                            : 'bg-slate-50 border-slate-200'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-mono text-amber-400">
                                                Schema Preview (Not a claimed credential)
                                            </span>
                                            <span className="text-xs font-mono text-slate-500">
                                                src/data/certifications.js
                                            </span>
                                        </div>
                                        <div className="text-sm font-semibold">
                                            [Certificate Title] — Issuing Organization
                                        </div>
                                        <div className="text-xs text-slate-400 mt-1">
                                            Completed: [Month Year] • Credential URL: [Verification Link]
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {/* ====================================================================
            J. CONTACT SECTION
        ==================================================================== */}
                <section
                    id="contact"
                    className={`py-20 border-t ${isDark ? 'bg-[#0d1326] border-slate-800/80' : 'bg-white border-slate-200/80'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionHeader
                            badge="Get In Touch"
                            title="Let's Connect & Collaborate"
                            subtitle="Have a question, project idea, or internship opportunity? Reach out via email or connect with me on GitHub and LinkedIn."
                            isDark={isDark}
                        />

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                            {/* Left Column: Direct Contact Cards */}
                            <div className="lg:col-span-5 space-y-4">
                                <div
                                    className={`p-6 rounded-2xl border ${isDark
                                        ? 'bg-[#0f172a] border-slate-800'
                                        : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <h3
                                        className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'
                                            }`}
                                    >
                                        Direct Contact Channels
                                    </h3>
                                    <p
                                        className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'
                                            }`}
                                    >
                                        All contact details below are managed through{' '}
                                        <code className="font-mono text-cyan-400">src/data/personalInfo.js</code>.
                                    </p>

                                    <div className="space-y-3.5">
                                        {/* Email Card */}
                                        <div
                                            className={`p-4 rounded-xl border flex items-center justify-between gap-3 ${isDark
                                                ? 'bg-slate-900/90 border-slate-800'
                                                : 'bg-white border-slate-200'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <div className="min-w-0">
                                                    <span className="block text-xs font-mono text-slate-400">
                                                        Email (Configurable Placeholder)
                                                    </span>
                                                    <a
                                                        href={`mailto:${PERSONAL_INFO.contact.email}`}
                                                        className="block text-sm font-semibold truncate hover:text-cyan-400 transition-colors"
                                                    >
                                                        {PERSONAL_INFO.contact.email}
                                                    </a>
                                                </div>
                                            </div>
                                            <button
                                                onClick={handleCopyEmail}
                                                className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border shrink-0 transition-colors ${isDark
                                                    ? 'border-slate-700 bg-slate-800 text-slate-200 hover:border-cyan-500/40'
                                                    : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                    }`}
                                                aria-label="Copy email address"
                                            >
                                                {emailCopied ? 'Copied!' : 'Copy'}
                                            </button>
                                        </div>

                                        {/* GitHub Link Card */}
                                        <a
                                            href={PERSONAL_INFO.contact.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition-colors ${isDark
                                                ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                                                : 'bg-white border-slate-200 hover:border-cyan-300'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                                                    <Github className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs font-mono text-slate-400">
                                                        GitHub Profile
                                                    </span>
                                                    <span className="text-sm font-semibold">
                                                        Explore Code &amp; Repositories
                                                    </span>
                                                </div>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-slate-400" />
                                        </a>

                                        {/* LinkedIn Link Card */}
                                        <a
                                            href={PERSONAL_INFO.contact.linkedinUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-4 rounded-xl border flex items-center justify-between gap-3 transition-colors ${isDark
                                                ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40'
                                                : 'bg-white border-slate-200 hover:border-cyan-300'
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                                                    <Linkedin className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <span className="block text-xs font-mono text-slate-400">
                                                        LinkedIn Profile
                                                    </span>
                                                    <span className="text-sm font-semibold">
                                                        Professional Network
                                                    </span>
                                                </div>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-slate-400" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Validated Contact Form (Mailto-connected with transparency) */}
                            <div className="lg:col-span-7">
                                <form
                                    onSubmit={handleContactSubmit}
                                    noValidate
                                    className={`p-6 sm:p-8 rounded-2xl border ${isDark
                                        ? 'bg-[#0f172a] border-slate-800'
                                        : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
                                        <h3
                                            className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'
                                                }`}
                                        >
                                            Prepare a Direct Message
                                        </h3>
                                        <span
                                            className={`text-xs font-mono px-2.5 py-1 rounded border ${isDark
                                                ? 'bg-slate-900 border-slate-700 text-slate-300'
                                                : 'bg-white border-slate-300 text-slate-600'
                                                }`}
                                        >
                                            Validated Mailto Client Action
                                        </span>
                                    </div>

                                    {/* Hidden Honeypot Input for Spam Protection */}
                                    <div className="hidden" aria-hidden="true">
                                        <label htmlFor="website-field">Website</label>
                                        <input
                                            id="website-field"
                                            type="text"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={contactForm.honeypot}
                                            onChange={(e) =>
                                                setContactForm({ ...contactForm, honeypot: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {/* Name Field */}
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-700'
                                                    }`}
                                            >
                                                Your Name <span className="text-cyan-400">*</span>
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                value={contactForm.name}
                                                onChange={(e) => {
                                                    setContactForm({ ...contactForm, name: e.target.value });
                                                    if (contactErrors.name) {
                                                        setContactErrors({ ...contactErrors, name: null });
                                                    }
                                                }}
                                                placeholder="e.g., Rahul Sharma"
                                                aria-invalid={Boolean(contactErrors.name)}
                                                aria-describedby={contactErrors.name ? 'error-name' : undefined}
                                                className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${contactErrors.name
                                                    ? 'border-rose-500'
                                                    : isDark
                                                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                                                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                                                    }`}
                                            />
                                            {contactErrors.name && (
                                                <p id="error-name" className="mt-1.5 text-xs text-rose-400">
                                                    {contactErrors.name}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email Field */}
                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-700'
                                                    }`}
                                            >
                                                Your Email <span className="text-cyan-400">*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                value={contactForm.email}
                                                onChange={(e) => {
                                                    setContactForm({ ...contactForm, email: e.target.value });
                                                    if (contactErrors.email) {
                                                        setContactErrors({ ...contactErrors, email: null });
                                                    }
                                                }}
                                                placeholder="you@example.com"
                                                aria-invalid={Boolean(contactErrors.email)}
                                                aria-describedby={contactErrors.email ? 'error-email' : undefined}
                                                className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${contactErrors.email
                                                    ? 'border-rose-500'
                                                    : isDark
                                                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                                                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                                                    }`}
                                            />
                                            {contactErrors.email && (
                                                <p id="error-email" className="mt-1.5 text-xs text-rose-400">
                                                    {contactErrors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Subject Field */}
                                    <div className="mt-5">
                                        <label
                                            htmlFor="contact-subject"
                                            className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-700'
                                                }`}
                                        >
                                            Subject <span className="text-cyan-400">*</span>
                                        </label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            value={contactForm.subject}
                                            onChange={(e) => {
                                                setContactForm({ ...contactForm, subject: e.target.value });
                                                if (contactErrors.subject) {
                                                    setContactErrors({ ...contactErrors, subject: null });
                                                }
                                            }}
                                            placeholder="Internship Opportunity / Project Collaboration"
                                            aria-invalid={Boolean(contactErrors.subject)}
                                            aria-describedby={contactErrors.subject ? 'error-subject' : undefined}
                                            className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${contactErrors.subject
                                                ? 'border-rose-500'
                                                : isDark
                                                    ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                                                    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                                                }`}
                                        />
                                        {contactErrors.subject && (
                                            <p id="error-subject" className="mt-1.5 text-xs text-rose-400">
                                                {contactErrors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message Field */}
                                    <div className="mt-5">
                                        <label
                                            htmlFor="contact-message"
                                            className={`block text-sm font-medium mb-1.5 ${isDark ? 'text-slate-200' : 'text-slate-700'
                                                }`}
                                        >
                                            Message <span className="text-cyan-400">*</span>
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            rows={4}
                                            value={contactForm.message}
                                            onChange={(e) => {
                                                setContactForm({ ...contactForm, message: e.target.value });
                                                if (contactErrors.message) {
                                                    setContactErrors({ ...contactErrors, message: null });
                                                }
                                            }}
                                            placeholder="Write your message here..."
                                            aria-invalid={Boolean(contactErrors.message)}
                                            aria-describedby={contactErrors.message ? 'error-message' : undefined}
                                            className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-400 ${contactErrors.message
                                                ? 'border-rose-500'
                                                : isDark
                                                    ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500'
                                                    : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400'
                                                }`}
                                        />
                                        {contactErrors.message && (
                                            <p id="error-message" className="mt-1.5 text-xs text-rose-400">
                                                {contactErrors.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                        <button
                                            type="submit"
                                            disabled={contactStatus === 'submitting'}
                                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                                        >
                                            <Send className="w-4 h-4" />
                                            <span>
                                                {contactStatus === 'submitting'
                                                    ? 'Preparing Email Client...'
                                                    : 'Open in Email Client (mailto)'}
                                            </span>
                                        </button>

                                        <span className="text-xs text-slate-400">
                                            Validates fields &amp; opens your default mail app.
                                        </span>
                                    </div>

                                    {/* Honest Mailto Confirmation & Copy Fallback */}
                                    {contactStatus === 'mailto_ready' && (
                                        <div
                                            role="status"
                                            className={`mt-5 p-4 rounded-xl border ${isDark
                                                ? 'bg-cyan-950/30 border-cyan-500/30 text-slate-200'
                                                : 'bg-cyan-50 border-cyan-200 text-slate-800'
                                                }`}
                                        >
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="text-xs sm:text-sm space-y-1">
                                                    <p className="font-semibold text-cyan-400">
                                                        Email Draft Prepared for Your Mail Client
                                                    </p>
                                                    <p className="opacity-90">
                                                        Your message has been validated and passed to your device&apos;s
                                                        email client. Please click &ldquo;Send&rdquo; in your mail app to
                                                        complete delivery, or copy the formatted message below.
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={handleCopyFormattedMessage}
                                                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500 text-slate-950 font-semibold shrink-0"
                                                >
                                                    {formattedMsgCopied ? 'Copied!' : 'Copy Message'}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* ====================================================================
          K. FOOTER
      ==================================================================== */}
            <footer
                className={`py-12 border-t ${isDark ? 'bg-[#070b15] border-slate-800/90' : 'bg-slate-100 border-slate-200'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/40">
                        {/* Brand Column */}
                        <div className="md:col-span-5 space-y-3">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-mono font-bold">
                                    {PERSONAL_INFO.logoText}
                                </div>
                                <span
                                    className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'
                                        }`}
                                >
                                    {PERSONAL_INFO.name}
                                </span>
                            </div>
                            <p
                                className={`text-sm leading-relaxed max-w-sm ${isDark ? 'text-slate-400' : 'text-slate-600'
                                    }`}
                            >
                                {PERSONAL_INFO.roleSummary}. Passionate about building clean software,
                                analyzing data with Python, and exploring AI/ML.
                            </p>
                        </div>

                        {/* Quick Navigation Links */}
                        <div className="md:col-span-4">
                            <h4
                                className={`text-xs font-mono uppercase tracking-wider font-semibold mb-3 ${isDark ? 'text-slate-300' : 'text-slate-800'
                                    }`}
                            >
                                Quick Navigation
                            </h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`text-left transition-colors ${isDark
                                            ? 'text-slate-400 hover:text-cyan-400'
                                            : 'text-slate-600 hover:text-cyan-700'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Social & Developer Setup Guide */}
                        <div className="md:col-span-3 space-y-3">
                            <h4
                                className={`text-xs font-mono uppercase tracking-wider font-semibold ${isDark ? 'text-slate-300' : 'text-slate-800'
                                    }`}
                            >
                                Connect &amp; Resources
                            </h4>
                            <div className="flex items-center gap-2.5">
                                <a
                                    href={PERSONAL_INFO.contact.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2.5 rounded-xl border transition-colors ${isDark
                                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                                        : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-700'
                                        }`}
                                    aria-label="GitHub"
                                >
                                    <Github className="w-4 h-4" />
                                </a>
                                <a
                                    href={PERSONAL_INFO.contact.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2.5 rounded-xl border transition-colors ${isDark
                                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                                        : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-700'
                                        }`}
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href={`mailto:${PERSONAL_INFO.contact.email}`}
                                    className={`p-2.5 rounded-xl border transition-colors ${isDark
                                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                                        : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-700'
                                        }`}
                                    aria-label="Email"
                                >
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>

                            <button
                                onClick={() => setDocsModalOpen(true)}
                                className={`w-full inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border transition-colors ${isDark
                                    ? 'bg-slate-900 border-slate-800 text-cyan-400 hover:border-cyan-500/40'
                                    : 'bg-white border-slate-300 text-cyan-700 hover:bg-slate-50'
                                    }`}
                            >
                                <FolderGit2 className="w-3.5 h-3.5" />
                                <span>Architecture &amp; Vercel Guide</span>
                            </button>
                        </div>
                    </div>

                    {/* Bottom Copyright & Back-to-Top Row */}
                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                        <p>
                            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React.js &amp;
                            Tailwind CSS.
                        </p>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-medium border transition-colors ${isDark
                                ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-cyan-400'
                                : 'bg-white border-slate-300 text-slate-700 hover:text-cyan-700'
                                }`}
                        >
                            <span>Back to Top</span>
                            <ChevronUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </footer>

            {/* Floating Back-to-Top Button */}
            {showBackToTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-6 left-6 z-40 p-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    aria-label="Scroll back to top"
                >
                    <ChevronUp className="w-5 h-5" />
                </button>
            )}

            {/* ====================================================================
          F. ACCESSIBLE PROJECT DETAILS MODAL
      ==================================================================== */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-project-title"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${isDark
                            ? 'bg-[#0f172a] border-slate-700 text-slate-100'
                            : 'bg-white border-slate-200 text-slate-900'
                            }`}
                    >
                        {/* Modal Header */}
                        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800/50">
                            <div>
                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-cyan-500/15 text-cyan-400">
                                        {selectedProject.category}
                                    </span>
                                    {selectedProject.isSampleTemplate && (
                                        <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/15 text-amber-300">
                                            Sample Template Project — Replace in projects.js
                                        </span>
                                    )}
                                </div>
                                <h2
                                    id="modal-project-title"
                                    className="text-2xl sm:text-3xl font-bold tracking-tight"
                                >
                                    {selectedProject.title}
                                </h2>
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className={`p-2 rounded-xl border transition-colors ${isDark
                                    ? 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white'
                                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-950'
                                    }`}
                                aria-label="Close project details modal"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-6 space-y-6 text-sm sm:text-base leading-relaxed">
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1.5">
                                    Project Overview
                                </h3>
                                <p className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                                    {selectedProject.overview}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    className={`p-4 rounded-xl border ${isDark
                                        ? 'bg-slate-900/70 border-slate-800'
                                        : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-1.5">
                                        Problem Statement
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {selectedProject.problemStatement}
                                    </p>
                                </div>

                                <div
                                    className={`p-4 rounded-xl border ${isDark
                                        ? 'bg-slate-900/70 border-slate-800'
                                        : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                                        Solution Approach
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {selectedProject.solutionApproach}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                                    Main Features
                                </h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {selectedProject.features.map((feat, idx) => (
                                        <li
                                            key={idx}
                                            className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-2.5 ${isDark
                                                ? 'bg-slate-900/40 border-slate-800 text-slate-300'
                                                : 'bg-slate-50 border-slate-200 text-slate-700'
                                                }`}
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1.5">
                                        Challenges Faced
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {selectedProject.challengesFaced}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1.5">
                                        What I Learned
                                    </h4>
                                    <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {selectedProject.whatILearned}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                                    Technologies Used
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className={`px-3 py-1 rounded-lg text-xs font-mono border ${isDark
                                                ? 'bg-slate-900 border-slate-700 text-slate-200'
                                                : 'bg-slate-100 border-slate-300 text-slate-800'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer Links */}
                        <div className="mt-8 pt-5 border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-3">
                                {selectedProject.githubUrl ? (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>View GitHub Repo</span>
                                    </a>
                                ) : (
                                    <span
                                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-400'
                                            : 'bg-slate-100 border-slate-200 text-slate-600'
                                            }`}
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub URL: Configurable in projects.js
                                    </span>
                                )}

                                {selectedProject.liveDemoUrl ? (
                                    <a
                                        href={selectedProject.liveDemoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-cyan-500/40 text-cyan-400"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        <span>Live Demo</span>
                                    </a>
                                ) : (
                                    <span
                                        className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono border ${isDark
                                            ? 'bg-slate-900 border-slate-800 text-slate-400'
                                            : 'bg-slate-100 border-slate-200 text-slate-600'
                                            }`}
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo: Configurable in projects.js
                                    </span>
                                )}
                            </div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border ${isDark
                                    ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700'
                                    : 'bg-slate-200 border-slate-300 text-slate-900 hover:bg-slate-300'
                                    }`}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ====================================================================
          INTERACTIVE RESUME PREVIEW & DOWNLOAD MODAL
      ==================================================================== */}
            {resumeModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="resume-modal-title"
                    onClick={() => setResumeModalOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${isDark
                            ? 'bg-[#0f172a] border-slate-700 text-slate-100'
                            : 'bg-white border-slate-200 text-slate-900'
                            }`}
                    >
                        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800/50">
                            <div className="flex items-center gap-2.5">
                                <FileText className="w-5 h-5 text-cyan-400" />
                                <h2 id="resume-modal-title" className="text-xl font-bold">
                                    Resume Preview — {PERSONAL_INFO.name}
                                </h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleDownloadResume}
                                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download PDF</span>
                                </button>
                                <button
                                    onClick={() => setResumeModalOpen(false)}
                                    className="p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white"
                                    aria-label="Close resume preview"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Clean Formatted Resume Sheet */}
                        <div
                            className={`mt-6 p-6 sm:p-8 rounded-xl border space-y-6 ${isDark
                                ? 'bg-slate-950/80 border-slate-800'
                                : 'bg-slate-50 border-slate-200'
                                }`}
                        >
                            <div className="border-b border-slate-800 pb-4">
                                <h3 className="text-2xl font-bold">{PERSONAL_INFO.name}</h3>
                                <p className="text-cyan-400 font-medium text-sm mt-1">
                                    {PERSONAL_INFO.roleSummary}
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    Location: {PERSONAL_INFO.location} • Email: {PERSONAL_INFO.contact.email}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1.5">
                                    Summary &amp; Career Objective
                                </h4>
                                <p className="text-sm leading-relaxed opacity-90">
                                    {PERSONAL_INFO.shortIntroduction} {PERSONAL_INFO.careerGoal}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2.5">
                                    Technical Skills
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                    {SKILLS_DATA.map((cat) => (
                                        <div
                                            key={cat.id}
                                            className={`p-3 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                                                }`}
                                        >
                                            <span className="font-bold block mb-1">{cat.category}</span>
                                            <span className="opacity-80">
                                                {cat.skills.map((s) => `${s.name} (${s.status})`).join(', ')}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800/50">
                                Tip: In a local Vite setup, place your custom PDF at{' '}
                                <code className="text-cyan-400">public/resume.pdf</code> to serve your own
                                static PDF file directly.
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ====================================================================
          DEVELOPER ARCHITECTURE, CUSTOMIZATION & VERCEL DEPLOYMENT MODAL
      ==================================================================== */}
            {docsModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="docs-modal-title"
                    onClick={() => setDocsModalOpen(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border p-6 sm:p-8 shadow-2xl ${isDark
                            ? 'bg-[#0f172a] border-slate-700 text-slate-100'
                            : 'bg-white border-slate-200 text-slate-900'
                            }`}
                    >
                        <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-800/60">
                            <div className="flex items-center gap-2.5">
                                <FolderGit2 className="w-5 h-5 text-cyan-400" />
                                <h2 id="docs-modal-title" className="text-xl font-bold">
                                    Project Architecture, Customization &amp; Vercel Deployment Guide
                                </h2>
                            </div>
                            <button
                                onClick={() => setDocsModalOpen(false)}
                                className="p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white"
                                aria-label="Close setup guide"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="mt-6 space-y-6 text-sm leading-relaxed">
                            {/* 1. Folder Structure */}
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                                    1. Recommended Vite + React Project Structure
                                </h3>
                                <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                                    {`aman-kushwaha-portfolio/
├── public/
│   ├── images/               # Project screenshots & profile illustrations
│   ├── resume.pdf            # Place your actual PDF resume file here
│   ├── favicon.svg           # AK monogram SVG favicon
│   └── robots.txt            # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ThemeToggle.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── LearningJourney.jsx
│   │   ├── GitHub.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── personalInfo.js   # Name, links, email, availability status
│   │   ├── skills.js         # Categorized skills & familiarity statuses
│   │   ├── projects.js       # Featured projects & case study details
│   │   ├── learningJourney.js# Timeline milestones
│   │   └── certifications.js # Verified certificates array
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html                # SEO & Open Graph meta tags
├── package.json
├── vercel.json               # SPA routing configuration for Vercel
└── README.md`}
                                </pre>
                            </div>

                            {/* 2. Installation & Execution Commands */}
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                                    2. Installation &amp; Local Execution Commands
                                </h3>
                                <pre className="p-4 rounded-xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                                    {`# 1. Create a new Vite + React project
npm create vite@latest aman-portfolio -- --template react
cd aman-portfolio

# 2. Install Tailwind CSS and Lucide React icons
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Start development server
npm run dev

# 4. Verify production build
npm run build && npm run preview`}
                                </pre>
                            </div>

                            {/* 3. Instructions for Customizing Profile, Projects & Resume */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div
                                    className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <h4 className="font-bold text-cyan-400 mb-1.5">
                                        Updating Personal Details &amp; Links
                                    </h4>
                                    <p className="text-xs opacity-90">
                                        Edit <code className="font-mono">PERSONAL_INFO</code> in{' '}
                                        <code className="font-mono">personalInfo.js</code> to update your{' '}
                                        <code className="font-mono">email</code>,{' '}
                                        <code className="font-mono">githubUrl</code>,{' '}
                                        <code className="font-mono">githubUsername</code>, and{' '}
                                        <code className="font-mono">linkedinUrl</code>. Set{' '}
                                        <code className="font-mono">githubUsername</code> to your GitHub handle to
                                        automatically fetch live repositories.
                                    </p>
                                </div>

                                <div
                                    className={`p-4 rounded-xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                                        }`}
                                >
                                    <h4 className="font-bold text-cyan-400 mb-1.5">
                                        Adding Real Projects &amp; Resume PDF
                                    </h4>
                                    <p className="text-xs opacity-90">
                                        In <code className="font-mono">projects.js</code>, replace the sample
                                        entries with your own projects, set{' '}
                                        <code className="font-mono">isSampleTemplate: false</code>, and add your{' '}
                                        <code className="font-mono">githubUrl</code> and{' '}
                                        <code className="font-mono">liveDemoUrl</code>. Place your static resume at{' '}
                                        <code className="font-mono">public/resume.pdf</code>.
                                    </p>
                                </div>
                            </div>

                            {/* 4. Vercel Deployment & Checklist */}
                            <div>
                                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2">
                                    3. Deploying to Vercel &amp; Verification Checklist
                                </h3>
                                <ul className="space-y-1.5 text-xs">
                                    <li className="flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>
                                            Push your repository to GitHub and import the project at{' '}
                                            <strong>vercel.com/new</strong> (Framework Preset: Vite).
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>
                                            Verify responsive navbar drawer and touch targets at 320px, 768px, and
                                            1440px viewports.
                                        </span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span>
                                            Test Dark/Light theme persistence, Project category filtering, and
                                            Project Details modal Escape key handling.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}