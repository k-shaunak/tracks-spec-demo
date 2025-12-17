/**
 * TRACKS @ PWC - CURRICULUM DATA
 * Module: Epistemic Foundations & Protocols
 * Updated: Added Module VII (Professional Intelligence II) for Policy & Social Sciences.
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.CURRICULUM = [
    {
        id: 'foundations',
        title: 'I. Epistemic Foundations',
        subtitle: 'Philosophy of Science & Positionality',
        intro: "Inquiry is never neutral. A rigorous researcher must first locate themselves within the landscape of knowledge production. This module examines the metatheoretical assumptions that underpin validity and invites the researcher to articulate their distinct epistemic stance.",
        readings: [
            { title: "The Logic of Scientific Discovery", author: "Karl Popper", note: "Falsifiability as the criterion of demarcation." },
            { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", note: "Paradigms, anomalies, and normal science." },
            { title: "Situated Knowledges", author: "Donna Haraway", note: "Objectivity and the partial perspective." },
            { title: "A Realist Theory of Science", author: "Roy Bhaskar", note: "Critical Realism: Mechanisms vs. Events." }
        ],
        protocols: [
            { 
                title: 'The Theoretical Puzzle', 
                desc: "Elevating a topic into a problem.",
                deliverable: 'The Problematization Statement', 
                context: "A research 'gap' suggests a mere absence of information; a 'puzzle' identifies a friction between existing theories or between theory and observation. High-impact research often stems from a 'Destabilizing Condition'—a contradiction that current frameworks cannot resolve without modification.",
                steps: [
                    { label: 'Consensus', text: 'The prevailing theoretical expectation.', stem: 'The dominant theoretical framework [Theory X] predicts that [Mechanism A] should result in [Outcome Y]...' },
                    { label: 'Anomaly', text: 'The empirical deviation.', stem: 'However, empirical observation of [Phenomenon Z] reveals [Outcome Q], suggesting a boundary condition or failure of...' },
                    { label: 'Stakes', text: 'The cost of ignorance.', stem: 'Failure to resolve this tension limits our capacity to understand [Broader Implication]...' },
                    { label: 'Inquiry', text: 'The governing question.', stem: 'This study therefore investigates...' }
                ],
                risk: "Gap-Spotting: Motivating research solely by the absence of prior study ('no one has looked at this') rather than the presence of a theoretical contradiction."
            },
            { 
                title: 'Epistemic Positionality', 
                desc: "Aligning Ontology, Epistemology, and Axiology.",
                deliverable: 'Methodological Defense', 
                context: "Methods are not interchangeable tools; they are manifestations of specific beliefs about the nature of reality (Ontology) and how we can know it (Epistemology). Coherence requires that the method selected is capable of answering the specific type of question asked.",
                steps: [
                    { label: 'Ontological Stance', text: 'Nature of the reality.', stem: 'This study adopts a [Realist/Constructivist] stance, positing that the phenomenon exists [Independently/Socially]...' },
                    { label: 'Epistemic Approach', text: 'Nature of knowledge.', stem: 'Knowledge is therefore best acquired through [Measurement/Interpretation] to capture [Variance/Meaning]...' },
                    { label: 'Axiological Check', text: 'Values and bias.', stem: 'The researcher acknowledges their role as [Objective Observer/Participant], aiming to...' }
                ],
                risk: "Incommensurability: Deploying methods that contradict the study's stated view of reality (e.g., seeking universal, objective laws for a highly contextual, socially constructed phenomenon)."
            },
            { 
                title: 'Logic of Inference', 
                desc: "Clarifying the direction of reasoning.",
                deliverable: 'Inferential Map', 
                context: "Research typically follows one of three logics: Deduction (Theory → Data), Induction (Data → Theory), or Abduction (Surprising Fact → Best Explanation). Explicitly defining the inferential logic prevents the error of 'HARKing' (Hypothesizing After Results are Known).",
                steps: [
                    { label: 'Logic', text: 'Direction of inference.', stem: 'This study employs an [Abductive] logic, beginning with the observation of...' },
                    { label: 'Theory Role', text: 'A priori vs. A posteriori.', stem: 'Theory serves as a [Heuristic/Hypothesis] to be [Refined/Tested]...' },
                    { label: 'Claim Scope', text: 'Nature of the conclusion.', stem: 'The analysis aims to establish [Causal Necessity/Plausible Explanation/Descriptive Typology]...' }
                ],
                risk: "Circular Reasoning: Using the same dataset to generate a hypothesis and to validate it, thereby violating the distinction between exploratory and confirmatory analysis."
            }
        ]
    },
    {
        id: 'literature',
        title: 'II. Critical Synthesis',
        subtitle: 'Genealogy & Rhetoric',
        intro: "Academic writing is not a transcription of thoughts; it is the engineering of attention. This module focuses on the 'Conversation Model' of literature review, treating prior scholarship not as a list of facts, but as a dynamic dialogue of converging and diverging viewpoints.",
        readings: [
            { title: "The Craft of Research", author: "Booth, Colomb, & Williams", note: "From topic to problem to argument." },
            { title: "They Say / I Say", author: "Graff & Birkenstein", note: "The moves that matter in academic writing." },
            { title: "Reviewing the Literature", author: "Grant & Booth", note: "Structured typologies of review." }
        ],
        protocols: [
            {
                title: 'Thematic Synthesis',
                desc: "Mapping the conceptual terrain.",
                deliverable: 'Concept Matrix',
                context: "A sophisticated review organizes literature by concept rather than by author. This approach highlights the intellectual relationships between sources (agreement, divergence, extension) and prevents the review from becoming an annotated bibliography.",
                steps: [
                    { label: 'Convergence', text: 'Points of agreement.', stem: 'There is broad consensus regarding [Concept A], as evidenced by...' },
                    { label: 'Divergence', text: 'Points of debate.', stem: 'However, scholars disagree on the mechanism of [Concept B], with [School X] arguing... while [School Y] contends...' },
                    { label: 'Lacuna', text: 'The silence.', stem: 'Despite this debate, the literature has largely overlooked the influence of...' }
                ],
                pitfall: "The Roll Call: A sequential summary of individual papers ('Author A said X, then Author B said Y') without synthesizing the relationship between them."
            },
            {
                title: 'Rhetorical Engineering',
                desc: "Managing reader expectation.",
                deliverable: 'Paragraph Architecture',
                context: "Clarity is a function of structure. The 'Topic Sentence' sets the expectation or claim; the 'Stress Position' (end of the sentence/paragraph) delivers the emphasis or new evidence. Complex ideas require rigid structural scaffolding to be accessible.",
                steps: [
                    { label: 'Pivot (Topic)', text: 'The claim.', stem: '[Conceptual Claim]...' },
                    { label: 'Evidence', text: 'The support.', stem: 'This is supported by [Data/Citation], which demonstrates...' },
                    { label: 'Warrant', text: 'The logic.', stem: 'This suggests that...' },
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
        intro: "Correlation provides a hint; causation provides a lever. This module focuses on the 'Credibility Revolution' in quantitative social science, emphasizing design-based inference over complex modeling. The goal is to isolate exogenous variation to approximate the experimental ideal.",
        readings: [
            { title: "Mostly Harmless Econometrics", author: "Angrist & Pischke", note: "The Experimental Ideal." },
            { title: "Causal Inference: The Mixtape", author: "Cunningham", note: "DAGs and Identification." },
            { title: "R for Data Science", author: "Wickham", note: "Tidy data principles." }
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
                risk: "Endogeneity: Failure to account for unobserved confounders that are correlated with both the treatment and the outcome."
            },
            { 
                title: 'Difference-in-Differences', 
                desc: "Temporal and cross-sectional variation.",
                deliverable: 'Event Study Plot', 
                context: "DiD assumes that, absent treatment, the treated and control groups would have evolved similarly (Parallel Trends). It also assumes no spillovers between units (SUTVA).",
                steps: [
                    { label: 'Parallel Trends', text: 'Pre-trend verification.', stem: 'Pre-treatment coefficients are statistically insignificant, supporting the assumption...' },
                    { label: 'SUTVA', text: 'Non-interference.', stem: 'We assume treatment of unit i does not impact the outcome of unit j...' },
                    { label: 'Specification', text: 'Dynamic effects.', stem: 'We estimate a dynamic model to capture phase-in effects...' }
                ],
                risk: "Violation of Parallel Trends: Divergence in pre-treatment periods suggests unobserved time-varying confounders."
            },
            {
                title: 'Data Integrity',
                desc: "Pre-analysis and cleaning.",
                deliverable: 'Pre-Analysis Plan (PAP)',
                context: "The 'Garden of Forking Paths' refers to the multitude of decisions researchers make during analysis (outlier removal, variable transformation). A Pre-Analysis Plan commits to these decisions beforehand to prevent p-hacking.",
                steps: [
                    { label: 'Inclusion', text: 'Sample definition.', stem: 'The sample will be restricted to [Criteria] because...' },
                    { label: 'Transformation', text: 'Variable construction.', stem: 'The outcome variable will be log-transformed to address skewness...' },
                    { label: 'Model', text: 'Primary specification.', stem: 'The main specification will control for [Fixed Effects]...' }
                ],
                risk: "p-Hacking: Iteratively tweaking model specifications or sample definitions until a statistically significant result is achieved."
            }
        ]
    },
    {
        id: 'qualitative',
        title: 'IV. Qualitative Rigor',
        subtitle: 'Hermeneutics & Validity',
        intro: "Qualitative research is not merely anecdotal; it is the systematic analysis of meaning, process, and context. This module addresses the criteria for trustworthiness (credibility, transferability, dependability) and the mechanics of inductive theory building.",
        readings: [
            { title: "The Coding Manual", author: "Saldaña", note: "First and Second Cycle coding methods." },
            { title: "The Interpretation of Cultures", author: "Geertz", note: "Thick description." },
            { title: "Naturalistic Inquiry", author: "Lincoln & Guba", note: "Trustworthiness criteria." }
        ],
        protocols: [
            { 
                title: 'Analytic Induction', 
                desc: "From raw data to abstract concept.",
                deliverable: 'Codebook', 
                context: "Coding is the process of organizing data to generate theory (grounded theory) or test concepts. It moves from descriptive (First Cycle) to pattern-finding (Second Cycle), requiring constant comparison.",
                steps: [
                    { label: 'Open Coding', text: 'Labeling concepts.', stem: 'Initial analysis identifies the following in-vivo codes...' },
                    { label: 'Axial Coding', text: 'Relating categories.', stem: 'These codes cluster around the central phenomenon of...' },
                    { label: 'Saturation', text: 'Sufficiency.', stem: 'Data collection continued until no new themes emerged...' }
                ],
                pitfall: "Anecdotalism: Selecting isolated quotes to support a pre-existing bias rather than systematically analyzing the entire corpus for patterns."
            },
            { 
                title: 'Source Criticism', 
                desc: "Archival and document analysis.",
                deliverable: 'Source Critique', 
                context: "Documents are not neutral repositories of fact; they are social artifacts produced within specific power structures. Analysis must account for the conditions of production, preservation, and silence.",
                steps: [
                    { label: 'Provenance', text: 'Context of creation.', stem: 'This document was produced by [Actor] with the intent to...' },
                    { label: 'Silence', text: 'Archival exclusion.', stem: 'The record privileges the perspective of [Group] while obscuring...' },
                    { label: 'Triangulation', text: 'Cross-verification.', stem: 'Comparing this with [Source B] reveals a discrepancy in...' }
                ],
                pitfall: "Positivism: Treating archival texts as objective data points without contextualizing their subjective and political origins."
            },
            {
                title: 'Reflexive Journaling',
                desc: "Monitoring researcher bias.",
                deliverable: 'Reflexivity Statement',
                context: "The researcher is the instrument. Personal history, bias, and emotional response to the field site affect data collection. Reflexivity involves making these internal processes explicit to enhance credibility.",
                steps: [
                    { label: 'Pre-conception', text: 'Initial bias.', stem: 'I entered the field assuming that...' },
                    { label: 'Challenge', text: 'Field disruption.', stem: 'My interaction with [Participant] challenged this view by...' },
                    { label: 'Adjustment', text: 'Theoretical shift.', stem: 'Consequently, I refined the coding frame to account for...' }
                ],
                risk: "Subjectivity masking: Presenting interpretation as objective fact by hiding the researcher's role in constructing the narrative."
            }
        ]
    },
    {
        id: 'management',
        title: 'V. The Resilient Scholar',
        subtitle: 'Process, Ethics & Resilience',
        intro: "The intellectual life is characterized by uncertainty, criticism, and non-linear progress. Sustainable research practice requires not just cognitive skill, but emotional resilience, ethical fortitude, and professional project management.",
        readings: [
            { title: "Thinking, Fast and Slow", author: "Kahneman", note: "Cognitive biases in research." },
            { title: "Letters to a Young Scientist", author: "E.O. Wilson", note: "Persistence and curiosity." },
            { title: "On Being a Scientist", author: "National Academies", note: "Responsible conduct." }
        ],
        protocols: [
            { 
                title: 'Navigating Adversity', 
                desc: "Processing rejection and critique.",
                deliverable: 'Revision Strategy', 
                context: "Rejection is an intrinsic component of the scientific process, serving not as a judgment of personal worth, but as a mechanism for collective refinement. Constructive engagement with critique is the primary engine of improvement.",
                steps: [
                    { label: 'De-personalization', text: 'Separating self from work.', stem: 'The critique addresses the [Argument/Method], not the [Scholar]...' },
                    { label: 'Validation', text: 'Finding the signal.', stem: 'The reviewer correctly identifies a weakness in...' },
                    { label: 'Response', text: 'Actionable change.', stem: 'I will address this by clarifying [Section X] and adding...' }
                ],
                risk: "Defensiveness: Dismissing valid critique as a personal attack, thereby missing the opportunity to strengthen the work."
            },
            { 
                title: 'Research Ethics', 
                desc: "Beyond the IRB.",
                deliverable: 'Ethical Impact Statement', 
                context: "Ethical research goes beyond compliance. It involves considering the downstream consequences of findings, the power dynamics with participants, and the integrity of authorship and data sharing.",
                steps: [
                    { label: 'Beneficence', text: 'Maximizing good.', stem: 'The research benefits the community by...' },
                    { label: 'Non-maleficence', text: 'Minimizing harm.', stem: 'Potential stigmatization of the group will be mitigated by...' },
                    { label: 'Justice', text: 'Fair distribution.', stem: 'The burdens and benefits of this research are distributed...' }
                ],
                risk: "Procedural Ethics: Assuming that obtaining a signature on a consent form constitutes the entirety of ethical obligation."
            },
            {
                title: 'Project Management',
                desc: "Treating research as a workflow.",
                deliverable: 'Gantt/Timeline',
                context: "Intellectual ambition often outpaces logistical reality. Effective researchers manage their time, data, and resources with the same rigor they apply to their analysis.",
                steps: [
                    { label: 'Scope', text: 'Defining boundaries.', stem: 'To ensure feasibility, this project will not cover...' },
                    { label: 'Dependencies', text: 'Critical path.', stem: 'Data access must be secured before [Date] to allow for...' },
                    { label: 'Contingency', text: 'Plan B.', stem: 'If access is denied, the backup strategy is...' }
                ],
                risk: "Planning Fallacy: Underestimating the time required for data cleaning and administrative tasks."
            }
        ]
    },
    {
        id: 'professional_finance',
        title: 'VI. Professional Intelligence I',
        subtitle: 'Markets, Valuation & Strategy',
        intro: "In the professional domain, the goal of research shifts from 'Truth' (high statistical certainty) to 'Edge' (Positive Expected Value). This module bridges the gap between academic rigor and market reality, focusing on valuation, competitive strategy, and decision-making under uncertainty.",
        readings: [
            { title: "Expectations Investing", author: "Mauboussin & Rappaport", note: "Reading the market's implied forecast." },
            { title: "Narrative and Numbers", author: "Aswath Damodaran", note: "Connecting story to valuation." },
            { title: "Superforecasting", author: "Philip Tetlock", note: "The art and science of prediction." }
        ],
        protocols: [
            { 
                title: 'The Variant View', 
                desc: "Differentiation from consensus.",
                deliverable: 'Thesis Pitch', 
                context: "Markets are generally efficient. To generate 'alpha' (excess return), a researcher must hold a view that is both different from the consensus AND correct. Mere correctness is insufficient if the market has already priced it in.",
                steps: [
                    { label: 'Consensus', text: 'What is priced in?', stem: 'The market currently assumes [Growth/Margin] based on [Multiple/Price], implying a scenario of...' },
                    { label: 'Variance', text: 'The divergence.', stem: 'My analysis suggests [Metric] will actually be [Higher/Lower] because the market is underestimating...' },
                    { label: 'Catalyst', text: 'The correction mechanism.', stem: 'This gap will close over the next [Timeframe] due to [Event/Earnings]...' }
                ],
                risk: "Contrarianism for its own sake: Disagreeing with the market without a rigorous informational or analytical advantage."
            },
            { 
                title: 'Unit Economics', 
                desc: "The atomic viability of a business.",
                deliverable: 'Unit Model', 
                context: "Top-line revenue growth often masks underlying structural rot. Professional analysis requires stripping a business down to its fundamental transaction unit (one customer, one widget) to see if it makes money before fixed costs.",
                steps: [
                    { label: 'CAC', text: 'Customer Acquisition Cost.', stem: 'It costs $[X] in marketing and sales to acquire one marginal customer...' },
                    { label: 'LTV', text: 'Lifetime Value.', stem: 'Over their life, this customer generates $[Y] in gross margin (after churn)...' },
                    { label: 'Ratio', text: 'LTV/CAC Health.', stem: 'The ratio is [Z], suggesting the business can/cannot scale profitably...' }
                ],
                risk: "Cohort Blending: Averaging old, profitable customers with new, unprofitable ones to hide deteriorating economics."
            },
            { 
                title: 'The Mosaic Theory', 
                desc: "Synthesizing fragmented information.",
                deliverable: 'Information Map', 
                context: "Trading on material non-public information is illegal. Trading on material public information is useless (it's priced in). The professional 'edge' comes from the 'Mosaic Theory': piecing together non-material, non-public scraps (e.g., satellite parking data, supplier chatter) to form a material insight.",
                steps: [
                    { label: 'Public Data', text: 'The base layer.', stem: 'Filings indicate that the company plans to expand into...' },
                    { label: 'Non-Material', text: 'The fragments.', stem: 'However, job postings in [Region] and supplier comments about [Component] suggest...' },
                    { label: 'Synthesis', text: 'The insight.', stem: 'Combining these suggests production is actually [Ahead/Behind] schedule, creating an earnings surprise...' }
                ],
                risk: "Confirmation Bias: Selectively gathering 'scraps' that support a pre-existing thesis while ignoring contradictory signals."
            }
        ]
    },
    {
        id: 'professional_society',
        title: 'VII. Professional Intelligence II',
        subtitle: 'Policy, Behavior & Geopolitics',
        intro: "Markets do not exist in a vacuum; they are embedded in social and political systems. This module applies rigorous social science to professional contexts, offering frameworks for Policy Analysis, Behavioral Design, and Geopolitical Risk Assessment.",
        readings: [
            { title: "Essence of Decision", author: "Graham Allison", note: "Bureaucratic politics and decision making." },
            { title: "Nudge", author: "Thaler & Sunstein", note: "Choice architecture and behavioral economics." },
            { title: "Thinking in Systems", author: "Donella Meadows", note: "Leverage points and feedback loops." }
        ],
        protocols: [
            { 
                title: 'The Policy Memo (BLUF)', 
                desc: "Writing for decision-makers.",
                deliverable: '1-Page Directive', 
                context: "In government and consulting, brevity is power. The 'Bottom Line Up Front' (BLUF) format inverts the academic pyramid: it places the conclusion first, followed by supporting analysis. The goal is actionable intelligence, not narrative suspense.",
                steps: [
                    { label: 'Recommendation', text: 'The specific action.', stem: 'The Ministry should immediately implement [Policy X] to address [Crisis Y]...' },
                    { label: 'Background', text: 'Contextual urgency.', stem: 'Current data indicates that [Trend] is accelerating, creating a risk of...' },
                    { label: 'Analysis', text: 'Options and trade-offs.', stem: 'While [Option A] is cheaper, [Option B] aligns better with long-term strategic goals because...' },
                    { label: 'Next Steps', text: 'Immediate logistics.', stem: 'Authorization is required by [Date] to secure funding...' }
                ],
                risk: "Academic Drift: Including methodological caveats or literature reviews before the recommendation, causing the decision-maker to lose interest."
            },
            { 
                title: 'Theory of Change', 
                desc: "Logic models for social impact.",
                deliverable: 'Impact Chain', 
                context: "For NGOs and impact investors, good intentions are insufficient. A Theory of Change rigorously maps the causal chain from resources to long-term impact, identifying the 'Leap of Faith' assumptions in between.",
                steps: [
                    { label: 'Inputs/Activities', text: 'What we do.', stem: 'We invest $[X] to run [Training Program]...' },
                    { label: 'Outputs', text: 'Direct results.', stem: 'This results in [Y] individuals certified...' },
                    { label: 'Outcomes', text: 'Behavioral change.', stem: 'Certified individuals then secure [Jobs], leading to...' },
                    { label: 'Impact', text: 'Systemic shift.', stem: 'A [Z]% reduction in regional poverty rates.' }
                ],
                risk: "The Missing Middle: Assuming that 'Outputs' (e.g., holding a workshop) automatically lead to 'Impact' (e.g., ending poverty) without specifying the behavioral mechanism."
            },
            { 
                title: 'Scenario Planning', 
                desc: "Managing irreducible uncertainty.",
                deliverable: '2x2 Matrix', 
                context: "Prediction is impossible for complex socio-political systems. Instead, professionals use Scenario Planning to construct plausible futures based on 'Critical Uncertainties.' Strategies are then tested for robustness across all futures.",
                steps: [
                    { label: 'Axes', text: 'Critical uncertainties.', stem: 'The future depends on two variables: [Regulation: Strict vs. Loose] and [Tech Adoption: High vs. Low].' },
                    { label: 'Quadrants', text: 'The worlds.', stem: 'This creates four worlds: 1. Regulated Stagnation, 2. Wild West Growth, 3. Managed Prosperity, 4. Tech Winter.' },
                    { label: 'Strategy', text: 'Robustness check.', stem: 'Our strategy of [Diversification] succeeds in 3 of 4 worlds, making it the safest bet.' }
                ],
                risk: "Probability Assignment: Treating scenarios as predictions (e.g., 'Scenario A has a 30% chance') rather than equally plausible distinct futures."
            }
        ]
    }
];