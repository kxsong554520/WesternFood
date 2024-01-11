var state = ["Pulau Pinang","Kedah","Perlis","Perak","Negeri Sembilan","Selangor","Johor","Kelantan","Terengganu","Pahang","Melaka","Putrajaya","Labuan","Kuala Lumpur","Sabah","Sarawak"];
var addr1 = ["Queensbay Mall, Bayan Lepas","Amanjaya Mall, Sungai Petani","Jalan Zamrud, Kangar","Concubine Lane, Ipoh","Jalan Tiong, Seremban","UKM, Bangi","Jalan Samad, Kulai","Jalan Tasik, Kota Bahru","UMT, Kuala Nerus","Jalan Haji, Kuantan","Jonker Street, Melaka","The Grand Evergreen Hotel, Putrajaya","UMS Kampus Labuan, Labuan","Suria KLCC, Kuala Lumpur","Jesselton St., Kota Kinabalu","Unimas, Kuching"];
var addr2 = ["Jalan Ariffin, GeorgeTown","Jalan Badlilshah, Alor Setar","Jalan Harimau, Kangar","Clarke Street, Ipoh","Grand Permata Hotel, Seremban","Gamuda Gardens, Rawang","Jalan Merak, Batu Pahat","Jalan Kembar, Kota Bahru","UniSZA Kampus Gong Badak, Kuala Nerus","UMPSA Gambang, Kuantan","Jalan Melaka, Melaka","Jalan New, Putrajaya","Jalan Amin, Labuan","Gamuda Tower, Damansara Perdana","Jalan Mat Salleh, Kota Kinabalu","Jalan Harmony, Kuching"];
var addr3 = ["Sunway Carnival Mall, Seberang Jaya ","Grand Villa, Langkawi","Jalan UniMAP, Arau","Jalan Taiping, Taiping","Jalan Astana, Port Dickson","Setia City Mall, Shah Alam","Batu Pahat Mall, Batu Pahat","Jalan Nik Amri, Tanah Merah","KTCC Mall, Kuala Terengganu","Brinchang, Cameron Highlands","Jalan Baru, Melaka","Jalan Mahkota, Putrajaya","Island View Resort, Labuan","Axiata Tower, KL Sentral","Jalan Panglima, Lahad Datu","Jalan Rentap, Kota Samarahan"];
var addr4 = ["Hard Rock Hotel, Batu Feringgi","Kulim Hi-Tech Park, Kulim","Jalan Sawi, Arau","Royal Belum Resort, Hulu Perak","Jalan Loke Seng, Port Dickson","Jalan Sultan, Shah Alam","Legoland, Iskandar Puteri","Jalan Che Soh, Gua Musang","Jalan Limbong, Kemaman","Jalan Ah Huat, Bentong","Jalan Hang Jebat, Melaka","Jalan Ismail, Putrajaya","Jalan WP, Labuan","Terminal Bersepadu Selatan, Kuala Lumpur","Jalan Pantai, Keningau","Jalan Ujung, Miri"];
var addr5 = ["USM Kampus Kejuruteraan, Nibong Tebal","Hill Resort Gunung Jerai, Gurun","Permai Hotel, Arau","UTAR, Kampar","Putra Mall, Rembau","UPM, Serdang","Jalan Lama, Johor Bahru","UMK Kampus Jeli, Jeli","UniSZA Kampus Besut, Besut","Grand Parade Hotel, Genting Highlands ","Jalan Sultan Mahmud, Melaka","MMU, Cyberjaya","Hotel Seaview, Labuan","Plaza Mont Kiara, Mont Kiara","Jalan Sungai Kinabatangan, Kinabatangan","Forest Resort, Bintulu"];

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