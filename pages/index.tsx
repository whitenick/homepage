import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

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
    <div className="min-h-screen bg-background">
      <Head>
        <title>Nick White - Software Engineer & Builder</title>
        <meta name="description" content="Software engineer building products that matter" />
        <link rel="icon" href="./mountain.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Nick White
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Software Engineer & Builder
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Building products at the intersection of technology and real-world impact.
            Passionate about AI, education, and creating tools that help people.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="#projects">
              <Button size="lg">View Projects</Button>
            </Link>
            <Link href="https://github.com/whitenick" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                <FaGithub className="mr-2" />
                GitHub
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Project */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Project</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <CardTitle className="text-3xl">MealMind</CardTitle>
                  <div className="flex gap-2">
                    {projects[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CardDescription className="text-lg mt-2">
                  AI-powered meal planning and nutrition tracking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  MealMind uses artificial intelligence to create personalized meal plans tailored to your
                  dietary preferences, health goals, and lifestyle. Track nutrition, discover recipes, and
                  maintain a healthy relationship with food.
                </p>
                <Link href="https://mealmind.app" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full md:w-auto">
                    Visit MealMind →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8 text-center">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {projects.slice(1).map((project) => (
              <Link
                key={project.name}
                href={project.href}
                className="block transition-transform hover:scale-[1.02]"
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nick White. Built with Next.js & shadcn/ui.
            </p>
            <div className="flex gap-6">
              <Link
                href="https://github.com/whitenick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://linkedin.com/in/nickwhite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="https://twitter.com/whitenick"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
