# Docker Microservice Example

This repo contains a basic Docker setup running a simple REST API written in go, and a web server using the Remix framework. The goal of this repo is to test Docker's networking features and demonstrate communication between services running in separate containers.

### Getting Started

To start both the **Remix app** and the **Product service**, you can either use the `Makefile` shortcut by running:

```
make compose
```

Or, alternatively, you can also run `docker compose up` manually to start the Docker container in the foreground.

Once the container is up andd running and both services are green, you should be able to hit [http://localhost:5173/](http://localhost:5173/), which will fetch data from the **Product service** using HTTP.
