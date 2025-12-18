/**
 * TRACKS @ PWC - RESOURCE DATA
 * Module: Resource Bank (Categories & Links)
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.RESOURCE_CATEGORIES = [
    { id: 'macro', name: 'Macro & Finance' },
    { id: 'political', name: 'Pol. Econ & Conflict' },
    { id: 'dev', name: 'Development & Trade' },
    { id: 'micro', name: 'Micro & Survey' },
    { id: 'env', name: 'Environment' },
    { id: 'strategy', name: 'Strategic' },
    { id: 'methods', name: 'Methodology' },
    { id: 'humanities', name: 'Humanities' },
    { id: 'learning', name: 'Self-Guided' }
];

window.HUB_DATA.RESOURCES = {
    macro: [
        { title: 'FRED (St. Louis Fed)', url: 'https://fred.stlouisfed.org/', desc: 'US & Global macro time series.' },
        { title: 'Penn World Table', url: 'https://www.rug.nl/ggdc/productivity/pwt/', desc: 'PPP GDP, Capital, Productivity (Cross-country).' },
        { title: 'IMF Data', url: 'https://data.imf.org/', desc: 'IFS, BOP, DOTS.' },
        { title: 'BIS Statistics', url: 'https://data.bis.org/', desc: 'Banking, securities, crypto.' },
        { title: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/data.htm', desc: 'US Financial accounts.' },
        { title: 'ECB Data', url: 'https://sdw.ecb.europa.eu/', desc: 'Eurozone monetary data.' },
        { title: 'NBER Data', url: 'https://www.nber.org/research/data', desc: 'Business cycles & macro history.' },
        { title: 'Maddison Project', url: 'https://www.rug.nl/ggdc/historicaldevelopment/maddison/', desc: 'Historical GDP (AD 1-2020).' },
        { title: 'WRDS', url: 'https://wrds-web.wharton.upenn.edu/', desc: 'CRSP/Compustat (Subscription).' },
        { title: 'OECD Stat', url: 'https://stats.oecd.org/', desc: 'OECD member statistics.' },
	{ title: 'Bureau of Economic Analysis (BEA)', url: 'https://www.bea.gov/', desc: 'Official U.S. national, regional, and industry economic statistics.' },
        { title: 'Office for National Statistics (UK)', url: 'https://www.ons.gov.uk/', desc: 'UK economic and social statistics.' },
        { title: 'Statistics Canada', url: 'https://www.statcan.gc.ca/', desc: 'Comprehensive Canadian macro and micro statistics.' },
        { title: 'Bank of England Data', url: 'https://www.bankofengland.co.uk/statistics', desc: 'UK monetary, financial and economic statistics.' },
        { title: 'World Bank Global Economic Prospects', url: 'https://www.worldbank.org/en/publication/global-economic-prospects', desc: 'Forecasts and analysis from a multilateral development institution.' },
	{ title: 'Open Government Data (data.gov.in)', url: 'https://data.gov.in/', desc: 'India’s official open data portal (centralized access to datasets published by Indian government ministries and departments).' },
{ title: 'Ministry of Statistics & Programme Implementation (MOSPI)', url: 'https://mospi.gov.in/', desc: 'Official national statistics: GDP, CPI, NSS/NSSO, PLFS and other key socioeconomic statistics.' },
{ title: 'Reserve Bank of India (RBI) - Database', url: 'https://rbi.org.in/', desc: 'India’s central bank: monetary, banking, payment system and financial statistics.' }

    ],
    political: [
        { title: 'V-Dem', url: 'https://www.v-dem.net/', desc: 'Varieties of Democracy indices.' },
        { title: 'Polity V', url: 'https://www.systemicpeace.org/polityproject.html', desc: 'Regime authority characteristics.' },
        { title: 'UCDP', url: 'https://ucdp.uu.se/', desc: 'Armed conflict event data.' },
        { title: 'QoG', url: 'https://www.gu.se/en/quality-government/qog-data', desc: 'Quality of Government/Corruption.' },
        { title: 'SIPRI', url: 'https://www.sipri.org/databases', desc: 'Arms transfers and military spend.' },
        { title: 'Freedom House', url: 'https://freedomhouse.org/', desc: 'Political rights/civil liberties.' },
	{ title: 'ACLED (Armed Conflict Location & Event Data Project)', url: 'https://acleddata.com/', desc: 'Disaggregated conflict, political violence, and protest data.' },
        { title: 'World Bank — Worldwide Governance Indicators (WGI)', url: 'https://info.worldbank.org/governance/wgi/', desc: 'Cross-country governance indicators.' },
        { title: 'United Nations Office on Drugs and Crime (UNODC) Data', url: 'https://www.unodc.org/unodc/en/data-and-analysis/statistics.html', desc: 'Crime, trafficking, and related governance statistics.' },
        { title: 'Council on Foreign Relations — Backgrounders & Data (CFR Reference)', url: 'https://www.cfr.org/', desc: 'Authoritative background and primary-source links for international political economy topics.' }

    ],
    dev: [
        { title: 'World Bank Open Data', url: 'https://data.worldbank.org/', desc: 'WDI & Microdata.' },
        { title: 'UN Comtrade', url: 'https://comtrade.un.org/', desc: 'Global merchandise trade.' },
        { title: 'UNCTADstat', url: 'https://unctadstat.unctad.org/', desc: 'Trade & Development.' },
        { title: 'AidData', url: 'https://www.aiddata.org/', desc: 'Development finance tracking.' },
        { title: 'WID', url: 'https://wid.world/', desc: 'World Inequality Database.' },
        { title: 'ILOSTAT', url: 'https://ilostat.ilo.org/', desc: 'Labor statistics.' },
        { title: 'Economic Complexity', url: 'https://atlas.cid.harvard.edu/', desc: 'Trade complexity visualization.' },
	{ title: 'UNDP Data & Human Development Reports', url: 'https://hdr.undp.org/data', desc: 'Human development indicators and country profiles.' },
        { title: 'Food and Agriculture Organization (FAO) Statistics', url: 'https://www.fao.org/faostat/en/', desc: 'Global agricultural production, trade and food security data.' },
        { title: 'World Trade Organization (WTO) Statistics', url: 'https://www.wto.org/english/res_e/statis_e/statis_e.htm', desc: 'Trade flows, tariffs, and services statistics.' },
        { title: 'European Commission — Eurostat', url: 'https://ec.europa.eu/eurostat', desc: 'Authoritative statistical office of the EU with many development-relevant datasets.' }

    ],
    micro: [
        { title: 'IPUMS International', url: 'https://international.ipums.org/', desc: 'Harmonized census microdata.' },
        { title: 'DHS Program', url: 'https://dhsprogram.com/', desc: 'Demographic and Health Surveys.' },
        { title: 'LSMS', url: 'https://www.worldbank.org/en/programs/lsms', desc: 'Living Standards Measurement Study.' },
        { title: 'World Values Survey', url: 'https://www.worldvaluessurvey.org/', desc: 'Cultural values/beliefs.' },
        { title: 'Afrobarometer', url: 'https://www.afrobarometer.org/', desc: 'African public opinion.' },
        { title: 'Eurobarometer', url: 'https://europa.eu/eurobarometer/', desc: 'EU public opinion.' },
        { title: 'ICPSR', url: 'https://www.icpsr.umich.edu/', desc: 'Social science data archive.' },
        { title: 'PSID', url: 'https://psidonline.isr.umich.edu/', desc: 'Panel Study of Income Dynamics.' },
        { title: 'GSS', url: 'https://gss.norc.org/', desc: 'General Social Survey.' },
	{ title: 'European Social Survey (ESS)', url: 'https://www.europeansocialsurvey.org/', desc: 'High-quality cross-national survey on attitudes and behavior in Europe.' },
        { title: 'Harvard Dataverse', url: 'https://dataverse.harvard.edu/', desc: 'Repository for research data across disciplines.' },
        { title: 'UK Data Service', url: 'https://ukdataservice.ac.uk/', desc: 'Curated social and economic microdata for research.' },
        { title: 'Pew Research Center Data', url: 'https://www.pewresearch.org/download-datasets/', desc: 'Public opinion and demographic datasets (nonpartisan research).' },
	{ title: 'Census of India', url: 'https://censusindia.gov.in/', desc: 'Decennial census, population tables, administrative boundary data and metadata.' },
{ title: 'National Family Health Survey (NFHS) - IIPS', url: 'https://rchiips.org/nfhs/', desc: 'High-quality, large-scale household health and nutrition surveys for India (IIPS/Ministry of Health & Family Welfare).' }

    ],
    env: [
        { title: 'NASA Earth Data', url: 'https://earthdata.nasa.gov/', desc: 'Satellite/Climate data.' },
        { title: 'NOAA', url: 'https://www.ncdc.noaa.gov/', desc: 'Weather/Climate.' },
        { title: 'IEA', url: 'https://www.iea.org/data-and-statistics', desc: 'Energy statistics.' },
        { title: 'Our World in Data', url: 'https://ourworldindata.org/', desc: 'Global trends.' },
        { title: 'WHO GHO', url: 'https://www.who.int/data/gho', desc: 'Global Health.' },
	{ title: 'IPCC Data & Reports', url: 'https://www.ipcc.ch/', desc: 'Authoritative scientific assessments and supporting datasets on climate change.' },
        { title: 'UN Environment Programme (UNEP) Data', url: 'https://www.unep.org/resources', desc: 'Environmental assessments and data from a UN agency.' },
        { title: 'Global Carbon Project', url: 'https://www.globalcarbonproject.org/', desc: 'Reports and datasets on carbon budgets and emissions.' },
        { title: 'European Environment Agency (EEA)', url: 'https://www.eea.europa.eu/data-and-maps', desc: 'High-quality European environment datasets and indicators.' }

    ],
    strategy: [
        { title: 'NBER', url: 'https://www.nber.org/', desc: 'US Economic Research.' },
        { title: 'VoxEU (CEPR)', url: 'https://cepr.org/voxeu', desc: 'EU Policy Analysis.' },
        { title: 'CFR', url: 'https://www.cfr.org/', desc: 'Foreign Relations.' },
        { title: 'Chatham House', url: 'https://www.chathamhouse.org/', desc: 'International Affairs.' },
        { title: 'Bruegel', url: 'https://www.bruegel.org/', desc: 'EU Economics.' },
        { title: 'PIIE', url: 'https://www.piie.com/', desc: 'International Economics.' },
        { title: 'LSE IDEAS', url: 'https://www.lse.ac.uk/ideas', desc: 'Foreign Policy.' },
	{ title: 'RAND Corporation', url: 'https://www.rand.org/', desc: 'Independent research organization offering evidence-based analysis on security, policy, and strategy.' },
        { title: 'Brookings Institution — Research', url: 'https://www.brookings.edu/research/', desc: 'Policy research from a long-established, nonpartisan research institution.' },
        { title: 'Stockholm International Peace Research Institute (SIPRI) — (Strategy/Arms)', url: 'https://www.sipri.org/', desc: 'Authoritative data and analysis on armaments, disarmament and conflict.' },
        { title: 'UN Institute for Disarmament Research (UNIDIR)', url: 'https://unidir.org/', desc: 'Research on disarmament and security from a UN research institute.' }

    ],
    methods: [
        { title: 'SAGE Methods', url: 'https://methods.sagepub.com/', desc: 'Methods library.' },
        { title: 'UCLA IDRE', url: 'https://stats.oarc.ucla.edu/', desc: 'R/Stata/SAS/SPSS guides.' },
        { title: 'Stan', url: 'https://mc-stan.org/', desc: 'Bayesian modeling.' },
        { title: 'Purdue OWL', url: 'https://owl.purdue.edu/', desc: 'Writing/Citation.' },
        { title: 'Equator Network', url: 'https://www.equator-network.org/', desc: 'Reporting guidelines.' },
        { title: 'Zotero', url: 'https://www.zotero.org/', desc: 'Citation management.' },
        { title: 'Overleaf', url: 'https://www.overleaf.com/', desc: 'LaTeX editor.' },
        { title: 'Qualtrics', url: 'https://www.qualtrics.com/', desc: 'Survey platform.' },
        { title: 'NVivo', url: 'https://lumivero.com/products/nvivo/', desc: 'Qualitative analysis.' },
	{ title: 'Open Science Framework (OSF)', url: 'https://osf.io/', desc: 'Platform for research transparency, preregistration, and data sharing.' },
        { title: 'The Carpentries', url: 'https://carpentries.org/', desc: 'Training and best practices for reproducible research computing.' },
        { title: 'COS — Committee on Publication Ethics (COPE)', url: 'https://publicationethics.org/', desc: 'Guidance on publication ethics and research integrity.' },
        { title: 'Reproducibility Project / Center for Open Science resources', url: 'https://www.cos.io/', desc: 'Resources and best-practice guidance on reproducible research.' }

    ],
    humanities: [
        { title: 'HathiTrust', url: 'https://www.hathitrust.org/', desc: 'Digital library.' },
        { title: 'JSTOR DfR', url: 'https://www.jstor.org/dfr/', desc: 'Text analysis.' },
        { title: 'Internet Archive', url: 'https://archive.org/', desc: 'Wayback Machine/Books.' },
        { title: 'Europeana', url: 'https://www.europeana.eu/', desc: 'EU Cultural Heritage.' },
        { title: 'Getty Research', url: 'https://www.getty.edu/research/', desc: 'Art History.' },
	{ title: 'Project Gutenberg', url: 'https://www.gutenberg.org/', desc: 'Public-domain books and digitized texts.' },
        { title: 'Digital Public Library of America (DPLA)', url: 'https://dp.la/', desc: 'US-focused cultural heritage and digital collections aggregator.' },
        { title: 'National Archives (US) — Research & Data', url: 'https://www.archives.gov/research', desc: 'Primary-source documents and archival collections.' }

    ],
    learning: [
        { title: 'QuantEcon', url: 'https://quantecon.org/', desc: 'Python/Julia for economics.' },
        { title: 'R for Data Science', url: 'https://r4ds.hadley.nz/', desc: 'Modern R programming.' },
        { title: 'MIT OCW', url: 'https://ocw.mit.edu/', desc: 'Open Courseware.' },
        { title: 'Software Carpentry', url: 'https://software-carpentry.org/', desc: 'Research computing.' },
        { title: '3Blue1Brown', url: 'https://www.3blue1brown.com/', desc: 'Visual math.' },
	{ title: 'World Bank Open Learning Campus', url: 'https://olc.worldbank.org/', desc: 'Open courses and learning resources on development topics.' },
        { title: 'Coursera (university-backed specializations)', url: 'https://www.coursera.org/', desc: 'University-partnered online learning and specializations.' }

    ]
};