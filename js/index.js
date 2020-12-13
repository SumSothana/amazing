/**    Home    */
var bodyPic = ["angkor.jpg", "Background-Music.jpg", "car.jpg", "angkor3.jpg", "news-back.jpg", "sport-background.jpg", "Akshadram-2.jpg"];
var rand = true;

function changeImg() {
    if (rand) {
        document.getElementById("con").src = "../img/home/" + bodyPic[getRandom(0, bodyPic.length - 1)];
        setTimeout("changeImg()", 1000);
    }
}
/**phone menu */
$(document).ready(function() {
    $("#pbtn").click(function() {
        $("#pshow").stop(true, false, true).slideToggle(100);
    })
});

/*****---page temple button MOre Image---*****************************/

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

$(document).ready(function() {
    $("#point").click(function() {
        $("#seeMore").stop(true, false, true).slideToggle(1000);
    });
    $("#point2").click(function() {
        $("#seeMore2").stop(true, false, true).slideToggle(1000);

    });
    $("#point3").click(function() {
        $("#seeMore3").stop(true, false, true).slideToggle(1000);

    });
    $("#point4").click(function() {
        $("#seeMore4").stop(true, false, true).slideToggle(1000);

    });
    $("#point5").click(function() {
        $("#seeMore5").stop(true, false, true).slideToggle(1000);

    });
});




/* ------- page-temple  --------- */


$(document).ready(function() {
    $("#angkors").mouseover(function() {
        $("#angkors").attr("src", "../img/temple/angkor.jpg");
    });
    $(document).ready(function() {
        $("#angkors").mouseout(function() {
            $("#angkors").attr("src", "../img/temple/Ankor_Wat_temple.jpg");
        });
    });
    $(document).ready(function() {
        $("#karnaks").mouseover(function() {
            $("#karnaks").attr("src", "../img/temple/egypt-karnak.jpg");
        });
    });
    $(document).ready(function() {
        $("#karnaks").mouseout(function() {
            $("#karnaks").attr("src", "../img/temple/karnak-2.jpg");
        });
    });
    $(document).ready(function() {
        $("#boros").mouseover(function() {
            $("#boros").attr("src", "../img/temple/borobudur-2.jpg");
        });
    });
    $(document).ready(function() {
        $("#boros").mouseout(function() {
            $("#boros").attr("src", "../img/temple/borobudur.jpg");
        });
    });
    $(document).ready(function() {
        $("#akshas").mouseover(function() {
            $("#akshas").attr("src", "../img/temple/Akshadram-2.jpg");
        });
    });
    $(document).ready(function() {
        $("#akshas").mouseout(function() {
            $("#akshas").attr("src", "../img/temple/akshardham.jpg");
        });
    });


});
/**-----pages-Sport--Auto by onload ------------------- */
var pri = ["primer.jpg", "primer2.jpg"];
var lali = ["laliga.jpg", "laliga2.jpg"];
var li = ["ligue.jpg", "ligue2.jpg"];
var help = true;

function changePic() {
    if (help) {
        document.getElementById("sport").src = "../img/sport/" + pri[getRandom(0, pri.length - 1)];
        document.getElementById("sports").src = "../img/sport/" + lali[getRandom(0, lali.length - 1)];
        document.getElementById("sportss").src = "../img/sport/" + li[getRandom(0, li.length - 1)];
        setTimeout("changePic()", 700);
    }
}

function getRandom(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}




/*-----page-News--   button next and back------- */

var imgs = ["protecting-covid2.jpg", "protect-covid3.jpg", "protective4.jpg", "protective5.jpg"];
var index = 0;

function back() {
    if (index <= 0) {
        index = imgs.length;
    }
    document.getElementById("covid").src = "../img/News/" + imgs[--index];
}

function next() {
    if (index >= imgs.length - 1) {
        index = -1;
    }
    document.getElementById("covid").src = "../img/News/" + imgs[++index];
}
/*****---page-News   random img   ************ */

var picCovid = ["covid.jpg", "covid-pic.jpg"];
var dom = true;

function randImg() {
    if (dom) {
        document.getElementById("imgCovid").src = "../img/news/" + picCovid[getRandom(0, picCovid.length - 1)];
        setTimeout("randImg()", 600);
    }
}


//scroll

var nav = document.getElementById('scroll');

window.onscroll = function() {

        if (window.pageYOffset > 100) {

            nav.style.position = "fixed";
            nav.style.top = 0;

        } else {
            //nav.style.position = "absolute";
            nav.style.position = 'relative'; //fixed
            nav.style.top = 100;
        }
    }
    // reponsive scroll phone