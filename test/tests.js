import { add } from '../add.js';

const test = QUnit.test;

test('take a date and diff and return a new date with diff added to the original date - seconds', (expect) => {
    const expected = 'The new date is Mon Jan 25 2021 04:00:24 GMT-0800 (Pacific Standard Time)'

    const actual = add('Tue Jan 25 2021 12:00:00 GMT', '24s')

    expect.equal(actual, expected)
});

