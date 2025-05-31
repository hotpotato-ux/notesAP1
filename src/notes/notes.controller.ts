import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  addNote(
    @Body() createNoteDto: CreateNoteDto
  ) {
    const generatedId = this.notesService.insertNote(createNoteDto.title, createNoteDto.description);
    return { id: generatedId };
  }

  @Get()
  getAllNotes() {
    return this.notesService.getNotes();
  }

  @Get(':id')
  getNote(@Param('id') noteId: string) {
    return this.notesService.getSingleNote(noteId);
  }

  @Put(':id')
  updateNote(
    @Param('id') noteId: string,
    @Body() updateNoteDto: UpdateNoteDto
  ) {
    const updatedNote = this.notesService.updateNote(noteId, updateNoteDto.title, updateNoteDto.description);
    return { message: 'note updated', updatedNote };
  }

  @Delete(':id')
  removeNote(@Param('id') noteId: string) {
    this.notesService.deleteNote(noteId);
    return { message: 'note deleted' };
  }
}
