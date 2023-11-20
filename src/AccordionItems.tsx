import { Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { FadeIn } from './FadeIn';
import type { DelayStep } from './FadeIn';

type AccordionItemsProps = {
  isOpen?: boolean;
};

export const AccordionItems = ({ isOpen = false }: AccordionItemsProps) => {
  const items = [
    { id: '1', name: 'First item' },
    { id: '2', name: 'Second item' },
    { id: '3', name: 'Third item' },
    { id: '4', name: 'Fourth item' },
    { id: '5', name: 'Fifth item' },
    { id: '6', name: 'Sixth item' },
    { id: '7', name: 'Seventh item' },
    { id: '8', name: 'Eigth item' },
    { id: '9', name: 'Nineth item' },
    { id: '10', name: 'Tenth item' },
  ];

  return (
    <Transition.Root show={isOpen} appear as="div">
      <Transition.Child
        as={Fragment}
        enter="transition-max-height duration-600"
        enterFrom="max-h-0"
        enterTo="max-h-fit"
        leave="transition-max-height duration-100"
        leaveFrom="max-h-48"
        leaveTo="max-h-0"
      >
        <div className="transition-max-height overflow-hidden">
          <div className="transition-all">
            <div className="rounded-b-md border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div className="border-l dark:border-gray-700 pl-3 ml-5 pt-2 mt-0.5 mb-4">
                <div className="grid">
                  {items.map((automation, index) => (
                    <FadeIn
                      key={automation.id}
                      delay={index < 9 ? (index as DelayStep) : 8}
                    >
                      {automation.name}
                    </FadeIn>
                  ))}
                  {
                    <button
                      className="max-w-fit mb-2 hover:bg-gray-200 text-sm"
                      onClick={() => {}}
                    >
                      <div className="flex items-center text-sento-primary dark:text-gray-200">
                        <PlusIcon className="h-4 w-4 mr-1" />
                        Add item
                      </div>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition.Root>
  );
};
