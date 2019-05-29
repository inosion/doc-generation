FROM node:latest

WORKDIR /opt/mume-runner

COPY . . 

RUN npm install
RUN npm install -g puppeteer --unsafe-perm=true --allow-root

# ENTRYPOINT "/opt/mume-runner/mume-runner.sh"
# ENTRYPOINT "node"

