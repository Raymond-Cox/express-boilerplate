# Week 1

## Return full user's information for single user lookup

Update the existing `/users/:userid` route to return the full information for the matching user.

Given a `:userid` parameter of `5`, expected response shape:

```json
{
  "id": 5,
  "name": "Charlie Brown",
  "email": "brownc@example.com",
  "role": "user",
  "color": "purple"
}
```

## New route to return all users with matching color preference

Write a new route `/users/color/:color` which supports a color parameter. The route should return all users with a matching color preference.

Given a `:color` parameter of `blue`, expected response shape:

```json
[
  {
    "id": 3,
    "name": "Alice Smith",
    "email": "smitha@example.com",
    "role": "user",
    "color": "blue"
  },
  {
    "id": 6,
    "name": "Diana Prince",
    "email": "princed@example.com",
    "role": "admin",
    "color": "blue"
  },
  ... // others
]
```

## References

These may prove helpful in completing the challenge:

- [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Express route parameters](https://expressjs.com/en/guide/routing.html#route-parameters)
