function showSection(section) {
    const sections = document.getElementsByTagName("section");
    const buttons = document.getElementsByTagName("button");

    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    section.style.display = "block";

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    section.id && document.getElementById(section.id + "Btn").classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    const DataSourceButton = document.getElementById("DataSourceBtn");
    const CollectionMethodsButton = document.getElementById("CollectionMethodsBtn");
    const AnalysisMethodsButton = document.getElementById("AnalysisMethodsBtn");
    const PublicationVenuesButton = document.getElementById("PublicationVenuesBtn");
    const DataSourceSection = document.getElementById("DataSource");
    const CollectionMethodsSection = document.getElementById("CollectionMethods");
    const AnalysisMethodsSection = document.getElementById("AnalysisMethods");
    const PublicationVenuesSection = document.getElementById("PublicationVenues");

    DataSourceButton.addEventListener('click', () => {
        showSection(DataSourceSection, DataSourceButton);
    });
    CollectionMethodsButton.addEventListener('click', () => {
        showSection(CollectionMethodsSection, CollectionMethodsButton);
    });
    AnalysisMethodsButton.addEventListener('click', () => {
        showSection(AnalysisMethodsSection, AnalysisMethodsButton);
    });
    PublicationVenuesButton.addEventListener('click', () => {
        showSection(PublicationVenuesSection, PublicationVenuesButton);
    });

    showSection(DataSourceSection, DataSourceButton);
});