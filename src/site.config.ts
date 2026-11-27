// One place for every link and handle on the site.
// Leave a value empty ('') and the site hides whatever depends on it.

export const site = {
  name: 'Rod Borges',
  role: 'Account Director',
  title: 'Rod Borges, Account Director',
  description:
    'Account director who brings AI into the client relationship and turns it into growth. Toronto.',
  location: 'Toronto',

  // Contact
  // Email is split so the full address never appears in the page code (keeps spam bots out).
  emailUser: 'roipborges',
  emailDomain: 'gmail.com',
  calendar: 'https://calendar.app.google/e2aZ27q2ExZQdxpJ6',
  linkedin: 'https://www.linkedin.com/in/rodrigoborgess/',
  cv: '/rod-borges-resume.pdf',

  // Writing: Substack "AI Management"
  substack: 'https://aimgmt.substack.com',
  substackFeed: 'https://aimgmt.substack.com/feed',

  // Reading: your public Goodreads profile, linked from the "Recently read"
  // section. Find your numeric user ID in your profile URL:
  // goodreads.com/user/show/<ID>-your-name
  goodreadsUserId: '928704',

  // Recently read: the books you've read, newest first. Goodreads doesn't
  // expose this in a reliable public order without signing in, so keep this
  // list current yourself. `link` should point to the book's Goodreads page;
  // `cover` is optional (leave empty to hide the image). Shows as a lateral
  // scroll carousel on Home. Example shape:
  // { title: 'Book title', author: 'Author name', link: 'https://www.goodreads.com/book/show/...', cover: '' }
  // Capped at 15: when adding a new book past that, drop the last (oldest) entry.
  recentlyRead: [
    {
      title: "More Everything Forever: AI Overlords, Space Empires, and Silicon Valley's Crusade to Control the Fate of Humanity",
      author: 'Adam Becker',
      link: 'https://www.goodreads.com/book/show/212987932-more-everything-forever',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1719003402i/212987932.jpg',
    },
    {
      title: 'Supremacy: AI, ChatGPT, and the Race That Will Change the World',
      author: 'Parmy Olson',
      link: 'https://www.goodreads.com/book/show/199809440-supremacy',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1711570682i/199809440.jpg',
    },
    {
      title: 'Cinder (The Lunar Chronicles, #1)',
      author: 'Marissa Meyer',
      link: 'https://www.goodreads.com/book/show/36381037-cinder',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1507557775i/36381037.jpg',
    },
    {
      title: 'In the Distance',
      author: 'Hernán Diaz',
      link: 'https://www.goodreads.com/book/show/34381330-in-the-distance',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1489155501i/34381330.jpg',
    },
    {
      title: 'The New Age of Sexism: How AI and Emerging Technologies Are Reinventing Misogyny',
      author: 'Laura Bates',
      link: 'https://www.goodreads.com/book/show/239841323-the-new-age-of-sexism',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1754649518i/239841323.jpg',
    },
    {
      title: "How to Watch Soccer Like a Genius: What Architects, Stuntwomen, Paleoanthropologists, and Computer Scientists Reveal About the World's Game",
      author: 'Nick Greene',
      link: 'https://www.goodreads.com/book/show/239923232-how-to-watch-soccer-like-a-genius',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1754702525i/239923232.jpg',
    },
    {
      title: 'Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy',
      author: "Cathy O'Neil",
      link: 'https://www.goodreads.com/book/show/28186015-weapons-of-math-destruction',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1456091964i/28186015.jpg',
    },
    {
      title: 'The AI Con: How to Fight Big Tech\'s Hype and Create the Future We Want',
      author: 'Emily M. Bender, Alex Hanna',
      link: 'https://www.goodreads.com/book/show/217432753-the-ai-con',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1737124238i/217432753.jpg',
    },
    {
      title: "Wednesday's Child: Stories",
      author: 'Yiyun Li',
      link: 'https://www.goodreads.com/book/show/65215744-wednesday-s-child',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1674441808i/65215744.jpg',
    },
    {
      title: 'Vida doçura',
      author: 'Natércia Pontes',
      link: 'https://www.goodreads.com/book/show/247110679-vida-do-ura',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1769402910i/247110679.jpg',
    },
    {
      title: 'Annie Bot',
      author: 'Sierra Greer',
      link: 'https://www.goodreads.com/book/show/156023123-annie-bot',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1690812484i/156023123.jpg',
    },
    {
      title: 'Strangers: A Memoir of Marriage',
      author: 'Belle Burden',
      link: 'https://www.goodreads.com/book/show/231108670-strangers',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1749266330i/231108670.jpg',
    },
    {
      title: 'Erasure',
      author: 'Percival Everett',
      link: 'https://www.goodreads.com/book/show/355862.Erasure',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1708274015i/355862.jpg',
    },
    {
      title: 'The Friend',
      author: 'Sigrid Nunez',
      link: 'https://www.goodreads.com/book/show/40164365-the-friend',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1544364669i/40164365.jpg',
    },
    {
      title: 'A Swim in a Pond in the Rain',
      author: 'George Saunders',
      link: 'https://www.goodreads.com/book/show/53487237-a-swim-in-a-pond-in-the-rain',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1627489209i/53487237.jpg',
    },
  ] as { title: string; author: string; link: string; cover?: string }[],

  // Now page: supporting Movember this year
  movember: 'https://ca.movember.com/donate/details?memberId=15595714#amount',

  // Now page: Spin Partner Platform demo video
  spinPartnerPlatformDemo: 'https://youtu.be/_yUSSG6K8F0?si=KtZ1qgNIcoattlaW',

  // Now page: marketing platform demo video
  marketingPlatformDemo: 'https://youtu.be/Dvs4FtU9thA?si=TldnO4tpsN4RR27P',

  // Extra outbound links for specific Work stories, keyed by the story's
  // `linksKey` frontmatter field. Rendered as buttons under the story fields.
  storyLinks: {
    chronicles: [
      { label: 'Read the Chronicles', href: 'https://lnkd.in/eucq9tgw' },
      { label: 'Get it on Kindle', href: 'https://www.amazon.ca/dp/B0HMMKHQZM' },
    ],
    space: [
      { label: 'View the service map', href: 'https://rodrigolpborges.notion.site/spacey-invoice-financing?source=copy_link' },
    ],
    rodsUniverse: [
      { label: 'Visit Rod\'s Universe', href: 'https://resume.rodrigolpborges.com/' },
    ],
    chewyGranola: [
      { label: 'Try Chewy Granola', href: 'https://chewy-granola.vercel.app/' },
    ],
    terracap: [
      { label: 'Watch the TV spot', href: 'https://cargocollective.com/rodrigoborges/Terracap' },
    ],
    uniceubSigma: [
      { label: 'Watch the university\'s spot', href: 'https://cargocollective.com/rodrigoborges/UniCEUB' },
      { label: 'Watch the school\'s spot', href: 'https://cargocollective.com/rodrigoborges/Centro-Educacional-Sigma' },
    ],
    carrefour: [
      { label: 'View the direct mail work', href: 'https://cargocollective.com/rodrigoborges/Malas-diretas' },
    ],
  } as Record<string, { label: string; href: string }[]>,
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/now/', label: 'Now' },
  { href: '/contact/', label: 'Contact' },
];
