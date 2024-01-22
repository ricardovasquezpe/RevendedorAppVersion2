import styles from './header.module.scss'
import {  Image, Flex, Button,  HStack , chakra, Hide, useDisclosure } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MobileDrawer } from './mobile-drawer';
import { useModal } from '../../config/modal/use-modal';
import { Modals } from '../../config/modal/modal-config';
import { MyButton } from '../myButton/myButton';

export const Header = (props: any) => {
    const loginModal = useModal<any>(Modals.LoginModal);
    const displayLoginModal = () => {
        loginModal.open({
          onSave: () => {
            console.log("OnSave");
          },
          onClose: () => {
            console.log("onClose");
            loginModal.close();
          },
          onCancel: () => {
            console.log("onCancel");
            loginModal.close();
          },
        });
    }

    const menuLinks = [
        {
            id: 0,
            label: "Nosotros"
        },
        {
            id: 1,
            label: "¿Como funciona?"
        },
        {
            id: 2,
            label: "Iniciar Sesion",
            onClick: displayLoginModal
        }
    ]

    return (
        <chakra.header id="header" className={styles.header} padding={{"md": "0px 80px"}}>
            <Flex 
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between">
                <Image src={"https://placehold.co/600x400"} h="40px" />
                <Hide below='md'>
                    <HStack as="nav" spacing="10">
                        {menuLinks.map((item, i) => {
                            if(item.id == 2){
                                return (
                                    <MyButton key={i} textColor="white" 
                                        backgroundColor="secondary.default" 
                                        backgroundColorHover="secondary.dark" 
                                        title={"Iniciar Sesion"}
                                        fontSize="18px"
                                        padding="20px"
                                        onClick={item.onClick}></MyButton>
                                );
                            } else {
                                return (
                                    <Link key={i} to={"/"} className={styles.menuLink}>
                                        {item.label}
                                    </Link>
                                )
                            }
                        })}
                    </HStack>
                </Hide>
                <Hide above='md'>
                    <MobileDrawer menuLinks={menuLinks}/>
                </Hide>
            </Flex>
        </chakra.header>
      );
};