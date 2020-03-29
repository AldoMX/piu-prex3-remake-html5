import State from './State';

export default abstract class Drawable {
  abstract render(state: State): void;
}
