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
      img: "https://i.postimg.cc/Hxw3TZ7G/Screenshot-20.png",
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
      img: "https://i.postimg.cc/vZ8mhcv5/Screenshot-21.png",
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
      img: "https://i.postimg.cc/Xq2P0HTj/Screenshot-27.png",
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
      img: "https://i.postimg.cc/15fCqKkF/Screenshot-28.png",
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
      img: "https://i.postimg.cc/1tmM500f/Screenshot-29.png",
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
      img: "https://i.postimg.cc/KYJBf6L8/Screenshot-35.png",
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
      img: "https://i.postimg.cc/ZKpfHqqY/Screenshot-37.png",
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
      img: "https://i.postimg.cc/CLsGdn18/Screenshot-39.png",
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
      img: "https://i.postimg.cc/T2mS707X/Screenshot-45.png",
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
      img: "https://i.postimg.cc/NfBNNc21/Screenshot-46.png",
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
      img: "https://i.postimg.cc/4Ny8C1wd/Screenshot-47.png",
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
      img: "https://i.postimg.cc/c4vckL4t/Screenshot-48.png",
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
      img: "https://i.postimg.cc/QCyR7NjG/Screenshot-49.png",
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
      img: "https://i.postimg.cc/XYVzvyfG/Screenshot-50.png",
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
      img: "https://i.postimg.cc/XJwfFs3V/Screenshot-51.png",
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
      img: "https://i.postimg.cc/76VCwdwT/Screenshot-52.png",
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
      img: "https://i.postimg.cc/zX9fZ8Kc/Screenshot-54.png",
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
      img: "https://i.postimg.cc/zvzxGsWm/Screenshot-58.png",
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
            className="rounded-xl h-64"
          />
          <h2 className="text-md font-bold mt-3">{item.title}</h2>
          <p className="text-[22px]">{item.detailsTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
