import profileImage from "../assets/images/myavatar.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I'm Nguyen Hoang Quang Nhat, a passionate JavaScript
            developer specializing in creating innovative web solutions and
            user-friendly interfaces. As the creator of the Frontend Developer
            with 2 years of experience in building high-performance,
            user-friendly web interfaces. Proficient in modern web technologies
            and deeply knowledgeable in UX/UI principles. Previously worked at
            South Telecom and currently contributing to Intelin. Seeking
            advanced career opportunities in Frontend Engineering to further
            enhance my expertise and drive innovative solutions.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
