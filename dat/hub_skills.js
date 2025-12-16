/**
 * TRACKS @ PWC - SKILLS DATA
 * Module: Skill Refresher
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.SKILL_LEVELS = [
    {
        level: "Foundations",
        projects: [
            { 
                title: 'Calculus: Derivatives', 
                domain: 'Math', 
                purpose: 'Marginal effects.',
                steps: ['Rate of change', 'Power/Chain Rule'], 
                link: 'https://www.khanacademy.org/math/calculus-1' 
            },
            { 
                title: 'Linear Algebra: Matrices', 
                domain: 'Math', 
                purpose: 'OLS computation (Ax=b).',
                steps: ['Multiplication', 'Inversion/Eigenvalues'], 
                link: 'https://www.3blue1brown.com/topics/linear-algebra' 
            },
            { 
                title: 'Probability: Expectations', 
                domain: 'Stats', 
                purpose: 'Expectations Operator E[X].',
                steps: ['E[X] rules', 'Variance/Covariance'], 
                link: 'https://projects.iq.harvard.edu/stat110' 
            },
            { 
                title: 'Real Analysis: Logic', 
                domain: 'Math', 
                purpose: 'Proof construction.',
                steps: ['Proof techniques', 'Limits'], 
                link: 'https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/' 
            },
            { 
                title: 'Python for Econ', 
                domain: 'CS', 
                purpose: 'Scientific computing.',
                steps: ['Numpy', 'Pandas'], 
                link: 'https://quantecon.org/' 
            },
            { 
                title: 'Modern R', 
                domain: 'CS', 
                purpose: 'Statistical analysis.',
                steps: ['Tidyverse', 'ggplot2'], 
                link: 'https://r4ds.hadley.nz/' 
            },
            { 
                title: 'Systematic Search', 
                domain: 'Library', 
                purpose: 'Reproducible search.',
                steps: ['Boolean Logic', 'MeSH/Headings'], 
                link: 'https://libguides.mit.edu/' 
            }
        ]
    },
    {
        level: "Core",
        projects: [
            { 
                title: 'Econometrics: OLS', 
                domain: 'Econ', 
                purpose: 'Estimator derivation.',
                steps: ['Minimize SSR', 'Normal Equations'], 
                link: 'https://sites.google.com/site/econometricsacademy/' 
            },
            { 
                title: 'Hypothesis Testing', 
                domain: 'Stats', 
                purpose: 'Inference logic.',
                steps: ['Null Hypothesis', 'Power Analysis'], 
                link: 'https://www.openintro.org/' 
            },
            { 
                title: 'Data Wrangling', 
                domain: 'Data', 
                purpose: 'Data preparation.',
                steps: ['Merge/Join', 'Reshape (Long/Wide)'], 
                link: 'https://pandas.pydata.org/docs/user_guide/10min.html' 
            },
            { 
                title: 'Visualization', 
                domain: 'Data', 
                purpose: 'Visual communication.',
                steps: ['Grammar of Graphics', 'Aesthetics'], 
                link: 'https://r-graphics.org/' 
            },
            { 
                title: 'Interview Design', 
                domain: 'Methods', 
                purpose: 'Instrument design.',
                steps: ['Semi-structured', 'Probing'], 
                link: 'https://sociology.fas.harvard.edu/' 
            },
            { 
                title: 'Coding (Qual)', 
                domain: 'Analysis', 
                purpose: 'Text analysis.',
                steps: ['In Vivo', 'Pattern Matching'], 
                link: 'https://us.sagepub.com/en-us/nam/the-coding-manual-for-qualitative-researchers/book272023' 
            },
            { 
                title: 'Time Value of Money', 
                domain: 'Finance', 
                purpose: 'Asset pricing.',
                steps: ['NPV', 'Discounting'], 
                link: 'https://www.khanacademy.org/economics-finance-domain/core-finance' 
            }
        ]
    },
    {
        level: "Advanced",
        projects: [
            { 
                title: 'IV: 2SLS', 
                domain: 'Econometrics', 
                purpose: 'Endogeneity.',
                steps: ['Exclusion Restriction', '2SLS'], 
                link: 'https://www.mostlyharmlesseconometrics.com/' 
            },
            { 
                title: 'Panel Fixed Effects', 
                domain: 'Econometrics', 
                purpose: 'Unobserved heterogeneity.',
                steps: ['Within-transformation', 'Clustering'], 
                link: 'https://mixtape.scunning.com/' 
            },
            { 
                title: 'Time Series: ARIMA', 
                domain: 'Econometrics', 
                purpose: 'Forecasting.',
                steps: ['Stationarity', 'ACF/PACF'], 
                link: 'https://people.duke.edu/~rnau/411arim.htm' 
            },
            { 
                title: 'Causal: DiD', 
                domain: 'Econometrics', 
                purpose: 'Natural experiments.',
                steps: ['Parallel Trends', 'Event Study'], 
                link: 'https://www.worldbank.org/en/programs/sief-trust-fund/publication/impact-evaluation-in-practice' 
            },
            { 
                title: 'Causal: RDD', 
                domain: 'Econometrics', 
                purpose: 'Cutoff designs.',
                steps: ['Local Randomization', 'Bandwidth'], 
                link: 'https://mixtape.scunning.com/' 
            },
            { 
                title: 'Bayesian MCMC', 
                domain: 'Stats', 
                purpose: 'Belief updating.',
                steps: ['Priors/Posteriors', 'MCMC'], 
                link: 'https://xcelab.net/rm/statistical-rethinking/' 
            }
        ]
    },
    {
        level: "Workflow",
        projects: [
            { 
                title: 'NLP: Text Mining', 
                domain: 'CS', 
                purpose: 'Text as data.',
                steps: ['Tokenization', 'TF-IDF'], 
                link: 'https://www.tidytextmining.com/' 
            },
            { 
                title: 'Web Scraping', 
                domain: 'CS', 
                purpose: 'Data collection.',
                steps: ['DOM Parsing', 'Requests'], 
                link: 'https://realpython.com/' 
            },
            { 
                title: 'GIS: Mapping', 
                domain: 'Geo', 
                purpose: 'Spatial analysis.',
                steps: ['Shapefiles', 'Choropleth'], 
                link: 'https://www.qgistutorials.com/' 
            },
            { 
                title: 'Git Version Control', 
                domain: 'Dev', 
                purpose: 'Collaboration.',
                steps: ['Commits', 'Branches/Merge'], 
                link: 'https://swcarpentry.github.io/git-novice/' 
            },
            { 
                title: 'LaTeX', 
                domain: 'Pub', 
                purpose: 'Typesetting.',
                steps: ['BibTeX', 'Structure'], 
                link: 'https://www.overleaf.com/learn' 
            }
        ]
    }
];