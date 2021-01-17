import { atom } from "recoil";

export const isFahrenheitState = atom({
  key: 'isFahrenheit',
  default: true
});

export const isLayoutOneState = atom({
  key: 'isLayoutOne',
  default: true
});

export const isEmptyState = atom({
  key: 'isEmpty',
  default: false
});

