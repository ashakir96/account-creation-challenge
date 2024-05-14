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

const StyledButton = styled.button`
    width: 100%;
    background: hsla(244,49%,49%,1);
    color: white;
    padding: 10px 0;
    border-radius: 10px;
    margin-top: 40px;
`

export const CreateAccount = () => {
    return (
        <Container>
            <Card title="Create New Account">
                <div className="space-y-4">
                    <Input label="Username" />
                    <Input label="Password" />
                </div>
                <StyledButton>
                    <Link to={"/signup/account-selection"}>
                        Create Account
                    </Link>
                </StyledButton>
            </Card>
        </Container>
    )
}