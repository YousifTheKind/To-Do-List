export { pubsub };

const pubsub = {
    events: {},
    subscribe: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn); 
        // console.log("Someone subscribed to: " + eventName);
    },
    unsubscribe: function(eventName, fn) {
        // console.log("someone unsubscribed from: " + eventName);
    },
    publish: function(eventName, ...data) {
        if(this.events[eventName]) {
            this.events[eventName].forEach(fn => {
                fn(...data);
            });
        };
        // console.log("Publishing about: " + eventName);
    }
};