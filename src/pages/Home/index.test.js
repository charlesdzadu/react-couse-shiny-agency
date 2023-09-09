import { sum } from './index';

test('Add number', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
});
