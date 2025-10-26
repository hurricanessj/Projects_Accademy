var Singleton = /** @class */ (function () {
    function Singleton() {
        console.log("istanza creata");
    }
    Singleton.getIstance = function () {
        if (!Singleton.istance) {
            Singleton.istance = new Singleton();
        }
        return Singleton.istance;
    };
    return Singleton;
}());
var s1 = Singleton.getIstance();
var s2 = Singleton.getIstance();
console.log(s1 === s2);
