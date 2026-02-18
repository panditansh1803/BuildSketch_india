import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;
        if (!dot || !outline) return;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const moveCursor = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows instantly
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        // Smooth outline follow using requestAnimationFrame
        let animId: number;
        const animate = () => {
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;
            outline.style.left = `${outlineX}px`;
            outline.style.top = `${outlineY}px`;
            animId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', moveCursor);
        animId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                className="fixed pointer-events-none z-[10000] hidden md:block"
                style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#f39c12',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    willChange: 'left, top',
                }}
            />
            <div
                ref={outlineRef}
                className="fixed pointer-events-none z-[10000] hidden md:block"
                style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid #f39c12',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    willChange: 'left, top',
                }}
            />
        </>
    );
};
