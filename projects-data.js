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
  - photos        масив фото галереї (у порядку показу), кожне: {file, alt}
  - descriptions  один або кілька текстових блоків. afterPhoto: 0 = одразу під hero,
                  afterPhoto: N = показати після N-го фото галереї
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
