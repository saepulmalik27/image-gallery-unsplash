export const chunkIntoN = (arr: Array<unknown>, n: number) => {
    const size = Math.ceil(arr.length / n)
    return Array.from({ length: n }, (v, i) => arr.slice(i * size, i * size + size))
}

export const base83ToBase64 = (base83: string) => {
    const base83Chars =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+,-./:;<=>?@[]^_`{|}~'
    const base64Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    //@ts-ignore
    let decodedData = 0n
    for (let i = 0; i < base83.length; i++) {
        const char = base83.charAt(i)
        const charIndex = base83Chars.indexOf(char)
        if (charIndex === -1) {
            throw new Error('Invalid character in Base83 hash.')
        }
        //@ts-ignore
        decodedData = decodedData * 83n + BigInt(charIndex)
    }

    let base64 = ''
    //@ts-ignore
    while (decodedData > 0n) {
        //@ts-ignore
        base64 = base64Chars.charAt(Number(decodedData % 64n)) + base64
        //@ts-ignore
        decodedData = decodedData / 64n
    }

    return `data:image/webp;base64,${base64}`
}
