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
import { SiUnity } from 'react-icons/si'
import { SiExpress } from 'react-icons/si'

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
    "https://www.shricharanks.com/#/experience",
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
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly Backend services and Database Queries for a multitude of applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Designing effective and efficient Data Models",
        "⚡ Creating application backend in Node, Express & Flask",
        "⚡ Automating Workflows using a verity of Tools and Languages"
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
          skillName: "Unity",
          img: < SiUnity />,
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
      title: "Exploration",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ I love to explore and learn new things",
        "⚡ Working on exploring all of the industries and becoming inter-disciplinary",
        "⚡ Applying my skills to all of these different scenarios",
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
      duration: "2021 - 2025",
      descriptions: [
        "⚡ GPA: 3.991/4.0",
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
        "",
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
          title: "Vice President & Programming Sub-Captain",
          company: "NJIT Robotics Club + VEX U Team",
          company_url: "https://www.roboticsclub.njit.edu/",
          logo_path: "vex.png",
          duration: "Sep 2021 - Present",
          location: "Newark, New Jersey",
          description: [
          `• Working on the robot’s odometry system, auto-aim functionality, autonomous pathing, and other features of VEX U`,
          `• Implementing the usage of decision matrices and making contributions to the Engineering Notebook to enhance the 
          present’s and future’s decision making process`,
          `• Won Excellence Award, Tournament Champions, and Skills Champion at multiple Regional Competitions in 2023`,
          `• Using Agile methodologies to enhance and ease the workflow of our award-winning team`,
          `• Previously held positions include Mechanical Sub-Captain (’21-’22)`,
          `• Lead the design and construction of mobile goal related mechanisms and taking charge of the 15-inch robot`, 
          `• Technical skills utilized: Mechanical Engineering, C++ Programming, Inventor CAD, Agile Workflow, PID Controller etc.` ],
          color: "#0071C5",
        },
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
          title: "Founder, Chief Executive Officer, Chief Technology Officer",
          company: "InVisionAR",
          company_url: "",
          logo_path: "invisionar.png",
          duration: "Jul 2020 - Present",
          location: "Edison, New Jersey",
          description: [
          `• Founded organization dedicated to developing free, open-source software for visual learning; led technical aspect`, 
          `• Received over 70 student applicants for our internship program from 4 continents, 12 countries, and over 45 cities`,
          `• Technical skills utilized: Unity3D, C#, Git, React.js, Augmented Reality, PostgreSQL, Agile Methodology etc` ],
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Industry Experiences",
      experiences: [
        {
          title: "START Technology Intern (Software Engineering)",
          company: "Bank of New York Mellon (Pershing)",
          company_url: "https://www.pershing.com/",
          logo_path: "bnymellon.png",
          duration: "Jun 2023 - Aug 2023",
          location: "Jersey City, New Jersey",
          description: [
            "• Incoming Intern at BNY Mellon to explore and learn more about the Financial World and Financial Technology from the “bank of banks” over the course of their 10-week Summer Internship Program", 
            "• Going to work on designing efficient workflow for big data batch processing modules in Cost Basis Application to optimally run in parallel and have streamlined based on module dependencies with the goal of reducing end to end processing time by 50% and efficiently monitor and notify.",],
          color: "#4285F4",
        },
        {
          title: "Software Engineering + Data Co-Op Associate",
          company: "Prudential Financial",
          company_url: "https://www.prudential.com/",
          logo_path: "prudential.png",
          duration: "Feb 2023 - May 2023",
          location: "Newark, New Jersey",
          description: [
            "• Working with the Actuarial Modeling Platforms team, optimizing the workflow and version control for Actuaries", 
            "• Developing and Improving their Model Versioning Tool, to help store and organize different stochastic model executions and results with varied parameters for models such as VM20, FAS97, etc run in Enterprise Poly Workflow Processor",
            "• Application utilized by actuaries across various International Business Units and Products",
            `• Technical skills utilized: Python, Scrum, Artifactory, Git, PolySystems, AWS, Confluence, BitBucket, JIRA etc.`, ],
          color: "#4285F4",
        },
        {
          title: "Web Engineering Intern",
          company: "Avis Budget Group",
          company_url: "https://avisbudgetgroup.com/",
          logo_path: "avis.png",
          duration: "Jun 2022 - Feb 2023",
          location: "Parsippany, New Jersey",
          description: [
            "• Designed a customer-facing Search and Suggestion algorithm implementing a composite ranking system, involving Weighted Full Text Search and Trigram Similarity Scores using PostgreSQL and Node.js", 
            "• Presented the solution and demo to International Product Stakeholders, who determined that this solution would be implemented into production during the current AWS Transformation phase",
            "• Optimized the solution to improve response times by over 70% and reduce redundant data by over 50%",
            "• Participated in a Capstone Project, where our team presented a Web-based Vehicle Return Process tool to the Senior Leadership that would eliminate overcharging and unclaimed damages, influencing the Net Promoter Score by 15 pts",
            `• Technical skills utilized: React.js, Node.js, PostgreSQL, AWS, Docker, Kubernetes, CI/CD Pipeline, Confluence, etc.`, ],
          color: "#4285F4",
        },
        {
          title: "Electrical Engineer, Business Outreach",
          company: "NASA L’SPACE Mission Concept Academy",
          company_url: "https://www.lspace.asu.edu/",
          logo_path: "lspace.jpg",
          duration: "Sep 2021 - Dec 2021",
          location: "Tempe, Arizona",
          description: [
            "• Accepted into a NASA-sponsored workforce training program to develop my teamwork, technical and theoretical skills to succeed in NASA's work environment", 
            `• Working with an interdisciplinary team to create a Preliminary Design Review (PDR) of a technical payload that would scientifically investigate and collect data regarding the presence of ice on Mars while taking into consideration various`, 
            `• Earned multiple Skills Badges, including ones for Siemens NX, Org Charts, Gantt charts, and many more`, 
            `• Technical skills utilized: Electrical Engineering, Siemens NX, Mechanical Engineering, PDR Creation etc.` ],
          color: "#4285F4",
        },
        {
          title: "Data Analytics Intern, Lead ETL Developer",
          company: "50Hands",
          company_url: "https://50hands.org/",
          logo_path: "50hands.png",
          duration: "May 2020 - Aug 2021",
          location: "Mississauga, Ontario, Canada",
          description: [
            "• Developed ETL Scripts (utilized Python along with Selenium and numerous other packages) to collect data and stored it in a MySQL Database, formatted with the ease of the Tableau Visualization in mind", 
            `• Automated multiple different scenarios in order to ease the workflow for newly onboarded members of the ETL team`, 
            `• Discovered valuable insights that could prevent further spread of the COVID-19 across the world `, 
            `• Technical skills utilized: Data Analytics, Automation, Python, Unix, MySQL, pySpark, SMTP Servers, Tableau, etc` ],
          color: "#4285F4",
        },
        {
          title: "Software Developer Intern",
          company: "Chain-sys",
          company_url: "https://www.chainsys.com/",
          logo_path: "chainsys.png",
          duration: "Jan 2020 - Jan 2021",
          location: "Grand Ledge, Michigan",
          description: [
            "• Worked on Chain-sys’ product appBOTS, a software application that implements Robotic Process Automation (involves UI and API Driven methodology)", 
            `• Understood the product development lifecycle in industry; focused on improving the ease of implementation for customers`, 
            `• Technical skills utilized: Web Automation, HTML, Java, Javascript, Robotic Process Automation, Version Control, etc.`, ],
          color: "#4285F4",
        },
        
      ],
    },
    {
      title: "Research Experiences",
      experiences: [
        {
          title: "Undergraduate Researcher",
          company: "NJIT - Ubiquitous Networking and Intelligent Computing System (UNICS) Lab",
          company_url: "https://tao-han-njit.netlify.app/project/",
          logo_path: "njit.png",
          duration: "Nov 2021 - Present",
          location: "Newark, New Jersey",
          description: [
            "• Working in an National Science Foundation funded research project involving IoT network integration of smart cameras and Augmented Reality",
            `• Application built for the Microsoft Hololens 2 to do real-time object recognition by off-loading processing - required optimizations at a hardware interfacing level (low-level programming)`,
            `• Developing and refining the prototyped application`,
            `• Technical skills utilized: Microsoft HoloLens, Unity, C#, Universal Windows Platform, Jetpack, OpenCV, NVIDIA Jetson, etc`, ],
          color: "#4285F4",
        },
        {
          title: "Student Researcher",
          company: "Rutgers University",
          company_url: "https://www.rutgers.edu/",
          logo_path: "rutgers.png",
          duration: "Jul 2020 - Apr 2021",
          location: "New Brunswick, New Jersey",
          description: [
            `• With Professor Ezzat: Worked on data-driven models in R that could predict the availability of renewable energy as well as spatiotemporal patterns that impacted the generation and production of solar and wind energy`, 
            `• Technical skills utilized: R Language, Machine Learning Models, etc`,],
          color: "#4285F4",
        },
        {
          title: "Student Researcher",
          company: "Rutgers University",
          company_url: "https://www.rutgers.edu/",
          logo_path: "rutgers.png",
          duration: "Jul 2020 - Apr 2021",
          location: "New Brunswick, New Jersey",
          description: [
            `• With Professor Jafari: Worked on new traffic simulations for Smart Transportation by controlling various variables to discover possible optimizations`, 
            `• Technical skills utilized: Data Analytics, Python, PTV VISSIM, etc.` ],
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteer Experiences",
      experiences: [
        {
          title: "Volunteer Teacher (50 hours/year)",
          company: "International Tamil Academy (Thiruvalluvar Tamil School)",
          company_url: "https://www.catamilacademy.org/",
          logo_path: "ita.jpg",
          duration: "Sep 2019 - Present",
          location: "Edison, New Jersey",
          description: [
            "• After graduating from the highest offered level, chose to contribute back and teach the language to future students",
            `• First student to return as a Volunteer Teacher at the organization - inspired other students from my own class and from future graduating classes to teach as well`,
            `• Passionate about the language and the culture; wanted to provide students with an exciting and immersive experience`,
            `• Previous teachers, through all different levels, were proud to say that I had once been their student`, ],
          color: "#4285F4",
        },
        {
          title: "Library Aide (4 years x 280 hours/year)",
          company: "John P. Stevens High School Library",
          company_url: "https://jps.edison.k12.nj.us/",
          logo_path: "jps.png",
          duration: "Sep 2017 - Jun 2021",
          location: "Edison, New Jersey",
          description: [
            "• Volunteered at school library and helped those who needed help with anything (finding books, printing, etc)",
            "• Managed and reorganized the libraries resources in order to more efficiently serve those who came to the library",
            "• Worked to redesign the website and make it more interactive and organized during the remote schooling phase" ],
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "shriks.jpeg",
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
      name: "Stock Track",
      url: "https://github.com/shricharanks108/stock-track",
      description:
        "A web application that allows food banks to monitor their inventory and minimize food waste. It also allows customers to place orders and volunteers to fulfill those orders.",
      features:
        ["Place orders to be fulfilled by volunteers at the food bank", "Manage team members and access control", "Accurately track inventory of the food bank in order to serve consumers", "Minimize food waste by optimizing the supply/demand curves"],
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
        {
          name: "MySQL",
          img: < SiMysql />,
        },
      ],
    },
    {
      id: "1",
      name: "JavaSnakeGame",
      url: "https://github.com/shricharanks108/JavaSnakeGame",
      description: "My initial attempt at the classic game of Snake when I had just started coding.",
      features:
        ["Swing GUI to visualize the game and play", "Increase size of snake as food is eaten"],
      languages: [
        {
          name: "Java",
          img: < SiJava />,
        },
      ],
    },
    {
      id: "2",
      name: "Casino Game",
      url: "https://github.com/shricharanks108/JavaSnakeGame",
      description: "My friends and I developed Slots, Poker, and Blackjack in Java as a Hackathon Project and Final Class Project.",
      features:
        ["Three Programmed Games: BlackJack, Slots and Poker", "Console based experience", "Common Balance to play all three games"],
      languages: [
        {
          name: "Java",
          img: < SiJava />,
        },
      ],
    },
    {
      id: "3",
      name: "UnityZeldaStyleProject",
      url: "https://github.com/shricharanks108/UnityZeldaStyleProject",
      description:
        "Experimenting and Learning Unity with a Zelda-styled Game",
      features:
        ["Zelda-like mechanics",
        "Cool animated scenes",
        "Path Assigned & Following Enemy AI",
        "Area/Room Switching Animations"],
      languages: [
        {
          name: "Unity",
          img: < SiUnity />,
        },
        {
          name: "C#",
          img: < SiCsharp />,
        },
      ],
    },
    {
      id: "4",
      name: "DecAR",
      url: "https://github.com/shricharanks108/DecAR",
      description:
        "Unity Project to allow users to place Household Decor in AR and VR",
      features:
        ["Take an Image of Floorplan and Convert to 3D Floorplan",
        "Add Furniture and Decor within the VR/AR Room",
        "Allows users to upload 3D Models",
        "Alicevision Meshroom Integration"],
      languages: [
        {
          name: "Unity",
          img: < SiUnity />,
        },
        {
          name: "C#",
          img: < SiCsharp />,
        },
        {
          name: "Python",
          img: < SiPython />,
        },
      ],
    },
    {
      id: "5",
      name: "ReTale",
      url: "https://github.com/SaiVedagiri/ReTale",
      description:
        "ReTale is a mobile application that uses a Wi-Fi based navigational system to help consumers find products in a grocery store.",
      features:
        ["Uses wifi signal strength to triangluate the position of a device/user",
        "Allows users to navigate the stores and find an optimal path while picking up items on shopping list",
        "Flutter App provides a nice interface for individuals to follow pathPotential Feature: Add weights for stores to advertise products along the user’s path",
        "Potential Feature: Add Crowd Control to avoid jams in aisles",
        "Potential Feature: All Foot Traffic Analytics for stores to optimize product placement"],
      languages: [
        {
          name: "NodeJS",
          img: < SiNodedotjs />,
        },
        {
          name: "JavaScript",
          img: < SiJavascript />,
        },
        {
          name: "Flutter",
          img: < SiFlutter />,
        },
        {
          name: "Dart",
          img: < SiDart />,
        },
        {
          name: "Java",
          img: < SiJava />,
        },
      ],
    },
    {
      id: "5",
      name: "CityScape",
      url: "https://github.com/sagarreddypatil/hackexeter-travel-app",
      description:
        "CityScape is a redefined travel app allowing users to explore the world around them.",
      features:
        ["Custom Neural Network in Vanilla Javascript", 
        "Easily modifiable parameters, such as number of sensors, sensor range, traffic patterns, etc",
        "Creates multiple cars for each generation; allows you to save and train the best model throughout execution",
        "Potential Feature: Add a dropdown to change Activation Function"],
      languages: [
        {
          name: "ExpressJS",
          img: < SiExpress />,
        },
        {
          name: "NodeJS",
          img: < SiNodedotjs />,
        },
        {
          name: "JavaScript",
          img: < SiJavascript />,
        },
        {
          name: "Flutter",
          img: < SiFlutter />,
        },
        {
          name: "Dart",
          img: < SiDart />,
        },
        {
          name: "MongoDB",
          img: < SiMongodb />,
        },
      ],
    },
    {
      id: "6",
      name: "self-driving-simulation",
      url: "https://github.com/shricharanks108/self-driving-simulation",
      description:
        "A neural network system recieving inputs from simulated sensors on a self-driving car.",
      features:
        ["Custom Neural Network in Vanilla Javascript",
        "Easily modifiable parameters, such as number of sensors, sensor range, traffic patterns, etc.",
        "Creates multiple cars for each generation; allows you to save and train the best model throughout execution",
        "Potential Feature: Add a dropdown to change Activation Function"],
      languages: [
        {
          name: "JavaScript",
          img: < SiJavascript />,
        },
        {
          name: "HTML5",
          img: < SiHtml5 />,
        },
        {
          name: "CSS3",
          img: < SiCss3 />,
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
