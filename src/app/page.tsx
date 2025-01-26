import AboutSection from '@/components/sections/SummarySection';
import EducationSection from '@/components/sections/EducationSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EntrepreneurshipSection from '@/components/sections/EntrepreneurshipSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { ExperienceListItemProps } from '@/interfaces/ExperienceListInterface';

export default function Page() {
  const handleExperienceSelect = (experience: ExperienceListItemProps) => {
    console.log('Selected experience:', experience);
  };

  return (
    <>
      <AboutSection />
      <EducationSection />
      <ExperienceSection onExperienceSelect={handleExperienceSelect} />
      <EntrepreneurshipSection />
      <CaseStudiesSection />
    </>
  );
}