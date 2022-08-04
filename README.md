## Hi everyone, how is it going?
> well this is javascript/typescript random generator 
> such as firstname, lastname, phone number, Credit Card and ....


## Installation

> Well its not ready yet but im still working on it :)

---

``` javascript
const randomly = require("randomly");
```

## Names
### First Name
``` typescript
randomly.name.fName({
    name?: string | undefined,
    gender?: string | undefined,
    start?: string | undefined,
    end?: string | undefined
}): string
// e.g.
randomly.name.fName() // ==> "sam"
```
### Last Name
``` typescript
randomly.name.lName({
    name?: string | undefined,
    start?: string | undefined,
    end?: string | undefined
}): string
// e.g.
randomly.name.lName({start: "h"}) // ==> "HAGGSTROM"
```
### Prefix
``` typescript
randomly.name.prefix({
    gender?: string | undefined
}): string
// e.g.
randomly.name.lName({gender: "male"}) // ==> "Mr."
```
## Animals
### kind
``` typescript
randomly.animal.kind(): string
// e.g.
randomly.animal.kind() // ==> "dog"
```
## Colors
### color
``` typescript
randomly.color.color({format?:string}): number[] | undefined | string
// formats => "rgb", "rgba", "hex" - (default is "rgb")
// e.g.
randomly.color.color({format:'hex'}) // ==> "1e1e1e"
```
## Phones
### phone
``` typescript
randomly.phone.phone({format?:string}): string
// e.g.
randomly.phone.phone({format:"### ### ###"}) // ==> "123 645 123"
randomly.phone.phone() // ==> "1+ 645 123 4343"
```
## Sentence
Working on it :)

## Credit Card
All credit card numbers are valid with luhn algorithm 
### visaCard
``` typescript
randomly.card.visaCard({
  creditNumber: number,
  cvv: number,
  holder: string,
  expire: string}): I_Card_Visa
// e.g.
randomly.card.visaCard() // ==>
{
  creditNumber: 4775876705860201,
  cvv: 712,
  holder: 'WENDELL CMIEL',
  expire: '15/24'
}
```
### masterCard
``` typescript
randomly.card.masterCard({
  creditNumber: number,
  cvv: number,
  holder: string,
  expire: string}): I_Card_Visa
```
### amexCard
``` typescript
randomly.card.amexCard({
  creditNumber: number,
  cvv: number,
  holder: string,
  expire: string}): I_Card_Visa
```
### isValid (luhn algorithm)
``` typescript
randomly.card.isValid(creaditCardNumber: string): I_Card_Visa_Valid 
// e.g.
randomly.card.isValid("4775876705860201") => true
```

