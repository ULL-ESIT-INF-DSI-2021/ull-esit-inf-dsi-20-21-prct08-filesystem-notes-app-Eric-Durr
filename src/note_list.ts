import {User} from "./user";
import {Note} from "./note";
const chalk = require('chalk');
import * as fs from "fs";


class NoteList {
  private notes: Note[];
  constructor(public readonly user: User, notes: Note[] = [] ) {  
    this.notes = notes;        
  }
  addNote(newNote: Note): void {
    const path: string = "./"+this.user.name;
    const noSpaceTitle: string = newNote.title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
    fs.mkdir(path, (err) => {
      if(err) {
        console.log(chalk.green.bold("Recognized user"))
      } else {
        console.log(chalk.green.bold("Creating new folder"))
      }
      if (fs.existsSync(filename)) {
        console.log(chalk.red.bold("Note " + newNote.title + " allready exists."));
      } else {
        this.saveNote(newNote);
        console.log(chalk.green.bold("Added " + newNote.title + " to the user "+ this.user.name +" note list."));  
      }    
    });
  }  
  modNote(title: string, body:string): void {
    let note: Note;
    const path: string = "./"+this.user.name;

    if (fs.existsSync(path)) {
      const noSpaceTitle: string = title.split(" ").join("_");
      const filename: string = path + "/" + noSpaceTitle + ".JSON";
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
          console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."));
        } else {
          let readed = JSON.parse(data.toString());
          note = new Note(readed["title"],readed["body"],readed["color"]);
          note.body = body;
          console.log(chalk.green.bold("Note " + title + " has been modified"));
          this.saveNote(note);
        }
      });     
    } else {
      console.log(chalk.red.bold("Unecognized user, must add at least 1 note"));
    }

  }
  appendNote(title: string, body:string): void {
    let note: Note;
    const path: string = "./"+this.user.name;

    if (fs.existsSync(path)) {
      const noSpaceTitle: string = title.split(" ").join("_");
      const filename: string = path + "/" + noSpaceTitle + ".JSON";
      fs.readFile(filename, "utf-8", (err, data) => {
        if (err) {
          console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."));
        } else {
          let readed = JSON.parse(data.toString());
          note = new Note(readed["title"],readed["body"],readed["color"]);
          note.body += body;
          console.log(chalk.green.bold("Note " + title + " has added text."));
          this.saveNote(note);
        }
      });
    } else {
      console.log(chalk.red.bold("Unecognized user, must add at least 1 note"));
    }
  }

  rmNote(title: string): void {
      const path: string = "./"+this.user.name;
      if (fs.existsSync(path)) {
        const noSpaceTitle: string = title.split(" ").join("_");
        const filename: string = path + "/" + noSpaceTitle + ".JSON";
        fs.unlink(filename, (err) => {
          if (err) {
              console.log(chalk.red.bold("Error deleting note"));
          } else {
            console.log(chalk.green.bold("Note " + title + " deleted."));  
          }
        });
      } else {
        console.log(chalk.red.bold("Unecognized user, must add at least 1 note"));
        return;
      }
    }
  
  showNotes(): void {
    
    const path: string = "./"+this.user.name;
    if (fs.existsSync(path)) {
      fs.readdirSync(path).forEach((element) => {
        const filename: string = path + "/" + element;
        fs.readFile(filename, "utf-8", (err, data) => {
            let readed = JSON.parse(data.toString());
            const note = new Note(readed["title"],readed["body"],readed["color"]);
            switch(note.color) {
              case "black": {
                console.log(chalk.white.bgBlack.bold(note.title));
                break;
              }
              case "blue": {
                console.log(chalk.white.bgBlue.bold(note.title));
                break;
              }
              case "green": {
                console.log(chalk.black.bgGreen.bold(note.title));
                break;
              }
              case "orange": {
                console.log(chalk.black.redBright.bold(note.title));
                break;
              }
              case "pink": {
                console.log(chalk.white.bgMagenta.bold(note.title));
                break;
              }
              case "red": {
                console.log(chalk.black.bgRed.bold(note.title));
                break;
              }
              case "yellow": {
                console.log(chalk.black.bgYellow.bold(note.title));
                break;
              }
              case"white":
              default: {
                console.log(chalk.black.bgWhite.bold(note.title));
              }
          }
        });
      });
    } else {
      console.log(chalk.red.bold("Unecognized user, must add at least 1 note"));  
    }

    this.notes.forEach((note)=>{
      switch(note.color) {
        case "black":
          console.log(chalk.white.bgBlack.bold(note.title));
          break;
        case "blue":
          console.log(chalk.white.bgBlue.bold(note.title));
          break;
        case "green":
          console.log(chalk.black.bgGreen.bold(note.title));
          break;
        case "orange":
          console.log(chalk.black.bgRedBright.bold(note.title));
          break;
        case "pink":
          console.log(chalk.white.bgMagenta.bold(note.title));
          break;
        case "red":
          console.log(chalk.black.bgRed.bold(note.title));
          break;
        case "yellow":
          console.log(chalk.black.bgYellow.bold(note.title));
          break;
        case"white":
        default:
          console.log(chalk.black.bgWhite(note.title));
          break;
      }
    })
  }
  readNote(title: string): void {
    let note: Note;
    const path: string = "./"+this.user.name;
    const noSpaceTitle: string = title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(chalk.red.bold("Note does not exists"));
      } else {
        let readed = JSON.parse(data.toString());
        note = new Note(readed["title"],readed["body"],readed["color"]);
        switch(note.color) {
          case "black": {
            console.log(chalk.white.bgBlack.bold(note.title));
            console.log(chalk.white.bgBlack(note.body));
            break;
          }
          case "blue": {
            console.log(chalk.white.bgBlue.bold(note.title));
            console.log(chalk.white.bgBlue(note.body));
            break;
          }
          case "green": {
            console.log(chalk.black.bgGreen.bold(note.title));
            console.log(chalk.black.bgGreen(note.body));
            break;
          }
          case "orange": {
            console.log(chalk.black.redBright.bold(note.title));
            console.log(chalk.black.redBright(note.body));
            break;
          }
          case "pink": {
            console.log(chalk.white.bgMagenta.bold(note.title));
            console.log(chalk.white.bgMagenta(note.body));
            break;
          }
          case "red": {
            console.log(chalk.black.bgRed.bold(note.title));
            console.log(chalk.black.bgRed(note.body));
            break;
          }
          case "yellow": {
            console.log(chalk.black.bgYellow.bold(note.title));
            console.log(chalk.black.bgYellow(note.body));
            break;
          }
          case"white":
          default: {
            console.log(chalk.black.bgWhite.bold(note.title));
            console.log(chalk.black.bgWhite(note.body));
            break;
          }
      }
    }
  });
}
  saveNote( note: Note): void {
    const path: string = "./"+this.user.name;
    fs.mkdir(path, (err) => {
    });
    const noSpaceTitle: string = note.title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
    fs.writeFile(filename, note.toJSON(), (err)=>{
      if (!err) {
        console.log(chalk.green.bold("Note saved in " + noSpaceTitle ));
      }
    });
  }

  loadNote(title: string) {
    const path: string = "./"+this.user.name;
    const noSpaceTitle: string = title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
       
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        console.log(chalk.red.bold("Note does not exists"));
      } else {
        console.log(chalk.green.bold("Note JSON oppened"));
        let readed = JSON.parse(data.toString());
        this.addNote(new Note(readed["title"],readed["body"],readed["color"]));
      }
    })
  }
};


export {NoteList};