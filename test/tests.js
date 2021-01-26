import { add } from '../add.js';

const test = QUnit.test;

test('take a date and diff and return a new date with diff added to the original date - seconds', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 04:00:24 GMT-0800 (Pacific Standard Time)'

    const actual = add('Tue Jan 25 2021 04:00:00 GMT-0800', '24s')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - minutes', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 04:30:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Tue Jan 25 2021 04:00:00 GMT-0800', '30m')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - hours', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 19:00:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 12:00:00 GMT-800', '7h')

    expect.equal(actual, expected)
});