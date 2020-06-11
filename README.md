# vue-express-docker

## Development

### Create environment file

```
ENV=development
VUE_APP_ROOT_URL=http://localhost:8080
PORT=8080
ADMIN_PASS=admin
DB_USERNAME=admin
DB_PASSWORD=admin
DB_NAME=vue-express-docker
DB_HOST=localhost:27017
DB_SSL=false
DB_READWRITE=true
DB_AUTH_SOURCE=admin
```

### Using docker

```
docker-compose up
```

### Install dependencies

```
npm install
```

### Serve locally

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Troubleshooting

#### MongoDB

for permission issues

```
sudo chown -R `id -un` /data/db
```
