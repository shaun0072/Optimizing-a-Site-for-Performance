$('.image-grid img').on('click', function() {
	var html = '<div class="reveal-modal-bg" style="display:block;"><div id="photo1-1" class="reveal-modal open" data-reveal aria-labelledby="modalTitle" aria-hidden="false" role="dialog" style="display: block; opacity: 1; visibility: visible; top:100px;"><h2 id="modalTitle">Photo</h2><img src="img/photos/largerPhotos/';
		html += $(this).parent().attr('data-reveal-id');
		html += '.jpg"><div class="info"><img src="';
		html += $(this).parent().siblings('.info').find('img').attr('src');
		html += '"class="avatar"><span class="attribution">Photo by <b>Werner Bechtelar</b></span></div><a class="close-reveal-modal" aria-label="Close">&#215;</a></div></div>';
	$('body').append(html).slideDown();
});//end click

$('body').on('click', '.close-reveal-modal', function() {
	$('.reveal-modal-bg').hide();
});//end click
