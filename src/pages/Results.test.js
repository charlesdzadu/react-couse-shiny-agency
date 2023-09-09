import { formatJobList } from './Results';

describe('formatJobList', () => {
    test('Add virgule to item', () => {
        const expectedState = 'item2,';
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
    });
    test('Dont add, for the last element', () => {
        const expectedState = 'item3';
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
    });
});
