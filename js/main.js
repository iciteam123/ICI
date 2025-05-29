$(".slick-slider").slick({
  slidesToShow: 7,
  SlidesToScroll: 1,
  dots: false,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
});

$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend(
    {
      start: 0,
      end: 100,
      easing: "swing",
      duration: 400,
      complete: "",
      suffix: "",
    },
    options
  );

  var thisElement = $(this);

  $({
    count: settings.start,
  }).animate(
    {
      count: settings.end,
    },
    {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(Math.min(this.count, settings.maxNumber));
        thisElement.text(mathCount + settings.suffix);
      },
      complete: function () {
        var mathCount = Math.min(this.count, settings.maxNumber);

        let suffix = settings.suffix;
        if (this.count > settings.maxNumber) {
          suffix += "+";
        }
        thisElement.text(mathCount + suffix);
      },
    }
  );
};

$(".number-counter").each(function (index, element) {
  $(element).jQuerySimpleCounter({
    end: parseInt($(element).attr("data-count") || 0) + 1,
    duration: 3000,
    maxNumber: parseInt($(element).attr("data-count") || 0),
    suffix: $(element).attr("data-suffix") || "",
  });
});
