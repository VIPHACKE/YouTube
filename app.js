function searchVideos() {
    const query = document.getElementById('search').value;
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyDayr30hJDnuDlOUoUp-Y9DovYy27nr6EM&type=video`)
        .then(response => response.json())
        .then(data => {
            const videoList = document.getElementById('video-list');
            videoList.innerHTML = '';
            data.items.forEach(video => {
                const videoElement = document.createElement('div');
                videoElement.classList.add('video');
                videoElement.innerHTML = `
                    <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                    <h3>${video.snippet.title}</h3>
                `;
                videoList.appendChild(videoElement);
            });
        });
}
