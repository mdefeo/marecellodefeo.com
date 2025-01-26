import { RefObject } from 'react';

export type AnimateBordersFunction = (
callback: () => void,
iconRef: RefObject<SVGSVGElement>,
buttonRef: RefObject<HTMLButtonElement>
) => void;

export interface AnimationConfig {
duration: number;
ease: string;
delay?: number;
}

export interface BorderAnimationProps {
onComplete?: () => void;
iconRef: RefObject<SVGSVGElement>;
buttonRef: RefObject<HTMLButtonElement>;
}