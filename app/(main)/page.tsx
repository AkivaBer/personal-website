import HomeClient from './HomeClient';
import { reader } from '../../lib/keystatic';

export default async function Page() {
  const homepage = await reader.singletons.homepage.read();
  const publications = await reader.collections.publications.all();

  // Handle case where homepage might not exist yet
  const defaultHomepage = {
    heroTitleLine1: 'Leadership in <br />',
    heroTitleLine2: 'Clinical Excellence',
    heroDescription: "Associate Division Chief of Emergency Medicine at Children's National Hospital and Associate Professor at GWU. Bridging clinical mastery with medical-legal expertise and academic leadership."
  };

  const publicationsData = publications.map(p => ({
    title: p.entry.title || '',
    year: p.entry.year || '',
    journal: p.entry.journal || '',
    tag: p.entry.tag || '',
  })).sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by newest year

  return (
    <HomeClient 
      homepageData={homepage || defaultHomepage} 
      publicationsData={publicationsData} 
    />
  );
}
