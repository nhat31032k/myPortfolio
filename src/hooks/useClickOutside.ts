import { useEffect, RefObject, useRef } from 'react';

type Handler = (event: MouseEvent | TouchEvent) => void;

const useClickOutside = <T extends HTMLElement = HTMLElement>(
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown'
): RefObject<T> => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            const el = ref?.current;
            const target = event.target as Node;

            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains(target)) {
                return;
            }

            handler(event);
        };

        document.addEventListener(mouseEvent, listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener(mouseEvent, listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler, mouseEvent]);

    return ref;
};

export default useClickOutside; 