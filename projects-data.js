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
    title: 'NN Dental Clinic',
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
        text: 'A contemporary healthcare interior that completely breaks the stereotype of the "cold, clinical" medical facility. At its core is a fusion of flawless functionality and an atmosphere of premium calm — one that eases patient tension from the very first moment.'
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
      { file: '01.webp', },
      { file: '02.webp', },
      { file: '03.webp', },
      { file: '04.webp', },
      { file: '05.webp', },
      { file: '06.webp', },
      { file: '07.webp', },
      { file: '08.webp', },
      { file: '09.webp', },
      { file: '10.webp', },
      { file: '11.webp', },
      { file: '12.webp', },
      { file: '13.webp', },
      { file: '14.webp', },
      { file: '15.webp', },
      { file: '16.webp', },
      { file: '17.webp', }
    ],
    descriptions: [
      {
        afterPhoto: 0,
        text: 'A 280 m² private residence where classical architecture enters into dialogue with a contemporary interior. Ionic columns and moulding in the living room coexist with minimalist furniture forms and a contrast of warm wood against cold stone. Each private space in the house carries its own character — from the restrained master bedroom to a teenager's room with a pop-art graffiti wall — while staying within a shared system of quality materials and considered lighting.'
      },
      {
        afterPhoto: 3,
        text: 'The base palette stays restrained - graphite, light concrete, natural wood - against which accent materials speak boldly: cognac leather armchairs and sofa, terracotta velvet bedheads, copper-and-turquoise pendant lights shaped like boulders in the study. Marble inlays, plush rugs and live plants add tactility and warmth, while the contrast between public zones (the column-lined living room) and private rooms reveals the layered character of the house.'
      }
    ]
  }

  // Наступні проєкти додавай сюди тим самим блоком, наприклад:
  // {
  //   id: '02',
  //   title: 'PV59 — Living',
  //   category: 'private',
  //   year: '2024',
  //   location: 'Germany',
  //   folder: 'projects/02-pv59-living/',
  //   hero: 'hero.webp',
  //   photos: [ ... ],
  //   descriptions: [ ... ]
  // },
];

/* PROJECTS_DISPLAY — той самий список, але у зворотному порядку: найновіший
   (останній дописаний у масив вище) показується першим. Саме цей масив
   використовують index.html, projects.html і project.html для показу порядку
   й навігації "Next project" — сам файл PROJECTS редагувати простіше (завжди
   дописуєш у кінець), а порядок показу рахується автоматично. */
const PROJECTS_DISPLAY = PROJECTS.slice().reverse();
