/*
  Дані всіх проєктів студії FORM·A dsgn.
  Підключається одним рядком у index.html, projects.html і project.html:
    <script src="projects-data.js"></script>

  Як додати новий проєкт:
  1. Створи папку /projects/NN-назва-проєкту/ з фото (hero.webp + інші)
  2. Додай новий об'єкт У КІНЕЦЬ масиву PROJECTS нижче (скопіюй існуючий і зміни поля) —
     завжди дописуй ПІСЛЯ останнього проєкту, ніколи не вставляй у середину.
  3. Нічого більше правити не треба — сайт сам покаже найновіший (останній у файлі)
     проєкт першим на головній і в галереї; project.html теж врахує цей порядок
     у навігації "Next project".

  Поля:
  - id            унікальний код проєкту, використовується в посиланні project.html?id=...
  - title         назва проєкту
  - category      'private' | 'commercial' | 'architecture'
  - year          рік
  - location      місто
  - folder        шлях до папки з фото цього проєкту (з кінцевим "/")
  - hero          назва файлу hero-фото (лежить у folder)
  - photos        масив фото галереї (у порядку показу), кожне: {file} або {file, alt}
                  (alt необов'язковий — якщо не вказати, підставиться назва проєкту)
  - descriptions  один або кілька текстових блоків. afterPhoto: 0 = одразу під hero,
                  afterPhoto: N = показати після N-го фото галереї

  ВАЖЛИВО: кожен об'єкт-проєкт у масиві PROJECTS має закінчуватись комою "," —
  крім останнього перед закриваючою дужкою "]". Якщо забути кому, сайт перестане
  працювати (JavaScript не завантажиться).
*/

const PROJECTS = [
  {
    id: '01',
    title: 'NN Dental',
    category: 'commercial',
    year: '2021',
    location: 'Kyiv',
    folder: 'projects/01-nn-dental-clinic/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp', alt: 'NN Dental Clinic — reception' },
      { file: '02.webp', alt: 'NN Dental Clinic — corridor' },
      { file: '03.webp', alt: 'NN Dental Clinic — treatment room' },
      { file: '04.webp', alt: 'NN Dental Clinic — treatment room detail' },
      { file: '05.webp', alt: 'NN Dental Clinic — equipment' },
      { file: '06.webp', alt: 'NN Dental Clinic — wall art detail' },
      { file: '07.webp', alt: 'NN Dental Clinic — room 2' },
      { file: '08.webp', alt: 'NN Dental Clinic — sterilization area' }
    ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A contemporary healthcare interior that completely breaks the stereotype of the "cold, clinical" medical facility. At its core is a fusion of flawless functionality and an atmosphere of premium calm one that eases patient tension from the very first moment.'
      },
      {
        afterPhoto: 3,
        text: 'The interior follows a modern minimalist approach with subtle zen influences: graphite and light grey walls, large-format marble, warm natural wood and matte black accents combine into a restrained, refined palette with no trace of "clinical" coldness.'
      }
    ]
  },
  {
    id: '02',
    title: 'HOUSE OS-280',
    category: 'private',
    year: '2021',
    location: 'Kyiv',
    folder: 'projects/02-house-os-280/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' },
      { file: '17.webp' }
    ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 280 m² private residence where classical architecture enters into dialogue with a contemporary interior. Ionic columns and moulding in the living room coexist with minimalist furniture forms and a contrast of warm wood against cold stone. Each private space in the house carries its own character, from the restrained master bedroom to a teenager\'s  room with a pop-art graffiti wall. Yet the whole house stays within a shared system of quality materials and considered lighting.'
      },
      {
        afterPhoto: 3,
        text: 'The base palette stays restrained: graphite, light concrete, natural wood. Against this backdrop, accent materials speak boldly: cognac leather armchairs and sofa, terracotta velvet bedheads, copper-and-turquoise pendant lights shaped like boulders in the study. Marble inlays, plush rugs and live plants add tactility and warmth. The contrast between public zones (the column-lined living room) and private rooms reveals the layered character of the house.'
      }
    ]
  },
  {
    id: '03',
    title: 'H21 FIT HOME',
    category: 'architecture',
    year: '2021',
    location: 'Kyiv',
    folder: 'projects/03-h21-fit-home/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' },
      { file: '17.webp' },
      { file: '18.webp' },
      { file: '19.webp' },
      { file: '20.webp' },
      { file: '21.webp' },
      { file: '22.webp' },
      { file: '23.webp' }
    ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 240 m² private house designed for a client with an active sports lifestyle. The home features a full-scale gym as a dedicated functional zone, not an addition to the living space. The house\'s architecture plays with volumes: a cantilevered wood roof and floor-to-ceiling glazing. A pool with a wood deck and a covered lounge area extend the house outward into the garden.'
      },
      {
        afterPhoto: 3,
        text: 'The interior stays in a restrained graphite-and-white palette warmed by wood accents: a living room with a fireplace and a marble kitchen island, a bedroom with a black marble bedhead and velvet textiles, a bathroom pairing concrete, marble and black fixtures. The home gym is the project\'s centerpiece and deliberately contrasts with the rest of the interior: warm orange lighting, a soft tatami platform, a mirrored wall and panoramic windows turn training into part of the everyday ritual rather than a separate "sports" room.'
      }
    ]
  },
  {
    id: '04',
    title: 'BH Pumpkin',
    category: 'private',
    year: '2021',
    location: 'Kyiv',
    folder: 'projects/04-B21-pumpkin/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' }
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'Pumpkin, a 161 m² two-storey private house. The project\'s name points to the warm, cozy mood of the interior: natural materials, soft lighting and seasonal touches (like the pumpkins on the dining table in one of the shots) create a home that feels genuinely lived in.'
      },
      {
        afterPhoto: 3,
        text: 'The house\'s palette moves between dark and light wood, graphite kitchen fronts and warm textiles. The kitchen is finished in deep graphite with a marble island and hidden lighting, the living room is anchored by a sculptural olive-green sofa and graphic black-and-white art in the hallway. The bedrooms carry different moods: one rests on dark wood paneling with focused spot lighting, the other, lighter one, gets a green throw, star-shaped fairy lights and a more intimate, homey tone. The bathroom is finished in terrazzo-like plaster with black fixtures and a double vanity, rounding off the calm, tactile atmosphere of the whole house.'
      }
    ]
  },
  {
    id: '05',
    title: 'LX residence',
    category: 'private',
    year: '2021',
    location: 'UAE',
    folder: 'projects/05-LX-residence/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' }      
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 400 m² private house. The project is built on the contrast of deep black, dark walnut wood and warm bronze, reinforced by a sculptural marble floor pattern and massive handcrafted brass fixtures. This is a residence where every detail, from the agate-inlay door handle to collectible sculptures, works toward the feel of a high-end private club.'
      },
      {
        afterPhoto: 4,
        text: 'A double-height hall with marble stairs, potted bamboo and a bronze sculpture on a pedestal sets the tone for the whole house: here architecture and decor carry equal weight. The dining room brings together dark walnut veneer, brass accents and a contrasting black-and-white rug beneath a massive mesh chandelier, while the kitchen shifts into an almost theatrical register: a black wall with baroque relief, a dramatic stone countertop and brass moldings. The entrance greets guests with a heavy walnut door featuring an inlaid stone handle and a sculptural wall composition of metallic "stones." The overall palette rests on a black-and-bronze duet with measured warm wood accents, giving the interior the feel of a closed, premium space considered down to the smallest detail.'
      }
    ]
  },
  {
    id: '06',
    title: 'gladiator',
    category: 'private',
    year: '2022',
    location: 'Kyiv',
    folder: 'projects/06-gladiator/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' },
      { file: '17.webp' },
      { file: '18.webp' },
      { file: '19.webp' },
      { file: '20.webp' },
      { file: '21.webp' },
      { file: '22.webp' }       
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 190 m² private house. The project brings several contrasting moods together under one roof: the restrained graphite-black tone of the adult living and private areas, and the warm, almost fairy-tale nook of the kids\' room. It\'s a house with room for both a strict minimalist aesthetic and a soft, playful space.'
      },
      {
        afterPhoto: 4,
        text: 'The main volume of the house stays in a deep graphite-black palette: a living room with a dark wood TV wall, a kitchen fully finished in black matte fronts with backlit shelving, a staircase with floating wood treads and a sculpture placed alongside it. The bedroom and dressing room continue the same restrained, near-monochrome mood, while the bathrooms play on the contrast of terracotta-toned marble and white stone against black fixtures.'
      },
      {
        afterPhoto: 13,
        text: 'The office stands out as a statement of its own: the wall features a street-art mural of a classical sculptural head reimagined in a graffiti style, giving the interior a sharp, contemporary edge. The kids\' room, by contrast, breaks completely from the graphite palette: a rounded nook, warm string lights, a hanging swing chair and soft pastel tones create a cozy, storybook corner for a child.'
      }
    ]
  },
  {
    id: '07',
    title: 'studio 5',
    category: 'commercial',
    year: '2022',
    location: 'Kyiv',
    folder: 'projects/07-studio-5/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' }      
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A tailoring and clothing atelier. A compact commercial space designed more like an atmospheric lounge than a workroom: a warm sandy-beige palette, a sculptural black mannequin figure and armfuls of dried pampas grass immediately set the tone for a personal, near-couture client experience.'
      },
      {
        afterPhoto: 2,
        text: 'The interior rests on the contrast between matte warm surfaces and polished bronze metal: a wavy mirrored wall panel, a backlit brass console and round metal sconces reflect light and lend the space a sense of ease. A pendant composition of illuminated rings and dried grasses above the waiting area becomes the main focal point and an obvious photo spot for clients. Woven macramé wall art, potted grasses and rounded poufs create a soft, tactile atmosphere, while a round black-and-white graphic rug keeps the space from feeling overly soft, adding a note of precision. Altogether, the design works toward the feel of an intimate, stylish place where form and texture tell the brand\'s story before a client sees the first sketch of a garment..'
      }
    ]
  },
  {
    id: '08',
    title: 'hod gym',
    category: 'private',
    year: '2022',
    location: 'Kyiv',
    folder: 'projects/08-hod-gym/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' }      
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A private training room. A compact fitness space built on the contrast between professional equipment and a warm, almost hotel-like interior: a slatted wood ceiling, panoramic glazing overlooking greenery and light stone flooring take away the usual coldness of a gym and make it feel like part of the living space.'
      },
      {
        afterPhoto: 2,
        text: 'Wood carries the entire mood: a slatted ceiling with hidden spot lighting, wood columns and panels set a warm, muted tone against which the black metal equipment (a power rack, machines, a dumbbell stand) reads as a sculptural accent in its own right. Panoramic sliding glass doors open onto greenery just outside, turning a workout into something close to training outdoors. Light floor tiles and warm leather upholstery on the machines soften the equipment\'s industrial edge, while considered spot lighting brings out the texture of wood and metal without harshness. The result is a private gym that reads more like part of a spa or boutique hotel than a technical room.'
      }
    ]
  },
  {
    id: '09',
    title: 'milenium',
    category: 'commercial',
    year: '2023',
    location: 'Kyiv',
    folder: 'projects/09-milenium/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' }       
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A small café. A compact commercial space built around a rich green as the core brand color: it runs through the bar counter, the walls, and even the restroom, tying every zone together in one consistent mood. The green here works both as a brand identity and as a tool for a cozy, slightly intimate café atmosphere.'
      },
      {
        afterPhoto: 4,
        text: 'The main area rests on the contrast between warm light wood, white subway tile and emerald-green tile on the bar counter. A metal frame with glass shelving and hanging planters marks the visual boundary between the bar and the seating area while staying light and see-through. The waiting or checkout zone takes on a bolder contrast: dark green walls, a display shelving unit for retail products and a round terracotta table give the space character and a slightly curated, gallery-like feel. The restroom continues the brand\'s green palette, now expressed through ceramic tile and graphic wallpaper, showing that the brand color was carried through to the last room. Altogether, the interior works toward the feel of a small, stylish spot people want to return to precisely because of its recognizable, consistent aesthetic.'
      }
    ]
  },
  {
    id: '10',
    title: 'dream',
    category: 'commercial',
    year: '2023',
    location: 'Kyiv',
    folder: 'projects/10-dream/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' },
      { file: '17.webp' },
      { file: '18.webp' },
      { file: '19.webp' }     
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 360 m² beauty salon. The common zone, reception and corridors, is built on the contrast between a warm powder-beige space and bold neon accents: illuminated lettering on the mirrors, wavy light lines on the ceiling and sculpted corridor curves create an almost scenographic effect. Burgundy velvet poufs, dried pampas grass and branches with red blossoms add natural texture, while a marble vanity with a backlit oval mirror and colored glass inserts turn even the restroom\'s utilitarian function into part of the brand\'s overall emotional experience.'
      },
      {
        afterPhoto: 9,
        text: 'The treatment rooms continue the salon\'s overall aesthetic but shift into a more functional, clinical register. A light wood palette, glass shelving displaying cosmetic products and ring-shaped LED fixtures above each treatment chair create the soft, even lighting procedures require, while built-in wash basins and marble countertops keep the same level of premium finish found in the waiting areas. Each room is designed as a self-contained, calm space: rounded chair forms, hidden baseboard lighting and minimal decorative elements let the client focus on the treatment itself rather than the interior.'
      },
      {
        afterPhoto: 13,
        text: 'The spa zone shifts into an even deeper, muted register: warm wood, dark marble and sculptural fabric ceiling fixtures resembling a cloud or coral reef create an almost meditative atmosphere. The massage rooms, both single and double, are finished in a terracotta-brown palette with backlit marble panels, while a circular mirror with contour lighting behind the treatment bed\'s headrest serves as a calm focal point. The waiting area in front of the spa is furnished with deep burgundy velvet armchairs and dried grasses in tall vases, continuing the salon\'s overall palette in its most intimate, darkest expression. Here light, material and form work together toward a single feeling: full immersion in calm, away from the everyday rhythm of the day.'
      }
    ]
  },
  {
    id: '11',
    title: 'jangel m40',
    category: 'private',
    year: '2023',
    location: 'Kyiv',
    folder: 'projects/11-jangel-m40/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' }  
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 40 m² apartment. A compact space built on the interplay of minimalist white surfaces, light warm wood and terrazzo. The kitchen and dining area are combined into one zone with slim black chairs and a round mirror on the wall instead of conventional decor, while the living room rests on a neutral grey sofa with bright orange and white side tables as the space\'s single color accent. The bathroom is finished in warm terracotta terrazzo with wood fronts and glass blocks in place of a conventional window, letting in natural light without sacrificing privacy. Overall, the interior shows that even a small footprint can feel spacious through a light palette, restrained furniture forms and carefully placed pops of color.'
      }
    ]
  },
  {
    id: '12',
    title: 'slova b110',
    category: 'private',
    year: '2024',
    location: 'Bratislava',
    folder: 'projects/12-slova-b110/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' }  
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 110 m² apartment. The space is built on a warm duet of light and dark wood, complemented by terracotta and brown accents in the furniture textiles. The kitchen, living and dining areas are combined into one open zone: cinnamon-toned bar stools, a sculptural round wall composition and contemporary artwork featuring a striped figure create a light gallery-like mood without excessive formality. The bedroom continues the same wood palette but in a more restrained, almost spa-like register: hidden contour lighting around the ceiling perimeter, a textured headboard panel and symmetrical lamps add coziness. The corridors and passageways tie all the rooms together: warm wood flooring, accent art pieces on the walls and soft side lighting make even the transitional spaces part of one considered story of the home.'
      }
    ]
  },
  {
    id: '13',
    title: 'STONEVEIN',
    category: 'private',
    year: '2024',
    location: 'Kyiv',
    folder: 'projects/13-stonevein/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' }         
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 150 m² townhouse. The project is built on a warm duet of wood paneling and natural stone, with a wood-burning fireplace as the living room\'s emotional center. A sculptural vertical accent of raw, textured stone runs through several levels of the house, from the living room to the staircase and bedroom, tying the spaces together with one consistent material motif. The open kitchen-living room, anchored by a large corner sofa and dark brass light fixtures, flows into a wood-paneled passage with a mirrored wall that visually expands the compact hallway.'
      },
      {
        afterPhoto: 7,
        text: 'The private areas of the house continue the same warm wood palette but in a more restrained register: bedrooms with soft velvet headboards, hidden contour lighting and the same stone accent carried up from the ground floor. The bathrooms take on a bolder contrast, finished in dark marble with bronze veining and warm-lit niches, giving even the utilitarian rooms a sense of considered, almost hotel-like luxury.'
      }
    ]
  },
  {
    id: '14',
    title: 'nn house',
    category: 'private',
    year: '2025',
    location: 'Kyiv',
    folder: 'projects/14-nn-house/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' }         
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'An 85 m² apartment. The space is finished in a restrained graphite-and-wood palette with tall panoramic windows and a city view that becomes a genuine part of the interior. The living room and kitchen-dining area are combined into one open zone: a mirrored wall behind the kitchen visually extends the space, and a dark woven rug with wood paneling adds an evening, muted atmosphere.'
      },
      {
        afterPhoto: 6,
        text: 'The bedroom rests on a calm duet of light wood and a glass-fronted walk-in closet with hidden lighting, while the bathroom takes a bold contrast into deep matte black, almost free of decoration, focusing instead on the form and texture of the stone. The kids\' room is the only place that breaks from the home\'s restrained palette: mustard-and-terracotta accents, an illustrated wall piece and a soft corner sofa create a warm, playful nook within an otherwise adult, understated interior.'
      }
    ]
  },
  {
    id: '15',
    title: 'k25 terracota',
    category: 'private',
    year: '2025',
    location: 'Kyiv',
    folder: 'projects/15-k25-terracota/',
    hero: 'hero.webp',
    photos: [
      { file: '01.webp' },
      { file: '02.webp' },
      { file: '03.webp' },
      { file: '04.webp' },
      { file: '05.webp' },
      { file: '06.webp' },
      { file: '07.webp' },
      { file: '08.webp' },
      { file: '09.webp' },
      { file: '10.webp' },
      { file: '11.webp' },
      { file: '12.webp' },
      { file: '13.webp' },
      { file: '14.webp' },
      { file: '15.webp' },
      { file: '16.webp' },
      { file: '17.webp' },
      { file: '18.webp' },
      { file: '19.webp' },
      { file: '20.webp' },
      { file: '21.webp' },
      { file: '22.webp' },
      { file: '23.webp' },
      { file: '24.webp' }               
     ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A two-story house of 120 sq m, where a warm color palette and textured materials create a calm, home-like environment for a family. The layout combines the living room, kitchen, and dining area into a single shared space, while the private zones, bedrooms, bathrooms, and the children\'s room, keep a more intimate character. A recurring element throughout is the combination of warm wood, natural stone, and weathered metal finishes, giving the interior a sense of warmth without excessive decoration.'
      },
      {
        afterPhoto: 8,
        text: 'The living room is organized around a fireplace clad in a weathered metal panel, with a firewood niche and open shelving with ceramics nearby. The kitchen continues the material story: a terracotta countertop, walnut toned facades, and a sculptural chandelier above the island.'
      },
      {
        afterPhoto: 16,
        text: 'The bathrooms use terracotta tile, stone, and concrete, with a backlit round mirror adding sculptural detail. The main bathroom tub sits beneath an angled window, dark marble balanced by soft textiles. The children\'s room is lighter in tone, with beige finishes, a climbing wall with a ball pit, and closed storage for toys.'
      }
    ]
  }

  // Наступні проєкти додавай сюди тим самим блоком, наприклад:
  // ,{
  //   id: '03',
  //   title: 'PV59 — Living',
  //   category: 'private',
  //   year: '2024',
  //   location: 'Germany',
  //   folder: 'projects/03-pv59-living/',
  //   hero: 'hero.webp',
  //   photos: [ ... ],
  //   descriptions: [ ... ]
  // }
];

/* PROJECTS_DISPLAY — той самий список, але у зворотному порядку: найновіший
   (останній дописаний у масив вище) показується першим. Саме цей масив
   використовують index.html, projects.html і project.html для показу порядку
   й навігації "Next project" — сам файл PROJECTS редагувати простіше (завжди
   дописуєш у кінець), а порядок показу рахується автоматично. */
const PROJECTS_DISPLAY = PROJECTS.slice().reverse();
