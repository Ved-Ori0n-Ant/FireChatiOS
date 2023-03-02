import React from "react";
import TextInputComponent from "../textInputComponent";
import { render, cleanup, fireEvent, screen } from '@testing-library/react-native';

describe('Tests on textInputComponent', () => {
    it('should render okay', () => {
        render(<TextInputComponent />)
        const customTextInput = screen.getByTestId('text-input')

        expect(customTextInput).toBeDefined();
        expect(customTextInput.props.placeholder).toBe('Enter your value');
    });
})