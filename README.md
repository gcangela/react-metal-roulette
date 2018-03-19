## Brazil Dental Care Web Project

### Dev branch




### Building docker image

- npm install
- npm run build:prod
- docker build . -t brazil-dental-care-web

### Running docker image

- docker run -d -p 80:80 brazil-dental-care-web