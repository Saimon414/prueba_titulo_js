const {test, expect} = require("@playwright/test");

const casos = [
    {name: "Caso 1", url: "https://www.tomorrowland.com/", esperado: "Tomorrowland"},
    {name: "Caso 2", url: "https://www.tomorrowland.com/", esperado: /Tomorrowland/},
];

for (const {name, url, esperado} of casos) {
    test(`valida el titulo correcto en ${name}`, async ({page}) => {
        //Abre la pagina example.com
        await page.goto(url);
        await sleep (3000);

        //Verificacion del titulo exacto
        await expect(page).toHaveTitle(esperado);
    });
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}