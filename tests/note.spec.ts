import "mocha";
import {expect} from "chai";
import {User} from "../src/user";
import {Note} from "../src/note";

describe("Default Note class tests", ()=> {
  it("Note creation returns no user, empty content and default color", ()=>{
    let defaultNote: Note = new Note();
    expect(defaultNote.user).to.be.eq(undefined);
    expect(defaultNote.title).to.be.eq("Empty note 1");
    expect(defaultNote.body).to.be.eq("");
    expect(defaultNote.color).to.be.eq("default");
    expect(defaultNote.toJSON())
    .to.be.eq(
      "{\n"+
      "\t\"title\": \"Empty note 1\",\n"+
      "\t\"body\": \"\",\n"+
      "\t\"color\": \"default\"\n"+
      "}"
      );
  });
  it("Second note increases the empty note counter", ()=>{
    let defaultNote: Note = new Note();
    expect(defaultNote.user).to.be.eq(undefined);
    expect(defaultNote.title).to.be.eq("Empty note 2");
    expect(defaultNote.body).to.be.eq("");
    expect(defaultNote.color).to.be.eq("default");
  });
});

describe("Note class tests", ()=> {
  it("Note creation returns user, content if inputed andcolor", ()=>{
    let ericUser: User = new User("Eric");
    let newNote: Note = new Note("Nueva nota", " some new content ", "red", ericUser);
    expect(newNote.user).to.be.eq(ericUser);
    if (newNote.user) {
      expect(newNote.user.name).to.be.eq("Eric");
    }  
    expect(newNote.title).to.be.eq("Nueva nota");
    expect(newNote.body).to.be.eq(" some new content ");
    expect(newNote.color).to.be.eq("red");
  });
});
