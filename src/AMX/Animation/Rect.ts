import Point from './Point';

export default class Rect extends Point {
  constructor(x = 0, y = 0, public width = 0, public height = 0) {
    super(x, y);
  }

  clone(): Rect {
    return new Rect(this.x, this.y, this.width, this.height);
  }
}
