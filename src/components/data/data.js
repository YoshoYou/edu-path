import { BookAIcon, GraduationCapIcon, LampDeskIcon, PersonStandingIcon } from "lucide-react";
import { buissness, cssImg, girl, girl_2, html, node, photo, photoshop, ui } from "../assets/images/export"

export const courseData=[
    {
        title:'CSS',
        price:50,
        level:'Begginer',
        des:'Master CSS to style your web components in modern way',
        img:`${cssImg}`,
        lessonCount:'15 lessons',
        category:'Front-End',
        duration:'2 weeks',
        language:'English',
        time:'10:00-02:00',
        day:'Tue - Mon',
        id:1
    },
    {
        title:'UI/UX',
        price:85,
        level:'Advanced',
        des:'Learn the fundementals of user interface and user experiences',
        img:`${ui}`,
        id:'ui',
        lessonCount:'40 lessons',
        category:'Designing',
        duration:'1 month',
        language:'English',
        time:'03:00-05:00',
        day:'Fri - Sun',
        id:2
    },
    {
        title:'JavaScript',
        price:100,
        level:'Advanced',
        des:'Acheive javaScript for modern web applications',
        img:`${node}`,
        id:'js',
        lessonCount:'15 lessons',
        category:'Front-End / Back-End',
        duration:'5 weeks',
        language:'English',
        time:'07:00-09:00',
        day:'Mon - Sat',
        id:3
    },
    {
        title:'Excel',
        price:60,
        level:'Intermediate',
        des:'Attending an advanced Excel course to start your own buissness',
        img:`${buissness}`,
        lessonCount:'30 lessons',
        category:'Front-End',
        duration:'12 weeks',
        language:'English',
        time:'12:00-02:00',
        day:'Thu - Wen',
        id:4
    },
    {
        title:'PhotoShop',
        price:120,
        level:'Advanced',
        des:'Have the basic knowledge to take the best shoots and save nice images',
        img:`${photoshop}`,
        lessonCount:'100 lessons',
        category:'Designing',
        duration:'20 weeks',
        language:'English',
        time:'05:00-07:00',
        day:'Sun - Mon',
        id:5
    },
    {
        title:'HTML',
        price:20,
        level:'Begginer',
        des:'Learn HTML and the basic knowledg to build your app',
        img:`${html}`,
        lessonCount:'15 lessons',
        category:'Front-End',
        duration:'2 weeks',
        language:'English',
        time:'01:00-03:00',
        day:'Wen - Mon',
        id:6
    },
];
export  const AboutList=[
    {
      title:'Expert-Led Courses',
      des:"Learn from industry professionals with years of real-world experience.",
   },
   {
    title:'Global Community',
    des:'Join thousands of learners from around the world on their journey',
   },
   {
    title:'Certified Learning',
    des:'Earn recognized certificates upon completing your courses.',
   },
   {
    title:'Learn at your Place',
    des:'Flexible learning schedules that fit your lifestyle and goals.',
   }
  ];
  export const reviewList =[{
    name:'Sarah Johnson',
    img:`${girl}`,
    job:'Frontend Developer',
    review:'EduPath transformed my career! The courses are comprehensive and the instructors are top-notch. Highly recommend to anyone looking to upskill.',
  },{
    name:'Michel Chen',
    img:`${photo}`,
    job:'UI/UX Designer',
    review:'As a beginner, I found EduPath to be incredibly welcoming. The courses are well-structured, and the community support is fantastic. I landed my first developer job thanks to what I learned here!',
  },{
    name:'Emily Rodrigues',
    img:`${girl_2}`,
    job:'Data Analyst',
    review:'The flexibility of learning at my own pace was a game-changer. EduPath allowed me to balance my studies with work and family commitments. The skills have opened new doors for me professionally.',}]

    export const FAquestion=[
        {
            question:'Are the courses suitable for beginners?',
            answer:'yes,there are courses in each feild suitable for begginers and all level, you can just choose what fits you in each course'
        },
        {
            question:'How long do I have access to the course?',
            answer:'If you buy the course right now, you have access for a lifetime, But in case there is some edition and renewing in this course you must buy it again with a generouse discount as long as you are our loyal customer'
        },
        {
            question:'How long does each course take?',
            answer:' It depends on the course itself, but generally Designing courses take a bit more time than others, you can check each course details to find out'
        },
        {
            question:'Is there a free trial?',
            answer:'yes,whenever you buy a three courses you can get a free trial on a fourth one for limited time'
        },
        {
            question:'Can I get a refund?',
            answer:'In case you don\'t the course you can contact with the supporting team and have a refund up to 50% of the course price '
        },
    ]