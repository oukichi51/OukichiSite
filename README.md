# OukichiSite

# Docker Build and Run Instructions

## Step 1: Build the Docker Image
Run the following command to build the Docker image:
```bash
docker build -t <image-name> .
```

Replace `<image-name>` with a name for your Docker image.

## Step 2: Verify the Image
Check if the image was built successfully:
```bash
docker images
```

## Step 3: Run the Docker Container
Start a container using the built image:
```bash
docker run -d -p <host-port>:<container-port> <image-name>
```

- Replace `<host-port>` with the port on your host machine.
- Replace `<container-port>` with the port exposed by your application in the Dockerfile.
- Replace `<image-name>` with the name of your Docker image.

Example:
```bash
docker run -d -p 8080:80 my-image
```

## Step 4: Verify the Running Container
Check the running containers:
```bash
docker ps
```

## Step 5: Access the Application
Open your browser and navigate to `http://localhost:<host-port>` to access the application.

## Step 6: Check Logs (Optional)
To view the logs of the running container:
```bash
docker logs <container-id>
```

Replace `<container-id>` with the ID of the running container.

## Step 7: Access the Container (Optional)
To access the container's shell:
```bash
docker exec -it <container-id> /bin/bash
```

Replace `<container-id>` with the ID of the running container.

## Step 8: Stop the Running Container
To stop a running container, use the following command:
```bash
docker stop <container-id>
```

Replace `<container-id>` with the ID of the running container.

## Step 9: Remove the Container (Optional)
To remove a stopped container:
```bash
docker rm <container-id>
```

Replace `<container-id>` with the ID of the stopped container.

## Step 10: Remove the Image (Optional)
To remove the Docker image:
```bash
docker rmi <image-name>
```

Replace `<image-name>` with the name of the Docker image.