import {Card} from "../../reusable-components/card/card.tsx";
import {Input} from "../../reusable-components/input/input.tsx";
import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    width: 50%;
    justify-self: center;
    align-self: center;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px
`;

const StyledButton = styled.button`
    width: 100%;
    background: hsla(244,49%,49%,1);
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    margin-top: 40px;
`;

const ErrorText= styled.li`
    color: red;
`;


// TODO write tests

export const CreateAccount = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errors, setErrors] = React.useState<string[]>([]);
    const navigate = useNavigate();

    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');

    const handleClick = async () => {
        if (csrfTokenMeta) {
            const csrfToken = csrfTokenMeta.getAttribute('content') ?? "";

            try {
                const response = await fetch('/api/create-account', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                });

                const responseData = await response.json();

                if (!response.ok) {
                    // If response is not successful, throw an error
                    setErrors(responseData.errors || ['Failed to create account']);
                    return;
                }

                // Clear any previous errors and state if request was successful
                setErrors([]);
                setUsername('');
                setPassword('');
                // redirect to selection page
                navigate("/signup/account-selection")
            } catch (error) {
                console.error('Error:', error); // Log error
                // Show error message to the user
                setErrors(['An unexpected error occurred']);
            }
        }
    };

    return (
        <Container>
            <Card title="Create New Account">
                <CardHeader>
                    <Input label="Username" onChange={setUsername}/>
                    <Input label="Password" onChange={setPassword}/>
                    {errors.length > 0 && (
                        <div>
                            <ul>
                                {errors.map((error, index) => (
                                    <ErrorText key={index}>{error}</ErrorText>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardHeader>
                <StyledButton onClick={handleClick}>
                        Create Account
                </StyledButton>
            </Card>
        </Container>
    )
}