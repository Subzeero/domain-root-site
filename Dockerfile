FROM node
EXPOSE 3000 4000

WORKDIR /opt
COPY --chmod=733 docker-setup.bash .
ADD ./frontend ./frontend/app
ADD ./backend ./backend/app

CMD [ "./docker-setup.bash" ]