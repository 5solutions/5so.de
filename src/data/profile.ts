// Single source of truth for all page variants. Edit content here only.

export const person = {
  name: 'Stefan Sobek',
  role: 'Lead Customer Solution Manager',
  roles: ['Projekt- & Programmmanager', 'Agile Master', 'Dozent & Coach'],
  location: 'Nettetal · Niederrhein',
  email: 'stefan@sobek.info',
  linkedin: 'https://www.linkedin.com/in/stefansobek/',
  github: 'https://github.com/socke',
  headline: 'Ich bringe komplexe IT-Vorhaben ins Ziel.',
  lead:
    'Mit klarer Struktur, agilen Teams und über 20 Jahren Erfahrung zwischen Code, Kunde und Hörsaal.',
  description:
    'Stefan Sobek – Lead Customer Solution Manager, Projekt- und Programmmanager, Agile Master und Dozent aus Nettetal. PMP, PSM II, PMI-ACP, TOGAF.',
};

export const quote = {
  text: 'It is better to solve one problem five different ways, than to solve five problems one way.',
  author: 'George Pólya',
};

export const about = [
  'Angefangen habe ich als Kommunikationselektroniker bei der Deutschen Telekom. Über das Informatikstudium in Venlo und Hagen, Softwareentwicklung und Architektur bin ich im Projekt- und Programmmanagement angekommen – ohne je den Draht zur Technik zu verlieren.',
  'Heute verantworte ich bei der BWI als Lead Customer Solution Manager Collaboration- und Echtzeitkommunikationslösungen im Verteidigungsumfeld. Davor habe ich SAP-Programme bei OpenText geleitet, fünf Jahre an der Fontys Hogeschool in Venlo Projektmanagement und Software Engineering gelehrt und bei T-Systems Großprojekte wie die Mautplattform in Belgien begleitet.',
  'Mich treibt die Frage an, wie Teams wirklich gut zusammenarbeiten. Deshalb verbinde ich klassisches Projektmanagement mit agilen Methoden – und gebe dieses Wissen gern als Trainer und Coach weiter.',
];

export const stats = [
  { value: '20+', label: 'Jahre Berufserfahrung' },
  { value: '10', label: 'Zertifizierungen' },
  { value: '28', label: 'Personen in 4 agilen Teams' },
  { value: '3', label: 'Sprachen: DE · EN · NL' },
];

// Five focus areas – deliberately five, as a nod to the Pólya quote.
export const focus = [
  {
    title: 'Projekt- & Programmmanagement',
    text: 'Planung, Steuerung, Budget, Risiko und Stakeholder – vom Kick-off bis zum Go-live. Erprobt in Programmen mit mehreren Teams und Kunden parallel.',
    tags: ['PMP', 'Risk & Claim Management', 'Reporting'],
  },
  {
    title: 'Agile Transformation & Scrum',
    text: 'Einführung und Coaching von Scrum, Kanban und OKR – auf Team- wie auf Managementebene. Inspect & Adapt, nicht Methode um der Methode willen.',
    tags: ['PSM II', 'PMI-ACP', 'OKR Master'],
  },
  {
    title: 'Customer Solution Management',
    text: 'Anforderungen in tragfähige Lösungen übersetzen, Erwartungen managen, Eskalationen lösen und Lösungen an den Geschäftszielen ausrichten.',
    tags: ['Stakeholder', 'Design Thinking', 'ITIL'],
  },
  {
    title: 'Lehre, Training & Coaching',
    text: 'Fünf Jahre Hochschuldozent mit niederländischer Lehrqualifikation (BKO), Trainer für Software Engineering und Coach für Scrum Master und Product Owner.',
    tags: ['BKO', 'Workshops', 'Mentoring'],
  },
  {
    title: 'Architektur & Integration',
    text: 'SAP-Integration, Legacy-Migration und Enterprise Architecture – auf dem Fundament von über zehn Jahren eigener Softwareentwicklung.',
    tags: ['TOGAF', 'SAP', 'Java / JEE'],
  },
];

export const experience = [
  { from: '03/2023', to: 'heute', company: 'BWI GmbH', role: 'Lead Customer Solution Manager · Senior Project Manager · Agile Master' },
  { from: '01/2022', to: '02/2023', company: 'OpenText Software GmbH', role: 'Program Manager' },
  { from: '01/2017', to: '12/2021', company: 'Fontys University of Applied Sciences, Venlo (NL)', role: 'Dozent für Projektmanagement, agiles PM und Software Engineering · Projektleiter Applied Sciences' },
  { from: '11/2012', to: '12/2016', company: 'T-Systems International GmbH', role: 'Project Manager · Scrum Master · Agile Coach' },
  { from: '01/2010', to: '10/2012', company: 'CoCoNet AG', role: 'Technical Project Lead · Senior Software Engineer' },
  { from: '07/2007', to: '12/2009', company: 'CIPS GmbH (Medienpark Nettetal)', role: 'Software Engineer & Project Manager' },
  { from: '08/2005', to: '07/2007', company: 'Vodafone', role: 'Junior Software Engineer' },
];

export const projects = [
  {
    years: '2023–2024',
    title: 'Krisenvorsorgeinformationssystem',
    domain: 'Verteidigung',
    role: 'Agile Master',
    text: 'Agile Master für vier Entwicklungsteams mit insgesamt 28 Personen. Aufbau und Weiterentwicklung der agilen Prozesse, Coaching von Projektleitung, Product Ownern und Scrum Mastern.',
  },
  {
    years: '2022–2023',
    title: 'OpenText VIM in SAP – Programm mit vier Kunden',
    domain: 'Handel · Chemie · Automotive · Spielwaren',
    role: 'Program & Project Manager',
    text: 'Einführung von Vendor Invoice Management und Order Confirmation für Konzerne mit bis zu 160 Filialen in Europa. Teams bis zehn Personen, Budgeterweiterungen, Verhandlungen und Pre-Sales.',
  },
  {
    years: '2017–2018',
    title: 'LOGwear – Wearables in der Logistik',
    domain: 'Logistik · INTERREG DE/NL',
    role: 'Projektleitung & Agile Coach',
    text: 'Forschungsprogramm mit 1,1 Mio. € Budget: Wie Wearables Logistikprozesse im Mittelstand verbessern. Koordination mehrerer Entwicklerteams, Studierender und Partner.',
    link: 'https://www.logwear.eu',
  },
  {
    years: '2016',
    title: 'Migration Legacy-Produktion nach SAP',
    domain: 'Luftfahrt',
    role: 'Gesamtprojektleitung',
    text: 'Drei Teilprojekte, 25 Personen, Nearshore-Teams und Synchronisation von PTC Windchill mit SAP – abgeschlossen in Zeit, Umfang und Budget.',
  },
  {
    years: '2014–2016',
    title: 'Mautplattform Belgien (Satellic)',
    domain: 'Automotive · Öffentlicher Sektor',
    role: 'Scrum Master & Projektleitung',
    text: 'Scrum für drei Teams mit 21 Personen eingeführt und zwei Jahre gecoacht – für On-Board-Unit und Backend im damals größten Projekt von T-Systems.',
  },
  {
    years: '2011–2013',
    title: 'Connected Car & Enterprise Banking',
    domain: 'Automotive · Finanzdienstleistung',
    role: 'Architekt & technische Projektleitung',
    text: 'iOS-Framework zur Fahrzeugdiagnose per OBD und CeBIT-Showcase; neue GUI-Schicht eines Corporate-Banking-Portals mit neun Entwicklern im Nearshoring.',
  },
];

export const certifications = [
  { date: '12/2025', name: 'Certified OKR Master', issuer: 'die.agilen GmbH' },
  { date: '11/2025', name: 'IBM Enterprise Design Thinking Practitioner', issuer: 'IBM iX DACH' },
  { date: '06/2025', name: 'TOGAF Enterprise Architecture Foundation', issuer: 'The Open Group' },
  { date: '06/2024', name: 'ITIL® 4 Foundation', issuer: 'AXELOS' },
  { date: '10/2023', name: 'Professional Scrum Master II (PSM II)', issuer: 'Scrum.org' },
  { date: '07/2019', name: 'UEFA Grassroots C-Lizenz', issuer: 'DFB-Akademie' },
  { date: '07/2018', name: 'PMI Agile Certified Practitioner (PMI-ACP)', issuer: 'Project Management Institute' },
  { date: '04/2018', name: 'Basiskwalificatie Onderwijs (BKO)', issuer: 'Hochschullehrqualifikation (NL)' },
  { date: '08/2015', name: 'Project Management Professional (PMP)', issuer: 'Project Management Institute' },
  { date: '06/2014', name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org' },
];

export const education = [
  { from: '2008', to: '2014', title: 'M.Sc. Praktische Informatik', place: 'FernUniversität in Hagen', note: 'Masterarbeit im Bereich industrielle Automatisierungssysteme und Integration' },
  { from: '2003', to: '2007', title: 'Bachelor of ICT', place: 'Fontys Hogescholen Venlo (NL)', note: '3. Platz Fontys Technology Award 2007 für die beste technische Abschlussarbeit' },
  { from: '1995', to: '1998', title: 'Ausbildung Kommunikationselektroniker', place: 'Deutsche Telekom AG', note: 'Schwerpunkt Kommunikationsnetze' },
];

export const languages = [
  { name: 'Deutsch', level: 'Muttersprache' },
  { name: 'Englisch', level: 'verhandlungssicher' },
  { name: 'Niederländisch', level: 'verhandlungssicher' },
];

export const nav = [
  { href: '#ueber', label: 'Über mich' },
  { href: '#schwerpunkte', label: 'Schwerpunkte' },
  { href: '#projekte', label: 'Projekte' },
  { href: '#werdegang', label: 'Werdegang' },
  { href: '#kontakt', label: 'Kontakt' },
];
