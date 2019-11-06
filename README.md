# Etherize

## Installation
`npm install`

If you want to spin up your own backend use: https://github.com/IanPhilips/etherizebackend
If you want to spin up your own blog hosting use: https://strapi.io/

## Configure
Create an `.env` file and add in relevant details:

```
API_HOST=<your_backend_api_host> 
OpenLawEndPoint=/getOpenlawJWT  
CreateCryptoTransactionEndPoint=/generateCryptoTransaction  
CreateFiatTransactionEndPoint=/generateFiatTransaction  
BlogHost=<your_strapi_host>  
BlogsEndpoint=/blogposts
```


## Usage
`npm run dev` to start

