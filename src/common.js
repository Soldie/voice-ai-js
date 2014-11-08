Voice = (function () {
    var accessToken = null;
    var subscriptionKey = null;
    return {
        configure: function (obj) {
            if(!_.isString(obj.accessToken))
                throw new Error('missing accessToken');
            if(!_.isString(obj.subscriptionKey))
                throw new Error('missing subscriptionKey');
            
            accessToken = obj.accessToken;
            subscriptionKey = obj.subscriptionKey;
        },
        getAccessToken: function () {
            if(!accessToken)
                throw new Error('accessToken is not set');
            return accessToken;
        },
        getSubscriptionKey: function () {
            if(!subscriptionKey)
                throw new Error('subscriptionKey is not set');
            return subscriptionKey;
        }
    };
})();