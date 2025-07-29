import { Logo } from '@once-ui-system/core';

const person = {
  firstName: 'Muhammad Rizky',
  lastName: 'Aulia Ramadhan',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Student',
  avatar: '/images/avatar.jpg',
  email: 'rzky.dev.id@gmail.com',
  location: 'Asia/Jakarta', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English', 'Bahasa'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      {/* I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering. */}
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/rzkydev',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    name: 'Threads',
    icon: 'threads',
    link: 'https://www.threads.com',
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Business Administration Student</>,
  featured: {
    display: true,
    title: (
      <>
        Currently Learning:{' '}
        <Logo
          icon="https://cdn.qwiklabs.com/X46FrQX4iLxHW5MxL8jICvgZM0evMEKscCeQO%2BazGdo%3D"
          size="xs"
          style={{
            display: 'inline-flex',
            marginLeft: '0.50em',
            marginRight: '0.10em',
            alignItems: 'center',
            middle: 'height',
            height: '1em',
            width: 'auto',
          }}
        />
        <strong className="ml-4">Google Cloud Skill Boost</strong>
      </>
    ),
    href: 'https://www.cloudskillsboost.google/public_profiles/756c1e77-551a-4abc-b8f4-9a72ffcd8bb7',
  },
  subline: (
    <>
      I'm Rizky, a student at{' '}
      <Logo
        icon="/trademarks/iwu.svg"
        style={{ display: 'inline-flex', top: '0.25em', marginRight: '0.25em' }}
      />
      International Women University.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Rizky is a Bandung-based Business Administration student with a passion
        for leveraging technology to solve complex business challenges. His
        focus spans business analysis, digital strategy, and data-driven
        decision-making.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'International Women University',
        description: <>Studying business administration.</>,
      },
      {
        name: 'SMK 45 Lembang',
        description: <>Studied hospitality.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'React',
        description: <>React Foundations for Next.js.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/certificates/react-foundations-certificate.webp',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
          // {
          //   src: '/images/projects/project-01/cover-03.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: 'Next.js',
        description: <>Next.js App Router Fundamentals.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/certificates/dashboard-app-certificate.webp',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Work',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
