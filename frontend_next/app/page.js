
import { GetStudentGovernmentTermById, GetHomepageContent, GetPage } from "@/actions/PageActions";

import {CURRENT_STUDENT_GOVERNMENT_ID} from '@/utils/constants'

import ASCSNContentSection from "@/components/ASCSNContentSection";
import ASCSNStudentUnionsSection from "@/components/ASCSNStudentUnionsSection";
import GuidanceSection from "@/components/GuidanceSection";
import ResourceLinks from "@/components/ResourceLinks";
import ResourcesSection from "@/components/ResourcesSection";
import StudentBodyGovernmentSection from "@/components/StudentBodyGovernmentSection";
import StudentBodyStatsSection from "@/components/StudentBodyStatsSection";
import SupportSection from "@/components/SupportSection";

const Home = async () => {
  const page = await GetPage('homepage');
  const content = await GetHomepageContent();
  const term = await GetStudentGovernmentTermById(CURRENT_STUDENT_GOVERNMENT_ID);
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <GuidanceSection content={content.guidance} />

      <StudentBodyStatsSection />

      <ASCSNStudentUnionsSection content={content.studentUnions} />
      
      <SupportSection content={content.support} />

      <ResourcesSection content={content.resources} />

      <ResourceLinks content={content.resourceLinks} />

      <StudentBodyGovernmentSection content={term}/>

      {content.ascsnContent.map((content, index) => (
        <ASCSNContentSection key={index} content={content} />
      ))}
    </main>
  );
}

export default Home