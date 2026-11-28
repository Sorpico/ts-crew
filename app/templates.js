// App templates: the whole app is generated from this file.

// BRAND: the app's name lives here and only here. Change it and every screen follows.
// (Saved data uses fixed internal keys, so renaming never loses anyone's jobs.)
window.BRAND = {
  name: 'Crew Cue',
  tagline: 'The schedule, pulled from your call sheets, spreadsheets and email.',
  stage: 'prototype',   // shown next to the name; set to '' at launch
};
// MODULES = building blocks. DEPARTMENTS = which blocks a department starts with,
// its roles, and its words. Add a department by adding an entry; no other code changes.

window.MODULES = {
  // ---- core: every department gets these ----
  sources: { label: 'Sources', kind: 'sources', core: true,
    blurb: 'Drop a call sheet, spreadsheet or email. Claude pulls out the schedule; you review every change before it lands.' },
  schedule: { label: 'Schedule', kind: 'days', core: true,
    blurb: 'Travel, prep and shoot days with call times.',
    fields: [['date','Date','date'],['type','Type','select:Travel|Prep|Shoot|Wrap'],['call','Call','time'],['where','Where'],['notes','Notes','long']] },
  timeline: { label: 'Timeline', kind: 'timeline', core: true,
    blurb: 'Who is where, set by set, per day.',
    fields: [['day','Day','day'],['start','Start','time'],['end','End','time'],['lane','Crew','crew'],['set','Set'],['loc','Location','loc'],['who','Talent / unit'],['notes','Notes']] },
  locations: { label: 'Locations', kind: 'table', core: true,
    blurb: 'Basecamp, sets, hotel, parking, hospital, with map links.',
    fields: [['name','Name'],['type','Type','select:Basecamp|Set|Production office|Hotel|Parking|Load-in|Hospital|Other'],['address','Address','address'],['contact','On-site contact'],['phone','Phone','tel'],['notes','Notes (power, gate code, access)','long']] },
  crew: { label: 'Crew', kind: 'table', core: true,
    blurb: 'Roster, roles, units and contacts.',
    fields: [['name','Name'],['role','Role','role'],['unit','Unit / team'],['phone','Phone','tel'],['email','Email','email'],['notes','Notes']] },
  logistics: { label: 'Logistics', kind: 'text', core: true,
    blurb: 'Address, hotel, parking, meals, rules of the road.' },
  updates: { label: 'Updates', kind: 'log', core: true,
    blurb: 'Dated change log so everyone sees what moved.',
    fields: [['when','When','datetime'],['what','What changed','long']] },

  // ---- department modules ----
  talent: { label: 'Talent', kind: 'cards',
    blurb: 'Photo cards with per-day on/off times.',
    fields: [['name','Name'],['tag','Tag'],['photo','Photo URL','url'],['on','{on} (per day)','perday'],['off','{off} (per day)','perday'],['notes','Notes','long']] },
  freqs: { label: 'Frequencies', kind: 'table',
    blurb: 'Primary and backup TX + MHz per talent.',
    fields: [['talent','Talent'],['pri_tx','PRI TX'],['pri_mhz','PRI MHz','mhz'],['bu_tx','BU TX'],['bu_mhz','BU MHz','mhz'],['notes','Notes']] },
  kitpool: { label: 'Kit', kind: 'table',
    blurb: 'Who brings what into the shared pool.',
    fields: [['who','Who'],['item','Item'],['qty','Qty','number'],['asset','Asset / serial'],['status','Status','select:Packed|On site|Out|Returned'],['notes','Notes']] },
  timecode: { label: 'Timecode', kind: 'table',
    blurb: 'Every body that needs TC, how it syncs, who jams it.',
    fields: [['device','Camera / device'],['op','Operator'],['method','Sync','select:Tentacle|Jam|TOD/QR|Genlock|None'],['box','Box #'],['jammed','Jammed at','time'],['notes','Notes']] },
  cameras: { label: 'Cameras', kind: 'table',
    blurb: 'Bodies, operators, lenses, support.',
    fields: [['letter','Cam'],['body','Body'],['op','Operator'],['lens','Lens'],['support','Support','select:Sticks|Handheld|Gimbal|Jib|Drone|Car'],['notes','Notes']] },
  media: { label: 'Media', kind: 'table',
    blurb: 'Card log and offloads.',
    fields: [['card','Card'],['cam','Cam'],['day','Day','day'],['in','In','time'],['offload','Offloaded','time'],['verified','Verified','check'],['notes','Notes']] },
  comms: { label: 'Comms', kind: 'table',
    blurb: 'Bases, headsets, channels and who is on what.',
    fields: [['station','Station / hub'],['who','Who'],['channel','Channel / group'],['device','Device'],['notes','Notes']] },
  power: { label: 'Power', kind: 'table',
    blurb: 'Generators, distro and circuits.',
    fields: [['source','Source'],['location','Location'],['load','Load (A)','number'],['feeds','Feeds'],['notes','Notes']] },
  fixtures: { label: 'Fixtures', kind: 'table',
    blurb: 'Lights per set and their settings.',
    fields: [['set','Set'],['fixture','Fixture'],['qty','Qty','number'],['ch','DMX / ch'],['notes','Notes']] },
  looks: { label: 'Looks', kind: 'table',
    blurb: 'Talent looks and changes per set.',
    fields: [['talent','Talent'],['set','Set'],['look','Look'],['change','Change at','time'],['notes','Notes']] },
  transport: { label: 'Transport', kind: 'table',
    blurb: 'Pickups, drivers, vehicles.',
    fields: [['who','Who'],['from','From'],['to','To'],['time','Time','time'],['driver','Driver'],['notes','Notes']] },
  meals: { label: 'Meals', kind: 'table',
    blurb: 'Lunch windows by team.',
    fields: [['day','Day','day'],['team','Team'],['start','Start','time'],['end','End','time'],['notes','Notes']] },
};

window.DEPARTMENTS = {
  sound: { label: 'Sound', icon: '🎙', blurb: 'Mic talent, run RF, timecode and comms.',
    roles: ['Supervisor / A1','Mixer','A2 / utility','Comms','RF coordinator'],
    modules: ['sources','timeline','schedule','locations','talent','freqs','kitpool','timecode','comms','crew','logistics','updates'],
    terms: { on: 'Mic', off: 'Wrap', talent: 'Talent', lane: 'Mixer' } },
  camera: { label: 'Camera', icon: '🎥', blurb: 'Bodies, operators, lenses, media and TC.',
    roles: ['DP','Camera operator','1st AC','2nd AC','DIT','Drone pilot'],
    modules: ['sources','timeline','schedule','locations','cameras','media','timecode','kitpool','crew','logistics','updates'],
    terms: { on: 'Call', off: 'Wrap', talent: 'Talent', lane: 'Operator' } },
  comms: { label: 'Comms / Video', icon: '🎧', blurb: 'Intercom, IFB, video village.',
    roles: ['Comms lead','Comms tech','Video assist'],
    modules: ['sources','timeline','schedule','locations','comms','kitpool','crew','logistics','updates'],
    terms: { on: 'Up', off: 'Down', talent: 'Talent', lane: 'Tech' } },
  lighting: { label: 'Grip & Electric', icon: '💡', blurb: 'Fixtures, power, distro.',
    roles: ['Gaffer','Best boy','Key grip','Electric','Grip','Genny op'],
    modules: ['sources','timeline','schedule','locations','fixtures','power','kitpool','crew','logistics','updates'],
    terms: { on: 'Lit', off: 'Wrap', talent: 'Talent', lane: 'Crew' } },
  hmu: { label: 'Hair, Makeup & Wardrobe', icon: '👗', blurb: 'Talent looks and changes.',
    roles: ['Department head','Hair','Makeup','Wardrobe','Assistant'],
    modules: ['sources','timeline','schedule','locations','talent','looks','kitpool','crew','logistics','updates'],
    terms: { on: 'In chair', off: 'Wrap', talent: 'Talent', lane: 'Artist' } },
  production: { label: 'Production', icon: '📋', blurb: 'Call sheet, talent, transport, meals.',
    roles: ['Producer','Coordinator','AD','PA'],
    modules: ['sources','timeline','schedule','locations','talent','transport','meals','crew','logistics','updates'],
    terms: { on: 'Call', off: 'Wrap', talent: 'Talent', lane: 'Unit' } },
  custom: { label: 'Something else', icon: '➕', blurb: 'Start from the core and pick modules.',
    roles: ['Lead','Crew'],
    modules: ['sources','timeline','schedule','locations','crew','logistics','updates'],
    terms: { on: 'On', off: 'Off', talent: 'Talent', lane: 'Crew' } },
};

// Where schedules come from. "live" = wired through a connected Claude connector.
// Others show up so users see them; they light up once the connector is connected and wired.
window.SOURCES = {
  mail: [
    { id: 'gmail',   label: 'Gmail',   server: 'Gmail',          live: true },
    { id: 'outlook', label: 'Outlook', server: 'Microsoft 365',  live: false },
  ],
  storage: [
    { id: 'gdrive',   label: 'Google Drive',         server: 'Google Drive',  live: true },
    { id: 'dropbox',  label: 'Dropbox',              server: 'Dropbox',       live: false },
    { id: 'box',      label: 'Box',                  server: 'Box',           live: false },
    { id: 'onedrive', label: 'OneDrive / SharePoint', server: 'Microsoft 365', live: false },
  ],
};
