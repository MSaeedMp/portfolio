import About from "@/components/about/About";
import TechCard from "@/components/about/TechCard";
import TechList from "@/components/about/TechList";
import CtaButton from "@/components/buttons/PrimaryButton";
import Certificate from "@/components/certificate/Certificate";
import CertificateCard from "@/components/certificate/CertificateCard";
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
import ProjectCard from "@/components/project/ProjectCard";
import ProjectList from "@/components/project/ProjectList";
import Research from "@/components/research/Research";
import ResearchLinkButton from "@/components/research/ResearchLinkButton";
import ResearchStat from "@/components/research/ResearchStat";
import ResearchStatList from "@/components/research/ResearchStatList";
import {
  aboutContent,
  buttonLables,
  certificateContent,
  heroIntro,
  projectsContent,
  researchContent,
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
          <TechList>
            {aboutContent.techs.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </TechList>
        </About>
      </section>

      <section className="pt-28 pb-20 relative" id="projects">
        <Project>
          <SectionHeading>
            <SectionMainHeading heading={projectsContent.heading} />
            <SectionSubHeading heading={projectsContent.subHeading} />
          </SectionHeading>
          <ProjectList>
            {projectsContent.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ProjectList>
        </Project>
      </section>

      <section className="pt-28 relative" id="certificates">
        <Certificate>
          <SectionHeading>
            <SectionMainHeading heading={certificateContent.heading} />
            <SectionSubHeading heading={certificateContent.subHeading} />
          </SectionHeading>
          <CertificateList>
            {certificateContent.certificates.map((certificate, index) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </CertificateList>
        </Certificate>
      </section>
      <section className="pt-28 relative" id="research">
        <Research>
          <SectionHeading>
            <SectionMainHeading heading={researchContent.heading} />
            <SectionSubHeading heading={researchContent.subHeading} />
          </SectionHeading>
          <ResearchStatList>
            {researchContent.stats.map((stat, index) => (
              <ResearchStat stat={stat} key={index} />
            ))}
            <ResearchLinkButton
              label={researchContent.linkLable}
              link={researchContent.linkToGoogleScholar}
            />
          </ResearchStatList>
          <div className="h-[500px] w-full"></div>
        </Research>
      </section>
    </main>
  );
};
export default HomePage;
