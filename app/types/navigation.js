// @flow
import { type ElementType } from 'react';

type NavigationOptions = {
  headerRight: () => any,
};

export type Navigation = {
  navigate: (screenName: string, params: Object) => void,
  setOptions: (options: NavigationOptions) => ElementType,
};
