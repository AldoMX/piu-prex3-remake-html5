export default class Point {
  constructor(public x = 0, public y = 0) {}

  clone(): Point {
    return new Point(this.x, this.y);
  }
}
