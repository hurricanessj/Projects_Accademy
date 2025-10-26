"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Maglia_1 = require("./Maglia");
var Camicia_1 = require("./Camicia");
var Utils_1 = require("./Utils");
var maglia = new Maglia_1.Maglia("celeste", "s", 30);
var camicia = new Camicia_1.Camicia("bianca", "m", 50);
(0, Utils_1.stampaDettagli)(maglia);
(0, Utils_1.stampaDettagli)(camicia);
