<div align="center">
  <div></div>
  <img src="./src/img/logo.png" width="200"/>
  <p>✨ generate all realistic data you need ✨</p>
  <a href="https://www.npmjs.com/package/modnarjs"><img src="https://badgen.net/npm/v/modnarjs"/></a>
  <a href="https://www.npmjs.com/package/modnarjs"><img src="https://badgen.net/npm/dm/modnarjs"/></a>
</div>

## Installation

```sh
npm i modnarjs
```

## Getting started

```javascript
const modnarjs = require("modnarjs");
// or
import modnarjs from "modnarjs";
```

## Names

### config

> you can change default array of first & last name
> only if you need to change default config!

```typescript
name.config(data: {
  F_NAME?: string[]; // female names
  M_NAME?: string[]; // male names
  LAST_NAME?: string[]; // last names
  }): void
// e.g.
name.config({ LAST_NAME: ["bashi", "espinal", "blackwall"] })
```

### First Name

> Random male or female first name

```typescript
modnarjs.name.fName(data?: {
    name?: string;
    gender?: string;
    start?: string;
    end?: string;
}): string
// e.g.
modnarjs.name.fName() // "sam"
```

### Last Name

> Random last name

```typescript
modnarjs.name.lName(data?: {
    name?: string,
    start?: string,
    end?: string
}): string
// e.g.
modnarjs.name.lName({start: "h"}) // "haggstrom"
```

### Prefix

> Random prefix

```typescript
modnarjs.name.prefix(
    gender?: string
): string
// e.g.
modnarjs.name.prefix(gender: "male") // "Mr."
```

## Animals

### kind

> Random animal kind

```typescript
modnarjs.animal.kind(): string
// e.g.
modnarjs.animal.kind() // "dog"
```

## Colors

### color

> Random colors (rgb,rgba,hex) formats (default is "rgb")

```typescript
modnarjs.color.color(format?:string): number[] | undefined | string
// e.g.
modnarjs.color.color(format:'hex') // "1e1e1e"
```

## Phones

### phone

> Random phone number with your own format

```typescript
modnarjs.phone.phone(format?:string): string
// e.g.
modnarjs.phone.phone(format:"### ### ###") // "123 645 123"
modnarjs.phone.phone() //"1+ 645 123 4343"
```

## Sentence

Working on it :)

## Credit Card

All credit card numbers are valid with luhn algorithm

### visaCard

> Random visa card info

```typescript
modnarjs.card.visaCard(): I_Card_Visa
// e.g.
modnarjs.card.visaCard()
/*
{
  creditNumber: 4775876705860201,
  cvv: 712,
  holder: 'WENDELL CMIEL',
  expire: '15/24'
}
*/
```

### masterCard

> Random master card info

```typescript
modnarjs.card.masterCard(): I_Card_Visa
```

### amexCard

> Random amex card info

```typescript
modnarjs.card.amexCard(): I_Card_Visa
```

### isValid (luhn algorithm)

```typescript
modnarjs.card.isValid(creaditCardNumber: string): I_Card_Visa_Valid
// e.g.
modnarjs.card.isValid("4775876705860201")
/*
{
  isValid: true,
  checksum: undefined
}
*/
```

## Net

### email

> i'm still working on email performance

```typescript
modnarjs.net.email(data?: {
  firstName?: string,
  lastName?: string,
  company?: string,
  useSpecialChar?: boolean
}): string
// e.g.
modnarjs.net.email()
```

### ipv4

> Random ipv4 - Classtypes "A","B","C","D","E"

```typescript
modnarjs.net.ipv4(classType?:string): string
// e.g.
modnarjs.net.ipv4("A") // "42.29.140.187"
modnarjs.net.ipv4() // "164.198.12.127"
```

### domain

> Random top-level domain
> with 1487 top-level domains

```typescript
modnarjs.net.domain(): string
// e.g.
modnarjs.net.domain() // "com"
```

## Country

### country

> Random country name

```typescript
modnarjs.country.country(): string
// e.g.
modnarjs.country.country() // "Egypt"
```

## Number

### float

> Random float number

```typescript
modnarjs.number.float(data?:{
  min?: number;
  max?: number;
  decimal?: number;
}): number
// e.g.
modnarjs.number.float({ min: 1, max: 1000 }) // 206.77
```

### int

> Random int number

```typescript
modnarjs.number.int(data?:{
  min?: number;
  max?: number;
}): number
// e.g.
modnarjs.number.int() // 10
```

### array

> Random int or float array number
> type and length can not be undefined

```typescript
modnarjs.number.array(data:{
  min?: number;
  max?: number;
  decimal?: number;
  type: string; // "int" or "float"
  length: number;
}): number[]
// e.g.
modnarjs.number.array({length:5,type:'int'}) // [ 606, 218, 787, 480, 340 ]
```
