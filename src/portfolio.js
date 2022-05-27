/* Change this file to get your personal Porfolio */
import { SiJavascript } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiNpm } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiGraphql } from 'react-icons/si'
import { SiAndroid } from 'react-icons/si'
import { SiJava } from 'react-icons/si'
import { SiFlutter } from 'react-icons/si'
import { SiDart } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiJquery } from 'react-icons/si'
import { SiWordpress } from 'react-icons/si'
import { SiApache } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiC } from 'react-icons/si'
import { SiCplusplus } from 'react-icons/si'
import { SiCsharp } from 'react-icons/si'
import { SiAmazonaws } from 'react-icons/si'
import { SiNetlify } from 'react-icons/si'
import { SiHeroku } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiDocker } from 'react-icons/si'
import { SiGithubactions } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Harikrushn",
  logo_name: "harry.k()",
  nickname: "harry / picleric",
  full_name: "Harikrushn Kanani",
  subTitle:
    "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:hkanani191@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/harikanani",
  linkedin: "https://www.linkedin.com/in/harikrushn-kanani/",
  gmail: "hkanani191@gmail.com",
  gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "https://twitter.com/Harikrushn9",
  instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          img:  < SiHtml5 />,
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          img: < SiCss3 />,
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          img: < SiJavascript />,
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          img: < SiPhp />,
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          img: < SiReact />,
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          img: < SiNodedotjs />,
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          img: < SiNpm />,
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          img: < SiMongodb />,
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          img: < SiGraphql />,
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Android",
          img: < SiAndroid />,
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          img: < SiJava />,
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          img: < SiFlutter />,
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          img: < SiDart />,
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          img: < SiMysql />,
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          img: < SiJquery />,
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          img: < SiWordpress />,
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          img: < SiApache />,
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          img: < SiGit />,
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          img: < SiC />,
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          img: < SiCplusplus />,
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C#",
          img: < SiCsharp />,
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          img: < SiPython />,
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          img: < SiAmazonaws />,
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          img: < SiNetlify />,
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          img: < SiHeroku />,
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          img: < SiFirebase />,
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          img: < SiPostgresql />,
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          img: < SiMysql />,
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          img: < SiMongodb />,
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          img: < SiDocker />,
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          img: < SiGithubactions />,
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Shantilal Shah Engineering College",
      subtitle: "Bachelor in Information Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2021 - Present",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Information Technology."
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgec.ac.in/",
    },
    {
      title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
      subtitle: "Diploma in Information Technology",
      logo_path: "ssgandhy.png",
      alt_name: "SSGC",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "Cyber Security & Cyber Forensics",
      subtitle: "Workshop at IIT Bombay",
      logo_path: "iit.png",
      certificate_link:
        "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
      alt_name: "Workshop",
      color_code: "#2AAFED",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
      alt_name: "Google",
      color_code: "#fe0037",
    },
    {
      title: "Hack20",
      subtitle: "Flutter International Hackathon",
      logo_path: "flutter.png",
      certificate_link:
        "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
      alt_name: "Flutter International Hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      certificate_link:
        "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Full Stack Developer (Intern)",
          company: "Valora Infotech",
          company_url: "https://valora-infotech.business.site/",
          logo_path: "valora.jpg",
          duration: "Oct 2020 - Mar 2021",
          location: "Office",
          description:
          `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Full Stack Developer (Freelancer)",
          company: "NightOwls",
          company_url: "http://nightowls.company/",
          logo_path: "nightowls.jpg",
          duration: "Sep 2020 - Oct 2020",
          location: "Work From Home",
          description:
          `Work closely with the Client and Team on change request functions.
          We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        }
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        {
          title: "Campus Hustler",
          company: "Skillenza",
          company_url: "https://skillenza.com/",
          logo_path: "skillenza.png",
          duration: "Feb 2021 - Present",
          location: "Work from Home",
          description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
          color: "#196acf",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2019 - Present",
          location: "Work from Home",
          description:
          "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2018 - Present",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Apr 2017 - Present",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "AutomateInstaPyBot",
      url: "https://github.com/harikanani/AutomateInstaPyBot",
      description: "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
      languages: [
        {
          name: "Python",
          img: < SiPython />,
        },
      ],
    },
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/harikanani/react-twitter-clone",
      description:
        "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          img: < SiHtml5 />,
        },
        {
          name: "CSS3",
          img: < SiCss3 />,
        },
        {
          name: "React",
          img: < SiReact />,
        },
        {
          name: "Firebase",
          img: < SiFirebase />,
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/harikanani/node-blockchain",
      description:
        "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          img: < SiNodedotjs />,
        },
        {
          name: "TypeScript",
          img: < SiTypescript />,
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/harikanani/top-crypto-gainers",
      description:
        "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          img: < SiHtml5 />,
        },
        {
          name: "CSS3",
          img: < SiCss3 />,
        },
        {
          name: "React",
          img: < SiReact />,
        },
        {
          name: "Javascript",
          img: < SiJavascript />,
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/harikanani/personal-portfolio",
      description:
        "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "Javascript",
          img: < SiJavascript />,
        },
        {
          name: "NodeJS",
          img: < SiNodedotjs />,
        },
      ],
    },
    {
      id: "5",
      name: "node_express_crud_api_starter",
      url: "https://github.com/harikanani/node_express_crud_api_starter",
      description:
        "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          img: < SiNodedotjs />,
        },
      ],
    },
    
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
