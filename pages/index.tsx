import Head from 'next/head';
import Link from 'next/link';
import AlienSaucer from '@/components/AlienSaucer';

const projects = [
  {
    name: 'MealMind',
    description: 'AI-powered meal planning and nutrition tracking',
    href: 'https://mealmind.app',
    featured: true,
    tags: ['AI', 'Health', 'SaaS']
  },
  {
    name: 'BehaviorBuzz',
    description: 'Classroom behavior tracking for teachers',
    href: '/app/behavior-buzz',
    tags: ['Education', 'Tools']
  },
  {
    name: 'Bird TV',
    description: 'Live bird feeder camera stream',
    href: '/app/bird-tv',
    tags: ['IoT', 'Live']
  },
  {
    name: 'Space Explorer',
    description: '3D space exploration experience',
    href: '/app/space',
    tags: ['3D', 'WebGL']
  },
  {
    name: 'Games',
    description: 'Collection of browser-based games',
    href: '/app/games',
    tags: ['Games', 'Fun']
  }
];

export default function Home() {
  return (
    <div className="bg-adobe-cream text-adobe-darker antialiased min-h-screen">
      <Head>
        <title>Nick White - Software Engineer & Builder</title>
        <meta name="description" content="Building products at the intersection of technology and real-world impact." />
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
              href="https://www.linkedin.com/in/nick-white-a4ba63110/" 
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
              href="https://buymeacoffee.com/wicknight" 
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
              <a href="/app" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                about
              </a>
            </li>
            <li>
              <a href="/app/projects" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                projects
              </a>
            </li>
            <li>
              <a href="/app/games" className="text-adobe-darker hover:text-red-clay transition-colors duration-200">
                animation
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 max-w-3xl">
        
        {/* About Section */}
        <section id="about" className="mb-32">
          <div className="bg-white rounded-3xl p-12 md:p-16 shadow-warm-lg">
            <h2 className="font-headline font-semibold text-4xl md:text-5xl text-red-clay mb-8">
              Software Engineer & Builder
            </h2>
            <div className="font-body text-lg md:text-xl text-adobe-darker leading-relaxed space-y-6">
              <p>
                Building products at the intersection of technology and real-world impact. 
                Passionate about AI, education, and creating tools that help people.
              </p>
              <p>
                My work spans from AI-powered applications to interactive experiences, 
                always focused on solving meaningful problems.
              </p>
            </div>
          </div>
        </section>
        
        {/* Featured Project */}
        <section id="projects" className="mb-32">
          <h2 className="font-headline font-semibold text-3xl md:text-4xl text-adobe-darker mb-12 text-center">
            Featured Project
          </h2>
          
          <div className="bg-gradient-to-br from-turquoise/10 to-desert-marigold/10 rounded-3xl p-12 md:p-16 border-2 border-turquoise/20 mb-16">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <h3 className="font-headline font-semibold text-4xl text-red-clay">
                {projects[0].name}
              </h3>
              <div className="flex gap-3 flex-wrap">
                {projects[0].tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-1.5 bg-turquoise/20 text-turquoise rounded-full text-sm font-body font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-body text-lg text-adobe-darker leading-relaxed mb-8">
              MealMind uses artificial intelligence to create personalized meal plans tailored to your
              dietary preferences, health goals, and lifestyle. Track nutrition, discover recipes, and
              maintain a healthy relationship with food.
            </p>
            <a 
              href={projects[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-red-clay text-white rounded-3xl font-body hover:shadow-warm transition-all duration-300 hover:scale-105"
            >
              Visit MealMind →
            </a>
          </div>
          
          {/* Other Projects */}
          <h3 className="font-headline font-semibold text-2xl md:text-3xl text-adobe-darker mb-8 text-center">
            Other Projects
          </h3>
          
          <div className="space-y-8">
            {projects.slice(1).map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="block"
              >
                <article className="bg-adobe-light rounded-2xl p-10 hover:shadow-warm transition-shadow duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                    <h4 className="font-headline font-semibold text-2xl text-red-clay">
                      {project.name}
                    </h4>
                    <div className="flex gap-3 flex-wrap">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-4 py-1.5 bg-desert-marigold/20 text-adobe-darker rounded-full text-sm font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-adobe-darker leading-relaxed">
                    {project.description}
                  </p>
                </article>
              </a>
            ))}
          </div>
        </section>
        
      </main>
      
      {/* Footer - Simple & Warm */}
      <footer className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="text-center">
          <p className="font-body text-adobe-dark mb-4">
            Let's build something together
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://github.com/whitenick"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-turquoise hover:text-red-clay transition-colors duration-200 font-body"
            >
              GitHub
            </a>
            <span className="text-adobe-dark/40">•</span>
            <a 
              href="https://www.linkedin.com/in/nick-white-a4ba63110/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-turquoise hover:text-red-clay transition-colors duration-200 font-body"
            >
              LinkedIn
            </a>
            <span className="text-adobe-dark/40">•</span>
            <a 
              href="https://buymeacoffee.com/wicknight"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-turquoise hover:text-red-clay transition-colors duration-200 font-body"
            >
              Buy Me a Coffee
            </a>
          </div>
          <p className="font-body text-sm text-adobe-dark/60">
            © {new Date().getFullYear()} Nick White
          </p>
        </div>
      </footer>
    </div>
  );
}
