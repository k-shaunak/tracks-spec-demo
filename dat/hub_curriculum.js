/**
 * TRACKS @ PWC - CURRICULUM DATA
 * Module: Epistemic Foundations & Protocols
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.CURRICULUM = [
    {
        id: 'foundations',
        title: 'I. Epistemic Foundations',
        subtitle: 'Philosophy of Science & Inquiry',
        intro: "Research design requires alignment between the nature of the reality being studied (ontology), the valid methods for acquiring knowledge of that reality (epistemology), and the specific tools employed. This module reviews the metatheoretical frameworks that underpin rigorous inquiry.",
        readings: [
            { title: "The Logic of Scientific Discovery", author: "Popper", note: "Falsifiability and demarcation." },
            { title: "The Structure of Scientific Revolutions", author: "Kuhn", note: "Paradigms and normal science." },
            { title: "A Realist Theory of Science", author: "Bhaskar", note: "Critical Realism and mechanisms." },
            { title: "Constructing Social Research", author: "Ragin", note: "Representations of social life." }
        ],
        protocols: [
            { 
                title: 'The Theoretical Puzzle', 
                desc: "Formulating a problem statement driven by theoretical tension rather than empirical novelty.",
                deliverable: 'Problem Statement', 
                context: "A 'gap' implies an absence of literature, whereas a 'puzzle' implies a contradiction. Strong research questions often arise from a 'Destabilizing Condition' where current theory predicts Outcome A, but empirical observation suggests Outcome B. This tension drives the inquiry.",
                steps: [
                    { label: 'Consensus', text: 'The prevailing theoretical expectation.', stem: 'Existing literature generally posits that [Mechanism X] leads to [Outcome A]...' },
                    { label: 'Anomaly', text: 'The empirical deviation.', stem: 'However, observations of [Phenomenon Y] indicate [Outcome B], challenging the universality of...' },
                    { label: 'Significance', text: 'Theoretical implication.', stem: 'Resolving this tension is necessary to clarify the boundary conditions of...' },
                    { label: 'Inquiry', text: 'The governing question.', stem: 'This study investigates the extent to which...' }
                ],
                risk: "Gap-Spotting: Motivating research solely by the absence of prior study ('no one has looked at this') rather than the presence of a theoretical contradiction."
            },
            { 
                title: 'Metatheoretical Alignment', 
                desc: "Ensuring consistency between ontology, epistemology, and method.",
                deliverable: 'Methodological Defense', 
                context: "Methodological choices imply ontological commitments. A survey assumes the construct is measurable and stable (positivism/realism); an ethnography may assume the construct is socially negotiated (constructivism). Explicitly stating these assumptions prevents incoherence.",
                steps: [
                    { label: 'Ontological Stance', text: 'Nature of the object.', stem: 'The study operates from a [Realist/Constructivist] perspective, treating the subject as...' },
                    { label: 'Epistemic Approach', text: 'Nature of knowledge.', stem: 'Knowledge of this phenomenon is best acquired through [Measurement/Interpretation] because...' },
                    { label: 'Methodological Fit', text: 'Tool alignment.', stem: 'Consequently, [Method] is selected to capture the [Variance/Meaning] of...' }
                ],
                risk: "Incommensurability: Utilizing methods that contradict the stated ontological position (e.g., searching for objective laws of a socially constructed and fluid phenomenon)."
            },
            { 
                title: 'Logic of Inference', 
                desc: "Deduction, Induction, and Abduction.",
                deliverable: 'Inferential Strategy', 
                context: "Research typically follows one of three logics: Deduction (testing theory against data), Induction (building theory from data), or Abduction (inference to the best explanation for a surprising fact). Clarifying the inferential direction aids in research design.",
                steps: [
                    { label: 'Logic', text: 'Direction of inference.', stem: 'This study employs an [Abductive] logic, beginning with the surprising observation of...' },
                    { label: 'Theory Role', text: 'A priori vs. A posteriori.', stem: 'Theory serves as a [Heuristic/Hypothesis] to be [Refined/Tested]...' },
                    { label: 'Claim', text: 'Nature of the conclusion.', stem: 'The analysis aims to establish [Causal Necessity/Plausible Explanation]...' }
                ],
                risk: "Circular Reasoning: Using the same data to generate a hypothesis and to test it (violating the distinction between exploratory and confirmatory analysis)."
            }
        ]
    },
    {
        id: 'literature',
        title: 'II. Disciplinary Context',
        subtitle: 'Synthesis & Rhetoric',
        intro: "The literature review establishes the genealogy of the research question. It is an argument, not a summary. The goal is to map the conceptual terrain—consensus, controversy, and silence—to locate the current study within the broader conversation.",
        readings: [
            { title: "The Craft of Research", author: "Booth et al.", note: "From topic to problem." },
            { title: "The Science of Scientific Writing", author: "Gopen & Swan", note: "Reader expectation." },
            { title: "Reviewing the Literature", author: "Grant & Booth", note: "Typologies of review." }
        ],
        protocols: [
            {
                title: 'Thematic Synthesis',
                desc: "Organizing scholarship by concept rather than author.",
                deliverable: 'Concept Matrix',
                context: "Advanced reviews organize literature into 'schools of thought' or thematic clusters. This highlights the intellectual relationship between sources (agreement, divergence, extension) rather than treating them as isolated contributions.",
                steps: [
                    { label: 'Convergence', text: 'Points of agreement.', stem: 'There is broad consensus regarding [Concept A], as evidenced by...' },
                    { label: 'Divergence', text: 'Points of debate.', stem: 'However, scholars disagree on the mechanism of [Concept B], with [School X] arguing...' },
                    { label: 'Lacuna', text: 'The silence.', stem: 'Despite this debate, the literature has largely overlooked...' }
                ],
                pitfall: "The List: Sequential summaries of individual papers ('Author A said X, Author B said Y') without synthesis or argument."
            },
            {
                title: 'Rhetorical Structure',
                desc: "Managing reader expectation at the paragraph level.",
                deliverable: 'Draft Section',
                context: "Academic clarity is a function of structure. The 'Topic Sentence' sets the expectation/claim; the 'Stress Position' (end of sentence/paragraph) delivers the emphasis/evidence. Complex ideas require rigid structural scaffolding.",
                steps: [
                    { label: 'Topic (Pivot)', text: 'The claim.', stem: '[Conceptual Claim]...' },
                    { label: 'Support', text: 'The evidence.', stem: 'This is supported by [Data/Citation]...' },
                    { label: 'Analysis', text: 'The connection.', stem: 'This suggests that...' },
                    { label: 'Transition', text: 'The handoff.', stem: 'Consequently, it is necessary to examine...' }
                ],
                pitfall: "Buried Leads: Placing the primary claim in the middle of a paragraph where it has the least rhetorical impact."
            }
        ]
    },
    {
        id: 'quantitative',
        title: 'III. Causal Identification',
        subtitle: 'Inference in Observational Data',
        intro: "In the absence of randomization, correlation is rarely causation. This module focuses on identification strategies—methods to isolate exogenous variation in observational data to approximate the experimental ideal.",
        readings: [
            { title: "Mostly Harmless Econometrics", author: "Angrist & Pischke", note: "The Experimental Ideal." },
            { title: "Causal Inference: The Mixtape", author: "Cunningham", note: "DAGs and Identification." },
            { title: "Econometric Analysis", author: "Greene", note: "Reference text." }
        ],
        protocols: [
            { 
                title: 'Identification Strategy', 
                desc: "Isolating exogenous variation.",
                deliverable: 'Identification Assumption', 
                context: "The credibility of a study rests on the identification strategy, not the estimator (e.g., OLS vs. Probit). The researcher must articulate exactly where the 'random' variation comes from and why selection bias is minimized.",
                steps: [
                    { label: 'Ideal Counterfactual', text: 'Theoretical baseline.', stem: 'Ideally, we would compare the treated unit to...' },
                    { label: 'Selection Mechanism', text: 'Source of bias.', stem: 'However, treatment assignment is endogenous because...' },
                    { label: 'Exogenous Shock', text: 'The instrument/design.', stem: 'We therefore exploit [Shock/Design] which provides variation independent of...' }
                ],
                risk: "Endogeneity: Failure to account for unobserved confounders correlated with both treatment and outcome."
            },
            { 
                title: 'Instrumental Variables', 
                desc: "Validity and Relevance.",
                deliverable: '2SLS Specification', 
                context: "IV requires two conditions: Relevance (Instrument affects Treatment) and Exclusion (Instrument affects Outcome ONLY through Treatment). The Exclusion Restriction is theoretically argued, not statistically tested.",
                steps: [
                    { label: 'Relevance', text: 'First stage.', stem: 'The instrument is a strong predictor of treatment (F-stat > 10)...' },
                    { label: 'Exclusion', text: 'Theoretical argument.', stem: 'It is argued that [Instrument] has no direct effect on [Outcome] except via...' },
                    { label: 'LATE', text: 'Interpretation.', stem: 'The estimate represents the Local Average Treatment Effect for compliers...' }
                ],
                risk: "Weak Instruments: Using an instrument with low predictive power, amplifying bias in the second stage."
            },
            { 
                title: 'Difference-in-Differences', 
                desc: "Parallel Trends and SUTVA.",
                deliverable: 'Event Study Plot', 
                context: "DiD assumes that, absent treatment, the treated and control groups would have evolved similarly (Parallel Trends). It also assumes no spillovers between units (SUTVA).",
                steps: [
                    { label: 'Parallel Trends', text: 'Pre-trend verification.', stem: 'Pre-treatment coefficients are statistically insignificant, supporting the assumption...' },
                    { label: 'SUTVA', text: 'Non-interference.', stem: 'We assume treatment of unit i does not impact the outcome of unit j...' },
                    { label: 'Specification', text: 'Dynamic effects.', stem: 'We estimate a dynamic model to capture phase-in effects...' }
                ],
                risk: "Violation of Parallel Trends: Divergence in pre-treatment periods suggests unobserved time-varying confounders."
            }
        ]
    },
    {
        id: 'qualitative',
        title: 'IV. Qualitative Rigor',
        subtitle: 'Hermeneutics & Validity',
        intro: "Qualitative rigor is defined by trustworthiness, authenticity, and credibility. This module addresses the systematic analysis of non-numerical data, ensuring that interpretations are grounded in evidence rather than anecdotalism.",
        readings: [
            { title: "The Coding Manual", author: "Saldaña", note: "Analytic methods." },
            { title: "The Interpretation of Cultures", author: "Geertz", note: "Thick description." },
            { title: "Naturalistic Inquiry", author: "Lincoln & Guba", note: "Trustworthiness criteria." }
        ],
        protocols: [
            { 
                title: 'Analytic Induction', 
                desc: "Systematic coding and theory building.",
                deliverable: 'Codebook', 
                context: "Coding is the process of organizing data to generate theory (grounded theory) or test concepts. It moves from descriptive (First Cycle) to pattern-finding (Second Cycle).",
                steps: [
                    { label: 'Open Coding', text: 'Labeling concepts.', stem: 'Initial analysis identifies the following in-vivo codes...' },
                    { label: 'Axial Coding', text: 'Relating categories.', stem: 'These codes cluster around the central phenomenon of...' },
                    { label: 'Saturation', text: 'Sufficiency.', stem: 'Data collection continued until no new themes emerged...' }
                ],
                pitfall: "Anecdotalism: Selecting quotes to support a pre-existing bias rather than systematically analyzing the entire corpus."
            },
            { 
                title: 'Source Criticism', 
                desc: "Archival and document analysis.",
                deliverable: 'Source Critique', 
                context: "Documents are not neutral repositories of fact; they are social artifacts produced within specific power structures. Analysis must account for the conditions of production and preservation.",
                steps: [
                    { label: 'Provenance', text: 'Context of creation.', stem: 'This document was produced by [Actor] with the intent to...' },
                    { label: 'Silence', text: 'Archival exclusion.', stem: 'The record privileges the perspective of [Group] while obscuring...' },
                    { label: 'Triangulation', text: 'Cross-verification.', stem: 'Comparing this with [Source B] reveals a discrepancy in...' }
                ],
                pitfall: "Positivism: Treating archival texts as objective data points without contextualizing their subjective origins."
            }
        ]
    }
];