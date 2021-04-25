import "mocha";
import {expect} from "chai";
import {stdout} from "test-console";
import {User} from "../src/user";
import {NoteList} from "../src/note_list";
import { Note } from "../src/note";

describe("Testing note list", ()=> {
  const newNoteList: NoteList = new NoteList(new User("Eric"));
  it("List must have a linked user user and an empty notes list",()=>{
    expect(newNoteList.user.name).to.be.eq("Eric");
    expect(stdout.inspectSync(()=> newNoteList.showNotes())).to.be.eql([]);
  });
  it("Note can be added to the list",()=>{
    let defaultNote: Note = new Note();
    
    expect(stdout.inspectSync(()=> newNoteList.addNote(defaultNote)))
        .to.be.eql([]);
  });
  it("Trying to input the same note will cause error", ()=>{
    let sameNote: Note = new Note("Empty note 1", "", );
    expect(stdout.inspectSync(()=> newNoteList.addNote(sameNote)))
        .to.be.eql([]);
  });
  it("Notes can be listed", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.showNotes()))
        .to.be.eql([]);
  })
  it("Notes can be readed", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.readNote("Empty note 1")))
        .to.be.eql([]);
                   
  });
  it("Notes can be modified", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.modNote("Empty note 1", "new content")))
        .to.be.eql([]);
    expect(stdout.inspectSync(()=> newNoteList.readNote("Empty note 1")))
        .to.be.eql([]);
  });


  it("Notes can be modified appended", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.appendNote("Empty note 1", "and more")))
        .to.be.eql([]);
    expect(stdout.inspectSync(()=> newNoteList.readNote("Empty note 1")))
        .to.be.eql([]);
  });

  it("Deleting a non existing note will cause an error", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.rmNote("Shopping")))
        .to.be.eql([]);
  });
  it("Modifying non existing note will cause an error", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.modNote("Shopping", "blank")))
        .to.be.eql([]);
  });
  it("appending to non existing note will cause an error", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.appendNote("Shopping", "blank")))
        .to.be.eql([]);
  });
  it("reading non existing note will cause an error", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.readNote("Shopping")))
        .to.be.eql([]);
  });

  it("Modifying an existing note will notify", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.modNote("Empty note 1", "blank")))
        .to.be.eql([]);
  });
  it("appending to existing note will notify", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.appendNote("Empty note 1", " more blank")))
        .to.be.eql([]); 
  });
  it("reading an existing note will otuput note and body", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.readNote("Empty note 1")))
        .to.be.eql([]);
  });
  it("Deleting an existing note will work fine", ()=>{
    expect(stdout.inspectSync(()=> newNoteList.rmNote("Empty note 1")))
        .to.be.eql([]);
    expect(stdout.inspectSync(()=> newNoteList.showNotes())).to.be.eql([]);
  });
  
});

describe("teasting each color output in notes", ()=>{
  const redNote: Note = new Note("red note", "this is the body", "red");
  const blackNote: Note = new Note("black note", "this is the body", "black");
  const orangeNote: Note = new Note("orange note", "this is the body", "orange");
  const pinkNote: Note = new Note("pink note", "this is the body", "pink");
  const blueNote: Note = new Note("blue note", "this is the body", "blue");
  const greenNote: Note = new Note("green note", "this is the body", "green");
  const yellowNote: Note = new Note("yellow note", "this is the body", "yellow");
  it ("outputting a note list titles", ()=> {
    let rainbowList: NoteList = new NoteList(new User("Eric"));
    rainbowList.addNote(redNote);
    rainbowList.addNote(blackNote);
    rainbowList.addNote(orangeNote);
    rainbowList.addNote(pinkNote);
    rainbowList.addNote(blueNote);
    rainbowList.addNote(greenNote);
    rainbowList.addNote(yellowNote);
    rainbowList.showNotes();
  });
  it ("showing each note content", () => {
    let rainbowList: NoteList = new NoteList(new User("Eric"));
    rainbowList.addNote(redNote);
    rainbowList.addNote(blackNote);
    rainbowList.addNote(orangeNote);
    rainbowList.addNote(pinkNote);
    rainbowList.addNote(blueNote);
    rainbowList.addNote(greenNote);
    rainbowList.addNote(yellowNote);

    rainbowList.readNote("red note");
    rainbowList.readNote("black note");
    rainbowList.readNote("orange note");
    rainbowList.readNote("pink note");
    rainbowList.readNote("blue note");
    rainbowList.readNote("green note");
    rainbowList.readNote("yellow note");
  })
})

