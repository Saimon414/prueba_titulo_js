const {test, expect} = require ('@playwright/test');

test('valida el titulo exacto', async ({ page }) => {
    //Abre la pagina example.com
    await page.goto('https://www.tomorrowland.com/');
    await sleep (2000);

    //Verificacion del titulo exacto
    await expect(page).toHaveTitle('Tomorrowland');
}
);

test('valida titulo con regex (contiene palabra)', async ({ page }) => {
    //Abre la pagina example.com
    await page.goto('https://www.tomorrowland.com/');
    await sleep (2000);

    //Verificacion palabra
    await expect(page).toHaveTitle(/Tomorrowland/);
}
);

function sleep (time){
    return new Promise((resolve) => setTimeout(resolve, time));
}