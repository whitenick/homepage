import Head from 'next/head';
import Link from 'next/link';
import AlienSaucer from '@/components/AlienSaucer';

export default function Home() {
  return (
    <div className="bg-adobe-cream text-adobe-darker antialiased">
      <Head>
        <title>Nick White - Design & Animation</title>
        <meta name="description" content="Creating thoughtful digital experiences with a focus on motion, interaction, and the small details that make interfaces feel alive." />
        <link rel="icon" href="./mountain.ico" />
        
        {/* Google Fonts: Cormorant Garamond (headlines) & Source Serif 4 (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap" rel="stylesheet" />
      </Head>

      {/* Header with Alien Saucer */}
      <header className="container mx-auto px-6 py-8 max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Folk Art Alien Saucer */}
          <AlienSaucer />
          
          {/* Name */}
          <h1 className="font-headline font-bold text-5xl md:text-6xl text-adobe-darker tracking-tight">
            Nick White
          </h1>
          
          {/* Social Links - warm, rounded */}
          <nav className="flex gap-4">
            <a 
              href="https://linkedin.com/in/nickwhite" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-turquoise text-white rounded-3xl font-body text-sm tracking-wide hover:shadow-warm transition-all duration-300 hover:scale-105"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/whitenick" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-adobe-dark text-white rounded-3xl font-body text-sm tracking-wide hover:shadow-warm transition-all duration-300 hover:scale-105"
            >
              GitHub
            </a>
            <a 
              href="https://buymeacoffee.com/nickwhite" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-desert-marigold text-white rounded-3xl font-body text-sm tracking-wide hover:shadow-warm transition-all duration-300 hover:scale-105"
            >
              Coffee
            </a>
          </nav>
        </div>
      </header>
      
      {/* Navigation - intimate courtyard style */}
      <nav className="container mx-auto px-6 py-6 max-w-4xl">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl px-8 py-4 shadow-warm">
          <ul className="flex justify-center gap-8 md:gap-12 font-headline text-lg">
            <li>
              <a href="#about" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="#animation" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                Animation
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Section - 80% whitespace, clean focus */}
      <main className="container mx-auto px-6 py-20 max-w-3xl">
        
        {/* About Section */}
        <section id="about" className="mb-32">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-warm-lg">
            <h2 className="font-headline font-semibold text-4xl md:text-5xl text-red-clay mb-8">
              Design & Animation
            </h2>
            <div className="font-body text-lg md:text-xl text-adobe-darker leading-relaxed space-y-6">
              <p>
                Creating thoughtful digital experiences with a focus on motion, 
                interaction, and the small details that make interfaces feel alive.
              </p>
              <p>
                I believe great design is like great architecture — it should feel 
                inevitable, warm, and human.
              </p>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-adobe-darker mb-12 text-center">
            Selected Work
          </h2>
          
          <div className="space-y-8">
            {/* Project Card Example */}
            <article className="bg-adobe-light rounded-2xl p-10 hover:shadow-warm transition-shadow duration-300">
              <h3 className="font-headline font-semibold text-2xl text-red-clay mb-4">
                Project Name
              </h3>
              <p className="font-body text-adobe-darker leading-relaxed mb-6">
                Brief description of the project, the challenge, and the creative solution. 
                Focus on craft and thoughtful decision-making.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-1.5 bg-turquoise/20 text-turquoise rounded-full text-sm font-body">
                  Design
                </span>
                <span className="px-4 py-1.5 bg-desert-marigold/20 text-adobe-darker rounded-full text-sm font-body">
                  Animation
                </span>
              </div>
            </article>
            
            {/* Add more project cards as needed */}
            <article className="bg-white rounded-2xl p-10 hover:shadow-warm transition-shadow duration-300">
              <h3 className="font-headline font-semibold text-2xl text-red-clay mb-4">
                Another Project
              </h3>
              <p className="font-body text-adobe-darker leading-relaxed mb-6">
                Each project tells a story. This modular design makes it easy to add 
                more work as your portfolio grows.
              </p>
              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-1.5 bg-turquoise/20 text-turquoise rounded-full text-sm font-body">
                  UI/UX
                </span>
              </div>
            </article>
          </div>
        </section>
        
        {/* Animation Section */}
        <section id="animation" className="mb-32">
          <div className="bg-gradient-to-br from-turquoise/10 to-desert-marigold/10 rounded-3xl p-12 md:p-16 border border-turquoise/20">
            <h2 className="font-headline font-semibold text-3xl md:text-4xl text-adobe-darker mb-6">
              Motion & Interaction
            </h2>
            <p className="font-body text-lg text-adobe-darker leading-relaxed mb-8">
              Animation isn't decoration — it's communication. It guides attention, 
              provides feedback, and adds personality to digital experiences.
            </p>
            <a href="#" className="inline-block px-8 py-3 bg-red-clay text-white rounded-3xl font-body hover:shadow-warm transition-all duration-300 hover:scale-105">
              View Animation Reel
            </a>
          </div>
        </section>
        
      </main>
      
      {/* Footer - Simple & Warm */}
      <footer className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center">
          <p className="font-body text-adobe-dark mb-4">
            Let's create something together
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:hello@nickwhite.com" 
              className="text-turquoise hover:text-red-clay transition-colors duration-200 font-body"
            >
              hello@nickwhite.com
            </a>
          </div>
          <p className="font-body text-sm text-adobe-dark/60">
            Designed with warmth in Santa Fe © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
