/* ==========================================================================
   content.js  —  আপনার ওয়েবসাইটের সব লেখা, লিংক ও ছবির তালিকা এই ফাইলে।
   শুধু " " (উদ্ধৃতি চিহ্ন) এর ভেতরের লেখা বদলাবেন। বাকি কিছুতে হাত দেওয়ার দরকার নেই।
   বিস্তারিত: কীভাবে-বদলাবেন.md ফাইল দেখুন।
   ========================================================================== */

window.SITE = {

  /* ---------- ১. মূল পরিচয় ---------- */
  name: "Md. Biplob Hosen",
  firstName: "Biplob",
  lastName: "Hosen",
  monogram: "MBH",
  email: "mdbiplob@gmail.com",
  location: "Gazipur, Bangladesh",

  /* লিংক: যেটা নেই সেটা "" (খালি) রাখুন, ওয়েবসাইটে সেটা নিজে থেকেই লুকিয়ে যাবে */
  links: {
    scholar:      "https://scholar.google.com/citations?user=9BasENkAAAAJ",
    researchgate: "https://www.researchgate.net/profile/Md-Biplob-Hosen-3",
    orcid:        "https://orcid.org/0009-0002-4502-288X",
    linkedin:     "",
    instagram:    "",
    facebook:     "",
    github:       ""
  },

  /* CV ফাইল: CV-টা এই ফোল্ডারে cv.pdf নামে রাখুন। না রাখলে "" দিন, বাটন লুকিয়ে যাবে */
  cv: "cv.pdf",

  /* ---------- ২. হোম পেজের মূল অংশ ---------- */
  hero: {
    kicker: "Water & environmental researcher  ·  Photographer",
    headline: "I read rivers — in data and in light.",
    sub: "MSc in Water and Environmental Management (CGPA 3.92). I map floods, groundwater and heat with GIS, remote sensing and machine learning, and I photograph the world around me.",
    chips: ["GIS & Remote Sensing", "Hydrological Modelling", "AHP · Fuzzy AHP · ANN", "Photography"]
  },

  /* আপনার ছবি: photos ফোল্ডারে portrait.jpg নামে রাখুন */
  portrait: "photos/portrait.jpg",
  portraitBadges: ["MSc · DUET", "Advisor, DUET Photographic Society"],

  /* স্ক্রল করা লাইন (marquee) */
  marquee: ["Flood risk", "Groundwater", "Land surface temperature", "Soil erosion", "Site suitability", "Water footprint", "Streamflow", "Landslide susceptibility", "SWAT", "HEC-HMS", "HEC-RAS", "Google Earth Engine", "Photography"],

  /* সংখ্যায় আমি (সংখ্যা বদলালে ওয়েবসাইট নিজে গুনে দেখাবে) */
  stats: [
    { n: 9,  label: "Journal articles" },
    { n: 17, label: "Conference papers" },
    { n: 2,  label: "Presenting-paper awards" },
    { n: 3.92, decimals: 2, label: "MSc CGPA (out of 4.00)" }
  ],

  /* ---------- ৩. আমার গল্প (About) ---------- */
  story: {
    kicker: "My story",
    headline: "Water shapes every place I work, and light shapes every place I photograph.",
    paragraphs: [
      "I'm a water and environmental researcher from Bangladesh. I completed my MSc in Water and Environmental Management at Dhaka University of Engineering & Technology (DUET), where my thesis looked at how land use and climate change affect streamflow in the Sangu River.",
      "My work asks practical questions: where will floods hit hardest, where is groundwater worth tapping, which sites suit a charging station or a crop? I answer them with GIS, remote sensing, AHP, Fuzzy AHP, neural networks and hydrological models such as SWAT, HEC-HMS and HEC-RAS.",
      "Alongside research, I'm a photographer. I was Vice President of the BSMRSTU Photographic Society, then Chief Instructor and now Advisor of the DUET Photographic Society.",
      "Next, I'm looking for a PhD in climate-resilient water resources planning, flood risk reduction and spatial environmental analysis."
    ],
    facts: [
      ["Based in",  "Gazipur, Bangladesh"],
      ["Degree",    "MSc, Water & Environmental Management"],
      ["University","Dhaka University of Engineering & Technology"],
      ["Looking for","PhD position (2026 →)"],
      ["Languages", "Bangla, English"]
    ]
  },

  /* ---------- ৪. আমার যাত্রা (Timeline) ---------- */
  journey: [
    { year: "2018", title: "B.Sc. begins",              text: "Environmental Science and Disaster Management, Gopalganj Science and Technology University." },
    { year: "2019", title: "Vice President, Photographic Society", text: "BSMRSTU Photographic Society, until 2022." },
    { year: "2022", title: "GIS & Remote Sensing training", text: "Application of GIS and Remote Sensing in Research (Sept–Oct)." },
    { year: "2023", title: "M.Sc. at DUET",             text: "Water and Environmental Management, graduated 2025 with CGPA 3.92 / 4.00." },
    { year: "2024", title: "Research Assistant + first award", text: "Joined two DUET research projects; won a Presenting Paper Award at IICASD 2024; became Chief Instructor of the DUET Photographic Society." },
    { year: "2025", title: "Papers in Q1 journals",     text: "Co-authored articles in Renewable Energy, Smart Agricultural Technology, Earth Systems and Environment and more. Second Presenting Paper Award (ICSHSD 2025). Advisor, DUET Photographic Society." },
    { year: "2026", title: "Flood paper published, Python course", text: "Fuzzy AHP flood vulnerability study of Sylhet published in Discover Environment. Completed a 60-hour Python course; RA projects concluded in June.", now: false },
    { year: "Next", title: "PhD",                       text: "Climate-resilient water resources planning and flood risk reduction.", now: true }
  ],

  /* ---------- ৫. হোম পেজে "দুই রূপ" কার্ড ---------- */
  sides: {
    research:    { title: "Maps, models & papers",  text: "Nine journal articles, seventeen conference papers, and GIS tools for water and climate risk.", image: "maps/featured-map.jpg" },
    photography: { title: "Light, land & people",   text: "Frames from Bangladesh, and the photographic society I advise.",             image: "photos/featured-photo.jpg" }
  },

  /* ---------- ৬. ফটোগ্রাফি ---------- */
  photography: {
    title: "Photography",
    headline: "Rivers, fields and faces of Bangladesh.",
    intro: "Photography is how I look at the world beyond maps: rivers, fields, cities and the people who live in them. These are some of my favourite frames.",
    /* ক্যামেরার নাম লিখুন, যেমন "Shot on Canon EOS 200D". খালি রাখলে লাইনটা দেখাবে না */
    camera: "",
    roles: [
      { role: "Advisor",            org: "DUET Photographic Society",   years: "2025 – 2026" },
      { role: "Chief Instructor",   org: "DUET Photographic Society",   years: "2024 – 2025" },
      { role: "Vice President",     org: "BSMRSTU Photographic Society", years: "2019 – 2022" }
    ],
    albums: ["Landscapes", "Rivers & Water", "People & Life", "Urban", "Nature"],

    /* ছবি যোগ করতে: ছবিটা photos ফোল্ডারে রাখুন, তারপর নিচের একটা লাইন কপি করে নতুন লাইনে পেস্ট করুন ও বদলান।
       r = ছবির আকার: "3/2" (আড়াআড়ি), "2/3" (লম্বা), "1/1" (চৌকো)  */
    photos: [
      { file: "photos/photo-01.jpg", title: "Morning on the river",  place: "Place, Bangladesh", album: "Rivers & Water", r: "3/2" },
      { file: "photos/photo-02.jpg", title: "Field at dusk",         place: "Place, Bangladesh", album: "Landscapes",     r: "2/3" },
      { file: "photos/photo-03.jpg", title: "Waiting for the ferry", place: "Place, Bangladesh", album: "People & Life",  r: "1/1" },
      { file: "photos/photo-04.jpg", title: "After the rain",        place: "Place, Bangladesh", album: "Nature",         r: "3/2" },
      { file: "photos/photo-05.jpg", title: "City lights",           place: "Dhaka",             album: "Urban",          r: "2/3" },
      { file: "photos/photo-06.jpg", title: "The boatman",           place: "Place, Bangladesh", album: "People & Life",  r: "3/2" },
      { file: "photos/photo-07.jpg", title: "Floodplain",            place: "Place, Bangladesh", album: "Landscapes",     r: "1/1" },
      { file: "photos/photo-08.jpg", title: "Canal at noon",         place: "Place, Bangladesh", album: "Rivers & Water", r: "2/3" },
      { file: "photos/photo-09.jpg", title: "Green after monsoon",   place: "Place, Bangladesh", album: "Nature",         r: "3/2" }
    ]
  },

  /* ---------- ৭. রিসার্চ প্রজেক্ট কার্ড ----------
     map = প্রজেক্টের ম্যাপের ছবি (maps ফোল্ডারে রাখুন)।
     status: published | review | revision | ongoing | thesis | prep                               */
  projects: [
    { title: "Flood vulnerability, Sylhet District", status: "published", statusLabel: "Published",
      text: "Fuzzy AHP assessment of flood vulnerability across Sylhet District. Discover Environment, 2026.",
      tags: ["Fuzzy AHP", "GIS", "Sylhet"], map: "maps/flood-sylhet.jpg" },
    { title: "Groundwater potential zones", status: "published", statusLabel: "Published",
      text: "AHP and neural-network mapping of present and future groundwater potential. Ecological Indicators and Environmental Challenges, 2025–26.",
      tags: ["AHP", "ANN", "Groundwater"], map: "maps/groundwater.jpg" },
    { title: "Land suitability for dragon fruit", status: "published", statusLabel: "Published · first author",
      text: "GIS-based AHP suitability mapping for dragon fruit cultivation across Bangladesh. Smart Agricultural Technology, 2025.",
      tags: ["AHP", "Agriculture", "GIS"], map: "maps/dragon-fruit.jpg" },
    { title: "Landslide susceptibility, Hill Tracts", status: "published", statusLabel: "Published",
      text: "Future projections of landslide susceptibility in the Hill Tracts of Bangladesh. Earth Systems and Environment, 2025.",
      tags: ["AHP", "Landslides", "Climate"], map: "maps/landslide.jpg" },
    { title: "EV charging station siting, Dhaka", status: "revision", statusLabel: "In revision",
      text: "AHP, Fuzzy AHP and ANN compared for choosing optimal EV charging sites in Dhaka District. Research Assistant project, 2024–25.",
      tags: ["AHP", "FAHP", "ANN", "Dhaka"], map: "maps/evcs-dhaka.jpg" },
    { title: "Water security, Shitalakshya basin", status: "ongoing", statusLabel: "Research project",
      text: "Multi-temporal blue and green water footprints for the Shitalakshya River Basin. Research Assistant project, 2025–26.",
      tags: ["Water footprint", "Basin", "Remote sensing"], map: "maps/shitalakshya.jpg" },
    { title: "Land use, climate and streamflow, Sangu River", status: "thesis", statusLabel: "MSc thesis",
      text: "How land-use change and climate change alter streamflow in the Sangu River. Supervisor: Md. Rabiul Islam. 2023–25.",
      tags: ["SWAT", "Streamflow", "Climate"], map: "maps/sangu.jpg" },
    { title: "Meteorological drought, Barisal & Khulna", status: "prep", statusLabel: "In preparation",
      text: "Spatiotemporal drought assessment with SPEI-12, comparing two coastal divisions.",
      tags: ["SPEI-12", "Drought", "Coastal"], map: "maps/drought.jpg" },
    { title: "Air quality, industrial Gazipur", status: "ongoing", statusLabel: "Ongoing",
      text: "Satellite-based PM2.5 and PM10 patterns for Gazipur, presented at ICSWER 2026.",
      tags: ["PM2.5", "Google Earth Engine", "Gazipur"], map: "maps/air-quality.jpg" }
  ],

  /* ---------- ৮. জার্নাল পেপার ----------
     নতুন পেপার যোগ করতে: যেকোনো একটা { ... }, ব্লক কপি করে পেস্ট করুন ও বদলান।
     status: published | review | prep ।   doi = শুধু "10.xxxx/..." অংশ (https:// লাগবে না)।
     "Under review" পেপারের জার্নালের নাম ওয়েবসাইটে দেখানো হয় না।                                  */
  publications: [
    { status: "published", year: 2026, authors: "Kundu, S., Hosen, M. B., Popy, S., Tahera-Tun-Humayra, U., Rahman, M. M., Salauddin, M., et al.",
      title: "Application of the fuzzy analytical hierarchy process for flood vulnerability assessment in Sylhet District, Bangladesh",
      journal: "Discover Environment, 4(1), 588", doi: "", q: "" },
    { status: "published", year: 2026, authors: "Kader, Z., Islam, M. R., Miah, M., Aziz, M. T., Haque, A., Tumon, M. S. H., Mamun, M. A. A., Hosen, M. B., Tahera-Tun-Humayra, U., Hasan, M., & Akanda, A. S.",
      title: "Performance assessment of multicriteria decision making techniques and artificial neural network to predict future groundwater potential zones",
      journal: "Ecological Indicators, 183, 114619", doi: "10.1016/j.ecolind.2026.114619", q: "Q1 · IF 7.7" },
    { status: "published", year: 2025, authors: "Hosen, M. B., Islam, M. R., Tahera-Tun-Humayra, U., Sharker, R., Kader, Z., Aziz, M. T., Miah, M., Hasan, M., Pervin, R., Hossain, M. A., & Tofiquzzaman, M.",
      title: "Assessing land suitability for dragon fruit cultivation in Bangladesh: A GIS-based AHP approach",
      journal: "Smart Agricultural Technology, 12, 101241", doi: "10.1016/j.atech.2025.101241", q: "Q1 · IF 5.7" },
    { status: "published", year: 2025, authors: "Islam, M. R., Hosen, M. B., Hossain, M. M., Ayejoto, D. A., & Khan, M. Y. A.",
      title: "Future projections of landslide susceptibility in the Hill Tracts of Bangladesh: An AHP-based approach",
      journal: "Earth Systems and Environment, 9(4), 3017–3041", doi: "10.1007/s41748-025-00776-y", q: "Q1 · IF 4.7" },
    { status: "published", year: 2025, authors: "Aziz, M. T., Haque, A., Islam, M. R., Hosen, M. B., Kader, Z., Aziz, M. A., & Saha, O. R.",
      title: "Site suitability assessment for solar-powered green hydrogen production plants: A GIS-based AHP and Fuzzy AHP approach for Bangladesh",
      journal: "Renewable Energy, 254, 123675", doi: "10.1016/j.renene.2025.123675", q: "Q1 · IF 9.0" },
    { status: "published", year: 2025, authors: "Tahera-Tun-Humayra, U., Islam, M. R., Hosen, M. B., Kader, Z., Sharker, R., Hasan, M., Aziz, M. T., Miah, M., & Pervin, R.",
      title: "Groundwater potential zone mapping using analytical hierarchy process (AHP) and GIS for Narshingdi District, Bangladesh",
      journal: "Environmental Challenges, 21, 101335", doi: "10.1016/j.envc.2025.101335", q: "Q1 · CiteScore 11.0" },
    { status: "published", year: 2025, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Kader, Z., Aziz, M. T., Tahera-Tun-Humayra, U., Hossain, M. A., Pervin, R., Hasan, M., & Roy, A.",
      title: "GIS-based AHP approach to flood susceptibility assessment in Tangail district, Bangladesh",
      journal: "Journal of Earth System Science, 134(1), 26", doi: "10.1007/s12040-024-02480-3", q: "Q2 · IF 1.3" },
    { status: "published", year: 2025, authors: "Miah, M., Islam, M. R., Imran, H. M., Kader, Z., Aziz, M. T., Mamun, M. A. A., Hosen, M. B., Islam, M. R., Tahera-Tun-Humayra, U., & Hasan, M.",
      title: "Assessing soil erosion in the Ghorautra River Basin of Bangladesh: Using SCS-CN and RUSLE methods within the GIS-RS framework",
      journal: "Journal of the Indian Society of Remote Sensing, 53(12), 4383–4403", doi: "10.1007/s12524-025-02276-y", q: "Q2 · IF 2.2" },
    { status: "published", year: 2025, authors: "Bhowmik, D., Kader, Z., Hosen, M. B., & Hossain, S.",
      title: "Exploring socioeconomic vulnerability and natural disasters impacts on water access in Southwestern Bangladesh",
      journal: "DYSONA – Applied Science, 6(1), 186–199", doi: "10.30493/das.2024.483646", q: "" },

    { status: "review", year: 2025, authors: "Tahera-Tun-Humayra, U., Islam, M. R., Hosen, M. B., Sharker, R., Aziz, M. T., Kader, Z., Miah, M., Hasan, M., & Pervin, R.",
      title: "Projected land surface temperature response to land use land cover indices in Dhaka District, Bangladesh" },
    { status: "review", year: 2025, authors: "Mona, M. G., Tahera-Tun-Humayra, U., & Hosen, M. B.",
      title: "Hydro-chemical analysis of groundwater and river water for drinking in Paikgachha Upazila of Khulna District, Bangladesh" },
    { status: "review", year: 2025, authors: "Islam, M. R., Tahera-Tun-Humayra, U., Alam, M. A., Hosen, M. B., & Aziz, M. T.",
      title: "Strategic planning of urban green spaces for mitigating the urban heat island effect: A threshold-based perspective" },
    { status: "review", year: 2025, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Tahera-Tun-Humayra, U., Aziz, M. T., Kader, Z., Hasan, M., Pervin, R., & Hossain, M. A.",
      title: "Spatiotemporal change dynamics in land use and land cover, land surface temperature, and urban heat island in Gazipur District, Bangladesh" },
    { status: "review", year: 2025, authors: "Sharker, R., Islam, M. R., Hosen, M. B., Kader, Z., Tahera-Tun-Humayra, U., Miah, M., Aziz, M. T., Pervin, R., & Hasan, M.",
      title: "AHP-based multi-hazard (flood, cyclone, and landslide) susceptibility assessment of Halda River Basin, Bangladesh" },
    { status: "review", year: 2025, authors: "Miah, M., Islam, M. R., Kader, Z., Aziz, M. T., Hosen, M. B., Tahera-Tun-Humayra, U., Haque, A., Pervin, R., Hossain, M. A., & Hasan, M.",
      title: "Delineating groundwater recharge potential zones: A geoinformatics-based spatial analysis" },

    { status: "prep", year: "", authors: "Hosen, M. B., et al.",
      title: "Spatiotemporal assessment of meteorological drought using SPEI-12 in Barisal and Khulna divisions, Bangladesh" }
  ],

  /* ---------- ৯. কনফারেন্স পেপার ---------- */
  conferences: [
    { year: 2026, title: "Spatiotemporal assessment of LST and LULC variability during summer in Narayanganj District, Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "City-specific cooling thresholds of urban green and blue spaces for urban heat island mitigation in Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "Satellite-based assessment of air quality dynamics in the industrial city of Gazipur, Bangladesh", venue: "ICSWER 2026 · April 2026" },
    { year: 2026, title: "Assessing flood vulnerability in Sylhet District with an AHP-based GIS approach", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026" },
    { year: 2026, title: "Spatial analysis of multi-hazard risks in the Halda River Basin through AHP-based modeling", venue: "8th International Conference on Civil Engineering for Sustainable Development · February 2026" },
    { year: 2025, title: "Assessing the future flood hazard in the Matamuhuri River Basin using HEC-HMS and HEC-RAS", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Assessment of runoff and potential soil erosion in the Dakatia river basin, Bangladesh", venue: "Intl. Conf. on Civil Engineering Research & Innovations, RUET · December 2025" },
    { year: 2025, title: "Evaluating drinking water quality and health risks in communities adjacent to the Modhumoti River, Bangladesh", venue: "ICSHSD 2025, DUET · October 2025", award: true },
    { year: 2025, title: "Hydro-chemical assessment of groundwater and river water quality for drinking in Paikgachha Upazila, Khulna District", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2025, title: "Assessment of heavy metal concentration and the physicochemical parameters of the outlet wastewater: industrial zone, Gazipur", venue: "ICSHSD 2025, DUET · October 2025" },
    { year: 2024, title: "A comparative study of AHP and Fuzzy-AHP approach in selecting solid waste disposal site in Barishal Division", venue: "IICASD 2024, DUET · November 2024", award: true },
    { year: 2024, title: "Shoreline change assessment using DSAS technique: A case study on the coast of Kuakata", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Measuring land surface temperature (LST) response to LULC indices in Dhaka District, Bangladesh", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Assessment of temporal changes in soil erosion at the Halda River Basin, Bangladesh", venue: "IICASD 2024, DUET · November 2024" },
    { year: 2024, title: "Evaluating the saline water impact on agriculture in Gobra Union, Gopalganj", venue: "2nd International Conference on Environment, Khulna University · March 2024" },
    { year: 2024, title: "An evaluation of socio-economic condition and water quality parameters of Kopotokkho River", venue: "2nd International Conference on Environment, Khulna University · March 2024" },
    { year: 2024, title: "Groundwater potential zone mapping using AHP and GIS for Narayanganj District, Bangladesh", venue: "2nd International Conference on Environment, Khulna University · March 2024" }
  ],

  /* ---------- ১০. পুরস্কার ---------- */
  awards: [
    { when: "October 2025",  title: "Presenting Paper Award", where: "1st International Conference on Science and Humanities for Sustainable Development (ICSHSD 2025), DUET" },
    { when: "November 2024", title: "Presenting Paper Award", where: "1st International Conference on Recent Innovation in Civil Engineering and Architecture for Sustainable Development (IICASD 2024), DUET" }
  ],

  /* ---------- ১১. গবেষণা অভিজ্ঞতা ---------- */
  experience: [
    { when: "Jul 2024 – Jun 2026", title: "Research Assistant", org: "Institute of Water & Environment, DUET",
      points: [
        "EV charging station siting in Dhaka District with AHP, Fuzzy AHP and ANN (2024–25). Project Director: Md. Rabiul Islam.",
        "Water security in the Shitalakshya River Basin through multi-temporal blue and green water footprints (2025–26). Project Director: Dr. Mohammad Nazim Uddin."
      ] }
  ],

  education: [
    { when: "2023 – 2025", title: "M.Sc. in Water and Environmental Management", org: "Dhaka University of Engineering & Technology (DUET)", note: "CGPA 3.92 / 4.00. Thesis: land use and climate change impacts on streamflow in the Sangu River." },
    { when: "2018 – 2021", title: "B.Sc. (Honors) in Environmental Science and Disaster Management", org: "Gopalganj Science and Technology University", note: "CGPA 3.01 / 4.00" }
  ],

  /* ---------- ১২. দক্ষতা, ট্রেনিং, সদস্যপদ ---------- */
  skills: [
    { group: "GIS & remote sensing",       items: ["ArcGIS", "ArcGIS Pro", "QGIS", "ERDAS Imagine"] },
    { group: "Hydrological modelling",     items: ["SWAT", "HEC-HMS", "HEC-RAS", "Delft3D"] },
    { group: "Decision analysis & AI",     items: ["AHP", "Fuzzy AHP", "ANN", "MATLAB"] },
    { group: "Statistics & field survey",  items: ["SPSS", "KoboToolbox"] }
  ],

  training: [
    { when: "June 2026",  title: "Basic Python (60-hour professional course)", where: "IICT, DUET" },
    { when: "July 2023",  title: "Numerical Modeling, Artificial Intelligence, and GIS Technology", where: "" },
    { when: "Sep – Oct 2022", title: "Application of GIS and Remote Sensing in Research", where: "" }
  ],

  memberships: [
    "Advisor, DUET Photographic Society (2025 – 2026)",
    "Chief Instructor, DUET Photographic Society (2024 – 2025)",
    "Vice President, BSMRSTU Photographic Society (2019 – 2022)",
    "Member, Bangladesh Poribeshbid Society (BPS)",
    "Member, Research and Skill Development Society (RSDS)"
  ],

  interests: [
    "GIS & remote sensing in hydrology", "Rainfall–runoff modelling", "Climate change impacts on water",
    "Groundwater potential & soil erosion", "Flood susceptibility & risk", "AI & multi-criteria decision-making",
    "Nature-based solutions", "Green infrastructure"
  ],

  /* ---------- ১৩. আমার টুল (উন্নয়নাধীন) ---------- */
  tool: {
    title: "Raster Downscaling Tool",
    status: "In development",
    text: "A desktop app that trains and compares machine-learning models on a coarse raster plus covariates, checks accuracy, and downscales with the best model. GeoTIFF in, finer-resolution GeoTIFF out.",
    image: "maps/downscaling-tool.jpg",
    link: ""
  }
};
