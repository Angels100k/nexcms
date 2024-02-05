// theme/aeonian/component/section.tsx
import Button  from "./atom/button"

const SectionComponent = (props: any) => {
  
  const { image, title, text, button } = props
  // Component implementation
  const sectionStyle = {
    filter: "brightness(0.3)",
};
button.label = button.text
return (
    <section className="h-screen flex w-full flex-col z-20 relative">
        <div className="absolute h-screen max-h-screen w-full top-0">
            {/* width screensize */}
            <img src={image.url} alt={image.alt} width={image.width} height={image.height} style={sectionStyle} className="object-cover z-20 h-screen" />
        </div>
        <div className="content-center m-auto text-center text-white z-30">
            <h1 className="text-primary md:text-6xl text-3xl mb-4">{title}</h1>
            <p className="mb-4">{text}</p>
            <Button button={button} />
        </div>
    </section>
)
};

export default SectionComponent;
