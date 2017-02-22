console.log('hi');

var poly1 = $('#Projekt15_x5F_1 > polygon');
var poly2 = $('#Projekt15_x5F_2 > polygon');
var poly3 = $('#Projekt15_x5F_3 > polygon');
var poly4 = $('#Projekt15_x5F_4 > polygon');
var poly5 = $('#Projekt15_x5F_5 > polygon');
var poly6 = $('#Projekt15_x5F_6 > polygon');
var poly7 = $('#Projekt15_x5F_7 > polygon');
var polyp = $('#Projekt15_x5F_p > polygon');
var polyr = $('#Projekt15_x5F_r > polygon');
var polyo = $('#Projekt15_x5F_o > polygon');
var polyj = $('#Projekt15_x5F_j > polygon');
var polye = $('#Projekt15_x5F_e > polygon');
var polyk1 = $('#Projekt15_x5F_k1 > polygon');
var polyk2 = $('#Projekt15_x5F_k2 > polygon');
var polyt = $('#Projekt15_x5F_t > polygon');
var polyone = $('#Projekt15_x5F_one > polygon');
var polyfive = $('#Projekt15_x5F_five > polygon');

var i=0;

function myLoop() {
    setTimeout(function(){
        poly1[i].classList.toggle('comeIn');
        poly2[i].classList.toggle('comeIn');
        poly3[i].classList.toggle('comeIn');
        poly4[i].classList.toggle('comeIn');
        poly5[i].classList.toggle('comeIn');
        poly6[i].classList.toggle('comeIn');
        poly7[i].classList.toggle('comeIn');
        polyp[i].classList.toggle('comeIn');
        polyr[i].classList.toggle('comeIn');
        polyo[i].classList.toggle('comeIn');
        polyj[i].classList.toggle('comeIn');
        polye[i].classList.toggle('comeIn');
        polyk1[i].classList.toggle('comeIn');
        polyk2[i].classList.toggle('comeIn');
        polyt[i].classList.toggle('comeIn');
        polyone[i].classList.toggle('comeIn');
        polyfive[i].classList.toggle('comeIn');
        i++;
        if( i < poly1.length ) {
            myLoop();
        }
        else {
            i=29;
            setTimeout(function() {
                yourLoop();
            },2000)

        }
    },20);
}

function yourLoop() {
    setTimeout(function(){
        poly1[i].classList.toggle('comeIn');
        poly2[i].classList.toggle('comeIn');
        poly3[i].classList.toggle('comeIn');
        poly4[i].classList.toggle('comeIn');
        poly5[i].classList.toggle('comeIn');
        poly6[i].classList.toggle('comeIn');
        poly7[i].classList.toggle('comeIn');
        polyp[i].classList.toggle('comeIn');
        polyr[i].classList.toggle('comeIn');
        polyo[i].classList.toggle('comeIn');
        polyj[i].classList.toggle('comeIn');
        polye[i].classList.toggle('comeIn');
        polyk1[i].classList.toggle('comeIn');
        polyk2[i].classList.toggle('comeIn');
        polyt[i].classList.toggle('comeIn');
        polyone[i].classList.toggle('comeIn');
        polyfive[i].classList.toggle('comeIn');
        i--;
        if( i > -1 ) {
            yourLoop();
        }
        else {
            i = 0;
            setTimeout(function(){
                myLoop();
            },500)
        }
    },20);
}

myLoop();
