_.extend(Voice, {
    query: function (data) {
        var accessToken = this.getAccessToken();
        var subscriptionKey = this.getSubscriptionKey();
        return HTTP.post("https://api.api.ai/v1/query/", {
            headers: {
                "Authorization": "Bearer " + accessToken,
                "ocp-apim-subscription-key": subscriptionKey
            },
            data: data,
        });
    }
});