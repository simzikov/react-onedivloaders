import React, { ElementType } from 'react';

declare type LoaderType = 'circle-spin-1' | 'circle-spin-2' | 'circle-spin-3' | 'circle-spin-4' | 'circle-spin-5' | 'circle-spin-6' | 'circle-grow-1' | 'circle-pulse-1' | 'circle-rotate-1-horizontal' | 'circle-rotate-1-vertical' | 'circle-packman-1' | 'square-spin-1' | 'square-rotate-1-horizontal' | 'square-rotate-1-vertical' | 'square-rotate-2' | 'square-move-1' | 'square-move-2' | 'square-move-3' | 'line-1-horizontal' | 'line-1-vertical' | 'line-2-horizontal' | 'line-2-vertical' | 'line-3-horizontal' | 'line-3-vertical' | 'arrow-1-up' | 'arrow-1-right' | 'arrow-1-down' | 'arrow-1-left' | 'plus-1' | 'misc-1-horizontal' | 'misc-1-vertical' | 'typing-1';
interface LoaderProps extends React.HTMLAttributes<HTMLElement> {
    as: ElementType;
    alt?: string;
    type: LoaderType;
    size?: React.CSSProperties['fontSize'];
    color?: React.CSSProperties['color'];
    animationTimingFunction?: React.CSSProperties['animationTimingFunction'];
    animationDuration?: React.CSSProperties['animationDuration'];
}
declare function Loader({ as: Tag, alt, type, size, color, animationTimingFunction, animationDuration, className, style, ...props }: LoaderProps): JSX.Element;

export { Loader };
