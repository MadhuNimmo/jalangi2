await page.evaluate(async () => {
        new Promise((resolve, reject) => {
          try {
                data= (await page.evaluate('J$.CallTrace'));
                resolve();
          } catch (error) {
            reject(error);
          }
        }).catch(error => {
          console.error(error) // add catch here
        })
      });

      await page.evaluate(async () => {
        new Promise((resolve, reject) => {
          try {
            const maxScroll = Number.MAX_SAFE_INTEGER;
            let lastScroll = 0;
            const interval = setInterval(() => {
              window.scrollBy(0, document.body.offsetHeight);
              const { scrollTop } = document.documentElement;
              if (scrollTop === maxScroll || scrollTop === lastScroll) {
                clearInterval(interval);
                resolve();
              } else {
                lastScroll = scrollTop;
              }
            }, 1000);
          } catch (error) {
            reject(error);
          }
        }).catch(error => {
          console.error(error) // add catch here
        })
      });
  