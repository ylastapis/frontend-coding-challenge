import { validateTournamentName } from './TournamentCard.utils';

const useCases: {
    name: string;
    args: Parameters<typeof validateTournamentName>;
    expected: ReturnType<typeof validateTournamentName>;
}[] = [
    {
        name: 'shall be false for undefined value',
        args: [undefined],
        expected: false,
    },
    { name: 'shall be false for null value', args: [null], expected: false },
    {
        name: 'shall be false for empty string value',
        args: [''],
        expected: false,
    },
    { name: 'shall be false for spaces value', args: ['   '], expected: false },
    {
        name: 'shall be false for string containing non-latin characters',
        args: ['Hello こんにちは 123'],
        expected: false,
    },
    {
        name: 'shall be false for string containing special characters',
        args: ['Hello @#$%^&*()_+={}[]|\\;:\'",.<>?/ 123'],
        expected: false,
    },
    {
        name: 'shall be false for string containing new lines',
        args: ['Hello\nWorld 123'],
        expected: false,
    },
    {
        name: 'shall be true for string containing only latin letters, digits and spaces',
        args: ['Hello 123'],
        expected: true,
    },
    {
        name: 'shall be true for string containing only latin letters and spaces',
        args: ['My Tournament'],
        expected: true,
    },
    {
        name: 'shall be true for string containing only digits and spaces',
        args: ['123 456'],
        expected: true,
    },
];

describe('src/components/molecules/TournamentCard/TournamentCard.utils.ts', () => {
    describe('validateTournamentName', () => {
        useCases.forEach((uc) => {
            it(uc.name, () => {
                expect(validateTournamentName(...uc.args)).toBe(uc.expected);
            });
        });
    });
});
