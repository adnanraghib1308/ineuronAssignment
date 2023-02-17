# Ineuron Assignment

I have create 6 enpoint

- /  - normal to check the server return hey there
- /api/create - creates a product with given product details in body
- /api/read - fetches all products in db
- /api/read/:id. - fetches single product from db
- /api/update/:id - updates product with given values from body
- /api/delete/:id - deletes a product with provided id

I have hosted this project on Google Cloud VM with IP http://34.131.151.133:3030/. Below are the curls for each CRUD endpoint. You can test these in postman.

# 01. /api/create

```
curl --location --request POST 'http://34.131.151.133:3030/api/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "first product",
    "description": "desc 1",
    "quantity": 30,
    "salePrice": 200,
    "costPrice": 150,
    "size": "10"
}'
```

02. /api/update

```
curl --location --request PUT 'http://34.131.151.133:3030/api/update/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "updated product 1",
    "description": "desc 1 update",
    "quantity": 39,
    "salePrice": 209,
    "costPrice": 159,
    "size": "19"
}'
```

03. /api/read

```
curl --location --request GET 'http://34.131.151.133:3030/api/read' \
--data-raw ''
```

04. /api/read/:id

```
 curl --location --request GET 'http://34.131.151.133:3030/api/read/1' \
--data-raw ''
```

05. /api/delete/:id

```
curl --location --request DELETE 'http://34.131.151.133:3030/api/delete/6' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "product 11",
    "description": "desc 1",
    "quantity": 30,
    "salePrice": 200,
    "costPrice": 150,
    "size": "10"
}'
```

# Steps to run the project
- create a .env file and paste your postgres url with key DATABASE_URL
- For development mode start by 'npm run dev'
- For production use 'tsc && node dist/server.js'
- For your test file use 'tsc && mocha dist/test/product.test.js'
