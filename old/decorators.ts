// import 'reflect-metadata';
//
// function debounce(wait: number): MethodDecorator {
//     let timeout: number | null;
//     let result: unknown;
//     return function (_target: Object, _key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
//         return {
//             ...descriptor,
//             value: (...args: unknown[]): unknown => {
//                 timeout ? clearTimeout(timeout) : null;
//                 timeout = setTimeout(() => {
//                     timeout = null;
//                     result = descriptor.value(...args);
//                 }, wait)
//                 return result;
//             }
//         };
//     };
// }
//
// const RANGE_KEY: string = 'RANGE_KEY'
//
// function logMethod(_target: Object, _key: string | symbol, _descriptor: PropertyDescriptor): void {
//     console.log('design:type', Reflect.getMetadata('design:type', _target, _key));
//     console.log('design:paramtypes', Reflect.getMetadata('design:paramtypes', _target, _key));
//     console.log('design:returntype', Reflect.getMetadata('design:returntype', _target, _key));
// }
//
// function range(min: number = 0, max: number = 100): ParameterDecorator {
//     return (target: Object, key: string | symbol, index: number): void => {
//         const existingRange: { [key: number]: [number, number] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
//         existingRange[index] = [min, max];
//         Reflect.defineMetadata(RANGE_KEY, existingRange, target, key);
//     };
// }
//
// /**
//  * existingRange
//  *  {
//  *    0: [4,50],
//  *    10: [0,100]
//  *  }
//  *
//  * **/
//
// function validation(target: Object, key: string, descriptor: PropertyDescriptor): void {
//     const originalValue: (...args: unknown[]) => unknown = descriptor.value;
//     descriptor.value = (...args: unknown[]) => {
//         const existingRange: { [key: number]: [number, number] } = Reflect.getMetadata(RANGE_KEY, target, key) || {};
//         for (const index of Object.keys(existingRange)) {
//             const [min, max]: [number, number] = existingRange[index as any];
//             const value: number = args[index as any] as number;
//             if (value < min || value > max) {
//                 throw  new Error(`Value at position ${index}  of  method ${key} is out of range`);
//             }
//         }
//         return originalValue(...args);
//     };
// }
//
//
// class MathLib {
//     @debounce(1000)
//     @logMethod
//     @validation
//     public areaOfCircle(
//         @range(10, 50) r: number,
//     ): number {
//         const result: number = Math.PI * r ** 2;
//         console.log(result)
//         return result;
//     }
// }
//
// const lib: MathLib = new MathLib();
// console.log(lib);
// lib.areaOfCircle(1);
//

// class User {
//     public name: string = 'Igor';
// }
//
// class Person extends User {
//     public age: number = 33;
// }
//
// let p: Person = new Person();
// p.
