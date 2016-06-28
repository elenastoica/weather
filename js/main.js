$(document).ready(function(){
  var lat,lon,link;
  $.getJSON("http://ip-api.com/json",function(json1){

    lat = json1.lat;
    lon = json1.lon;
    var regionName=json1.regionName;
  link="http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon=" + lon + "&appid=fba5969991127bc133d342b0ee86f3ee&units=imperial";
  // $(".icon").html(link);
  $.getJSON(link,function(json){
    var loca="<div>" + regionName+", "+json.sys.country + "</div>";
    var temF=Math.floor(json.main.temp);// F temperature
    var temC=Math.floor((temF-32)/1.8)+ ' \xB0C';
    temF=temF+ ' \xB0F';
    var ic = json.weather[0].icon;
    $('.icon').append("<img src='http://openweathermap.org/img/w/" + ic+ ".png'>");
    $(".location").html(loca);
    $(".temp").html(temF);
    var count=0;
    $("#change").click(function(){
      count++;
      if(count%2==0)
      $(".temp").html(temF);
      else
      $(".temp").html(temC);
  });
    });
  });
});
