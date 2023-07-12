type SlotElement = "section" | "div" | "form";

const Slot = 
    <T extends any>(as?: SlotElement) => 
    (props: { children: React.ReactNode; className?: string } & T) => {
        switch (as) {
            case "section":
                return <section className={props.className}>{props.children}</section>;
            case "div":
                return <div className={props.className}>{props.children}</div>;
            case "form":    
                return <form className={props.className}>{props.children}</form>;
            default:
                return <>{props.children}</>
        }
    };

export default Slot;