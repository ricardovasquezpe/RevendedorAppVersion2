import { Box, Center, SimpleGrid, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { MyButton } from "../myButton/myButton";

export const Footer = () => {
    return (
        <>
            <Box bg={"primary.ligth"} padding={{"sm": "30px 24px", "md": "30px 160px"}} className={styles.parent}>
                <SimpleGrid columns={{sm: 1, md: 3}} spacing={10}>
                    <Box>
                        <VStack align={{"sm": "center", "md": "start"}}>
                            <Link to={"/"}>Nosotros</Link>
                            <Link to={"/"}>¿Cómo funciona?</Link>
                            <Link to={"/"}>Tu cuenta</Link>
                            <Link to={"/"}>Términos y condiciones</Link>
                        </VStack>
                    </Box>
                    <Box>
                        <VStack align={{"sm": "center", "md": "start"}}>
                            <Link to={"/"}>Facebook</Link>
                            <Link to={"/"}>Instagram</Link>
                            <Link to={"/"}>Twitter</Link>
                            <Link to={"/"}>Tiktok</Link>
                        </VStack>
                    </Box>
                    <Center>
                        <MyButton textColor="white" 
                                backgroundColor="secondary.default" 
                                title={"Registrate!"}
                                fontSize="22px"
                                padding="20px 35px 20px 35px"></MyButton>
                    </Center>
                </SimpleGrid>
            </Box>
            <Center h='70px' color='white.half'>
                <p>@2024 RevendedorApp</p>
            </Center>
        </>
    );
};