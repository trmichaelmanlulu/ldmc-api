# love-my-dog-club-api

### Installation
```
npm install
```

### Start server
The application will get the configs based on the environment you specified.
```
npm start
```

### Setup configs

The application is using [dotenv](https://www.npmjs.com/package/dotenv) to manage our environment variables which contain our application configs.
You can create a '.env' file on the root directory and add multiple environment variables to sucessfully run the server.

This is the default environment variable configs that are required to run the application:
```
# database configs
DB_HOST=host
DB_USER=user
DB_PASSWORD=password
DB_NAME=name
```

