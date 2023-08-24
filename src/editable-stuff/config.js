// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "黑",
  middleName: "",
  lastName: "白",
  message1: " Passionate about turn olds shoes shining again. ",
  message2:"腐朽",
  icons: [
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/",
    },
  ],
  imageLink: require("../editable-stuff/shoes.gif")
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
  heading: "Why cleaning the shoes",
  imageLink: require("../editable-stuff/shoes.gif"),
  imageSize: 375,
  message:
    "Proper shoe care is essential not only for extending the lifespan of your footwear but also for maintaining their appearance and functionality. Regular cleaning, conditioning, and protection can significantly enhance the overall look and feel of your shoes. Whether you have leather, suede, canvas, or synthetic shoes, this guide will walk you through the steps to effectively clean and restore them.",
  
  };


// Leadership SECTION


// SKILLS SECTION
const skills = {
  show: true,
  heading: "ADDITIONAL SERVICES/菜单",
  hardSkills: [
    { name: "Sterilization/杀菌-6$", value: 60 },
    { name: "add gules/补胶-5$", value: 50 },
    { name: "Fragrance/增香-5$", value: 50 },
    { name: "Deoxidation/去氧化-8", value: 80 },
    { name: "whiting/增白-8$", value: 80 },
    { name: "Re Dyeing/补色-8$", value: 80 },

  ],
  softSkills: [
    { name: "Sterilization/杀菌-8", value: 80 },
    { name: "Fragrance/增香-5$", value: 90 },
    { name: "Re Dyeing/补色-10", value: 75 },
    { name: "water resistance/防水镀膜-10", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch/联系",
  message:
    "xxx",
  email: "xxx@gmail.com",
};

const experiences = {
  show: true,
  heading: "Package deal/套餐",
  data: [
    {
      role: 'REGULAR CLEAN/简洗 $18.00 (500$ under )',// Here Add Company Name
      
      item1: '中底、鞋面和鞋带深层织物和皮革洗涤污垢去除',
      item2: '深层织物和皮革洗涤污垢去除',
      item3: '泥垢去除',
      item4:'',
      item5:''
    },
    {
      role: 'REGULAR DEEP CLEAN/精洗 $30 (500$ under )',
      
      item1: '中底、鞋面和鞋带深层织物和皮革洗涤污垢去除',
      item2: '深层织物和皮革洗涤污垢去除',
      item3: '泥垢去除',
      item4:'',
      item5:''
    },
    {
      role: '简洗',
      
      item1: '中底、鞋面和鞋带深层织物和皮革洗涤污垢去除',
      item2: '深层织物和皮革洗涤污垢去除',
      item3: '泥垢去除',
      item4:'',
      item5:''
    },    {
      role: '精细',
     
      item1: '中底、鞋面和鞋带深层织物和皮革洗涤污垢去除',
      item2: '深层织物和皮革洗涤污垢去除',
      item3: '泥垢去除',
      item4:'',
      item5:''
    }
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, skills,  getInTouch, experiences };
