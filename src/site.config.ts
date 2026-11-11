// One place for every link and handle on the site.
// Leave a value empty ('') and the site hides whatever depends on it.

export const site = {
  name: 'Rodrigo Borges',
  role: 'Account Director',
  title: 'Rodrigo Borges, Account Director',
  description:
    'Account director who brings AI into the client relationship and turns it into growth. Toronto.',
  location: 'Toronto',

  // Contact
  // Email is split so the full address never appears in the page code (keeps spam bots out).
  emailUser: 'roipborges',
  emailDomain: 'gmail.com',
  calendar: 'https://calendar.app.google/e2aZ27q2ExZQdxpJ6',
  linkedin: 'https://www.linkedin.com/in/rodrigoborgess/',
  cv: '', // e.g. '/rodrigo-borges-cv.pdf' (put the file in /public)

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
  recentlyRead: [
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
    {
      title: 'Small Things Like These',
      author: 'Claire Keegan',
      link: 'https://www.goodreads.com/book/show/58662236-small-things-like-these',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1734631773i/58662236.jpg',
    },
    {
      title: 'Sing to It: New Stories',
      author: 'Amy Hempel',
      link: 'https://www.goodreads.com/book/show/40639315',
      cover: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1551618476i/40639315.jpg',
    },
  ] as { title: string; author: string; link: string; cover?: string }[],

  // Now page: supporting Movember this year
  movember: 'https://ca.movember.com/donate/details?memberId=15595714#amount',

  // Now page: Spin Partner Platform demo video
  spinPartnerPlatformDemo: 'https://youtu.be/_yUSSG6K8F0?si=KtZ1qgNIcoattlaW',

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
  } as Record<string, { label: string; href: string }[]>,
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/now/', label: 'Now' },
  { href: '/contact/', label: 'Contact' },
];
