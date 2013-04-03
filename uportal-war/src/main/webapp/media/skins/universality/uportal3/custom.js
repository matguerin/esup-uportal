/*********************************************

Ouverture d'iframe

*********************************************/
(function($){
	$(document).ready(function(){
		$('iframe').each(function(){		
			var portletContent = $(this).parents().filter('div[id*=portletContent_]');
			var chanId = $(portletContent).attr('id').split('_')[1]
			var controls = $('#toolbar_'+chanId+' .up-portlet-controls');
			
			$('<a href="'+this.src+'" target="_blank" title="Ouvrir dans une nouvelle fen&ecirc;tre" id="openIframe_'+chanId+'" class="up-portlet-control openIframe"><span class="icon"></span><span class="label">Ouvrir</span></a>').appendTo($(controls));				
		});
	});
})(jQuery);