import React from 'react';
import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import {CreateAccount} from "./create-account.tsx";
import {BrowserRouter} from "react-router-dom";

describe("CreateAccount", () => {
    test("renders without crashing", () => {
        render(<CreateAccount />, { wrapper: BrowserRouter });

        expect(screen.getByText("Username")).toBeTruthy();
        expect(screen.getByText("Password")).toBeTruthy();
        expect(screen.getByText("Create Account")).toBeTruthy();
    });

    test("can type username and password", () => {
        render(<CreateAccount />, { wrapper: BrowserRouter });

        expect(screen.getByText("Username")).toBeTruthy();

        fireEvent.change(screen.getByTestId('Username'), { target: { value: 'testuser' } });

        expect(screen.getByDisplayValue("testuser")).toBeTruthy();

        fireEvent.change(screen.getByTestId('Password'), { target: { value: 'password' } });

        expect(screen.getByDisplayValue("password")).toBeTruthy();
    });

    test("shows errors for password and username", async () => {
        render(<CreateAccount />, { wrapper: BrowserRouter });

        const mockResponse = {
            errors: [
                "Password must have a strength score of at least 2",
                "Password is too short (minimum is 20 characters)",
                "Username is too short (minimum is 10 characters)"
            ]
        };

        // Mock the fetch function
        // it should display the errors received from the api
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: false,
            json: async () => mockResponse,
        });

        // Fill in input fields
        fireEvent.change(screen.getByTestId('Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByTestId('Password'), { target: { value: 'password123' } });

        // Click the create account button
        act(() => {
            fireEvent.click(screen.getByText('Create Account'));
        });

        // Wait for error message to be displayed
        const strengthErrorMessage = await screen.findByText("Password must have a strength score of at least 2");
        expect(strengthErrorMessage).toBeTruthy();

        const passwordLengthErrorMessage = await screen.findByText("Password is too short (minimum is 20 characters)");
        expect(passwordLengthErrorMessage).toBeTruthy();

        const usernameLengthErrorMessage = await screen.findByText("Username is too short (minimum is 10 characters)");
        expect(usernameLengthErrorMessage).toBeTruthy();
    });

    test("completes a successful response", async () => {
        render(<CreateAccount />, { wrapper: BrowserRouter });

        // Mock the fetch function
        // checking to see if a successful request redirects the user
        global.fetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => ({}),
        });

        // Click the create account button
        act(() => {
            fireEvent.click(screen.getByText('Create Account'));
        });

        await waitFor(() => {
            // Assert that the navigation occurred
            expect(global.location.pathname).toBe('/signup/account-selection');
        });
    });
})