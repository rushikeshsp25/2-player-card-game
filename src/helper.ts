export function shuffleArray(arr: any[]) {
    const _arr = [...arr];
    let j, x, i;
    for (i = _arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = _arr[i];
        _arr[i] = _arr[j];
        _arr[j] = x;
    }
    return _arr;
}

export function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms))
} 

export function printDivider() {
    console.log('𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱𐳱')
} 
