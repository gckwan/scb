// @flow

export type NavigatorType = {
  pop: () => void;
  popN: () => void;
  popToRoute: () => void;
  popToTop: () => void;
  push: () => void;
  replace: () => void;
  replacePrevious: () => void;
  replacePreviousAndPop: () => void;
  resetTo: () => void;
};
