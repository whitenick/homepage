import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AlienSaucer from '@/components/AlienSaucer';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-adobe-cream text-adobe-darker antialiased min-h-screen">
      <Head>
        <title>About — Nick White</title>
        <meta name="description" content="Engineering manager based in Austin, TX" />
        <link rel="icon" href="./mountain.ico" />
      </Head>

      <div className="max-w-lg mx-auto px-6 py-24 md:py-32">
        
        {/* Top row: UFO left, menu toggle right */}
        <div className="flex items-start justify-between mb-10">
          <Link href="/" className="opacity-80">
            <AlienSaucer />
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-sm text-adobe-dark hover:text-adobe-darker transition-colors flex items-center gap-1"
          >
            <span>Menu</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 4.5L6 7.5L9 4.5"/>
            </svg>
          </button>
        </div>
        
        {/* Expandable pages menu */}
        {menuOpen && (
          <div className="flex gap-6 text-sm mb-10 pb-6 border-b border-adobe-light">
            <span className="text-adobe-darker">About</span>
            <Link href="/blog" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              Blog
            </Link>
            <Link href="/app" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              Old Homepage
            </Link>
          </div>
        )}

        {/* Name + page indicator */}
        <Link href="/" className="block mb-3">
          <h1 className="font-headline text-4xl md:text-5xl font-medium tracking-tight text-adobe-darker hover:text-red-clay transition-colors">
            Nick White
          </h1>
        </Link>
        <p className="text-adobe-dark text-lg mb-12">About</p>

        {/* Bio */}
        <div className="space-y-6 text-adobe-dark leading-relaxed mb-12">
          <p>
            I&apos;m an engineering manager based in Austin, TX. By day I lead teams building software; 
            nights and weekends I tinker on side projects at the intersection of technology and everyday life.
          </p>
          <p>
            When I&apos;m not at a keyboard, you&apos;ll find me hiking desert trails, cooking for family, 
            or chasing my kid around the backyard.
          </p>
        </div>

        {/* Details */}
        <div className="border-t border-adobe-light pt-8 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-adobe-dark">Location</span>
            <span className="text-adobe-darker">Austin, TX</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-adobe-dark">Work</span>
            <span className="text-adobe-darker">Engineering Manager</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-adobe-dark">Side projects</span>
            <span className="text-adobe-darker">Serapio Labs</span>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-adobe-light">
          <p className="text-sm text-adobe-dark mb-4">Get in touch</p>
          <div className="flex gap-6 text-sm">
            <a 
              href="mailto:nick@serapiolabs.com"
              className="text-adobe-dark hover:text-red-clay transition-colors"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/nick-white-a4ba63110/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-adobe-dark hover:text-red-clay transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/whitenick" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-adobe-dark hover:text-red-clay transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-adobe-light">
          <p className="text-sm text-adobe-dark/60">© 2026 · Austin, TX</p>
        </div>

      </div>
    </div>
  );
}
