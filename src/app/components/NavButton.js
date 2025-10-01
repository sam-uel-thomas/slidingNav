'use client'
import { useState } from 'react';

export default function NavButton({ onClick }) {
    const wigglyShapes = [
        'rounded-[60%_40%_40%_60%/50%_60%_40%_50%]',
        'rounded-[55%_45%_45%_55%/55%_45%_55%_45%]',
        'rounded-[70%_30%_30%_70%/60%_40%_60%_40%]',
        'rounded-[63%_37%_54%_46%/55%_48%_52%_45%]',
        'rounded-[45%_55%_60%_40%/50%_55%_45%_50%]',
        'rounded-[58%_42%_48%_52%/62%_38%_58%_42%]'
    ];

    const [currentShape, setCurrentShape] = useState(wigglyShapes[0]);

    const randomizeShape = () => {
        const randomIndex = Math.floor(Math.random() * wigglyShapes.length);
        setCurrentShape(wigglyShapes[randomIndex]);
    };

    return (
        <button
            onClick={onClick}
            onMouseEnter={randomizeShape}
            className={`cursor-pointer fixed top-4 right-4 z-50 w-16 h-16 rounded-[50%] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-700 ease-in-out shadow-lg hover:shadow-2xl hover:scale-110`}
        />
    );
}