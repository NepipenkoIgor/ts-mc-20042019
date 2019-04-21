
// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1, 2, 2, 4);
// average(1, '2', 2);
// let num: number = average(1, 2, 2);

// function average(a: number, b?: number, c?: number): string {
//     if (b === undefined) {
//         b = 0;
//     }
//     if (c === undefined) {
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1);
// average(1, 2, 2, 4);
// average(1, '2', 2);
// let num: number = average(1, 2, 2);


// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1, 2);
// average(1);
// average(1, 2, 2);
// average(1, 2, 2,  4);
// average(1, '2', 2);
// let num: number = average(1, 2, 2);
// type sn = number | string;
//
// function isString(arg: sn): arg is string{
//     return typeof arg === 'string';
// }
//
// function average(...args: sn[]): string {
//     let total: number = 0;
//     for (const arg of args) {
//         total += isString(arg)
//             ? parseInt(arg)
//             : arg;
//         // if (isString(arg)) {
//         //     total += parseInt(arg);
//         //     continue;
//         // }
//         // total += arg;
//     }
//
//     return `Average is ${total / args.length}`;
// }
//
// average(1, 2);
// average(1);
// average(1, 2, 2);
// average(1, 2, 2, 4);
// average(1, '2', 2);
// let num: number = average(1, 2, 2);


// interface IA {
//     x: boolean;
//     y: boolean;
//     y: boolean;
//     z: boolean;
// }
//
// class IB {
//     x!: boolean;
//     y!: boolean;
//     y!: boolean;
//     z!: boolean;
//
//     d(): number {
//         return 1;
//     };
// }
//
// class IC {
//     x!: boolean;
//     y!: boolean;
//     y!: boolean;
//     z!: boolean;
//     d(): void;
// }
//
// function fn(arg:  IB | IC): void {
//     if (arg instanceof IB) {
//         arg.
//     } else {
//         arg.
//     }
// }

// function average1<T>(a: T, b?: T, c?: T): string {
//     if (b === undefined && c === undefined) {
//         return `Average is ${a}`;
//     }
//     if (c === undefined) {
//         return `Average is ${(Number(a) + Number(b)) / 2}`;
//     }
//     return `Average is ${(Number(a) + Number(b) + Number(c)) / 2}`;
// }
//
// average1<string>('1', '2');
// average1<number>(1, 1, 2);
// average('1');
// average('1', 1, 2);
