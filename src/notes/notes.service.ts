import { Injectable , NotFoundException} from "@nestjs/common";
import { Note } from "./notes.model";

@Injectable()

export class NotesService{
    private notes: Note[]=[];

    insertNote(title:string, desc:string){
        const noteId= Date.now().toString();
        const newNote= new Note(noteId,title,desc);
        this.notes.push(newNote);
        return noteId;
    }

    getNotes(){
        return [...this.notes];
    }

    getSingleNote(noteId: string){
        const [note]= this.findNote(noteId);
        return {...note};
    }

    updateNote(noteId: string, title?: string, desc?: string){
        const [note, index]= this.findNote(noteId);
        const updatedNote={...note};

        if(title!==undefined){
            updatedNote.title=title;
        }
        if(desc!==undefined){
            updatedNote.description=desc;
        }
        this.notes[index]=updatedNote;
    }

    private findNote(id: string): [Note, number]{
        const noteIndex = this.notes.findIndex((note)=>note.id===id);
        const note= this.notes[noteIndex];
        if (!note){
            throw new NotFoundException('could not find note');
        }
        return [note, noteIndex];
    }

    deleteNote(noteId: string){
        const index=this.findNote(noteId)[1];
        this.notes.splice(index,1);
    }
}