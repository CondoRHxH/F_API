const url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLMTdZ61eBnyqzVhegrlKy38Zwzky-eugX&maxResults=50&key=AIzaSyAih1oNskLI8sV9p-yMfCKq2R1d-v6_mh4";

fetch(url).then(response => { return response.json()}).then(data => {
    // console.log(data.items[0].id);
    // console.log(data.items);
    getData(data.items);
}).catch(error => {

    console.log("WIIIIIIIIIIIIW");
})

function getData(data){
    console.log(data);

    data.forEach(element => {
        var title = element.snippet.title;
        var videoId = element.snippet.resourceId.videoId;
        var img = element.snippet.thumbnails.high.url;
        var description = element.snippet.description;

        document.getElementById("content").innerHTML += `<div class="shadow p-3 mb-5 bg-body-tertiary rounded" onclick="loadVideo('${videoId}')">

        ${title} </div>   
  
        
        `;

    });
}

function loadVideo(videoId){
    document.getElementById("player").src="https://www.youtube.com/embed/"+videoId+ "?showinfo=0;rel=0";
}

