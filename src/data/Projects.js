
export default [
    {
      id: 1, title: "PrEP", company: "Save The Children, NACP", date: "Sept 2024 - Nov 2024", role: "Programmer", description: `A project focused on Forms data storing in Google sheet  and data fetching for tracking and visualization in dashboard. Making also user interface for clients`,
      challenges: "The challenge was updating result result of the clients, and auto fetching data in consolidated data",
      solutions: "Kept different table for updating test result and then by tracking through UID made possible for  passing data in consolidate date, which apply same for automation tracking by UID and picking require filed for consolidated data",
      image: require('@/assets/savethechildern.png'), project_image: require('@/assets/Prep.png'), stack: ["Vue", "Googlesheet", "Firebase"]
    },
    {
      id: 2, title: "DrukCLM", company: "Save the Children", date: "June 2024 - Aug 2024", role: "Frontend Developer", description: `A project focused on UX/UI design and data passing for a web appellation.`,
      challenges: "The challenge was passing data through filtered year to all the component",
      solutions: " By adding watcher and reactive  in the script and store data in pinia and by using Props and inject method it help to pass filtered data to all the component",
      image: require('@/assets/savethechildern.png'), project_image: require('@/assets/Prep.png'), stack: ["Vue", "Tailwind"]
    },
    {
      id: 3,
      title: "The Pema Secretariat",
      company: "Company Y",
      date: "Aug 2023 - Sept 2024",
  
      role: "Frontend",
      description: `A project focused on Data passing for a web application..
            - Designed user interfaces.
            - Conducted user testing.`,
      challenges: "The challenge was to design an intuitive interface for tracking multiple health metrics at once.",
      solutions: "We streamlined the interface by categorizing metrics and using visual aids like graphs and charts to provide easy-to-understand data.",
      image: require('@/assets/ThePema.jpg'),
      project_image: require('@/assets/Prep.png'),
      stack: ["Figma", "Vue", "JavaScript", "Tailwind"]
    },
    {
      id: 4,
      title: " Odoo For Tshongkha",
      company: "Tshongkha Hatil showroom",
      date: "july 2023 - Aug 2024",
  
      role: "Developer",
      description: `A project focused on 
            - customization based on clients requirements.
            - Purchase , sales , inventory, Hr, payroll and accounting .
            - Conducted user testing.`,
      challenges: "The challenge was to implement product variants price configuration for individual having both for mater product and product variants",
      solutions: "By Understating Master product field, inheriting customized field for both fields cross checking the updates and data fetching in purchase and sales model. ",
      image: require('@/assets/Tshongkha.jpg'),
      project_image: require('@/assets/Prep.png'),
      stack: ["Python", "Odoo"]
    },
    {
      id: 5,
      title: " Odoo For Kuenjom",
      company: "Kuenjom Private Limited",
      date: "Dec 2022 - Mar 2023",
  
      role: "Developer",
      description: `A project focused on manufacture.
            - configuration for resource like raw materials.
            -  Purchase , sales , inventory, Hr, payroll and accounting ..
            - Conducted user testing.`,
      challenges: "The challenge was configuration and mapping its  resources for each manufacturing stage",
      solutions: "By understanding the flow of manufacturing process and we could break the manufacture stage and configure each resources conversion to each stage that could give accurate data for using each resource while covering in final products",
      image: require('@/assets/k.png'),
      project_image: require('@/assets/Prep.png'),
      stack: ["Python", "Odoo"]
    },
    {
      id: 6,
      title: "Smart Parking APP",
      company: "Desuung",
      date: "Aug 2022 - Feb 2023",
  
      role: "Data Science and UI/UX",
      description: `A project focused on modal training and designed user interfaces.`,
      challenges: "data accuracy on model training on number plate detection",
      solutions: "It was conclude for data accuracy  of 60% due to lack of  resource and data and large model training not train and hence we went with next approach with QR method for the project",
      image: require('@/assets/DSP.jpeg'),
      project_image: require('@/assets/Prep.png'),
      stack: ["Figma", "React", "JavaScript"]
    },
    {
      id: 7,
      title: "Face Recognition",
      company: "None",
      date: "Apr 2023 - Apr 2023",
  
      role: "Developer",
      description: ' Data analysis',
      challenges: "",
      solutions: "",
      image: require('@/assets/DSP.jpeg'),
      project_image: require('@/assets/facerecogniton.png'),
      stack: ["MachineLearning", "Python", "JavaScript"]
    },
    {
      id: 8,
      title: "Data Analytics",
      company: "Small Projects",
      date: "sept 2021 - Mar 2022",
  
      role: "Data Analyst",
      description: 'Done multiple projects on stock Price prediction, Housing analytics of America household on IMD data sets, Job opportunities in bhutan using web scraping for analysis',
      image: require('@/assets/Desung.jpeg'),
      challenges: "",
      solutions: "",
      project_image: require('@/assets/Prep.png'),
      stack: ["Pandas", "webscraping", "Html", "Bootstrap", 'Python']
    },
  ];