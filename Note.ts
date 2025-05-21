import { DraftCreator } from "./DraftCreator";
import { Tag } from "./Tag";
import { NoteImage } from "./NoteImage";

export class Note implements DraftCreator{                     //Прототип
  constructor(
    private id: number,
    private isDraft: boolean = false,
    private text: string,
    private date: Date,
    private title: string,
    private isImportant: boolean,
    private deadline: Date | null,
    public author: number,
    private images: NoteImage[] = [],
    private tags: Tag[] = [],
    public sharedToGroups: Group[] = [],
    public sharedToTechears: User[] = []
  ){}
  
  public addImage(image: NoteImage){
    this.images.push(image);
  }
  
  public addTag(tag: Tag){
    this.tags.push(tag);
  }
  
  public createDraft(): Note{
    return new Note(this.id, true, this.text, this.date, this.title, this.isImportant, this.deadline, this.author, this.images, this.tags, this.sharedToGroups, this.sharedToTechears);
  }
  
  public getId(): number{
    return this.id;
  }

  public isThisDraft(): boolean{
    return this.isDraft;
  }
}