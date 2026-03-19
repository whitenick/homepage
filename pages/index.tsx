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
        
        {/* Google Fonts: Space Grotesk (headlines), Inter (body), Playfair Display (accent) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
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
          
          {/* Social Links - refined, professional */}
          <nav className="flex gap-3">
            <a 
              href="https://www.linkedin.com/in/nick-white-a4ba63110/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-adobe-darker text-white rounded-lg font-body text-sm font-medium tracking-wide hover:bg-turquoise transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/whitenick" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-adobe-dark text-adobe-darker rounded-lg font-body text-sm font-medium tracking-wide hover:bg-adobe-darker hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            <a 
              href="https://buymeacoffee.com/wicknight" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-adobe-dark text-adobe-darker rounded-lg font-body text-sm font-medium tracking-wide hover:bg-desert-marigold hover:border-desert-marigold hover:text-white transition-colors duration-200"
            >
              Coffee
            </a>
          </nav>
        </div>
      </header>
      
      {/* Navigation - clean, professional */}
      <nav className="container mx-auto px-6 py-4 max-w-4xl">
        <div className="border-b border-adobe-light pb-4">
          <ul className="flex justify-center gap-10 md:gap-14 font-body text-sm font-medium uppercase tracking-widest">
            <li>
              <a href="/app" className="text-adobe-dark hover:text-red-clay transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="/app/projects" className="text-adobe-dark hover:text-red-clay transition-colors duration-200">
                Projects
              </a>
            </li>
            <li>
              <a href="/app/games" className="text-adobe-dark hover:text-red-clay transition-colors duration-200">
                Lab
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Section */}
      <main className="container mx-auto px-6 py-20 max-w-3xl">
        
        {/* About Section */}
        <section id="about" className="mb-24">
          <div className="border-l-2 border-red-clay pl-8 md:pl-12">
            <h2 className="font-display font-semibold text-3xl md:text-4xl text-adobe-darker mb-6 tracking-tight">
              Software Engineer & Builder
            </h2>
            <div className="font-body text-base md:text-lg text-adobe-dark leading-relaxed space-y-4 max-w-2xl">
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
        <section id="projects" className="mb-24">
          <p className="font-body text-sm font-medium uppercase tracking-widest text-adobe-dark mb-4">
            Featured Project
          </p>
          
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-warm mb-12">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
              <h3 className="font-headline font-bold text-2xl md:text-3xl text-adobe-darker">
                {projects[0].name}
              </h3>
              <div className="flex gap-2 flex-wrap">
                {projects[0].tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-adobe-light text-adobe-dark rounded text-xs font-body font-medium uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-body text-base text-adobe-dark leading-relaxed mb-6 max-w-2xl">
              MealMind uses artificial intelligence to create personalized meal plans tailored to your
              dietary preferences, health goals, and lifestyle. Track nutrition, discover recipes, and
              maintain a healthy relationship with food.
            </p>
            <a 
              href={projects[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-clay text-white rounded-lg font-body text-sm font-medium hover:bg-adobe-darker transition-colors duration-200"
            >
              Visit MealMind
              <span aria-hidden="true">→</span>
            </a>
          </div>
          
          {/* Other Projects */}
          <p className="font-body text-sm font-medium uppercase tracking-widest text-adobe-dark mb-6">
            Other Projects
          </p>
          
          <div className="grid gap-4">
            {projects.slice(1).map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="group block"
              >
                <article className="flex items-center justify-between p-5 border border-adobe-light rounded-lg hover:border-adobe-dark hover:shadow-subtle transition-all duration-200">
                  <div className="flex items-center gap-4">
                    <h4 className="font-headline font-semibold text-lg text-adobe-darker group-hover:text-red-clay transition-colors">
                      {project.name}
                    </h4>
                    <span className="hidden sm:block text-adobe-dark/60">—</span>
                    <p className="hidden sm:block font-body text-sm text-adobe-dark">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 bg-adobe-light text-adobe-dark rounded text-xs font-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>
        
      </main>
      
      {/* Footer - Minimal */}
      <footer className="container mx-auto px-6 py-20 max-w-4xl border-t border-adobe-light">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-sm text-adobe-dark">
            © {new Date().getFullYear()} Nick White
          </p>
          <div className="flex gap-8">
            <a 
              href="https://github.com/whitenick"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-adobe-dark hover:text-adobe-darker transition-colors duration-200 font-body text-sm"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/nick-white-a4ba63110/"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-adobe-dark hover:text-adobe-darker transition-colors duration-200 font-body text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="https://buymeacoffee.com/wicknight"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-adobe-dark hover:text-adobe-darker transition-colors duration-200 font-body text-sm"
            >
              Coffee
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
