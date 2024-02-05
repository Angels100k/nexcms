import Link from "next/link"

const Button = ({ button, numb = 1 }: { button: any, numb?: number }) => {
    // check if url is external
    const isExternal = button.url.startsWith("https");

    let className = "";
    if(button.label === "Default") return null;
    
    switch (numb) {
        case 1:
            className = "primary-button"
            break;
        case 2:
            className = "secondary-button"
            break;
        case 3: 
            className = "book-button"
            break;
        default:
            className = "primary-button"
            break;
    }
    // if isExternal true target blank
    return <Link 
                className={className} 
                href={button.url}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                >{button.label}</Link>
}

export default Button