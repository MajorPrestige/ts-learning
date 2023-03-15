class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 10);
  }

  showSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  showKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("person inside");
      return;
    }

    throw new Error('Door is close');
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor (key:Key) {
    if (key.showSignature() !== this.key.showSignature()) {
      throw new Error('Key to another door');
    }

    return this.door = true;
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.showKey());

house.comeIn(person);
