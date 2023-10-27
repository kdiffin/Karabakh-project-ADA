//using a new state management library called jotai, it works based on atomic principles
//and it eliminates unnecesary rerenders.
//https://jotai.org/

import { atom } from "jotai";

export const HideNavbarAtom = atom(false);

