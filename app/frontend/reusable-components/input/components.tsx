import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4px;
`

export const Label = styled.label`
    display:block;
    font-size: 14px;
    line-height: 20px;
`

export const InputContainer = styled.div`
    display: flex;
    border-bottom-width: 2px;
    border-color: rgb(203 213 225);
    border-style: solid;
    justify-content: space-between;
    gap: 8px;
`

export const StyledInput = styled.input`
    display: block;
    padding: 8px 0 8px 8px;
    flex: 2 1 auto;
    
    &:focus {
        outline: none;
    }
`

export const StyledButton = styled.button`
    display: flex;
    padding: 4px;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    justify-self: flex-end;
    align-self: center;
    
    &:hover {
        background: rgb(250, 245, 255);
        border-radius: 4px;
        border: 0.5px solid hsla(244,49%,49%,1);
    }
`