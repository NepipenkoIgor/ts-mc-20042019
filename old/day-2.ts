
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
// type sn = string | number;
//
// export function average(a: number, b: string): string;
// export function average(a: number, b: number, c: number): string;
// export function average(a: string): string;
// export function average(a: sn, b?: sn, c?: number): string {
//     if (b === undefined && c === undefined) {
//         return `Average is ${a}`;
//     }
//     if (c === undefined) {
//         return `Average is ${(Number(a) + Number(b)) / 2}`;
//     }
//     return `Average is ${(Number(a) + Number(b) + Number(c)) / 2}`;
// }


// type Acc = {
//     id: number
// }
// [1, 2, 3].reduce<Acc[]>((acc: Acc[], next: number) => {
//     acc.push({id: next});
//     return acc;
// }, []);

// type Cb = (this: void, e: Event) => void;
//
// class UIElement {
//     public addClickListener(_oncklick: Cb): void {
//
//     }
// }
//
// class Handler {
//     public info!: HTMLElement;
//
//     public onClickBad(this: Handler, _e: Event): void {
//         this.info = _e.target as HTMLElement;
//     }
// }
//
// let h: Handler = new Handler();
// let uiElement: UIElement = new UIElement();
//
// uiElement.addClickListener(h.onClickBad);

// interface IProto {
//     headers: any
// }
//
// let fn: {
//     prototype: IProto
//     new(a: number): void;
// } = function A(a: number): void {
// }
//
// let b = new fn(1);

// class BasePoint {
//     public constructor(
//         public x: number,
//         protected _y: number,
//         private _z: number
//     ) {
//     }
//
//     public ngOnInit(): void {
//         console.log(this._z);
//     }
// }
//
// class Point extends BasePoint {
//     public constructor(x: number, y: number, z: number) {
//         super(x, y, z);
//     }
//     public ngOnInit(): void {
//         console.log('hi all');
//         super.ngOnInit();
//     }
// }

// class Singleton {
//     private static _instance: Singleton;
//
//     private constructor() {
//
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton._instance) {
//             Singleton._instance = new Singleton();
//         }
//         return Singleton._instance;
//     }
// }
//
// let inst1: Singleton = Singleton.getInstance();
// let inst2: Singleton = Singleton.getInstance();

// interface Point {
//     x: number;
// }
// class Point {
//     public x: string = 'sd';
// }

// // tslint:disable-next-line
// type Constructable = new (...args: any[]) => {};
//
// // tslint:disable-next-line
// function Timestamped<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public timestamp: Date = new Date();
//     };
// }
//
// // tslint:disable-next-line
// function Tagged<BC extends Constructable>(Base: BC) {
//     return class extends Base {
//         public tagged: string = 'some tag';
//     };
// }
//
// class Point {
//     public constructor(
//         public x: number,
//         public y: number,
//     ) {
//     }
// }
//
// class SpecialPoint extends Tagged(Timestamped(Point)) {
//     public constructor(
//         public x: number,
//         public y: number,
//         public z: number,
//     ) {
//         super(x, y);
//     }
// }
//
// let sp: SpecialPoint = new SpecialPoint(1, 2, 3);
// sp.timestamp.getDate();
// interface IElement {
//     onFocus(): void;
//     onBlur(): void;
//     onClick(): void;
//     getValue(): string;
// }
//
// abstract class AbstractInput implements IElement {
//
//     public border: boolean = false;
//
//     public onFocus(): void {
//         this.border = true;
//     }
//
//     public onBlur(): void {
//         this.border = false;
//     }
//     public onClick(): void {
//         this.border = false;
//     }
//
//     public abstract getValue(): string;
// }

//
//
// class MyAppInput extends AbstractInput {
//
//     private v: string = '';
//
//     public getValue(): string {
//         return 'text 1';
//     }
//
//     public get value(): string {
//         return this.v;
//     }
//
//     public set value(v: string) {
//         this.v = v;
//     }
// }
//
// class MyAppCheckbox extends AbstractInput {
//     public getValue(): string {
//         return 'text 2';
//     }
// }
//
// const input: MyAppInput = new MyAppInput();
// input.value = 'text 1';
// const text: string = input.value;


// class Menu {
//     public constructor(opt: any){
//
//     }
// }

