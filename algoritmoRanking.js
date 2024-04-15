// Crea un arreglo de n números enteros aleatorios (simula los datos obtenidos por la consulta a la base de datos)
const randomIntegers = Array.from({ length: 10 }, () => Math.floor(Math.random() * (100 - 0 + 1)) + 0);

console.log(randomIntegers);

// Implementa el algoritmo de ordenamiento QuickSort
const quickSort = (arr) => {
    // Caso base
    if (arr.length == 0) { return [] };
    // Estrablecer pivote en la mitad del arreglo
    let pivote = Math.floor(arr.length / 2);
    let pivoteValue = arr[pivote];
    let leftArr = [];
    let rightArr = [];
    // Recorrer el arreglo y comparar los valores con el pivote
    for (let i = 0; i < arr.length; i++) {
        // Saltar el pivote
        if (i === pivote) continue;
        // Comparar los valores con el pivote y agregarlos a los arreglos correspondientes
        if (arr[i] < pivoteValue) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    // Llamar recursivamente a la función
    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);
    // Retornar el arreglo ordenado cuando se cumpla el caso base
    return leftArr.concat(pivoteValue, rightArr);
}

console.log(quickSort(randomIntegers));