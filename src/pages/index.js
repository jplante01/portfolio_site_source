// To use client-side navigation, use the following code:
// import Link from 'next/link';
// {/* This link will use client-side navigation */}
// <Link href="/about">About Us</Link>

import Header from '../components/Header';
import HeroSection from '../components/Hero';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

// Main App Component
const Home = ({ portfolioItems = [] }) => {
  return (
    <div className="background-gradient flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      {portfolioItems && <PortfolioGrid portfolioItems={portfolioItems} />}
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const fs = require('fs');
    const path = require('path');

    // Read the JSON file
    const projectsData = fs.readFileSync(
      path.join(process.cwd(), 'src/data/projects.json'),
      'utf-8'
    );
    const portfolioItems = JSON.parse(projectsData);

    return {
      props: {
        portfolioItems,
      },
    };
  } catch (error) {
    console.error('Error loading portfolio items:', error);
    return {
      props: {
        portfolioItems: [], // Return empty array on error
      },
    };
  }
}

export default Home;
