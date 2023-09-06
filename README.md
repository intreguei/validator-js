# Validator Js

A package to validate strings and input data with vanilla js.

Forked from [flux-validator-js](https://github.com/doc88git/flux-validator-js)

## Getting Started

### Install

Install via npm:

```console
npm install @intreguei/validator-js
```

Install via yarn:

```console
yarn add @intreguei/validator-js
```

### How to use Validator

#### Import

```javascript
import v from "@intreguei/validator-js";
```

#### Use

```javascript
function(inputName, value) {
  const inputValidation = v.validate.email(inputName, value) // returns { name: 'inputName', valid: bool }
  if (inputValidation.valid) {
    // do something if your email is correct
  } else {
    // do something if your email is invalid
  }
}
```

#### v.validate Options

##### Mercosul car plate

Ex: AAA-0000 or AAA-0A00

```javascript
v.validate.carPlate(inputName, value);
```

##### Brazilian CEP

Ex: 00000-000
Ex: 00000000

```javascript
v.validate.cep(inputName, value);
```

##### Brazilian RG

Ex: 000000000

```javascript
v.validate.rg(inputName, value);
```

##### Brazilian CNH

Ex: 00000000000

```javascript
v.validate.cnh(inputName, value);
```

##### Brazilian CNPJ

Ex: 00.000.000/0000-00

```javascript
v.validate.cnpj(inputName, value);
```

##### Brazilian CPF

Ex: 000.000.000-00

```javascript
v.validate.cpf(inputName, value);
```

##### Brazilian CPF & CNPJ

Ex: 000.000.000-00|0000-00

```javascript
v.validate.cpfCnpj(inputName, value);
```

##### dd/mm/yyyy Date

Ex: 00/00/0000

```javascript
v.validate.date(inputName, value);
```

##### Email

Ex: aaaaa@aaa.aaa.aa

```javascript
v.validate.email(inputName, value);
```

##### File Size

Ex: 1024

```javascript
v.validate.fileSize(files, size);
```

##### File Type

Ex: jpg|svg|jpeg|png|bmp|gi

```javascript
v.validate.fileType(files);
```

##### File Type Csv

Ex: csv

```javascript
v.validate.fileTypeCsv(files);
```

##### Numbers

Ex: 0123456

```javascript
v.validate.numbers(inputName, value);
```

##### Letters

Ex: abcdefgABCDEFG

```javascript
v.validate.letters(inputName, value);
```

##### Special Characters

Ex: @@@@####$$$$

```javascript
v.validate.specialCharacters(inputName, value);
```

##### Brazilian Phone

Ex: +55 (11) 0 0000-0000

```javascript
v.validate.phone(inputName, value);
```

##### Brazilian Renavam

Ex: 00000000000

```javascript
v.validate.renavam(inputName, value);
```

##### Brazilian Renavam

Ex: 00000000000

```javascript
v.validate.renavam(inputName, value);
```

#### Credit Card Number

Ex: 0000000000000000

```javascript
v.validate.creditCardNumber(inputName, value);
```

#### Credit Card Date

Ex: 00/00 || 00/0000

```javascript
v.validate.creditCardDate(inputName, value);
```

##### RegEx

Ex: `/^[0-9]+$/`

```javascript
v.validate.regex(inputName, value, regex);
```

### How to use Mask

#### Import

```javascript
import v from "@intreguei/validator-js";
```

#### Use

```javascript
function(inputName, value) {
  return v.mask.email(inputName, value) // returns { name: 'inputName', masked: "value masked" }
}
```
