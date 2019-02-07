	var wavesurfer = WaveSurfer.create({
		container: '#audiowave',
		waveColor: '#fff',
		progressColor: '#008000',
		barWidth: 1,
		barGap: 1,
		cursorColor: '#fe5800',
		height: 237,
		barHeight: .7,
	});

	wavesurfer.load('mp3/music-clip.mp3');

	wavesurfer.on('audioprocess', function () {
		var clipCurrentTime = wavesurfer.getCurrentTime();
		document.getElementById('cliptime').innerHTML = formatSecondsAsTime(clipCurrentTime);

		var clipLength = wavesurfer.getDuration();
		var cldiv = Math.floor(clipLength/3);

		$(document).ready(function($){
			if((cldiv*2) < clipCurrentTime ) {
				$('#cliptime').addClass('half');

			} else {
				$('#cliptime').removeClass('half');
			}
		});

	});

	function formatSecondsAsTime(secs) {
		var hr  = Math.floor(secs / 3600);
		var min = Math.floor((secs - (hr * 3600))/60);
		var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

		if (min < 10){
		min = "0" + min;
		}
		if (sec < 10){
		sec  = "0" + sec;
		}

		return min + ':' + sec;
	}

	$(document).ready(function($){
		$('#cliptime').appendTo('wave wave');
	});

	wavesurfer.on('pause', function () {
		$('.wavesurfer-icon').addClass('fa-play');
		$('.wavesurfer-icon').removeClass('fa-pause');
	});

		wavesurfer.on('play', function () {
			$('.wavesurfer-icon').addClass('fa-pause')
			$('.wavesurfer-icon').removeClass('fa-play')
		});
