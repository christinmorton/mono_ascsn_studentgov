
import { GetHomepageContent, GetPage } from "@/actions/PageActions";
import ASCSNContentSection from "@/components/ASCSNContentSection";
import ASCSNStudentUnionsSection from "@/components/ASCSNStudentUnionsSection";
import GuidanceSection from "@/components/GuidanceSection";
import ResourceLinks from "@/components/ResourceLinks";
import ResourcesSection from "@/components/ResourcesSection";
import StudentBodyGovernmentSection from "@/components/StudentBodyGovernmentSection";
import SupportSection from "@/components/SupportSection";

const Home = async () => {
  const page = await GetPage('homepage');
  const content = await GetHomepageContent();
  // console.log(page)
  console.log(content)
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <GuidanceSection content={content.guidance} />
      
      <SupportSection content={content.support} />

      <ResourcesSection content={content.resources} />

      <ResourceLinks content={content.resourceLinks} />

      <StudentBodyGovernmentSection content={content.studentGovernmentBody}/>

      <ASCSNStudentUnionsSection content={content.studentUnions} />

      {content.ascsnContent.map((content, index) => (
        <ASCSNContentSection key={index} content={content} />
      ))}
    </main>
  );
}

export default Home