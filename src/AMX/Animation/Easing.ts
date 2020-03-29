import BezierEasing from 'bezier-easing';
import { EasingType } from './types/EasingType';
import lerp from './util/lerp';

export default class Easing {
  constructor(
    public v0 = 0,
    public v1 = 0,
    public easingType = EasingType.lerp,
    private easingValues: number[] = [],
  ) {}

  calc(t: number): number {
    return lerp(this.v0, this.v1, this.computeT(t));
  }

  clone(): Easing {
    return new Easing(this.v0, this.v1, this.easingType, this.easingValues);
  }

  private computeT(t: number): number {
    switch (this.easingType) {
      case EasingType.none:
        return Math.floor(t);

      case EasingType.lerp:
        return t;

      case EasingType.lerpSin:
        return Math.sin(t * Math.PI * 0.5);

      case EasingType.lerpCos:
        return 1.0 - Math.cos(t * Math.PI * 0.5);

      case EasingType.lerpSmoothStep:
        return t * t * (3 - 2 * t);

      case EasingType.lerpSmootherStep:
        return t * t * t * (t * (6 * t - 15) + 10);

      case EasingType.lerpPower: {
        const [exp = 2] = this.easingValues;
        return t ** exp;
      }

      case EasingType.bezierQuad: {
        const [x = 0.5, y = 0.5] = this.easingValues;
        return BezierEasing(x, y, x, y)(t);
      }

      case EasingType.bezierCubic: {
        const [x1 = 0.5, y1 = 0.5, x2 = 0.5, y2 = 0.5] = this.easingValues;
        return BezierEasing(x1, y1, x2, y2)(t);
      }
    }
  }
}
