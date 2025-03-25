const ComingSoonCard = () => {
  return (
    // Height set manually to match PortfolioCard height, may need to adjust in the future or refactor to make dynamic
    <div className="bg-transparent p-6 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 border border-gray-200 min-h-[425px]">
      <p className="text-gray-50 text-xl font-bold text-lexend">More coming soon...</p>
    </div>
  );
};

export default ComingSoonCard;
