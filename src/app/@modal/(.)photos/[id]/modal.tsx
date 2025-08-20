'use client';

import React, { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<'dialog'>>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            onClose={onDismiss}
            className="
                fixed inset-0
                m-0 border-0
                pt-36 pl-2
                overflow-hidden
                bg-transparent
                text-white
                backdrop:bg-zinc-900/50
            "
        >
            {children}
        </dialog>,
        document.getElementById('modal-root')!,
    );
}