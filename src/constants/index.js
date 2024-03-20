import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  western,
  tealbook,
  ecohive,
  angular,
  c,
  mysql,
  net,
  next,
  php,
  python,
  springboot,
  vue,
  wordpress,
  media,
  ecohiveimg,
  torque,
  realestate,
  ecommerce,
  calmconnect,
} from "../assets";





export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work/Projects",
  },
 
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Angular JS",
  //   icon: angular,
  // },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Angular JS",
    icon: net,
  },
  
  
  
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Western University",
    icon: western,
    iconBg: "#383E56",
    date: "May 2021 - December 2023",
    points: [
      "Contributed to the improvement of university applications, primarily focusing on web development. Worked on Student Center portal, OWL (Online Western Learning Portal), and Western’s official website and ensured higher cross-browser compatibility resulting in 20% decrease in reported issues.",
      "Developed object-oriented code with ASP.NET and Node.js while achieving 100% compliance with WCAG guidelines.",
      "Implemented responsive design principles using HTML, CSS, and JavaScript/TypeScript achieving 15% improvement in overall website responsiveness by utilizing optimization techniques, leading to enhanced mobile-user engagement.",

    ],
  },
  {
    title: "Front End Developer Intern",
    company_name: "TealBook",
    icon: tealbook,
    iconBg: "#E6DEDD",
    date: "September 2020 - April 2021",
    points: [
      "Crafted sophisticated user interfaces using modern JavaScript frameworks, including React.js, Angular.js, Vue.js contributing towards increasing project scalability and leading to an impressive 25% reduction in rendering time.",
      "Demonstrated proficiency in version control systems leveraging GitHub, achieving 10% quarterly improvement in code collaboration, tracking and deployed websites.",
      "Designed APIs in various backend technologies including Node.js, PHP, ASP.NET, Sprint Boot and implemented authentication in websites. Used MongoDB and MySQL for data storage.",
      "Implemented best practices for maintenance of code quality standards on a regular basis, improving the reliability and robustness of the software to provide consistent and accurate overall results.",
    ],
  },
  {
    title: "Software Developer/Specialist",
    company_name: "Ecohives",
    icon: ecohive,
    iconBg: "#383E56",
    date: "September 2018 - August 2020",
    points: [
      "Developed Ecohives’s Website leveraging WordPress, utilizing plugins, wrote custom CSS to match the prototype.",
      "Tested (unit testing and integration testing), resolved bugs in existing websites and introduced enhancements that boosted functionality and efficiency by 25%.",
      "Conducted research for our future apps, presenting feasibility studies, building prototypes using Figma, testing and collecting user feedback.",
      "Worked with the product designer and the ‘EV Society’ to optimize the UI/UX of the application increasing target audience engagement by 15%.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Syed proved me wrong.",
    name: "Aanya Thapar",
    designation: "CFO",
    company: "At Brand Studio",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Syed does.",
    name: "Sam Q",
    designation: "COO",
    company: "Sam's Shisha",
  },
  {
    testimonial:
      "After Syed optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Imran Javar",
    designation: "Supervisor (Dev team)",
    company: "Ecohives",
  },
];

const projects = [
  
  {
    name: "E-commerce Store",
    description:
      "Developed a responsive and user-friendly e-commerce store using HTML, CSS, JavaScript, React.js, Next,js, Sanity, Stripe to ensure optimal viewing experience across all devices. Integrated secure payment gateways such as Stripe to facilitate seamless transactions and enhance customer trust. Admin can add, update, delete products using sanity",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/smnaqvidr/ecommerce_sanity_stripe",
    link: "https://ecommerce-sanity-stripe-phi-orcin.vercel.app/",
  },
  
  {
    name: "Media Streaming",
    description:
      "Designed and implemented a responsive media streaming application using HTML5, CSS3, JavaScript, React.js, MaterialUI, Rapid API to ensure optimal user experience across desktop and mobile devices. Users have access to every youtube video. Fully functional streaming and modern UI/UX.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: media,
    source_code_link: "https://github.com/smnaqvidr/youtube-clone",
    link: "https://youtube-clone-omega-one.vercel.app/",
  },
  {
    name: "Real Estate",
    description:
      "Designed and developed a responsive real estate application utilizing modern front-end technologies such as HTML5, CSS3, MaterialUI, JavaScript, React.js, Next.js and RapidAPI to ensure compatibility across various devices and screen sizes. Implemented advanced search functionality with filters for location, property type, price range, and amenities, enhancing user experience and facilitating efficient property discovery.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "rapidapi",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/smnaqvidr/realestate",
    link: "https://realestate-two-liard.vercel.app/"
  },
  {
    name: "Ecohives",
    description:
      "I worked with Ecohive’s graphic designer to develop the entire website on WordPress. I installed custom plug-ins, themes and coded custom CSS to meet the designer’s pixel perfect designs. I also set up the business emails for the company, managed the hosting portal as well as set up the e-commerce platform.",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: ecohiveimg,
    source_code_link: "https://github.com/",
    link: "https://ecohive.ca/blog/",
  },
  {
    name: "Torque Network",
    description:
      "Similar to Ecohive’s website I also developed the website for Torque Network on WordPress, installing custom plug-ins, themes and custom CSS. I worked alongside the public relations coordinator to optimize UI/UX. I set up business emails for the Torque Network team and also managed the hosting portal.|",
    tags: [
      {
        name: "wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: torque,
    source_code_link: "https://github.com/",
    link:"https://torquenetwork.io/"
  },
  {
    name: "CalmConnect (Coming soon)",
    description:
      "Web application that enables users to resgister and login, a homepage that opens after the user successfully logs in. The user can add posts with images. It has a separate profile page for users with all their posts. Adding feature to add people to your friends list and unfriend them. Liking and commenting feature on every post. Fully implemented messaging feature.",
    tags: [
      {
        name: "mernstack",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",

      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: calmconnect,
    source_code_link: "https://github.com/",
    link: "",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects };
