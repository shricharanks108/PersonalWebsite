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
  title2: "Shricharan",
  logo_name: ":)",
  nickname: "Shri",
  full_name: "Shricharan K.S",
  subTitle:
    "\nStudent, Engineer, Developer.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:shricharanks108@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/shricharanks108",
  linkedin: "https://www.linkedin.com/in/shricharan-kulavanikerpuram-subramaniam-8b845a1b3/",
  gmail: "shricharanks108@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/shricharanks108/",
  twitter: "",
  instagram: "https://www.instagram.com/shricharanks108/",
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
        // {
        //   skillName: "PHP",
        //   img: < SiPhp />,
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
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
        // {
        //   skillName: "NPM",
        //   img: < SiNpm />,
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        {
          skillName: "MongoDB",
          img: < SiMongodb />,
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   img: < SiGraphql />,
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   img: < SiAndroid />,
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Java",
          img: < SiJava />,
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   img: < SiFlutter />,
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   img: < SiDart />,
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "MySQL",
          img: < SiMysql />,
          style: {
            color: "#4479A1",
          },
        },
        // {
        //   skillName: "jQuery",
        //   img: < SiJquery />,
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   img: < SiWordpress />,
        //   style: {
        //     color: "#207297",
        //   },
        // },
        // {
        //   skillName: "Apache",
        //   img: < SiApache />,
        //   style: {
        //     color: "#CA1A22",
        //   },
        // },
        {
          skillName: "Git",
          img: < SiGit />,
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "C",
        //   img: < SiC />,
        //   style: {
        //     color: "#E94E32",
        //   },
        // },
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
      key: 0,
      title: "New Jersey Institute of Technology",
      subtitle: "B.S. Computer Engineering || Albert Dorman Honors College",
      logo_path: "njit.png",
      alt_name: "NJIT",
      duration: "2021 - Present",
      descriptions: [
        "⚡ GPA: 4.0/4.0",
        "⚡ I'm currently pursuing my Bachelor of Science in Computer Engineering.",
        "⚡ The Honors College contains the top 6% of incoming students, and I recieved a full-ride scholarship (covering both tuition and housing expenses) to the university.",
      ],
      website_link: "https://www.njit.edu/",
    },
    {
      key: 1,
      title: "John P. Stevens High School",
      subtitle: "High School Diploma",
      logo_path: "jps.png",
      alt_name: "JPS",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Unweighted GPA: 3.96/4.0",
        "⚡ Weighted GPA: 5.51/4.0",
        "⚡ Graduated with Honors",
        "⚡ Honor Societies: National Honor Society, Science National Honor Society, Mu Alpha Theta (Math Honor Society), French Honor Society, etc.",
        "⚡ AP Courses Taken: AP US History, AP World History, AP Language and Composition, AP Computer Science A, AP Physics 1, AP Physics 2, AP Computer Science Principles, AP Literature and Composition, AP Calculus BC",
      ],
      website_link: "https://jps.edison.k12.nj.us/",
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
    "I've completed multiple internships. I've done projects on my own and I am actively looking for internships and co-op positions. I love learning new things and I'm always looking for new opportunities to grow and improve.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Leadership Experiences",
      experiences: [
        {
          title: "Mentor",
          company: "FIRST Robotics - Team 2554",
          company_url: "https://jpsrobotics2554.org/index.html",
          logo_path: "first.png",
          duration: "Oct 2017 - Present",
          location: "Edison, New Jersey",
          description: [
          `• Previously held positions include Safety Captain (10th), Electrical Captain (11th), Build President (12th) `, 
          `• Made executive decisions for the team through my positions, from both an organizational and an engineering standpoint`,
          `• Organized summer workshops for 3600+ younger members of the community in basics of Arduinos and Computer Science`,
          `• As the President, led the team to Global Innovation Finals (Top 2% of Innovation Submissions) with our project VisualEyes: 
          an AI-powered hat to aid the visually impaired with navigation to provide them with physical safety and mental security`,
          `• As a Mentor, providing both technical and organizational advice that makes the team run more efficiently`,
          `• Technical skills utilized: Java, Electrical & Mechanical Engineering, Arduinos, Strategic Alliances, etc` ],
          color: "#0071C5",
        },
        {
          title: "Founder, Chief Executive Officer, Chief Technology Officer",
          company: "InVisionAR",
          company_url: "https://jpsrobotics2554.org/index.html",
          logo_path: "invisionar.png",
          duration: "Jul 2020 - Present",
          location: "Edison, New Jersey",
          description: [
          `• Founded organization dedicated to developing free, open-source software for visual learning; led technical aspect`, 
          `• Received over 70 student applicants for our internship program from 4 continents, 12 countries, and over 45 cities`,
          `• Technical skills utilized: Unity3D, C#, Git, React.js, Augmented Reality, PostgreSQL, Agile Methodology etc` ],
          color: "#0071C5",
        },
        {
          title: "Research Team Lead",
          company: "New Jersey’s Governor STEM Scholars",
          company_url: "https://www.govstemscholars.com/",
          logo_path: "njgovstem.png",
          duration: "Nov 2021 - May 2022",
          location: "Chatham, New Jersey",
          description: [
          `• Accepted as one of the top 12% of applicants for proposing a scientific, impactful research project`, 
          `• Leading a team of students under the Research & Development Council of New Jersey on conducting research with the 
          aims of minimizing food waste and improving Food Bank pipeline in local communities`,
          `• Technical skills utilized: React.js, Node.js, MySQL, Git, Systems Integration, Database Emulation etc.` ],
          color: "#0071C5",
        },
        {
          title: "Programming Sub-Captain",
          company: "NJIT VEX Robotics Team",
          company_url: "https://www.govstemscholars.com/",
          logo_path: "vex.png",
          duration: "Sep 2021 - Present",
          location: "Newark, New Jersey",
          description: [
          `• Previously held positions include Mechanical Sub-Captain (’21-’22)`,
          `• Leading the design and construction of mobile goal related mechanisms and taking charge of the 15-inch robot`, 
          `• Implementing the usage of decision matrices and making contributions to the Engineering Notebook to enhance the 
          present’s and future’s decision making process`,
          `• Using Agile methodologies to enhance and ease the workflow of our award-winning team`,
          `• Technical skills utilized: Mechanical Engineering, C++ Programming, Inventor CAD, Agile Workflow, etc.` ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Industry Experiences",
      experiences: [
        {
          title: "Electrical Engineer, Business Outreach",
          company: "NASA L’SPACE Mission Concept Academy",
          company_url: "https://www.lspace.asu.edu/",
          logo_path: "cwoc.png",
          duration: "Sep 2021 - Dec 2021",
          location: "Tempe, Arizona",
          description: [
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck." ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Research Experiences",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description: [
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck." ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteer Experiences",
      experiences: [
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - Present",
          location: "Work From Home",
          description: [
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck." ],
          color: "#4285F4",
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
      "I often blog the progress of my projects and how I am improving. You can find them here.",
    link: "",
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
