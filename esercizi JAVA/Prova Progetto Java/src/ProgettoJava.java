public class ProgettoJava {
    public static void main(String[] args) {
       Persona marco= new Persona();
       marco.setNome( "Marco");
       marco.setCognome("Anastasio");


       System.out.println(marco.getNome());
       System.out.println(marco.getCognome());


        String nomeCompleto= marco.nomeCompleto();
        System.out.println(nomeCompleto);
    }
}
