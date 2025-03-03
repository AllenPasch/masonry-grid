export interface IPhoto {
  readonly id: number;
  readonly width: number;
  readonly height: number;
  readonly url: string;
  readonly alt: string | null;
  readonly avg_color: string | null;
  readonly photographer: string;
  readonly photographer_url: string;
  readonly src: {
    readonly original: string;
  };
}
