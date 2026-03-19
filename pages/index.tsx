import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AlienSaucer from '@/components/AlienSaucer';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-adobe-cream text-adobe-darker antialiased min-h-screen">
      <Head>
        <title>Nick White</title>
        <meta name="description" content="Engineer, builder, tinkerer" />
        <link rel="icon" href="./mountain.ico" />
      </Head>

      <div className="max-w-lg mx-auto px-6 py-24 md:py-32">
        
        {/* Top row: UFO left, menu toggle right */}
        <div className="flex items-start justify-between mb-10">
          <div className="opacity-80">
            <AlienSaucer />
          </div>
          
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
            <Link href="/about" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              Blog
            </Link>
            <Link href="/app" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              Old Homepage
            </Link>
          </div>
        )}

        {/* Name + Title */}
        <h1 className="font-headline text-4xl md:text-5xl font-medium tracking-tight text-adobe-darker mb-3">
          Nick White
        </h1>
        <p className="text-adobe-dark text-lg mb-10">Engineer, builder, tinkerer</p>

        {/* Social Links */}
        <div className="flex gap-6 text-sm mb-16">
          <a 
            href="https://github.com/whitenick" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-adobe-dark hover:text-red-clay transition-colors"
          >
            GitHub
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
            href="mailto:nick@serapiolabs.com"
            className="text-adobe-dark hover:text-red-clay transition-colors"
          >
            Email
          </a>
        </div>

        {/* Divider */}
        <div className="w-12 h-px bg-adobe-light mb-12"></div>

        {/* Projects */}
        <div className="space-y-6">
          
          <a 
            href="https://mlb-4e2.pages.dev/create-account" 
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-headline text-xl font-medium group-hover:text-red-clay transition-colors">
                DishSync
              </span>
              <span className="text-adobe-dark text-sm group-hover:text-red-clay transition-colors">→</span>
            </div>
            <p className="text-adobe-dark text-sm mt-1">AI meal planning for families</p>
          </a>

          <a 
            href="https://whitenick.github.io/recipes/" 
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-headline text-xl font-medium group-hover:text-dusty-olive transition-colors">
                Nick&apos;s Kitchen
              </span>
              <span className="text-adobe-dark text-sm group-hover:text-dusty-olive transition-colors">→</span>
            </div>
            <p className="text-adobe-dark text-sm mt-1">Recipe collection & meal ideas</p>
          </a>

          <div className="group block opacity-50 pointer-events-none">
            <div className="flex items-baseline justify-between">
              <span className="font-headline text-xl font-medium">Serapio Labs</span>
              <span className="text-adobe-dark text-sm">soon</span>
            </div>
            <p className="text-adobe-dark text-sm mt-1">Product studio</p>
          </div>

          <Link href="/app/games" className="group block">
            <div className="flex items-baseline justify-between">
              <span className="font-headline text-xl font-medium group-hover:text-desert-marigold transition-colors">
                Lab
              </span>
              <span className="text-adobe-dark text-sm group-hover:text-desert-marigold transition-colors">→</span>
            </div>
            <p className="text-adobe-dark text-sm mt-1">Experiments & side projects</p>
          </Link>

        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-adobe-light">
          <p className="text-sm text-adobe-dark/60">© 2026 · Austin, TX</p>
        </div>

      </div>
    </div>
  );
}
