var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
}),
new ol.layer.Tile({
    'title': 'Stamen Toner',
    'type': 'base',
        source: new ol.source.Stamen({
        layer: 'toner'
        })
}),
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
}),
new ol.layer.Tile({
    'title': 'Stamen Watercolor',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
})
]
});
var format_TheatreLocations_0 = new ol.format.GeoJSON();
var features_TheatreLocations_0 = format_TheatreLocations_0.readFeatures(json_TheatreLocations_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TheatreLocations_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TheatreLocations_0.addFeatures(features_TheatreLocations_0);cluster_TheatreLocations_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TheatreLocations_0
});var lyr_TheatreLocations_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_TheatreLocations_0, 
                style: style_TheatreLocations_0,
                title: '<img src="styles/legend/TheatreLocations_0.png" /> Theatre-Locations'
            });

lyr_TheatreLocations_0.setVisible(true);
var layersList = [baseLayer,lyr_TheatreLocations_0];
lyr_TheatreLocations_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'visibility': 'visibility', 'image': 'image', });
lyr_TheatreLocations_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'visibility': 'TextEdit', 'image': 'Photo', });
lyr_TheatreLocations_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'visibility': 'no label', 'image': 'no label', });
lyr_TheatreLocations_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});