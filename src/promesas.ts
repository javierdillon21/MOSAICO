
export function getNombre(segundos: number): Promise<string> {
    return (
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Carlos")
            }, segundos * 1000);
        }))

}
