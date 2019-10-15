# TEST MD!

## Users

### `GET /users/{test}/hello`
A short description about something

#### Description:
A longer description about something. A longer description about something. A longer description about something. A longer description about something. A longer description about something. A longer description about something.

#### Params

| Name   | Param Type | Required           | Description                                                                  | Type              |
| ------ | ---------- | ------------------ | ---------------------------------------------------------------------------- | ----------------- |
| `test` | path       | :white_check_mark: | A description about this parameter. I want this to wrap so I am typing a lot | `string`          |
|        | body       | :white_check_mark: | A description about this parameter. I want this to wrap so I am typing a lot | [`User`[]](#user) |

#### Response
| Code  | Description     | Schema            |
| ----- | --------------- | ----------------- |
| `200` | A list of users | [`User`[]](#user) |
| `404` | User not found  |                   |


# Test API
Just a test of combining swagger yaml files
### `GET /posts`
Returns a list of users.
#### Description
Optional extended description in CommonMark or HTML.
### `GET /users/{userId}`
Returns a list of users.
#### Description
Optional extended description in CommonMark or HTML.
### `GET /blogs`
Returns a list of users.
#### Description
Optional extended description in CommonMark or HTML.