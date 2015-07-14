class Post < ActiveRecord::Base
		def self.get_posts(tag)
		Post.delete_all
		@instagram= Instagram.tag_recent_media(tag, {:count => 30})
		save_posts
	end
	def self.save_posts
		@instagram.each do |instagram|
			post = Post.new
			post.description = instagram.caption.text
			post.like_count = instagram.likes.count
			post.comment_count = instagram.comments.count
			post.image_url = instagram.images.standard_resolution.url
			post.thumbnail_url = instagram.images.thumbnail.url
			post.profile_image_url = instagram.user.profile_picture.gsub(/\[|\]/,'')
			post.user_name = instagram.user.username
			post.save
		end
	end
end
