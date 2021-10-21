document.querySelector('.head_burger').addEventListener('click', function() {
    document.querySelector('.head_burger').classList.toggle('active');
    document.querySelector('.burger').classList.toggle('active');
})

document.querySelectorAll('.tarif_but_item')[0].addEventListener('click', function() {
    document.querySelectorAll('.tarif-num')[0].textContent = '1999$';
    document.querySelectorAll('.tarif-num')[1].textContent = '5999$';
    document.querySelectorAll('.tarif-num')[2].textContent = '19499$';
    document.querySelectorAll('.tarif_but_item')[0].classList.toggle('_active');
    if(document.querySelectorAll('.tarif_but_item')[1].classList.contains('_active')) {
        document.querySelectorAll('.tarif_but_item')[1].classList.toggle('_active');
    } else {
        if (document.querySelectorAll('.tarif_but_item')[2].classList.contains('_active')) {
            document.querySelectorAll('.tarif_but_item')[2].classList.toggle('_active');
        }
    }
})
document.querySelectorAll('.tarif_but_item')[1].addEventListener('click', function() {
    document.querySelectorAll('.tarif-num')[0].textContent = '2999$';
    document.querySelectorAll('.tarif-num')[1].textContent = '7999$';
    document.querySelectorAll('.tarif-num')[2].textContent = '21499$';
    document.querySelectorAll('.tarif_but_item')[1].classList.toggle('_active');
    if(document.querySelectorAll('.tarif_but_item')[2].classList.contains('_active')) {
        document.querySelectorAll('.tarif_but_item')[2].classList.toggle('_active');
    } else {
        if (document.querySelectorAll('.tarif_but_item')[0].classList.contains('_active')) {
            document.querySelectorAll('.tarif_but_item')[0].classList.toggle('_active');
        }
    }
})
document.querySelectorAll('.tarif_but_item')[2].addEventListener('click', function() {
    document.querySelectorAll('.tarif-num')[0].textContent = '4999$';
    document.querySelectorAll('.tarif-num')[1].textContent = '9499$';
    document.querySelectorAll('.tarif-num')[2].textContent = '26499$';
    document.querySelectorAll('.tarif_but_item')[2].classList.toggle('_active');
    if(document.querySelectorAll('.tarif_but_item')[1].classList.contains('_active')) {
        document.querySelectorAll('.tarif_but_item')[1].classList.toggle('_active');
    } else {
        if (document.querySelectorAll('.tarif_but_item')[0].classList.contains('_active')) {
            document.querySelectorAll('.tarif_but_item')[0].classList.toggle('_active');
        }
    }
})

for(let i = 0; i < document.querySelectorAll(".ques_info").length; i++) {
    document.querySelectorAll(".ques_info")[i].addEventListener('click', function() {
        if(document.querySelectorAll(".ques_answer")[i].classList.contains("active")) {
            document.querySelectorAll(".ques_button")[i].textContent = '+';
        } else {
            document.querySelectorAll(".ques_button")[i].textContent = '-';
        }
        document.querySelectorAll(".ques_answer")[i].classList.toggle("active");
        document.querySelectorAll(".ques_button")[i].classList.toggle("active");
    });
}


var count = document.querySelectorAll('.slider_item');

for(let i = 0; i < count.length; i++) {
    document.querySelector(".slider_arrow.left").addEventListener("click", function() {
        if(count[i].classList.contains("active")) {
            count[i].classList.toggle("active");
            if(i == 0) {
                count[count.length - 1].classList.toggle("active");
            } else {
                count[i - 1].classList.toggle("active");
            }
        }
    });
    /*
    document.querySelector('.slider_arrow.right').addEventListener('click', function() {
        if(document.querySelectorAll('.slider_item')[i].classList.contains('active')) {
            document.querySelectorAll('.slider_item')[i].classList.toggle('active');
            if(i == (document.querySelectorAll('.slider_item').length - 1)) {
                document.querySelectorAll('.slider_item')[0].classList.toggle('active');
            } else {
                document.querySelectorAll('.slider_item')[i + 1].classList.toggle('active');
            }
        }
    });
    */
}