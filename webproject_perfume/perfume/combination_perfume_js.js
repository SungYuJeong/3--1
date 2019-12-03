var state = 0;
function drag(target, perfume) {		//드래그 시작시 호출 할 함수
	perfume.dataTransfer.setData('Text', target.id);
};
function drop(target, perfume) {		//드롭시 호출 할 함수
	var id = perfume.dataTransfer.getData('Text');
	target.appendChild(document.getElementById(id));
	perfume.preventDefault()
};
function changeimages() {

	if (state == 0) {
		state = 1;

		document.getElementById("images").src = "perfume/cologne_change.png";
		document.getElementById("images").style.zIndex = 8888;


	}
	else if (state == 1) {
		state = 0;
		document.getElementById("images").src = "perfume/cologne.png";
		document.getElementById("images").style.zIndex = 10 ;


	}
}

