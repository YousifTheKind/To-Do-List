import { pubsub } from "./pubsub";
import { myProjects, myTasks } from "./create";
export { getFromLocalStorage };

// making sure that storage is available
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

const saveToLocalStorage = () => {
    if (storageAvailable("localStorage")) {
        localStorage.setItem("myTasks", JSON.stringify(myTasks));
        localStorage.setItem("myProjects", JSON.stringify(myProjects));
    } 
    else {
        alert("something went wrong!");
    };
};

const getFromLocalStorage = () => {
    if(localStorage.getItem("myProjects") && localStorage.getItem("myTasks")) {
        const savedProjects = JSON.parse(localStorage.getItem("myProjects"));
        const savedTasks = JSON.parse(localStorage.getItem("myTasks"));
        console.log(savedProjects);
        Object.assign(myProjects, savedProjects);
        Object.assign(myTasks, savedTasks);
        pubsub.publish("ListsUpdated");
    }
};
pubsub.subscribe("ListsUpdated", saveToLocalStorage);