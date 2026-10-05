import { bubbleSort, quickSort } from './sort.js';
import { binarySearch, linearSearch } from './binarySearch.js';
import { isBalanced } from './brackets.js';

console.log('Сортировка:');
const data = [5, 3, 9, 1, 7, 3, -2, 0, 8];
console.log('исходный массив: ', data.join(' '));
console.log('bubbleSort:      ', bubbleSort(data).join(' '));
console.log('quickSort:       ', quickSort(data).join(' '));

console.log('\nБинарный поиск:');
const sorted = quickSort(data);
console.log('отсортированный: ', sorted.join(' '));
for (const target of [7, 100]) {
    console.log(
        `ищем ${target}: binarySearch -> ${binarySearch(sorted, target)}, ` +
        `linearSearch -> ${linearSearch(sorted, target)}`,
    );
}

console.log('\nСбалансированность скобок:');
const samples = ['({})', '({)}', '[]<>{}()', '(', ')(', 'a(b[c]{d}<e>)f', '<<>>', '([)]'];
for (const sample of samples) {
    console.log(`${isBalanced(sample) ? 'верно  ' : 'неверно'}  ${sample}`);
}
