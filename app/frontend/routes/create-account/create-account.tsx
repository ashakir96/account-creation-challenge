import {Card} from "../../reusable-components/card/card.tsx";
import {Input} from "../../reusable-components/input/input.tsx";
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Container = styled.div`
    display: flex;
    width: 50%;
    justify-self: center;
    align-self: center;
`
const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px
`

const StyledButton = styled.button`
    width: 100%;
    background: hsla(244,49%,49%,1);
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    margin-top: 40px;
`
// TODO validation errors for password and username
// TODO check endpoint and see if it exists
// TODO write tests
// TODO maybe instead of endpoint validation, we could disable button when criteria is not met?
export const CreateAccount = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

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

                console.log(responseData); // Handle successful response
                // Redirect or show success message to the user
            } catch (error) {
                console.error('Error:', error); // Log error message
                // Show error message to the user
            }
        }
    };

    return (
        <Container>
            <Card title="Create New Account">
                <CardHeader>
                    <Input label="Username" onChange={setUsername}/>
                    <Input label="Password" onChange={setPassword}/>
                </CardHeader>
                <StyledButton onClick={handleClick}>
                    <Link to="/signup/account-selection">
                        Create Account
                    </Link>
                </StyledButton>
            </Card>
        </Container>
    )
}