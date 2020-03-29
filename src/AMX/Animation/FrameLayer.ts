import Drawable from './Drawable';
import State from './State';

export default class FrameLayer extends Drawable {
  constructor(public drawables: Drawable[]) {
    super();
  }

  render(state: State): void {
    for (const drawable of this.drawables) {
      drawable.render(state);
    }
  }
}
