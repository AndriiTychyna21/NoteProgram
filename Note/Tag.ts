export class Tag{
  constructor(
    private name: string,
    private color: string,
    public font: string,
    public iconPath: string
  ){}

  public clone(): Tag {
    return new Tag(this.name, this.color, this.font, this.iconPath);
  }
}