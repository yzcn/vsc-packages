import { ExtViews } from '../types';

export const EXT = 'vsc-packages';
export const EXT_ACTIVITYBAR = `${EXT}-activitybar`;
export const EXT_ACTIVITYBAR_DEPS = `${EXT_ACTIVITYBAR}-deps`;
export const EXT_ACTIVITYBAR_DEVDEPS = `${EXT_ACTIVITYBAR}-dev-deps`;
export const EXT_ACTIVITYBAR_PEERDEPS = `${EXT_ACTIVITYBAR}-peer-deps`;
export const EXT_ACTIVITYBAR_OPTIONALDEPS = `${EXT_ACTIVITYBAR}-optional-deps`;
export const EXT_PACKAGELIST_ITEM_CTX = 'package-list-item';
export const EXT_GLOBALSTATE_KEY = 'lastPackage';
export const EXT_GLOBALSTATE_VERSION_KEY = 'lastVersion';

export const extViews: ExtViews = {
  dependencies: EXT_ACTIVITYBAR_DEPS,
  devDependencies: EXT_ACTIVITYBAR_DEVDEPS,
  peerDependencies: EXT_ACTIVITYBAR_PEERDEPS,
  optionalDependencies: EXT_ACTIVITYBAR_OPTIONALDEPS,
};
Object.freeze(extViews);
