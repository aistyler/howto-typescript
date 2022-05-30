# TypeScript Cheatsheet

## Type inference

### From array instance(using `typeof` Type Operator)

```ts
const fruits = ['apple', 'orange', 'banana'] as const;
type FruitType = typeof fruits[number];
// <=> type FruitType = 'apple' | 'orange' | 'banana';

const fruitsOnSale = [ { name: 'apple', price: 1 }, { name: 'orange', price: 2 } ];
type FruitOnSale = typeof fruitsOnSale[number];
/* <=>
type FruitOnSale = {
    name: string;
    price: number;
};
*/
type FuritPrice = typeof fruitsOnSale[number]['price'];
/* <=>
type FuritPrice = number;
// or
type FuritPrice = FruitOnSale['price'];
// or
const priceField = 'price';
type FuritPrice = FruitOnSale[typeof priceField];
*/
```

### From object instance

```ts
const userInstance = {
    firstName: 'Peter',
    lastName: 'Kang',
    gender: 'male'
};

type UserProperties = keyof typeof userInstance;
/* <=> 
type UserProperties = "firstName" | "lastName" | "gender";
*/
```

### From function

```ts
type GetD3 = () => { x: number; y: number; z: number; };
function getD3() {
    return { x: 10, y: 10, z: 10 };
}

type D3FromFunction = ReturnType<typeof getD3>;
type D3FromType = ReturnType<GetD3>;
/* <=>
type K = {
    x: number;
    y: number;
    z: number;
};
*/
```

### From other types

```ts
type Gender = 'male' | 'female' | 'nochoice';
type User = {
    firstName: string;
    lastName: string;
    gender: Gender;
    picture: {
        path: string;
    };
};
```

#### `keyof` Type Operator

```ts
type UserPropertis = keyof User;
/* <=>
type UserProperties = 'firstName' | 'lastName' | 'gender' | 'picture';
*/
```

#### `indexed` access

```ts
type Picture = User['picture'];
```

#### using utils (Partial, Pick, Exclude, ...)

```ts
type PartialUser = Partial<User>;
/* <=> 
type PickedUser = {
    firstName?: string;
    lastName?: string;
    gender?: Gender;
    picture?: {
        path: string;
    };
};
*/

type PickedUser = Pick<User, 'firstName' | 'lastName'>;
/* <=> 
type PickedUser = {
    firstName: string;
    lastName: string;
};
*/

type RemoveFields<Type, PropsToRemoved> = {
    [Property in keyof Type as Exclude<Property, PropsToRemoved>]: Type[Property]
};

type ExcludedUser = RemoveFields<User, 'gender' | 'picture'>;
/* <=> 
type PickedUser = {
    firstName: string;
    lastName: string;
};
*/
```

## References

- [TypeScript PlayGround](https://www.typescriptlang.org/play)
- 
