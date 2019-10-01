# Test API
Just a test of combining swagger yaml files

## Version: 1.0.0

### Security
**apiKey**  

|apiKey|*API Key*|
|---|---|
|In|header|
|Name|Authorization|

### /posts

#### GET
##### Summary:

Returns a list of users.

##### Description:

Optional extended description in CommonMark or HTML.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | A JSON array of user names |

### /users

#### GET
##### Summary:

Returns a list of users.

##### Description:

Optional extended description in CommonMark or HTML.

##### Responses

| Code | Description |
| ---- | ----------- |
| 200 | A JSON array of user names |

### /blogs

#### GET
##### Summary:

Returns a list of users.

##### Description:

Optional extended description in CommonMark or HTML.

##### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | A JSON array of user names | [Blogs](#blogs) |

### Models


#### Post

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |

#### User

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |

#### Blogs

| Name | Type | Description | Required |
| ---- | ---- | ----------- | -------- |
| id | string |  | No |