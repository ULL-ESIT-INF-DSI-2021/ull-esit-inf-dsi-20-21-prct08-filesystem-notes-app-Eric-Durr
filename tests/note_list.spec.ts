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
    expect( stdout.inspectSync(()=> newNoteList.showNotes())).to.be.eql([]);
  })
  it("Note can be added to the list",()=>{
    let defaultNote: Note = new Note();
    newNoteList.addNote(defaultNote);
    expect( stdout.inspectSync(()=> newNoteList.showNotes())).to.be.eql(["\u001b[30m\u001b[47mEmpty note 1\u001b[49m\u001b[39m\n"]);
  })
  it("Trying to input the same note will cause error", ()=>{
    let sameNote: Note = new Note("Empty note 1");
    expect( stdout.inspectSync(()=> newNoteList.addNote(sameNote))).to.be.eql(["\u001b[32m\u001b[1mAdded Empty note 1 to the user Eric note list.\u001b[22m\u001b[39m\n"])  
  })
});