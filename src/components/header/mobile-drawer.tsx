import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import style from "./header.module.scss";
import { Link } from "react-router-dom";
import { MyDrawer } from "./drawer";

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
          {props.menuLinks.map((item: any, i: any) => (
            <Link key={i} to={"/"} className={style.menuLink}>
              {item.label}
            </Link>
          ))}
        </VStack>
      </MyDrawer>
    </Flex>
  );
};