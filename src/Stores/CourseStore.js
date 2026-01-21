import { EventEmitter } from "events";
import AppDispatcher from "..dispatcher/AppDispatcher";

let count = 0;

class CounterStore extends EventEmitter {
  getCount() {
    return count;
  }

  emitChange() {
    this.emit("change");
  }

  addChangeListener(cb) {
    this.on("change", cb);
  }

  removeChangeListener(cb) {
    this.removeListener("change", cb);
  }
}

const store = new CounterStore();

AppDispatcher.register(action => {
  if (action.type === "INCREMENT") {
    count++;
    store.emitChange();
  }
});

export default CounterStore;