function skrivUtNavn() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;

    console.log(fornavn, etternavn)

    document.getElementById("utskrift").innerHTML = fornavn + " " + etternavn;
}