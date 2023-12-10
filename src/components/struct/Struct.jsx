const suicideSquadCharacters = [
    {
      id_Hero: 0,
      name: new Map([
        ["en", "Harley Quinn"],
        ["ru", "Харли Квинн"],
      ]),
      yearsOfLife: new Map([
        ["en", "1992 - Present"],
        ["ru", "1992 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "A supervillainess, later an antiheroine in the DC Comics universe, who was a natural-born gymnast"],
        ["ru", "Суперзлодейка, позже антигероиня вселенной DC Comics, котороя была прирождённой гимансткой"],
      ]),
      biography: [
        { id: 1, year: 1992, event: new Map([
          ["en", "First appearance in Batman: The Animated Series"],
          ["ru", "Первое появление в мультсериале 'Бэтмен: Анимационные приключения'"],
        ]) },
        { id: 2, year: 1999, event: new Map([
          ["en", "First appearance in the comic book series"],
          ["ru", "Первое появление в комиксах"],
        ]) },
        { id: 3, year: 2016, event: new Map([
          ["en", "Portrayed by Margot Robbie in the Suicide Squad movie"],
          ["ru", "Сыграла Марго Робби в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 4, year: 2019, event: new Map([
          ["en", "Character featured in Joker: Madness for Two"],
          ["ru", "Персонаж представлен в 'Джокер: Безумие на двоих'"],
        ]) },
        { id: 5, year: 2020, event: new Map([
          ["en", "Portrayed by Margot Robbie in the Birds of Prey movie"],
          ["ru", "Сыграла Марго Робби в фильме 'Хищные птицы'"],
        ]) },
        { id: 6, year: 2021, event: new Map([
          ["en", "Character featured in The Suicide Squad: Mission Blowout"],
          ["ru", "Персонаж представлен в 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Harley Quinn/HarleyMain.jpg",
      photoGallery: [
        "/photos/Harley Quinn/Harley1.jpg",
        "/photos/Harley Quinn/Harley2.jpg",
        "/photos/Harley Quinn/Harley3.jpg",
        "/photos/Harley Quinn/Harley4.jpg",
        "/photos/Harley Quinn/Harley5.jpg"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=jOcyyMBtv6M",
    },
    {
      id_Hero: 1,
      name: new Map([
        ["en", "Rick Flag"],
        ["ru", "Рик Флэг"],
      ]),
      yearsOfLife: new Map([
        ["en", "1957 - Present"],
        ["ru", "1957 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "An elite soldier and government agent working in Task Force 'X'"],
        ["ru", "Элитный солдат и правительственный агент, работающий в Оперативной Группе 'Х'"],
      ]),
      biography: [
        { id: 1, year: 1959, event: new Map([
          ["en", "First appearance in The Brave and the Bold #25"],
          ["ru", "Первое появление в комиксе 'Смелый и смелый #25'"],
        ]) },
        { id: 2, year: 2008, event: new Map([
          ["en", "Appears in Justice League: The New Frontier"],
          ["ru", "Появление в 'Лига Справедливости: Новая граница'"],
        ]) },
        { id: 3, year: 2016, event: new Map([
          ["en", "Portrayed by Joel Kinnaman in the Suicide Squad movie"],
          ["ru", "Сыграл Джоэлом Киннаманом в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 4, year: 2021, event: new Map([
          ["en", "Portrayed by Joel Kinnaman in The Suicide Squad movie: Mission Blowout"],
          ["ru", "Сыграл Джоэлом Киннаманом в фильме 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Rick Flag/RF1.webp",
      photoGallery: [
        "/photos/Rick Flag/RF1.webp",
        "/photos/Rick Flag/RF2.png",
        "/photos/Rick Flag/RF3.png",
        "/photos/Rick Flag/RF4.png",
        "/photos/Rick Flag/RF5.png"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=5I8I-Eplnh0",
    },
    {
      id_Hero: 2,
      name: new Map([
        ["en", "Katana"],
        ["ru", "Катана"],
      ]),
      yearsOfLife: new Map([
        ["en", "1978 - Present"],
        ["ru", "1978 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "A samurai warrior whose skill with a sword allows her to fight for justice as a superheroine"],
        ["ru", "Самурайский воин, чье мастерство владения мечом позволяет ей сражаться за справедливость в роли супергероини"],
      ]),
      biography: [
        { id: 1, year: 1983, event: new Map([
          ["en", "First appearance in The Brave and the Bold #200"],
          ["ru", "Первое появление в комиксе 'Смелый и смелый #200'"],
        ]) },
        { id: 2, year: 2008, event: new Map([
          ["en", "Appearance in 'Batman: The Brave and the Bold'"],
          ["ru", "Появление в 'Бэтмэн: Отвага и смелость'"],
        ]) },
        { id: 3, year: 2014, event: new Map([
          ["en", "Appearance in 'Arrow'"],
          ["ru", "Появление в 'Стрела'"],
        ]) },
        { id: 4, year: 2016, event: new Map([
          ["en", "Portrayed by Karen Fukuhara in the Suicide Squad movie"],
          ["ru", "Сыграла Карен Фукухара в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 5, year: 2021, event: new Map([
          ["en", "Portrayed by Karen Fukuhara in The Suicide Squad movie: Mission Blowout"],
          ["ru", "Сыграла Карен Фукухара в фильме 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Katana/Kat1.jpg",
      photoGallery: [
        "/photos/Katana/Kat1.jpg",
        "/photos/Katana/Kat2.jpg",
        "/photos/Katana/Kat3.jpg",
        "/photos/Katana/Kat4.jpg",
        "/photos/Katana/Kat5.jpg"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=FBEVoh5jS-8",
    },
    {
      id_Hero: 3,
      name: new Map([
        ["en", "Captain Boomerang"],
        ["ru", "Капитан Бумеранг"],
      ]),
      yearsOfLife: new Map([
        ["en", "1960 - Present"],
        ["ru", "1960 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "Captain Boomerang - the name of two supervillains appearing in American comic books"],
        ["ru", "Капитан Бумеранг - имя двух суперзлодеев, появившихся в американских комиксах"],
      ]),
      biography: [
        { id: 1, year: 1960, event: new Map([
          ["en", "First appearance in The Flash #117"],
          ["ru", "Первое появление в фильме 'Флэш' #117"],
        ]) },
        { id: 2, year: 2008, event: new Map([
          ["en", "Appears in Justice League: The New Frontier"],
          ["ru", "Появление в 'Бэтмэн: Отвага и смелость'"],
        ]) },
        { id: 3, year: 2014, event: new Map([
          ["en", "Appearance in 'Arrow'"],
          ["ru", "Appearance in 'Стрела'"],
        ]) },
        { id: 4, year: 2016, event: new Map([
          ["en", "Portrayed by Jai Courtney in the Suicide Squad movie"],
          ["ru", "Сыграл Джай Кортни в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 5, year: 2021, event: new Map([
          ["en", "Portrayed by Jai Courtney in The Suicide Squad movie: Mission Blowout"],
          ["ru", "Сыграл Джай Кортни в фильме 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Captain Boomerang/CB1.jpg",
      photoGallery: [
        "/photos/Captain Boomerang/CB1.jpg",
        "/photos/Captain Boomerang/CB2.jpg",
        "/photos/Captain Boomerang/CB3.jpg",
        "/photos/Captain Boomerang/CB4.jpg",
        "/photos/Captain Boomerang/CB5.jpg"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=vvla_94AVkQ",
    },
    {
      id_Hero: 4,
      name: new Map([
        ["en", "Joker"],
        ["ru", "Джокер"],
      ]),
      yearsOfLife: new Map([
        ["en", "1940 - Present"],
        ["ru", "1940 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "A supervillain from DC Comics, the main and arch-enemy of the superhero Batman"],
        ["ru", "Суперзлодей DC Comics, главный и заклятый враг супергероя Бэтмена"],
      ]),
      biography: [
        { id: 1, year: 1940, event: new Map([
          ["en", "First appearance in Batman #1"],
          ["ru", "Первое появление в фильме 'Бэтмэн' #1"],
        ]) },
        { id: 2, year: 2008, event: new Map([
          ["en", "Portrayed by Heath Ledger in The Dark Knight movie"],
          ["ru", "Сыграл Хитом Леджером в фильме 'Темный рыцарь'"],
        ]) },
        { id: 3, year: 2014, event: new Map([
          ["en", "Character introduced in the movie 'Gotham'"],
          ["ru", "Герой представлен в фильме 'Готем'"],
        ]) },
        { id: 4, year: 2016, event: new Map([
          ["en", "Live-action film debut in Suicide Squad"],
          ["ru", "Дебют в живом кино в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 5, year: 2019, event: new Map([
          ["en", "Character featured in Joker: Madness for Two"],
          ["ru", "Персонаж представлен в 'Джокер: Безумие на двоих'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Joker/Jok1.jpg",
      photoGallery: [
        "/photos/Joker/Jok1.jpg",
        "/photos/Joker/Jok2.jpg",
        "/photos/Joker/Jok3.jpg",
        "/photos/Joker/Jok4.jpg",
        "/photos/Joker/Jok5.jpg"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=Yh7KrVgtI6o",
    },
    {
      id_Hero: 5,
      name: new Map([
        ["en", "Diablo"],
        ["ru", "Диабло"],
      ]),
      yearsOfLife: new Map([
        ["en", "1986 - Present"],
        ["ru", "1986 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "Pyrokinetic - from childhood, capable of controlling fire and heat; his powers grew as he matured"],
        ["ru", "Пирокинетик - с детства способен управлять огнём и теплом, его силы росли по мере взросления"],
      ]),
      biography: [
        { id: 1, year: 2016, event: new Map([
          ["en", "Portrayed by Jay Hernandez in the Suicide Squad movie"],
          ["ru", "Сыграл Джей Хернандесом в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 2, year: 2021, event: new Map([
          ["en", "Character featured in The Suicide Squad movie: Mission Blowout"],
          ["ru", "Персонаж представлен в фильме 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Diablo/Di1.jpg",
      photoGallery: [
        "/photos/Diablo/Di1.jpg",
        "/photos/Diablo/Di2.jpg",
        "/photos/Diablo/Di3.jpg",
        "/photos/Diablo/Di4.jpg",
        "/photos/Diablo/Di5.jpg"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=LeBSN_g8_Dc",
    },
    {
      id_Hero: 6,
      name: new Map([
        ["en", "Deadshot"],
        ["ru", "Дэдшот"],
      ]),
      yearsOfLife: new Map([
        ["en", "1950 - Present"],
        ["ru", "1950 - Настоящее время"],
      ]),
      inf: new Map([
        ["en", "A character in the DC Comics universe, an enemy of Batman"],
        ["ru", "Персонаж вселенной DC Comics, враг Бэтмена"],
      ]),
      biography: [
        { id: 1, year: 1950, event: new Map([
          ["en", "First appearance in the comic book Batman #59"],
          ["ru", "Первое появление в комиксе Бэтмен #59"],
        ]) },
        { id: 2, year: 2016, event: new Map([
          ["en", "Portrayed by Will Smith in the Suicide Squad movie"],
          ["ru", "Сыграл Уилл Смит в фильме 'Отряд самоубийц'"],
        ]) },
        { id: 3, year: 2021, event: new Map([
          ["en", "Character featured in The Suicide Squad: Mission Blowout"],
          ["ru", "Персонаж представлен в фильме 'Отряд самоубийц: Миссия навылет'"],
        ]) },
      ],
      locationOnMap: new Map([
        ["en", "None"],
        ["ru", "Не известно"],
      ]),
      photo: "/photos/Dead Shot/DS1.jpg",
      photoGallery: [
        "/photos/Dead Shot/DS1.jpg",
        "/photos/Dead Shot/DS2.jpg",
        "/photos/Dead Shot/DS3.png",
        "/photos/Dead Shot/DS4.png",
        "/photos/Dead Shot/DS5.png"
      ],
      youtubeVideo: "https://www.youtube.com/watch?v=F2nJy2a5c7A",
    },
  ];
  export default suicideSquadCharacters;