const form = document.getElementById('contact-form');
const btnEnvoyer = document.getElementById('btnEnvoyer');
const prenomInput = document.getElementById('PrenomInput');
const mailInput = document.getElementById('MailInput');
const textArea = document.getElementById('TextInput');

// Écouteurs d'événements pour les champs de formulaire
prenomInput.addEventListener('input', checkFormValidity);
mailInput.addEventListener('input', checkFormValidity);
textArea.addEventListener('input', checkFormValidity);

// Fonction de validation de l'e-mail
function isValidEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if (mailUser.match(regex)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true
    }
    else {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour vérifier et mettre à jour l'état du bouton
function checkFormValidity() {
    const prenomOk = validateRequired(prenomInput);
    const mailOk = isValidEmail(mailInput);
    const textOk = validateRequired(textArea);

    console.log(`Titre: ${prenomOk}, Mail: ${mailOk}, texte: ${textOk}`);

    if (prenomOk && mailOk && textOk) {
        btnEnvoyer.disabled = false;
    } else {
        btnEnvoyer.disabled = true;
    }
}

function validateRequired(input) {
    const value = input.value.trim();
    //vérifie si le champ est vide
    if(value === ''){
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
    //vérifie si champ correspond au regex
    try {
        validatePattern(value)
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true;
    }
    catch(error) {
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

function validatePattern(value) {
    const regex = /^[A-Za-z0-9.,!?'\séèàçùêîôâœ:;]+$/;
    if (!regex.test(value)) {
        throw new Error(`La valeur "${value}" ne doit pas avoir de ponctuation`);
    }
    return true;
}

// Écouteur d'événement pour le formulaire
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Extraction des valeurs des champs du formulaire
    const prenom = prenomInput.value;
    const mail = mailInput.value;
    const message = textArea.value;

    // Envoi du formulaire par EmailJS
    emailjs.send("service_amegxdc","template_xjhtxfs", {
        prenom: prenom,
        mail: mail,
        message: message
    }).then(function (response) {
        alert('Votre message a bien été envoyé !');
        // Réinitialisation du formulaire après envoi
        form.reset();
        document.getElementById('btnEnvoyer').setAttribute('disabled', 'disabled');
    }, function (error) {
        alert('Une erreur est survenue.')
        console.log('Erreur lors de l\'envoi du formulaire : ', error);
    });
});
emailjs.init("KS_LT-IAagg_yKFXV");


