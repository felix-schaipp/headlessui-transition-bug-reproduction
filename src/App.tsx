import { useState } from 'react';
import { Accordion } from './Accordion';
import { AccordionItems } from './AccordionItems';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  return (
    <div>
      <h1 className="text-2xl leading-7 sm:truncate sm:text-3xl ">
        TailwindUI - Transition bug reproduction
      </h1>
      <p className="text-gray-500 dark:text-gray-300 font-light">
        On local the bug is not happening but as soon as we have a deployed
        system the app crashes when opening the accordion.
      </p>
      <Accordion title="My accordion" isOpen={isOpen} setIsOpen={setIsOpen}>
        <AccordionItems isOpen={isOpen} />
      </Accordion>
    </div>
  );
};
