<template>
    <div>
      {{ icons.length }}
      <!-- <vIcon v-for="item in icons" :icon="item.toLocaleLowerCase()" :key="item" :size="size"/> -->
      <!-- <vIcon v-for="item in r" :icon="item.toLocaleLowerCase()" :key="item" :size="size"/> -->
      <!-- <vIcon  :icon="'dollar-sign'" :size="size"/>
      <vIcon  :icon="'dollar'" :size="size"/>
      <vIcon  :icon="'truck-moving'" :size="size"/>
      <vIcon  :icon="'rotate'" :size="size"/>
      <vIcon  :icon="'sync-alt'" :size="size"/>
      <vIcon  :icon="'square-minus'" :size="size"/> -->
      <!-- <vIcon  :icon="'kiss'" :size="size"/> -->
      <vIcon  :icon="'users'" :size="size"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import vIcon from "./Icon/icon.tsx"
import {toKebabCase} from "../../cli/template/utils"
const size = ref<any>("2xl");
const r =ref(['ceKiss',"Thermometer0","Temperature0","Thermometer4","ceDizzy","Tachometerst","Wifi3","ArrowUp19","ceGrinBeam","ceAngry","MoneyBill1Wave","ceGrinWink","MoneyBill1","Forwardst","ceLaugh","Battery4",
"Signal5","StarHallt","Battery0","ceSadTear","ceGrinTongueSquint","ceGrinStars","ceGrinTears","ucetDrip","ceFlushed","Hourglass3","ceGrimace","ceRollingEyes","ceGrinBeamSweat","ceLaughWink","Battery3","Temperature3",
"Thermometer3","Stopwatch20","Shippingst","Truckst","Penncy","Battery5","ceKissBeam","Temperature4","ceMeh","ceMehBlank","ceGrinTongue","ceSurprise","ceGrinSquint","ceGrinSquintTears","ceSmileBeam","Personlling",
"PersonllingBurst","ceSadCry","ceTired","Hourglass1","ceFrownOpen","ArrowDown19","Pastarianism","Hourglass2","ucet","Temperature1","Thermometer1","ceFrown","Temperature2","Thermometer2","List12","TachometerAltst",
"ceSmileWink","ceLaughBeam","Backwardst","stBackward","ceGrinTongueWink","ceGrinHearts","Maskce","ArrowUp91","ArrowDown91","ceGrinWide","Battery2","ceLaughSquint","ceKissWinkHeart","stForward","ceGrin","ceSmile",
"Stafesculapius"].map(it=>{
// console.log()
  return toKebabCase(it)
}))
const icons =ref(["0","1","2","3","4","5","6","7","8","9","DollarSign","Dollar","Usd","Dog","TruckMoving","Rotate","SyncAlt","SquareMinus","MinusSquare","AlignJustify","CalendarCheck","Kiss","KitchenSet","Dna",
"ChildReaching","Paste","FileClipboard","Meteor","Gears","Cogs","FileCirclePlus","Icicles","ArrowTrendUp","HexagonNodesBolt","Question","HandsBound","PersonWalkingLuggage","FileArrowDown","FileDownload",
"PersonBooth","Locust","RightLong","LongArrowAltRight","TruckDroplet","HandHoldingMedical","HandPointLeft","Calculator","Minus","Subtract","ArrowUpZA","SortAlphaUpAlt","MicrophoneSlash","SquarePen","PenSquare",
"PencilSquare","HandFist","FistRaised","CommentSms","Sms","SimCard","ScaleBalanced","BalanceScale","Car","Automobile","CropSimple","CropAlt","Medal","Scroll","FileExcel","Filter","Drum","MapPin","ScaleUnbalancedFlip",
"BalanceScaleRight","ArrowsToCircle","Envelope","Baby","SquareCaretDown","CaretSquareDown","Tent","A","ParachuteBox","CartArrowDown","BridgeCircleExclamation","CloudArrowUp","CloudUpload","CloudUploadAlt","At",
"IndianRupeeSign","IndianRupee","Inr","Truck","ChalkboardUser","ChalkboardTeacher","UserCheck","UserNinja","PlantWilt","WeightScale","Weight","CaretRight","FlorinSign","Bell","LariSign","MillSign",
"PersonSnowboarding","Snowboarding","Tty","Teletype","UsersRectangle","Mobile","MobileAndroid","MobilePhone","ArrowsTurnToDots","Exclamation","Church","ToggleOff","ShoePrints","FileCircleExclamation","Wallet",
"Message","CommentAlt","Trophy","Dizzy","Bacteria","EarDeaf","Deaf","Deafness","HardOfHearing","PeopleArrows","PeopleArrowsLeftRight","HandsClapping","VirusCovidSlash","CalendarDays","CalendarAlt","DiamondTurnRight",
"Directions","HandPointUp","BezierCurve","PersonHalfDress","SquarePollHorizontal","PollH","SchoolCircleXmark","HandLizard","Chalkboard","Blackboard","UpRightFromSquare","ExternalLinkAlt","SquareFull","Clover",
"TeethOpen","BarsStaggered","Reorder","Stream","Warehouse","Swatchbook","Campground","PersonWalkingArrowRight","Glasses","CirclePause","PauseCircle","Memory","Gift","MoneyBillWheat","Dungeon","SuitcaseMedical",
"Medkit","PersonCane","Gauge","Dashboard","GaugeMed","TachometerAltAverage","EnvelopeOpenText","Toolbox","PowerOff","Signal","SignalPerfect","ArrowsSpin","Joint","Braille","BasketShopping","ShoppingBasket","Bridge",
"PlaneArrival","CashRegister","Ring","ShareNodes","ShareAlt","PersonCircleExclamation","Binoculars","KipSign","HardDrive","Hdd","RankingStar","UserTie","Ellipsis","EllipsisH","StoreSlash","Percent","Percentage",
"FileZipper","FileArchive","Display","Icons","HeartMusicCameraBolt","RulerVertical","MapLocationDot","MapMarkedAlt","HeartCrack","HeartBroken","Cow","Rss","Feed","MagnifyingGlass","Search","CloudMoon","BoxesStacked",
"Boxes","BoxesAlt","CodeBranch","Ban","Cancel","JugDetergent","Reply","MailReply","SunPlantWilt","Bacterium","RecordVinyl","FloppyDisk","Save","ToiletsPortable","O","Palette","Unlock","EarListen",
"AssistiveListeningSystems","CodePullRequest","Key","Skull","MarsStrokeUp","MarsStrokeV","FireFlameSimple","Burn","Tree","Smog","S","Jedi","PersonHiking","Hiking","ArrowsUpToLine","MarsDouble","Thermometer",
"Paintbrush","PaintBrush","Neuter","SquarePhoneFlip","PhoneSquareAlt","GrinTongueSquint","CommentDollar","Hippo","BowlFood","SquareVirus","CloudSunRain","ArrowRightLong","LongArrowRight","BuildingUn",
"TemperatureLow","DoorOpen","AlignLeft","Camera","CameraAlt","UsersRays","Rainbow","Sitemap","GrinStars","SortUp","SortAsc","Eye","CaretLeft","AppleWhole","AppleAlt","ScrollTorah","Torah","HouseLock",
"ArrowsLeftRightToLine","Trash","SadTear","x","PersonCirclePlus","Hamsa","PersonCircleQuestion","ClipboardCheck","ShareFromSquare","ShareSquare","Receipt","Equals","ChevronUp","VirusSlash","Slash","Expand",
"NoteSticky","StickyNote","TableColumns","Columns","PersonShelter","CircleNotch","Water","DeleteLeft","Backspace","BroomBall","Quidditch","QuidditchBroomBall","J","ShuttleSpace","SpaceShuttle","YinYang","Stop",
"Trowel","HandBackFist","HandRock","TemperatureHigh","GreaterThan","Crutch","Septagon","Heptagon","StreetView","WaveSquare","AngleLeft","Screwdriver","Tractor","BridgeCircleXmark","Vials","Stethoscope","Podcast",
"ArrowUpRightDots","ChessQueen","AnchorCircleExclamation","EllipsisVertical","EllipsisV","HeartCircleExclamation","BuildingCircleExclamation","PersonArrowUpFromLine","NotEqual","TrainTram","PlaneDeparture",
"RightToBracket","SignInAlt","SdCard","HouseCircleExclamation","ShekelSign","Ils","Shekel","Sheqel","SheqelSign","Radio","HandDots","Allergies","BookSkull","BookDead","UnlockKeyhole","UnlockAlt","FileArrowUp",
"FileUpload","GrinTears","PenToSquare","Edit","EarthEurope","GlobeEurope","GrinBeamSweat","CircleHalfStroke","Adjust","PersonMilitaryToPerson","TableCellsColumnLock","TruckFieldUn","Clock","ClockFour","Book",
"LaughWink","CloudMeatball","ChartArea","AreaChart","RupiahSign","TextWidth","Satellite","MagnifyingGlassMinus","SearchMinus","PeopleGroup","SquareBinary","MasksTheater","TheaterMasks","CartPlus",
"HandsAslInterpreting","AmericanSignLanguageInterpreting","AslInterpreting","HandsAmericanSignLanguageInterpreting","TableCellsRowUnlock","Rocket","Shrimp","TengeSign","Tenge","HouseChimneyMedical","ClinicMedical",
"UsersSlash","PaperPlane","BookAtlas","Atlas","Table","Heart","CircleChevronUp","ChevronCircleUp","BatteryHalf","FontAwesome","FontAwesomeFlag","FontAwesomeLogoFull","Handcuffs","HatCowboySide","Industry",
"LinesLeaning","Passport","Infinity","Clone","Forward","M","RoadSpikes","Mountain","Chess","TemperatureThreeQuarters","ThermometerThreeQuarters","B","ShieldVirus","LitecoinSign","DiceD6","GripLinesVertical",
"GolfBallTee","GolfBall","Hexagon","FolderOpen","Kaaba","HandHolding","SingleQuoteRight","BottleDroplet","WindowMinimize","ChevronRight","Egg","LandmarkDome","LandmarkAlt","Worm","UserInjured","Strikethrough","Blog",
"TruckPickup","Seedling","Sprout","Transgender","TransgenderAlt","StarHalf","PhotoFilm","PhotoVideo","PumpMedical","Fire","MagnifyingGlassPlus","SearchPlus","Flask","AlignRight","CableCar","Tram","KitMedical",
"FirstAid","GripLines","Burger","Hamburger","Snowman","Hotel","Print","Volleyball","VolleyballBall","TrafficLight","PlaneCircleCheck","Users","Certificate","AlarmClock","HelicopterSymbol","HouseChimneyCrack",
"HouseDamage","PersonMilitaryPointing","Database","Newspaper","CloudRain","Maximize","ExpandArrowsAlt","LocationArrow","City","XRay","UmbrellaBeach","ArrowRightToBracket","SignIn","Headset","Splotch","UpLong",
"LongArrowAltUp","HexagonNodes","Hospital","HospitalAlt","HospitalWide","PersonHarassing","MoneyBillTrendUp","PenRuler","PencilRuler","Repeat","Bone","FireFlameCurved","FireAlt","BusSimple","BusAlt","VenusMars",
"Blender","U","Share","MailForward","PhoneFlip","PhoneAlt","ToiletPortable","PersonPregnant","LessThan","Superscript","CircleStop","StopCircle","ArrowsUpDown","ArrowsV","PooStorm","PooBolt","VideoSlash",
"SquareXmark","TimesSquare","XmarkSquare","HandHoldingDroplet","HandHoldingWater","WonSign","Krw","Won","ObjectUngroup","Comment","HillAvalanche","ArrowsToEye","Snowplow","ChartGantt","Video","VideoCamera",
"ChessPawn","Synagogue","BuildingCircleCheck","CalendarPlus","WheelchairMove","WheelchairAlt","UserShield","Bold","HeartPulse","Heartbeat","SquareRootVariable","SquareRootAlt","HandsBubbles","HandsWash","Marker",
"Clipboard","PlaceOfWorship","Cannabis","PeopleRoof","Disease","BookBible","Bible","ChessBoard","Mars","Laptop","UserXmark","UserTimes","FlagUsa","HandMiddleFinger","MortarPestle","HeadSideCough","PlaneLock",
"BatteryThreeQuarters","FrancSign","FilterCircleDollar","FunnelDollar","Cheese","CircleH","HospitalSymbol","School","DiceFive","Tornado","JetFighter","FighterJet","ThumbsDown","Broom","FileImport","ArrowRightToFile",
"Utensils","Cutlery","IdBadge","Spider","MobileRetro","SignsPost","MapSigns","GroupArrowsRotate","ArrowsSplitUpAndLeft","FillDrip","ShieldHeart","PersonSkiingNordic","SkiingNordic","SquareCheck","CheckSquare",
"Bath","Bathtub","ChessBishop","PrescriptionBottleMedical","PrescriptionBottleAlt","DrawPolygon","VectorPolygon","ICursor","HeartCirclePlus","ShieldDog","GreaterThanEqual","EnvelopeOpen","Mound","Voicemail",
"Vest","AudioDescription","W","EyeDropper","EyeDropperEmpty","Eyedropper","CircleXmark","TimesCircle","XmarkCircle","Trailer","TurkishLiraSign","Try","TurkishLira","Volcano","WandSparkles","Microphone","Crown",
"TentArrowTurnLeft","UserPen","UserEdit","UserClock","Shower","SquareCaretUp","CaretSquareUp","MapLocation","MapMarked","EuroSign","Eur","Euro","HouseCircleXmark","LiraSign","YenSign","Cny","Jpy","Rmb","Yen",
"BoxOpen","TruckField","LocationPinLock","PersonPraying","Pray","ClipboardList","SackDollar","MountainSun","ArrowUpWideShort","SortAmountUp","UsersLine","StarOfDavid","NotesMedical","AustralSign","ClipboardUser",
"FileImage","SquareCaretRight","CaretSquareRight","Vial","Helicopter","Mitten","GasPump","EnvelopeCircleCheck","PersonSkating","Skating","Sun","Baseball","BaseballBall","Image","Notdef","Basketball",
"BasketballBall","Pencil","PencilAlt","PersonWalkingArrowLoopLeft","DiceSix","AnglesDown","AngleDoubleDown","Syringe","WheatAwn","WheatAlt","PlaneUp","AlignCenter","HockeyPuck","CircleArrowLeft","ArrowCircleLeft",
"PlugCircleBolt","Restroom","AnchorLock","Timeline","Lightbulb","CircleArrowRight","ArrowCircleRight","MarsAndVenus","NetworkWired","BuildingShield","Code","FeatherPointed","FeatherAlt","FileCircleQuestion",
"Signature","EarthAmericas","Earth","EarthAmerica","GlobeAmericas","Carrot","TemperatureFull","ThermometerFull","TableCellsRowLock","BoltLightning","CloudShowersWater","ArrowUpLong","LongArrowUp","AddressCard",
"ContactCard","Vcard","AngleRight","Meh","ArrowUpFromGroundWater","Map","UserPlus","Venus","DiagramSuccessor","HeadSideCoughSlash","DiagramProject","ProjectDiagram","Terminal","HouseFire","Mask","Hurricane",
"EarthAfrica","GlobeAfrica","Thumbtack","ThumbTack","HandPointDown","MehBlank","TemperatureEmpty","ThermometerEmpty","BorderNone","Highlighter","MoneyBillWave","ToiletPaperSlash","FileShield","TextHeight",
"GrinTongue","FileSignature","BuildingWheat","PlugCircleMinus","Futbol","FutbolBall","SoccerBall","CirclePlus","PlusCircle","BrazilianRealSign","StarAndCrescent","Surprise","HospitalUser","ArrowDownUpLock",
"Folder","FolderBlank","HollyBerry","VenusDouble","ClipboardQuestion","Hotdog","ArrowUpFromBracket","Microscope","Cloud","BaseballBatBall","CarRear","CarAlt","ThumbtackSlash","ThumbTackSlash","PlusMinus",
"HouseCircleCheck","CalendarDay","Circle","MobileVibrate","GrinSquint","UsersBetweenLines","HouseMedicalCircleXmark","TableList","ThList","FlaskVial","CircleExclamation","ExclamationCircle","Taxi","Cab",
"TextSlash","RemoveFormat","PeoplePulling","Backward","CarBurst","CarCrash","Link","Chain","BackwardStep","StepBackward","X","CircleUser","UserCircle","RectangleList","ListAlt","Hand","HandPaper","VanShuttle",
"ShuttleVan","Stairs","HorseHead","Vault","DrumSteelpan","ThumbsUp","Stamp","Menorah","Children","ChartLine","LineChart","SquareEnvelope","EnvelopeSquare","BanSmoking","SmokingBan","TruckFront","Building","Bullseye",
"ArrowLeftLong","LongArrowLeft","ChessRook","BlenderPhone","ArrowTurnUp","LevelUp","Bicycle","CircleArrowDown","ArrowCircleDown","Gear","Cog","MarsAndVenusBurst","Otter","CircleChevronLeft","ChevronCircleLeft",
"CircleQuestion","QuestionCircle","WalkieTalkie","UserGroup","UserFriends","HouseChimney","HomeLg","RightFromBracket","SignOutAlt","File","PlaneSlash","CloudShowersHeavy","TurnDown","LevelDownAlt",
"UpRightAndDownLeftFromCenter","ExpandAlt","UserTag","HandSparkles","ArrowsToDot","SadCry","DongSign","PeopleLine","SquareRss","RssSquare","CalendarMinus","ChartDiagram","Tired","HandPointRight","ArrowUp",
"CubesStacked","ChildCombatant","ChildRifle","VestPatches","MartiniGlassEmpty","GlassMartini","Magnet","RoadBarrier","CompassDrafting","DraftingCompass","SquarePersonConfined","PlateWheat","SignHanging","Sign",
"CarBattery","BatteryCar","Shirt","TShirt","Tshirt","Paragraph","EnvelopesBulk","MailBulk","Guitar","Suitcase","CircleUp","ArrowAltCircleUp","F","XmarksLines","EarthOceania","GlobeOceania","CommentSlash","Play",
"VialCircleCheck","BridgeCircleCheck","CediSign","PuzzlePiece","HelmetUn","GlassWater","HeartCircleBolt","PumpSoap","HandScissors","Dolly","DollyBox","Paperclip","Democrat","SquareArrowUpRight","ExternalLinkSquare",
"Ferry","Mosquito","BuildingCircleArrowRight","LeftRight","ArrowsAltH","Virus","Gem","Toilet","SingleQuoteLeft","MoneyBills","TabletButton","RectangleXmark","RectangleTimes","TimesRectangle","WindowClose","Wrench",
"TrashCan","TrashAlt","TableCells","Th","Ribbon","LandmarkFlag","UpDownLeftRight","ArrowsAlt","CarSide","TrashArrowUp","TrashRestore","LifeRing","Copyright","FilePrescription","Eraser","HourglassStart","CircleLeft",
"ArrowAltCircleLeft","CruzeiroSign","Smoking","SquarePollVertical","Poll","PersonCircleMinus","Biohazard","BellConcierge","ConciergeBell","RulerHorizontal","Horse","Calendar","HandsHoldingChild","Italic","Khanda",
"FrownOpen","Check","Fingerprint","ChargingStation","UserLock","MobileScreenButton","MobileAlt","AnchorCircleCheck","PersonWalkingWithCane","Blind","FileWaveform","FileMedicalAlt","HouseCrack","HatWizard",
"UserDoctor","UserMd","ChartBar","BarChart","SprayCanSparkles","AirFreshener","BahtSign","TemperatureArrowUp","TemperatureUp","WebAwesome","NonBinary","N","ArrowsUpDownLeftRight","Arrows","House","Home","HomeAlt",
"HomeLgAlt","Spinner","Gavel","Legal","TicketSimple","TicketAlt","Dove","TarpDroplet","TreeCity","TurnUp","LevelUpAlt","TemperatureQuarter","ThermometerQuarter","Sliders","SlidersH","Mosque","H","Info",
"PersonWalking","Walking","ArrowTurnDown","LevelDown","Road","Spiral","Frown","WineGlassEmpty","WineGlassAlt","Clapperboard","ForwardStep","StepForward","SquareUpRight","ExternalLinkSquareAlt","BookJournalWhills",
"JournalWhills","ChampagneGlasses","GlassCheers","Dumpster","HeartCircleXmark","Computer","WandMagic","Magic","Brain","BriefcaseMedical","HouseMedicalCircleExclamation","CodeCommit","PersonBreastfeeding","PersonRays",
"ManatSign","Sort","Unsorted","CircleRadiation","RadiationAlt","LaptopCode","Sink","ArrowUpFromWaterPump","MicrophoneLinesSlash","MicrophoneAltSlash","Server","User","UserAlt","UserLarge","Snowflake",
"SkullCrossbones","PesoSign","WineGlass","TemperatureHalf","ThermometerHalf","Ticket","WheatAwnCircleExclamation","ArrowsTurnRight","CandyCane","Wheelchair","SpellCheck","VolumeOff","Lungs","Bookmark","Barcode",
"ListOl","ListNumeric","FileCircleXmark","Cube","Tape","Bomb","ScaleUnbalanced","BalanceScaleLeft","SquareCaretLeft","CaretSquareLeft","Ruler","I","VolumeXmark","VolumeMute","VolumeTimes","Archway","PersonDigging",
"Digging","GaugeHigh","TachometerAlt","Genderless","CloudSun","ArrowRight","Handshake","HandshakeAlt","HandshakeSimple","PersonSkiing","Skiing","BridgeWater","BuildingNgo","Igloo","CircleDollarToSlot","Donate","Y",
"SmileWink","DiceFour","GrinSquintTears","FileAudio","ArrowsDownToLine","G","Vihara","FlagCheckered","GaugeSimple","GaugeSimpleMed","TachometerAverage","RightLeft","ExchangeAlt","Pills","Explosion",
"ArrowsDownToPeople","UsersViewfinder","CarOn","Sleigh","Dumbbell","BabyCarriage","CarriageBaby","KiwiBird","CalendarXmark","CalendarTimes","CircleDown","ArrowAltCircleDown","FileMedical","Xmark","Close","Multiply",
"Remove","Times","Shapes","TriangleCircleSquare","DiceOne","LockOpen","PepperHot","DropletSlash","TintSlash","Droplet","Tint","FileLines","FileAlt","FileText","CommentsDollar","MagnifyingGlassLocation",
"SearchLocation","FileInvoice","Pentagon","Republican","Shop","StoreAlt","Film","FilmAlt","FilmSimple","BuildingCircleXmark","Comments","Tags","Gun","CircleCheck","CheckCircle","IdCardClip","IdCardAlt","Moon",
"OilWell","TachographDigital","DigitalTachograph","Tablet","TabletAndroid","RubleSign","Rouble","Rub","Ruble","ClosedCaptioning","Pen","Plane","Images","MobileScreen","MobileAndroidAlt","GuaraniSign","BagShopping",
"ShoppingBag","CircleRight","ArrowAltCircleRight","PhoneVolume","VolumeControlPhone","Cubes","Phone","ToriiGate","Bacon","QuoteRight","QuoteRightAlt","HouseMedicalFlag","Prescription","DiceThree","BuildingLock",
"IdCard","DriversLicense","CirclePlay","PlayCircle","LaughBeam","Leaf","HouseChimneyUser","RotateRight","RedoAlt","RotateForward","Tooth","HouseChimneyWindow","Motorcycle","AddressBook","ContactBook","Sailboat",
"BookBookmark","MagnifyingGlassArrowRight","MicrophoneLines","MicrophoneAlt","ReplyAll","MailReplyAll","UniversalAccess","ToiletPaper","ToiletPaperAlt","ToiletPaperBlank","VrCardboard","PizzaSlice","SprayCan",
"VolumeLow","VolumeDown","Cross","Person","Male","Hourglass","HourglassEmpty","Fish","DrumstickBite","ChartSimple","Atom","P","JetFighterUp","PlugCircleXmark","SheetPlastic","V","List","ListSquares","SolarPanel",
"LandMineOn","Headphones","HeadphonesAlt","HeadphonesSimple","Bus","FilePowerpoint","QuoteLeft","QuoteLeftAlt","ChevronDown","EarthAsia","GlobeAsia","CentSign","ShieldCat","SchoolCircleCheck","MartiniGlass",
"GlassMartiniAlt","Plug","Panorama","ClockRotateLeft","History","JarWheat","CloudArrowDown","CloudDownload","CloudDownloadAlt","TruckRampBox","TruckLoading","AngleDown","PlugCircleCheck","WindowMaximize",
"HandsHoldingCircle","LocationPin","MapMarker","BowlingBall","CartFlatbed","DollyFlatbed","HouseUser","HomeUser","Ghost","CommentNodes","PersonArrowDownToLine","PlugCirclePlus","PersonSwimming","Swimmer",
"CommentDots","Commenting","ChartPie","PieChart","Frog","WineBottle","Inbox","SquareH","HSquare","HouseMedical","CircleChevronRight","ChevronCircleRight","FileCsv","HatCowboy","GrinTongueWink","L",
"ArrowDownShortWide","SortAmountDesc","SortAmountDownAlt","HourglassHalf","Spoon","UtensilSpoon","CreditCard","CreditCardAlt","FileInvoiceDollar","SpaghettiMonsterFlying","MartiniGlassCitrus","Cocktail","Bullhorn",
"BoxTissue","MattressPillow","ChevronLeft","CloudMoonRain","SortNumericAsc","SortNumericDown","HandSpock","WandMagicSparkles","MagicWandSparkles","CommentMedical","BellSlash","HandshakeSlash","HandshakeAltSlash",
"HandshakeSimpleSlash","BottleWater","DiceD20","ArrowDownZA","SortAlphaDesc","SortAlphaDownAlt","Brush","PersonWalkingDashedLineArrowRight","ArrowUpShortWide","SortAmountUpAlt","GripVertical","GridVertical",
"CarTunnel","ChartColumn","TruckArrowRight","Tv","Television","TvAlt","Section","Peace","Star","Flag","TriangleExclamation","ExclamationTriangle","Warning","SchoolCircleExclamation","GraduationCap","MortarBoard",
"Store","UserAstronaut","BuildingFlag","MugSaucer","Coffee","Lemon","Caravan","Q","Lock","PaintRoller","VolumeHigh","VolumeUp","FolderPlus","Mercury","Anchor","SquareParking","Parking","Hanukiah","RotateLeft",
"RotateBack","RotateBackward","UndoAlt","Heading","Header","Crosshairs","CircleNodes","WindowRestore","R","FilterCircleXmark","Gopuram","HeartCircleMinus","StarOfLife","BusinessTime","BriefcaseClock",
"FireExtinguisher","ArrowDownLong","LongArrowDown","UserMinus","MoneyCheck","HouseLaptop","LaptopHouse","Download","Couch","RoadLock","Scissors","Cut","Bug","ArrowRightFromBracket","SignOut","HandHoldingHand",
"Stroopwafel","Child","IceCream","ComputerMouse","Mouse","Award","PersonDrowning","CameraRotate","GrinHearts","FileFragment","PersonMilitaryRifle","ToggleOn","LungsVirus","TableTennisPaddleBall","PingPongPaddleBall",
"TableTennis","BoxesPacking","PersonChalkboard","DiceTwo","ArrowRightArrowLeft","Exchange","Football","FootballBall","TruckMonster","Asterisk","BatteryFull","Battery","ChildDress","KissBeam","TrashCanArrowUp",
"TrashRestoreAlt","Font","BoreHole","VirusCovid","FilePdf","Language","ShieldHalved","ShieldAlt","CaretUp","FilePen","FileEdit","PersonBiking","Biking","BookOpenReader","BookReader","GlassWaterDroplet",
"TowerBroadcast","BroadcastTower","Minimize","CompressArrowsAlt","ArrowRightToCity","LaptopMedical","BreadSlice","Globe","FolderMinus","Bong","RoadBridge","SortNumericUpAlt","MountainCity","SortNumericDesc",
"SortNumericDownAlt","GrinAlt","Poop","Dharmachakra","BatteryQuarter","Ankh","Diamond","Subscript","RupeeSign","Rupee","PersonRifle","D","SquareNfi","Teeth","MagnifyingGlassDollar","SearchDollar","DumpsterFire",
"Upload","UserSlash","UserAltSlash","UserLargeSlash","ArrowLeft","VialVirus","CheckDouble","Paw","HelmetSafety","HardHat","HatHard","E","LaughSquint","DownLeftAndUpRightToCenter","CompressAlt","Gifts","Bed",
"MoneyBillTransfer","PersonRunning","Running","CircleChevronDown","ChevronCircleDown","UserNurse","KissWinkHeart","Fill","MoneyBillWaveAlt","Landmark","Music","BookMedical","Shuffle","Random","Underline",
"BuildingUser","Robot","Plus","Add","Copy","ChessKing","HouseFloodWater","BitcoinSign","Box","SquarePlus","PlusSquare","ArrowsLeftRight","ArrowsH","n","Crow","FileCircleCheck","LinkSlash","ChainBroken","ChainSlash",
"Unlink","ArrowRotateRight","ArrowRightRotate","ArrowRotateForward","Redo","PenClip","PenAlt","DoorClosed","ArrowDownWideShort","SortAmountAsc","SortAmountDown","CaretDown","K","CheckToSlot","VoteYea","FishFins",
"Compress","ArrowUpAZ","SortAlphaUp","UserGraduate","FileCode","Soap","Recycle","GrinWink","WaterLadder","LadderWater","SwimmingPool","TowerCell","ColonSign","LaptopFile","Bahai","Haykal","MoneyBillAlt","CloudBolt",
"Thunderstorm","Ethernet","HryvniaSign","Hryvnia","EyeSlash","CartFlatbedSuitcase","LuggageCart","Radiation","FileWord","BedPulse","Procedures","Tents","MugHot","Bolt","Zap","Jar","TruckPlane","HandHoldingHeart",
"ArrowRotateLeft","ArrowLeftRotate","ArrowRotateBack","ArrowRotateBackward","Undo","Angry","Burst","Z","Bandage","BandAid","PlaneCircleExclamation","BusSide","Bugs","BeerMugEmpty","Beer","PersonCircleCheck",
"Stapler","HouseMedicalCircleCheck","NairaSign","Wifi","WifiStrong","MoneyCheckDollar","MoneyCheckAlt","EyeLowVision","LowVision","CircleArrowUp","ArrowCircleUp","CameraRetro","Capsules","Poo","Elevator","Tag",
"FileCircleMinus","DownLong","LongArrowAltDown","CompactDisc","SuitcaseRolling","BookQuran","Quran","PhoneSlash","RoadCircleCheck","ShopLock","ImagePortrait","Portrait","BridgeLock","Hammer","SortNumericUp",
"ChessKnight","HouseFloodWaterCircleArrowRight","ArrowUpRightFromSquare","ExternalLink","ArrowDownUpAcrossLine","GrinBeam","RectangleAd","Ad","BookTanakh","Tanakh","HotTubPerson","HotTub","FileHalfDashed","Outdent",
"Dedent","HandPeace","HeadSideVirus","Compass","PenNib","TentArrowsDown","Crop","WhiskeyGlass","GlassWhiskey","Square","Grin","FileContract","AngleUp","Smile","PersonDressBurst","Divide","CodeFork","HouseFlag",
"BuildingColumns","Bank","Institution","Museum","University","Rug","CodeMerge","HouseTsunami","MagnifyingGlassChart","Umbrella","HillRockslide","UserSecret","Pager","Briefcase","TrowelBricks","Socks","T",
"Microchip","TruckMedical","Ambulance","Om","MosquitoNet","PrescriptionBottle","UsersGear","UsersCog","RoadCircleExclamation","Pause","StaffSnake","RodAsclepius","RodSnake","PiggyBank","Monument","AnglesRight",
"AngleDoubleRight","Desktop","DesktopAlt","PlaneCircleXmark","Retweet","UserGear","UserCog","BorderAll","Coins","MarsStroke","HandshakeAngle","HandsHelping","ArrowDown","LocationDot","MapMarkerAlt",
"PlugCircleExclamation","CookieBite","ScrewdriverWrench","Tools","Indent","Bars","Navicon","HandsPraying","PrayingHands","Viruses","SchoolFlag","Trademark","FireBurner","SmileBeam","TentArrowLeftRight","Route",
"AnglesUp","AngleDoubleUp","Bucket","LessThanEqual","FolderClosed","PersonThroughWindow","SchoolLock","PersonBurst","LeftLong","LongArrowAltLeft","LocationCrosshairs","Location","PersonDotsFromLine","Diagnoses",
"GaugeSimpleHigh","Tachometer","AnglesLeft","AngleDoubleLeft","UpDown","ArrowsAltV","BatteryEmpty","Keyboard","Cookie","Stopwatch","Eject","SatelliteDish","MehRollingEyes","ListCheck","Tasks","SackXmark","Hashtag",
"Train","Gamepad","FileExport","ArrowRightFromFile","Grimace","TrainSubway","Subway","CircleDot","DotCircle","ObjectGroup","Ship","C","SquarePhone","PhoneSquare","RulerCombined","ArrowsRotate","Refresh","Sync",
"PersonDress","Female","BookOpen","FolderTree","BoxArchive","Archive","TentArrowDownToLine","Qrcode","Dragon","HourglassEnd","Grip","GridHorizontal","GripHorizontal","BorderTopLeft","BorderStyle","ListUl","ListDots",
"PeopleRobbery","MobileButton","ArrowDownAZ","SortAlphaAsc","SortAlphaDown","MoneyBill","CircleMinus","MinusCircle","ArrowPointer","MousePointer","SquareShareNodes","ShareAltSquare","TableCellsLarge","ThLarge","Cat",
"CalendarWeek","CodeCompare","RoadCircleXmark","Pallet","CakeCandles","BirthdayCake","Cake","BugSlash","Tarp","DiagramPredecessor","Flushed","DiagramNext","AnchorCircleXmark","PersonCircleXmark","Spa","BarsProgress",
"TasksAlt","HeartCircleCheck","MarsStrokeRight","MarsStrokeH","TowerObservation","SterlingSign","Gbp","PoundSign","CircleInfo","InfoCircle","Feather","BowlRice","StarHalfStroke","TemperatureArrowDown",
"TemperatureDown","MaskVentilator","FileVideo","ArrowTrendDown","OilCan","PeopleCarryBox","PeopleCarry","Chair","Wind","LayerGroup","HeadSideMask","Hands","SignLanguage","Signing","Tablets","WeightHanging","Dice",
"ShopSlash","StoreAltSlash","SortDown","SortDesc","PesetaSign","TabletScreenButton","TabletAlt","HandHoldingDollar","HandHoldingUsd","Shield","ShieldBlank","Laugh","HandsHolding","CartShopping","ShoppingCart",
"Octagon","HandPointer","Registered","HouseSignal","BangladeshiTakaSign"].map(it=>{
// console.log()
  return toKebabCase(it)
}))
</script>

<style lang="">

</style>
