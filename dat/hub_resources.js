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
        { title: 'BIS Statistics', url: 'https://www.bis.org/statistics/', desc: 'Banking, securities, crypto.' },
        { title: 'Federal Reserve Board', url: 'https://www.federalreserve.gov/data.htm', desc: 'US Financial accounts.' },
        { title: 'ECB Data', url: 'https://sdw.ecb.europa.eu/', desc: 'Eurozone monetary data.' },
        { title: 'NBER Data', url: 'https://www.nber.org/research/data', desc: 'Business cycles & macro history.' },
        { title: 'Maddison Project', url: 'https://www.rug.nl/ggdc/historicaldevelopment/maddison/', desc: 'Historical GDP (AD 1-2020).' },
        { title: 'WRDS', url: 'https://wrds-web.wharton.upenn.edu/', desc: 'CRSP/Compustat (Subscription).' },
        { title: 'OECD Stat', url: 'https://stats.oecd.org/', desc: 'OECD member statistics.' }
    ],
    political: [
        { title: 'V-Dem', url: 'https://www.v-dem.net/', desc: 'Varieties of Democracy indices.' },
        { title: 'Polity V', url: 'https://www.systemicpeace.org/polityproject.html', desc: 'Regime authority characteristics.' },
        { title: 'UCDP', url: 'https://ucdp.uu.se/', desc: 'Armed conflict event data.' },
        { title: 'QoG', url: 'https://www.gu.se/en/quality-government/qog-data', desc: 'Quality of Government/Corruption.' },
        { title: 'SIPRI', url: 'https://www.sipri.org/databases', desc: 'Arms transfers and military spend.' },
        { title: 'Freedom House', url: 'https://freedomhouse.org/', desc: 'Political rights/civil liberties.' }
    ],
    dev: [
        { title: 'World Bank Open Data', url: 'https://data.worldbank.org/', desc: 'WDI & Microdata.' },
        { title: 'UN Comtrade', url: 'https://comtrade.un.org/', desc: 'Global merchandise trade.' },
        { title: 'UNCTADstat', url: 'https://unctadstat.unctad.org/', desc: 'Trade & Development.' },
        { title: 'AidData', url: 'https://www.aiddata.org/', desc: 'Development finance tracking.' },
        { title: 'WID', url: 'https://wid.world/', desc: 'World Inequality Database.' },
        { title: 'ILOSTAT', url: 'https://ilostat.ilo.org/', desc: 'Labor statistics.' },
        { title: 'Economic Complexity', url: 'https://atlas.cid.harvard.edu/', desc: 'Trade complexity visualization.' }
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
        { title: 'GSS', url: 'https://gss.norc.org/', desc: 'General Social Survey.' }
    ],
    env: [
        { title: 'NASA Earth Data', url: 'https://earthdata.nasa.gov/', desc: 'Satellite/Climate data.' },
        { title: 'NOAA', url: 'https://www.ncdc.noaa.gov/', desc: 'Weather/Climate.' },
        { title: 'IEA', url: 'https://www.iea.org/data-and-statistics', desc: 'Energy statistics.' },
        { title: 'Our World in Data', url: 'https://ourworldindata.org/', desc: 'Global trends.' },
        { title: 'WHO GHO', url: 'https://www.who.int/data/gho', desc: 'Global Health.' }
    ],
    strategy: [
        { title: 'NBER', url: 'https://www.nber.org/', desc: 'US Economic Research.' },
        { title: 'VoxEU (CEPR)', url: 'https://cepr.org/voxeu', desc: 'EU Policy Analysis.' },
        { title: 'CFR', url: 'https://www.cfr.org/', desc: 'Foreign Relations.' },
        { title: 'Chatham House', url: 'https://www.chathamhouse.org/', desc: 'International Affairs.' },
        { title: 'Bruegel', url: 'https://www.bruegel.org/', desc: 'EU Economics.' },
        { title: 'PIIE', url: 'https://www.piie.com/', desc: 'International Economics.' },
        { title: 'LSE IDEAS', url: 'https://www.lse.ac.uk/ideas', desc: 'Foreign Policy.' }
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
        { title: 'NVivo', url: 'https://lumivero.com/products/nvivo/', desc: 'Qualitative analysis.' }
    ],
    humanities: [
        { title: 'HathiTrust', url: 'https://www.hathitrust.org/', desc: 'Digital library.' },
        { title: 'JSTOR DfR', url: 'https://www.jstor.org/dfr/', desc: 'Text analysis.' },
        { title: 'Internet Archive', url: 'https://archive.org/', desc: 'Wayback Machine/Books.' },
        { title: 'Europeana', url: 'https://www.europeana.eu/', desc: 'EU Cultural Heritage.' },
        { title: 'Getty Research', url: 'https://www.getty.edu/research/', desc: 'Art History.' }
    ],
    learning: [
        { title: 'QuantEcon', url: 'https://quantecon.org/', desc: 'Python/Julia for economics.' },
        { title: 'R for Data Science', url: 'https://r4ds.hadley.nz/', desc: 'Modern R programming.' },
        { title: 'MIT OCW', url: 'https://ocw.mit.edu/', desc: 'Open Courseware.' },
        { title: 'Software Carpentry', url: 'https://software-carpentry.org/', desc: 'Research computing.' },
        { title: '3Blue1Brown', url: 'https://www.3blue1brown.com/', desc: 'Visual math.' }
    ]
};