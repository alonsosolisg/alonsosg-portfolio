import Certificates from "@/components/certificates";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/reusable/footer";
import Navbar from "@/components/reusable/navbar";
import Skillset from "@/components/skillset";

export default function Home() {
  return (
    <div className="font-roboto text-3xl bg-customYellow-500 font-extrabold w-full">
      <Navbar />
      <Hero />
      <Projects />
      <Skillset />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
