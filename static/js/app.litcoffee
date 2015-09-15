On doc ready...

	$ ->
		$('.show-lyrics').on('click', ->
			$(this).parents('.song-meta').children('.song-lyrics').toggle()
		)
