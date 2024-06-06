function changeLanguage() {
    const languageData = {
        arm: {
            aboute: "Մեր մասին",
            settings: "Ծառայություններ",
        },
        rus: {
            aboute: "О нас",
            settings: "Услуги",
        },
       
    };

    const selectedLanguage = document.querySelector(".language-select").value;
    document.querySelectorAll(".aboute").forEach(element => {
        element.textContent = languageData[selectedLanguage].aboute;
    });
    document.querySelectorAll(".settings").forEach(element => {
        element.textContent = languageData[selectedLanguage].settings;
    });

    localStorage.setItem("selectedLanguage", selectedLanguage);

    const dropdownItems = document.querySelectorAll(".dropdown-menu .navbar-menu a");
    dropdownItems.forEach(item => {
        const key = item.id;
        if (languageData[selectedLanguage][key]) {
            item.textContent = languageData[selectedLanguage][key];
        }
    });
}

function restoreLanguage() {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
    if (selectedLanguage) {
        document.querySelector(".language-select").value = selectedLanguage;
        changeLanguage();
    }
}

window.onload = restoreLanguage;
