export default function AlienSaucer() {
  return (
    <div className="alien-saucer">
      <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main saucer body - folk art pottery style */}
        <ellipse cx="60" cy="45" rx="50" ry="12" fill="#5B9B9F" opacity="0.3"/>
        <ellipse cx="60" cy="42" rx="50" ry="12" fill="#5B9B9F"/>
        
        {/* Dome/cockpit - organic rounded shape */}
        <path d="M 35 42 Q 35 25, 60 25 Q 85 25, 85 42" fill="#C85C3E"/>
        <ellipse cx="60" cy="42" rx="25" ry="4" fill="#5B9B9F" opacity="0.5"/>
        
        {/* Window */}
        <ellipse cx="60" cy="32" rx="8" ry="6" fill="#E8A84D" opacity="0.7"/>
        
        {/* Folk art details - simple dots */}
        <circle cx="40" cy="42" r="2" fill="#E8A84D" opacity="0.8"/>
        <circle cx="50" cy="42" r="2" fill="#E8A84D" opacity="0.8"/>
        <circle cx="70" cy="42" r="2" fill="#E8A84D" opacity="0.8"/>
        <circle cx="80" cy="42" r="2" fill="#E8A84D" opacity="0.8"/>
        
        {/* Light beam suggestion - subtle */}
        <path d="M 55 54 L 45 75 L 75 75 L 65 54 Z" fill="#E8A84D" opacity="0.15"/>
      </svg>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .alien-saucer {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
