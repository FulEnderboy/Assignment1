const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

function loadPage() {
    const htmlPath = path.join(__dirname, "../src/index.html");
    const html = fs.readFileSync(htmlPath, "utf-8");

    const dom = new JSDOM(html, {
        runScripts: "dangerously",
        resources: "usable",
        url: "file://" + htmlPath
    });

    return new Promise((resolve) => {
        dom.window.document.addEventListener("DOMContentLoaded", () => {
            resolve(dom);
        });
    });
}

describe("MSR Knowledge Base Tab Navigation Test", () => {
    test("Default: DataSource section is visible", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        expect(document.getElementById("DataSource").style.display).toBe("block");
    });

    test("Default: other sections are hidden", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        expect(document.getElementById("CollectionMethods").style.display).toBe("none");
        expect(document.getElementById("AnalysisMethods").style.display).toBe("none");
        expect(document.getElementById("PublicationVenues").style.display).toBe("none");
    });

    test("Clicking DataSource shows correct section", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("DataSourceBtn").click();

        expect(document.getElementById("DataSource").style.display).toBe("block");
        expect(document.getElementById("CollectionMethods").style.display).toBe("none");
        expect(document.getElementById("AnalysisMethods").style.display).toBe("none");
        expect(document.getElementById("PublicationVenues").style.display).toBe("none");
    });

    test("Clicking CollectionMethods shows correct section", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("CollectionMethodsBtn").click();

        expect(document.getElementById("CollectionMethods").style.display).toBe("block");
        expect(document.getElementById("DataSource").style.display).toBe("none");
        expect(document.getElementById("AnalysisMethods").style.display).toBe("none");
        expect(document.getElementById("PublicationVenues").style.display).toBe("none");
    });

    test("Clicking AnalysisMethods shows correct section", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("AnalysisMethodsBtn").click();
        expect(document.getElementById("AnalysisMethods").style.display).toBe("block");
        expect(document.getElementById("DataSource").style.display).toBe("none");
        expect(document.getElementById("CollectionMethods").style.display).toBe("none");
        expect(document.getElementById("PublicationVenues").style.display).toBe("none");
    });

    test("Clicking PublicationVenues shows correct section", async () => {
        const dom = await loadPage();
        const document = dom.window.document;
        document.getElementById("PublicationVenuesBtn").click();
        expect(document.getElementById("PublicationVenues").style.display).toBe("block");
        expect(document.getElementById("DataSource").style.display).toBe("none");
        expect(document.getElementById("CollectionMethods").style.display).toBe("none");
        expect(document.getElementById("AnalysisMethods").style.display).toBe("none");
    });

    test("Data Source button is active when clicked", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("DataSourceBtn").click();

        expect(document.getElementById("DataSourceBtn").classList.contains("active")).toBe(true);
        expect(document.getElementById("CollectionMethodsBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("AnalysisMethodsBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("PublicationVenuesBtn").classList.contains("active")).toBe(false);
    });

    test("Collection Methods button is active when clicked", async () => {
        const dom = await loadPage();
        const document = dom.window.document;
        
        document.getElementById("CollectionMethodsBtn").click();

        expect(document.getElementById("CollectionMethodsBtn").classList.contains("active")).toBe(true);
        expect(document.getElementById("DataSourceBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("AnalysisMethodsBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("PublicationVenuesBtn").classList.contains("active")).toBe(false);
    });

    test("Analysis Methods button is active when clicked", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("AnalysisMethodsBtn").click();

        expect(document.getElementById("AnalysisMethodsBtn").classList.contains("active")).toBe(true);
        expect(document.getElementById("DataSourceBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("CollectionMethodsBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("PublicationVenuesBtn").classList.contains("active")).toBe(false);
    });

    test("Publication Venues button is active when clicked", async () => {
        const dom = await loadPage();
        const document = dom.window.document;

        document.getElementById("PublicationVenuesBtn").click();

        expect(document.getElementById("PublicationVenuesBtn").classList.contains("active")).toBe(true);
        expect(document.getElementById("DataSourceBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("CollectionMethodsBtn").classList.contains("active")).toBe(false);
        expect(document.getElementById("AnalysisMethodsBtn").classList.contains("active")).toBe(false);
    });
});