import Drawable from './Drawable';
import TimelineEvent from './TimelineEvent';
import State from './State';

export default class TimelineLayer extends Drawable {
  constructor(public drawable: Drawable, public events: TimelineEvent[]) {
    super();
  }

  render(state: State): void {
    this.drawable.render(state);
  }
}
