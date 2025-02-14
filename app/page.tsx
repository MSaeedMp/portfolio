import About from "@/components/about/About";
import TechList from "@/components/about/TechList";
import CtaButton from "@/components/buttons/CtaButton";
import Certificate from "@/components/certificate/Certificate";
import CertificateList from "@/components/certificate/CertificateList";
import MarkedText from "@/components/global/MarkedText";
import Hero from "@/components/hero/Hero";
import HeroIntro from "@/components/hero/HeroIntro";
import HeroMainHeading from "@/components/hero/HeroMainHeading";
import HeroProfile from "@/components/hero/HeroProfile";
import HeroSubHeading from "@/components/hero/HeroSubHeading";
import ProfileImage from "@/components/hero/ProfileImage";
import SocialMediaLinks from "@/components/hero/SocialMediaLinks";
import SectionHeading from "@/components/home/SectionHeading";
import SectionMainHeading from "@/components/home/SectionMainHeading";
import SectionSubHeading from "@/components/home/SectionSubHeading";
import Project from "@/components/project/Project";
import ProjectList from "@/components/project/ProjectList";
import {
  aboutContent,
  buttonLables,
  certificateContent,
  heroIntro,
  projectsContent,
} from "@/util/constants";

const HomePage = () => {
  return (
    <main>
      <section className="md:pt-52 pt-32 pb-20 relative" id="home">
        <Hero>
          <HeroIntro className="row-start-2 md:row-start-1">
            <HeroMainHeading heading={heroIntro.heading} />
            <HeroSubHeading heading={heroIntro.subHeading} />
            <SocialMediaLinks />
            <CtaButton className="md:self-start" label={buttonLables.cta} />
          </HeroIntro>
          <HeroProfile className="row-start-1 md:row-start-1">
            <ProfileImage />
          </HeroProfile>
        </Hero>
      </section>

      <section className="pt-28 pb-20 relative" id="about">
        <About>
          <SectionHeading>
            <SectionMainHeading heading={aboutContent.heading} />
            <SectionSubHeading heading={aboutContent.subHeading} />
          </SectionHeading>
          <MarkedText text={aboutContent.description} />
          <TechList />
        </About>
      </section>

      <section className="pt-28 pb-20 relative" id="projects">
        <Project>
          <SectionHeading>
            <SectionMainHeading heading={projectsContent.heading} />
            <SectionSubHeading heading={projectsContent.subHeading} />
          </SectionHeading>
          <ProjectList />
        </Project>
      </section>

      <section className="pt-28 relative" id="certificates">
        <Certificate>
          <SectionHeading>
            <SectionMainHeading heading={certificateContent.heading} />
            <SectionSubHeading heading={certificateContent.subHeading} />
          </SectionHeading>
          <CertificateList />
          <div className="h-[500px]"></div>
        </Certificate>
      </section>
    </main>
  );
};
export default HomePage;
