
let fakeResponseData = {
	"playCount": 560100,
	"favoriteCount": 5998,
	"private": false,
	"questions": [{ "question": "Correct", "answers": ["Correct", "Correct", "Correct", "Correct"], "correctAnswers": ["Correct"], "timeLimit": "1000", "random": true, "number": 1 }],
	"_id": "5c5d06a7deebc70017245da7",
	"title": "Flags of the World",
	"author": "Ben",
	"desc": "Take a trip around the world and see if you can match these flags to their corresponding countries.",
	"coverImage": { "url": "https://res.cloudinary.com/blooket/image/upload/v1549600422/zw9j73xms06snp49zctw.jpg", "id": "zw9j73xms06snp49zctw" },
	"date": "2019-02-08T04:54:37.876Z",
	"__v": 0,
	"verified": true
}
let a = function (xhr) {
	let proto = xhr.prototype;
	let _open = proto.open;
	let _addEventListener = proto.addEventListener;

	proto.open = function () {
		if (arguments[1].includes("/api/games")) {
			arguments[1] = "data:application/json," + JSON.stringify(fakeResponseData)
		}
		_open.apply(this, arguments);
	}
}
function modifyQuestions() { a(XMLHttpRequest); }

//styles__headerRight___1bkCl-camelCase

function rigRngBox() {
	let input = document.createElement("input");
	input.type = "number";
	input.max = 0.999;
	input.min = 0.001;
	input.step = 0.001;
	input.value = 0.5;
	input.id = "lolinput";
	document.getElementById("app").children[0].children[0].children[0].children[2].appendChild(input);

	Math.random = function() {
		return input.value;
	}

	let interval = setInterval(()=>{
		if(!document.getElementById("lolinput")) {
			clearInterval(interval);
			rigRngBox(); // We got deleted from page change
		}
	}, 100);
}

modifyQuestions();
rigRngBox();
