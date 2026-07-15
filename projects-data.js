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
      { file: '17.webp' }
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
