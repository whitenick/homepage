// Converted from styled-components to plain CSS-in-JS
// Simplified for compatibility without styled-components

export const FadeIn = ({ children }) => (
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    background: '#ffd863',
    animation: 'fade 4s normal forwards ease-in-out'
  }}>
    {children}
    <style jsx>{`
      @keyframes fade {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `}</style>
  </div>
);

export const Container = ({ children }) => (
  <div style={{
    fontFamily: 'Inter',
    fontSize: '16px'
  }}>
    {children}
    <style jsx>{`
      div :global(h1) {
        padding: 0;
        margin: 0 0 0.05em 0;
        fontFamily: 'Ayer Poster, serif';
        fontWeight: 400;
        fontSize: 'min(18vw, 14em)';
        lineHeight: '0.85em';
      }
    `}</style>
  </div>
);

export const TopLeft = ({ children }) => (
  <div style={{ position: 'absolute', top: '5vw', left: '5vw' }}>
    {children}
  </div>
);

export const BottomLeft = ({ children }) => (
  <div style={{
    position: 'absolute',
    bottom: '5vw',
    left: '5vw',
    width: '30ch',
    maxWidth: '40%'
  }}>
    {children}
  </div>
);

export const BottomRight = ({ children }) => (
  <div style={{
    position: 'absolute',
    bottom: '5vw',
    right: '5vw',
    width: '35ch',
    maxWidth: '40%',
    lineHeight: '1em',
    letterSpacing: '-0.01em',
    textAlign: 'right'
  }}>
    {children}
  </div>
);

export const Hamburger = ({ children }) => (
  <div style={{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '5vw',
    right: '5vw'
  }}>
    {children}
    <style jsx>{`
      div :global(> div) {
        position: relative;
        width: 24px;
        height: 2px;
        background: #252525;
        marginBottom: 6px;
      }
    `}</style>
  </div>
);

export const LeftMiddle = ({ children }) => (
  <div style={{
    position: 'absolute',
    bottom: '50%',
    right: '5vw',
    fontFamily: 'Inter',
    fontWeight: 400,
    lineHeight: '1em',
    letterSpacing: '-0.01em',
    fontSize: '12px',
    transform: 'rotate(90deg) translate3d(50%, 0, 0)',
    transformOrigin: '100% 50%'
  }}>
    {children}
  </div>
);
