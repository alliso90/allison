import { Hero, Navbar, About, Tech, Experience, Projects, Contact, Footer } from "@/components";

export default function Home() {
  return (
    <div className="bg-flashWhite dark:bg-night font-sans min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Tech / Skills Section */}
      <Tech />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
