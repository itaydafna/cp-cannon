var up = document.querySelector('.up'),
    down = document.querySelector('.down'),
    fire = document.querySelector('.fire'),
    couchPotato = document.querySelector('.couch-potato');


var cannon = {

        deg: -34,
        el: document.querySelector('.cannon'),
        addDegree: function () {
            cannon.deg++;
            cannon.render();
        },
        decreaseDegree: function () {
            cannon.deg--;
            cannon.render();
        },
        render: function () {
            cannon.el.setAttribute('style', 'transform: scale(0.5) rotate(' + cannon.deg + 'deg);');
        }

    },
    tv = {
        el: document.querySelector('.tv')
    },

    yoram = {
        el: document.querySelector('.yoram'),
        song: new Audio('kavod1.mp3')
    };

up.addEventListener('click', cannon.addDegree);
down.addEventListener('click', cannon.decreaseDegree);
fire.addEventListener('click', shoot);

//creating the shoot function for the click event

function Ball() {
    var rand1 = Math.floor(255 * Math.random()),
        rand2 = Math.floor(255 * Math.random()),
        rand3 = Math.floor(255 * Math.random());
    this.el = document.createElement('div');
    this.el.className = "ball";
    this.el.setAttribute('style', 'transform: rotate(' + cannon.deg + 'deg); background: rgb(' + rand1 + ',' + rand2 + ',' + rand3 + ');');
}

Ball.prototype.shoot = function (el) {
    el.appendChild(this.el);
    var that = this,
        left = 0,
        angle = function () {
            return cannon.deg
        }(),
        move = function () {
            left += 6;
            that.el.style.transform = 'rotate(' + angle + 'deg) translateX(-' + left + 'px)';
            //condition which sets when balls will stat showing after they've been shot
            if (left < 252) {
                that.el.style.visibility = 'hidden';
            } else {
                that.el.style.visibility = 'visible';
            }
            if (left > 2200) {
                el.removeChild(that.el);
                return true;
            } else if (
                helper.isCollide(that.el, tv.el)) {
                el.removeChild(that.el);
                yoram.el.style.visibility = 'visible';
                var song = yoram.song;
                song.volume = 0.015;
                song.play();
                return true;

            }

        }
    helper.animate(that.el, move, 1);

}

function shoot() {
    var ball = new Ball();
    ball.shoot(couchPotato);
}