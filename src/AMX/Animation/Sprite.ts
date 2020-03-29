import DrawableRect from './DrawableRect';
import Texture from './Texture';
import Rect from './Rect';
import State from './State';

export default abstract class Sprite extends DrawableRect {
  constructor(
    public texture: Texture,
    public sourceRect = new Rect(0, 0, texture.width, texture.height),
    destRect = new Rect(0, 0, texture.width, texture.height),
  ) {
    super(destRect);
  }

  abstract render(state: State): void;
}
