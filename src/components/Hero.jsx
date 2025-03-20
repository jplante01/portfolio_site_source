const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I&apos;m <span className="text-indigo-200">Jeffrey</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-indigo-100 leading-relaxed">
            A passionate developer focused on creating beautiful and functional web experiences
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
