

  // css fixes
  // columns.responsiveColumns();
  // $(window).resize(columns.responsiveColumns);

  /* ------------------------
  // initialize google map //
  -------------------------*/
  var map;
  var marker;
  var buildings = [
    {
      position: {lat: 41.82865, lng: -71.40526},
      type: 'woodsGerry'
    },
    {
      position: {lat: 41.8271159, lng: -71.4061892},
      type: 'Quad'
    },
    {
      position: {lat: 41.827115, lng: -71.4097567},
      type: 'Carr Haus'
    },
    {
      position: {lat: 41.8264672, lng: -71.4089964},
      type: 'Benson Hall'
    },
    {
      position: {lat: 41.826381, lng: -71.4095347},
      type: 'Mem Hall'
    },
    {
      position: {lat: 41.8270107, lng: -71.4101717},
      type: 'Waterman'
    }, {
      position: {lat: 41.826635, lng: -71.4104087},
      type: 'Metcalf'
    },
    {
      position: {lat: 41.828124, lng: -71.4123687},
      type: 'Apparel'
    }, {
      position: {lat: 41.827149, lng: -71.4114687},
      type: 'ProvWash'
    },
    {
      position: {lat: 41.826602, lng: -71.4113097},
      type: 'ISB'
    },
    {
      position: {lat: 41.8263367, lng: -71.4107893},
      type: 'Design Center'
    }, {
      position: {lat: 41.8260296, lng: -71.4087865},
      type: 'Auditorium'
    },
    {
      position: {lat: 41.825785, lng: -71.4088322},
      type: 'Market House'
    },
    {
      position: {lat: 41.825785, lng: -71.4088322},
      type: 'RISD Museum'
    },
    {
      position: {lat: 41.8258548, lng: -71.408284},
      type: 'College Building'
    },
    {
      position: {lat: 41.8231576, lng: -71.4086006},
      type: 'ID'
    },
    {
      position: {lat: 41.822733, lng: -71.4079717},
      type: 'BEB'
    },
    {
      position: {lat: 41.8254332, lng: -71.411661},
      type: '15 West'
    },
    {
      position: {lat: 41.8225162, lng: 71.41421},
      type: 'CIT'
    }
  ];

function initMap() {
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
    map = new google.maps.Map(mapCanvas, mapOptions);

    var image = {
      url: 'http://i64.tinypic.com/352ptvr.jpg',
      scaledSize : new google.maps.Size(44, 64)
    }

    marker = new google.maps.Marker({
      position: buildings[0].position,
      icon: image,
      map: map,
      title: 'Woods-Gerry'
  });

  // var center = buildings[1].position;
  // console.log(center);

  function newLocation() {
    map.panTo(buildings[1].position);
    marker = new google.maps.Marker({
      position: buildings[1].position,
      icon: image,
      map: map,
      title: buildings[1].type
    })
  }

  $('#next').on('click', function() {
    newLocation();
  })

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
