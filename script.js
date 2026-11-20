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
const card=document.getElementById('card'),btn=document.getElementById('roll'),hint=document.getElementById('hint');
let last=-1,busy=false;
const lum=h=>{const c=[1,3,5].map(i=>parseInt(h.substr(i,2),16)/255);return .2126*c[0]+.7152*c[1]+.0722*c[2]};
function theme(a){
  const hs=a[2].map(c=>c[0]).sort((x,y)=>Math.abs(lum(x)-.5)-Math.abs(lum(y)-.5));
  const s=document.documentElement.style;
  s.setProperty('--page',hs[0]);
  s.setProperty('--onpage',lum(hs[0])>.55?'#241f1a':'#f7f2e8');
  s.setProperty('--tape',hs[1]);
}
function render(i,animate){
  const a=A[i];theme(a);
  card.innerHTML=
   '<div class="tape"></div>'+
   '<div class="no">№ '+String(i+1).padStart(2,'0')+' · of '+A.length+'</div>'+
   '<h2 class="name">'+a[0]+'</h2>'+
   '<p class="desc">'+a[1]+'</p>'+
   '<div class="sw">'+a[2].map(c=>'<button class="chip" data-hex="'+c[0]+'"><i style="background:'+c[0]+'"></i><span><b>'+c[1]+'</b><em>'+c[0].toUpperCase()+'</em></span></button>').join('')+'</div>'+
   '<div class="lbl">Catalogue</div>'+
   '<ul class="tags">'+a[3].map(o=>'<li>'+o+'</li>').join('')+'</ul>';
  if(animate){card.classList.remove('in');void card.offsetWidth;card.classList.add('in')}
}
function roll(){
  if(busy)return;busy=true;
  let i;do{i=Math.floor(Math.random()*A.length)}while(i===last);
  last=i;let t=0;
  const f=setInterval(()=>{
    const nm=card.querySelector('.name');
    if(nm)nm.textContent=A[Math.floor(Math.random()*A.length)][0];
    if(++t>6){clearInterval(f);render(i,true);busy=false;hint.textContent='Tap a swatch to copy its hex'}
  },70);
}
card.addEventListener('click',e=>{
  const c=e.target.closest('.chip');if(!c)return;
  const hex=c.dataset.hex.toUpperCase();
  try{navigator.clipboard.writeText(hex).then(()=>{hint.textContent=hex+' copied'},()=>{hint.textContent=hex})}catch(err){hint.textContent=hex}
});
btn.addEventListener('click',roll);
card.innerHTML='<div class="tape"></div><div class="no">№ 00</div><h2 class="name">Your next world</h2><p class="desc">Press the button and see what you land on.</p>';
