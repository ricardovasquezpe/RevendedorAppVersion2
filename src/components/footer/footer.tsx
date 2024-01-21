import { Box, Center, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { MyButton } from "../myButton/myButton";

export const Footer = () => {
    return (
        <>
            <Box bg={"primary.ligth"} padding={{"sm": "30px 24px", "md": "30px 150px", "lg": "30px 200px", "xl": "30px 450px"}} className={styles.parent}>
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
                        <VStack>
                            <Text align={"center"} fontSize={"15px"} color={"white.half"} mb={"10px"}>No pierdas la oportunidad de ver a tu artista favorito</Text>
                            <MyButton textColor="white" 
                                    backgroundColor="secondary.default" 
                                    title={"Registrate ahora!"}
                                    fontSize="22px"
                                    padding="20px 35px 20px 35px"></MyButton>
                        </VStack>
                    </Center>
                </SimpleGrid>
            </Box>
            <Center h='70px' color='white.half'>
                <p>@2024 RevendedorApp</p>
            </Center>
        </>
    );
};