
//call this function after page load
$(window).on('load', function () {
    loadrecentBlogPost(3);
});

function convertDate(dateTime){

	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	
	try
	{
		var dt = new Date(dateTime); 
		var day = dt.getDate(),
		month = dt.getMonth(),
		year = dt.getFullYear(),
		hours = dt.getHours(),
		minutes = dt.getMinutes(),
		seconds = dt.getSeconds();
		return (monthNames[month] + " " + day + ', ' + year);
	}
	catch(e)
	{
		return "";
	}
}

//this function will take of calling the API
function loadrecentBlogPost(numberOfPost) {
    $.ajax({
        type: 'GET',
        url: '/blog/latest-post?numberOfPost=' + numberOfPost,
        data:'',
        success: function (data) {
            if (data.success) {

                var postHtml = '';
                var posts = data.posts || [];
                if (posts && posts.length > 0) {
                    for (var i = 0; i < posts.length; i++) {
                        postHtml += `<div class="col-md-4">
                        <div class="each-blog-wrapper">
                            <div class="blog-thumb-profile">
                                <img src="${posts[i].featureImage}" class="img-fluid" alt="${posts[i].title}" title="${posts[i].title}">
                            </div>
                            <div class="blog-desc-wrap">
                                <ul class="blog-category-wrap">
                                    <li><i class="fas fa-calendar-alt"></i>${convertDate(posts[i].postDate)}</li>
                                    <li><i class="fas fa-user-tag"></i>${posts[i].categoryName}</li>
                                </ul>
                                <div class="blog-heading-wrap">
                                    <a href="${posts[i].slug}" title="${posts[i].title}">${posts[i].title}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;

                    }
                }

                $('#recent-blog-post-repeater').html(postHtml);
            }
        },
        error: function (req, error) {
            //log error
            console.log(req.responseText);
        },
        beforeSend: function (data) {
            //show loading message if any
            //$('#your_html_tag_id').text('Loading post...');
        }
    });
}
