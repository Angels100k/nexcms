"use client"
// theme/aeonian/component/faq.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '@/theme/aeonian/css/slider.css'; // Import your CSS file


const SectionComponent = (props: any) => {
  const { title, text, items } = props;
  return (
    <section className="flex flex-wrap md:flex-row container mx-4 md:mx-auto w-auto">
        <div className="md:w-1/2 w-full text-center">
            <div className='md:w-4/5 mx-auto'>
                <h2 className='text-primary  font-bold md:text-3xl text-2xl mb-4'>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
        <div className="md:w-1/2 w-full">
            <div className="container-faq">
                {items.map((item: any) => (
                    <Item item={item} />
                ))}
            </div>
        </div>

    </section>
)
};

const Item =  ({ item }: { item: any })=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
      setIsOpen(!isOpen);
  };

  return (
      <div className="bg-primary flow-root mb-2 rounded-md">
          <div className="p-5 cursor-pointer" onClick={toggleOpen}>
              <span className='text-white flex'>
                  {item.question}
                  {isOpen ? <FontAwesomeIcon className='flex ml-auto' icon={faMinus} width={20} height={20}  /> : <FontAwesomeIcon className='flex ml-auto' icon={faPlus} width={20} height={20}  />}
              </span>
          </div>
          <CSSTransition
              in={isOpen}
              timeout={300}
              classNames="slide"
              unmountOnExit
              className="bg-white p-4 m-2 rounded-md"
          >
              <div>
                  {item.awnser}
              </div>
          </CSSTransition>
      </div>
  );
};


export default SectionComponent;
