import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';

import Survey from './Survey';
import { ThemeProvider } from '../utils/context';

const mockSurvey = {
    1: 'Votre site doit-il sauvegarder des données entrées par vos utilisateurs ?',
    2: 'Votre application doit-elle impérativement apparaître en premier dans les résultats de recherche ?',
    3: "Avez-vous déjà des maquettes pour l'application que vous voulez créer ?",
    4: "Le site comporte-t-il une fonction d'authentification ?",
    5: 'Souhaitez-vous avoir plusieurs types de comptes pour votre application (administrateur, visiteur, utilisateur, etc). ?',
    6: 'Avez-vous prévu une version mobile à part entière ?',
};

const server = setupServer(
    rest.get('http://localhost:8000/survey', (req, res, ctx) => {
        return res(ctx.json({ surveyData: mockSurvey }));
    }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Survey should render without crash', async () => {
    render(<Survey />);
    expect(screen.getByTestId('loader')).toBeTruthy();
});
