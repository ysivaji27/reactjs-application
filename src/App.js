// file name = app.js
import { sub } from './math.js';

console.log(sub(23, 14));
// file name = math.js
export function sub(a, b) {
  return a - b;
}