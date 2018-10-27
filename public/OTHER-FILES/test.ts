// // import { IModalInterface } from './Error/Task/DisplayToModal/Component/modal.Component'
// // import {Entity} from "./Error/Entity";
// // import {EventEmitter} from "@angular/core";
// //
// // export class Test<C extends IModalInterface> implements IModalInterface{
// //     modalInput: Entity;
// //     modalOutput: EventEmitter<any>;
// // // export class Test<C extends IModalInterface> {
// //
// // }
// //
// // const test = new Test()
// export interface MyInt {
//     a: number;
//     b: string;
// }
//
// export class Parent {
//     getInstance<C>(instance: C): C {
//         return instance;
//     }
// }
//
// let test = new Parent();
//
// let num: MyInt = {
//     a: 10,
//     b: 'string'
// };
//
// let inst = test.getInstance<MyInt>(num);
//
//
//
// function getLength<T>(arg: Array<T>): number {
//     return arg.length;
// }
//
// getLength<Parent<string>>([new Parent(), new Parent()]);


// const data = new Test<string>();
// // data.test = '10';
//
// console.log(typeof data.getTest());

// export class Test {
//
//     getTest<T extends T1>(data: T): void {
//         data
//     }
// }
//
// const ts = new Test();
//
// abstract class T2 {
//     t1: string;
//     t2: string;
// }
// interface T1 {
//     t1: string;
//     t2: string;
// }
// const obj = {
//     t1: 'sdfas',
//     t2: 'asdas'
// };
//
// ts.getTest<T1>(obj);

// interface I1 {
//     test: number;
// }
// interface I2 {
//     test2: string;
// }
// function test<T>(a: T, b: T): T {
//     a.length
//     return a * b;
// }
//
//
//
// test<string>(new Model(), 13);
// test<number>('asda', 'asdasd');


function f(data): string | object {
    return data;
}
f({sdfsdf: 'sadasd'})