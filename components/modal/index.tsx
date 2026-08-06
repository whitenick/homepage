import * as React from 'react';
import { useRef } from 'react'
import { Dialog } from '@serapiolabs/design-system'
import { Check } from 'lucide-react'
import { proxy, useSnapshot } from 'valtio'

const state = proxy({ open: false, content: () : React.ReactNode => { return (<></>) }})

export const ModalService = () => {
    const snap = useSnapshot(state);

    return (
        <>
            { snap.open && (
                <Modal>
                    { snap.content() }
                </Modal>
            ) }
        </>
    )
}

export const openModalContent = (props: {
    content: () => React.ReactNode
}) => {
    state.open = true;
    state.content = props.content;
}

export const setOpen = (isOpen: boolean) => {
    state.open = isOpen;
}

const Modal = (props: { children: React.ReactNode }) => {
    const cancelButtonRef = useRef(null)

    return (
        <Dialog.Root open={state.open} onOpenChange={setOpen}>
            <Dialog.Backdrop />
            <Dialog.Popup
                initialFocus={cancelButtonRef}
                className="sm:max-w-lg"
            >
                <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-success)]/20">
                        <Check className="h-6 w-6 text-[var(--color-success)]" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title className="text-base font-semibold leading-6 text-[var(--color-text)]">
                            Payment successful
                        </Dialog.Title>
                        <div className="mt-2 text-sm text-[var(--color-text-secondary)]">
                            { props.children }
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center gap-3">
                    <Dialog.Close>Go back</Dialog.Close>
                </div>
            </Dialog.Popup>
        </Dialog.Root>
    )
}


export default Modal;