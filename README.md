<div align="center">
  <img src="./src/img/logo.png" width="200"/>
  <p>generate all realistic data you need</p>
  <a href="https://www.npmjs.com/package/modnarjs"><img src="https://badgen.net/npm/v/modnarjs"/></a>
  <a href="https://www.npmjs.com/package/modnarjs"><img src="https://badgen.net/npm/dm/modnarjs"/></a>
</div>

## Installation

```sh
npm i modnarjs
```

---

```javascript
const modnarjs = require("modnarjs");
```

## Names

### First Name

```typescript
modnarjs.name.fName({
    name?: string | undefined,
    gender?: string | undefined,
    start?: string | undefined,
    end?: string | undefined
}): string
// e.g.
modnarjs.name.fName() // ==> "sam"
```

### Last Name

```typescript
modnarjs.name.lName({
    name?: string | undefined,
    start?: string | undefined,
    end?: string | undefined
}): string
// e.g.
modnarjs.name.lName({start: "h"}) // ==> "HAGGSTROM"
```

### Prefix

```typescript
modnarjs.name.prefix(
    gender?: string | undefined
): string
// e.g.
modnarjs.name.prefix(gender: "male") // ==> "Mr."
```

## Animals

### kind

```typescript
modnarjs.animal.kind(): string
// e.g.
modnarjs.animal.kind() // ==> "dog"
```

## Colors

### color

```typescript
modnarjs.color.color(format?:string): number[] | undefined | string
// formats => "rgb", "rgba", "hex" - (default is "rgb")
// e.g.
modnarjs.color.color(format:'hex') // ==> "1e1e1e"
```

## Phones

### phone

```typescript
modnarjs.phone.phone(format?:string): string
// e.g.
modnarjs.phone.phone(format:"### ### ###") // ==> "123 645 123"
modnarjs.phone.phone() // ==> "1+ 645 123 4343"
```

## Sentence

Working on it :)

## Credit Card

All credit card numbers are valid with luhn algorithm

### visaCard

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

```typescript
modnarjs.card.masterCard(): I_Card_Visa
```

### amexCard

```typescript
modnarjs.card.amexCard(): I_Card_Visa
```

### isValid (luhn algorithm)

```typescript
modnarjs.card.isValid(creaditCardNumber: string): I_Card_Visa_Valid
// e.g.
modnarjs.card.isValid("4775876705860201") => true
```

## Net

### email

```typescript
modnarjs.net.email({
  firstName?: string,
  lastName?: string,
  company?: string,
  useSpecialChar?: boolean
}): string
// e.g.
modnarjs.net.email()

```

### ipv4

```typescript
modnarjs.net.ipv4(classType?:string): string
// Classtypes A,B,C,D,E
// e.g.
modnarjs.net.ipv4("A") // => 42.29.140.187
modnarjs.net.ipv4() // => 164.198.12.127
```
