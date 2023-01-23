import { Navbar, Introduction, Skillset, Projects, Certificates, Contact, Footer } from "@/components"

export default function Home() {
  return (
      <div>
        <Navbar/>
        <Introduction/>
        <Skillset/>
        <Projects/>
        <Certificates/>
        <Contact/>
        <Footer/>
      </div>
  )
}
