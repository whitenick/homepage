import React from 'react';
import Typed from 'typed.js';

function TypedDiv(props: {
    strings: string[],
    className?: string,
    style: React.CSSProperties,
}) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: props.strings,
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className={props.className} style={props.style}>
      <span ref={el} />
    </div>
  );
}

export default TypedDiv;