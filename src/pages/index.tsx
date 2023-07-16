import Skills from "@/components/Skills/Skills";
import Jobs from "@/components/Jobs/Jobs";
import HumanLanguages from "@/components/HumanLanguages/HumanLanguages";
import ContactMe from "@/components/ContactMe/ContactMe";
import PestTitle from "@/components/PestTitle.tsx/PestTitle";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-white h-full w-screen flex flex-col items-center justify-center text-black lowercase mb-96 px-56">
      <section className="flex flex-col justify-center items-center h-screen gap-8">
        <PestTitle />
        <ContactMe />
      </section>
      <section className="flex flex-col justify-center items-center h-auto mb-96">
        <About />
      </section>
      <section className="flex flex-col gap-16 justify-center items-center h-screen ">
        <Skills />
        <HumanLanguages />
      </section>
      <section className="mt-32">
        <Jobs />
      </section>
      <section className="flex flex-col gap-16 justify-center items-center h-screen ">
        <Projects />
      </section>
    </main>
  );
}
