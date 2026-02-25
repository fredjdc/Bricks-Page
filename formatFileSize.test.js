const fs = require('fs');
const test = require('node:test');
const assert = require('node:assert');

function getFormatFileSize(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const match = content.match(/(\s*)function formatFileSize\(bytes\) \{([\s\S]*?\n\1\})/);
    if (!match) {
        throw new Error(`Could not find formatFileSize in ${filename}`);
    }
    return new Function('bytes', match[0] + '; return formatFileSize(bytes);');
}

const filesToTest = ['scripts.js', 'support.html'];

for (const filename of filesToTest) {
    const formatFileSize = getFormatFileSize(filename);

    test(`formatFileSize boundaries in ${filename}`, async (t) => {
        await t.test('handles 0 Bytes', () => {
            assert.strictEqual(formatFileSize(0), '0 Bytes');
        });

        await t.test('handles Bytes', () => {
            assert.strictEqual(formatFileSize(1023), '1023 Bytes');
        });

        await t.test('handles KB boundary', () => {
            assert.strictEqual(formatFileSize(1024), '1 KB');
            assert.strictEqual(formatFileSize(1025), '1 KB');
        });

        await t.test('handles MB boundary', () => {
            assert.strictEqual(formatFileSize(1024 * 1024), '1 MB');
        });

        await t.test('handles GB boundary', () => {
            assert.strictEqual(formatFileSize(1024 * 1024 * 1024), '1 GB');
        });

        await t.test('handles TB boundary', () => {
            assert.strictEqual(formatFileSize(1024 * 1024 * 1024 * 1024), '1 TB');
        });

        await t.test('handles large values with decimals', () => {
            assert.strictEqual(formatFileSize(1.5 * 1024), '1.5 KB');
        });

        await t.test('rounds up to next unit if close to 1024', () => {
            assert.strictEqual(formatFileSize(1024 * 1024 - 1), '1 MB');
        });
    });
}
