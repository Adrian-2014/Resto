// navbar scroll

window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var scrolled = window.scrollY > 50; // Adjust the scroll threshold as needed

    if (scrolled) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
// navbar scroll end


$(document).ready(function () {
    var slideCount = $(".t-item").length;
    var currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }

        var translateValue = -index * 100 + "%";
        $(".t-slide").css("transform", "translateX(" + translateValue + ")");
        currentIndex = index;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    // Auto slide every 4 seconds (adjust as needed)
    var intervalId = setInterval(nextSlide, 4000);

    // Stop auto slide when mouse enters the slider
    $(".t-slider").mouseenter(function () {
        clearInterval(intervalId);
        $(".t-slide").css("animation-play-state", "paused");
    });

    // Resume auto slide when mouse leaves the slider
    $(".t-slider").mouseleave(function () {
        intervalId = setInterval(nextSlide, 4000);
        $(".t-slide").css("animation-play-state", "running");
    });

    // Click event for indicators
    $(".indicator").click(function () {
        var index = $(this).index();
        showSlide(index);
    });
});

// garis tanda

var links = document.querySelectorAll('.link');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Menghapus kelas "active" dari semua elemen dengan kelas "link"
            links.forEach(function(innerLink) {
                innerLink.classList.remove('active');
            });

            // Menambahkan kelas "active" ke elemen yang diklik
            link.classList.add('active');
        });
    });

// garis tanda