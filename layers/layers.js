var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Italy1250000_1 = new ol.format.GeoJSON();
var features_Italy1250000_1 = format_Italy1250000_1.readFeatures(json_Italy1250000_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italy1250000_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Italy1250000_1.addFeatures(features_Italy1250000_1);var lyr_Italy1250000_1 = new ol.layer.Vector({
                type: 'base',
			declutter: true,
                source:jsonSource_Italy1250000_1, 
                style: style_Italy1250000_1,
			    title: '  1:250,000 Series (G.S.G.S. 4230)'
            });var format_Italy1100000_2 = new ol.format.GeoJSON();
var features_Italy1100000_2 = format_Italy1100000_2.readFeatures(json_Italy1100000_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italy1100000_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Italy1100000_2.addFeatures(features_Italy1100000_2);var lyr_Italy1100000_2 = new ol.layer.Vector({
                type: 'base',
			declutter: true,
                source:jsonSource_Italy1100000_2, 
				style: style_Italy1100000_2,
                title: '  1:100,000 Series (G.S.G.S. 4164)'
            });var format_Italy150000_3 = new ol.format.GeoJSON();
var features_Italy150000_3 = format_Italy150000_3.readFeatures(json_Italy150000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italy150000_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Italy150000_3.addFeatures(features_Italy150000_3);var lyr_Italy150000_3 = new ol.layer.Vector({
                type: 'base',
			declutter: true,
                source:jsonSource_Italy150000_3, 
                style: style_Italy150000_3,
			    title: '  1:50,000 Series (G.S.G.S. 4229)'
            });var format_Italy125000_4 = new ol.format.GeoJSON();
var features_Italy125000_4 = format_Italy125000_4.readFeatures(json_Italy125000_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Italy125000_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Italy125000_4.addFeatures(features_Italy125000_4);var lyr_Italy125000_4 = new ol.layer.Vector({
                type: 'base',
			declutter: true,
                source:jsonSource_Italy125000_4, 
				style: style_Italy125000_4,
                title: '  1:25,000 Series (G.S.G.S. 4228)'
            });
var group_boundaries = new ol.layer.Group({
                                layers: [lyr_Italy1250000_1,lyr_Italy1100000_2,lyr_Italy150000_3,lyr_Italy125000_4,],
                                title: "Map boundaries"});
var group_basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                title: "Basemap"});

lyr_OSMStandard_0.setVisible(true);lyr_Italy1250000_1.setVisible(true);lyr_Italy1100000_2.setVisible(true);lyr_Italy150000_3.setVisible(true);lyr_Italy125000_4.setVisible(true);
var layersList = [group_basemap,group_boundaries];
lyr_Italy1250000_1.set('fieldAliases', {'Italy_Sw15': 'Thumbnail', 'num_name': 'Sheet', 'Italy_Sw_7': 'Author', 'Italy_Sw_9': 'Date', 'Edition': 'Edition', 'Italy_Sw11': 'Citation', 'Italy_Sw13': 'Download', });
lyr_Italy1100000_2.set('fieldAliases', {'Italy 1_16': 'Thumbnail', 'Num_Name2': 'Sheet', 'Italy 1__7': 'Author', 'Italy 1__9': 'Date', 'Edition': 'Edition', 'Italy 1_12': 'Citation', 'Italy 1_14': 'Download', });
lyr_Italy150000_3.set('fieldAliases', {'Italy 1_15': 'Thumbnail', 'num_name': 'Sheet', 'Italy 1__7': 'Author', 'Italy 1__9': 'Date', 'Italy 1__4': 'Edition', 'Italy 1_11': 'Citation', 'Italy 1_13': 'Download', });
lyr_Italy125000_4.set('fieldAliases', {'thumb_link': 'Thumbnail', 'italy_25_6': 'Sheet', 'italy_25_9': 'Author', 'italy_25_3': 'Date', 'italy_2522': 'Edition', 'download': 'Download', });
lyr_Italy1250000_1.set('fieldImages', {'Italy_Sw15': 'TextEdit', 'num_name': 'TextEdit', 'Italy_Sw_9': 'TextEdit', 'Edition': 'TextEdit', 'Italy_Sw11': 'TextEdit', 'Italy_Sw13': 'TextEdit', });
lyr_Italy1100000_2.set('fieldImages', {'Italy 1_16': 'TextEdit', 'Num_Name2': 'TextEdit', 'Italy_Sw_7': 'TextEdit', 'Italy 1__9': 'TextEdit', 'Italy 1_12': 'TextEdit', 'Italy 1_14': 'TextEdit', });
lyr_Italy150000_3.set('fieldImages', {'Italy 1_15': 'TextEdit', 'num_name': 'TextEdit', 'Italy 1__7': 'TextEdit', 'Italy 1__9': 'TextEdit', 'Italy 1__4': 'TextEdit', 'Italy 1_11': 'TextEdit', 'Italy 1_13': 'TextEdit', });
lyr_Italy125000_4.set('fieldImages', {'thumb_link': 'TextEdit', 'italy_25_6': 'TextEdit', 'italy_25_9': 'TextEdit', 'italy_25_3': 'TextEdit', 'italy_2522': 'TextEdit', 'download': 'TextEdit', });
lyr_Italy1250000_1.set('fieldLabels', {'Italy_Sw15': 'no label', 'num_name': 'header label', 'Italy_Sw_7': 'header label', 'Italy_Sw_9': 'header label', 'Edition': 'header label', 'Italy_Sw11': 'header label', 'Italy_Sw13': 'no label', });
lyr_Italy1100000_2.set('fieldLabels', {'Italy_1_16': 'no label', 'Num_Name2': 'header label', 'Italy 1__7': 'header label', 'Italy 1__9': 'header label', 'Edition': 'header label', 'Italy 1_12': 'header label', 'Italy 1_14': 'no label', });
lyr_Italy150000_3.set('fieldLabels', {'Italy 1_15': 'no label', 'num_name': 'header label', 'Italy 1__7': 'header label', 'Italy 1__9': 'header label', 'Italy 1__4': 'header label', 'Italy 1_11': 'header label', 'Italy 1_13': 'no label', });
lyr_Italy125000_4.set('fieldLabels', {'thumb_link': 'no label', 'italy_25_6': 'header label', 'italy_25_9': 'header label', 'italy_25_3': 'header label', 'italy_2522': 'header label', 'download': 'no label', });
lyr_Italy125000_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});