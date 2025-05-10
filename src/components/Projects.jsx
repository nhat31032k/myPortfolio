import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design. The website showcases my skills, experience, and projects in an elegant and interactive way.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      demo: "https://your-portfolio-url.com",
      github: "https://github.com/your-username/portfolio",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Features include user authentication, product search, shopping cart, and order tracking.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Redux",
        "Stripe",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/your-username/ecommerce",
    },
    {
      title: "AI Chat Application",
      description:
        "An intelligent chat application powered by OpenAI's GPT model. Features include real-time messaging, context-aware responses, and a modern UI with dark/light mode support. The app also includes message history and export functionality.",
      technologies: ["Python", "FastAPI", "React", "OpenAI API", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813a743d?q=80&w=2070&auto=format&fit=crop",
      demo: "https://ai-chat-demo.com",
      github: "https://github.com/your-username/ai-chat",
    },
    {
      title: "Task Management System",
      description:
        "A collaborative task management system with real-time updates, team collaboration features, and advanced filtering options. Includes task assignment, progress tracking, deadline management, and automated notifications.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebSocket"],
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=2070&auto=format&fit=crop",
      demo: "https://task-manager-demo.com",
      github: "https://github.com/your-username/task-manager",
    },
    {
      title: "Social Media Dashboard",
      description:
        "A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include real-time analytics, custom reporting, engagement metrics, and automated content scheduling.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      demo: "https://social-dashboard-demo.com",
      github: "https://github.com/your-username/social-dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          My Projects
        </h2>
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
