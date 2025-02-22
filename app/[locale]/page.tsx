"use client";

import About from "@/components/about/About";
import TechCard from "@/components/about/TechCard";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Certificate from "@/components/certificate/Certificate";
import CertificateCard from "@/components/certificate/CertificateCard";
import Contact from "@/components/contact/Contact";
import ContactButton from "@/components/contact/ContactButton";
import MarkedText from "@/components/global/MarkedText";
import Section from "@/components/home/Section";
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
import MoTionListBottomToTop from "@/components/motion/MotionListBottomToTop";
import MotionListLeftToRight from "@/components/motion/MotionListLeftToRight";
import Project from "@/components/project/Project";
import ProjectCard from "@/components/project/ProjectCard";
import Research from "@/components/research/Research";
import ResearchLinkButton from "@/components/research/ResearchLinkButton";
import ResearchStat from "@/components/research/ResearchStat";
import { MotionBottomToTop } from "@/components/motion/MotionBottomToTop";
import { MotionLeftToRight } from "@/components/motion/MotionLeftToRight";
import { links } from "@/util/constants";
import { MotionRightToLeft } from "@/components/motion/MotionRightToLeft";
import { useTranslations } from "next-intl";
import {
  CertificateType,
  ContactType,
  ProjectType,
  StatType,
  TechType,
} from "@/util/types";
import DownloadButton from "@/components/buttons/DownloadButton";
import ContactMeButton from "@/components/buttons/ContactMeButton";

const LocalePage = () => {
  const t = useTranslations();

  return (
    <main>
      <Section className="md:!pt-52 !pt-32" id="home">
        <Hero>
          <HeroIntro className="row-start-2 md:row-start-1">
            <MotionLeftToRight className="flex flex-col gap-4">
              <HeroMainHeading heading={t("hero.heading")} />
              <HeroSubHeading heading={t("hero.subHeading")} />
              <SocialMediaLinks />
              <div className="flex flex-col gap-2 lg:gap-4 lg:flex-row lg:items-center  mt-4">
                <DownloadButton
                  download="Mafipour_CV"
                  link="/Mafipour_CV.pdf"
                  label={t("buttons.downloadCv")}
                />
                <ContactMeButton />
              </div>
            </MotionLeftToRight>
          </HeroIntro>
          <HeroProfile className="row-start-1 md:row-start-1">
            <MotionRightToLeft>
              <ProfileImage />
            </MotionRightToLeft>
          </HeroProfile>
        </Hero>
      </Section>

      <Section id="about-me">
        <About>
          <MotionBottomToTop>
            <SectionHeading>
              <SectionMainHeading heading={t("aboutMeSection.heading")} />
              <SectionSubHeading heading={t("aboutMeSection.subHeading")} />
            </SectionHeading>
            <MarkedText text={t("aboutMeSection.description")} />
          </MotionBottomToTop>
          <MotionListLeftToRight className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-20">
            {t.raw("aboutMeSection.techs")?.map((tech: TechType) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </MotionListLeftToRight>
        </About>
      </Section>

      <Section id="projects">
        <Project>
          <MotionBottomToTop>
            <SectionHeading>
              <SectionMainHeading heading={t("projectsSection.heading")} />
              <SectionSubHeading heading={t("projectsSection.subHeading")} />
            </SectionHeading>
          </MotionBottomToTop>
          <MoTionListBottomToTop className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
            {t.raw("projectsSection.projects")?.map((project: ProjectType) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </MoTionListBottomToTop>
        </Project>
      </Section>

      <Section id="research">
        <Research>
          <MotionBottomToTop>
            <SectionHeading>
              <SectionMainHeading heading={t("researchSection.heading")} />
              <SectionSubHeading heading={t("researchSection.subHeading")} />
            </SectionHeading>
          </MotionBottomToTop>
          <MoTionListBottomToTop className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {t.raw("researchSection.stats")?.map((stat: StatType) => (
              <ResearchStat stat={stat} key={stat.id} />
            ))}
            <ResearchLinkButton
              label={t("buttons.googleScholar")}
              link={links.googleScholar as string}
            />
          </MoTionListBottomToTop>
        </Research>
      </Section>

      <Section id="certificates">
        <Certificate>
          <MotionBottomToTop>
            <SectionHeading>
              <SectionMainHeading heading={t("certificatesSection.heading")} />
              <SectionSubHeading
                heading={t("certificatesSection.subHeading")}
              />
            </SectionHeading>
          </MotionBottomToTop>
          <MotionListLeftToRight className="w-full space-y-4">
            {t
              .raw("certificatesSection.certificates")
              ?.map((certificate: CertificateType) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
          </MotionListLeftToRight>
        </Certificate>
      </Section>

      <Section id="contact-me" className="!pb-36">
        <Contact>
          <MotionBottomToTop>
            <SectionHeading>
              <SectionMainHeading heading={t("contactMeSection.heading")} />
              <SectionSubHeading heading={t("contactMeSection.subHeading")} />
            </SectionHeading>
          </MotionBottomToTop>
          <MotionListLeftToRight className="flex items-center justify-center gap-5 sm:gap-8">
            {t.raw("contactMeSection.contacts")?.map((contact: ContactType) => (
              <ContactButton key={contact.id} contact={contact} />
            ))}
          </MotionListLeftToRight>
        </Contact>
      </Section>
    </main>
  );
};
export default LocalePage;
