import { createContext } from 'react';
import type { MyContextType } from '../../types/my-context-type';


export const LevelContext = createContext<null | MyContextType>(null);