//SCROLL FUNCTIONS MANAGEMENT - start


window.onscroll = function() {window.innerWidth > 600 ? detectScroll(true) : detectScroll(false)}

$(document).ready(()=>{

splitScroll(window.innerWidth);

});

function detectScroll(ver){

const scroll = window.scrollY;    

const full = $(document).height();
 
const separator = window.innerHeight;

const i = scroll/separator;

console.log(i);

const scrollBarMove = (scroll/full)*100;

$('.barSection').css('top',scrollBarMove+'%');

switch(ver){

case true:

openData([0.8, 1.3], [1.8, 2.3], [2.8], i);

break;

case false:

openData([0.9, 1.5], [1.6, 2.1], [2.15], i);

break;

}

}

function splitScroll(ww){


    var controller = new ScrollMagic.Controller();

    if(ww > 600){
    //Stick Side Logo

    new ScrollMagic.Scene({

        duration: '200%',
        triggerElement : '.interactiveLogo',
        triggerHook: 0
        
    })
    .setPin('.interactiveLogo')
    .addTo(controller);
    }else{
        //Stick top logo

        new ScrollMagic.Scene({
            triggerElement: '.mainSection',
            triggerHook: 0,
            duration: '120%'
        })
        .setPin('.interactiveLogo', {
            pushFollowers: false
        })
        .addTo(controller);

    }

    //MARKETING SECTION 

    //Complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillpink')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderpink')
    .addTo(controller);

    //Title Appear

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('#markT', 'titleShow')
    .addTo(controller);

    //Description apear

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0

    })
    .addTo(controller);

    //DESING SECTION 

    //complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill2', 'fillOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter2', 'outerBorderOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillOrange')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderOrange')
    .addTo(controller);

    //Text Appear

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('#desT', 'titleShow')
    .addTo(controller);

    //DEVELOPMENT SECTION 

    //complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill3', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter4', 'outerBorderYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill2', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter2', 'outerBorderYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fillYellow')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorderYellow')
    .addTo(controller);

    //Text Appear

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('#devT', 'titleShow')
    .addTo(controller);

}

function openData(r1, r2, r3, n){

    if(n > r1[0] && n < r1[1]){

    showHidden(1,'open');
    
    }else{
    
    showHidden(1,'close');
    
    }
    
    if(n > r2[0] && n < r2[1]){
    
    showHidden(2,'open');
    
    }else{
    
    showHidden(2,'close');
    
    }
    
    if(n > r3[0]){
    
    showHidden(3,'open');
    
    }else{
    
    showHidden(3,'close');
    
    }

}

//SCROLL FUNCTIONS MANAGEMENT - end