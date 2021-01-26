import { add } from '../add.js';

const test = QUnit.test;

test('take a date and diff and return a new date with diff added to the original date - seconds', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 04:00:24 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 04:00:00 GMT-0800', '24s')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - minutes', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 04:30:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 04:00:00 GMT-0800', '30m')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - hours', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 19:00:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 12:00:00 GMT-800', '7h')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - days', (expect) => {
    const expected = 'The new date is Thu Jan 28 2021 12:00:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 12:00:00 GMT-800', '3d')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - weeks', (expect) => {
    const expected = 'The new date is Mon Feb 08 2021 04:00:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 04:00:00 GMT-0800', '2w')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - months', (expect) => {
    const expected = 'The new date is Fri Jun 25 2021 04:00:00 GMT-0700 (Pacific Daylight Time)'

    const actual = add('Mon Jan 25 2021 04:00:00 GMT-0800', '5M')

    expect.equal(actual, expected)
});

test('take a date and diff and return a new date with diff added to the original date - years', (expect) => {
    const expected = 'The new date is Thur Jan 25 2024 04:00:00 GMT-0800 (Pacific Standard Time)'

    const actual = add('Mon Jan 25 2021 04:00:00 GMT-0800', '3y')

    expect.equal(actual, expected)
});