# cs3219-otot-b

## Backend

From root folder:

```
cd server && nodemon dev
```

Server is running on http://localhost:5000

## Frontend

From root folder:

```
cd anime-app && npm run serve
```

App is running on http://localhost:8080

## Deploy

I have integrated the frontend and tried with serverless framework but this is currently not working as expected.
From root folder:

```
serverless deploy
```

## Test

Test is automated via Travis.

To run locally, at root folder:

```
npm test
```
