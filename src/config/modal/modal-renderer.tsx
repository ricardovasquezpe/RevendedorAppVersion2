import { useDisclosure } from "@chakra-ui/react";
import { currentModal, CurrentModal } from "./current-modal";
import { useEffect, useState, Suspense } from "react";

export const ModalRenderer = (props: any) => {
    const [modal, updateCurrentModal] = useState<CurrentModal<any> | null>(null);

    useEffect(() => currentModal.subscribe(updateCurrentModal), []);

    

    if (modal) {
        const Modal = currentModal.get(modal.name);
        console.log(Modal);

        return <Suspense>
                <Modal { ...modal?.props } />
            </Suspense>
    }

    return null;
}