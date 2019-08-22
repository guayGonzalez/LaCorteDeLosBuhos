
//PAGE SETTINGS - start

function styleLogo(){

var cw = $('.MainLogo').width();
$('.MainLogo').css({
    'height': cw + 'px'
});

}

styleLogo();

//PAGE SETTINGS - end

//PAGE FUNCTIONS - start

function showHidden(s){

 switch(s){

    case 1:

        moveButton('90','markT','markD');

    break;

    case 2:

        moveButton('180','desT','desD');

    break;

    case 3:

        moveButton('270','devT','devD');

    break;

 }   

}

function moveButton(id,t,d){

    var but = document.getElementById(id);

    var state = but.getAttribute('data-state');

    if(state == 'closed'){

     $('#'+id).css('margin-left','50%');

     $('#'+id).css('transform','rotate(-'+id+'deg)');

     but.setAttribute('data-state','open');

     changeTitle(t,1);

     changeDesc(d,1);

    }else{

     $('#'+id).css('margin-left','0');

     $('#'+id).css('transform','none');

     but.setAttribute('data-state','closed');

     changeTitle(t,2);

     changeDesc(d,2);

}
}

function changeDesc(id,s){

    switch(s){

        case 1:

            $('#'+id).slideDown(500);

        break;

        case 2:

            $('#'+id).slideUp(500);

        break;

    }

}

function changeTitle(id,s){

    switch(s){

        case 1:

            $('#'+id).addClass('fullTitle');

        break;

        case 2:

            $('#'+id).removeClass('fullTitle');

        break;

    }

}

//PAGE FUNCTIONS - end

//SCROLL FUNCTIONS MANAGEMENT - start

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

// CONTACT FORM MANAGEMENT - start

//Reference contact collection

var db =  firebase.firestore();

//Get Contact info

document.getElementById('contactSend').addEventListener('click', submitForm);

function submitForm(e){

e.preventDefault();

//input values

var client = getInputValue('client');
var email = getInputValue('email');
var phone = getInputValue('phone');
var product = getInputValue('product');

sendContact(client, email, phone, product);

}

function getInputValue(id){

return document.getElementById(id).value;

}

function sendContact(client, email, phone, product){

    db.collection("Contact").add({
        client: client,
        email: email,
        phone: phone,
        product: product
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    }).catch(function(error) {
        console.error("Error adding document: ", error);
    });

}

// CONTACT FORM MANAGEMENT - end

