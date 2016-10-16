

  // css fixes
  // columns.responsiveColumns();
  // $(window).resize(columns.responsiveColumns);

  /* ------------------------
  // initialize google map //
  -------------------------*/

  window.initMap = function() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(41.82865, -71.40526),
    zoom: 18,
    styles: [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#00c6ff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#00bdff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 30
                },
                {
                    "saturation": 30
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f0f0f0"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "saturation": 20
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "lightness": "52"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#00c6ff"
                },
                {
                    "lightness": "-16"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.medical",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 20
                },
                {
                    "saturation": -20
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c2c2c2"
                },
                {
                    "lightness": "56"
                }
            ]
        },
        {
            "featureType": "poi.school",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#c2c2c2"
                },
                {
                    "lightness": "63"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "lightness": 10
                },
                {
                    "saturation": -30
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#00cfff"
                },
                {
                    "lightness": "58"
                },
                {
                    "saturation": "-36"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": "-11"
                },
                {
                    "lightness": 25
                },
                {
                    "hue": "#00cfff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "weight": "0.64"
                },
                {
                    "saturation": "9"
                },
                {
                    "lightness": "32"
                },
                {
                    "hue": "#00c6ff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "weight": "1.00"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#00bdff"
                },
                {
                    "lightness": "-5"
                },
                {
                    "saturation": "-11"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#00c6ff"
                },
                {
                    "saturation": "-16"
                },
                {
                    "lightness": "74"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text",
            "stylers": [
                {
                    "lightness": "7"
                }
            ]
        }
    ]

  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var image = {
    url: 'http://i63.tinypic.com/nlefki.jpg',
    scaledSize : new google.maps.Size(22, 32)
  }

  var woodsGerry = new google.maps.Marker({
    position: {lat: 41.82865, lng: -71.40526},
    icon: 'http://i64.tinypic.com/2cyfplg.jpg',
    map: map,
    title: 'Woods-Gerry'
  });

  var icons = {
    library: {
      icon:'../images/15west.png'
    },
    apparel: {
      icon:'../images/apparel.png'
    },
    auditorium: {
      icon:'../images/auditorium.png'
    },
    beb: {
      icon: '../images/beb.png'
    },
    bensonHall: {
      icon: '../images/bensonHall.png'
    },
    carrHaus: {
      icon: '../images/carrHaus.png'
    },
    CIT: {
      icon: '../images/CIT.png'
    },
    collegeBuilding: {
      icon: '../images/collegeBuilding.png'
    },
    designCenter: {
      icon: '../images/designCenter.png'
    },
    id: {
      icon: '../images/id.png'
    },
    ISB: {
      icon: '../images/ISB.png'
    },
    marketHosue: {
      icon: '../images/marketHosue.png'
    },
    memHall: {
      icon: '../images/memHall.png'
    },
    metclaf: {
      icon: '../images/metclaf.png'
    },
    museum: {
      icon: '../images/museum.png'
    },
    provwash: {
      icon: '../images/provwash.png'
    },
    quad: {
      icon: '../images/quad.png'
    },
    waterman: {
      icon: '../images/waterman.png'
    },
    woodsGerry: {
      icon: '../images/woodsGerry.png'
    }
  }

  var buildings = [
    {
      position: new google.maps.LatLng(41.82865, -71.40526),
      type: 'woodsGerry'
    }
  ]

  function addMarker(building) {
    var marker = new google.maps.Marker({
      position: buildings.position,
      icon: icons[building.type].icon,
      map: map
    });
  }

  // var woodsGerry = buildings[0]
  // addMarker(woodsGerry);
}


$(document).ready(function() {

  // Column Heights
  responsiveColumns();
  $(window).resize(responsiveColumns);

  function responsiveColumns() {
    columnHeight('#majorsList', '#majorDescription');
    columnHeight('#liberalArts', '#foundations');
    columnHeight('#slIntro', '#slStudents');
    columnHeight('#slMuseum', '#slNatureLab', '#slGalleries');
    columnHeight('#slLibrary', '#slAlumni', '#slEHP');
    columnHeight('#slDining', '#slCafes');
    columnHeight('#slDorms', '#slClubs')
  }

  function columnHeight(left, right, center) {
    var height1 = $(left).css('height');
    var height2 = $(right).css('height');
    var height3 = $(center).css('height');

    if(center != undefined) {
      if(height1 > height2 && height1 > height3) {
        $(right).css('min-height', height1);
        $(center).css('min-height', height1);
      } else if(height2 > height1 && height2 > height3) {
        $(left).css('min-height', height2);
        $(center).css('min-height', height2);
      } else {
        $(left).css('min-height', height3);
        $(right).css('min-height', height3);
      }
    } else {
      if(height1 > height2) {
        $(right).css('min-height', height1);
      } else {
        $(left).css('min-height', height2);
      }
    }

  }

})
