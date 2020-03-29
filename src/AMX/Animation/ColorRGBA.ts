export default class ColorRGBA {
  constructor(
    public red = 0,
    public green = 0,
    public blue = 0,
    public alpha = 1,
  ) {}

  clone(): ColorRGBA {
    return new ColorRGBA(this.red, this.green, this.blue, this.alpha);
  }
}
