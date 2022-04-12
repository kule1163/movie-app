import { FiHome} from 'react-icons/fi';
import { BiMovie } from 'react-icons/bi';
import { BiTv } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { v4 as uuidv4 } from 'uuid';


export interface MenuItem {
    id: string;
    title: string;
    icon: IconType;
    path: string;
}

export const menuItems:MenuItem[] = [
    {id: uuidv4() ,title: "home", icon: FiHome, path: "/"},
    {id: uuidv4(), title: "movie", icon: BiMovie, path: "/movies"},
    {id: uuidv4(), title: "series", icon: BiTv, path: "/series"},
    /* {id: uuidv4(), title: "search", icon: BsSearch, path: "/search"} */
]
