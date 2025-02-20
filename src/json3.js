const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCa_zffXXB5Vuzs62LyOcGZiWHpaNkok9o",
  authDomain: "uav-registry.firebaseapp.com",
  projectId: "uav-registry"
});

var db = firebase.firestore();

var uavs = [
  {
    Kep: "x",
    CountriesOfOrigin: "Ausztrália",
    Manufacturer: "Robotic Systems",
    Model: "Titan Mk V",
    Url: "http://www.roboticsystems.com.au/titan_mkv/",
    Applications: "felderítés; megfigyelés",
    Length: "3",
    Height: "0,42",
    WingSpan: "",
    RotorDiameter: "",
    EmptyWeight: "18",
    MaxSpeed: "72",
    CruiseSpeed: "72",
    RateOfDescent: "10,8",
    RateOfClimb: "18",
    WindResistance: null,
    Ceiling: 6000,
    Endurance: "50 min",
    Payload: "",
    PayloadWeight: "",
    MTOW: "",
    PowerPlant: "",
    Recovery: "",
    Launcher: "",
    LaunchSetupTime: "1 min",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "Dual 30Ah LiPo batteries",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "0",
    OperatingTemperatureRangeMax: "60",
    OperationalAltitude: "",
    GCS: "",
    Status: "",
    ExtraInfo: "",
    Classification: "octocopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Ausztrália",
    Manufacturer: "Sientific Aerospace",
    Model: "CyberQuad",
    Url: "http://sci.aero/",
    Applications:
      "infrastruktúra felügyelet; vagyon felügyelet; kárfelmérés; légifényképezés; filmfelvétel; megfigyelés; felderítés",
    Length: "0,69",
    Height: "0,2",
    WingSpan: "0,56",
    RotorDiameter: "",
    EmptyWeight: "1,9",
    MaxSpeed: "",
    CruiseSpeed: "",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: null,
    Endurance: "15-20 min",
    Payload: "HD video; dual thermal, optical, multi-spectral DSLR; DSLR",
    PayloadWeight: "",
    MTOW: "2,7",
    PowerPlant: "4x direct-drive brushless electric motors",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "1 km",
    LOSRange: "0,5",
    OneWayRange: "",
    GuidanceAndFlightMode:
      "félautomata sebességszabályozás pozíció tárolással és hazatérés funkcióval, vagy teljesen automatika útvonal navigációval és click-to-fly képességgel",
    StructureMaterial: "hőrelágyuló műanyag",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "",
    Status: "",
    ExtraInfo: "",
    Classification: "quadcopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Ausztrália/ USA",
    Manufacturer: "Textron Systems Unmanned Systems",
    Model: "Aerosonde Mk 4.7",
    Url: "https://apps.fcc.gov/els/GetAtt.html?id=110398&x=.",
    Applications:
      "katonai taktikai hosszútávú ISR; tudományos küldetések; környezeti megfigyelés; monitoring; comms relay",
    Length: "2,03",
    Height: "0,8",
    WingSpan: "3,6",
    RotorDiameter: "",
    EmptyWeight: "26,7",
    MaxSpeed: "120",
    CruiseSpeed: "",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: 4572,
    Endurance: "14 h",
    Payload:
      "combined EO/IR/laser rangefinder/pointer standard; other EO/IR ; multi-mission capability with simultaneous EO/IR plus intelligence sensors and  comms relay;",
    PayloadWeight: "9",
    MTOW: "36,3",
    PowerPlant:
      "Lycoming EL-005 4hp single-cylinder 2-stroke, pure heavy fuel (JP5/ JP8/ Jet A/ Jet A-1/ F24)",
    Recovery: "autonomous soft hands net landing",
    Launcher: "autonomous via sliding frame pneumatic launcher",
    LaunchSetupTime: "",
    DataLink:
      "LOS (titkosított és titkosítatlan változatban is), BLOS Iridium SATCOM-mal",
    LOSRange: "140 km LOS, 300 km BLOS",
    OneWayRange: "",
    GuidanceAndFlightMode:
      "autonomous under pilot command, navigation using RTK GPS or optional SAASM GPS with attitude, heading reference system backup",
    StructureMaterial: "composite",
    ElectricalPower: "up to 300 W available for payload",
    SystemComponents:
      "aircraft, payloads, launch and recovery trailer,  Expeditionary GCS, GSE",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "",
    Status: "in production",
    ExtraInfo: "",
    Classification: "fixed-wing"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Ausztria",
    Manufacturer: "Schiebel",
    Model: "Camcopter S-100",
    Url: "https://schiebel.net/products/camcopter-s-100-system-2/",
    Applications:
      "Camcopter S-100 vízi és földi ISR; C-IED támogatás; anti-piracy; comms relay;  ESM;  COMINT; RWR; csővezeték és magasfeszültségű villamos vezeték monitoring;  konvoj védelem; kikötő/ határ őrjárat; part megfigyelés; légi térképezés; PSYOPs; katasztrófa monitoring",
    Length: "3,1",
    Height: "1,1",
    WingSpan: "",
    RotorDiameter: "3,4",
    EmptyWeight: "110",
    MaxSpeed: "220",
    CruiseSpeed: "100",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: 5486,
    Endurance: "6 h with 34 kg payloads, 10h with optional external tank",
    Payload:
      "universal mount supports EO/ IR; LIDAR; radar; MAD; hyperspectral camera; ESM; ELINT; COMINT; loudspeakers",
    PayloadWeight: "50",
    MTOW: "200",
    PowerPlant: "50 hp JP-5 heavy fuel or AVGas 100LL,  293cc rotary engine",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "primary C-band, secondary UHF",
    LOSRange: "200",
    OneWayRange: "",
    GuidanceAndFlightMode: "DGPS/ INS",
    StructureMaterial: "titanium, carbon fibre",
    ElectricalPower: "1 000 W at 28V DC",
    SystemComponents: "2x aerial vehicles, 1x GCS VTOL",
    FIELD34: "",
    OperatingTemperatureRangeMin: "-40",
    OperatingTemperatureRangeMax: "55",
    OperationalAltitude: "",
    GCS:
      "2x ruggedised network-based mission planning/ control and payload workstations, tracking antenna, UHF backup antenna, GPS reference module, pilot control unit, central processing unit (CUBE)",
    Status: "",
    ExtraInfo: "",
    Classification: "helicopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "Eye Sky",
    Url: "http://www.indelauav.com/esp_lang/product_eye_sky.html",
    Applications:
      "taktikai felderítés; megfigyelés; célpont megjelölés; határ felügyelet",
    Length: "",
    Height: "1,15",
    WingSpan: "",
    RotorDiameter: "3,28",
    EmptyWeight: "",
    MaxSpeed: "",
    CruiseSpeed: "70",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: null,
    Endurance: "6 h",
    Payload: "gyro-stabilised EO system with IR camera and laser rangefinder",
    PayloadWeight: "",
    MTOW: "150",
    PowerPlant: "4-cycle,  2-cylinder, water-cooled with dry crankcase",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "420",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "trailer-mounted",
    Status: "available",
    ExtraInfo: "",
    Classification: "helicopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "I N Sky",
    Url: "http://www.indelauav.com/eng_lang/product_insky.html",
    Applications: "taktikai felderítés;megfigyelés",
    Length: "3,05",
    Height: "1,35",
    WingSpan: "",
    RotorDiameter: "3,2",
    EmptyWeight: "90",
    MaxSpeed: "",
    CruiseSpeed: "70",
    RateOfDescent: "18",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: 1500,
    Endurance: "5 h",
    Payload: "gyro-stabilised EO system with IR camera and laser rangefinder",
    PayloadWeight: "25",
    MTOW: "140",
    PowerPlant: "4-cycle,  2-cylinder, water-cooled with dry syrup",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "-35",
    OperatingTemperatureRangeMax: "55",
    OperationalAltitude: "",
    GCS: "trailer-mounted",
    Status: "available",
    ExtraInfo: "",
    Classification: "helicopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "H U Sky II",
    Url: "http://www.indelauav.com/eng_lang/product_husky.html",
    Applications:
      "taktikai felderítés; megfigyelés; célpont megjelölés; határ ellenőrzés",
    Length: "4,35",
    Height: "1,53",
    WingSpan: "",
    RotorDiameter: "4,8",
    EmptyWeight: "",
    MaxSpeed: "",
    CruiseSpeed: "100",
    RateOfDescent: "18",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: 2100,
    Endurance: "up to 5h",
    Payload: "gyro-stabilised EO system with IR camera and LRF",
    PayloadWeight: "55",
    MTOW: "255",
    PowerPlant: "4-cycle,  2-cylinder, water-cooled",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "trailer-mounted",
    Status: "available",
    ExtraInfo: "",
    Classification: "helicopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "Indela-9",
    Url: "http://www.indelauav.com/eng_lang/product_indela9.html",
    Applications: "megfigyelés; térképezés",
    Length: "3,34",
    Height: "",
    WingSpan: "9,1",
    RotorDiameter: "",
    EmptyWeight: "",
    MaxSpeed: "140",
    CruiseSpeed: "90",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: null,
    Endurance: "1,5 h",
    Payload: "gyro-stabilised EO with IR camera and LRF",
    PayloadWeight: "55",
    MTOW: "55",
    PowerPlant: "electric as standard, 2-cylinder, 2cycle engine as option",
    Recovery: "glide landing, emergency parachute with optional engine",
    Launcher: "hand; catapult",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "90",
    OneWayRange: "",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "",
    Status: "available",
    ExtraInfo: "",
    Classification: "fixed-wing"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "Sky LAB",
    Url: "http://www.indelauav.com/eng_lang/product_sky_lab.html",
    Applications: "taktikai felderítés; megfigyelés",
    Length: "3,05",
    Height: "1,35",
    WingSpan: "",
    RotorDiameter: "3,15",
    EmptyWeight: "",
    MaxSpeed: "70",
    CruiseSpeed: "",
    RateOfDescent: "",
    RateOfClimb: "5,4",
    WindResistance: null,
    Ceiling: 1000,
    Endurance: "30",
    Payload: "gyro-stabilised EO with IR camera and LRF",
    PayloadWeight: "25",
    MTOW: "125",
    PowerPlant: "four-cycle, two-cylinder, water-cooled",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "",
    GuidanceAndFlightMode: "",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "",
    Status: "",
    ExtraInfo: "",
    Classification: "helicopter"
  },
  {
    Kep: "x",
    CountriesOfOrigin: "Fehéroroszország",
    Manufacturer: "Indela",
    Model: "BERKUT",
    Url: "http://www.indelauav.com/eng_lang/product_berkut.html",
    Applications: "taktikai felderítés; megfigyelés",
    Length: "2,38",
    Height: "2,8",
    WingSpan: "",
    RotorDiameter: "3,2",
    EmptyWeight: "",
    MaxSpeed: "400",
    CruiseSpeed: "150",
    RateOfDescent: "",
    RateOfClimb: "",
    WindResistance: null,
    Ceiling: 3500,
    Endurance: "",
    Payload: "gyro-stabilised EO with IR camera and LRF",
    PayloadWeight: "34",
    MTOW: "125",
    PowerPlant: "turbojet",
    Recovery: "VTOL",
    Launcher: "VTOL",
    LaunchSetupTime: "",
    DataLink: "",
    LOSRange: "",
    OneWayRange: "110",
    GuidanceAndFlightMode:
      "Autonomous navigation, automatic performance of the flight task",
    StructureMaterial: "",
    ElectricalPower: "",
    SystemComponents: "",
    FIELD34: "",
    OperatingTemperatureRangeMin: "",
    OperatingTemperatureRangeMax: "",
    OperationalAltitude: "",
    GCS: "",
    Status: "",
    ExtraInfo: "",
    Classification: "fixed-wing"
  }
];

uavs.forEach(function(obj) {
  db.collection("uavs")
    .add({
      Kép: obj.Kep,
      Származási_ország: obj.CountriesOfOrigin,
      Gyártó: obj.Manufacturer,
      Modell: obj.Model,
      Weboldal: obj.Url,
      Alkalmazás: obj.Applications,
      Hosszúság_m: obj.Length,
      Magasság_m: obj.Height,
      Szárnyfesztávolság_m: obj.WingSpan,
      Rotor_átmérő_m: obj.RotorDiameter,
      Súly_akkumulátor_nélkül_kg: obj.EmptyWeight,
      Maximum_sebesség_kmh: obj.MaxSpeed,
      Cruise_sebesség_kmh: obj.CruiseSpeed,
      Emelkedés_sebessége_kmh: obj.RateOfDescent,
      Süllyedés_sebessége_kmh: obj.RateOfClimb,
      Szélellenállás: obj.WindResistance,
      Maximális_repülési_magasság_m: obj.Ceiling,
      Élettartam: obj.Endurance,
      Hasznos_teher: obj.Payload,
      Hasznos_teher_súlya_kg: obj.PayloadWeight,
      MTOW: obj.MTOW,
      Meghajtó: obj.PowerPlant,
      Helyreállás: obj.Recovery,
      Kivetőszerkezet: obj.Launcher,
      Kivetőszerkezet_betöltési_ideje: obj.LaunchSetupTime,
      Adatkapcsolat: obj.DataLink,
      LOS_hatótáv: obj.LOSRange,
      Hatótáv: obj.OneWayRange,
      Repülési_mód: obj.GuidanceAndFlightMode,
      Szerkezet_anyaga: obj.StructureMaterial,
      Áramellátás: obj.ElectricalPower,
      Rendszer_összetevők: obj.SystemComponents,
      FIELD34: obj.FIELD34,
      Minimum_működési_hőmérséklet: obj.OperatingTemperatureRangeMin,
      Maximum_működési_hőmérséklet: obj.OperatingTemperatureRangeMax,
      Működési_magasság_m: obj.OperationalAltitude,
      GCS: obj.GCS,
      Elérhetőség: obj.Status,
      Extra_info: obj.ExtraInfo,
      Típus: obj.Classification
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
});
