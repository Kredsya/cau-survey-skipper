document.querySelectorAll('ul').forEach(ul => {
    const thirdLi = ul.querySelectorAll('li')[2];
    if (thirdLi) {
        const radioInput = thirdLi.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;
            radioInput.click();
        }
    }
});
document.querySelector('a.btnBlue.ng-binding[ng-click="next()"]').click();
