import { Button } from "@chakra-ui/react";

export const MyButton = (props: Props) => {
    return (
        <>
            <Button bg={props.backgroundColor} 
                    color={props.textColor} 
                    fontWeight={"normal"} 
                    borderRadius={"custom"} 
                    _hover={{bg: props.backgroundColorHover, transition: "background 0.3s ease-in-out"}}
                    fontSize={props.fontSize}
                    padding={props.padding}
                    className={props.className}
                    onClick={props.onClick}>
                {props.title}
            </Button>
        </>
    );
};

type Props = {
    title: string,
    backgroundColor: string,
    backgroundColorHover: string,
    textColor: string,
    fontSize: string,
    padding: string,
    className? : string | undefined,
    onClick?: () => void
};
