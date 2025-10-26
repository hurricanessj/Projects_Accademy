import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class EccezioneFile {
    public static  long dimensioneFile(String nomeFile) throws IOException {
        return Files.size(Paths.get(nomeFile));
    }
    public static void main(String[] args) {
    String nomeFile = "dati.txt";
        try {
            long dimensione = dimensioneFile(nomeFile);
        } catch (IOException e) {
            System.out.println("impossibile calcolare la dimensione del file");
        }


    }
}
