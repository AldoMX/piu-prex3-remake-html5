export default class Texture {
  constructor(
    public src: string,
    private image: HTMLImageElement | null = null,
  ) {
    this.load();
  }

  async load(): Promise<void> {
    if (this.image) {
      return;
    }
    try {
      this.image = await Texture.decodeImage(this.src);
    } catch (e) {
      this.image = null;
    }
  }

  get isLoaded(): boolean {
    return this.image?.complete ?? false;
  }

  get height(): number {
    return this.image?.complete ? this.image.height : 0;
  }

  get width(): number {
    return this.image?.complete ? this.image.width : 0;
  }

  private static textureCache = new Map<string, HTMLImageElement>();

  static clearCache(): void {
    this.textureCache.clear();
  }

  static async decodeImage(src: string): Promise<HTMLImageElement> {
    if (!this.textureCache.has(src)) {
      const image = new Image();
      image.src = src;
      this.textureCache.set(src, image);
    }
    const image = this.textureCache.get(src) as HTMLImageElement;
    await image.decode();
    return image;
  }
}
