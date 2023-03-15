function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(['Text', 50, 'Text', 'text']);
  });
}

getPromise().then((data) => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends {}, U extends {}>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}



class Component<T> {
  constructor(public props: T) {}
}

interface IProps {
  title: string;
}

class Page extends Component<IProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// ------------------------------------------

interface IInterface {
  title: string;
}

class Component2{
  constructor(public props: IInterface) {}
}

class Page2 extends Component2 {
  pageInfo(): void {
    console.log(this.props.title);
  }
}