$(document).ready(function () {
	if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    var vds = document.getElementById('vds');
    
    if (vds) {
        vds.src = "https://Vod.plaync.com/JM/stage_giran_0108.mp4";
        document.getElementById('vd').load();
    }
	}
});

