// take all element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// choose only advances javascript
let jsAdvance = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// take every duration video
.map(item => item.dataset.duration)

// change duration became int, change minute to second
.map(time => {
    // 10:30 -> [10, 30] split
    const parts = time.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// count all second
.reduce((total, second) => total + second);

// change format become hour minute second
const hour = Math.floor(jsAdvance / 3600);
let tmpjsAdvance = jsAdvance - hour * 3600;
const minute = Math.floor(tmpjsAdvance / 60);
const second = tmpjsAdvance - minute * 60;

// save in DOM
const elementDuration = document.querySelector('.total-durasi');
elementDuration.textContent = `${hour} Jam, ${minute} Menit, ${second} Detik.`
const totalVideos = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const elementTotalVideos = document.querySelector('.jumlah-video');
elementTotalVideos.textContent = `${totalVideos} Video.`;
console.log(second);