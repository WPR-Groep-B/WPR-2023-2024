using System.ComponentModel.DataAnnotations;

public class gebruiker {

    [Key]
    int gebruikerId;

    string voornaam;

    string achternaam;

    string email;

}

public class gebruikerBedrijf : gebruiker {

    string bedrijfsnaam;

}

public class gebruikerDeskundige : gebruiker {

    string beperking;

}

public class gebruikerBeheerder : gebruiker {

    string functie;

}