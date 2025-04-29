console.log(2+3+"5"+3+2)


function skrivUtNavn() {
    let fornavn = document.getElementById("fornavn").value;
    let etternavn = document.getElementById("etternavn").value;

    console.log(fornavn, etternavn)

    document.getElementById("utskrift").innerHTML = fornavn + " " + etternavn;
}