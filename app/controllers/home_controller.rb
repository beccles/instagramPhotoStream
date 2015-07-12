class HomeController < ApplicationController
  	def index
  		if params[:search]
			@instagram= Instagram.tag_recent_media(params[:search], {:count => 24})
		else
			@instagram = Instagram.tag_recent_media('gopro', {:count => 24})
		end
	end
end
