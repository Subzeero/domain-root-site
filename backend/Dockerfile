FROM node
EXPOSE 4000

WORKDIR /opt
COPY --chmod=733 docker-setup.bash .
ADD ./backend ./app

CMD [ "./docker-setup.bash", "backend" ]