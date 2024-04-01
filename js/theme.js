// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) { // Sayfa 100 piksel kaydırıldığında
        $('.scrollTop-div').fadeIn(); // scrollTop-div'ı görünür yap
    } else {
        $('.scrollTop-div').fadeOut(); // Sayfa 100 pikselin altına inildiğinde scrollTop-div'ı gizle
    }
});

$(document).ready(function() {
    $('.confirm-call').click(function(event) {
        event.preventDefault(); // Varsayılan davranışı engelle
        var userResponse = confirm("You are about to call a reference number, are you sure?");
        if (userResponse) {
            // Kullanıcı "OK" dediyse, arama yap
            window.location.href = this.href;
        }
        // Kullanıcı "Cancel" dediyse, hiçbir şey yapma
    });
});

// Sabit butona basıldığında
document.getElementById("toggleButton").addEventListener("change", function() {
    // Tüm content-section elemanlarının arka plan rengini değiştir
    var contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(function(section) {
        if (toggleButton.checked) {
            // Toggle buton açıkken, arka plan rengini değiştir
            section.style.backgroundColor = '#111';
        } else {
            // Toggle buton kapalıyken, arka plan rengini eski haline getir
            section.style.backgroundColor = 'white';
        }
    });
});

// Sabit butona basıldığında
document.getElementById("toggleButton").addEventListener("change", function() {
    // Tüm h1, h2, h3, h4, h5, h6 ve p elemanlarının stilini değiştir
    var headings = document.querySelectorAll('h2, h3, h4, h5, h6, p , b');
    headings.forEach(function(element) {
        if (toggleButton.checked) {
            // Toggle buton açıkken, stil özelliklerini değiştir
            element.style.color = 'white'; // Yazı rengini beyaz yapabilirsiniz
        } else {
            // Toggle buton kapalıyken, stil özelliklerini eski haline getir
            element.style.color = 'black'; // Yazı rengini istediğiniz renge ayarlayın
        }
    });
});

