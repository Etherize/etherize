export default class BlogAPI {

    static async getBlogs() {
        const response = await fetch(process.env.BlogHost + process.env.BlogsEndpoint);
        if (response.status>=300){
            console.log(response.status)
            return [[""], "Request to our blog instance failed with status: " + response.statusText +
            ". Try refreshing!"]
        }
        const json = await response.json();
        return [json, json["error"]];
    };
}