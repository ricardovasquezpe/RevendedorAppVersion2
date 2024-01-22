import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import { MyDrawer } from "./myDrawer";
import { MyButton } from "../myButton/myButton";

export const MobileDrawer = (props: any) =>  {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex >
      <Button onClick={onOpen} bg={"primary.default"} _hover={{bg:"primary.light"}}>
        <HamburgerIcon boxSize={6} color={"white"}/>
      </Button>
      
      <MyDrawer
        isOpen={isOpen}
        onClose={onClose}>
        <VStack alignItems="left" spacing={8}>
          {props.menuLinks.map((item: any, i: any) => {
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
        </VStack>
      </MyDrawer>
    </Flex>
  );
};