import Drawable from './Drawable';
import TimelineLayer from './TimelineLayer';
import State from './State';

export default class Timeline extends Drawable {
  constructor(public layers: TimelineLayer[]) {
    super();
  }

  render(state: State): void {
    for (const layer of this.layers) {
      layer.render(state);
    }
  }
}
