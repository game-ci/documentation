import { createContext } from 'react';
import menuStructure from '@/core/menu-structure.json';

const defaultContext = { menuStructure };

const MenuContext = createContext(defaultContext);
MenuContext.displayName = 'MenuContext';

export default MenuContext;
