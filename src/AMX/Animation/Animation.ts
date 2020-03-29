import Drawable from './Drawable';
import Frame from './Frame';
import State from './State';

export default class Animation extends Drawable {
  private _animationTime = 0;
  private _frames: Frame[] = [];
  private _lengthInSeconds = 1;
  private _timePerFrame = 0;

  constructor(frames: Frame[], lengthInSeconds = 1) {
    super();
    this._frames = frames;
    this._lengthInSeconds = lengthInSeconds;
    this.refreshTimePerFrame();
  }

  set frames(frames: Frame[]) {
    this._frames = frames;
    this.refreshTimePerFrame();
  }

  set lengthInSeconds(lengthInSeconds: number) {
    this._lengthInSeconds = lengthInSeconds;
    this.refreshTimePerFrame();
  }

  // eslint-disable-next-line getter-return
  private get currentFrame(): Frame | undefined {
    const index = Math.floor(this._animationTime / this._timePerFrame);
    if (index >= 0 && index < this._frames.length) {
      return this.frames[index];
    }
  }

  render(state: State): void {
    this.currentFrame?.render(state);
  }

  update(delta: number): void {
    this._animationTime += delta;
    if (this._animationTime > this.lengthInSeconds) {
      this._animationTime -= this.lengthInSeconds;
    }
  }

  private refreshTimePerFrame(): void {
    this._timePerFrame = this._frames.length / this._lengthInSeconds;
  }
}
