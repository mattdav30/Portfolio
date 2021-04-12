import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matthew Davenport | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio showcasing my current and past work.', // e.g: Welcome to my website
  image: 'headshot.jpeg',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Matthew Davenport,',
  subtitle: 'designer and developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpeg',
  paragraphOne:
    'My expertise is in User Experience Design, including prototyping, wireframes, front-end design, research and general design.',
  paragraphTwo:
    'I am proficient in standard CMS platforms such as WordPress, Squarespace and the Adobe Suite.',
  paragraphThree:
    'I have broad experience in filming, video editing, designing, creating digital content and executing campaigns. In current and previous roles, I have executed multi-platform digital campaigns across social media, email and SMS. I have personally managed the distribution of over one-million emails, under tight deadlines and with multiple senders and variable data points.',
  resume: 'https://www.linkedin.com/in/matthew-davenport-b536a210b/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chat.png',
    title: 'Chat Application',
    info:
      'This is a small chat application project I have worked on which used React JS to talk to other people in real time.',
    info2:
      'As I use this personally, please contact me to learn more. Otherwise head to my Github to check out the code for it.',
    url: 'https://chattingapplication.netlify.app/',
    repo: 'https://github.com/mattdav30/chat_application', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'toomuchpower.png',
    title: 'Website Example',
    info: 'Campaign website created during an election.',
    info2: '',
    url: 'https://www.toomuchpower.com.au/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scarr.png',
    title: 'Website Example',
    info:
      'I have designed and redesigned a number of websites through the use of Squarespace and Wordpress. Another example of these websites can be seen here.',
    info2: '',
    url: 'https://paulscarr.com.au',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lnp.png',
    title: 'Website Example',
    info:
      'I have designed and redesigned a number of websites through the use of Squarespace and Wordpress. Another example of these websites can be seen here.',
    info2: '',
    url: 'https://lnp.org.au',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'design_Page_01.png',
    title: 'Graphic design portfolio',
    info:
      'Created during a graphic design course at university (DECO2200), I not only showcase the work I created throughout the semester, but also express my personal style of graphic design. (Artwork is done in Illustrator, portfolio made in InDesign)',
    info2: '',
    url: 'https://drive.google.com/file/d/1UcnnrTkSJqgskVc2K_OTf5XRAsB8dDIO/view?usp=sharing',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'food.png',
    title: 'Prototyping example',
    info:
      'I have worked on a number of small prototyping projects. You can find an example to one of them below.',
    info2:
      'This shows my ability to create a functioning prototype, wireframes and conduct research for an applciation.',
    url: 'https://github.com/deco3500-2019/FoodForThought',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together or know more?',
  btn: 'Contact me',
  email: 'matt@matthewdavenport.com.au',
};

// FOOTER DATA
export const footerData = {
  networks: [
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
