import { Layers, Network } from "lucide-react";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300"
  >
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <motion.div
        className="relative mb-6"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10" />
      </motion.div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <motion.h3
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {title}
        </motion.h3>
        <div className="flex justify-between items-center text-gray-300">
          <motion.span
            className="font-semibold text-blue-400"
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {company}
          </motion.span>
          <motion.span
            className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {period}
          </motion.span>
        </div>
        <motion.p
          className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <motion.div
          className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50"
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <motion.div
          className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50"
          animate={{ height: ["0%", "100%"] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Frontend Developer",
      company: "Intelin",
      period: "2023 - Now",
      description:
        "Worked on developing and customizing WordPress websites for clients globally.",
    },
    {
      icon: Layers,
      title: "Frontend Developer",
      company: "Goware",
      period: "2023 - 2024",
      description:
        "Assisted in building and optimizing user interfaces with a focus on responsive and interactive designs.",
    },
    // {
    //   icon: Code2,
    //   title: "JavaScript Developer",
    //   company: "OlovJS (Sera Programmer)",
    //   period: "2023 - Present",
    //   description:
    //     "Contributed to developing JavaScript libraries and enhancing framework functionalities.",
    // },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <motion.div
            className="flex flex-col items-center space-y-8 mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.h2
                className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Professional Journey
              </motion.h2>
              <motion.div
                className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            <motion.p
              className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              "Transforming ideas into digital reality, one project at a time"
            </motion.p>
          </motion.div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
        />
      </div>
    </>
  );
};

export default ExperienceSection;
