import ColorRGBA from './ColorRGBA';
import Point from './Point';
import { BlendType } from './types/BlendType';

export default class State {
  constructor(
    public hidden = false,
    public alpha = 1.0,
    public position = new Point(0, 0),
    public zoom = new Point(0, 0),
    public pivot = new Point(0, 0),
    public rotation = 0,
    public zIndex = 0,
    public tint = new ColorRGBA(255, 255, 255, 1.0),
    public blend: BlendType = BlendType.normal,
  ) {}
}

export const applyToState = (
  state: State,
  key: keyof State,
  value: State[keyof State],
): void => {
  switch (key) {
    case 'hidden':
      state[key] = value as boolean;
      break;

    case 'alpha':
    case 'rotation':
    case 'zIndex':
      state[key] = value as number;
      break;

    case 'position':
    case 'zoom':
    case 'pivot':
      state[key] = value as Point;
      break;

    case 'tint':
      state[key] = value as ColorRGBA;
      break;

    case 'blend':
      state[key] = value as BlendType;
      break;
  }
};

export const cloneState = (state: State): State => {
  return new State(
    state.hidden,
    state.alpha,
    state.position.clone(),
    state.zoom.clone(),
    state.pivot.clone(),
    state.rotation,
    state.zIndex,
    state.tint.clone(),
    state.blend,
  );
};
