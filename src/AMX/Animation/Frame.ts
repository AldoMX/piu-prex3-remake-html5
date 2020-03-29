import Drawable from './Drawable';
import FrameLayer from './FrameLayer';
import State from './State';

export default class Frame extends Drawable {
  constructor(public layers: FrameLayer[]) {
    super();
  }

  render(state: State): void {
    for (const layer of this.layers) {
      layer.render(state);
    }
  }
}
