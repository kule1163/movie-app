import React from "react";
import {v4 as v4uuid} from "uuid"
/* import MainContent, { MainContentProps } from "../componants/singleMoviePage/overview/MainContent"
import Photos from "../componants/singleMoviePage/photos/Photos"
import Videos from "../componants/singleMoviePage/videos/Videos" */


interface SingleMovieComponant {
    id: string;
    component:  React.FC;
}

export const singleMovieComponantList:SingleMovieComponant[] = [
/*     {id: v4uuid(), component: MainContent},
    {id: v4uuid(), component: Photos},
    {id: v4uuid(), component: Videos}, */
]