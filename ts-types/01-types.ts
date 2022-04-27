import fs from 'fs';

//
// Object Literal Type
//
type UserName = {
  first: string;
  last: string;
};

//
// Tuple Type
//
type UserNameTuple = [
  first: string,
  last: string,
];

//
// Union type
//
type UserNameUnion = 'first' | 'last';

//
// Intersection Types
//
type UserNameIntersection = 
{ first: string; } & { last: string; }

//
// Type indexing
//
type FirstNameType = UserName['first'];
type LastNameType = UserNameIntersection['last'];

/**
 * Mapped Types
 * 
 * Acts like a map statement for the type system.
 */
type MappedUserName = {
  [props in keyof UserName]: string;
};
/* <==> 
type MappedUserName = {
  first: string;
  last: string;
}*/
type MappedType<T> = {
  [prop in keyof T]: (newName: T[prop]) => void;
};
type MappedNameFunc = MappedType<UserName>;
/* <==> 
type MappedNameFunc {
  first: (newName: string) => void;
  last: (newName: string) => void;
}*/

//
// Template Union Type
//
type Name = 'name';
type FullName = `${UserNameUnion}_${Name}`;
/* <==> 
type FullName = "first_name" | "last_name"
*/

