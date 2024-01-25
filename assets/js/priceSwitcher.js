function switchToMonthly() {
    document.querySelector('#monthlySwitch').style.display = 'none';
    document.querySelector('#yearlySwitch').style.display = 'block';
    document.querySelector('.monthlyPriceSection').style.display = 'block';
    document.querySelector('.yearlyPriceSection').style.display = 'none';
    document.querySelector('.monthly').style.opacity = 1;
    document.querySelector('.yearly').style.opacity = 0.5;
}

function switchToYearly () {
    document.querySelector('#monthlySwitch').style.display = 'block';
    document.querySelector('#yearlySwitch').style.display = 'none';
    document.querySelector('.monthlyPriceSection').style.display = 'none';
    document.querySelector('.yearlyPriceSection').style.display = 'block';
    document.querySelector('.monthly').style.opacity = 0.5;
    document.querySelector('.yearly').style.opacity = 1;
}