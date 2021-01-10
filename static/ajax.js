// console.log("hey! there");

// let submitButton = document.getElementById("submit");
// submitButton.addEventListener('click',searchLyrics);
// let url = 'http://127.0.0.1:8000/';
// function searchLyrics(){
// 	// console.log('we have clicked the button');
// 	// let searchItem = document.getElementById("search");
// 	// console.log(searchItem.value);
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET',url,true);
// 	console.log('we have clicked the button'); 
// 	xhr.onprogress=function(){
// 		console.log("on progress");
// 	}

// 	xhr.onload = function(){
// 		console.log(this.responseText);
// 	}

// 	xhr.send();

// }



// var data = JSON.stringify({
// 	"songName": inputVal,
// 	"artistName":inputArtist
// });
var data = null;

let submitButton = document.getElementById("submit");
submitButton.addEventListener('click',searchLyrics);

function searchLyrics(){
	var song= document.getElementById("search").value;
var Artist = document.getElementById("Artist").value;
trackSearchUrl="https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/track.search?f_has_lyrics=1&q_track="+song+"&q_artist="+Artist+"&page_size=5&page=1";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {

		console.log(JSON.parse(this.responseText));
		let trackId=JSON.parse(this.responseText)[0].track_id;
		lyricsSearch(trackId);
		console.clear();
	}
});

xhr.open("GET", trackSearchUrl);
xhr.setRequestHeader("x-rapidapi-host", "musixmatchcom-musixmatch.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a37926ae0fmsh0c55542639256ffp163e09jsn2afcd5a2aa3a");

xhr.send(data);


}

function lyricsSearch(trackId){
url ="https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/track.lyrics.get?track_id="+trackId;
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(JSON.parse(this.responseText).lyrics_body);
		console.log("hello");
		// document.getElementById("lyrics").style.color=black;
		console.log("hello2");
		document.getElementById("lyrics").innerHTML=JSON.parse(this.responseText).lyrics_body;

	}
});



xhr.open("GET", url);
xhr.setRequestHeader("x-rapidapi-host", "musixmatchcom-musixmatch.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "a37926ae0fmsh0c55542639256ffp163e09jsn2afcd5a2aa3a");

xhr.send(data);
}


