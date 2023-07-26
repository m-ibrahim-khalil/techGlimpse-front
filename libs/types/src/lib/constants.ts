export enum Variant {
  ERROR,
  SUCCESS,
  INFO,
  WARNING,
  PRIMARY,
  SECONDARY,
}

export enum Size {
  LARGE,
  SMALL,
  PRIMARY,
}

export const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: 'px-2.5 text-xs',
  [Size.LARGE]: 'px-5 py-2.5 text-sm',
  [Size.PRIMARY]: 'px-3 py-2 text-sm',
};

export const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.ERROR]:
    'bg-red-500 hover:bg-red-800 focus-visible:outline  font-semibold text-white shadow-sm',
  [Variant.SUCCESS]:
    'bg-green-500 hover:bg-green-800 focus-visible:outline  font-semibold text-white shadow-sm',
  [Variant.INFO]:
    'bg-blue-500 hover:bg-blue-800 focus-visible:outline  font-semibold text-white shadow-sm',
  [Variant.WARNING]:
    'bg-red-500 hover:bg-red-700 focus-visible:outline  font-semibold text-white shadow-sm',
  [Variant.PRIMARY]:
    'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline  font-semibold text-white shadow-sm',
  [Variant.SECONDARY]:
    'bg-white hover:bg-gray-100 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300',
};

export const ALERT_TYPE_MAPS: Record<Variant, string> = {
  [Variant.ERROR]: 'text-red-800 bg-red-50 dark:text-red-400',
  [Variant.SUCCESS]: 'text-green-800 bg-green-50 dark:text-green-400',
  [Variant.INFO]: 'text-blue-800 bg-blue-50 dark:text-blue-400',
  [Variant.WARNING]: 'text-yellow-800 bg-yellow-50 dark:text-yellow-400',
  [Variant.PRIMARY]: 'text-blue-800 bg-blue-50 dark:text-blue-400',
  [Variant.SECONDARY]: 'text-gray-800 bg-gray-50 dark:text-gray-400',
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
  [Variant.PRIMARY]:
    'bg-blue-50 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:text-blue-400',
  [Variant.SECONDARY]:
    'bg-gray-50 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:text-gray-400',
};
