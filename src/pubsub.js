export { pubsub };
const pubsub = {
    events: {},
    subscribe: function(eventName, fn) {
        console.log("Someone subscribed to: " + eventName);
    },
    unsubscribe: function(eventName, fn) {
        console.log("someone unsubscribed from: " + eventName);
    },
    publish: function(eventName, data) {
        console.log("Publishing about" + eventName);
    }
}