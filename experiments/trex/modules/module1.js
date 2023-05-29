import { add } from './module2.js';

export function multiply(a, b) {
  return a * b;
}

export function calculate(x, y) {
  return add(x, y) * multiply(x, y);
}