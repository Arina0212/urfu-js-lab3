/**
 * Бинарный поиск в отсортированном массиве.
 *
 * Каждый шаг отбрасывает половину оставшегося диапазона,
 * поэтому число шагов — log2(n).
 *
 * Сложность: O(log n).
 * Важное условие: массив должен быть отсортирован по возрастанию.
 *
 * @returns индекс найденного элемента или -1, если элемента нет
 */
export function binarySearch(sorted: number[], target: number): number {
    let low = 0;
    let high = sorted.length - 1;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);

        if (sorted[mid] === target) {
            return mid;
        }

        if (sorted[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

/**
 * Рекурсивный вариант — та же логика, O(log n) по времени.
 */
export function binarySearchRecursive(
    sorted: number[],
    target: number,
    low = 0,
    high = sorted.length - 1,
): number {
    if (low > high) return -1;

    const mid = low + Math.floor((high - low) / 2);

    if (sorted[mid] === target) return mid;

    return sorted[mid] < target
        ? binarySearchRecursive(sorted, target, mid + 1, high)
        : binarySearchRecursive(sorted, target, low, mid - 1);
}

/**
 * Линейный поиск. O(n).
 */
export function linearSearch(array: number[], target: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i;
    }
    return -1;
}
