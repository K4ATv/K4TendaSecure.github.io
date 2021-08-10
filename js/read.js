var imageSection = document.querySelector(".instapost__image");
var likeHeart = document.querySelector(".like-heart");
var likeBtn = document.querySelector(".btn-like");
var commentInput = document.querySelector(".comment-input");
var commentSendBtn = document.querySelector(".btn-send-comment");
var ctrlLeft = document.querySelector(".ctrl-left");
var ctrlRight = document.querySelector(".ctrl-right");

commentInput.addEventListener("input", function (e) {
	if (e.target.value.length > 0) {
		commentSendBtn.setAttribute("disabled", "");
	} else {
		commentSendBtn.setAttribute("disabled", "disabled");
	}
});

likeBtn.addEventListener("click", function (e) {
	this.classList.toggle("dislike");
});

imageSection.addEventListener("dblclick", function (e) {
	likeHeart.classList.add("show");
	!likeBtn.classList.contains("dislike") && likeBtn.classList.add("dislike");
	setTimeout(function () {
		return likeHeart.classList.remove("show");
	}, 1000);
});

var nextIndex = 1;
var imgList = imageSection.querySelectorAll('img');
function chageImage(direction) {
	return function (e) {
		e.preventDefault();

		console.log(nextIndex);

		imgList.forEach(function (item) {
			return item.classList.remove('show');
		});
		var img = imageSection.querySelector(".img-" + nextIndex);
		img.classList.add('show');

		if (nextIndex === 0) {
			ctrlLeft.classList.add("hide");
		} else {
			ctrlLeft.classList.remove("hide");
		}

		if (nextIndex === imgList.length - 1) {
			ctrlRight.classList.add("hide");
		} else {
			ctrlRight.classList.remove("hide");
		}

		if (direction === 0) {
			--nextIndex;
			if (nextIndex < 0) {
				nextIndex = 1;
			}
		} else if (direction === 1) {
			++nextIndex;
			if (nextIndex > imgList.length - 1) {
				nextIndex = imgList.length - 2;
			}
		}
	};
}

const url='https://meme-api.herokuapp.com/gimme';
function GetData() {
    var xhr; 
    if (window.XMLHttpRequest) 
        xhr = new XMLHttpRequest(); 
    else if (window.ActiveXObject) 
        xhr = new ActiveXObject("Msxml2.XMLHTTP");
    else 
        throw new Error("Ajax is not supported by your browser");
    

    xhr.onreadystatechange = function () {
        if (xhr.readyState < 4)
            document.getElementById('image').alt = "Loading...";
        else if (xhr.readyState === 4) {
            if (xhr.status == 200 && xhr.status < 300)
            {
                var json = JSON.parse(xhr.responseText);
                document.getElementById('image').src = json.preview[json.preview.length-1];
                document.getElementById('redlink').href = "https://www.reddit.com/r/"+json.subreddit;
                document.getElementById('redicon').href = "https://www.reddit.com/r/"+json.subreddit;
                document.getElementById('redlink').innerHTML = json.subreddit;
                document.getElementById('upvote').innerHTML = json.ups;
                document.getElementById('ago').innerHTML = Math.floor(Math.random() * 59) + 1;
                document.getElementById('comments').innerHTML = Math.floor(Math.random() * 1500) + 500;
            } 
        }
    } 
    xhr.open('GET', url);
    xhr.send(null);
}

GetData()