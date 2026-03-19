export default function AlienSaucer() {
  return (
    <div className="alien-saucer">
      <svg width="100" height="64" viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main saucer body - refined geometric */}
        <ellipse cx="50" cy="38" rx="42" ry="10" fill="#4A7C7C" opacity="0.2"/>
        <ellipse cx="50" cy="36" rx="42" ry="10" fill="#4A7C7C"/>
        
        {/* Dome/cockpit - cleaner shape */}
        <path d="M 30 36 Q 30 20, 50 20 Q 70 20, 70 36" fill="#B85C38"/>
        <ellipse cx="50" cy="36" rx="20" ry="3" fill="#4A7C7C" opacity="0.4"/>
        
        {/* Window - simplified */}
        <ellipse cx="50" cy="26" rx="6" ry="5" fill="#C9A66B" opacity="0.6"/>
        
        {/* Minimal accent line */}
        <line x1="20" y1="36" x2="80" y2="36" stroke="#C9A66B" strokeWidth="1" opacity="0.3"/>
      </svg>
      
      <style jsx>{`
        @keyframes drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        .alien-saucer {
          animation: drift 6s ease-in-out infinite;
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}
