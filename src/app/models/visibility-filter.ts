// tslint:disable no-bitwise

export enum VisibilityFilter {
  showCompleted = 1 << 0,
  showPending = 1 << 1,
  showAll = showCompleted | showPending,
};
