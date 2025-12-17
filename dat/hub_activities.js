/**
 * TRACKS @ PWC - ACTIVITIES DATA
 * Module: Things To Do (Simulations, Drills & Competitions)
 * Updated: Finalized with strict undergraduate eligibility and access requirements.
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.THINGS_TO_DO = [
    {
        category: 'Metacognitive Protocols',
        intro: "Research requires the capacity to examine one's own thinking. These protocols cultivate 'methodological empathy' and help researchers navigate the emotional and intellectual arc of a project.",
        items: [
            {
                title: 'The Pre-Mortem',
                org: 'Protocol: Prospective Hindsight',
                type: 'Risk Assessment',
                desc: 'A strategic exercise where the team assumes the project has already failed. Working backward from this hypothetical failure, participants identify the specific "causes" (e.g., recruitment bottlenecks, null results) that led to the collapse.',
                aims: 'To mitigate "optimism bias" and Groupthink. By framing failure as a fait accompli, the protocol grants license for dissent.',
                outcome: 'A "Pre-Emptive Strike" list of preventative measures for the most likely failure modes.',
                requirements: 'Open Access. Best conducted at the project kickoff.',
                link: null
            },
            {
                title: 'The Post-Mortem',
                org: 'Protocol: Retrospective Analysis',
                type: 'Project Review',
                desc: 'Conducted after a project phase. It separates "Process" from "Outcome," ensuring that a good result does not mask a flawed process (lucky success) and a bad result does not invalidate a rigorous process (noble failure).',
                aims: 'To institute a culture of "Blameless Root Cause Analysis." The focus is on systems and workflows rather than individual errors.',
                outcome: 'A "Lessons Learned" document that converts individual experience into institutional memory.',
                requirements: 'Open Access. Conduct immediately after submission/completion.',
                link: null
            },
            {
                title: 'The Zero-Draft',
                org: 'Technique: Generative Writing',
                type: 'Cognitive Unloading',
                desc: 'A timed, low-stakes writing session where the goal is volume and flow. The researcher writes without stopping or editing. Placeholders (e.g., "[INSERT CITATION]") are mandatory.',
                aims: 'To decouple the "Generative" mindset (creative) from the "Critical" mindset (editorial). Writer’s block often arises from attempting to perform both simultaneously.',
                outcome: 'A tangible, albeit messy, artifact that serves as the raw material for refinement.',
                requirements: 'Open Access. Solo exercise.',
                link: null
            },
            {
                title: 'The Reverse Outline',
                org: 'Technique: Structural Editing',
                type: 'Architectural Analysis',
                desc: 'Take a finished draft (your own or a published paper). In the margins, write the function of each paragraph (e.g., "Defines gap," "Introduces instrument," "Rules out alternative").',
                aims: 'To understand the structural engineering of academic argument independent of the content. It diagnoses "drifting" paragraphs.',
                outcome: 'Improved structural coherence and a sharper ability to engineer persuasive arguments.',
                requirements: 'Open Access. Requires a completed draft or sample paper.',
                link: null
            },
            {
                title: 'The "Steel Man" Argument',
                org: 'Drill: Epistemic Integrity',
                type: 'Critical Thinking',
                desc: 'The opposite of a "Straw Man." Participants must articulate the strongest possible version of an opposing theory or critique, correcting any errors in the original to make it as robust as possible, before attempting to refute it.',
                aims: 'To ensure researchers are debating the best version of the counter-argument. It builds intellectual honesty and stronger defenses.',
                outcome: 'A robust "Limitations" section that anticipates and defuses the sharpest critiques.',
                requirements: 'Open Access. Best used during the literature review phase.',
                link: null
            }
        ]
    },
    {
        category: 'Market & Financial Drills',
        intro: "In professional finance and economics, precision is often less valuable than directionality. These drills practice the specific mental models required for securities analysis and strategic forecasting.",
        items: [
            {
                title: 'The Reverse DCF',
                org: 'Drill: Expectations Investing',
                type: 'Valuation Check',
                desc: 'Instead of guessing 5-year growth rates to calculate a price (Standard DCF), start with the CURRENT stock price and solve backwards. What growth rate is the market *implying* at this price?',
                aims: 'To check the "Hurdle Rate." If the market implies the company must grow at 50% for 10 years to justify today\'s price, the stock is likely overvalued regardless of the story.',
                outcome: 'A reality check on sentiment. It grounds narrative in mathematical necessity.',
                requirements: 'Open Access. Requires Excel/financial calculator.',
                link: null
            },
            {
                title: 'The 10-K Footnote Hunt',
                org: 'Drill: Forensic Accounting',
                type: 'Due Diligence',
                desc: 'Download a company\'s 10-K (Annual Report). Skip the glossy intro. Go directly to "Commitments and Contingencies" and "Related Party Transactions" footnotes.',
                aims: 'To find the "Buried Bodies." Management often hides off-balance-sheet liabilities or conflicts of interest in the densest text at the back of the filing.',
                outcome: 'Skill in reading "Legalese" and identifying structural risks that standard screening tools miss.',
                requirements: 'Open Access. 10-K filings are public (EDGAR).',
                link: null
            },
            {
                title: 'The "Short" Thesis',
                org: 'Simulation: Hedge Fund Pitch',
                type: 'Contrarian Analysis',
                desc: 'Write a 1-page memo arguing why a popular, high-flying stock is actually a zero. You cannot use "valuation" (too expensive) as the catalyst; you must identify a structural flaw (accounting fraud, obsolescence, regulatory risk).',
                aims: 'To develop critical skepticism. It forces the researcher to look for disconfirming evidence against a crowd consensus.',
                outcome: 'A sharper eye for "too good to be true" narratives and weak business models.',
                requirements: 'Open Access. Solo or group exercise.',
                link: null
            }
        ]
    },
    {
        category: 'Policy & Behavioral Drills',
        intro: "Social impact and policy work require different muscles than pure academic study: the ability to persuade, the ability to anticipate second-order effects, and the ability to design for real-world human behavior.",
        items: [
            {
                title: 'The "BLUF" Rewrite',
                org: 'Drill: Executive Communication',
                type: 'Writing Exercise',
                desc: 'Take a dense 200-word academic abstract. Rewrite it as a 3-bullet "Bottom Line Up Front" memo for a Cabinet Minister. You have 5 minutes.',
                aims: 'To practice ruthless prioritization. You must strip away nuance to find the "So What?" without becoming inaccurate.',
                outcome: 'The ability to communicate with busy decision-makers who do not read past the first paragraph.',
                requirements: 'Open Access. Solo exercise.',
                link: null
            },
            {
                title: 'The "Nudge" Audit',
                org: 'Drill: Behavioral Science',
                type: 'Field Analysis',
                desc: 'Analyze a digital or physical choice architecture (e.g., a tax form, a cafeteria layout, a subscription cancel flow). Identify the defaults, frictions, and framing effects.',
                aims: 'To see the invisible "Sludge" that prevents user action. It applies Thaler & Sunstein\'s principles to everyday design.',
                outcome: 'A "Behavioral Friction Map" identifying where users drop off and why.',
                requirements: 'Open Access. Field exercise.',
                link: null
            },
            {
                title: 'Red Team / Blue Team',
                org: 'Simulation: Adversarial Risk',
                type: 'Strategy Wargame',
                desc: 'One team proposes a Policy Intervention (Blue Team). The other team (Red Team) adopts the persona of a hostile actor (e.g., smuggler, political opponent) whose only goal is to bypass or exploit the policy.',
                aims: 'To anticipate "Unintended Consequences." Policies often fail because they assume compliance; this drill assumes gaming.',
                outcome: 'A policy design that is robust against evasion and bad-faith actors.',
                requirements: 'Open Access. Requires minimum 2 participants.',
                link: null
            }
        ]
    },
    {
        category: 'System Dynamics & Simulations',
        intro: "Complex systems often exhibit counter-intuitive behavior due to non-linear feedback loops. These high-fidelity simulations provide a sandbox to experience these dynamics without real-world risk.",
        items: [
            {
                title: 'MIT Sloan: Fishbanks',
                org: 'MIT Sloan LearningEdge',
                type: 'Resource Management Simulation',
                desc: 'A multiplayer simulation where teams manage fishing companies competing for a renewable but depletable resource. Teams must balance fleet expansion against the ecological carrying capacity.',
                aims: 'Demonstrates the "Tragedy of the Commons." Participants learn to distinguish between stock and flow variables and experience the consequences of competitive escalation.',
                outcome: 'A visceral understanding of how rational individual decisions can lead to collective collapse.',
                requirements: 'Free/Open Access (Account required). Browser-based.',
                link: 'https://mitsloan.mit.edu/teaching-resources-library/fishbanks-a-renewable-resource-management-simulation'
            },
            {
                title: 'MIT Sloan: Platform Wars',
                org: 'MIT Sloan LearningEdge',
                type: 'Competitive Strategy Simulation',
                desc: 'Teams act as senior management for a console manufacturer (e.g., Sony vs. Microsoft), making decisions on pricing, royalties, and game development to capture market share.',
                aims: 'To explore "Two-Sided Markets" and network effects. It challenges participants to solve the "chicken-and-egg" problem.',
                outcome: 'Intuition for "Winner-Take-All" dynamics and the importance of the installed base.',
                requirements: 'Free/Open Access (Account required). Browser-based.',
                link: 'https://mitsloan.mit.edu/teaching-resources-library/platform-wars-simulating-battle-video-game-supremacy'
            },
            {
                title: 'Harvard: Everest V3',
                org: 'Harvard Business Publishing',
                type: 'Leadership & Team Simulation',
                desc: 'A multiplayer simulation where teammates attempt to summit Mount Everest. Information is asymmetrically distributed; different roles (Leader, Physician) have different critical data.',
                aims: 'To examine "Information Hoarding" and the "Common Information Effect." Teams often fail because they discuss only shared information rather than unique data.',
                outcome: 'Improved team communication protocols and psychological safety.',
                requirements: 'Instructor License Required (~$15-50/student).',
                link: 'https://hbsp.harvard.edu/product/8867-HTM-ENG'
            },
            {
                title: 'Harvard: Strategy (Five Forces)',
                org: 'Harvard Business Publishing',
                type: 'Competitive Strategy Simulation',
                desc: 'Participants act as a CEO making decisions on R&D, pricing, and marketing while navigating the "Five Forces" (e.g., threat of entry, supplier power).',
                aims: 'To apply Michael Porter’s frameworks in a dynamic setting. It moves strategy from a static concept to a fluid practice.',
                outcome: 'Strategic agility and the ability to anticipate competitor responses.',
                requirements: 'Instructor License Required (~$15-50/student).',
                link: 'https://hbsp.harvard.edu/product/7000-HTM-ENG'
            },
            {
                title: 'Model Diplomacy',
                org: 'Council on Foreign Relations (CFR)',
                type: 'Role-Play Simulation',
                desc: 'A simulation of the U.S. National Security Council (NSC). Participants adopt roles (e.g., Secretary of State, CIA Director) to address hypothetical crises.',
                aims: 'To simulate "Bounded Rationality" and institutional constraints. Decisions must be made with incomplete information and competing departmental interests.',
                outcome: 'Development of "Historical Empathy" and negotiation skills.',
                requirements: 'Free/Open Access (Instructor account recommended for full materials).',
                link: 'https://modeldiplomacy.cfr.org/'
            },
            {
                title: 'Wharton: OPEQ',
                org: 'Wharton Interactive',
                type: 'Game Theory Simulation',
                desc: 'A simulation of an oil cartel where teams must decide production levels. It models a "Repeated Prisoner’s Dilemma," where the incentive to cheat conflicts with the incentive to cooperate.',
                aims: 'To experience the instability of cartels and the difficulty of sustaining cooperation without enforcement.',
                outcome: 'Deep understanding of Nash Equilibrium and Defection.',
                requirements: 'Free/Open Access (Check availability).',
                link: 'https://interactive.wharton.upenn.edu/simulation/opeq/'
            }
        ]
    },
    {
        category: 'Public Arenas (Undergraduate)',
        intro: "To develop resilience, research must leave the laboratory. These external competitions provide rigorous, third-party validation and are specifically open to undergraduate students.",
        items: [
            {
                title: 'The Global Undergraduate Awards',
                org: 'Undergraduate Awards (Global)',
                type: 'Global Awards Programme',
                desc: 'Often cited as the "Junior Nobel Prize," this program recognizes top-tier undergraduate coursework across 25 categories.',
                timeline: 'Submission Deadline: June (Annual).',
                requirements: 'Eligibility: Penultimate or Final year undergraduates. Entry: Coursework graded "A" or "1st Class".',
                link: 'https://undergraduateawards.com/'
            },
            {
                title: 'The Carroll Round',
                org: 'Georgetown University',
                type: 'Research Conference',
                desc: 'A prestigious annual economics conference where top undergraduates present original research and engage with peers and mentors.',
                timeline: 'Applications: February | Conference: April.',
                requirements: 'Eligibility: Current Undergraduates. Entry: Original research paper and letter of recommendation.',
                link: 'https://carrollround.georgetown.edu/'
            },
            {
                title: 'Young Economist Research Competition',
                org: 'Meghnad Desai Academy (MDAE)',
                type: 'Research Paper',
                desc: 'A competition for undergraduate students to present original research on contemporary economic themes.',
                timeline: 'Abstracts: Jan/Feb | Finals: March.',
                requirements: 'Eligibility: Undergraduate students (Teams of 2). Entry: Original paper (3000-4000 words).',
                link: 'https://www.meghnaddesaiacademy.org/'
            },
            {
                title: 'Best Undergraduate Paper',
                org: 'Intl. Atlantic Economic Society (IAES)',
                type: 'Paper Competition',
                desc: 'An annual competition encouraging undergraduate research. Finalists present their work at the IAES annual conference.',
                timeline: 'Deadline: June | Conference: October.',
                requirements: 'Eligibility: Current Undergraduates (or recent grads). Entry: Submission of full paper (up to 4000 words).',
                link: 'https://www.iaes.org/undergraduate-paper-competition/'
            },
            {
                title: 'Stanford Economic Review',
                org: 'Stanford University',
                type: 'Journal Publication',
                desc: 'A student-run journal that publishes the best undergraduate economics research from around the world.',
                timeline: 'Submissions: Rolling/Winter.',
                requirements: 'Eligibility: Undergraduate students. Entry: High-quality original research paper.',
                link: 'https://ser.stanford.edu/'
            }
        ]
    }
];