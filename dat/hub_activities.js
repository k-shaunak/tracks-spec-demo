/**
 * TRACKS @ PWC - ACTIVITIES DATA
 * Module: Things To Do (Simulations & Competitions)
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.THINGS_TO_DO = [
    {
        category: 'Group Simulations',
        items: [
            {
                title: 'MIT Sloan: Fishbanks',
                org: 'MIT Sloan LearningEdge',
                type: 'Multiplayer Simulation',
                desc: 'A resource management simulation where participants manage a fishing company. The goal is to maximize net worth while maintaining the ecological viability of the fishery.',
                aims: 'Demonstrates the "Tragedy of the Commons" and the difficulty of sustainable management in systems with delays and non-linear feedback loops. Participants learn to distinguish between stock and flow variables and experience the consequences of competitive escalation.',
                outcome: 'Participants gain a visceral understanding of system dynamics, specifically how rational individual decisions can lead to collective collapse. It fosters strategic thinking under uncertainty and long-term planning.',
                link: 'https://mitsloan.mit.edu/teaching-resources-library/fishbanks-a-renewable-resource-management-simulation'
            },
            {
                title: 'MIT Sloan: Platform Wars',
                org: 'MIT Sloan LearningEdge',
                type: 'Competitive Simulation',
                desc: 'A simulation of the video game console industry. Teams act as senior management of a hardware company (like Sony or Nintendo), making decisions on pricing, royalties, and game development.',
                aims: 'To explore multi-sided markets and network effects. It challenges participants to balance the "chicken-and-egg" problem of platform adoption: attracting users requires developers, but attracting developers requires users.',
                outcome: 'Develops intuition for "winner-take-all" market dynamics, pricing strategies in two-sided networks, and the critical importance of install base in technology strategy.',
                link: 'https://mitsloan.mit.edu/teaching-resources-library/platform-wars-simulating-battle-video-game-supremacy'
            },
            {
                title: 'Model Diplomacy',
                org: 'Council on Foreign Relations (CFR)',
                type: 'Role-Play Simulation',
                desc: 'A simulation of the U.S. National Security Council (NSC). Participants adopt roles (e.g., Secretary of State, CIA Director) to address hypothetical or historical crises, such as a pandemic or cyberattack.',
                aims: 'To provide insight into the institutional constraints of foreign policy decision-making. It emphasizes the trade-offs between competing national interests (security, economic, humanitarian) and the necessity of consensus-building.',
                outcome: 'Participants cultivate historical empathy and negotiation skills. The outcome is typically a policy memo or directive that reflects a negotiated compromise, mirroring real-world governance.',
                link: 'https://modeldiplomacy.cfr.org/'
            }
        ]
    },
    {
        category: 'Public Competitions',
        items: [
            {
                title: 'Young Economist Research Competition',
                org: 'Meghnad Desai Academy of Economics (MDAE)',
                type: 'Research Paper',
                desc: 'A prestigious competition for undergraduate students to present original research on contemporary economic themes.',
                timeline: 'Registration typically opens in November/December. Abstract/First Draft submission is required by January/February. Shortlisted teams present their findings to a panel of experts in March.',
                requirements: 'Usually requires a team of two undergraduate students. Papers must be original, analytically rigorous (approx. 3000-4000 words), and address a specific theme released by the Academy (e.g., Digital Currency, Sustainability).',
                link: 'https://www.meghnaddesaiacademy.org/'
            },
            {
                title: 'Best Undergraduate Paper',
                org: 'International Atlantic Economic Society (IAES)',
                type: 'Paper Competition',
                desc: 'An annual competition encouraging undergraduate research. Finalists present their work at the IAES annual conference.',
                timeline: 'Submission deadline is typically in June. Winners are selected and invited to present at the conference in October.',
                requirements: 'Open to all undergraduates. Papers should focus on economic issues and demonstrate clear analytical thinking. The winner receives a cash prize and publication opportunities.',
                link: 'https://www.iaes.org/undergraduate-paper-competition/'
            },
            {
                title: 'The Global Undergraduate Awards',
                org: 'Undergraduate Awards',
                type: 'Global Awards Programme',
                desc: 'Often referred to as the "Junior Nobel Prize," this is the world\'s leading undergraduate awards programme which recognizes top undergraduate work.',
                timeline: 'Submissions usually close in June. Winners are announced in September.',
                requirements: 'Open to all penultimate and final year undergraduate students. Entrants submit a piece of coursework that received a First Class/A grade. Categories include Economics, Finance, and Politics.',
                link: 'https://undergraduateawards.com/'
            }
        ]
    },
    {
        category: 'Individual',
        items: [
            {
                title: 'Replication Exercise',
                type: 'Technical Drill',
                desc: 'Select a seminal paper in your field (e.g., Angrist & Krueger 1991). Download the raw data (often available on the AEA website) and attempt to replicate the main regression table from scratch using R or Stata.',
                aims: 'To demystify the "black box" of published results and identify the specific data cleaning decisions made by authors.',
                outcome: 'Technical confidence and a skeptical eye for "researcher degrees of freedom".'
            },
            {
                title: 'The "Reverse Outline"',
                type: 'Rhetorical Analysis',
                desc: 'Take a high-quality paper. In the margins, write the function of each paragraph (e.g., "Defines the gap," "Introduces the instrument," "Rules out alternative explanation").',
                aims: 'To understand the structural engineering of academic argument independent of the content.',
                outcome: 'Improved ability to structure one\'s own writing by mimicking proven architectural patterns.'
            }
        ]
    }
];