export default class API {

    static async getJWT() {
        const response = await fetch(process.env.API_HOST + process.env.OpenLawEndPoint);
        const json = await response.json();
        return json["jwt"];
    };

    static async getCryptoTransaction(queryVal){
        const response = await fetch(process.env.API_HOST + process.env.CreateCryptoTransactionEndPoint +
            "?crypto=" + queryVal);
        const json = await response.json();
        if (json["error"] !== "ok"){
            console.log("error from api! " + json["error"]);
        }
        return json;

    }
//
// {
//     "error": "ok",
//     "result": {
//         "amount": "0.00020400",
//         "Address": "mk5q4frGGWRQuBkDDGEWZAzN2VokPaVj8T",
//         "txn_id": "CPDJ5UT7NL3IKCVNOICAVUF6N0",
//         "confirms_needed": "0",
//         "timeout": 3600,
//         "status_url": "https://www.coinpayments.net/index.php?cmd=status&id=CPDJ5UT7NL3IKCVNOICAVUF6N0&key=b9f452cb786eacf3427425cb74f4f342",
//         "qrcode_url": "https://www.coinpayments.net/qrgen.php?id=CPDJ5UT7NL3IKCVNOICAVUF6N0&key=b9f452cb786eacf3427425cb74f4f342"
//     }
// }


}

