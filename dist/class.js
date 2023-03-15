"use strict";
class Key {
    constructor() {
        this.signature = Math.floor(Math.random() * 10);
    }
    showSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    showKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log("person inside");
            return;
        }
        throw new Error('Door is close');
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.showSignature() !== this.key.showSignature()) {
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);
//# sourceMappingURL=class.js.map