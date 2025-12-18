/**
 * TRACKS @ PWC - SKILLS DATA
 * Module: Skill Refresher (Links Reviewed & Updated)
 *
 * Drop-in replacement: preserves exact schema used by downstream renderer.
 * Keys: level, projects[].title, projects[].domain, projects[].purpose,
 *       projects[].steps (array), projects[].link
 *
 * Links have been reviewed and replaced with more authoritative / durable
 * resources where applicable (OCW, canonical textbooks/authors, stable docs).
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.SKILL_LEVELS = [
  {
    level: "Foundations",
    projects: [
      {
        title: "Calculus for Optimization",
        domain: "Math",
        purpose: "Marginal reasoning and constrained optimization.",
        steps: ["Derivatives", "FOC/SOC", "Lagrange multipliers"],
        link: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"
      },
      {
        title: "Linear Algebra for Empirical Work",
        domain: "Math",
        purpose: "Matrix representations of data and estimators.",
        steps: ["Matrix operations", "Rank & projections", "Eigenvalues"],
        link: "https://www.3blue1brown.com/topics/linear-algebra"
      },
      {
        title: "Probability & Random Variables",
        domain: "Stats",
        purpose: "Formal treatment of uncertainty.",
        steps: ["Distributions", "Expectation", "Variance & covariance"],
        link: "https://projects.iq.harvard.edu/stat110"
      },
      {
        title: "Logic & Argumentation",
        domain: "Humanities",
        purpose: "Build and evaluate scholarly arguments.",
        steps: ["Deduction/induction", "Claims & warrants", "Counterarguments"],
        link: "https://owl.purdue.edu/owl/general_writing/common_writing_assignments/argument_papers/index.html"
      },
      {
        title: "Theory, Concepts & Constructs",
        domain: "Methods",
        purpose: "Translate abstract ideas into researchable constructs.",
        steps: ["Conceptual frameworks", "Operational definitions", "Scope conditions"],
        link: "https://www.press.uchicago.edu/ucp/books/book/chicago/C/bo36144226.html" 
      },
      {
        title: "Computing for Research",
        domain: "CS",
        purpose: "Foundational scripting for analysis and automation.",
        steps: ["Python/R basics", "Packages & environments", "Scripts vs notebooks"],
        link: "https://quantecon.org/"
      },
      {
        title: "Systematic Literature Search",
        domain: "Library",
        purpose: "Comprehensive, transparent literature discovery.",
        steps: ["Boolean logic", "Citation chaining", "Reference managers"],
        link: "https://libguides.mit.edu/" 
      },
      {
        title: "Research Ethics & Integrity",
        domain: "Ethics",
        purpose: "Ethical research conduct and compliance.",
        steps: ["Consent & risk", "Plagiarism avoidance", "IRB basics"],
        link: "https://www.hhs.gov/ohrp/"
      }
    ]
  },

  {
    level: "Core",
    projects: [
      {
        title: "Econometrics: OLS Foundations",
        domain: "Econ",
        purpose: "Baseline estimation and interpretation.",
        steps: ["Assumptions", "Estimation", "Robust standard errors"],
        link: "https://mixtape.scunning.com/"
      },
      {
        title: "Statistical Inference",
        domain: "Stats",
        purpose: "Quantifying uncertainty and evidence.",
        steps: ["Hypothesis testing", "Confidence intervals", "Power"],
        link: "https://www.openintro.org/"
      },
      {
        title: "Data Cleaning & Wrangling",
        domain: "Data",
        purpose: "Prepare raw data for analysis.",
        steps: ["Missing data", "Reshaping", "Joins & merges"],
        link: "https://pandas.pydata.org/docs/user_guide/10min.html"
      },
      {
        title: "Data Visualization",
        domain: "Data",
        purpose: "Explore and communicate empirical patterns.",
        steps: ["Grammar of graphics", "Annotation", "Avoiding distortion"],
        link: "https://ggplot2.tidyverse.org/"
      },
      {
        title: "Qualitative Interview Design",
        domain: "Methods",
        purpose: "Design interviews that generate credible evidence.",
        steps: ["Protocols", "Probing", "Reflexivity"],
        link: "https://us.sagepub.com/en-us/nam/qualitative-inquiry-and-research-design/book232962"
      },
      {
        title: "Qualitative Coding & Analysis",
        domain: "Analysis",
        purpose: "Systematic interpretation of qualitative data.",
        steps: ["Open coding", "Axial coding", "Themes & memos"],
        link: "https://us.sagepub.com/en-us/nam/the-coding-manual-for-qualitative-researchers/book272023"
      },
      {
        title: "Archival & Primary Source Research",
        domain: "Humanities",
        purpose: "Working with historical and primary materials.",
        steps: ["Provenance", "Contextualization", "Citation standards"],
        link: "https://guides.library.harvard.edu/archives"
      },
      {
        title: "Time Value of Money",
        domain: "Finance",
        purpose: "Intertemporal valuation.",
        steps: ["Discounting", "NPV", "IRR"],
        link: "https://www.khanacademy.org/economics-finance-domain/core-finance"
      },
      {
        title: "Financial Statements Basics",
        domain: "Finance",
        purpose: "Understand firm-level financial data.",
        steps: ["Income statement", "Balance sheet", "Cash flow"],
        link: "https://www.investopedia.com/terms/f/financial-statements.asp"
      }
    ]
  },

  {
    level: "Advanced",
    projects: [
      {
        title: "Instrumental Variables (2SLS)",
        domain: "Econometrics",
        purpose: "Address endogeneity.",
        steps: ["Instrument validity", "2SLS", "Weak instruments"],
        link: "https://press.princeton.edu/books/hardcover/9780691120355/mostly-harmless-econometrics"
      },
      {
        title: "Panel Data & Fixed Effects",
        domain: "Econometrics",
        purpose: "Control unobserved heterogeneity.",
        steps: ["Within estimator", "FE vs RE", "Clustering"],
        link: "https://mixtape.scunning.com/"
      },
      {
        title: "Difference-in-Differences",
        domain: "Causal Inference",
        purpose: "Policy evaluation using natural experiments.",
        steps: ["Parallel trends", "Event studies", "Robustness checks"],
        link: "https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice"
      },
      {
        title: "Regression Discontinuity",
        domain: "Causal Inference",
        purpose: "Local causal effects at thresholds.",
        steps: ["Bandwidth choice", "Continuity tests", "Local regressions"],
        link: "https://mixtape.scunning.com/"
      },
      {
        title: "Time Series & Forecasting",
        domain: "Econometrics",
        purpose: "Model temporal dependence.",
        steps: ["Stationarity", "ARIMA", "Forecast evaluation"],
        link: "https://otexts.com/fpp3/"
      },
      {
        title: "Bayesian Modeling",
        domain: "Stats",
        purpose: "Probability-based inference.",
        steps: ["Priors", "Posteriors", "MCMC diagnostics"],
        link: "https://xcelab.net/rm/statistical-rethinking/"
      },
      {
        title: "Machine Learning for Social Science",
        domain: "Stats",
        purpose: "Prediction and causal adjustment using ML.",
        steps: ["Regularization", "Cross-validation", "Interpretability"],
        link: "https://www.doubleml.org/stable/"
      },
      {
        title: "Advanced Text Analysis",
        domain: "CS",
        purpose: "Model meaning at scale.",
        steps: ["Topic models", "Embeddings", "Validation"],
        link: "https://www.tidytextmining.com/"
      },
      {
        title: "Asset Pricing Foundations",
        domain: "Finance",
        purpose: "Risk, return, and factor models.",
        steps: ["CAPM", "Factor models", "Empirical tests"],
        link: "https://pages.stern.nyu.edu/~adamodar/"
      }
    ]
  },

  {
    level: "Workflow",
    projects: [
      {
        title: "Reproducible Research Projects",
        domain: "Methods",
        purpose: "Ensure analyses can be replicated.",
        steps: ["Project structure", "Notebooks", "Run scripts"],
        link: "https://the-turing-way.netlify.app/"
      },
      {
        title: "Version Control with Git",
        domain: "Dev",
        purpose: "Track changes and collaborate.",
        steps: ["Commits", "Branches", "Pull requests"],
        link: "https://swcarpentry.github.io/git-novice/"
      },
      {
        title: "Environments & Containers",
        domain: "Dev",
        purpose: "Create reproducible compute environments for analyses.",
        steps: ["Conda/virtualenv", "Docker basics", "Dependency manifest"],
        link: "https://docs.docker.com/get-started/"
      },
      {
        title: "Data Management & Sharing",
        domain: "Data",
        purpose: "Document, store, and publish data.",
        steps: ["Metadata", "Repositories", "Licensing"],
        link: "https://dmponline.org/"
      },
      {
        title: "Pre-registration & Open Science",
        domain: "Methods",
        purpose: "Increase research credibility.",
        steps: ["Pre-analysis plans", "Registered reports", "Replication"],
        link: "https://www.socialscienceregistry.org/"
      },
      {
        title: "Web Scraping & APIs",
        domain: "CS",
        purpose: "Automated data collection.",
        steps: ["HTTP requests", "Parsing", "Rate limits"],
        link: "https://realpython.com/"
      },
      {
        title: "GIS & Spatial Analysis",
        domain: "Geo",
        purpose: "Spatially explicit analysis.",
        steps: ["Shapefiles", "Spatial joins", "Maps"],
        link: "https://www.qgistutorials.com/"
      },
      {
        title: "Academic Writing & LaTeX",
        domain: "Pub",
        purpose: "Produce publication-quality manuscripts.",
        steps: ["Outlining", "Revision", "Typesetting"],
        link: "https://www.overleaf.com/learn"
      },
      {
        title: "Responsible Data & FAIR Principles",
        domain: "Ethics",
        purpose: "Ethical, reusable research outputs.",
        steps: ["Bias assessment", "Privacy", "FAIR data"],
        link: "https://www.go-fair.org/fair-principles/"
      }
    ]
  }
];
