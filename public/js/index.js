$(document).ready(function () {
    // $('.carousel.carousel-slider').carousel({
    //   	fullWidth: true,
    //   	indicators: true,
          
    // });
    // setInterval(function () {
    //     $('.carousel.carousel-slider').carousel('next');
    // }, 4000);
    
    $('.slider').slider();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
    // M.AutoInit(document.body);
    $('.modal').modal();
    $('#shoe2Modal').modal();
    $('select').formSelect();
    $('#top').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById('top').style.display = 'block';
        } else {
            document.getElementById('top').style.display = 'none';	
        }
    };
});

const patterns = {
    name:  /^[\w ]{2,}$/i,
    // name: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z ]+)*$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone: /^\d{11}$/,
    quantity: /^\d[0-9]{0,3}$/,
};

// form 1
var shoe1Form = document.forms.shoe1Form;
var form1 = {
    inputs: document.querySelectorAll('.form1Inputs'),
    color: shoe1Form.shoe1Color,
    button: document.querySelector('#shoe1Submit'),
    total: document.querySelector('#shoe1Total'),
    price: 25000
}

// form 2
var shoe2Form = document.forms.shoe2Form;
var form2 = {
    inputs: document.querySelectorAll('.form2Inputs'),
    color: shoe2Form.shoe2Color,
    button: document.querySelector('#shoe2Submit'),
    total: document.querySelector('#shoe2Total'),
    price: 8000
}

// form 3
var shoe3Form = document.forms.shoe3Form;
var form3 = {
    inputs: document.querySelectorAll('.form3Inputs'),
    color: shoe3Form.shoe3Color,
    button: document.querySelector('#shoe3Submit'),
    total: document.querySelector('#shoe3Total'),
    price: 15000
}

// form 4
var shoe4Form = document.forms.shoe4Form;
var form4 = {
    inputs: document.querySelectorAll('.form4Inputs'),
    color: shoe4Form.shoe4Color,
    button: document.querySelector('#shoe4Submit'),
    total: document.querySelector('#shoe4Total'),
    price: 3500
}

// form 5
var shoe5Form = document.forms.shoe5Form;
var form5 = {
    inputs: document.querySelectorAll('.form5Inputs'),
    color: shoe5Form.shoe5Color,
    button: document.querySelector('#shoe5Submit'),
    total: document.querySelector('#shoe5Total'),
    price: 10000
}

// form 6
var shoe6Form = document.forms.shoe6Form;
var form6 = {
    inputs: document.querySelectorAll('.form6Inputs'),
    color: shoe6Form.shoe6Color,
    button: document.querySelector('#shoe6Submit'),
    total: document.querySelector('#shoe6Total'),
    price: 15000
}

// form 7
var shoe7Form = document.forms.shoe7Form;
var form7 = {
    inputs: document.querySelectorAll('.form7Inputs'),
    color: shoe7Form.shoe7Color,
    button: document.querySelector('#shoe7Submit'),
    total: document.querySelector('#shoe7Total'),
    price: 10000
}

// form 8
var shoe8Form = document.forms.shoe8Form;
var form8 = {
    inputs: document.querySelectorAll('.form8Inputs'),
    color: shoe8Form.shoe1Color,
    button: document.querySelector('#shoe8Submit'),
    total: document.querySelector('#shoe8Total'),
    price: 8000
}


// form 9
var shoe9Form = document.forms.shoe9Form;
var form9 = {
    inputs: document.querySelectorAll('.form9Inputs'),
    color: shoe9Form.shoe9Color,
    button: document.querySelector('#shoe9Submit'),
    total: document.querySelector('#shoe9Total'),
    price: 25000
}

function addQuantityEventListener(form) {
    form.inputs[3].addEventListener('keyup', function (event) {
        if (patterns.quantity.test(form.inputs[3].value)) {
            form.total.innerHTML = form.price * form.inputs[3].value;
            form.total.style.color = 'green';
        } else {
            form.total.innerHTML = "Invalid Quantity";
            form.total.style.color = 'orange';
        }
        
    });
}

function addButtonEventListener (button, form) {
    button.addEventListener('click', function (event) {
        //validate(button, form1);
        event.preventDefault();
        validate(form1);
        for (var i = 0; i < form.inputs.length; i++) {
            if (form.inputs[i].value === '' || form.inputs[i].value.trim() === '') {
                event.preventDefault();
                M.toast({
                    html: 'Please Make sure you complete the form'
                });
                form.inputs[i].focus();
                break;
            }
        }
        if (form.color.value === '') {
            event.preventDefault();
            M.toast({
               html: 'Please choose a color.' 
            });
        } else {
            event.preventDefault();
            M.toast({
                html: 'Order Placed Successfully. You will be contacted Shortly.'
            });
            event.target.form.reset();
            form.total.innerHTML = '';
        }
    }, false);
}

function validate (form) {
    var inputs = [
        [form.inputs[0], patterns.name],
        [form.inputs[1], patterns.email],
        [form.inputs[2], patterns.telephone],
        [form.inputs[3], patterns.quantity]
    ];

    for (var i = 0; i < inputs.length; i++) {
        inputs[i][0].addEventListener('focusout', function (event) {
            if (inputs[i][1].test(inputs[i][0].value)) {
                console.log('Okay');
            } else {
                M.toast({
                    html: 'Please provide a valid input'
                });
                inputs[i][0].focus();
            }
        }, false);
        break;
    }
}

//Form 1
addButtonEventListener(form1.button, form1);
addQuantityEventListener(form1);
validate(form1);

//Form 2
addButtonEventListener(form2.button, form2);
addQuantityEventListener(form2);
validate(form2);

//Form 3
addButtonEventListener(form3.button, form3);
addQuantityEventListener(form3);
validate(form3);

//Form 4
addButtonEventListener(form4.button, form4);
addQuantityEventListener(form4);
validate(form4);

//Form 5
addButtonEventListener(form5.button, form5);
addQuantityEventListener(form5);
validate(form5);

//Form 6
addButtonEventListener(form6.button, form6);
addQuantityEventListener(form6);
validate(form6);

//Form 7
addButtonEventListener(form7.button, form7);
addQuantityEventListener(form7);
validate(form7);

//Form 8
addButtonEventListener(form8.button, form8);
addQuantityEventListener(form8);
validate(form8);

//Form 9
addButtonEventListener(form9.button, form9);
addQuantityEventListener(form9);
validate(form9);