const { format_date, format_plural } = require('../utils/helpers');

test('checks format_date returns dates as MM/DD/YYYY', () => {
    const date = new Date('September 18, 1998 19:45');

    expect(format_date(date)).toBe('9/18/1998');
});

test('adds s to plural words when value is not 1', () => {
    expect(format_plural('word', 5)).toBe('words');
    expect(format_plural('word', 1)).toBe('word');
    expect(format_plural('word', 0)).toBe('words');
});