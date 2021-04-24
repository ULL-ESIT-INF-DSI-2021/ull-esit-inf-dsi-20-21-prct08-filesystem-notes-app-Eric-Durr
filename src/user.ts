
class User {
  private id: string;
  constructor(public readonly name: string) {
    this.id = this.genID();
  }
  
  ID(): string {
    return this.id;
  }

  private genID(): string {
    let id: string;
    id = Math.floor((Math.random() * 2000) + 1000).toString();
    if (id.length < 4) {
      for (let i = 0; i < (4 - id.length); ++i) {
        id = "0" + id;
      }
    }
    return id;
  }
};

export {User};
