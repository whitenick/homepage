import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AlienSaucer from '@/components/AlienSaucer';

export default function Blog() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-adobe-cream text-adobe-darker antialiased min-h-screen">
      <Head>
        <title>Blog — Nick White</title>
        <meta name="description" content="Thoughts and updates" />
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
            <Link href="/about" className="text-adobe-dark hover:text-adobe-darker transition-colors">
              About
            </Link>
            <span className="text-adobe-darker">Blog</span>
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
        <p className="text-adobe-dark text-lg mb-12">Blog</p>

        {/* Empty state */}
        <div className="border border-dashed border-adobe-light rounded-lg p-8 text-center mb-12">
          <p className="text-adobe-dark text-sm mb-2">Nothing here yet</p>
          <p className="text-adobe-dark/60 text-sm">Check back soon — or don&apos;t, I&apos;m not your boss.</p>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-adobe-light">
          <p className="text-sm text-adobe-dark/60">© 2026 · Austin, TX</p>
        </div>

      </div>
    </div>
  );
}
