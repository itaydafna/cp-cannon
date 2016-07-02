var up = document.querySelector('.up'),
    down = document.querySelector('.down'),
    fire = document.querySelector('.fire');


var cannon = {

    deg:-34,
    el: document.querySelector('.cannon'),
    addDegree: function(){
        cannon.deg++;
        cannon.render();
    },
    decreaseDegree: function(){
        cannon.deg--;
        cannon.render();
    },
    render: function(){
        cannon.el.setAttribute('style', 'transform: scale(0.5) rotate(' + cannon.deg + 'deg);');
    }

}

up.addEventListener('click',cannon.addDegree);
down.addEventListener('click',cannon.decreaseDegree);