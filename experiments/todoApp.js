async function todoApp(){
const selector = await waitForAnySelector(page, [
        '#new-todo',
        '.new-todo'
      ])
      for (var i = 0; i < 10; i++) {
        await page.type(selector, 'Something to do ' + i).then(async () => { await page.keyboard.press('Enter') })
      }
    
      await page.click('.view label', { clickCount: 2 })
      await page.type('.view label', " changed")
      await page.keyboard.press('Enter')
      const toggleAll = await waitForAnySelector(page, [
        "label[for='toggle-all']",
        "label[for='toggle-all']"
      ])
      await page.click(toggleAll);
    
      await page.$$eval('.toggle', checks => {
    
        for (var i = 0; i < checks.length; i += 2)
    
          checks[i].click();
      })
    
      await page.$$eval('.destroy', destroys => {
        for (var i = 0; i < destroys.length; i += 4)
          destroys[i].click();
      })
      const aElementsCompleted = await page.$x("//a[contains(., 'Completed')]");
      await aElementsCompleted[0].click();
    
      const aElementsActive = await page.$x("//a[contains(., 'Active')]");
      await aElementsActive[0].click();
      const clearCompleted = await waitForAnySelector(page, [
        '#clear-completed',
        '.clear-completed'
      ])
    
      await page.click(clearCompleted);
      const getAll = await waitForAnySelector(page, [
        'a[href="#/"]',
        'a[href="#!"]',
        'a[href="#/all"]'
      ])
      await page.click(getAll);
}
module.exports = todoApp;