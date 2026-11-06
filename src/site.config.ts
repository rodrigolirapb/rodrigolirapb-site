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
  email: 'roipborges@gmail.com',
  calendar: 'https://calendar.app.google/e2aZ27q2ExZQdxpJ6',
  linkedin: 'https://www.linkedin.com/in/rodrigoborgess/',
  cv: '', // e.g. '/rodrigo-borges-cv.pdf' (put the file in /public)

  // Writing: Substack "AI Management"
  substack: 'https://aimgmt.substack.com',
  substackFeed: 'https://aimgmt.substack.com/feed',

  // Reading: Goodreads. Find your numeric user ID in your profile URL:
  // goodreads.com/user/show/<ID>-your-name
  goodreadsUserId: '928704',
  goodreadsShelf: 'currently-reading',

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
