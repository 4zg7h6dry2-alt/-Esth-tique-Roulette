const A=[
["Dark Academia","Candlelit libraries where rain taps the window and every sentence feels important.",[["#2b1d14","Inkwell Brown"],["#5a3e2b","Library Leather"],["#8c7a5b","Foxed Paper"],["#c9b78f","Taper Wax"]],["Brass fountain pen","Leather commonplace book","Half-melted taper candle"]],
["Cottagecore","Slow Sunday mornings in a garden where the bread is always rising.",[["#f2e8d5","Flour Dust"],["#a9b88a","Sage Clipping"],["#d98e84","Rosehip Blush"],["#7a5c3e","Wicker Basket"]],["Linen apron","Enamel jug of wildflowers","Wooden rolling pin"]],
["Y2K Chrome","A mall at midnight in 2001, glossy with the future.",[["#c6d4e1","Liquid Chrome"],["#ff7ac8","Bubblegum Gloss"],["#5ee0ff","Aqua Ping"],["#3b3f8c","Flip Phone Indigo"]],["Translucent flip phone","Butterfly hair clips","Inflatable armchair"]],
["Vaporwave","Sunsets over dead malls, humming a slowed-down jingle.",[["#ff71ce","Fountain Pink"],["#01cdfe","Dial-Up Cyan"],["#b967ff","Sunset Grape"],["#05ffa1","Terminal Mint"]],["Marble bust","Beige CRT monitor","Potted palm"]],
["Brutalist Concrete","Raw poured walls, hard light, and a silence the size of a stairwell.",[["#8d8d89","Poured Slab"],["#4a4a48","Shadow Stair"],["#c9c6bd","Bleached Aggregate"],["#b5532f","Rust Bolt"]],["Cast-concrete stool","Rebar sculpture","Single bare bulb"]],
["Mid-Century Modern","Teak, tangerine, and a hi-fi spinning in a sunlit den.",[["#d9822b","Tangerine Dream"],["#6b4226","Walnut Credenza"],["#2f6f6a","Peacock Tile"],["#f0e4c8","Oatmeal Wool"]],["Tapered-leg sideboard","Starburst wall clock","Ceramic bud vase"]],
["Goblincore","Damp moss, lost buttons, and treasure found in the mud.",[["#4f5d2f","Moss Pelt"],["#7b5e3b","Mud Pocket"],["#c2b280","Lichen Gold"],["#2e3a2a","Deep Burrow"]],["Jar of acorns","Mushroom field guide","Chipped teacup of pebbles"]],
["Art Deco","Gilded geometry and champagne under a sunburst ceiling.",[["#123c3a","Speakeasy Emerald"],["#d4af37","Gilt Edge"],["#f3ead3","Pearl Ivory"],["#1a1a1a","Lacquer Black"]],["Ebony cigarette case","Fan-shaped sconce","Champagne coupe"]],
["Coastal Grandmother","Linen shirts, hydrangeas, and a quiet lunch by the harbor.",[["#f4efe6","Sea Salt"],["#9db4c0","Harbor Fog"],["#c9b79c","Driftwood"],["#5d7b8a","Tide Pool"]],["Striped linen cushion","Wicker basket","Hydrangeas in a milk pitcher"]],
["Cyberpunk Neon","Rain-slick alleys humming with noodle steam and hacked signage.",[["#0b0f1a","Blackout"],["#ff2e63","Neon Vein"],["#08f7fe","Static Cyan"],["#f9c80e","Sodium Warning"]],["Noodle-stall stool","Holographic koi sign","Jury-rigged cyberdeck"]],
["Wabi-Sabi","Beauty in the cracked, the worn, and the beautifully unfinished.",[["#e8e0d0","Rice Paper"],["#b8a58a","Aged Clay"],["#6e675d","River Stone"],["#3d3a35","Charred Cedar"]],["Kintsugi bowl","Bare branch in a vase","Hand-thrown tea cup"]],
["Victorian Gothic","Fog, lace, and candlelit grief in a house with too many staircases.",[["#1c1420","Mourning Velvet"],["#5b2a3c","Dried Claret"],["#b9aebf","Funeral Lace"],["#cfc6a8","Bone Cameo"]],["Jet brooch","Empty birdcage","Wax-sealed letter"]],
["Frutiger Aero","Glossy bubbles, blue skies, and early-2000s optimism in high definition.",[["#3aa5e8","Aero Sky"],["#7ed957","Fresh Lawn"],["#e6f6ff","Glass Droplet"],["#1c6ea4","Deep Water"]],["Translucent water bottle","Aqua-tinted MP3 player","Fern in a glass globe"]],
["90s Grunge","Thrifted flannel, a cracked amp, and a garage that smells of coffee.",[["#2f3a33","Alley Pine"],["#7a2e2e","Plaid Red"],["#a89f8c","Thrift Beige"],["#1b1b1b","Amp Black"]],["Beat-up electric guitar","Flannel tied at the waist","Cassette mixtape"]],
["Mermaidcore","Pearlescent tides and sea-glass light in a sunken cathedral.",[["#bfe6e0","Sea Glass"],["#7fb8c9","Lagoon Whisper"],["#e8d5f0","Pearl Lilac"],["#3c7d8a","Kelp Shadow"]],["Abalone shell","Strand of pearls","Scalloped mirror"]],
["Desert Western","Dusty horizons, sun-bleached bones, and a porch facing forever.",[["#d8a46a","Sunbaked Sand"],["#a4502f","Adobe Red"],["#5b6b4e","Sagebrush"],["#2d2a26","Campfire Coal"]],["Woven wool blanket","Dented tin canteen","Scuffed cowhide boot"]],
["Kidcore","Sticker-covered everything, juice-box colors, and a living-room fort.",[["#ff4757","Crayon Red"],["#ffd32a","Fruit Snack Yellow"],["#1e90ff","Ball-Pit Blue"],["#2ed573","Slime Green"]],["Bead bracelet","Sticker-covered binder","Plastic dinosaur"]],
["Scandi Hygge","Wool socks, pale wood, and a candle as the only plan for the evening.",[["#f5f1ea","Birch Milk"],["#cfc5b5","Oat Latte"],["#8b9aa5","Winter Window"],["#6d4c3d","Cocoa Mug"]],["Chunky knit blanket","Pillar candle","Speckled ceramic mug"]],
["Space Age Retro","1960s moon-race optimism in white plastic and orbit orange.",[["#f2f2f0","Capsule White"],["#ff6a13","Orbit Orange"],["#2c3e6b","Mission Navy"],["#9fb3c8","Satellite Silver"]],["Bubble chair","Transistor radio","Tin toy rocket"]],
["Forest Witchcore","Herb-scented hearths, moonlit rituals, and a kitchen full of jars.",[["#2f3f2c","Hedge Green"],["#6b4a6b","Nightshade Plum"],["#c9a66b","Beeswax"],["#e4dccb","Moon Chalk"]],["Bundle of dried herbs","Stone mortar and pestle","Pewter candlestick"]]
];

const h=(n,d,w,v,y,hx,nm,pr)=>{const H=hx.split(' '),N=nm.split('|');return [n,d,H.map((x,i)=>['#'+x,N[i]]),pr.split('|'),{w:w,v:v,d:y}]};
const H=[
h("Spider-Man","Spandex, web-lines, and a friendly neighborhood skyline.","Marvel","Classic",1962,"D71920 1560BD 171717 FFFFFF","Spandex Red|Skyline Blue|Web-Line Black|Mask-Eye White","Wrist web-shooters|Press-pass camera|Patched mask"),
h("Moon Knight","A pale hooded figure moving through the night like a moonbeam.","Marvel","Classic",1975,"F4F1E8 B9C1CB 333B49 10131B","Moonlit Linen|Crescent Silver|Midnight Cowl|Cairo Midnight","Crescent darts|Bird-skull of Khonshu|Tattered white cape"),
h("Scarlet Witch","Crimson spellwork and a crown that hums with chaos.","Marvel","Classic",1964,"A71930 64152E 171326 D9A0A9","Chaos Red|Dried Rose|Hex Night|Petal Blush","Winged headdress|Worn spellbook|Red cape clasp"),
h("Raven","Cloaked in twilight violet, calm on the surface and storming within.","DC","Classic",1980,"332052 171322 7770A6 C5C1D5","Azarathian Violet|Cloak Shadow|Soul-Self Lavender|Moonmist","Hooded cloak|Chakra gem|Tattered spellbook"),
h("Black Panther","Stealth black with a quiet shimmer of vibranium.","Marvel","Classic",1966,"090909 29243A 7560A8 C7B6A0","Vibranium Black|Wakandan Night|Heart-Herb Violet|Savanna Dust","Vibranium claws|Kimoyo beads|Heart-shaped herb"),
h("Zatanna","Stage-door glamour with a spell hidden in every sleeve.","DC","Classic",1964,"111111 FFFFFF 263C70 B9A0C9","Stage Tuxedo|Starched Cuff|Velvet Curtain|Smoke Lilac","Silk top hat|Black wand|Marked card deck"),
h("Venom","Ink-black menace with a flash of white teeth.","Marvel","Classic (Eddie Brock)",1988,"050505 242424 F4F4F4 7C183A","Symbiote Ink|Wet Tar|Fang White|Tongue Crimson","Press camera|Bell-tower rope|Jar of black goo"),
h("Storm","Black and white lines against a sky about to break.","Marvel","Classic",1975,"111111 F4F4F4 A8AEBB D5C7A2","Thunderhead Black|Lightning White|Rain Silver|Savanna Sand","Silver tiara|Floor-length cape|Rooftop garden pot"),
h("Doctor Strange","Sanctum blue, a crimson cloak, and a touch of golden magic.","Marvel","Classic",1963,"B52A31 1C315B E3B64F 29202C","Levitation Red|Sanctum Blue|Agamotto Gold|Grimoire Dusk","Eye of Agamotto amulet|Cloak of Levitation|Sling Ring"),
h("Nightcrawler","Midnight blue, circus red, and a smoky teleport trail.","Marvel","Classic X-Men",1975,"244A9A 171B2A D83D38 E5C8A8","X-Uniform Blue|Teleport Smoke|Circus Red|Candle Cream","Rosary beads|Trapeze bar|Fencing sabre"),
h("Hela","Forest-dark armor and a crown of antlers over a throne of shadow.","Marvel","Classic",1964,"101D18 315B43 C2A45B 090909","Helheim Pine|Death-Goddess Green|Antler Gold|Void Black","Antlered crown|Necrosword|Mist-weave cloak"),
h("Wolverine","Rugged browns and tans with a spark of yellow.","Marvel","Brown & Tan",1974,"A66C3B D8B77A 28231F E6C849","Brown-Suit Leather|Tan Panel|Soot|Claw-Fight Yellow","Adamantium claws|Cigar stub|Scuffed biker jacket"),
h("Black Canary","Smoky bar light, leather, and a flash of canary yellow.","DC","Classic",1947,"111111 F2D44D E8E2D6 6B4A37","Leather Jacket|Canary Yellow|Bar-Light Cream|Whiskey Brown","Fishnet tights|Motorcycle jacket|Vintage microphone"),
h("Silver Surfer","Liquid chrome gliding through a cold, starlit void.","Marvel","Classic",1966,"D9DDE3 8997A8 263C5B F5F5F5","Cosmic Chrome|Starlit Steel|Void Blue|Power-Cosmic White","Silver surfboard|Polished chrome sphere|Folded star map"),
h("She-Hulk","Jade strength dressed for court in purple and cream.","Marvel","Classic",1980,"5B9B58 6E3D91 F2E9D9 202020","Jade Skin|Courtroom Purple|Legal-Pad Cream|Briefcase Black","Leather briefcase|Gavel|Yellow legal pad"),
h("Ghost Rider","Black leather, bone white, and a skull wrapped in flame.","Marvel","Classic",1972,"111111 F5E7D0 E66A21 A82219","Leather Black|Bone Skull|Hellfire Orange|Ember Red","Spiked chain|Chopper motorcycle|Flaming skull helmet"),
h("Supergirl","A Kansas-sky blue suit with a bright red cape.","DC","Classic",1959,"1766B2 D92B35 F1C94C FFFFFF","Krypton Blue|Cape Red|Sun-Lamp Yellow|Kansas Cloud","Red cape|Gold belt buckle|Kryptonite shard"),
h("Man-Thing","Murky swamp greens where something old is watching.","Marvel","Classic",1971,"233D2B 536C3C 8C7954 171D16","Everglades Murk|Bog Moss|Rotted Cypress|Swamp Night","Tangle of vines|Glowing mushroom|Rusted swamp lantern"),
h("Iron Fist","Jade and gold, calm as a temple at dawn.","Marvel","Classic",1974,"267447 B9A54D E6D6B8 202020","Jade Dragon|Dragon-Scale Gold|Temple Rice Paper|Ink Brush","Dragon sash|Jade scroll|Wooden training dummy"),
h("Loki","Mischief in emerald and gold, with a trick up the sleeve.","Marvel","Classic",1962,"28523A C6A34A 171717 D9D0B7","Mischief Green|Horned-Helm Gold|Trickster Black|Aged Parchment","Gold horned helm|Emerald cape clasp|Trick dagger"),
h("Thor","Storm-lit gold and steel, with a thunderclap waiting under the cape.","Marvel","Classic",1962,"D6B34A 41618A 8D292D C7C4BC","Asgardian Gold|Storm Steel|Cape Crimson|Mjolnir Silver","Mjolnir|Winged helm|Red cape clasp"),
h("Superman","Bright primary colors and a Kansas-sky promise to catch you.","DC","Classic",1938,"1768A8 C62832 F1C94B 111827","Metropolis Blue|Cape Red|Sun-Crest Gold|Fortress Night","Daily Planet press badge|Fortress crystal|Kent-farm glasses"),
h("Captain Marvel","Starlit navy and flight-line red, burning gold at the horizon.","Marvel","Classic (Carol Danvers)",1968,"173B70 B52A35 E5B83F D8DCE5","Starforce Navy|Flight Red|Photon Gold|Cloud Silver","Gold star emblem|Pilot’s flight jacket|Vintage aviator goggles"),
h("Power Girl","Clean white, bold red, and a confident glow.","DC","Classic",1976,"F0EEE8 C72B35 1764A5 D7B34B","Arctic White|Heroine Red|Earth-Two Blue|Emblem Gold","Keyhole-cutout emblem|Flowing red cape|Starr Labs ID badge"),
h("Emma Frost","Cool diamond whites and a smile as sharp as glass.","Marvel","Classic",1980,"F5F1EA D4D9E1 A7AFC0 24212B","Diamond White|Frost Glass|Hellfire Silver|Ice Shadow","White cape|Diamond shard|Hellfire Club invitation"),
h("Black Bolt","Midnight and silver, with a silence that carries more than a shout.","Marvel","Classic",1965,"111111 D2D5DC 473B69 A8A8B0","Silence Black|Tuning-Fork Silver|Inhuman Violet|Quiet Steel","Tuning-fork antenna|Silver mask|Royal Inhuman crest"),
h("Aquaman","Marigold armor against a cold, glittering deep.","DC","Classic",1941,"E87525 24744F D8B34D 172C36","Marigold Scale|Trench Green|Tide Gold|Abyss Navy","Golden trident|Scale-armor gauntlet|Conch shell"),
h("Quicksilver","Blue streaks and silver blurs, always a moment ahead.","Marvel","Classic",1964,"4D83B8 C5CED8 E9EDF1 26344C","Speed-Line Blue|Mercury Silver|Frost Streak|Dusk Run","Lightning-bolt emblem|Worn sneakers|Silver stopwatch"),
h("Star-Lord","Oxblood leather, space-bar neon, and a mixtape on repeat.","Marvel","Classic",1976,"852F35 4A5263 B88A53 242329","Oxblood Leather|Blaster Steel|Dusty Brass|Space-Bar Black","Twin element guns|Cassette player with mixtape|Visored mask"),
h("Hawkeye","Plum purple and quiet focus, one arrow from the target.","Marvel","Classic (Clint Barton)",1964,"563B83 171717 A8A8B1 D5C7A8","Archer Purple|Quiver Black|Arrowhead Steel|Bowstring Tan","Recurve bow|Trick-arrow quiver|Fingerless archery glove"),
h("Booster Gold","Future-bright blue and gold, with a sponsor on every sleeve.","DC","Classic",1986,"1768B0 DDBB45 E7E9ED 17212C","Future Blue|Trophy Gold|Sponsor White|Time-Vault Navy","Gold visor|Hovering robot sidekick|Endorsement trophy"),
h("Northstar","Arctic blue and snow white, sprinting across a windswept sky.","Marvel","Classic",1979,"1E4FA0 F2F4F8 8FB4E3 1B2236","Alpha Flight Blue|Snow-Flight White|Aurora Sky|Polar Night","Star chest emblem|Windswept scarf|Maple-leaf pin"),
h("Sentry","A golden sun over a deep-blue horizon, calm before the light gets too bright.","Marvel","Classic",2000,"E6B943 1B2A4A 1763A6 E8E4DC","Golden Sun|Void Navy|Hero Blue|Cloud White","Sunburst chest emblem|Serum vial|Gold domino mask"),
h("Namor","Sea-green depths, golden trinkets, and a prince’s temper.","Marvel","Classic",1939,"235C48 D5B24D E6C6A2 17252A","Atlantean Green|Gilded Trinket|Seashell Sand|Deep Current","Winged ankle bands|Gold royal armlets|Coral crown"),
h("The Flash","Scarlet streaks and lightning gold, humming just before the blur.","DC","Classic (Barry Allen)",1956,"C92332 F0C23D 751E2B E9E5DD","Scarlet Streak|Lightning Gold|Friction Burn|Speed-Lab White","Winged cowl|Lightning-bolt emblem|Flash ring"),
h("Iceman","Glass-clear blues and fresh snow, frozen mid-breath.","Marvel","Classic",1963,"C9E8F2 82BBD5 EAF7FA 668DAA","Glacier Glass|Frostbite|Snowdrift|Polar Shade","Ice sculpture|Frost-covered window|Chilled ice skates"),
h("Green Arrow","Sherwood greens, brass buckles, and a hood pulled low.","DC","Classic",1941,"286443 78934C D4B34B 252A25","Sherwood Green|Leaf Lining|Brass Buckle|Hood Shadow","Longbow|Boxing-glove arrow|Feathered cap"),
h("Adam Warlock","Cosmic crimson and gold, wrapped in a cocoon of starlight.","Marvel","Classic",1967,"B52C32 D5AD4B E6C5A1 29213A","Cosmic Crimson|Soul Gem Gold|Cocoon Linen|Starless Violet","Soul Gem|Broken cocoon shell|Gold-trimmed cape"),
h("Blue Beetle","Beetle blue, night-shift black, and gadgets humming in the dark.","DC","Classic (Ted Kord)",1966,"1767A5 17202D D8DCE2 B7A5D4","Beetle Blue|Night-Owl Black|Scarab Silver|Lilac Lens","Flight goggles|Model of the Bug airship|Gadget belt"),
h("Hercules","Olympian gold, lion-pelt browns, and the swagger of a demigod.","Marvel","Classic",1965,"A72B31 D8AD43 E7C4A0 5A3529","Nemean Crimson|Olympian Gold|Marble Sand|Lion-Pelt Brown","Lion-pelt cape|Wooden club|Laurel wreath"),
h("Batman","Slate, steel, and fog, with a Gotham skyline watching from a rooftop.","DC","Classic",1939,"101116 343B46 858B96 C7C9D0","Gotham Slate|Cowl Charcoal|Batarang Steel|Rooftop Fog","Batarang|Utility belt|Bat-Signal lamp"),
h("Daredevil","Rooftop reds and ash rose, a city seen through sound and touch.","Marvel","Classic",1964,"8D1728 4A101C 171719 B7A0A0","Hell’s Kitchen Red|Devil’s Maroon|Rooftop Black|Ash Rose","Billy club|Red-lens glasses|Braille-printed note"),
h("Blade","Night leather and a silver edge, hunting in the hour before dawn.","Marvel","Classic",1973,"101014 34343D 751D2A A6A6AE","Hunter Black|Night Leather|Dried Blood|Silver Edge","Silver sword|Wooden stakes|UV flashlight"),
h("Black Cat","Alley black and snow fur, with a lucky streak that never lasts.","Marvel","Classic",1979,"111116 F1F0ED 777681 642B45","Alley Black|Snow Fur|Moonlit Gray|Plum Shadow","Fur-trimmed cuffs|Grappling hook|Lucky charm"),
h("Elektra","Silk reds and ink black, quiet as a blade leaving its sheath.","Marvel","Classic",1981,"9D172B 5B1422 17171C D3C2B5","Assassin Red|Wine Silk|Midnight Ink|Paper Lantern","Twin sai|Red silk sash|Ninja scroll"),
h("John Constantine","Rumpled tan, cigarette-smoke gray, and magic that costs more than it pays.","DC","Classic",1985,"B7A17E 3A3C3D 19191B 6B795E","Trench Tan|Smoke Gray|Pub Black|Ash Sage","Loosened tie|Occult tarot deck|Battered lighter"),
h("Huntress","Twilight violet over rooftop black, patient as a crossbow string.","DC","Classic (Helena Wayne)",1977,"39264F 17151D 8C79A4 D1C7D9","Twilight Violet|Rooftop Black|Lavender Dusk|Pale Orchid","Crossbow|Purple cape|Torn Gotham street map"),
h("Catwoman","Velvet black and moon-whisker silver, always one step from the exit.","DC","Classic",1940,"101014 34343B 777780 B9A9A2","Velvet Black|Midnight Gray|Moon Whisker|Pearl Taupe","Cat-eye goggles|Whip|Stolen emerald"),
h("Jessica Jones","Whiskey mauve, rain on the office window, and a case that won’t stay closed.","Marvel","Classic",2001,"29242C 51434B 17191E 8A6C66","Neon-Sign Shadow|Whiskey Mauve|Office Gloom|Worn Leather","Leather jacket|Private-eye case file|Rain-streaked office window"),
h("Elsa Bloodstone","Hunter red and muddy boots, with a monster always one hedgerow ahead.","Marvel","Classic",2001,"8B2635 242329 A7A0A0 5B4237","Hunter Red|Monster Black|Ash Silver|Muddy Boots","Bloodstone amulet|Double-barreled shotgun|Field journal"),
h("The Spectre","A pale hood, ghost-white cloak, and judgment drifting in on the mist.","DC","Classic",1940,"234D3A D8D9D5 17191D 8B9A78","Spirit Green|Ghost Cloak|Void Black|Mist Sage","Pale green hood|White cloak clasp|Ghostly lantern"),
h("Cloak","Living darkness folded into indigo, with a shard of light inside.","Marvel","Classic",1982,"101020 29254D 514B83 A9A5C4","Void Ink|Nightfall Indigo|Twilight Lilac|Pale Ether","Billowing cloak|Shard of light|Rain-soaked street sign"),
h("Midnight","Cold steel and silver-white, a shadow that wears the city like armor.","Marvel","Classic",1989,"101014 252A35 737D91 D8DCE5","Midnight Hour|Charcoal Alley|Cyborg Steel|Moonlit Chrome","Cybernetic gauntlet|Cracked visor|Stolen crescent dart"),
h("Morbius","Lab-coat black and crimson serum, a scientist who stayed up too late.","Marvel","Classic",1971,"16151C 67202B A9A5AD E2DDE0","Lab Coat Black|Crimson Serum|Pale Ash|Chalk Skin","Laboratory flask|Red-lined cape|Cracked beaker"),
h("Shroud","Shadow suit, midnight cloak, and a night that bends around him.","Marvel","Classic",1980,"10131D 17294B 343C55 8B8D9C","Shadow Suit|Midnight Cloak|Deep Slate|Fog Gray","Cloak of darkness|Black-lens goggles|Shadow-lined glove"),
h("Archangel","Midnight plumage and steel feathers, falling slower than the sky.","Marvel","Classic",1963,"18243D 697B99 BFC7D2 34313B","Midnight Plumage|Steel Feather|Frost Silver|Dusk Graphite","Steel feather|X-Men training harness|Metal wing frame"),
h("Spawn","Hellspawn black, bone white, and a cape that never stops moving.","Image","Classic",1992,"101014 E6E4E2 A31E2B 47404D","Hellspawn Black|Bone White|Cape Crimson|Chain Gray","Tattered red cape|Chain wraps|Skull mask"),
h("The Phantom","Jungle violet and skull-cave stone, a legend passed from father to son.","King Features","Classic",1936,"563A83 17151E A99AC5 C9C2B8","Jungle Violet|Skull Cave Black|Lavender Mist|Cave-Wall Stone","Skull-mark ring|Jungle drum|Trusty holster"),
h("Psylocke","Psychic purple and ninja midnight, with a flicker of orchid flame.","Marvel","Classic",1976,"542D77 21162D 9B70C1 C7A9D8","Psychic Purple|Ninja Midnight|Orchid Flame|Lilac Mist","Psychic katana|Ninja sash|Butterfly hairpin"),
h("The Question","Hat-band blue and faceless gray, a trench coat full of unanswered questions.","DC","Classic",1967,"243C65 17191D A9AEB7 D0C8B9","Hat-Band Blue|Gotham Gutter|Faceless Gray|Trench Sand","Fedora|Faceless mask|Case-file corkboard")
];
const face=document.getElementById('face'),card=document.getElementById('card'),btn=document.getElementById('roll'),hint=document.getElementById('hint'),tab=document.getElementById('tab'),ktab=document.getElementById('ktab'),filters=document.getElementById('filters');
const DECKS={
 aes:{items:A,btn:'Draw a card',title:'Your next world',sub:'Press the button and see what you land on.',tab:'Icons →',other:'hero'},
 hero:{items:H,btn:'Draw an icon',title:'Who’s stepping in?',sub:'Pick a world, then draw an icon.',tab:'← Aesthetics',other:'aes'}
};
let deck='aes',world='All',last=-1,busy=false,drawer=false;
function load(){try{return (JSON.parse(localStorage.getItem('er-keep'))||[]).filter(k=>{const p=k.split(':');return DECKS[p[0]]&&DECKS[p[0]].items[p[1]]})}catch(e){return []}}
function save(){try{localStorage.setItem('er-keep',JSON.stringify(keeps))}catch(e){}}
let keeps=load();
function updateTabs(){tab.textContent=DECKS[deck].tab;ktab.textContent=drawer?'← Back':'Keepsakes'+(keeps.length?' · '+keeps.length:'')}
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255);return .2126*c[0]+.7152*c[1]+.0722*c[2]};
function theme(a){
  const hs=a[2].map(c=>c[0]).sort((x,y)=>Math.abs(lum(x)-.5)-Math.abs(lum(y)-.5));
  const s=document.documentElement.style;
  s.setProperty('--page',hs[0]);
  s.setProperty('--onpage',lum(hs[0])>.55?'#241f1a':'#f7f2e8');
  s.setProperty('--tape',hs[1]);
  s.setProperty('--ontape',lum(hs[1])>.5?'#2a2622':'#f7f2e8');
}
function resetTheme(){const s=document.documentElement.style;['--page','--onpage','--tape','--ontape'].forEach(p=>s.removeProperty(p))}
function pool(){const it=DECKS[deck].items;return it.map((a,i)=>i).filter(i=>deck==='aes'||world==='All'||(world==='Other'?!['Marvel','DC'].includes(it[i][4].w):it[i][4].w===world))}
function intro(){
  const d=DECKS[deck];resetTheme();
  face.innerHTML='<div class="tape"></div><div class="no">№ 00</div><h2 class="name">'+d.title+'</h2><p class="desc">'+d.sub+'</p>';
}
function setDeck(k){
  deck=k;world='All';last=-1;const d=DECKS[k];
  drawer=false;btn.textContent=d.btn;updateTabs();filters.hidden=(k!=='hero');
  filters.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.w==='All'));
  hint.textContent='Tap a swatch to copy its hex';intro();
}
function render(i,animate){
  drawer=false;updateTabs();const a=DECKS[deck].items[i],m=a[4],kk=deck+':'+i;theme(a);
  const file=m?'<div class="file"><div><span>World</span>'+m.w+'</div><div><span>Variant</span>'+m.v+'</div><div><span>Debut</span>'+m.d+'</div></div>':'';
  face.innerHTML=
   '<div class="tape"></div>'+
   '<div class="no">№ '+String(i+1).padStart(2,'0')+' · of '+DECKS[deck].items.length+'</div>'+
   '<h2 class="name">'+a[0]+'</h2>'+
   '<p class="desc">'+a[1]+'</p>'+
   '<div class="sw">'+a[2].map(c=>'<button class="chip" data-hex="'+c[0]+'"><i style="background:'+c[0]+'"></i><span><b>'+c[1]+'</b><em>'+c[0].toUpperCase()+'</em></span></button>').join('')+'</div>'+
   '<div class="tearwrap"><div class="stub"><div class="lbl"><span>Catalogue</span><button class="keep" data-k="'+kk+'">'+(keeps.indexOf(kk)<0?'Tear & keep':'Kept ✓')+'</button></div>'+file+
   '<ul class="tags">'+a[3].map(o=>'<li>'+o+'</li>').join('')+'</ul></div></div>';
  if(animate){card.classList.remove('in');void card.offsetWidth;card.classList.add('in')}
}
function roll(){
  if(busy)return;
  if(drawer){drawer=false;intro();updateTabs()}
  const p=pool();if(!p.length)return;busy=true;
  let i;do{i=p[Math.floor(Math.random()*p.length)]}while(i===last&&p.length>1);
  last=i;let t=0;const it=DECKS[deck].items;
  const f=setInterval(()=>{
    const nm=face.querySelector('.name');
    if(nm)nm.textContent=it[p[Math.floor(Math.random()*p.length)]][0];
    if(++t>6){clearInterval(f);render(i,true);busy=false;hint.textContent='Tap a swatch to copy its hex'}
  },70);
}
card.addEventListener('click',e=>{
  const c=e.target.closest('.chip');if(!c)return;
  const hex=c.dataset.hex.toUpperCase();
  try{navigator.clipboard.writeText(hex).then(()=>{hint.textContent=hex+' copied'},()=>{hint.textContent=hex})}catch(err){hint.textContent=hex}
});
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
function slideTo(k){
  if(busy)return;
  if(reduce.matches){setDeck(k);return}
  busy=true;
  const dir=k==='hero'?1:-1,out=[];
  out.push(card.animate([{transform:'translateX(0) rotate(-.6deg)',opacity:1},{transform:'translateX('+(-dir*115)+'%) rotate('+(-dir*4)+'deg)',opacity:0}],{duration:260,easing:'cubic-bezier(.5,0,.9,.5)',fill:'forwards'}));
  if(!filters.hidden)out.push(filters.animate([{transform:'translateX(0)',opacity:1},{transform:'translateX('+(-dir*115)+'%)',opacity:0}],{duration:260,easing:'cubic-bezier(.5,0,.9,.5)',fill:'forwards'}));
  out[0].finished.then(()=>{
    setDeck(k);out.forEach(a=>a.cancel());
    const ins=[card.animate([{transform:'translateX('+(dir*115)+'%) rotate('+(dir*4)+'deg)',opacity:0},{transform:'translateX(0) rotate(-.6deg)',opacity:1}],{duration:360,easing:'cubic-bezier(.2,.8,.3,1)'})];
    if(!filters.hidden)ins.push(filters.animate([{transform:'translateX('+(dir*115)+'%)',opacity:0},{transform:'translateX(0)',opacity:1}],{duration:360,easing:'cubic-bezier(.2,.8,.3,1)'}));
    ins[0].finished.then(()=>{busy=false});
  });
}
tab.addEventListener('click',()=>slideTo(DECKS[deck].other));
filters.addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  world=b.dataset.w;last=-1;
  filters.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===b));
  hint.textContent=world==='All'?'Drawing from all worlds':'Drawing from '+world+' only';
});
btn.addEventListener('click',roll);
function openDrawer(){
  drawer=true;resetTheme();updateTabs();
  const names={aes:'Aesthetics',hero:'Icons'};
  const row=k=>{const p=k.split(':'),a=DECKS[p[0]].items[p[1]];return '<li><button class="krow" data-k="'+k+'"><span class="strip">'+a[2].map(c=>'<s style="background:'+c[0]+'"></s>').join('')+'</span>'+a[0]+'</button><button class="kx" data-rm="'+k+'" aria-label="Remove">×</button></li>'};
  const groups=['aes','hero'].map(d=>{const ks=keeps.filter(k=>k.split(':')[0]===d);return ks.length?'<div class="sect">'+names[d]+'</div><ul class="keeps">'+ks.map(row).join('')+'</ul>':''}).join('');
  face.innerHTML='<div class="tape"></div><div class="no">Keepsakes · '+keeps.length+'</div><h2 class="name">Your drawer</h2>'+(keeps.length?groups:'<p class="desc">Nothing kept yet. Tear a card to save it here.</p>');
}
ktab.addEventListener('click',()=>{if(drawer){drawer=false;updateTabs();if(last>=0)render(last,false);else intro()}else openDrawer()});
card.addEventListener('click',e=>{
  const k=e.target.closest('.keep'),r=e.target.closest('.krow'),x=e.target.closest('.kx');
  if(k){const n=keeps.indexOf(k.dataset.k);if(n<0)keeps.push(k.dataset.k);else keeps.splice(n,1);save();k.textContent=n<0?'Kept ✓':'Tear & keep';updateTabs()}
  else if(r){const p=r.dataset.k.split(':');deck=p[0];world='All';last=+p[1];btn.textContent=DECKS[deck].btn;filters.hidden=(deck!=='hero');filters.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.w==='All'));render(+p[1],true)}
  else if(x){keeps=keeps.filter(v=>v!==x.dataset.rm);save();openDrawer()}
});
updateTabs();
intro();
