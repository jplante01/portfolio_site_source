import PortfolioCard from './PortfolioCard';

const PortfolioGrid = ({ portfolioItems }) => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              tags={item.tags}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


export default PortfolioGrid;
