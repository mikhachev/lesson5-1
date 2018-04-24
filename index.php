<?php
require __DIR__ . '/vendor/autoload.php';
$api = new \Yandex\Geo\Api();
 if (!isset($_GET["addr"])) {
  	$yousearch = "Простоквашино";
  	$api->setQuery("Простоквашино");
} else {
    $yousearch =$_GET["addr"];	
    $api->setQuery($_GET["addr"]);
}

function yourCoords($latitude, $longitude)
{
	global $lat;
	global $long;
	
	$lat = $latitude;
	$long = $longitude;
}
// Настройка фильтров
$api
    ->setLimit(7) // кол-во результатов
    ->setLang(\Yandex\Geo\Api::LANG_US) // локаль ответа
    ->load();
$response = $api->getResponse();
$response->getFoundCount(); // кол-во найденных адресов
$response->getQuery(); // исходный запрос
$response->getLatitude(); // широта для исходного запроса
$response->getLongitude(); // долгота для исходного запроса
// Список найденных точек
$collection = $response->getList();
$i = 0;
foreach ($collection as $item) 
{
    $address[$i] = $item->getAddress(); // вернет адрес
    $latitude[$i] = $item->getLatitude(); // широта
    $longitude[$i] = $item->getLongitude(); // долгота
    $item->getData(); // необработанные данные
    $i++;
}
 
?>

<html lang="ru">
<head>
  <title>Работа с Composer</title>
  <meta charset="utf-8">
  <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script> 
</head>
<body>
  <h1>Composer</h1><br>
  <form  method="GET">
    <label >Введите адрес </label><input type="text" name="addr" value="<?=  $yousearch; ?>">
    <input type="submit" value="Найти">
  </form>

  <h4>Результаты поиска:</h4>

  <table class="table">
    <tr>
    <th>Адрес</th>
    <th>Координаты</th>
  </tr>
<?php
$i = 0;

foreach ($collection as $item) {  			  
?>
  <tr>
    <td><a href="<?= '?addr='.$yousearch."&enum=$i" ?>  "> <?= $address[$i] ?> </a></td>
    <td>Широта:<?= $latitude[$i]; ?>, Долгота: <?= $longitude[$i]; ?> </td>            
  </tr>                     
        
<?php
    $i++;
} ?>
  </table>
  
  

<?php   

if (count($collection) == 1 ) {
    yourCoords($latitude[0], $longitude[0]);
} elseif (isset($_GET["enum"])) {
	yourCoords($latitude[$_GET["enum"]], $longitude[$_GET["enum"]]);
}	 
?>    
  
  <script type="text/javascript">
    ymaps.ready(init);
    var myMap,
        myPlacemark;
    function init(){     
        myMap = new ymaps.Map("map", {
            center: [<?= $lat; ?>, <?= $long; ?>],
            zoom: 10
        });
        myPlacemark = new ymaps.Placemark([<?= $lat; ?>, <?= $long; ?>], { 
            hintContent: '<?= $address[0]; ?>', 
            balloonContent: '<?= $address[0]; ?>' 
        });
        myMap.geoObjects.add(myPlacemark);
    }
  </script>

<div id="map" style="width: 600px; height: 400px"></div>

</body>
</html>

