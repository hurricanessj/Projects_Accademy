import {Maglia} from "./Maglia";
import {Camicia} from "./Camicia";
import { stampaDettagli } from "./Utils";
const maglia = new Maglia("celeste", "s", 30);
const camicia = new Camicia("bianca", "m", 50);

stampaDettagli(maglia);
stampaDettagli(camicia);