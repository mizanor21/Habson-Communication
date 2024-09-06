import Image from "next/image";
import React from "react";

const Items = () => {
  const items = [
    {
      id: 1,
      category: "Casestudy",
      thumbnail: "web-dev-thumb.jpg",
      title: "Responsive Website Design",
      detailsTitle: "Building Modern and Responsive Websites",
      services: [
        {
          serviceName: "UI/UX Design",
          description:
            "Creating user-centered designs focused on functionality and aesthetics.",
        },
        {
          serviceName: "Frontend Development",
          description:
            "Implementing responsive and interactive interfaces using HTML, CSS, and JavaScript.",
        },
      ],
      serviceDetails:
        "Our team builds engaging websites with a focus on user experience, optimized performance, and scalability.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 2,
      category: "Casestudy",
      thumbnail: "digital-marketing-thumb.jpg",
      title: "SEO & Content Strategy",
      detailsTitle: "Boosting Visibility and Engagement",
      services: [
        {
          serviceName: "SEO Optimization",
          description:
            "Improving website rankings on search engines through effective strategies.",
        },
        {
          serviceName: "Content Marketing",
          description:
            "Crafting compelling content that attracts and converts target audiences.",
        },
      ],
      serviceDetails:
        "Our data-driven approach ensures that your brand is visible to your audience, driving engagement and growth.",
      industry: "Marketing",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 3,
      category: "Casestudy",
      thumbnail: "graphic-design-thumb.jpg",
      title: "Creative Visual Branding",
      detailsTitle: "Crafting Unique Brand Identities",
      services: [
        {
          serviceName: "Logo Design",
          description:
            "Designing memorable and impactful logos that represent your brand.",
        },
        {
          serviceName: "Brand Guidelines",
          description:
            "Establishing consistent visual standards for your brand across all platforms.",
        },
      ],
      serviceDetails:
        "We create stunning visuals that communicate your brand message effectively, from concept to final design.",
      industry: "Creative",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 4,
      category: "Casestudy",
      thumbnail: "mobile-dev-thumb.jpg",
      title: "Custom Mobile App Solutions",
      detailsTitle: "Building Intuitive Mobile Experiences",
      services: [
        {
          serviceName: "iOS Development",
          description:
            "Creating robust and user-friendly apps for the Apple ecosystem.",
        },
        {
          serviceName: "Android Development",
          description: "Building scalable apps tailored for Android users.",
        },
      ],
      serviceDetails:
        "Our mobile app solutions prioritize usability, performance, and seamless experiences for your users.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 5,
      category: "Casestudy",
      thumbnail: "consulting-thumb.jpg",
      title: "Business Strategy Consulting",
      detailsTitle: "Driving Growth Through Insightful Strategies",
      services: [
        {
          serviceName: "Market Analysis",
          description:
            "In-depth analysis of market trends and opportunities for your business.",
        },
        {
          serviceName: "Operational Strategy",
          description:
            "Optimizing business processes to enhance efficiency and profitability.",
        },
      ],
      serviceDetails:
        "We partner with you to develop actionable strategies that deliver measurable results for your business.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 6,
      category: "Casestudy",
      thumbnail: "cloud-services-thumb.jpg",
      title: "Scalable Cloud Solutions",
      detailsTitle: "Enabling Digital Transformation with Cloud",
      services: [
        {
          serviceName: "Cloud Migration",
          description:
            "Seamless migration of applications and data to cloud platforms.",
        },
        {
          serviceName: "Managed Cloud Services",
          description:
            "Comprehensive cloud management and optimization services.",
        },
      ],
      serviceDetails:
        "Our cloud solutions help your business transition smoothly and securely to cloud-based infrastructure.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 7,
      category: "Casestudy",
      thumbnail: "ecommerce-thumb.jpg",
      title: "Custom E-commerce Platforms",
      detailsTitle: "Building Online Stores for Global Success",
      services: [
        {
          serviceName: "Store Development",
          description:
            "Creating user-friendly and scalable online stores tailored to your needs.",
        },
        {
          serviceName: "Payment Integration",
          description:
            "Secure payment gateway integration for seamless transactions.",
        },
      ],
      serviceDetails:
        "We deliver feature-rich e-commerce platforms designed to scale with your business growth.",
      industry: "Retail",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 8,
      category: "Casestudy",
      thumbnail: "content-creation-thumb.jpg",
      title: "Engaging Content Development",
      detailsTitle: "Creating Impactful Stories and Media",
      services: [
        {
          serviceName: "Video Production",
          description:
            "High-quality video content for marketing, branding, and storytelling.",
        },
        {
          serviceName: "Copywriting",
          description:
            "Compelling and persuasive content for web, social media, and print.",
        },
      ],
      serviceDetails:
        "Our content creation services help you tell your brand’s story in ways that captivate and convert your audience.",
      industry: "Creative",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 9,
      category: "Casestudy",
      thumbnail: "cybersecurity-thumb.jpg",
      title: "Advanced Security Solutions",
      detailsTitle: "Protecting Your Digital Assets",
      services: [
        {
          serviceName: "Threat Assessment",
          description:
            "Identifying potential risks and vulnerabilities within your systems.",
        },
        {
          serviceName: "Security Implementation",
          description:
            "Deploying best-in-class security measures to safeguard your infrastructure.",
        },
      ],
      serviceDetails:
        "Our experts provide comprehensive cybersecurity solutions to protect your business from threats and attacks.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 10,
      category: "Casestudy",
      thumbnail: "data-analytics-thumb.jpg",
      title: "Data-Driven Insights",
      detailsTitle: "Turning Data into Actionable Strategies",
      services: [
        {
          serviceName: "Business Intelligence",
          description:
            "Transforming raw data into meaningful insights for better decision-making.",
        },
        {
          serviceName: "Predictive Analytics",
          description:
            "Forecasting trends and behaviors using advanced analytics techniques.",
        },
      ],
      serviceDetails:
        "We harness data to provide deep insights that drive strategic growth and innovation.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 11,
      category: "Daily Creativity",
      thumbnail: "hr-thumb.jpg",
      title: "Talent Acquisition & Management",
      detailsTitle: "Building High-Performing Teams",
      services: [
        {
          serviceName: "Recruitment Services",
          description:
            "Identifying and attracting top talent for your organization.",
        },
        {
          serviceName: "Employee Engagement",
          description:
            "Strategies and programs to boost employee satisfaction and retention.",
        },
      ],
      serviceDetails:
        "Our HR solutions focus on aligning talent with your business goals to drive productivity and growth.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 12,
      category: "Daily Creativity",
      thumbnail: "it-support-thumb.jpg",
      title: "Managed IT Services",
      detailsTitle: "Supporting Your IT Infrastructure",
      services: [
        {
          serviceName: "Help Desk Support",
          description:
            "24/7 support services to resolve technical issues promptly.",
        },
        {
          serviceName: "Network Management",
          description:
            "Ensuring optimal performance and uptime for your network infrastructure.",
        },
      ],
      serviceDetails:
        "We offer reliable and responsive IT support solutions to keep your business running smoothly.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 13,
      category: "Daily Creativity",
      thumbnail: "project-management-thumb.jpg",
      title: "Agile Project Delivery",
      detailsTitle: "Executing Projects with Precision and Agility",
      services: [
        {
          serviceName: "Project Planning",
          description: "Developing detailed plans to ensure project success.",
        },
        {
          serviceName: "Agile Coaching",
          description:
            "Implementing Agile methodologies for better collaboration and faster delivery.",
        },
      ],
      serviceDetails:
        "Our project management services ensure timely delivery and exceed expectations through structured execution.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 14,
      category: "Daily Creativity",
      thumbnail: "software-dev-thumb.jpg",
      title: "Custom Software Development",
      detailsTitle: "Tailored Software Solutions for Unique Needs",
      services: [
        {
          serviceName: "Web Applications",
          description:
            "Developing scalable and robust web applications for businesses.",
        },
        {
          serviceName: "Mobile Applications",
          description:
            "Creating mobile apps that deliver seamless user experiences.",
        },
      ],
      serviceDetails:
        "We develop custom software solutions that address your specific business challenges and drive growth.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 15,
      category: "Daily Creativity",
      thumbnail: "digital-transformation-thumb.jpg",
      title: "Digital Transformation Services",
      detailsTitle: "Empowering Businesses with Digital Innovation",
      services: [
        {
          serviceName: "Strategy Development",
          description:
            "Crafting digital strategies that align with your business goals.",
        },
        {
          serviceName: "Technology Implementation",
          description:
            "Implementing cutting-edge technologies to drive efficiency and innovation.",
        },
      ],
      serviceDetails:
        "Our digital transformation services help businesses leverage technology to innovate and compete in the digital age.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 16,
      category: "Daily Creativity",
      thumbnail: "automation-thumb.jpg",
      title: "Process Automation Solutions",
      detailsTitle: "Streamlining Operations Through Automation",
      services: [
        {
          serviceName: "RPA Implementation",
          description:
            "Deploying Robotic Process Automation to enhance operational efficiency.",
        },
        {
          serviceName: "Workflow Automation",
          description:
            "Automating business processes to reduce manual work and increase productivity.",
        },
      ],
      serviceDetails:
        "We help businesses automate their processes, reducing costs and improving efficiency.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 17,
      category: "Casestudy",
      thumbnail: "virtual-reality-thumb.jpg",
      title: "Immersive Virtual Reality Experiences",
      detailsTitle: "Creating Engaging VR Solutions for Your Business",
      services: [
        {
          serviceName: "VR Development",
          description:
            "Building immersive virtual reality experiences for various industries.",
        },
        {
          serviceName: "Interactive VR Content",
          description:
            "Creating engaging VR content that captivates and educates audiences.",
        },
      ],
      serviceDetails:
        "We specialize in developing VR solutions that provide unique and immersive experiences for users.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 18,
      category: "Casestudy",
      thumbnail: "crm-thumb.jpg",
      title: "Custom CRM Solutions",
      detailsTitle:
        "Enhancing Customer Relationships with Tailored CRM Systems",
      services: [
        {
          serviceName: "CRM Development",
          description:
            "Building custom CRM systems that meet your business needs.",
        },
        {
          serviceName: "Integration Services",
          description:
            "Integrating CRM systems with other business tools for seamless operations.",
        },
      ],
      serviceDetails:
        "Our CRM solutions help businesses manage customer relationships more effectively and drive growth.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 19,
      category: "Casestudy",
      thumbnail: "ai-thumb.jpg",
      title: "AI-Powered Business Solutions",
      detailsTitle: "Leveraging Artificial Intelligence for Business Growth",
      services: [
        {
          serviceName: "Machine Learning",
          description:
            "Implementing machine learning models to drive predictive insights.",
        },
        {
          serviceName: "AI Integration",
          description:
            "Integrating AI technologies into your existing systems to enhance capabilities.",
        },
      ],
      serviceDetails:
        "We develop AI solutions that empower businesses to innovate and compete more effectively.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 20,
      category: "Casestudy",
      thumbnail: "blockchain-thumb.jpg",
      title: "Blockchain Development Services",
      detailsTitle: "Building Secure and Transparent Blockchain Solutions",
      services: [
        {
          serviceName: "Blockchain Consulting",
          description:
            "Providing expert guidance on implementing blockchain technology.",
        },
        {
          serviceName: "Smart Contracts",
          description:
            "Developing smart contracts to automate and secure business transactions.",
        },
      ],
      serviceDetails:
        "We offer blockchain development services that enable businesses to leverage the benefits of distributed ledger technology.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 21,
      category: "Daily Creativity",
      thumbnail: "iot-thumb.jpg",
      title: "IoT Solutions for Smart Businesses",
      detailsTitle: "Connecting Devices and Systems for Enhanced Operations",
      services: [
        {
          serviceName: "IoT Development",
          description:
            "Developing IoT solutions that connect devices and enable real-time data exchange.",
        },
        {
          serviceName: "Device Integration",
          description:
            "Integrating IoT devices with existing systems for seamless operations.",
        },
      ],
      serviceDetails:
        "Our IoT solutions help businesses optimize operations, reduce costs, and enhance customer experiences.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 22,
      category: "Daily Creativity",
      thumbnail: "supply-chain-thumb.jpg",
      title: "Supply Chain Management Solutions",
      detailsTitle: "Optimizing Supply Chains for Efficiency and Resilience",
      services: [
        {
          serviceName: "Supply Chain Optimization",
          description:
            "Improving supply chain operations through data-driven strategies.",
        },
        {
          serviceName: "Logistics Management",
          description:
            "Streamlining logistics processes to enhance efficiency and reduce costs.",
        },
      ],
      serviceDetails:
        "We provide end-to-end supply chain solutions that help businesses improve efficiency and reduce costs.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 23,
      category: "Daily Creativity",
      thumbnail: "erp-thumb.jpg",
      title: "Custom ERP Solutions",
      detailsTitle:
        "Streamlining Business Operations with Tailored ERP Systems",
      services: [
        {
          serviceName: "ERP Development",
          description:
            "Building custom ERP systems to streamline business processes.",
        },
        {
          serviceName: "ERP Integration",
          description:
            "Integrating ERP systems with other business tools for seamless operations.",
        },
      ],
      serviceDetails:
        "Our ERP solutions help businesses manage their operations more efficiently and effectively.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 24,
      category: "Daily Creativity",
      thumbnail: "bi-thumb.jpg",
      title: "Business Intelligence Solutions",
      detailsTitle: "Transforming Data into Actionable Insights",
      services: [
        {
          serviceName: "BI Implementation",
          description:
            "Implementing business intelligence solutions to drive decision-making.",
        },
        {
          serviceName: "Data Warehousing",
          description:
            "Developing data warehouses to store and manage large volumes of data.",
        },
      ],
      serviceDetails:
        "Our business intelligence solutions help businesses make data-driven decisions that drive growth.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 25,
      category: "Daily Creativity",
      thumbnail: "customer-support-thumb.jpg",
      title: "Customer Support Solutions",
      detailsTitle: "Enhancing Customer Satisfaction with Reliable Support",
      services: [
        {
          serviceName: "Help Desk Support",
          description:
            "Providing 24/7 support to resolve customer issues quickly and efficiently.",
        },
        {
          serviceName: "Live Chat Solutions",
          description:
            "Implementing live chat systems to provide instant support to customers.",
        },
      ],
      serviceDetails:
        "Our customer support solutions help businesses improve customer satisfaction and loyalty.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 26,
      category: "Daily Creativity",
      thumbnail: "market-research-thumb.jpg",
      title: "Market Research & Analysis",
      detailsTitle: "Understanding Market Trends and Consumer Behavior",
      services: [
        {
          serviceName: "Market Research",
          description:
            "Conducting comprehensive market research to identify opportunities and challenges.",
        },
        {
          serviceName: "Consumer Insights",
          description:
            "Analyzing consumer behavior to inform marketing and product development strategies.",
        },
      ],
      serviceDetails:
        "Our market research services provide valuable insights that help businesses stay ahead of the competition.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 27,
      category: "Daily Creativity",
      thumbnail: "product-design-thumb.jpg",
      title: "Product Design & Development",
      detailsTitle: "Creating Innovative Products That Meet Market Needs",
      services: [
        {
          serviceName: "Product Design",
          description:
            "Designing products that are both functional and aesthetically pleasing.",
        },
        {
          serviceName: "Prototyping",
          description:
            "Developing prototypes to test and refine product designs before production.",
        },
      ],
      serviceDetails:
        "Our product design and development services help businesses create innovative products that meet market demands.",
      industry: "Creative",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 28,
      category: "Daily Creativity",
      thumbnail: "enterprise-solutions-thumb.jpg",
      title: "Enterprise Solutions",
      detailsTitle: "Delivering Scalable Solutions for Large Organizations",
      services: [
        {
          serviceName: "Enterprise Software Development",
          description:
            "Developing software solutions that meet the unique needs of large organizations.",
        },
        {
          serviceName: "System Integration",
          description:
            "Integrating enterprise software with existing systems for seamless operations.",
        },
      ],
      serviceDetails:
        "Our enterprise solutions help large organizations streamline operations, improve efficiency, and reduce costs.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 29,
      category: "Daily Creativity",
      thumbnail: "social-media-thumb.jpg",
      title: "Social Media Marketing",
      detailsTitle: "Building Strong Brands on Social Media",
      services: [
        {
          serviceName: "Social Media Strategy",
          description:
            "Developing strategies to build and engage your audience on social media platforms.",
        },
        {
          serviceName: "Content Creation",
          description:
            "Creating content that resonates with your audience and drives engagement.",
        },
      ],
      serviceDetails:
        "Our social media marketing services help businesses build strong brands and connect with their audience on social media.",
      industry: "Marketing",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 30,
      category: "Daily Creativity",
      thumbnail: "digital-marketing-thumb.jpg",
      title: "Digital Marketing Campaigns",
      detailsTitle: "Driving Growth Through Digital Channels",
      services: [
        {
          serviceName: "PPC Campaigns",
          description:
            "Managing pay-per-click campaigns to drive targeted traffic to your website.",
        },
        {
          serviceName: "SEO Optimization",
          description:
            "Improving your website’s visibility on search engines through effective SEO strategies.",
        },
      ],
      serviceDetails:
        "Our digital marketing services help businesses reach their target audience, increase brand awareness, and drive growth.",
      industry: "Marketing",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 31,
      category: "Daily Creativity",
      thumbnail: "branding-thumb.jpg",
      title: "Branding & Identity Design",
      detailsTitle: "Creating Memorable Brands That Stand Out",
      services: [
        {
          serviceName: "Brand Strategy",
          description:
            "Developing brand strategies that communicate your unique value proposition.",
        },
        {
          serviceName: "Logo Design",
          description:
            "Creating logos that are both memorable and representative of your brand.",
        },
      ],
      serviceDetails:
        "Our branding services help businesses create strong and memorable brands that resonate with their target audience.",
      industry: "Creative",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 32,
      category: "Daily Creativity",
      thumbnail: "web-dev-thumb.jpg",
      title: "Web Development",
      detailsTitle: "Building High-Performance Websites",
      services: [
        {
          serviceName: "Frontend Development",
          description:
            "Building responsive and interactive websites using HTML, CSS, and JavaScript.",
        },
        {
          serviceName: "Backend Development",
          description:
            "Developing robust backend systems to power your website.",
        },
      ],
      serviceDetails:
        "Our web development services help businesses create high-performance websites that deliver a great user experience.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 33,
      category: "Daily Creativity",
      thumbnail: "mobile-app-dev-thumb.jpg",
      title: "Mobile App Development",
      detailsTitle: "Creating Engaging Mobile Experiences",
      services: [
        {
          serviceName: "iOS Development",
          description:
            "Building user-friendly and engaging iOS apps for the Apple ecosystem.",
        },
        {
          serviceName: "Android Development",
          description:
            "Creating Android apps that are both functional and engaging.",
        },
      ],
      serviceDetails:
        "Our mobile app development services help businesses create engaging mobile experiences that drive growth.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 34,
      category: "Daily Creativity",
      thumbnail: "ux-design-thumb.jpg",
      title: "User Experience Design",
      detailsTitle: "Creating Intuitive and Engaging User Experiences",
      services: [
        {
          serviceName: "UI Design",
          description:
            "Designing user interfaces that are both visually appealing and easy to use.",
        },
        {
          serviceName: "UX Research",
          description:
            "Conducting user research to inform design decisions and improve user experiences.",
        },
      ],
      serviceDetails:
        "Our user experience design services help businesses create intuitive and engaging user experiences that drive growth.",
      industry: "Creative",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 35,
      category: "Daily Creativity",
      thumbnail: "cloud-solutions-thumb.jpg",
      title: "Cloud Solutions",
      detailsTitle: "Enabling Digital Transformation with Cloud Technologies",
      services: [
        {
          serviceName: "Cloud Migration",
          description:
            "Helping businesses migrate to the cloud with minimal disruption.",
        },
        {
          serviceName: "Cloud Management",
          description:
            "Providing ongoing cloud management and optimization services.",
        },
      ],
      serviceDetails:
        "Our cloud solutions help businesses leverage the power of cloud technologies to drive growth and innovation.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 36,
      category: "Daily Creativity",
      thumbnail: "cyber-security-thumb.jpg",
      title: "Cybersecurity Solutions",
      detailsTitle: "Protecting Your Business from Cyber Threats",
      services: [
        {
          serviceName: "Threat Detection",
          description:
            "Identifying and mitigating cyber threats before they can cause damage.",
        },
        {
          serviceName: "Incident Response",
          description:
            "Providing rapid response to security incidents to minimize damage.",
        },
      ],
      serviceDetails:
        "Our cybersecurity solutions help businesses protect their data and systems from cyber threats.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 37,
      category: "Daily Creativity",
      thumbnail: "data-analytics-thumb.jpg",
      title: "Data Analytics & Insights",
      detailsTitle: "Turning Data into Actionable Insights",
      services: [
        {
          serviceName: "Data Analysis",
          description: "Analyzing data to identify trends and opportunities.",
        },
        {
          serviceName: "Predictive Analytics",
          description:
            "Using predictive analytics to forecast future trends and behaviors.",
        },
      ],
      serviceDetails:
        "Our data analytics services help businesses make data-driven decisions that drive growth.",
      industry: "Technology",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 38,
      category: "Daily Creativity",
      thumbnail: "digital-transformation-thumb.jpg",
      title: "Digital Transformation Services",
      detailsTitle: "Helping Businesses Embrace Digital Innovation",
      services: [
        {
          serviceName: "Digital Strategy",
          description:
            "Developing digital strategies that align with your business goals.",
        },
        {
          serviceName: "Technology Implementation",
          description:
            "Implementing cutting-edge technologies to drive digital innovation.",
        },
      ],
      serviceDetails:
        "Our digital transformation services help businesses leverage technology to drive growth and innovation.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 39,
      category: "Daily Creativity",
      thumbnail: "financial-services-thumb.jpg",
      title: "Financial Services",
      detailsTitle: "Providing Financial Solutions for Businesses",
      services: [
        {
          serviceName: "Financial Planning",
          description:
            "Helping businesses develop and implement financial plans.",
        },
        {
          serviceName: "Investment Management",
          description:
            "Providing investment management services to help businesses grow.",
        },
      ],
      serviceDetails:
        "Our financial services help businesses manage their finances and achieve their financial goals.",
      industry: "Business",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
    {
      id: 40,
      category: "Daily Creativity",
      thumbnail: "marketing-thumb.jpg",
      title: "Marketing Strategy",
      detailsTitle: "Developing Effective Marketing Strategies",
      services: [
        {
          serviceName: "Market Research",
          description:
            "Conducting market research to inform marketing strategies.",
        },
        {
          serviceName: "Campaign Management",
          description:
            "Managing marketing campaigns to drive brand awareness and engagement.",
        },
      ],
      serviceDetails:
        "Our marketing strategy services help businesses develop and implement effective marketing strategies.",
      industry: "Marketing",
      img: "https://i.postimg.cc/RZwSMndR/img1.png",
    },
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-20">
      {items.map((item) => (
        <div key={item.id}>
          <Image
            src={item.img}
            alt=""
            width={500}
            height={100}
            className="rounded-xl"
          />
          <h2 className="text-md font-bold mt-3">{item.title}</h2>
          <p className="text-[22px]">{item.detailsTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
