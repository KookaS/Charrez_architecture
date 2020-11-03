# charrez-architecture-gui


## init

    npm init

    npm i

# next.js

    npm run dev
    
    npm run start
    
don't forget to start the DB
    
# .env

    NEXT_PUBLIC_API_URL = http://localhost:8080
    
## Docker

    sudo docker build -t next-image/node-web-app .

    sudo docker images
    
    sudo docker run -d --name charrez-gui next-image/node-web-app

    sudo docker ps
    
    sudo docker logs <container id>
    
    sudo docker exex -it <container id> /bin/bash