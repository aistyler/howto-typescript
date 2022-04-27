
//
// Types from value
//
const userName = {
  first: '', last: '',
};

function getUserName() {
  return userName;
}

/**
 * `typeof` Operator
 *
 * Re-use the type from an existing runtime value
 * The 'UserName' below is the same as following:
type UserName = {
  first: string;
  last: string;
}
 * The 'UserName' type is `Object Literal Type`.
 */
type UserName = typeof userName;
const theOther: UserName = { first: '', last: '' };

/**
 * `ReturnType` Utility
 * 
 * Re-use the type of the return value from a function.
 * The 'ReturnedUserName' is the same as following:
type ReturnedUserName = {
  first: string;
  last: string;
}
 */
type ReturnedUserName = ReturnType<typeof getUserName>;


/**
 * Template
 */