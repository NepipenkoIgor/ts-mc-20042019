type sn = string | number;

export function average(a: number, b: string): string;
export function average(a: number, b: number, c: number): string;
export function average(a: string): string;
export function average(a: sn, b?: sn, c?: number): string {
    if (b === undefined && c === undefined) {
        return `Average is ${a}`;
    }
    if (c === undefined) {
        return `Average is ${(Number(a) + Number(b)) / 2}`;
    }
    return `Average is ${(Number(a) + Number(b) + Number(c)) / 2}`;
}


// type Acc = {
//     id: number
// }
// [1, 2, 3].reduce<Acc[]>((acc: Acc[], next: number) => {
//     acc.push({id: next});
//     return acc;
// }, []);
