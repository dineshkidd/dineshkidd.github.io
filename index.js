document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#toggle').onclick = function () {
        if (document.querySelector('#toggle').className === 'icofont-sun-alt icofont-2x') {
            // present light
            document.querySelector('#toggle').className = 'icofont-moon icofont-2x';
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('#toggle').style.color = 'white';
            // document.querySelector('#nav').style.backgroundColor = 'black';
            // document.querySelector('#logo').src = 'logo/logo-white.svg';
            // document.querySelector("#contact").style.color = 'white';
            document.querySelector("#bold").style.color = 'black';
            document.querySelector("#about").style.color = 'black';
            document.querySelector("#get").style.color = 'white';
            document.querySelector("#get").style.backgroundColor = 'black';
            document.querySelector('footer').style.color = 'black';
            document.querySelector('#portfolio').style.color = 'black';


        }
        else if (document.querySelector('#toggle').className === 'icofont-moon icofont-2x') {
            //present dark
            document.querySelector('#toggle').className = 'icofont-sun-alt icofont-2x';
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('#toggle').style.color = 'yellow';
            // document.querySelector('#nav').style.backgroundColor = 'black';
            // document.querySelector('#logo').src = 'logo/logo-black.svg';
            // document.querySelector("#contact").style.color = 'black';
            document.querySelector("#bold").style.color = 'white';
            document.querySelector("#about").style.color = 'white';
            document.querySelector("#get").style.color = 'black';
            document.querySelector("#get").style.backgroundColor = 'white';
            document.querySelector('footer').style.color = 'white';
            document.querySelector('#portfolio').style.color = 'white';


        }


    };



});
