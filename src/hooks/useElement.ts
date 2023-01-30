import { useEffect, useRef, useState } from 'react';

const useElement = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState<null | number>(null);

    const observer = useRef(
        new ResizeObserver((entries) => {
            const { width } = entries[0].contentRect;
            setWidth(width);
        }),
    );

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        ref.current && observer.current.observe(ref.current);
    }, [ref]);

    return [ref, width];
};

export default useElement;