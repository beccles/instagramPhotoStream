class HomeController < ApplicationController
  	def index
  		if params[:search]
			@instagram = Post.get_posts(params[:search])
		else
			@instagram = Post.get_posts('gopro')
		end
		@posts = Post.all;
	end
end
