function Age() {

    var age = document.getElementById("ages");

    if (age.value >= 10 && age.value < 20 && document.getElementById('male').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom10man.html';
        
    }

    else if (age.value >= 10 && age.value < 20 && document.getElementById('female').checked) {

        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom10woman.html';
    }

    else if (age.value >= 20 && age.value < 25 && document.getElementById('male').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom20man.html';
    }

    else if (age.value >= 20 && age.value < 25 && document.getElementById('female').checked) {

        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom20woman.html';
    }

    else if (age.value >= 25 && age.value < 30 && document.getElementById('male').checked) {

        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom25man.html';
    }

    else if (age.value >= 25 && age.value < 30 && document.getElementById('female').checked) {

        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom25woman.html';
    }

    else if (age.value >= 30 && age.value < 35 && document.getElementById('male').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom30man.html';
    }

    else if (age.value >= 30 && age.value < 35 && document.getElementById('female').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom30woman.html';
    }

    else if (age.value >= 35 && document.getElementById('male').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom35man.html';
    }

    else if (age.value >= 35 && document.getElementById('female').checked) {
        alert("Recommended perfume for your most beautiful age of " + age.value);
        page.location.href='age/recom35woman.html';

    }
    else {
        alert('enter your age');
    }

}

