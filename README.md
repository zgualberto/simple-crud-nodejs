# simple-crud-nodejs

GET /api/contacts

sample return string:

[
    {
        "id": 1,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "emailAddress": "sample123@sample.com",
        "contactNumber": "09151234567",
        "address": "Quiapo, Manila",
        "createdAt": "2018-03-15T03:56:26.228Z",
        "updatedAt": "2018-03-15T03:56:26.228Z"
    },
    {
        "id": 2,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "emailAddress": "sample123@sample.com",
        "contactNumber": "09151234567",
        "address": "Quiapo, Manila",
        "createdAt": "2018-03-15T03:56:30.158Z",
        "updatedAt": "2018-03-15T03:56:30.158Z"
    },
    {
        "id": 4,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "emailAddress": "sample123@sample.com",
        "contactNumber": "09151234567",
        "address": "Quiapo, Manila",
        "createdAt": "2018-03-15T03:56:32.230Z",
        "updatedAt": "2018-03-15T03:56:32.230Z"
    },
    {
        "id": 5,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "emailAddress": "sample123@sample.com",
        "contactNumber": "09151234567",
        "address": "Quiapo, Manila",
        "createdAt": "2018-03-15T03:56:33.160Z",
        "updatedAt": "2018-03-15T03:56:33.160Z"
    },
    {
        "id": 3,
        "firstName": "Juan",
        "lastName": "Dela Cruz",
        "emailAddress": "sample2@sample.com",
        "contactNumber": "09151234567",
        "address": "Quiapo, Manila",
        "createdAt": "2018-03-15T03:56:31.268Z",
        "updatedAt": "2018-03-15T03:56:57.273Z"
    }
]

POST /api/contacts

parameters:

{
	"firstName":"Juan",
	"lastName":"Dela Cruz",
	"address":"Quiapo, Manila",
	"emailAddress": "sample123@sample.com",
	"contactNumber":"09151234567"
}

sample return string:

{
    "id": 5,
    "firstName": "Juan",
    "lastName": "Dela Cruz",
    "address": "Quiapo, Manila",
    "emailAddress": "sample123@sample.com",
    "contactNumber": "09151234567",
    "updatedAt": "2018-03-15T03:56:33.160Z",
    "createdAt": "2018-03-15T03:56:33.160Z"
}

PUT /api/contacts/1

parameters:

{
	"firstName":"Juan",
	"lastName":"Dela Cruz",
	"address":"Quiapo, Manila",
	"emailAddress": "sample123@sample.com",
	"contactNumber":"09151234567"
}

sample return string:

{
    "id": 3,
    "firstName": "Juan",
    "lastName": "Dela Cruz",
    "emailAddress": "sample2@sample.com",
    "contactNumber": "09151234567",
    "address": "Quiapo, Manila",
    "createdAt": "2018-03-15T03:56:31.268Z",
    "updatedAt": "2018-03-15T03:56:57.273Z"
}

GET /api/contacts/3

sample return string:

{
    "id": 3,
    "firstName": "Juan",
    "lastName": "Dela Cruz",
    "emailAddress": "sample2@sample.com",
    "contactNumber": "09151234567",
    "address": "Quiapo, Manila",
    "createdAt": "2018-03-15T03:56:31.268Z",
    "updatedAt": "2018-03-15T03:56:57.273Z"
}

DELETE /api/contacts/3

sample return string:

{
    "id": 3,
    "firstName": "Juan",
    "lastName": "Dela Cruz",
    "emailAddress": "sample2@sample.com",
    "contactNumber": "09151234567",
    "address": "Quiapo, Manila",
    "createdAt": "2018-03-15T03:56:31.268Z",
    "updatedAt": "2018-03-15T03:56:57.273Z"
}