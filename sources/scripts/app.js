  $.get("img/sprite.svg", function(data) {
    var div = document.createElement("div");
    div.hidden = true;
    div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
    document.body.insertBefore(div, document.body.childNodes[0]);
  });

  var is_playing = false;
  function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('welcome', {
      events: {
        onReady: function(e) {e.target.mute();}
      }
    });

    var playButton = document.getElementById("start_bg");
    var that = this
    playButton.addEventListener("click", function() {
      if (that.is_playing) {
        player.pauseVideo();
        that.is_playing = false;
        this.classList.remove('playing');
        $('.welcome--th').show();
        $('.welcome--video').hide();
      } else {
        player.playVideo();
        that.is_playing = true;
        this.classList.add('playing')
        $('.welcome--th').hide();
        $('.welcome--video').show();
      }
    });
  }

  $('#video__about').owlCarousel({
    items: 1,
    loop: true,
    video: true,
    videoHeight: 500,
    lazyLoad: true,
    dots: false,
    nav: true,
    navText: ['<svg><use xlink:href="#prev"></use></svg>' , '<svg><use xlink:href="#next"></use></svg>']
  })

  $('.mt__about--slider').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    navText: ['<svg><use xlink:href="#prev"></use></svg>' , '<svg><use xlink:href="#next"></use></svg>']
  })

  $('.mt__feedback .owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<svg><use xlink:href="#prev"></use></svg>' , '<svg><use xlink:href="#next"></use></svg>'],
    responsive : {0:{items: 1,},480:{items: 2,},768:{items: 3,},1000:{items: 4,}}
  })

  // supermap //
    var map_styler = [
      {
        "elementType": "geometry",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{"color": "#f5f5f5"}]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#bdbdbd"}]
      },
      {
        "featureType": "poi",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#757575"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{"color": "#dadada"}]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#616161"}]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      },
      {
        "featureType": "transit",
        "stylers": [{"visibility": "off"}]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [{"color": "#e5e5e5"}]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [{"color": "#eeeeee"}]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{"color": "#c9c9c9"}]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{"color": "#9e9e9e"}]
      }
    ];
    var locations = [
      ["США", 41.8339037, -87.8720467, "img/marker_us.png"],
      ["Франция", 46.1445238, -2.4349654, "img/marker_fr.png"],
      ["Италия", 41.2118925, 8.2238296, "img/marker_it.png"],
      ["Турция", 39.0100741, 30.6887217, "img/marker_tu.png"],
    ];
    var map = new google.maps.Map(document.getElementById('supermap'), {
        zoom: 3,
        styles: map_styler,
        center: new google.maps.LatLng(48.8988715, -0.842262),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: {
                url: locations[i][3],
                scaledSize: new google.maps.Size(56, 56)
            }
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }


  $('[data-toggle=collapse]').click(function (e) {
    if ($(this).attr('aria-expanded') == 'true') {
      e.preventDefault();
      e.stopPropagation();
    }
  })

  $(".selector--list").niceScroll({
    //autohidemode: false,
    cursorcolor: "#00b7e8",
    cursoropacitymin: .5,
    cursorwidth: "5px",
    cursorborder: "0 solid #fff",
    cursorborderradius: "2.5px",
    background: '#fff',
    usetransition: false,
    railpadding: { top: 5, right: 2.5, left: 0, bottom: 5 }
  });

  $(window).on('resize', function() {
    setTimeout(function () {
      $('.selector--list').getNiceScroll().resize()
    }, 500)
  });

