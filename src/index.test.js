const { add, greet } = require('./index');

// Simple test runner (no dependencies needed)
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (e) {
    console.log(`❌ ${name}: ${e.message}`);
    failed++;
  }
}

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`);
      }
    }
  };
}

test('add returns correct sum', () => {
  expect(add(2, 3)).toBe(5);
});

test('add handles zeros', () => {
  expect(add(0, 0)).toBe(0);
});

test('greet returns correct string', () => {
  expect(greet('Bonolo')).toBe('Hello, Bonolo!');
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
