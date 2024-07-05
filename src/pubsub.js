export { pubsub };

const pubsub = {
    // object that holds the events
    events: {},
    // records the event name and function
    subscribe: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn); 
    },
    // unsubscribe: function(eventName, fn) {

    // },
    // calls every function that subscribed to the event with the data passed in
    publish: function(eventName, ...data) {
        if(this.events[eventName]) {
            this.events[eventName].forEach(fn => {
                fn(...data);
            });
        };
    }
};