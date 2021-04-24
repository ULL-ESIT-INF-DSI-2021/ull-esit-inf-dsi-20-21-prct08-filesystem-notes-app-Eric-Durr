import {User} from "./user"

class Note {
  public readonly user: User | undefined;
  static empty_entities: number = 0;
  constructor(public title: string = "", 
              public body: string = "", 
              public color:string = "default",
              user?: User) {
                this.user = user;
                if (this.title === "") {
                  Note.empty_entities++;
                  this.title = "Empty note " + Note.empty_entities.toString();
                }
              }  
};

export {Note};
