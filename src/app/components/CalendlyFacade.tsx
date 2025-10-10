'use client'
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';

const CalendlyWidget = dynamic(() => import('./Calendly'), { ssr: false, loading: () => null });

export default function CalendlyFacade() {
    const [open, setOpen] = useState(false);
    const onClick = useCallback(() => setOpen(true), []);
    return (
        <div>
            {!open && (
                <button aria-label="Book a call" onClick={onClick}>
                    Book Private Strategy Session
                </button>
            )}
            {open && <CalendlyWidget />}
        </div>
    );
}


