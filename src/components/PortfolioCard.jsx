const PortfolioCard = ({ image, title, description, tags, link, github }) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg overflow-hidden shadow-lg hover:shadow-xl shadow-gray-800 transition-all duration-300 hover:scale-105 border border-gray-200">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <div className="">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-row gap-8">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:text-indigo-800"
          >
            View Project →
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 font-medium hover:text-indigo-800"
          >
            View Github →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
