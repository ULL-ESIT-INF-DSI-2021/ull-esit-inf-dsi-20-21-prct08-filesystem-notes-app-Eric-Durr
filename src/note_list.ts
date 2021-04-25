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
    let exists: boolean = false;
    this.notes.every((note) => {
      if (note.title === newNote.title) {
        exists = true;
      }
    });
    if (exists) {
      console.log(chalk.red.bold("Note " + newNote.title + " allready exists."));
      
    } else {
      this.notes.push(newNote);
      console.log(chalk.green.bold("Added " + newNote.title + " to the user "+ this.user.name +" note list."));  
    }
  }  
  modNote(title: string, body:string): void {
    let modifyed: boolean = false;
    this.notes.every((note) => {
      if (note.title === title) {
        note.body = body;
        modifyed = true; 
      }
    });
    if (modifyed) {
      console.log(chalk.green.bold("Note " + title + " modifyed."));
    } else {
      console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."));
    }
  }
  appendNote(title: string, body:string): void {
    let appended: boolean = false;
    this.notes.every((note) => {
      if (note.title === title) {
        appended = true
        note.body +="\n"+body;
      }
    });
    if (appended) {
      console.log(chalk.green.bold("Note " + title + " has added text."));
    } else {
      console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."));
    }
  }

  rmNote(title: string): void {
    let prelength: number = this.notes.length;
    this.notes = this.notes.filter((note) => {
      return note.title === title
    });

    if (prelength !== this.notes.length) {
      console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."));
    } else {
      console.log(chalk.green.bold("Note " + title + " deleted."));  
    }
  }
  showNotes(): void {
    this.notes.every((note)=>{
  
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
          console.log(chalk.black.redBright.bold(note.title));
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
        break;
        default:
          console.log(chalk.black.bgWhite(note.title));
          break;
      }
    })
  }
  readNote(title: string): void {
    let readed: boolean = false;
    this.notes.every((note)=>{
      if (note.title === title) {
        readed = true;
        switch(note.color) {
          case "black":
            console.log(chalk.white.bgBlack.bold(note.title));
            console.log(chalk.white.bgBlack(note.body));
            break;
          case "blue":
            console.log(chalk.white.bgBlue.bold(note.title));
            console.log(chalk.white.bgBlue(note.body));
            break;
          case "green":
            console.log(chalk.black.bgGreen.bold(note.title));
            console.log(chalk.black.bgGreen(note.body));
            break;
          case "orange":
            console.log(chalk.black.redBright.bold(note.title));
            console.log(chalk.black.redBright(note.body));
            break;
          case "pink":
            console.log(chalk.white.bgMagenta.bold(note.title));
            console.log(chalk.white.bgMagenta(note.body));
            break;
          case "red":
            console.log(chalk.black.bgRed.bold(note.title));
            console.log(chalk.black.bgRed(note.body));
            break;
          case "yellow":
            console.log(chalk.black.bgYellow.bold(note.title));
            console.log(chalk.black.bgYellow(note.body));
            break;
          case"white":
          default:
            console.log(chalk.black.bgWhite.bold(note.title));
            console.log(chalk.black.bgWhite(note.body));
            break;
      }
    }
    });
    if (readed == false) {
      console.log(chalk.red.bold("Note " + title + " doesn't exist in this list."))
    };
  }

  saveNotes(): void {
    const path: string = "./"+this.user.name;
    fs.mkdir(path, (err) => {
    });
    this.notes.every((note) => {
       const noSpaceTitle: string = note.title.split(" ").join("_");
       const filename: string = path + "/" + noSpaceTitle + ".JSON";
       fs.writeFile(filename, note.toJSON(), (err)=>{
         if (err) {
         } else {
           console.log(chalk.green.bold("Note saved in " + noSpaceTitle ));
         }
       });
    });
  }

  loadNote(title: string) {
    const path: string = "./"+this.user.name;
    const noSpaceTitle: string = title.split(" ").join("_");
    const filename: string = path + "/" + noSpaceTitle + ".JSON";
       
    fs.open(filename, "r", (err) => {
      if (err) {
        console.log(chalk.red.bold("Note does not exists"));
      } else {
        console.log(chalk.green.bold("Note JSON oppened"));
        let data = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        this.addNote(new Note(data.title, data.body, data.color))
      }
    })
  }
};


export {NoteList};