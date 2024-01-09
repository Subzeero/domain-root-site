FROM node
EXPOSE 3000

WORKDIR /opt
COPY --chmod=733 docker-setup.bash .
ADD ./frontend ./app

CMD [ "./docker-setup.bash", "frontend" ]