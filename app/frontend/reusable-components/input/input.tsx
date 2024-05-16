import React, { ChangeEvent, useState } from 'react';
import {Container, InputContainer, Label, StyledButton, StyledInput} from "./components.tsx";

interface Props {
  label: string;
  onChange?: (value: string) => void;
  isPassword?: boolean;
}

export function Input({ onChange, label, isPassword }: Props) {
    const [value, setValue] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const id = label.replace(/ /gm, '_');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value);
        onChange?.(event.target.value);
    }

    if (isPassword) {
        return (
            <Container>
                <Label>{label}</Label>
                <InputContainer>
                    <StyledInput
                        type={showPassword ? 'text' : 'password'}
                        id={id}
                        data-testid={id}
                        value={value}
                        onChange={handleChange}
                    />
                    <StyledButton
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </StyledButton>
                </InputContainer>
            </Container>
        )
    }

    return (
        <Container>
            <Label>{label}</Label>
            <InputContainer>
                <StyledInput
                    id={id}
                    data-testid={id}
                    value={value}
                    onChange={handleChange}
                />
            </InputContainer>
        </Container>
    );
}
