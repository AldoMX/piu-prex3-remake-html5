import Drawable from './Drawable';
import Rect from './Rect';
import State, { cloneState } from './State';

export default abstract class DrawableRect extends Drawable {
  constructor(public rect: Rect) {
    super();
  }

  alignToBottom(other: DrawableRect): void {
    this.rect.x = other.rect.x;
    this.rect.y = other.rect.y + other.rect.height;
  }

  alignToLeft(other: DrawableRect): void {
    this.rect.x = other.rect.x + other.rect.width;
    this.rect.y = other.rect.y;
  }

  alignToRight(other: DrawableRect): void {
    this.rect.x = other.rect.x - other.rect.width;
    this.rect.y = other.rect.y;
  }

  alignToTop(other: DrawableRect): void {
    this.rect.x = other.rect.x;
    this.rect.y = other.rect.y - other.rect.height;
  }

  computeUpdatedState(state: State): State {
    const updatedState = cloneState(state);
    updatedState.position.x += this.rect.x;
    updatedState.position.y += this.rect.y;
    return updatedState;
  }

  abstract render(state: State): void;
}
