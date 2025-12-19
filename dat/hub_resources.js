/**
 * TRACKS @ PWC - RESOURCE DATA
 * Module: Graduate Resource Bank
 * * Protocol: High-quality, primary source, or canonical data repositories.
 * * Emphasis: Open access datasets for replicable research.
 */

window.HUB_DATA = window.HUB_DATA || {};

window.HUB_DATA.RESOURCE_CATEGORIES = [
    { id: 'macro', name: 'Macro & Finance' },
    { id: 'political', name: 'Pol. Econ & Conflict' },
    { id: 'dev', name: 'Development & Trade' },
    { id: 'micro', name: 'Micro & Survey' },
    { id: 'env', name: 'Environment & Energy' },
    { id: 'strategy', name: 'Strategic Analysis' },
    { id: 'methods', name: 'Tools & Methodology' },
    { id: 'humanities', name: 'Digital Humanities' },
    { id: 'learning', name: 'Self-Guided Learning' }
];

window.HUB_DATA.RESOURCES = {
    macro: [
        { title: 'FRED (St. Louis Fed)', url: 'https://fred.stlouisfed.org/', desc: 'The gold standard for US & Global macro time series.' },
        { title: 'Penn World Table', url: 'https://www.rug.nl/ggdc/productivity/pwt/', desc: 'Harmonized cross-country data on GDP, capital, and productivity.' },
        { title: 'Damodaran Online (NYU)', url: 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html', desc: 'Canonical data for risk premiums, betas, and valuation metrics.' },
        { title: 'Kenneth French Library', url: 'https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/data_library.html', desc: 'Fama-French factors and portfolios for asset pricing models.' },
        { title: 'BIS Statistics', url: 'https://data.bis.org/', desc: 'Global banking, securities, and credit statistics.' },
        { title: 'Shiller Data (Yale)', url: 'http://www.econ.yale.edu/~shiller/data.htm', desc: 'Long-term historical stock market, housing, and dividend data.' },
        { title: 'IMF Data (eLibrary)', url: 'https://data.imf.org/', desc: 'Balance of payments (BOP), trade direction (DOTS), and financial stats.' },
        { title: 'OECD Stat', url: 'https://stats.oecd.org/', desc: 'Structural analysis and policy metrics for member states.' },
        { title: 'Maddison Project', url: 'https://www.rug.nl/ggdc/historicaldevelopment/maddison/', desc: 'Historical GDP and population data (AD 1 - Present).' },
        { title: 'NBER Data', url: 'https://www.nber.org/research/data', desc: 'Business cycle dating and macro-history databases.' },
        { title: 'RBI Data', url: 'https://data.rbi.org.in/#/dbie/home', desc: 'Monetary data for the Indian Economy.' }
    ],
    political: [
        { title: 'V-Dem (Varieties of Democracy)', url: 'https://www.v-dem.net/', desc: 'The most granular dataset on democratic quality and regimes.' },
        { title: 'UCDP Conflict Data', url: 'https://ucdp.uu.se/', desc: 'Uppsala\'s global standard for armed conflict event data.' },
        { title: 'ACLED', url: 'https://acleddata.com/', desc: 'Real-time, disaggregated data on political violence and protest.' },
        { title: 'Polity V', url: 'https://www.systemicpeace.org/polityproject.html', desc: 'Longitudinal coding of regime authority characteristics.' },
        { title: 'The Manifesto Project', url: 'https://manifesto-project.wzb.eu/', desc: 'Quantitative content analysis of political party manifestos.' },
        { title: 'ParlGov', url: 'http://www.parlgov.org/', desc: 'Database on parliaments, parties, and governments (EU/OECD).' },
        { title: 'Quality of Government (QoG)', url: 'https://www.gu.se/en/quality-government/qog-data', desc: 'Indices on corruption, impartiality, and bureaucratic quality.' },
        { title: 'Freedom House', url: 'https://freedomhouse.org/reports/publication-archives', desc: 'Annual reports on political rights and civil liberties.' },
        { title: 'Systemic Peace', url: 'https://www.systemicpeace.org/', desc: 'State fragility and major political violence trends.' }
    ],
    dev: [
        { title: 'World Inequality Database (WID)', url: 'https://wid.world/', desc: 'Distributional accounts (Piketty et al.) for income and wealth.' },
        { title: 'Atlas of Economic Complexity', url: 'https://atlas.cid.harvard.edu/', desc: 'Visualizing global trade flows and industrial capabilities.' },
        { title: 'World Bank Open Data', url: 'https://data.worldbank.org/', desc: 'World Development Indicators (WDI) and microdata Library.' },
        { title: 'UN Comtrade', url: 'https://comtrade.un.org/', desc: 'The repository for official international trade statistics.' },
        { title: 'AidData', url: 'https://www.aiddata.org/', desc: 'Tracking development finance, foreign aid, and Chinese lending.' },
        { title: 'ILOSTAT', url: 'https://ilostat.ilo.org/', desc: 'Global labour statistics (wages, employment, informality).' },
        { title: 'UNCTADstat', url: 'https://unctadstat.unctad.org/', desc: 'Trade, investment, and development statistics.' },
        { title: 'Harvard Dataverse', url: 'https://dataverse.harvard.edu/', desc: 'Interdisciplinary repository for research data sharing.' }
    ],
    micro: [
        { title: 'IPUMS International', url: 'https://international.ipums.org/', desc: 'Harmonized census microdata from around the world.' },
        { title: 'Demographic & Health Surveys', url: 'https://dhsprogram.com/', desc: 'Standardized surveys on health, nutrition, and population.' },
        { title: 'World Values Survey', url: 'https://www.worldvaluessurvey.org/', desc: 'Global survey on changing values and cultural beliefs.' },
        { title: 'European Social Survey', url: 'https://www.europeansocialsurvey.org/', desc: 'Rigorous cross-national survey on attitudes and behavior.' },
        { title: 'Afrobarometer', url: 'https://www.afrobarometer.org/', desc: 'Public attitude surveys on democracy and governance in Africa.' },
        { title: 'Latinobarómetro', url: 'https://www.latinobarometro.org/', desc: 'Public opinion data for Latin America.' },
        { title: 'Asian Barometer', url: 'http://www.asianbarometer.org/', desc: 'Comparative survey on political culture in Asia.' },
        { title: 'GSS (General Social Survey)', url: 'https://gss.norc.org/', desc: 'The primary source for US sociological trends since 1972.' },
        { title: 'Pew Research Center', url: 'https://www.pewresearch.org/download-datasets/', desc: 'Nonpartisan datasets on US politics, media, and religion.' }
    ],
    env: [
        { title: 'NASA EarthData', url: 'https://earthdata.nasa.gov/', desc: 'Satellite imagery and climate data access.' },
        { title: 'Our World in Data', url: 'https://ourworldindata.org/', desc: 'Research and data on global problems (Climate, Health, Poverty).' },
        { title: 'IEA Data', url: 'https://www.iea.org/data-and-statistics', desc: 'Comprehensive energy balances and emissions statistics.' },
        { title: 'EM-DAT', url: 'https://www.emdat.be/', desc: 'The International Disaster Database.' },
        { title: 'Global Carbon Project', url: 'https://www.globalcarbonproject.org/', desc: 'Budgets and trends in greenhouse gas emissions.' },
        { title: 'Climate Watch', url: 'https://www.climatewatchdata.org/', desc: 'Data/visualizations on climate change and NDCs.' },
        { title: 'Aqueduct (WRI)', url: 'https://www.wri.org/aqueduct', desc: 'Global water risk mapping.' }
    ],
    strategy: [
        { title: 'SIPRI Arms Transfers', url: 'https://www.sipri.org/databases/armstransfers', desc: 'Monitoring international arms transfers.' },
        { title: 'RAND Corporation', url: 'https://www.rand.org/research.html', desc: 'Analysis on security, health, and education policy.' },
        { title: 'Chatham House', url: 'https://www.chathamhouse.org/', desc: 'International affairs and policy papers.' },
        { title: 'CSIS', url: 'https://www.csis.org/', desc: 'Strategic insights and bipartisan policy solutions.' },
        { title: 'Brookings Institution', url: 'https://www.brookings.edu/', desc: 'In-depth research on public policy.' },
        { title: 'PIIE', url: 'https://www.piie.com/', desc: 'Peterson Institute for International Economics.' },
        { title: 'Carnegie Endowment', url: 'https://carnegieendowment.org/', desc: 'Global peace and security research.' },
        { title: 'Bruegel', url: 'https://www.bruegel.org/', desc: 'European economic policy think tank.' }
    ],
    methods: [
        { title: 'Connected Papers', url: 'https://www.connectedpapers.com/', desc: 'Visualizing the citation graph to find relevant papers.' },
        { title: 'Papers with Code', url: 'https://paperswithcode.com/', desc: 'ML papers paired with official code implementations.' },
        { title: 'The Programming Historian', url: 'https://programminghistorian.org/', desc: 'Novice-friendly tutorials for digital methods.' },
        { title: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets', desc: 'Community-uploaded datasets and kernels.' },
        { title: 'Zotero', url: 'https://www.zotero.org/', desc: 'The essential open-source citation manager.' },
        { title: 'Equator Network', url: 'https://www.equator-network.org/', desc: 'Reporting guidelines for health and research types.' },
        { title: 'Stan', url: 'https://mc-stan.org/', desc: 'Platform for high-performance statistical modeling.' },
        { title: 'UCLA IDRE', url: 'https://stats.oarc.ucla.edu/', desc: 'Annotated output for R, Stata, SAS, and SPSS.' }
    ],
    humanities: [
        { title: 'HathiTrust Digital Library', url: 'https://www.hathitrust.org/', desc: 'Millions of digitized titles from academic libraries.' },
        { title: 'Internet Archive', url: 'https://archive.org/', desc: 'Wayback Machine and open library.' },
        { title: 'Perseus Digital Library', url: 'http://www.perseus.tufts.edu/hopper/', desc: 'Classics, primary texts, and linguistic tools.' },
        { title: 'JSTOR Text Analyzer', url: 'https://www.jstor.org/analyze/', desc: 'Upload a document to find related scholarship.' },
        { title: 'Getty Research Institute', url: 'https://www.getty.edu/research/', desc: 'Art history, vocabularies, and collections.' },
        { title: 'Europeana', url: 'https://www.europeana.eu/', desc: 'European cultural heritage digital platform.' },
        { title: 'Project Gutenberg', url: 'https://www.gutenberg.org/', desc: 'Free eBooks of public domain literature.' },
        { title: 'Digital Public Library of America', url: 'https://dp.la/', desc: 'Portal for US cultural heritage materials.' }
    ],
    learning: [
        { title: 'QuantEcon', url: 'https://quantecon.org/', desc: 'Computational economics in Python and Julia.' },
        { title: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/', desc: 'Full course materials from MIT curriculum.' },
        { title: '3Blue1Brown', url: 'https://www.3blue1brown.com/', desc: 'Deep visual intuition for linear algebra and calculus.' },
        { title: 'Software Carpentry', url: 'https://software-carpentry.org/lessons/', desc: 'Teaching basic lab skills for research computing.' },
        { title: 'Coursera (Audit Mode)', url: 'https://www.coursera.org/', desc: 'University courses (audit for free).' },
        { title: 'EdX', url: 'https://www.edx.org/', desc: 'Courses from Harvard, MIT, and others.' }
    ]

};
