type Employment = {
  id: number;
  name: string;
  company: string;
  date: string;
  place: string;
  link: string;
  description: string;
  skills: string[];
};

export const employment: Employment[] = [
  {
    id: 1,
    name: "Fullstack Developer",
    company: "Many Hats Software",
    date: "2022 - Present",
    place: "Vancouver, Canada",
    link: "https://www.wewearmanyhats.com",
    description: `As a Full Stack Engineer at Many Hats, my role encompassed a wide range of responsibilities aimed at delivering exceptional web applications and ensuring their seamless operation.<br/><br/> Some of my key duties included:<br/></br>
      Front-End Development: <p className="text-[14px] mt-[5px]">I was responsible for creating engaging user interfaces using HTML, CSS, and JavaScript/Typescript. This involved translating design mockups into responsive and visually appealing web pages.</p><br/><br/>
      Back-End Development: <p className="text-[14px] mt-[5px]">I designed, developed, and maintained server-side logic using languages like Node.js, Typescript, Express. This included building RESTful APIs, managing databases, and optimizing data storage and retrieval processes.</p><br/><br/>
      Database Management: <p className="text-[14px] mt-[5px]">I designed and maintained database schemas, ensuring data integrity and performance. This involved writing efficient SQL queries, implementing database migrations, and addressing data security concerns.</p><br/><br/>
      Server Administration: <p className="text-[14px] mt-[5px]">I deployed and managed web applications on platforms such as AWS, Heroku, or Docker. I monitored server performance, addressed scalability concerns, and resolved any server-related issues promptly.</p><br/><br/>
      Version Control: <p className="text-[14px] mt-[5px]">I utilized Git for efficient codebase management, enabling seamless collaboration with team members and tracking changes across projects.</p><br/><br/>
      Testing and Debugging: <p className="text-[14px] mt-[5px]">I conducted thorough testing of web applications to identify and rectify bugs and issues. My role also included troubleshooting complex problems, ensuring smooth application functionality.</p><br/><br/>
      Collaboration: <p className="text-[14px] mt-[5px]">I actively collaborated with cross-functional teams, including UI/UX designers, product managers, and QA engineers, to align technical solutions with business goals. Effective communication and teamwork were essential in achieving project objectives.</p><br/><br/>
      Continuous Learning: <p className="text-[14px] mt-[5px]">Staying updated with emerging technologies, industry best practices, and coding standards was an integral part of my role. I consistently sought opportunities for skill enhancement and knowledge sharing within the team.</p><br/><br/>
      In summary, my role as a Full Stack Engineer at Many Hats required a versatile skill set that encompassed both front-end and back-end development. I was committed to delivering high-quality, scalable, and efficient solutions while fostering a colaborative and innovative work environment.`,
    skills: [
      "React",
      "NextJS",
      "Redux",
      "React Native",
      "NodeJS",
      "MongoDB",
      "Google Cloud",
      "AWS",
    ],
  },
  {
    id: 2,
    name: "Fullstack Developer",
    company: "1511 Paris",
    date: "Contract job",
    place: "Paris, France",
    link: "https://www.1511.paris",
    description: `As a Full Stack Developer on a 1511 project, I had the privilege of working with a diverse tech stack that included JavaScript, React, Redux, AWS, Firebase, and MongoDB. My role was multifaceted, and I undertook a variety of responsibilities to ensure the successful delivery of the project:<br/><br/>
        Front-End Development with React and Redux:<br/>
        <p className="text-[14px] mt-[5px]">I was responsible for creating responsive and dynamic user interfaces using React, implementing state management with Redux, and ensuring a seamless and intuitive user experience.
I worked closely with UI/UX designers to translate design mockups into functional components and user interfaces.</p><br/><br/>
Back-End Development:<br/>
<p className="text-[14px] mt-[5px]">Leveraging Node.js and Express, I developed robust server-side logic to support the application's functionality.
I designed and implemented RESTful APIs to facilitate communication between the front end and back end.</p><br/><br/>
Payment Integration with Stripe:<br/>
<p className="text-[14px] mt-[5px]">I implemented secure payment processing within the application using Stripe. This included integrating Stripe's API to handle payment transactions, ensuring the confidentiality of sensitive payment information.</p><br/><br/>
Database Management with MongoDB:<br/>
<p className="text-[14px] mt-[5px]">I handled the database layer, including schema design and data modeling using MongoDB, ensuring data integrity and scalability.
I wrote efficient queries and utilized indexing for optimized data retrieval.</p><br/><br/>
Integration with AWS and Firebase:<br/>
<p className="text-[14px] mt-[5px]">Leveraging Amazon Web Services (AWS), I managed cloud resources, including deployment and scaling of the application for high availability.
I integrated Firebase services for real-time data synchronization, authentication, and cloud functions to enhance the application's functionality.</p><br/><br/>
Authentication and User Management:<br/>
<p className="text-[14px] mt-[5px]">I implemented user authentication and authorization using Firebase Authentication, ensuring secure access to the application's features.</p><br/><br/>
Deployment and Hosting:<br/>

<p className="text-[14px] mt-[5px]">I managed deployment processes, leveraging AWS and Firebase hosting services, ensuring efficient and reliable hosting of the application.</p><br/><br/>
Testing and Quality Assurance:<br/>

<p className="text-[14px] mt-[5px]">I conducted thorough testing, including unit testing and integration testing, to identify and rectify issues promptly.
I worked closely with QA engineers to ensure the application met quality standards.</p><br/><br/>
Continuous Integration/Continuous Deployment (CI/CD):<br/>

<p className="text-[14px] mt-[5px]">I set up automated CI/CD pipelines to streamline the development, testing, and deployment processes, ensuring rapid and reliable releases.</p><br/><br/>
Documentation:<br/>

<p className="text-[14px] mt-[5px]">I maintained comprehensive documentation for code, APIs, and deployment processes to facilitate collaboration and future maintenance.</p><br/><br/>
Client Communication:<br/>

<p className="text-[14px] mt-[5px]">I engaged in regular communication with the client, providing updates on project progress, addressing concerns, and aligning technical solutions with business goals.</p><br/><br/> In this dynamic role as a Full Stack Developer on a contracting project, my adaptability, problem-solving skills, and proficiency in the tech stack were essential in delivering a successful project that met the client's requirements and exceeded expectations.`,
    skills: [
      "React",
      "Redux",
      "NodeJS",
      "MongoDB",
      "Firebase Authentication",
      "AWS",
    ],
  },
  {
    id: 3,
    name: "Frontend Developer",
    company: "Rocket Firm Ltd",
    date: "2020 - 2022",
    place: "Astana, Kazakhstan",
    link: "https://rocketfirm.com",
    description: `As a React Native Mobile Developer at Rocket Firm, I played a pivotal role in crafting high-quality mobile applications using a powerful tech stack that included React Native, Redux, Redux Saga, Firebase, and Firestore. My job duties encompassed a wide range of responsibilities to ensure the successful development of mobile apps:<br/><br/>
      Mobile App Development with React Native:<br/>

      <p className="text-[14px] mt-[5px]">I was responsible for building cross-platform mobile applications using React Native, which enabled us to reach both iOS and Android users with a single codebase.
I created and optimized UI components for mobile devices, ensuring a smooth and responsive user experience.</p><br/><br/>
State Management with Redux:<br/>

<p className="text-[14px] mt-[5px]">I implemented Redux to manage the application's state, providing a predictable and centralized way to handle data and UI updates.
I designed and maintained the Redux store to ensure efficient data flow and consistency across the app.</p><br/><br/>
Middleware with Redux Saga:<br/>

<p className="text-[14px] mt-[5px]">I utilized Redux Saga to manage side effects, such as handling asynchronous actions, API requests, and data caching, while maintaining a clear and maintainable codebase.
I coordinated complex workflows and data synchronization tasks seamlessly using Redux Saga.</p><br/><br/>
Firebase Integration:<br/>

<p className="text-[14px] mt-[5px]">I integrated Firebase services into the mobile app, including Firebase Authentication for secure user authentication and authorization.
Firebase Firestore was leveraged for real-time data storage and synchronization, ensuring users always had access to the latest information.
Firebase Cloud Storage was used for efficient media storage and retrieval, enhancing the app's functionality.</p><br/><br/>
Push Notifications:<br/>

<p className="text-[14px] mt-[5px]">I implemented push notifications using Firebase Cloud Messaging (FCM), enabling real-time communication and engagement with app users.
Users received timely updates and alerts, enhancing their overall app experience.</p><br/><br/>
Performance Optimization:<br/>

<p className="text-[14px] mt-[5px]">I optimized the app's performance, focusing on minimizing load times, reducing memory usage, and ensuring smooth animations and transitions.</p><br/><br/>
Testing and Debugging:</br>

<p className="text-[14px] mt-[5px]">I conducted rigorous testing, including unit testing and end-to-end testing, to identify and resolve issues promptly.
Debugging was a crucial part of my role, ensuring a bug-free and stable mobile app.</p><br/><br/>
Collaboration and Agile Workflow:<br/>

<p className="text-[14px] mt-[5px]">I collaborated closely with designers, product managers, and other team members, following an Agile methodology to deliver features and updates on time.
Efficient communication and teamwork were essential in achieving project milestones.</p><br/><br/>
Documentation:<br/>

<p className="text-[14px] mt-[5px]">I maintained comprehensive documentation for code, APIs, and integration processes, facilitating collaboration and knowledge sharing within the team.</p><br/><br/>
As a React Native Mobile Developer at Rocket Firm, I was committed to delivering top-notch mobile applications that provided users with a seamless and engaging experience. My proficiency in the tech stack and dedication to best practices ensured that our mobile apps met the highest quality standards and exceeded user expectations.
      `,
    skills: [
      "React Native",
      "Redux",
      "Saga",
      "Google Cloud",
      "Firebase",
      "Firestorage",
    ],
  },
];
