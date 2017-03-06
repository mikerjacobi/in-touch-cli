class Utils {
    baseURL = "http://192.168.1.194:8080";

    toText(resp) {
        return resp.text();
    }
    toJSON(resp) {
        if (resp.ok) {
            return resp.json();
        }
        throw "bad status code response: " + resp.status;
    }
    handleError(err) {
        console.log("handling error: " + err);
    }
}

export default new Utils();