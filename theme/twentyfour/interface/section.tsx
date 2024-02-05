export interface SectionProps {
    image: {
        url: string;
        alt: string;
    }
    title: string
    mainText: string
    subText: string[]
    button: {
        label: string
        url: string
    }
    reverse?: boolean
}