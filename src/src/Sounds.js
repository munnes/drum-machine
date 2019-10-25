// JavaScript source code
import React from 'react';
import Q from "./music/A.mp3"
import W from "./music/W.mp3"
import E from "./music/E.mp3"
import A from "./music/A.mp3"
import S from "./music/S.mp3"
import D from "./music/D.mp3"
import Z from "./music/Z.mp3"
import X from "./music/X.mp3"
import C from "./music/C.mp3"



 
//const Sounds=[Q,W,E,A,S,Z,X,C];
const Sounds=[
    {id:'Q',
    dis:'Header1',
    sound:Q
    },
    
      {id:'W',
          dis:'Header2',
          sound:W
      },
       {id:'E',
           dis:'Header3',
           sound:E
       },
       {id:'A',
           dis:'Clap',
           sound:A
       },
        {id:'S',
            dis:'Nice sound',
            sound:S
        },
          {id:'D',
              dis:'High voice',
              sound:D
          },
         {id:'Z',
             dis:'Pum pum',
             sound:Z
         },
          {id:'X',
              dis:'Waaaaaw',
              sound:X
          },
           {id:'C',
               dis:'last',
               sound:C
           }
          

]

export default Sounds
