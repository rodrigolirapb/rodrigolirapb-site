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

  // Recently read: the last 5 books you've read, newest first. Goodreads
  // doesn't expose this in a reliable public order without signing in, so
  // keep this list current yourself. `link` should point to the book's
  // Goodreads page; `cover` is optional (leave empty to hide the image).
  // Fill in your real last 5 books here, newest first. Example shape:
  // { title: 'Book title', author: 'Author name', link: 'https://www.goodreads.com/book/show/...', cover: '' }
  recentlyRead: [
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
  ] as { title: string; author: string; link: string; cover?: string }[],

  // Personal writing
  cronicas: 'https://chronicles.rodrigolpborges.com',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/now/', label: 'Now' },
  { href: '/contact/', label: 'Contact' },
];
