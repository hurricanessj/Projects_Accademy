public class Context {


    private Device[] devices;

    public Context(Device[] devices) {
        this.devices = devices;
    }

    public void setDevices(Device[] devices) {
        this.devices = devices;
    }

    public void accendiTutti(){
        for(Device dispositivo: devices){
            dispositivo.accendi();
        }
    }
    public void spegniTutti(){
        for(Device dispositivo: devices){
            dispositivo.spegni();
        }
    }

}
