export enum Variant {
  ERROR,
  SUCCESS,
  INFO,
  WARNING,
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
  [Variant.SUCCESS]: 'bg-green-500 hover:bg-green-800 text-white',
  [Variant.INFO]: 'bg-blue-500 hover:bg-blue-800 text-white',
  [Variant.WARNING]: 'bg-red-500 hover:bg-red-700 text-white',
};

export const ALERT_TYPE_MAPS: Record<Variant, string> = {
  [Variant.ERROR]: 'text-red-800 bg-red-50 dark:text-red-400',
  [Variant.SUCCESS]: 'text-green-800 bg-green-50 dark:text-green-400',
  [Variant.INFO]: 'text-blue-800 bg-blue-50 dark:text-blue-400',
  [Variant.WARNING]: 'text-yellow-800 bg-yellow-50 dark:text-yellow-400',
};

export const ALERT_ICON_MAPS: Record<Variant, string> = {
  [Variant.INFO]:
    'bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:text-blue-400',
  [Variant.SUCCESS]:
    'bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:text-green-400',
  [Variant.WARNING]:
    'bg-yellow-50 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:text-yellow-400',
  [Variant.ERROR]:
    'bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:text-red-400',
};
