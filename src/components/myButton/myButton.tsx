import { Button } from "@chakra-ui/react";

export const MyButton = (props: Props) => {
    return (
        <>
            <Button bg={props.backgroundColor} 
                    color={props.textColor} 
                    fontWeight={"normal"} 
                    borderRadius={"0.313rem"} 
                    _hover={{bg: props.backgroundColor}}
                    fontSize={props.fontSize}
                    padding={props.padding}>
                {props.title}
            </Button>
        </>
    );
};

type Props = {
    title: string,
    backgroundColor: string,
    textColor: string,
    fontSize: string,
    padding: string
};
