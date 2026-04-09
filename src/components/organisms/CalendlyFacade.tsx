'use client'
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import calendlyText from "@/constants/uiText/calendly.json";

const CalendlyWidget = dynamic(() => import('./Calendly'), { ssr: false, loading: () => null });

export default function CalendlyFacade() {
    const [open, setOpen] = useState(false);
    const onClick = useCallback(() => setOpen(true), []);
    return (
        <div>
            {!open && (
                <button aria-label={calendlyText.bookCallAriaLabel} onClick={onClick}>
                    {calendlyText.facadeButtonLabel}
                </button>
            )}
            {open && <CalendlyWidget />}
        </div>
    );
}

