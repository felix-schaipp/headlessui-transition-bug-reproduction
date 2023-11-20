import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';

export type DelayStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type DelayNumber = 0 | 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
export type DelayClass = `delay-[${DelayNumber}ms]`;
type FadeInProps = {
  delay: DelayStep;
};

/**
 * __FadeIn__
 * @description
 * Fade in an element with a delay. Use within a Transition.Root component.
 * @param delay - 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
 */
export const FadeIn = ({ delay, children }: PropsWithChildren<FadeInProps>) => {
  const delayMap: Record<DelayStep, DelayClass> = {
    0: 'delay-[0ms]',
    1: 'delay-[75ms]',
    2: 'delay-[100ms]',
    3: 'delay-[150ms]',
    4: 'delay-[200ms]',
    5: 'delay-[300ms]',
    6: 'delay-[500ms]',
    7: 'delay-[700ms]',
    8: 'delay-[1000ms]',
  };

  const delayClass = delayMap[delay];

  return (
    <Transition.Child
      as="div"
      enter={`transition-all ease-in-out duration-700 ${delayClass}`}
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  );
};
