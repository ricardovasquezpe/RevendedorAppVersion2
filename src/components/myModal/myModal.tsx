import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import styles from "./myModal.module.css";
import { MyButton } from "../myButton/myButton";

export const MyModal = (props: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal isOpen={isOpen} onClose={onClose} size={"sm"} isCentered>
                <ModalOverlay />
                <ModalContent className={styles.content} bg={"primary.default"}>
                    <ModalHeader className={styles.header}>Iniciar Sesion</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        test
                    </ModalBody>
                    <ModalFooter justifyContent={"center"}>
                        <MyButton textColor="white" 
                                        backgroundColor="secondary.default" 
                                        backgroundColorHover="secondary.dark" 
                                        title={"Iniciar Sesion"}
                                        fontSize="18px"
                                        padding="20px"></MyButton>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

type Props = {
    
};