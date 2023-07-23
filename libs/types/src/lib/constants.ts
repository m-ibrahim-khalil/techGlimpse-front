export enum Variant {
  ERROR,
  NOTE,
  SUCCESS,
  INFO,
  DANGER,
}

export enum Size {
  LARGE,
  SMALL,
}

export const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-2.5 text-xs',
  [Size.LARGE]: 'px-5 py-2.5 text-sm',
};

export const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.ERROR]: 'bg-red-500 hover:bg-red-800 text-white',
  [Variant.NOTE]: 'bg-yellow-500 hover:bg-yellow-800 text-white',
  [Variant.SUCCESS]: 'bg-green-500 hover:bg-green-800 text-white',
  [Variant.INFO]: 'bg-blue-500 hover:bg-blue-800 text-white',
  [Variant.DANGER]: 'bg-red-500 hover:bg-red-700 text-white',
};
