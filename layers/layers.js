var wms_layers = [];

var format_WSDP_0 = new ol.format.GeoJSON();
var features_WSDP_0 = format_WSDP_0.readFeatures(json_WSDP_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WSDP_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WSDP_0.addFeatures(features_WSDP_0);
var lyr_WSDP_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WSDP_0, 
                style: style_WSDP_0,
                popuplayertitle: "WSDP",
                interactive: true,
                title: '<img src="styles/legend/WSDP_0.png" /> WSDP'
            });
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_1_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/Clipped_1_1.png" /> Channel bar(Flood Plain)<br />\
    <img src="styles/legend/Clipped_1_2.png" /> Coastal Plain<br />\
    <img src="styles/legend/Clipped_1_3.png" /> Denudational Hills<br />\
    <img src="styles/legend/Clipped_1_4.png" /> Denudational Structural Hills<br />\
    <img src="styles/legend/Clipped_1_5.png" /> Linear ridge(Lower Plateau)<br />\
    <img src="styles/legend/Clipped_1_6.png" /> Linear ridge(Piedmont Zone)<br />\
    <img src="styles/legend/Clipped_1_7.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/Clipped_1_8.png" /> Marshy<br />\
    <img src="styles/legend/Clipped_1_9.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/Clipped_1_10.png" /> Pebble Bed<br />\
    <img src="styles/legend/Clipped_1_11.png" /> Piedmont Zone<br />\
    <img src="styles/legend/Clipped_1_12.png" /> Point bar(Flood Plain)<br />\
    <img src="styles/legend/Clipped_1_13.png" /> Residual Hill<br />\
    <img src="styles/legend/Clipped_1_14.png" /> Residual Mount<br />\
    <img src="styles/legend/Clipped_1_15.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/Clipped_1_16.png" /> Rock Exposure<br />\
    <img src="styles/legend/Clipped_1_17.png" /> Stabilized channel bar (Flood Plain)<br />\
    <img src="styles/legend/Clipped_1_18.png" /> Structural Valley<br />\
    <img src="styles/legend/Clipped_1_19.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/Clipped_1_20.png" /> Valley<br />\
    <img src="styles/legend/Clipped_1_21.png" /> Valley Fill<br />\
    <img src="styles/legend/Clipped_1_22.png" /> Water Body<br />\
    <img src="styles/legend/Clipped_1_23.png" /> <br />'
        });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_2_0.png" /> 1<br />\
    <img src="styles/legend/Clipped_2_1.png" /> 2<br />\
    <img src="styles/legend/Clipped_2_2.png" /> 3<br />\
    <img src="styles/legend/Clipped_2_3.png" /> 4<br />\
    <img src="styles/legend/Clipped_2_4.png" /> 5<br />\
    <img src="styles/legend/Clipped_2_5.png" /> 6<br />\
    <img src="styles/legend/Clipped_2_6.png" /> 0<br />'
        });
var format_Book1_3 = new ol.format.GeoJSON();
var features_Book1_3 = format_Book1_3.readFeatures(json_Book1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Book1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Book1_3.addFeatures(features_Book1_3);
var lyr_Book1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Book1_3, 
                style: style_Book1_3,
                popuplayertitle: "Book1",
                interactive: true,
                title: '<img src="styles/legend/Book1_3.png" /> Book1'
            });
var format_dam_4 = new ol.format.GeoJSON();
var features_dam_4 = format_dam_4.readFeatures(json_dam_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dam_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dam_4.addFeatures(features_dam_4);
var lyr_dam_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dam_4, 
                style: style_dam_4,
                popuplayertitle: "dam",
                interactive: true,
                title: '<img src="styles/legend/dam_4.png" /> dam'
            });

lyr_WSDP_0.setVisible(true);lyr_Clipped_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Book1_3.setVisible(true);lyr_dam_4.setVisible(true);
var layersList = [lyr_WSDP_0,lyr_Clipped_1,lyr_Clipped_2,lyr_Book1_3,lyr_dam_4];
lyr_WSDP_0.set('fieldAliases', {'PERIMETER': 'PERIMETER', 'KERWSDRP_': 'KERWSDRP_', 'KERWSDRP_I': 'KERWSDRP_I', 'WSCODE': 'WSCODE', 'WSCODE1': 'WSCODE1', 'NRIS': 'NRIS', 'WSNAME': 'WSNAME', 'AREA': 'AREA', });
lyr_Clipped_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Clipped_2.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_Book1_3.set('fieldAliases', {'dam': 'dam', 'latti': 'latti', 'longi': 'longi', });
lyr_dam_4.set('fieldAliases', {'dam': 'dam', 'latti': 'latti', 'longi': 'longi', 'photo': 'photo', });
lyr_WSDP_0.set('fieldImages', {'PERIMETER': 'TextEdit', 'KERWSDRP_': 'Range', 'KERWSDRP_I': 'Range', 'WSCODE': 'TextEdit', 'WSCODE1': 'TextEdit', 'NRIS': 'TextEdit', 'WSNAME': 'TextEdit', 'AREA': 'TextEdit', });
lyr_Clipped_1.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'ORDER1': 'Range', });
lyr_Book1_3.set('fieldImages', {'dam': '', 'latti': '', 'longi': '', });
lyr_dam_4.set('fieldImages', {'dam': 'TextEdit', 'latti': 'TextEdit', 'longi': 'TextEdit', 'photo': 'ExternalResource', });
lyr_WSDP_0.set('fieldLabels', {'PERIMETER': 'no label', 'KERWSDRP_': 'no label', 'KERWSDRP_I': 'no label', 'WSCODE': 'no label', 'WSCODE1': 'no label', 'NRIS': 'no label', 'WSNAME': 'no label', 'AREA': 'no label', });
lyr_Clipped_1.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Clipped_2.set('fieldLabels', {'ORDER1': 'no label', });
lyr_Book1_3.set('fieldLabels', {'dam': 'inline label - visible with data', 'latti': 'no label', 'longi': 'inline label - always visible', });
lyr_dam_4.set('fieldLabels', {'dam': 'no label', 'latti': 'no label', 'longi': 'no label', 'photo': 'no label', });
lyr_dam_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});