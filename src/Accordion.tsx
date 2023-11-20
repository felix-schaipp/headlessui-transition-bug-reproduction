import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

import { PropsWithChildren } from 'react';
import { filterClassNames } from './utils';

type AccordionProps = {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Accordion = ({
  title,
  isOpen,
  setIsOpen,
  children,
}: PropsWithChildren<AccordionProps>) => {
  return (
    <Disclosure>
      <Disclosure.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex items-center justify-between w-full p-4 rounded-md font-medium text-left text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 group"
      >
        {title}
        <ChevronRightIcon
          className={filterClassNames(
            isOpen ? 'rotate-90 transform' : '',
            'h-6 w-6'
          )}
        />
      </Disclosure.Button>
      <Disclosure.Panel>{children}</Disclosure.Panel>
    </Disclosure>
  );
};
