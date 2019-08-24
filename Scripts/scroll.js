//SCROLL FUNCTIONS MANAGEMENT - start


window.onscroll = function() {detectScroll()}

function detectScroll(){

const scroll = window.scrollY;    
 
const separator = window.innerHeight;

const i = scroll/separator;

if(i > 0.8 && i < 1.3){

showHidden(1,'open');

}else{

showHidden(1,'close');

}

if(i > 1.8 && i < 2.3){

showHidden(2,'open');

}else{

showHidden(2,'close');

}

if(i > 2.8 && i < 3.3){

showHidden(3,'open');

}else{

showHidden(3,'close');

}

}

function splitScroll(){

    //Stick Side Logo

    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({

        duration: '200%',
        triggerElement : '.interactiveLogo',
        triggerHook: 0
        
    })
    .setPin('.interactiveLogo')
    .addTo(controller);

    //MARKETING SECTION 

    //Complete first quarter of logo

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarterfill1', 'fill')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.marketingSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter1', 'outerBorder')
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
    .setClassToggle('.quarterfill2', 'fill')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.designSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter2', 'outerBorder')
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
    .setClassToggle('.quarterfill3', 'fill')
    .addTo(controller);

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('.quarter4', 'outerBorder')
    .addTo(controller);

    //Text Appear

    new ScrollMagic.Scene({

        triggerElement: '.developmentSec',
        triggerHook: 0.5

    })
    .setClassToggle('#devT', 'titleShow')
    .addTo(controller);

}

splitScroll();


//SCROLL FUNCTIONS MANAGEMENT - end