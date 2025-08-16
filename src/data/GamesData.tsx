export interface GameCardData {
  id: number;
  name: string;
  image: string;
  rulesLink: string;
  description: string;
}

export const gameCards: GameCardData[] = [

   {
    id: 2,
    name: "Swich Challenge",
    image: "/games/Swithchallenge.jpeg",

    rulesLink: "/rules/Swith-challenge",
    description:"A fast-paced game where you match color names with their actual displayed colors, testing speed and focus under tricky visual cues."
  },
    {
    id: 1,
    name: "Deductive Challenge",
    image: "/games/DeductiveChallenge.jpeg",
    rulesLink: "/rules/deductive-challenge",
    description:"mental or logical puzzle that tests deductive reasoning ability, your skill in drawing specific conclusions based on general rules or facts."
  },
   {
    id: 3,
    name: "Grid Challenge",
    image: "/games/GridChallenge.jpeg",

    rulesLink: "/rules/Grid-Challenge",
    description: "A logic-based game where you sort rows of letters and check if columns stay in order — testing pattern recognition and analytical speed."
   },
   {
    id: 4,
    name: "Inductive Challenge",
    image: "/games/InductiveChallenge.jpeg",

    rulesLink: "/rules/Inductive-Challenge",
    description:"A visual puzzle where you find the next figure in a sequence by spotting hidden patterns — sharpens logical and abstract thinking."
   },
     {
    id: 5,
    name: "Motion Challenge",
    image: "/games/MotionChallenge.jpeg",

    rulesLink: "/rules/Motion-Challenge",
    description:"A fast-paced memory game where objects move, and you must track their final positions — testing focus, recall, and spatial skills."
     }
];
