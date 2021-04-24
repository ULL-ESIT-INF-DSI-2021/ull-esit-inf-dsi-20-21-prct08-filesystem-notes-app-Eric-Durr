import {User} from "./user";
import {Note} from "./note";
const chalk = require('chalk');
// import * as fs from "fs";


class NoteList {
  private notes: Note[];
  constructor(public readonly user: User, notes: Note[] = [] ) {  
    this.notes = notes;        
  }
  addNote(newNote: Note): void {
    this.notes.every((note) => {
      if (note.title === newNote.title) {
        console.error(chalk.red.bold("Note " + newNote.title + " allready exists."));
        return;
      }
    });
    this.notes.push(newNote);
    console.log(chalk.green.bold("Added " + newNote.title + " to the user "+ this.user.name +" note list."));
  }  
  modNote(title: string, body:string): void {
    this.notes.every((note) => {
      if (note.title === title) {
        note.body = body;
        return;
      }
    });
    console.error(chalk.red.bold("Note " + title + " doesn't exist in this list."));
  }
  appendNote(title: string, body:string): void {
    this.notes.every((note) => {
      if (note.title === title) {
        note.body +="\n"+body;
        return;
      }
    });
    console.error(chalk.red.bold("Note " + title + " doesn't exist in this list."));
  }

  rmNote(title: string, body:string): void {
    let prelength: number = this.notes.length;
    this.notes.filter((note) => {
      return note.title === title
    });
    if (prelength !== this.notes.length) {
      console.error(chalk.red.bold("Note " + title + " doesn't exist in this list."));
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
    this.notes.every((note)=>{
      if (note.title === title) {
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
      }}
    })
  }

  // saveNote(): void {
  //   const path = "./"+this.user.name;
  //   fs.mkdir(path, (err) => {
  //   });
  // }
};


export {NoteList};