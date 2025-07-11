import type { FC } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
