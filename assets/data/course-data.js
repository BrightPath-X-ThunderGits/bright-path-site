// Sample course data with descriptions
const courses = [
  {
    id: 1,
    name: "Bachelor of Education (B.Ed)",
    type: "Degree",
    stream: "Teaching",
    price: 30000,
    duration: "5-year",
    session: "2025-2028",
    description:
      "The B.Ed program provides the necessary skills to become a successful educator.",
    image:
      "https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "The Bachelor of Education (B.Ed) program is designed for aspiring teachers who want to make a positive impact on education. It provides comprehensive training in teaching methodologies, classroom management, and curriculum development.",
      courseInformation: {
        title: "B.ED (Bachelor of Education)",
        image: "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription: "The B.Ed. course is a two-year undergraduate degree. Admission to the B.Ed. program involves a career, where the aspirants can become teachers or hold some administrative post in the education industry. In B.Ed courses are offered for 2(two) years and makes the students learn about many topics and concepts viz. teaching pedagogy, curriculum development, educational psychology, instructional tactics, subject-specific training, teaching and learning techniques for instructors and students, classroom management programs, etc.", 
      },
      whatIsThis: {
        title: "What is B.Ed (Bachelor of Education) ?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription: "The full form of B.Ed is Bachelor of Education. This degree is for undergraduates who want to become professional educators. In the past, the B.Ed degree has been a key part of teacher training programs worldwide. It ensures that educators have the skills and knowledge to excel. To be eligible for a B.Ed. program, you'll typically need to have a bachelor's degree in any field. However, the specific requirements may vary depending on the university or college you choose. Admission usually involves entrance examinations, and sometimes prior teaching experience is required. If you have a passion for education and nurturing young minds, then pursuing a B.Ed. is an excellent way to turn that passion into a rewarding profession. Here we’ll discuss the benefits of a B.Ed degree and will share the B.Ed course fee structure with detailed insights.", 
      },
      whyChooseThis: {
        title: "Why should I study B.Ed (Bachelor of Education) in 2025 ? ",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription: "Why should you consider pursuing a B.Ed degree? For starters, it's a gateway to a fulfilling career in education. Teaching is not just a profession; it's a calling. Professional Qualification: A B.Ed degree is often a mandatory requirement for teaching positions in schools, ensuring you meet the necessary qualifications to pursue a career in education. Pedagogical Expertise: The programme equips you with essential teaching skills and knowledge, including educational psychology, curriculum design, and effective teaching methods, which are crucial for fostering a productive learning environment. Practical Experience: The B.Ed curriculum includes hands-on teaching practice and internships, providing real-world experience in classrooms and helping you develop confidence and competence in teaching. Specialisations: You can choose to specialise in particular subjects or education levels, such as primary or secondary education, allowing you to tailor your career to your interests and strengths. Career Opportunities: A B.Ed degree opens up diverse career opportunities not only in teaching at primary, secondary, and higher secondary schools but also in educational administration, curriculum development, and educational consulting.", 
      },
      who: {
        title: "Who Should Do B.Ed (Bachelor of Education) ?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription: "B.Ed, or Bachelor of Education, equips aspirants with the skills and principles of teaching and learning. It enhances communication and soft skills, enabling teachers to understand and meet the individual needs of students effectively. A necessity for Government jobs: The National Council of Teachers Education mandates a B.Ed degree for teaching roles in government schools. Private schools also prefer B.Ed-qualified teachers. Job satisfaction: Teachers play a critical role in nation-building by providing quality education, making teaching a fulfilling profession. The B.Ed degree supports this process by building essential skills. Good pay and perks: Government school teachers earn between INR 20,000 to INR 50,000 monthly, with additional benefits like medical insurance. Private institutions also offer competitive salaries. Job Security: Teaching is a stable profession. With the B.Ed qualification, candidates enjoy better job security. According to the Naukri Job Speak Index, education is one of the top hiring sectors in India. Entrepreneurship Opportunity: After completing the B.Ed course, candidates can establish tuition centers. Reports show that approximately 7.1 crore Indian students opt for private tuition, presenting a lucrative entrepreneurial avenue.", 
      },
      keyFeatures: [
        {
          title: "Expert Mentorship",
          description:
            "Learn from experienced professionals and industry experts who guide you every step of the way.",
          icon: `<path d="M12 2L12 22M5 12H19"></path>`,
        },
        {
          title: "Hands-on Projects",
          description:
            "Work on real-world projects that help you build practical skills and a strong portfolio.",
          icon: `<circle cx="12" cy="12" r="10"></circle><path d="M16 12H8"></path>`,
        },
        {
          title: "Flexible Learning",
          description:
            "Access course materials and resources anytime, anywhere with a flexible schedule tailored for you.",
          icon: `<path d="M3 10H21M3 14H21"></path>`,
        },
      ],
      testimonials: [
        {
          feedback:
            "The course was an amazing experience! The mentors were extremely knowledgeable, and the curriculum was well-structured. I highly recommend it.",
          name: "Shivam Jha",
          designation: "Software Engineer",
          image: "https://dummyimage.com/80x80",
        },
        {
          feedback:
            "The hands-on projects were the best part of the course. I gained practical knowledge and built a strong portfolio.",
          name: "Jane Smith",
          designation: "Data Scientist",
          image: "https://dummyimage.com/80x80",
        },
        {
          feedback:
            "The flexible learning schedule allowed me to balance work and studies seamlessly. Highly recommended for working professionals.",
          name: "Michael Johnson",
          designation: "Project Manager",
          image: "https://dummyimage.com/80x80",
        },
      ],
    },
  },
  {
    id: 2,
    name: "General Nursing & Midwifery (GNM)",
    type: "Degree",
    stream: "Nursing",
    price: 35000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "GNM prepares nurses to work in healthcare settings and improve patient care.",
    image: "https://dummyimage.com/721x401",
    details: {
      overview:
        "The GNM program is designed to equip students with the skills and knowledge to excel in healthcare. It emphasizes patient care, medical procedures, and community health.",
      curriculum: [
        {
          semester: "Year 1",
          topics: [
            "Anatomy and Physiology",
            "Nutrition",
            "Fundamentals of Nursing",
          ],
        },
        {
          semester: "Year 2",
          topics: [
            "Medical-Surgical Nursing",
            "Mental Health Nursing",
            "Community Health",
          ],
        },
      ],
      features: [
        "Hands-on training in hospitals.",
        "Mentorship by experienced healthcare professionals.",
        "Placement assistance in reputed healthcare institutions.",
      ],
      admissionProcess: [
        "Ensure eligibility with a minimum of 10+2 in science.",
        "Fill out the application form.",
        "Submit required medical and academic documents.",
        "Complete admission by paying the fees.",
      ],
      testimonials: [
        {
          name: "Michael Johnson",
          feedback:
            "The GNM program at Bright Path gave me the confidence and skills to excel in my nursing career.",
        },
      ],
      relatedCourses: [1, 3], // IDs of related courses
    },
  },
  {
    id: 3,
    name: "Engineering in Computer Science",
    type: "Degree",
    stream: "Engineering",
    price: 45000,
    duration: "3-years",
    session: "2025-2028",
    description:
      "This course equips students with the skills required to work in computer science fields.",
    image: "https://dummyimage.com/722x402",
  },
  {
    id: 4,
    name: "Master of Management Studies",
    type: "Degree",
    stream: "Management",
    price: 50000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "MMS is designed to develop leadership and management skills for business environments.",
    image: "https://dummyimage.com/723x403",
  },
  {
    id: 5,
    name: "Master of Management Studies",
    type: "Degree",
    stream: "Management",
    price: 50000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "MMS is designed to develop leadership and management skills for business environments.",
    image: "https://dummyimage.com/723x403",
  },
  {
    id: 6,
    name: "Master of Management Studies",
    type: "Degree",
    stream: "Management",
    price: 50000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "MMS is designed to develop leadership and management skills for business environments.",
    image: "https://dummyimage.com/723x403",
  },
  {
    id: 7,
    name: "Master of Management Studies",
    type: "Degree",
    stream: "Management",
    price: 50000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "MMS is designed to develop leadership and management skills for business environments.",
    image: "https://dummyimage.com/723x403",
  },
  {
    id: 8,
    name: "Master of Management Studies",
    type: "Degree",
    stream: "Management",
    price: 50000,
    duration: "2-years",
    session: "2025-2028",
    description:
      "MMS is designed to develop leadership and management skills for business environments.",
    image: "https://dummyimage.com/723x403",
  },
];

export { courses };
