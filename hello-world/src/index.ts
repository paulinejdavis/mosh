// console.log('Hello World!')

// import { isTypeOperatorNode } from "typescript"

// let age: number = 20
// if (age > 50) {
//   age += 10

// console.log(age)

// let sales = 123_456_789
// let course = 'TypeScript'
// let isPublished = true

// let level
// level = 1
// level = 'a'

// // }

// // any type loses the entire purpose of TypeScript

// function render(document:any) {
//     console.log(document)
// }

// fixed length array - working with value pairs - each value has a specific meaning
// restrict two values

// let user: [number, string] = [1, 'token']
// user[1]
// user.push(1)

// let number = [1, 2, 3]
// js dynamic and elements can be of different types

// let numbers: number[] = [1, 2, 3]
// let numbers: number[] = []

// code completion - hover for documentation
// numbers.forEach(n => n.)

// related constants as per c#

// enums example
// const small = 1;
// const medium = 2;
// const large = 3;

// // PascalCase
// const enum Size {Small = 1, Medium, Large};
// let mySize = Size.Small;

// console.log(mySize); // 1

// functions
// function calculateTax(income: number, taxYear = 2022): number {
//     if (taxYear < 2022) 
//         return income * 0.3
//     return income * 1.3
// }

// // js jas no issue with args passed
// calculateTax(1000, 2021)

// objects

// let employee: { 
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void

// } = { 
//     id: 1, 
//     name: 'John' ,
//     retire: (date: Date) => {
        
//         console.log(date)
//     }
// }


// type alias - dont repeat yourself
// type Employee = {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// }

// let employee: Employee = { 
//     id: 1, 
//     name: 'John' ,
//     retire: (date: Date) => {
//         console.log(date)
//     }
// }

// Union types

// function kgToLbs(weight: number | string) : number{
// //   Narrowing
//     if (typeof weight === 'number') 
//          return weight * 2.2
//      else {
//         return parseInt(weight) * 2.2

//     }   
// }

// kgToLbs(10);
// kgToLbs('10kg');

// intersection types combine two types
// type Draggable = {
//     drag: () => void
// }
// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable

// let widget: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

// literal types (Exact, specific values)

// type Quantity = 50 | 100
// let quantity:  Quantity = 100

// type Metric = 'cm' | 'inch'

// nullable types - non values common sort of bugs

// function greet(name: string | null | undefined) {
//     if (name)
//     console.log(name.toLowerCase())
//     else
//     console.log('Hola!')
// }

// greet(undefined)


// optional chaining null checks

// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : { birthday: new Date() } 
// }

// let customer = getCustomer(1)
// // if (customer !== null && customer !== undefined) 
// // use optional property access
// console.log(customer?.birthday?.getFullYear())

// // optional element access 
// // if customer not null or undefined
// // use ? and . to access properties


// let log: any = null
// log?.('a')




