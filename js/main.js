$(document).ready(function ()
{
    $('.home-carousel').slick({
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        autoplay: true
    });
});

let _prevCount = 2;

window.addEventListener("load", () =>
{
    window.addEventListener("resize", onResizeHandler);
    let isSmall = window.innerWidth <= 960;
    let count = isSmall ? 1 : 2;
    _prevCount = count;
    carousel(count);
    function onResizeHandler(ev)
    {
        let isSmall = window.innerWidth <= 960
        let count = isSmall ? 1 : 2;
        if (count !== _prevCount)
        {
            _prevCount = count;
            $('.testimonial-carousel').slick('unslick');
            carousel(count);
        }
    }

})

let reqObject = {
    name: "",
    email: "",
    phone: "",
    message: ""

}

function onInputChange(id, value)
{
    reqObject[id] = value;
    document.getElementById([id]).value = value;
    console.log(reqObject);
}

console.log(reqObject)

function carousel(count)
{
    $(document).ready(function ()
    {
        $('.testimonial-carousel').slick({
            speed: 500,
            cssEase: 'ease-out',
            arrows: false,
            autoplay: true,
            autoplaySpeed: 15000,
            slidesToShow: count,
            slidesToScroll: 1
        });
    });
}


$(document).ready(function ()
{
    $("a").on('click', function (event)
    {
        if (this.hash !== "")
        {
            event.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function ()
            {
                window.location.hash = hash;
            });
        }
    });
});

let yearSpan = document.getElementById("current-year");

yearSpan.innerText = new Date().getFullYear()
