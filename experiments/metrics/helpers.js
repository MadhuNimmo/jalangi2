async function waitForAnySelector (page, selectors) {
return new Promise((resolve, reject) => {
        let hasFound = false
        selectors.forEach(selector => {
          page.waitForSelector(selector)
            .then(() => {
              if (!hasFound) {
                hasFound = true
                resolve(selector)
              }
            })
            .catch((err) => {
              //console.log('Error while looking up selector ' + selector, error.message)
              reject(err.toString());
            })
        })
        setTimeout(resolve, 4000); 
      })
}
module.exports = waitForAnySelector;