import { Role } from "./Role";
import { NoteController } from "../Note/NoteController";


export class User {
  constructor(
    private firstName: string,
    private surName: string,
    private emailAddres: string,
    private password: string,
    private role: Role,
    private noteController: NoteController = NoteController.getInstance()
  ) {}
}