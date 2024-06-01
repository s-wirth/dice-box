import { createContext } from 'react';
import {THROW_RESULT} from './constants'
export const DiceThrowContext = createContext({...THROW_RESULT});