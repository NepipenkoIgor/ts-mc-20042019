// enum Size {
//     S = 44,
//     M = 48,
//     XL = 52
// }
//
// const middleSize: number = Size.M;
// const smallSize: string = Size[44];
//
// console.log(middleSize, smallSize);

// enum Actions {
//     AddUser = 'ADD_USER',
//     DeleteUser = 'DELETE_USER',
//     RenameUser = 'RENAME_USER',
//
//     RemoveUser = DeleteUser
// }
//
// function reducer(state: { name: string }, action: { type: Actions }): { name: string } {
//     switch (action.type) {
//         case Actions.AddUser: {
//             return state;
//         }
//         case Actions.RemoveUser: {
//             return state;
//         }
//         case Actions.RenameUser: {
//             return state;
//         }
//         default:
//             return state;
//     }
// }


// interface IAccount {
//     firstName: string;
//     age: number;
// }
//
// let user = IAccount;

// let user = {
//     firstName: 'Igor',
//     age: 33
// };
// if(typeof user === 'object') {
//
// }
// let person: typeof user;

// class Point {
//     public x!: number;
// }
//
// let point: Point = new Point();


// let val1: number = 1;
// let val2: string;
// val2 = 'text';
//
// let val3: IAccount;

// let str: string = 'text';
// let bool: boolean = true;
// let num: number = 1;
// num = 0xf00d;
// num = 0b1010;
// num = 0o744;
// num = NaN;
//
// let nill: null = null;
// let und: undefined = undefined;
//
// let bigInit: bigint = BigInt(100);
// let bigInit1: bigint = 4000n;
//
//
// const key1: unique symbol = Symbol('Foo');
// const key2: symbol = Symbol('Bar');
//
// export function onlyFoo(_value: typeof key1): void {
//
// }
// onlyFoo(key2);
//
// let strictObject = {
//     [key1]: 100,
//     [key2]: 'text',
// }
//
// let num1 = strictObject[key1];

// declare class UIElement {
//     public animate(opt: IAnimationOpt): void;
// }
//
// interface IAnimationOpt {
//     delay: number;
//     type: 'ease-in' | 'ease-out';
// }
//
// new UIElement().animate({delay: 10000, type: 'ease-in'});
//
// type Digit = 0 | 1 | 2 | 3 | 4 | 5;
// let num: Digit = 3;

// let anyType1: any = {};
// anyType.a = 1;
// anyType['b'] = 'text';
// anyType();

// let anyType2: Object = {};
// anyType2.a = 1;
// anyType2['b'] = 'text';
// anyType2();
// anyType2 = [1, 2, 3];
// anyType2 = () => {
// };
// anyType2 = 1;
//
// let obj1: Object = 1;
// Object.create(obj1);
//
// let anyType3: object = {a: 1};
// anyType3.a = 1;
// anyType3['b'] = 'text';
// anyType3();
// anyType3 = [1, 2, 3];
// anyType3 = () => {
// };
// anyType3 = 1;
// anyType3 = 'asd';
//
// let obj: object = 1;
// Object.create(obj);
//
// let anyType4: unknown = {a: 1};
// anyType4.a = 1;
// anyType4['b'] = 'text';
// anyType4();
// anyType4 = [1, 2, 3];
// anyType4 = () => {
// };
// anyType4 = 1;
// anyType4 = 'asd';
//
// let obj3: unknown = {};
// Object.create(obj3);


// const obj: {
//     [key: string]: string | boolean
// }

// let v1: void = undefined;
// let v2: undefined = undefined;
// function a(): void {
//
// }
function errorHandler(): never {
    throw new Error('asd');
}

function a() {
    try {

    } catch (err) {
        errorHandler();
    }
}
