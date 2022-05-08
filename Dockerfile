FROM nginx
LABEL name="vue-front"
LABEL version="1.0"
COPY  ./dist/ /usr/share/nginx/html/
COPY ./default.conf /etc/nginx/conf.d/
EXPOSE 80