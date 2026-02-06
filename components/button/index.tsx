import { Button as ShadcnButton, ButtonProps } from '@/components/ui/button';
import React from 'react';

const Button = (props: ButtonProps & { children: React.ReactNode }) => {
    return (
        <ShadcnButton {...props}>
            {props.children}
        </ShadcnButton>
    );
};

export default Button;
