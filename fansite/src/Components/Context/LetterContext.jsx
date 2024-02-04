import { createContext } from 'react';
import fakeData from '../common/Data/fakeData.json';

export const LetterListContext = createContext(null);
export const LetterCardContext = createContext(fakeData);
