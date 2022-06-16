public class Persona {
    private String nome;
    private String cognome;



    private String sesso;
    private Integer eta;

    public Persona(){

    }

    //Setter
    public void setCognome(String cognome) {
        this.cognome = cognome;
    }

    public void setNome(String nuovoNome){
        this.nome= nuovoNome;
    }
    //Getter
    public String getNome(){
        return this.nome;
    }
    public String nomeCompleto(){
        return nome + " "+ cognome;
    }
    public String getCognome() {
        return cognome;
    }
}
