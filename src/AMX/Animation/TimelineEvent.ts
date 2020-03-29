import State from './State';
import { EasingType } from './types/EasingType';

export default class TimelineEvent {
  constructor(
    public time: number,
    public key: keyof State,
    public value: State[keyof State],
    public easingType = EasingType.lerp,
    public easingValues: number[] = [],
  ) {}
}
