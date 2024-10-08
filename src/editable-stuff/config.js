// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jiaming",
  middleName: "",
  lastName: "Shang",
  message: "DevOps | Functional Programming | Micro Service",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sjmyuan",
    },
    {
      image: "fa-wordpress",
      url: "https://blog.shangjiaming.com",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jiaming-shang-98b494141/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "https://images.shangjiaming.com/avatar-resume-984x984.png",
  imageSize: 375,
  message:
    "I serve as a Lead Consultant, assisting clients in accelerating product delivery and improving quality through the implementation of advanced methodologies and techniques. Additionally, I am passionate about and actively practice Functional Programming, DevOps, and Agile principles.",
  resume: "https://resume.shangjiaming.com/",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sjmyuan", //i.e."johnDoe12Gh"
  reposLength: 2,
  specificRepos: ["copy-as-markdown", "jlogger", "nextcloud-ffmpeg", "sit"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message: "",
  images: [],
  imageSize: {
    width: "615",
    height: "450",
  },
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [],
  softSkills: [],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: false,
  heading: "Get In Touch",
  message: "",
  email: "shangjiaming.yuan@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [],
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
