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

console.log(Meteor.methods);
// Meteor.methods({
//     voiceQuery: function (data) {
//         try {
//             return Voice.query(data);
//         }
//         catch(err){
//             if(err.reason)
//                 throw new Meteor.Error(403, err.reason);
//             throw new Meteor.Error(403, err.message);
//         }
//     }
// });