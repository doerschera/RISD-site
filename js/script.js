

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
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "gamma": 0.01
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": -31
                },
                {
                    "lightness": -33
                },
                {
                    "weight": 2
                },
                {
                    "gamma": 0.8
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
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4dd2ff"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#4dd2ff"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#4dd2ff"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#4dd2ff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#4dd2ff"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "color": "#ff0000"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": "28"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#b3b3b3"
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
                    "color": "#b3ecff"
                },
                {
                    "lightness": "52"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": 25
                },
                {
                    "lightness": 25
                },
                {
                    "color": "#b3ecff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#4dd2ff"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "weight": "0.01"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "lightness": -20
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#e6f9ff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#66d9ff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#cccccc"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
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
