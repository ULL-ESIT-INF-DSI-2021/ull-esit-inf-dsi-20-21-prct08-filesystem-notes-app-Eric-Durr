import {User} from "./user"

type color = "default" | "white" | "red" | 
             "black" | "pink" | "yellow" | 
             "blue" | "green" | "orange"
class Note {
  public readonly user: User | undefined;
  static empty_entities: number = 0;
  constructor(public title: string = "", 
              public body: string = "", 
              public color: color = "default",
              user?: User) {
                if (user) {
                  this.user = user;
                }
                if (this.title === "") {
                  Note.empty_entities++;
                  this.title = "Empty note " + Note.empty_entities.toString();
                }
              }  
};

export {Note};
