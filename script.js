const OLD=[
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


const mk=(n,d,hx,nm,ob)=>{const hs=hx.split(' '),ns=nm.split('|');return [n,d,hs.map((x,i)=>['#'+x,ns[i]]),ob.split('|')]};
const ao=(n,old,hx,nm)=>{const o=OLD.find(x=>x[0]===old);return mk(n,o[1],hx,nm,o[3].join('|'))};
const A=[
ao("Dark Academia","Dark Academia","2B2118 5C4033 C2B280 1C1917","Espresso|Mahogany|Aged Parchment|Fountain Ink"),
mk("Light Academia","Sunlit reading rooms, linen sleeves, and tea beside an open window.","F5F0E6 D8C3A5 8E8D8A A67B5B","Linen|Oatmeal|Limestone|Warm Chai","Cream-paged poetry anthology|Porcelain teacup|Pressed-flower bookmark"),
mk("Chaotic Academia","Stacked books, coffee rings, and a thrifted sweater that has survived three all-nighters.","3D312E 9E472A D9CFC1 556B2F","Coffee Stain|Rust Sweater|Dog-Eared Page|Thrifted Olive","Coffee-stained notebook|Chewed pencil|Mismatched mug"),
mk("Romantic Academia","Candlelit love letters, dried roses, and poetry read aloud by a window.","E8D5D5 8A4F5B F7F3EE 4A3B3C","Blush Silk|Dried Rose|Vellum|Sepia","Wax-sealed letter|Rose pressed between pages|Silver letter opener"),
mk("Art Academia","A paint-speckled studio where charcoal dust settles on everything.","E6E2D8 363636 B85D43 7A8B99","Raw Canvas|Vine Charcoal|Terracotta Clay|Turpentine Blue","Wooden easel|Tin of charcoal sticks|Paint-smudged apron"),
mk("Spiffy Academia","Tweed jackets, crisp collars, and a perfectly knotted tie before the lecture.","1E2D2F 6E260E D4AF37 EDE6D6","Hunter Tweed|Oxblood|Brass Nib|Crisp Collar","Gold-nibbed pen|Leather satchel|Brass collar pin"),
mk("Green Academia","Greenhouse mornings where botany notes and damp soil share the desk.","2D4739 708238 E5DEC9 5C4A38","Conservatory Moss|Pressed Fern|Herbarium Paper|Rich Soil","Pressed-fern herbarium folio|Brass watering can|Terracotta pot of seedlings"),
mk("Theatre Academia","Velvet curtains, ghost lights, and a script marked in three colors of pencil.","630D16 141414 D4AF37 F2E8DC","Stage Velvet|Backstage Shadow|Gilded Trim|Script Paper","Annotated script|Opera glasses|Velvet curtain tassel"),
mk("Royal Academia","Crests, signet rings, and marble halls where tradition has the final word.","1B263B 780000 C5A059 F8F9FA","Regal Navy|Crimson Crest|Signet Gold|Marble","Signet ring|Wax-sealed scroll|Crested stationery"),
mk("Poet’s Cliff","Windswept cliffs, wool coats, and verses scribbled on a ferry ticket.","4A5568 A0AEC0 2D3748 E2E8F0","Slate Cliff|Sea Mist|Wool Overcoat|Typewriter Bond","Battered typewriter|Notebook of verse|Wool overcoat"),
mk("Old Hollywood Glamour","Silver-screen spotlights, satin gloves, and champagne after the premiere.","800020 F3E5AB 121212 C0C0C0","Oxblood Lip|Champagne Satin|Cinema Noir|Silver Screen","Satin opera gloves|Film-reel canister|Bulb-lit vanity mirror"),
ao("Mid-Century Modern","Mid-Century Modern","D96B27 6B8E23 2A6F97 8B5A2B","Burnt Orange|Avocado|Peacock Teal|Warm Teak"),
mk("1950s Rockabilly","Cherry-red convertibles, jukebox glow, and a pompadour that defies gravity.","D90429 1D1E2C F8F9FA 48CAE4","Cherry Red|Leather Black|Polka White|Diner Chrome","Jukebox|Polka-dot swing skirt|Pomade tin"),
mk("1960s Mod","Bold geometry, go-go boots, and a Vespa parked outside the discotheque.","FF5400 FFBD00 FFFFFF 000000","Tangerine|Marigold|Go-Go White|Graphic Black","Vespa scooter|Op-art poster|White go-go boots"),
mk("1970s Boho","Fringe, afternoon haze, and a record player humming in a plant-filled room.","C87D55 D4A373 582F0E A3B18A","Suede Tan|Amber|Saddle Brown|Macramé Sage","Macramé wall hanging|Vinyl record|Suede fringe bag"),
mk("1980s Synthwave","Neon grids, chrome sunsets, and a highway that never ends.","FF007F 00F0FF 240046 FF9E00","Neon Magenta|Electric Cyan|Midnight Grid|Chrome Sunset","Cassette deck|Neon grid poster|Retro sports-car model"),
ao("1990s Grunge","90s Grunge","4A1C1C 3B4252 5E6452 1E1E1E","Flannel Maroon|Faded Denim|Army Surplus|Scuffed Leather"),
mk("Y2K Futurism","Glossy pink plastic, translucent gadgets, and the future arriving in bubblegum.","FF69B4 00BFFF C0C0C0 E0AAFF","Frosted Pink|Translucent Blue|Liquid Silver|Cyber Lilac","Frosted flip phone|Glitter gel pen|Metallic platform sneakers"),
ao("Victorian Gothic","Victorian Gothic","1A0F14 4A1525 6C757D D8CFC4","Mourning Black|Claret Lace|Wrought Iron|Cameo Ivory"),
mk("Rococo","Powder-pink parlors, gilded curves, and a tea party that never ends.","F7CAD0 BDE0FE E6C27A FFFDF9","Powder Pink|Pastel Sky|Gilded Gold|Porcelain","Gilded mirror|Porcelain shepherdess figurine|Silver tea service"),
mk("Regency Ball","Empire waists, garden strolls, and a ball where one glance means everything.","D8E2DC FFE5D9 F4ACB7 FAF9F6","Celadon Silk|Empire Peach|Rosewater|Pearl","Paper fan|Embroidered reticule|Calling card"),
mk("Edwardian","Pintucked blouses, straw boaters, and a lawn party in a long summer.","FAF3E0 B7C9E2 C8B6A6 7D8471","Pintuck Cream|Periwinkle|Straw Boater|Conservatory Sage","Straw boater|Lace parasol|Pocket watch"),
mk("Art Nouveau","Whiplash curves, lilies, and a peacock feather in every doorway.","4F772D D4A373 90A955 31572C","Peacock Green|Antique Brass|Lily Pad|Stained Emerald","Peacock-feather comb|Stained-glass lamp|Enamel lily brooch"),
ao("Art Deco","Art Deco","0D1B2A D4AF37 1B4332 F4F1DE","Midnight Onyx|Gatsby Gold|Malachite|Ivory"),
mk("Roaring Twenties","Sequins, saxophones, and a speakeasy door that opens for the right password.","1C1C1C E5C158 8C2F39 D9D9D9","Sequined Black|Champagne Coupe|Speakeasy Velvet|Platinum","Saxophone|Feathered headband|Password card"),
ao("Cottage Garden","Cottagecore","F4EFE6 A3B18A E6B8A2 8B5E34","Sourdough Crumb|Meadow Sage|Wildflower Blush|Wicker"),
ao("Goblin Den","Goblincore","3A4F41 6B4423 A68A64 8F9779","Deep Moss|Forest Mud|Pebble|Lichen"),
mk("Fairy Glade","Dewdrop mornings, gossamer wings, and a mushroom ring that might be a doorway.","E0FBFC CDB4DB B5E48C FFC8DD","Dewdrop|Gossamer Lilac|Willow Leaf|Petal Pink","Jar of fireflies|Acorn-cap teacup|Spider-silk ribbon"),
mk("Mossgaze","A quiet forest floor in blue-green fog, softly overgrown.","1B2620 4A5D4E 8C9A9E 2C3639","Forest Shadow|Damp Fern|Pine Fog|Wet Bark","Moss-covered stone|Foggy lantern|Fallen birch log"),
mk("Cabin Hearth","Cedar smoke, wool blankets, and a snowed-in afternoon with nowhere to be.","5C2C16 8C1C13 283618 DDA15E","Cedar Log|Wool Blanket Red|Evergreen|Hearth Ember","Cast-iron stove|Plaid wool blanket|Enamel camp mug"),
ao("Coastal Grandmother","Coastal Grandmother","FFFFFF 89CFF0 D2B48C 2B4C7E","Crisp Linen|Hydrangea Blue|Woven Tote|Nautical Navy"),
mk("Beachcomber","Low tide at dawn, pockets full of sea glass, salt in your hair.","E0DCD3 A8DADC F1FAEE C2B280","Driftwood|Sea Glass|Sea Foam|Wet Sand","Jar of sea glass|Driftwood plank|Spiral shell"),
mk("Desert Minimalism","Sun-baked walls, sparse shade, and one perfect cactus in a clay pot.","C66B3D E6CCB2 8A9A5B DDB892","Terracotta|Adobe|Sagebrush|Golden Dune","Terracotta vase|Woven rug|Dried pampas stems"),
mk("Tropical Maximalism","Hibiscus, mango, and a monstera in every corner of a loud, joyful room.","1B4332 FF0054 FF9F1C 00BBF9","Monstera|Hibiscus|Mango|Lagoon","Rattan peacock chair|Banana-leaf cushion|Bowl of cut mango"),
mk("Nordic Frost","A snowfield at dawn, birch bark, and breath you can see.","CAF0F8 F8F9FA 6C757D D4C5B9","Glacial Ice|Snowfield|Fjord Stone|Birch Wood","Wool mittens|Birch-bark candle holder|Frosted pine branch"),
mk("Autumnal","Crunchy maple leaves, corduroy, and cinnamon steaming from a mug.","9B2226 CA6702 606C38 BB9457","Maple Leaf|Pumpkin Spice|Corduroy Olive|Cinnamon","Corduroy jacket|Cinnamon-stick bundle|Pile of maple leaves"),
mk("Spring Awakening","Cherry blossoms, rain puddles, and the first warm window left open.","FFB7C5 B7E4C7 A2D2FF FFF3B0","Cherry Blossom|Fresh Grass|Rain Puddle|Daffodil","Cherry-blossom branch|Rain boots|Daffodil in a jam jar"),
mk("Solarpunk","Rooftop gardens, solar glass, and a hopeful city powered by sunlight.","2D6A4F FFB703 8ECAE6 F4F1DE","Canopy Green|Solar Gold|Clear Sky|Raw Linen","Glass terrarium|Bicycle with a crate of herbs|Solar lantern"),
mk("Jungle Canopy","Humid rainforest canopy, expedition khaki, and a toucan somewhere above.","132A13 4F772D A4AC86 E07A5F","Rainforest Canopy|Vine Green|Expedition Khaki|Toucan Coral","Binoculars|Safari field journal|Hanging vine basket"),
mk("Stargazer","A midnight hilltop, a brass telescope, and the Milky Way unfurling overhead.","0B132B 1C2541 C5A059 E0E1DD","Midnight Sky|Deep Indigo|Brass Telescope|Starlight","Brass telescope|Star chart|Thermos of cocoa"),
ao("Cyberpunk","Cyberpunk Neon","090A0F FF003C 00F0FF FCEE09","Asphalt|Neon Crimson|Hologram Cyan|Acid Yellow"),
mk("Steampunk","Polished brass, whirring gears, and an airship waiting at the dock.","B5835A 4A2C2A 2B2D42 D9C5B2","Polished Brass|Oiled Leather|Coal Smoke|Blueprint","Brass goggles|Clockwork compass|Leather-bound journal"),
mk("Dieselpunk","Riveted steel, aviator leather, and a prop engine roaring in the hangar.","3D405B 6B4423 5C5346 C4A484","Riveted Steel|Aviator Leather|Motor Oil|Khaki Canvas","Aviator helmet|Riveted toolbox|Oil-stained map"),
mk("Atompunk","Atomic-age optimism in coral, mint, and chrome, with a raygun on the diner counter.","FF6B6B 4ECDC4 F7FFF7 FFE66D","Retro Coral|Formica Mint|Chrome White|Raygun Yellow","Boomerang-pattern Formica table|Chrome toaster|Toy raygun"),
mk("Biopunk","A glowing lab where something green is quietly learning to grow.","0A192F 00FF87 9D4EDD 38B000","Abyssal Lab|Bioluminescent Green|Mutagen Violet|Algae","Petri dish|Glowing test-tube rack|Bioluminescent specimen jar"),
ao("Frutiger Aero","Frutiger Aero","00A8E8 70E000 FFFFFF FF9E00","Glossy Sky|Vibrant Hill|Water Droplet|Clownfish Orange"),
ao("Vaporwave","Vaporwave","FF71CE 01CDFE B967FF E5E5E5","Neon Pink|Mall Cyan|Retro Purple|Marble Bust"),
mk("Dial-Up Web","Hyperlink blue, gray window chrome, and a guestbook from a website nobody visits anymore.","0000FF C0C0C0 FF00FF 00FF00","Hyperlink Blue|Windows Grey|Pixel Magenta|Matrix Lime","Beige tower PC|Dial-up modem|Burned CD-R labeled in marker"),
mk("Lo-Fi","A rainy window, a warm desk lamp, and a soft beat looping past midnight.","2B2D42 F4A261 6D597A 355070","Rainy Window|Warm Desk Lamp|Twilight Purple|Midnight Vinyl","Desk lamp|Vinyl turntable|Steaming mug beside a notebook"),
mk("Deep Space","Deep vacuum, violet nebulae, and the hush of floating beyond a visor.","000000 480CA8 D8E2DC B5179E","Deep Vacuum|Nebula Violet|Astronaut Suit|Cosmic Dust","Astronaut helmet|Star projector|Mission patch"),
mk("Soft Grunge","Thrifted cardigans, smudged eyeliner, and pastel light through a bedroom window.","D8BFD8 2F2F2F 8B7D7B F5E6E8","Pastel Thistle|Faded Black|Ash|Washed Blush","Oversized cardigan|Polaroid camera|String of fairy lights"),
mk("Trad Goth","Black velvet, silver ankhs, and a dance floor under fog.","0A0A0A 590D22 4A0E4E C0C0C0","Pitch Black|Dark Crimson|Velvet Plum|Silver Ankh","Silver ankh pendant|Lace gloves|Black pillar candle"),
mk("Pastel Goth","Candy-sweet and a little haunted, with lavender hair and a heart-shaped coffin purse.","E0BBE4 1A1A1D FFDFD3 957DAD","Lavender Hair|Choker Black|Baby Peach|Spooky Mauve","Heart-shaped coffin purse|Jar of lavender hair dye|Black choker with a charm"),
mk("Cyber Goth","UV rave lights, latex shine, and a club where the fog glows green.","0F0F0F 39FF14 FF10F0 1F51FF","Latex Black|UV Neon Green|Rave Pink|Electric Blue","Welding goggles|Neon glow sticks|Platform boots"),
mk("Punk","Safety pins, tartan, and a basement show with the volume all the way up.","111111 C1121F D9D9D9 F8F9FA","Studded Leather|Tartan Red|Safety Pin|Zine Paper","Studded leather jacket|Safety-pin zine|Tartan patch"),
mk("Emo","Eyeliner, checkered laces, and a song on repeat that explains everything.","121212 800000 FFFFFF 495057","Eyeliner Black|Dark Maroon|Checkered White|Asphalt","Checkered sneakers|Studded belt|Burned mix CD"),
mk("Scene","Neon streaks, raccoon stripes, and a camera-flash selfie in a bedroom mirror.","FF007F 00FFFF CCFF00 000000","Hot Magenta|Electric Cyan|Highlighter Lime|Raccoon Stripe","Rainbow arm warmers|Neon hair extensions|Digital camera"),
mk("Skater","Scuffed decks, grip tape, and an empty parking lot at golden hour.","556B2F D2B48C A8DADC 333333","Cargo Olive|Grip Tape Tan|Faded Skate Blue|Scuffed Canvas","Worn skateboard deck|Canvas sneakers|Roll of grip tape"),
mk("Techwear","Matte shells, tactical straps, and a rainy city commute in black.","141414 2B2D42 4A4E69 FF5400","Matte Gore-Tex|Tactical Slate|Carbon Grey|Utility Tag","Waterproof shell jacket|Modular utility vest|Carabiner key clip"),
mk("Trail Gear","Fleece, carabiners, and a trail map folded into the pocket of a storm shell.","2D6A4F E76F51 E9C46A 264653","Trail Pine|Carabiner Coral|Fleece Mustard|Storm Shell","Hiking boots|Insulated flask|Folded trail map"),
mk("Streetwear","Heavyweight hoodies, limited drops, and a sneaker line wrapping around the block.","181818 EAE2B7 D62828 8D99AE","Heavyweight Black|Cream Hoodie|Drop Red|Concrete","Heavyweight hoodie|Boxed sneakers|Fitted cap"),
mk("Acubi","Seoul-minimal knits, soft grays, and a quiet cool that never tries too hard.","1C1C1C A5A5A5 F5F5F5 5C5470","Charcoal Knit|Distressed Grey|Stark White|Muted Ash","Distressed knit cardigan|Slim shoulder bag|Wired earbuds"),
mk("Indie Sleaze","Flash-lit nights, smudged kohl, and a metallic mini under a borrowed jacket.","101010 D4AF37 C0C0C0 7209B7","Smudged Kohl|Flash Gold|Metallic Mini|Club Neon","Disposable camera|Metallic mini skirt|Skinny scarf"),
mk("Visual Kei","Theatrical black, dramatic eyeliner, and a stage lit like a gothic cathedral.","0D0208 800F2F 3A0CA3 E5E5E5","Theatrical Black|Gothic Rose|Royal Indigo|Porcelain Stage","Studded stage boots|Lace-trimmed cuffs|Rose-print guitar strap"),
mk("Harajuku Decora","Rainbow hair clips, layered plushies, and a candy-colored avalanche of accessories.","FF4D6D FFBE0B 3A86FF 8338EC","Strawberry Clip|Canary Yellow|Toy Blue|Grape Pop","Strawberry hair clips|Stacked bead bracelets|Pastel plush toy"),
mk("Coquette","Satin bows, pearl-cream lace, and a letter sealed with a cherry-red kiss.","FAD2E1 FFF1E6 E2ECE9 C9184A","Satin Ribbon|Pearl Cream|Porcelain Blue|Cherry Lip","Satin hair bow|Pearl necklace|Heart-shaped locket"),
mk("Ballet Studio","Pointe-shoe ribbons, chalk dust, and a barre in morning light.","F8EDEB FCD5CE D8E2DC ECE4DB","Pointe Silk|Tulle Blush|Warm-Up Grey|Chalk","Satin pointe shoes|Wrap cardigan|Rosin box"),
mk("Porcelain Doll","Lace collars, Mary Janes, and a tea set laid for two dolls.","FFE5EC FFFFFF 1D1E2C BDE0FE","Porcelain Cheek|Lace Collar|Mary Jane Black|Ribbon Blue","Mary Jane shoes|Lace collar|Porcelain doll"),
mk("Storybook Princess","Rose gardens, chiffon, and a tiara forgotten on a palace windowsill.","F4ACB7 FFE5D9 E6C27A D8E2DC","Rose Garden|Chiffon|Tiara Gold|Palace Mint","Gold tiara|Chiffon gloves|Rose-gold hand mirror"),
mk("Cloud Angel","Feathered wings, halo light, and a heaven of soft marble and mist.","FFFFFF FAF3DD E8E8E4 D8E2DC","Feathered Wing|Halo Gold|Marble Cherub|Cloud Mist","Feathered wings|Gold halo headband|Marble cherub figurine"),
mk("Orchard Summer","Heart-shaped sunglasses, white sundresses, and long afternoons in an orchard.","D90429 FFF0F3 80B918 FFB3C1","Heart Sunglasses|Sundress White|Orchard Grass|Sunburn Pink","Straw sun hat|Wicker picnic basket|Heart-shaped sunglasses"),
mk("Soft Girl","Pastel clouds, butter-yellow cardigans, and a milkshake after tennis.","FFC8DD BDE0FE FFF3B0 FFFFFF","Cloud Pink|Baby Blue|Butter Yellow|Tennis Skirt","Pleated tennis skirt|Pastel gel pens|Heart sticker sheet"),
mk("McBling","Velour tracksuits, rhinestone everything, and a flip phone dripping with charms.","FF1493 FFB6C1 E5E4E2 FFFFFF","Velour Hot Pink|Gloss Pink|Rhinestone|French Tip","Rhinestone flip phone|Velour tracksuit|Charm bracelet"),
mk("Whimsigoth","Velvet moons, amethyst crystals, and a ’90s witch-show set full of stars.","240046 5A189A FF9E00 10002B","Celestial Velvet|Amethyst|Crescent Gold|Midnight Sky","Crescent-moon wall hanging|Amethyst cluster|Pendulum necklace"),
mk("Lolita","Lace, tea parties, and a parasol twirled over a bell-shaped skirt.","800020 FFF8F0 1A1A1A E6B8A2","Burgundy Velvet|Antique Lace|Parasol Black|Tea Rose","Lace parasol|Bell-shaped petticoat|Tea-rose headdress"),
mk("Granny’s Parlor","Cross-stitch cushions, apple pie cooling, and a doily on every surface.","F4E4BA C88A8A 8FA998 FAF6F0","Apple Pie Crust|Teacup Rose|Cross-Stitch Sage|Doily White","Crocheted doily|Cross-stitch sampler|Floral teapot"),
mk("Grandpa’s Den","Corduroy armchairs, argyle sweaters, and a half-finished crossword.","5C4033 3B5249 D4A373 E6CCB2","Corduroy Brown|Argyle Green|Watch Leather|Oatmeal Vest","Pocket watch|Argyle vest|Crossword book with a stubby pencil"),
mk("Warm Glow","Golden-hour light spilling across a knit blanket.","F4A261 E76F51 E9C46A F8EDEB","Golden Hour|Toasted Amber|Honey Light|Soft Knit","Honey-colored lamp|Chunky knit throw|Amber glass candle"),
mk("Cozy Gamer","Pastel keycaps, LED glow, and a blanket fort by the monitor.","E0B1CB BE95C4 F2E9E4 9F86C0","Pastel Keycap|LED Lilac|Desk Mat Cream|Twilight Glow","Pastel mechanical keyboard|Headset|Fuzzy blanket"),
mk("Honey Hive","Dripping honey, clover fields, and the low hum of a happy hive.","FFB703 FB8500 FFF3B0 606C38","Dripping Honey|Amber Comb|Beeswax|Clover Field","Wooden honey dipper|Beeswax candle|Jar of honeycomb"),
mk("Café Corner","Chalkboard menus, steaming oat-milk lattes, and rain on the window.","4A2C2A D4A373 2B2D42 F5EBE0","Espresso|Steamed Oat Milk|Chalkboard|Ceramic Mug","Chalkboard menu|Ceramic latte mug|Brown-paper pastry bag"),
mk("Bookstore Girl","Canvas totes, cracked-spine paperbacks, and a scarf pulled up in the aisle.","D5BDAF 8D5B4C EDEDE9 3D405B","Canvas Tote|Leather Spine|Paperback Page|Scarf Navy","Canvas tote|Dog-eared paperback|Bookshop bookmark"),
mk("Slumber","Chamomile tea, plush duvets, and a flannel hush after the lights go out.","E2ECE9 F0EFEB BEE1E6 DFE7FD","Chamomile|Plush Duvet|Flannel Blue|Dream Mist","Chamomile tea tin|Flannel pajamas|Plush duvet"),
mk("Summer Memories","Disposable-camera flashes, firefly evenings, and a VHS tape of someone’s birthday.","F4A261 90BE6D F9C74F 577590","Disposable Flash|Summer Grass|Firefly Glow|VHS Blue","Disposable camera|VHS tape|Mason-jar lantern"),
mk("Storybook","Woodland paths, cobblestone lanes, and a lantern lit in a cottage window.","6B705C CB997E FFE8D6 DDB892","Woodland Moss|Cobblestone|Watercolor Page|Brass Lantern","Brass lantern|Watercolor picture book|Woven forest basket"),
mk("Liminal Space","Fluorescent hallways, an empty pool at night, and the feeling that someone just left.","E9EDC9 0077B6 CED4DA 343A40","Fluorescent Yellow|Night Pool Blue|Empty Hallway|Exit Shadow","Humming fluorescent tube|Exit sign|Pool-edge ladder"),
mk("Lucid Dream","Pastel clouds, half-remembered rooms, and a horizon that keeps moving.","FFAFCC A2D2FF CDB4DB FFF3B0","Surreal Cloud|Pastel Horizon|Hazy Memory|Lucid Light","Cloud-shaped lamp|Polaroid of a blurred room|Spinning mobile"),
mk("Static Void","Low-res green text, glitching screens, and something just behind the static.","00FF00 FF0000 1A1A1A D9D9D9","Low-Res Green|Cryptic Text|Void Black|Static Grey","Flickering CRT|Cryptic sticky note|Floppy disk"),
mk("Cryptid Woods","Trail-cam flashes, misty pines, and a shape between the trees nobody can explain.","1B2620 4F5D53 8D7B68 2B2D42","Trail-Cam Night|Misty Pine|Moth Wing|Folklore Dusk","Trail camera|Plaster footprint cast|Thermos of black coffee"),
mk("Ethereal","Sheer silk, moonlit mist, and something luminous just out of reach.","F8F9FA CAF0F8 D8E2DC E2ECE9","Sheer Silk|Bioluminescent Mist|Moonlit Silver|Twilight Fog","Sheer silk veil|Moonstone pendant|Dewdrop-glass vase"),
mk("Witchy","Tarot candles, dried sage, and a cauldron humming at midnight.","231942 5E548E 1A1A1A 6B705C","Tarot Indigo|Amethyst|Black Candle|Dried Sage","Tarot deck|Sage bundle|Black taper candle"),
mk("Vampiric","Crimson velvet, antique silver, and a candle that flickers when someone enters.","590D22 0B090A A4161A D3D3D3","Crimson Velvet|Nocturnal Black|Garnet|Antique Silver","Garnet ring|Antique silver goblet|Black lace cravat"),
mk("Surrealism","Checkerboard floors, impossible skies, and a bowler hat floating where it shouldn’t.","111111 F8F9FA 3A86FF E07A5F","Checkerboard Black|Checkerboard White|Magritte Sky|Desert Horizon","Checkerboard tile|Bowler hat|Melting clock"),
mk("Soft Dread","Pastel plush toys in a hallway where the light feels slightly wrong.","FFB3C1 1A1A1A F8F9FA 9B2226","Pastel Plush|Stark Shadow|Gauze White|Heavy Crimson","Worn teddy bear|Cracked music box|Gauze curtain"),
mk("After Hours","A 3 AM diner, streetlight amber on wet asphalt, and neon humming over empty booths.","0D1B2A FF9F1C E63946 415A77","3 AM Asphalt|Streetlight Amber|Diner Neon|Wet Reflection","Neon diner sign|Thick ceramic coffee mug|Rain-slick umbrella"),
mk("Quiet Luxury","Cashmere, saddle leather, and wealth that never announces itself.","E6DEC8 4A3F35 F9F8F6 2C2C2C","Cashmere Beige|Saddle Leather|Ivory Silk|Tailored Charcoal","Cashmere sweater|Leather tote|Slim gold watch"),
mk("Clean Girl","Dewy skin, gold hoops, and a slicked-back bun at the pilates studio.","F7EDE2 D4AF37 FFFFFF D5BDAF","Dewy Skin|Gold Hoop|Crisp Tank|Nude Lip","Gold hoop earrings|Pilates mat|Lip balm tin"),
mk("Scandinavian Minimalism","Gallery-white walls, pale oak, and the calm of nothing extra.","F8F9FA D4A373 ADB5BD E9ECEF","Gallery White|Pale Oak|Soft Grey|Diffused Light","Pale oak chair|Paper pendant lamp|Single-stem vase"),
ao("Brutalism","Brutalist Concrete","8D99AE 2B2D42 EDF2F4 4A4E69","Raw Concrete|Monolith Shadow|Overcast Sky|Steel Rebar"),
mk("Maximalism","Ruby velvet, peacock teal, and every wall covered in something wonderful.","9B2226 005F73 EE9B00 5F0F40","Ruby Velvet|Peacock Teal|Marigold|Plum","Mismatched gallery wall|Patterned velvet armchair|Stack of antique books")
];
[["Wabi-Sabi","Wabi-Sabi"],["Desert Western","Desert Western"],["Scandi Hygge","Scandi Hygge"],["Space Age Retro","Space Age Retro"],["Mermaidcore","Pearl Tide"],["Kidcore","Toybox"],["Forest Witchcore","Forest Witch"]].forEach(p=>{const o=OLD.find(x=>x[0]===p[0]);A.push([p[1],o[1],o[2],o[3]])});
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
h("The Question","Hat-band blue and faceless gray, a trench coat full of unanswered questions.","DC","Classic",1967,"243C65 17191D A9AEB7 D0C8B9","Hat-Band Blue|Gotham Gutter|Faceless Gray|Trench Sand","Fedora|Faceless mask|Case-file corkboard"),
h("Hello Kitty","A cozy bakery morning with a red bow and a tray of fresh cookies.","Sanrio","Classic",1974,"F5E9DF D94F67 F4C7CE B94D52","Milk Cream|Strawberry Bow|Petal Blush|Cherry Jam","Red hair bow|Cookie tin|Toy piano"),
h("Kuromi","Midnight mischief in a jester hat, with a pink skull and a rebellious grin.","Sanrio","Classic",2005,"24202D 79518F E6C8DF C7B8D8","Midnight Plum|Rebel Violet|Orchid Mist|Lilac Smoke","Jester hat|Studded choker|Skull-print diary"),
h("My Melody","Forest tea parties in a pink hood, with something sweet in the oven.","Sanrio","Classic",1975,"EBA5B7 F5E8DE D88C9C B9C9AD","Rose Hood|Warm Ivory|Dusty Rose|Sage Leaf","Pink hood|Basket of strawberries|Tiny teapot"),
h("Cinnamoroll","A cloud café where a floppy-eared pup floats past the window.","Sanrio","Classic",2001,"F4F1EA A8C9E5 D5E5F0 B6A8D5","Cloud White|Powder Blue|Sky Mist|Dream Lilac","Café menu board|Cinnamon roll on a plate|Fluffy cloud cushion"),
h("Pompompurin","Custard-colored mornings and a brown beret on a very comfy cushion.","Sanrio","Classic",1996,"E9B85B F4D99B 8C603D F2E8D2","Butterscotch|Custard Cream|Caramel Beret|Cream Puff","Brown beret|Pudding cup|Plush cushion"),
h("Badtz-Maru","A cheeky penguin with spiky hair and zero interest in being cute.","Sanrio","Classic",1993,"20232A F0EEE8 8AA5B7 D5B75A","Ink Black|Icy White|Steel Blue|Mischief Gold","Skateboard|Headphones|Sticker-covered backpack"),
h("Keroppi","A lily-pad pond after a rainstorm, with one very happy frog in the middle.","Sanrio","Classic",1988,"65A95B D9E7A5 E8C95B E8F0DD","Frog Green|Lime Fizz|Sunshine|Lily Cream","Lily pad|Rain boots|Teru-teru-bozu charm"),
h("Chococat","A curious cat whose whiskers pick up every secret in town.","Sanrio","Classic",1996,"25252D C5A16B A8C9D8 E9E4D9","Cocoa Black|Toasted Beige|Dusty Blue|Oat Milk","Blue collar|Chocolate bar|Pocket radio"),
h("Pochacco","A sunny morning jog with a sporty pup in a fresh white tee.","Sanrio","Classic",1989,"F3F0E8 25272E 9FC8DC D9B9A8","Soft White|Charcoal Ears|Sky Blue|Dusty Peach","Sweatband|Soccer ball|Gym bag"),
h("Tuxedo Sam","A dapper penguin in a bow tie, strolling the pier at dusk.","Sanrio","Classic",1979,"83B6D5 F2EDE5 D5B8C8 B5C6D8","Powder Blue|Pearl White|Muted Rose|Harbor Mist","Bow tie|Sailor hat|Paper cone of fish snacks"),
h("Hangyodon","A lonely fish with big dreams and a worried look at the bottom of the sea.","Sanrio","Classic",1985,"398CA7 77C5CF E8A8A6 F1E5D7","Deep Ocean Teal|Sea Breeze|Coral Blush|Shell Cream","Pearl in a clamshell|Coral branch|Message in a bottle"),
h("Little Twin Stars","Kiki and Lala drifting down a ribbon of stars.","Sanrio","Classic",1975,"9BB8E9 E9B6D1 F4E9F1 B8A5D9","Celestial Blue|Cotton Candy|Starlight|Lavender Dream","Crescent-moon cushion|Star-shaped lantern|Cloud pillow"),
h("Gudetama","A lazy egg yolk in a puddle of whites, done with everything.","Sanrio","Classic",2013,"E8C95F F4E7C5 D9A66D B8A18A","Egg Yolk|Buttercream|Toasted Edge|Sleepy Beige","Slice of bacon|Fried-egg pan|Slice of bread"),
h("Aggretsuko","Office gray by day, death-metal karaoke by night.","Sanrio","Classic",2015,"B94746 25252B E7D9C8 D49A56","Burnt Red|Office Charcoal|Warm Tan|Karaoke Amber","Karaoke microphone|Office ID badge|Crumpled to-do list"),
h("Wish Me Mell","A hilltop where thank-yous bloom like flowers.","Sanrio","Classic",2010,"F0C4C9 F5E9D8 C5D8B6 E5A5A8","Peach Blush|Vanilla|Meadow Green|Rosy Wish","Thank-you card|Pastel ribbon|Wish-star charm"),
h("U*SA*HA*NA","A summer island of colorful rabbit ears and seaside ballet.","Sanrio","Classic",2001,"E97BA9 F1D45B 8BB9DA A6C77D","Candy Pink|Lemon Drop|Seaside Blue|Fresh Clover","Ballet slippers|Tulip bouquet|Box of sweets"),
h("Marron Cream","A Paris-suburb afternoon of pastries, crafts, and flowery stationery.","Sanrio","Classic",1985,"D9A6B3 F1E4D4 B99B83 C6C7A4","Vintage Rose|Biscuit Cream|Café au Lait|Faded Olive","Floral stationery set|Chestnut pastry|Sewing box"),
h("Pekkle","A tap-dancing duckling in a blue tee with a big laugh.","Sanrio","Classic",1989,"F1E9D7 79B7CE E6B95F B9C6A5","Duckling Cream|Soft Blue|Golden Beak|Pond Sage","Tap shoes|Blue letter-P tee|Pond pebble"),
h("Cogimyun","A flour fairy floating through a bakery dusted in soft powder.","Sanrio","Classic",2015,"F1E8E0 D8B9B0 C6B9D9 E8D5A9","Flour White|Dusty Mauve|Lilac Dust|Wheat Gold","Flour sack|Onigiri rice ball|Tiny fried-shrimp toy"),
h("Nya Ni Nyu Nye Nyon","Five kitten siblings in one pink-and-cream living room, and nobody is asleep.","Sanrio","Classic",1984,"E8A6B7 F2E5D5 B5C7D8 D6B77C","Rose Whisker|Cream Nap|Pale Yarn Blue|Honey Collar","Ball of yarn|Tiny cushion|Cat-bell collar")
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
   '<h2 class="name'+(a[0].length>14?' long':'')+'">'+a[0]+'</h2>'+
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
