import chessimg from "../images/chess-game-logo.png";
import automateimg from "../images/automate-logo.png";
import timetrackerimg from "../images/time-tracker-icon.png";
import tictactoeimg from "../images/tic-tac-toe-logo.png";
import ludoimg from "../images/ludo-logo.png";
export const data = {
    name: "Govind Ji",
    dob: "08-12-2003",
    address: {
        village: "Mahiyarpur",
        post: "Chowar via Tarwan",
        ps: "Tankuppa",
        district: "Gaya",
        state: "Bihar",
        country: "India",
        pin: "805128"
    },
    contact: {
        mob: ["8271804255"],
        email: ["jigovind556@gmail.com", "12113078@nitkkr.ac.in"],
        linkedin: "http://www.linkedin.com/in/govindji",
        github: "https://github.com/jigovind556",
        website : "https://jigovind556.github.io/My-Portfolio"
    },
    language_speaking: ["English", "Hindi", "Sanskrit"],
    coding_skills: {
        coding: ['c', 'c++', 'java', 'python'],
        web_dev: ['HTML', 'css', 'javascript', 'React js'],
        backend: ['node js'],
        database: [
            'MySQL', 'mongoDb', 'firebase'
        ],
        android_dev: ['Flutter', 'React Native', 'java']
    },
    education: [
        {
            institution: "NIT Kurukshetra",
            degree: "B.Tech",
            branch: "Information Technology",
            year: "2021-2025",
            grade: "CGPA 8.25"
        },
        {
            institution: "Gurukul Kurukshetra",
            board: "CBSE",
            degree: "12th",
            year: "2020-21",
            grade: "96.6%"
        },
        {
            institution: "Gurukul Kurukshetra",
            board: "CBSE",
            degree: "10th",
            year: "2018-19",
            grade: "96.2%"
        },
    ],
    experience: [
        {
            role: "React JS Developer Intern",
            type: 'Intern',
            company: "Competishun",
            duration: "January 2024 - June 2024",
            description: [
                "Spearheaded the development of an innovative online platform dedicated to competitive programming.",
                "Proficiently crafted the frontend using ReactJS and Redux for a seamless user experience.",
                "Engineered robust APIs in NodeJs to enhance the platform's functionality.",
            ],
            technology_used: ['React js'],
            priority: 1,
        },
        {
            role: "Full Stack Developer",
            type: "Club member",
            company: "Aeromodelling Club ,NIT Kurukshetra",
            duration: "Aug 2023 - now",
            desscription: [
                "Architected and implemented the official website for the Aeromodelling Club at NIT Kurukshetra.",
                "Introduced advanced features, including member management, event registration, and club blogs.",
                "Implemented secure user authentication with JWT tokens, ensuring a protected user environment.",
                "Utilized a diverse tech stack, including HTML, CSS, JavaScript, Expressjs, MongoDB, and Nodejs."
            ],
            technology_used: ['React js', 'Node js', 'Mongodb', 'Three js'],
            website: "http://167.71.237.91:5173/",
            git: "https://github.com/Shivam-043/Aero-Website-_-Temporary",
            priority: 3,
        },
        {
            role: "Android Developer",
            type: "Freelance Project",
            company: "Free Rishteywala",
            duration: "Feb 2023 - May 2023",
            desscription: [
                "Fulfilled the role of a Full Stack Engineer Intern, actively contributing to the development and deployment of a comprehensive matchmaking application on the Play Store.",
                "Delivered a feature-rich app encompassing matchmaking, chat, audio-video calling, and location-based match searching.",
                "Developed a sophisticated Flutter app for matchmaking and messaging, showcasing proficiency in cross-functional collaboration.",
                "Engineered a unique algorithm for mate suggestion, contributing to the app's success with over 5K downloads.",
                "Employed Flutter, Firebase, and Git to ensure a smooth development and deployment process."
            ],
            technology_used: ["Flutter", "firebase", 'git'],
            website: "https://freerishteywala.com/",
            playstore: "https://play.google.com/store/apps/details?id=com.freerishtey.android",
            git: "https://play.google.com/store/apps/details?id=com.freerishtey.android",
            priority: 2,
        }
    ],
    projects: [
        {
            name: "Auto-Mate",
            image: automateimg,
            duration: "January 2023",
            type: "full stack web app",
            short_desc: "A web app that help users to save money on travel cost",
            description: [
                "Finalist in Excalibur'23.",
                "Implemented ride-sharing groups for cost-effective travel by allowing users to form groups of 5 people.",
                "Facilitated easy communication within groups through an integrated chat facility.",
                "Developed features for tracking travel history, generating travel reports, and fare splitting among group members."
            ],
            technology_used: ["HTML", "css", "java script", "node js", "mySQL", "socket io"],
            git: "https://github.com/jigovind556/Auto-Mate",
            priority: 1,
        },
        {
            name: "Time Tracker",
            image: timetrackerimg,
            duration: "july 2023",
            type: "mobile application",
            short_desc: "An Android app addressing attendance tracking issues for college students.",
            description: [
                "Created to tackle the challenge of tracking 75% attendance in college.",
                "Features include importing/exporting class timetables, importing/exporting the entire database, marking attendance, and tracking percentage.",
                "Utilized MySQL Lite as the database."
            ],
            technology_used: ["Flutter", "mySQL Lite"],
            git: "https://github.com/jigovind556/Time_Tracker",
            priority: 2,
        },
        {
            name: "Up Time",
            image: timetrackerimg,
            duration: "July 2022 - September 2022",
            type: "web application",
            short_desc: "A web application focused on database management for student attendance monitoring.",
            description: [
                "End-to-end database-focused portal featuring student login/sign-up pages, timetable entry, and an attendance calculator."
            ],
            technology_used: ["HTML", "CSS", "java script", "node js", "mysql"],
            git: "https://github.com/jigovind556/time_turtle",
            priority: 3,
        },
        {
            name: "Tic Tac Toe",
            image: tictactoeimg,
            duration: "October 2022",
            type: "Game",
            short_desc: "Java Swing based game",
            description: [
                "Created as a two-player game with the option to play against the computer or an adjacent player."
            ],
            technology_used: ["Java", "java Swing"],
            git: "https://github.com/jigovind556/Tic_Tac_Toe",
            priority: 4,
        },
        {
            name: "Chess",
            image: chessimg,
            duration: "October 2023",
            type: "Game",
            short_desc: "React Js based game",
            description: [
                "Developed as a two-player game for strategic play."
            ],
            technology_used: ["React js"],
            git: "https://github.com/jigovind556/Tic_Tac_Toe",
            priority: 5,
        },
        {
            name: "Ludo",
            image: ludoimg,
            duration: "November 2022",
            type: "Game",
            short_desc: "Java Swing based game",
            description: [
                "Created as a four-player game playable against the computer or adjacent players."
            ],
            technology_used: ["Java", "java Swing"],
            git: "",
            priority: 6,
        }
    ],
    responsibiliies: [
        {
            place : "Aeromodelling club",
            position : "Web Dev Team lead",
            duration : "2021 - present ",
        },
        {
            place :"Yoga club Gurukul",
            position : "Team Head",
            duration : "2017-2019",
        },
    ],
    achievements :[
        {
            title :"Hover Mania",
            subtitle:"Winner in Tech Spardha-23",
            year : "2023"
        },
        {
            title :"Excallibur",
            subtitle : "Made AutoMate- A Fair Sharing App in Tech Spardha-23",
            year : "2023",
        },
        {
            title :"Hover Mania",
            subtitle:"Winner in Tech Spardha-22",
            year : "2022"
        },
    ]
}