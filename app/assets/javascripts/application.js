// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .

function display_modal(image_url, profile_image_url, user_name_text, description_text, like_count, comment_count) {
	
	$("#detail_modal").modal('show');

	var image = new Image();
	image.src = image_url;
	image.id = "modal_image";

	var profile_image = new Image();
	profile_image.src = profile_image_url;
	profile_image.id = "modal_profile_image";

	var user_name = document.createElement("p");
	user_name.setAttribute("id", "modal_user_name");
	user_name.textContent = user_name_text;

	var description = document.createElement("p");
	description.setAttribute("id", "modal_description");
	description.setAttribute("class", "image_data");
	description.textContent = description_text;

	var likes = document.createElement("p");
	likes.setAttribute("id", "modal_like");
	likes.textContent = like_count;

	var comments = document.createElement("p");
	comments.setAttribute("id", "modal_comment");
	comments.textContent = comment_count;

	if ($('#modal_image').length > 0) {
    	$('#modal_image').remove();
	}
	$( "#modal_image_div" ).append(image);

	if ($('#modal_profile_image').length > 0) {
    	$('#modal_profile_image').remove();
	}

	if ($('#modal_user_name').length > 0) {
    	$('#modal_user_name').remove();
	}

	if ($('#modal_description').length > 0) {
    	$('#modal_description').remove();
	}

	if ($('#modal_like').length > 0) {
    	$('#modal_like').remove();
	}

	if ($('#modal_comment').length > 0) {
    	$('#modal_comment').remove();
	}

	$('#modal_image_div').append(image);
	$('#modal_profile_image_div').append(profile_image);
	$('#modal_user_name_div').append(user_name);
	$('#modal_description_div').append(description);
	$('#modal_like_div').append(likes);
	$('#modal_comment_div').append(comments);
}


