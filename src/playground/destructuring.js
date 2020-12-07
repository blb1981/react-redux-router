// Object destructuring

const me = {
  name: 'Billy Bob',
  age: 20,
  address: {
    street: '123 Main St',
    city: 'Anytown',
  },
}

// The following demonstrates destructuring
const { name, age } = me

// Destructuring while enaming a key
const { city: homeCity } = me.address

// Assign default value
const { weather = 'cloudy' } = me.address

// Rename and assign default value
const { email: emailAddress = 'f@t.com' } = me

console.log(`${name} lives in ${homeCity} and is ${age} years old.`)
console.log(`It\'s ${weather} there now.`)
console.log(`The email address is ${emailAddress}`)

// Array destructuring

const address = ['123 Main St', 'Anytown', 'NY', 'USA']

// Items must match by position
// const [streetAddress, city, state, country] = address

// If no items are needed past the needed, just leave it off of the destructuring statement
// const [streetAddress, city, state] = address

// Or just destructure state with 2 commas
// const [, , state] = address

// Now setting default value
const [, , state = 'CA'] = address

console.log(`I live in ${state}`)
