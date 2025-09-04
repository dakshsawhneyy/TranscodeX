FROM ubuntu:focal

RUN apt-get update
RUN apt-get install curl -y

# Installing node js
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# Installing Git
RUN apt-get install git -y

WORKDIR /home/app   

COPY script.js script.js
COPY main.sh main.sh
COPY package.*json ./

RUN npm install

# Make both scripts executable
RUN chmod +x main.sh
RUN chmod +x script.js

ENTRYPOINT ["/home/app/main.sh"]