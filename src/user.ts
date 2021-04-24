
class User {
  private id: string;
  constructor(public readonly name: string, id?:string) {
    if (id) {
      this.id = id
      this.checkLength();
    } else {
      this.id = this.genID();
      this.checkLength();
    }
}
  
  ID(): string {
    return this.id;
  }

  private genID(): string {
    let id: string;
    id = Math.floor((Math.random() * 10000) + 1).toString();
    
    return id;
  }

  private checkLength(): void {
    if (this.id.length < 4) {
      while(this.id.length < 4) {
        this.id = "0" + this.id;
      }
    }
  }
};

export {User};
