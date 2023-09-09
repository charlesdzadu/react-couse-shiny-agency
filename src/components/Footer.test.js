import Footer from './Footer';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '../utils/context';

describe('Footer', () => {
    test('Should render without crash', () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>,
        );
        const button = screen.getByRole('button');
        expect(button.textContent).toBe('Changer de mode 🌙');
        fireEvent.click(button);
        expect(button.textContent).toBe('Changer de mode ☀️');
    });
});
