import styles from './header.module.scss'
import {  Image, Flex, Button,  HStack , chakra, Hide } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MobileDrawer } from './mobile-drawer';
import { MyModal } from '../myModal/myModal';

export const Header = (props: any) => {
    const menuLinks = [
        {
            label: "Nosotros"
        },
        {
            label: "¿Como funciona?"
        },
        {
            label: "Tu cuenta"
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
                        {menuLinks.map((item, i) => (
                            <Link key={i} to={"/"} className={styles.menuLink}>
                                {item.label}
                            </Link>
                        ))}
                        <MyModal></MyModal>
                    </HStack>
                </Hide>
                <Hide above='md'>
                    <MobileDrawer menuLinks={menuLinks}/>
                </Hide>
            </Flex>
        </chakra.header>
      );
};