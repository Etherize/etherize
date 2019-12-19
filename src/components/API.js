export default class API {

    static async getJWT() {
        const response = await fetch(process.env.API_HOST + process.env.OpenLawEndPoint);
        if (response.status>=300){
            return ["", "Request to our law template instance failed with status: " + response.statusText +
            ". Try refreshing!"]
        }
        const json = await response.json();
        return [json["jwt"], json["error"]];
    };

    static async getCryptoTransaction(queryVal){
        const response = await fetch(process.env.API_HOST + process.env.CreateCryptoTransactionEndPoint +
            "?crypto=" + queryVal);
        console.log(response.statusText);
        if (response.status>=300){
            console.log("error from api! " + response.statusText);
            return {"error": response.statusText}
        }

        const json = await response.json();
        if (json["error"] !== "ok"){
            console.log("error from api! " + json["error"]);
        }
        return json;
    }

    static async getFiatTransaction(){
        const response = await fetch(process.env.API_HOST + process.env.CreateFiatTransactionEndPoint);
        const json = await response.json();
        return json;
    }

    // TODO: make endpoint in go to email us, and choose whether we use POST or GET with query
    static async AdoptEntityDesired(series){
        const response = await fetch(process.env.API_HOST + process.env.notifyAdoptionWanted);

    }


}

