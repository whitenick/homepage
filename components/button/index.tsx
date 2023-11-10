import { Button as ChakraButton } from '@chakra-ui/react';
const Button = (props: any & { children: React.ReactNode }) => {
    return (
        <ChakraButton {...props}>
            { props.children }
        </ChakraButton>
    )
}

export default Button;