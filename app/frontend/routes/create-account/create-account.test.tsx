import {describe, test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {CreateAccount} from "./create-account.tsx";

describe('CreateAccount', () => {
    test('render', () => {});
    render(<CreateAccount />, { wrapper: BrowserRouter });
    screen.getByLabelText('Username');
    screen.getByLabelText('Password');
});