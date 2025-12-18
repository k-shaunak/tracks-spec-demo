/**
 * TRACKS @ PWC - SKILLS DATA
 * Module: Graduate Bridge & Refresher Curriculum
 * Target: Research Candidates in Economics, Finance & Humanities
 * * Protocol: Freely accessible, high-signal, zero-cost resources.
 * Standards: MIT OCW, Harvard/EdX, Stanford, and Open Source manuals.
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.SKILL_LEVELS = [
  {
    level: "I. Foundations (The Bridge)",
    projects: [
      {
        title: "Mathematics for Economists",
        domain: "Math Bridge",
        purpose: "The rigorous calculus and linear algebra required for graduate micro/macro.",
        steps: ["Real Analysis", "Static Optimization", "Dynamic Programming"],
        link: "https://ocw.mit.edu/courses/14-102-mathematics-for-economists-fall-2004/"
      },
      {
        title: "Probability (The Logic of Science)",
        domain: "Stats Bridge",
        purpose: "Probability theory as the logic of uncertainty, not just calculation.",
        steps: ["Random Variables", "Expectations", "Conditional Probability"],
        link: "https://projects.iq.harvard.edu/stat110/youtube"
      },
      {
        title: "Digital Humanities: The Toolkit",
        domain: "DH Bridge",
        purpose: "Bridging traditional humanities with computational methods.",
        steps: ["Text Encoding (TEI)", "Network Analysis", "Geospatial Mapping"],
        link: "https://www.open.edu/openlearn/history-the-arts/digital-humanities-humanities-research-the-digital-age/content-section-0?active-tab=description-tab"
      },
      {
        title: "Scientific Writing & Argument",
        domain: "Writing",
        purpose: "Constructing papers that survive peer review.",
        steps: ["The Abstract", "Structure of Argument", "Editing for Clarity"],
        link: "https://pll.harvard.edu/course/rhetoric-art-persuasive-writing-public-speaking"
      },
      {
        title: "Python for Research (Py4E)",
        domain: "CS Bridge",
        purpose: "The absolute zero-to-hero standard for research programming.",
        steps: ["Variables & Logic", "Data Structures", "Scraping & APIs"],
        link: "https://www.py4e.com/"
      },
      {
        title: "Research Integrity & Ethics",
        domain: "Ethics",
        purpose: "The rules of the road for publishing and data.",
        steps: ["Plagiarism", "Data Fabrication", "Authorship Disputes"],
        link: "https://masterclasses.nature.com/publication-ethics/25567404"
      }
    ]
  },

  {
    level: "II. Core Toolkit",
    projects: [
      {
        title: "Econometrics: The Standard",
        domain: "Econometrics",
        purpose: "Mastering the OLS estimator and its failures.",
        steps: ["Gauss-Markov", "Heteroskedasticity", "Endogeneity"],
        link: "https://sites.google.com/site/econometricsacademy/"
      },
      {
        title: "Financial Markets (Shiller)",
        domain: "Finance",
        purpose: "A Nobel Prize winner's overview of market architecture.",
        steps: ["CAPM", "Behavioral Finance", "Risk Management"],
        link: "https://www.coursera.org/learn/financial-markets-global"
      },
      {
        title: "Data Science with R",
        domain: "Data",
        purpose: "The 'Tidyverse' philosophy for social science data.",
        steps: ["dplyr (Wrangling)", "ggplot2 (Viz)", "R Markdown"],
        link: "https://r4ds.hadley.nz/"
      },
      {
        title: "Game Theory",
        domain: "Micro Theory",
        purpose: "Strategic interaction and equilibrium analysis.",
        steps: ["Nash Equilibrium", "Subgame Perfection", "Repeated Games"],
        link: "https://ocw.mit.edu/courses/14-126-game-theory-spring-2016/"
      },
      {
        title: "Qualitative Methods",
        domain: "Humanities",
        purpose: "Rigorous non-numeric inquiry.",
        steps: ["Interview Protocols", "Ethnography", "Grounded Theory"],
        link: "https://www.coursera.org/learn/qualitative-methods"
      },
      {
        title: "Macroeconomic Policy",
        domain: "Macro Theory",
        purpose: "Understanding fiscal and monetary transmission.",
        steps: ["IS-LM Model", "Phillips Curve", "Growth Solow Model"],
        link: "https://mru.org/courses/principles-economics-macroeconomics"
      }
    ]
  },

  {
    level: "III. Advanced Inference",
    projects: [
      {
        title: "Causal Inference (The Revolution)",
        domain: "Causality",
        purpose: "Moving from 'Correlation' to 'What If?' (Potential Outcomes).",
        steps: ["DAGs", "Propensity Scores", "Instrumental Variables"],
        link: "https://www.bradyneal.com/causal-inference-course"
      },
      {
        title: "Machine Learning for Economists",
        domain: "ML / AI",
        purpose: "Using ML for prediction and causal estimation (Double ML).",
        steps: ["Lasso/Ridge", "Random Forests", "Causal Trees"],
        link: "https://web.stanford.edu/class/stats202/"
      },
      {
        title: "Advanced Time Series",
        domain: "Finance",
        purpose: "Modeling volatility and temporal dependence.",
        steps: ["ARIMA/GARCH", "Unit Roots", "Cointegration"],
        link: "https://onlinecourses.nptel.ac.in/noc23_mg114/preview"
      },
      {
        title: "Asset Pricing Theory",
        domain: "Finance",
        purpose: "The mathematics of risk and return.",
        steps: ["Stochastic Discount Factors", "Arbitrage Pricing", "Derivatives"],
        link: "https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/"
      },
      {
        title: "Computational Text Analysis",
        domain: "NLP",
        purpose: "Treating text as data (Topic Modeling, Sentiment).",
        steps: ["Tokenization", "LDA Topic Models", "Word Embeddings"],
        link: "https://www.tidytextmining.com/"
      },
      {
        title: "Bayesian Statistics",
        domain: "Stats",
        purpose: "Updating beliefs with evidence.",
        steps: ["Priors & Posteriors", "MCMC", "Hierarchical Models"],
        link: "https://xcelab.net/rm/statistical-rethinking/"
      }
    ]
  },

  {
    level: "IV. The Professional Workflow",
    projects: [
      {
        title: "Reproducible Research (The Turing Way)",
        domain: "Open Science",
        purpose: "Ensuring your results exist outside your laptop.",
        steps: ["Version Control (Git)", "Binder/Docker", "READMEs"],
        link: "https://the-turing-way.netlify.app/reproducible-research/reproducible-research.html"
      },
      {
        title: "LaTeX for Academic Papers",
        domain: "Typesetting",
        purpose: "The industry standard for mathematical publishing.",
        steps: ["Overleaf", "BibTeX Management", "Math Notation"],
        link: "https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes"
      },
      {
        title: "Grant Writing & Funding",
        domain: "Professional",
        purpose: "Securing resources for inquiry.",
        steps: ["The Narrative", "Budgeting", "Broader Impacts"],
        link: "https://www.coursera.org/learn/grant-writing"
      },
      {
        title: "Data Management Plans (DMP)",
        domain: "Archival",
        purpose: "Organizing data for the long haul.",
        steps: ["FAIR Principles", "Metadata Standards", "Repositories"],
        link: "https://dmptool.org/general_guidance"
      },
      {
        title: "Strategic Communication",
        domain: "Impact",
        purpose: "Translating research for policymakers and the public.",
        steps: ["Policy Memos", "Op-Eds", "Data Visualization"],
        link: "https://www.coursera.org/learn/public-speaking"
      }
    ]
  }
];