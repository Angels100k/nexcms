// theme/aeonian/component/section.tsx
import Button  from "./atom/button"

import {SectionProps} from '../interface/section'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";

const SectionComponent: React.FC<SectionProps> = (props: any) => {
  const { title, mainText, subText, button, image, reverse } = props;
  // Component implementation
  let reverseClass = reverse ? "md:flex-row-reverse" : "md:flex-row";
  const defaultValue = {
    label: "Default",
    url: "/",
  };
  button.label = button.text
  return (
    <section className={"container flex relative flex-col mx-auto z-20 py-9 " + reverseClass}>
        <div className="md:w-1/2 flex">
            {image ? <img src={image.url} alt={image.alt} className="rounded-lg mx-auto object-cover" /> : null}
        </div>
        <div className="content-center m-auto text-center md:w-1/2 z-10 mt-10 md:mt-0">
          <div className="md:w-4/5 mx-auto">
            <h2 className="text-primary  font-bold md:text-3xl text-2xl mb-4">{title}</h2>
            <h3 className="mb-4 text-second text-xl">{mainText}</h3>
            {subText.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
              <p key={index} className="mb-4 text-text ">{item}</p>
            ))}
            <Button button={button ?? defaultValue} />
          </div>
        </div>
    </section>
  );
};

export default SectionComponent;
