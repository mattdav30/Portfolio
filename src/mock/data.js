import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Davenport | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio showcasing my current and past work.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Matthew Davenport',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpeg',
  paragraphOne:
    'Hi, my name is Matthew Davenport. My expertise lies in User Experience Design, this includes prototyping, wireframes, front-end design, research and general design. Apart from technical digital work, I have a keen interest working with others. I have experience in customer service, administration and general office duties.',
  paragraphTwo:
    'I have a general coding know which includes both programming and web developement in multiple languages. I am proficient in using standard CMS platforms such as Wordpress and Squarespace, the Adobe Suite, filming, video editing, designing and creating graphics, and creating digital content.',
  paragraphThree:
    'I also have experience growing large social media audiences and executing digital campaign strategies. I have experience in creating and sending email campaigns to over 1 Million individuals, and serving digital ads and content to similar audiences.',
  resume: 'https://www.linkedin.com/in/matthew-davenport-b536a210b/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-davenport-b536a210b/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mattdav30',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
