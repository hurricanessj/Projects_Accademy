class Singleton {
    private static istance: Singleton;
    private constructor() {

        console.log("istanza creata");
    }

    public static getIstance(): Singleton {
        if (!Singleton.istance) {
            Singleton.istance = new Singleton()
        }
        return Singleton.istance
    }
}

const s1 = Singleton.getIstance()
const s2 = Singleton.getIstance()

console.log(s1 === s2);

//tsc Singleton node Singleton