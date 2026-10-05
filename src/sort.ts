/**
 * Пузырьковая сортировка.
 * На каждом проходе "всплывает" максимум, за n проходов массив отсортирован.
 *
 * Сложность: лучший случай O(n) (массив уже отсортирован — выходим по флагу),
 * средний и худший O(n^2).
 */
export function bubbleSort(input: number[]): number[] {
    const a = [...input];

    for (let i = 0; i < a.length - 1; i++) {
        let swapped = false;

        for (let j = 0; j < a.length - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }

        if (!swapped) break;
    }

    return a;
}

/**
 * Быстрая сортировка (вариант Ломуто, на месте).
 * Берём опорный элемент, слева от него оказываются меньшие, справа большие,
 * дальше рекурсивно сортируем обе части.
 *
 * Сложность: лучший и средний случай O(n log n), худший O(n^2)
 * (например, отсортированный массив и неудачный выбор опорного).
 * Чтобы худший случай не ловился на отсортированных данных, опорный элемент
 * выбирается случайно.
 */
export function quickSort(input: number[]): number[] {
    const a = [...input];
    sortRange(a, 0, a.length - 1);
    return a;
}

function sortRange(a: number[], low: number, high: number): void {
    if (low >= high) return;

    const p = partition(a, low, high);
    sortRange(a, low, p - 1);
    sortRange(a, p + 1, high);
}

function partition(a: number[], low: number, high: number): number {
    const randomIndex = low + Math.floor(Math.random() * (high - low + 1));
    [a[randomIndex], a[high]] = [a[high], a[randomIndex]];

    const pivot = a[high];
    let i = low;

    for (let j = low; j < high; j++) {
        if (a[j] <= pivot) {
            [a[i], a[j]] = [a[j], a[i]];
            i++;
        }
    }

    [a[i], a[high]] = [a[high], a[i]];
    return i;
}
