var state = ["Pulau Pinang","Kedah","Perlis","Perak","Negeri Sembilan","Selangor","Johor","Kelantan","Terengganu","Pahang","Melaka","Putrajaya","Labuan","Kuala Lumpur","Sabah","Sarawak"];
var addr1 = ["Jalan Dato Keramat 1-234","Jalan Kedah 1-234","Jalan Thai 1-234","Jalan Hefong 1-234","Jalan Razak 1-234","Jalan Selangor 1-234","Jalan Marak 1-234","Jalan Kelate 1-234","Jalan Tasik 1-234","Jalan Pahang 1-234","Jalan Kampung 1-234","Jalan Putrajaya 1-234","Jalan Labuan 1-234","Jalan Yasur 1-234","Jalan Mewah 1-234","Jalan Lawak 1-234"];
var addr2 = ["Jalan Ali 2-345","Jalan Kedah 2 2-345","Jalan Harimau 2-345","Jalan MeiFang 2-345","Jalan TimeSquare 2-345","Jalan Kelang 2-345","Jalan Meriam 2-345","Jalan Kembar 2-345","Jalan Kuala Nerus 2-345","Jalan Genting 2-345","Jalan Melaka 2-345","Jalan New 2-345","Jalan Hantu 2-345","Jalan Lama 2-345","Jalan Beras 2-345","Jalan Cina 2-345"];
var addr3 = ["Jalan Ahmad 3-456","Jalan Amri 3-456","Jalan Kucing 3-456","Jalan Lim 3-456","Jalan SunMall 3-456","Jalan Amboi 3-456","Jalan Johor 3-456","Jalan Kelantan 3-456","Jalan Kuala Terengganu 3-456","Jalan Arnab 3-456","Jalan Baru 3-456","Jalan Aku 3-456","Jalan Dewa 3-456","Jalan KL 3-456","Jalan Raja 3-456","Jalan Sarawak 3-456"];
var addr4 = ["Jalan Abu Bakar 4-567","Jalan Putong 4-567","Jalan Monyek 4-567","Jalan Yang 4-567","Jalan Merdeka 4-567","Jalan Aduh 4-567","Jalan Lego 4-567","Jalan Kelajuan 4-567","Jalan Mahmud 4-567","Jalan Tikui 4-567","Jalan Basi 4-567","Jalan Haiwan 4-567","Jalan Semut4-567","Jalan Terbang 4-567","Jalan Rahman 4-567","Jalan Merah 4-567"];
var addr5 = ["Jalan Mahmud 5-678","Jalan Biawak 5-678","Jalan KuraKura 5-678","Jalan Yi 5-678","Jalan Sembilan 5-678","Jalan Cicak 5-678","Jalan Ampang 5-678","Jalan Mamru 5-678","Jalan Sultan Mahmud 5-678","Jalan Gunung 5-678","Jalan Kahwin 5-678","Jalan Neraka 5-678","Jalan Rasmi 5-678","Jalan tentera 5-678","Jalan Kuning 5-678","Jalan Putih 5-678"];

var i = 0;

document.getElementById("Title").innerHTML = state[i];
document.getElementById("addr1").innerHTML = addr1[i];
document.getElementById("addr2").innerHTML = addr2[i];
document.getElementById("addr3").innerHTML = addr3[i];
document.getElementById("addr4").innerHTML = addr4[i];
document.getElementById("addr5").innerHTML = addr5[i];

function next(){
  i++;
  if(i==16){
    i=0;
  }
  document.getElementById("Title").innerHTML = state[i];
  document.getElementById("addr1").innerHTML = addr1[i];
  document.getElementById("addr2").innerHTML = addr2[i];
  document.getElementById("addr3").innerHTML = addr3[i];
  document.getElementById("addr4").innerHTML = addr4[i];
  document.getElementById("addr5").innerHTML = addr5[i];
}

function previous(){
  if (i==0){
    i=state.length-1;
  }else{
    i--;
  }
  document.getElementById("Title").innerHTML = state[i];
  document.getElementById("addr1").innerHTML = addr1[i];
  document.getElementById("addr2").innerHTML = addr2[i];
  document.getElementById("addr3").innerHTML = addr3[i];
  document.getElementById("addr4").innerHTML = addr4[i];
  document.getElementById("addr5").innerHTML = addr5[i];
}

function specific(num){
  i=num;
  document.getElementById("Title").innerHTML = state[i];
  document.getElementById("addr1").innerHTML = addr1[i];
  document.getElementById("addr2").innerHTML = addr2[i];
  document.getElementById("addr3").innerHTML = addr3[i];
  document.getElementById("addr4").innerHTML = addr4[i];
  document.getElementById("addr5").innerHTML = addr5[i];
}

function msg(){
	alert("Thank You!");
}
  
function responsiveNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}