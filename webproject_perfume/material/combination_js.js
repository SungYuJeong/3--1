var state = 0;
var arrNumber = new Array(); // 전체 재료 체크 확인



for (var i = 0; i < 68; i++) {
    arrNumber[i] = 0;
}
function drag(target, perfume) {      //드래그 시작시 호출 할 함수
    perfume.dataTransfer.setData('Text', target.id);
};

function drop_out(target, perfume) {      //드롭시 호출 할 함수
    var id = perfume.dataTransfer.getData('Text');
    target.appendChild(document.getElementById(id));
    perfume.preventDefault();
    var str = id;  // ID 로 부터 숫자만 추출
    str = str.replace(/[^0-9]/g, '');
    arrNumber[str] = 0;
    count--;
};

function drop_in(target, perfume) {      //드롭시 호출 할 함수
    
    var id = perfume.dataTransfer.getData('Text');
    target.appendChild(document.getElementById(id));
    perfume.preventDefault();
    var str = id;  // ID 로 부터 숫자만 추출
    str = str.replace(/[^0-9]/g, '');
  
    arrNumber[str] = 1;
  
    
};

function changeimage(id) {
   
    var count = 0; // 선택한 과일 갯수
    if (state == 0) {
        state = 1;
        alert("Materials were selected.");
        document.getElementById("image").src = "material/img/cologne_change.png";
        document.getElementById("image").style.zIndex = 8888;
        var check = new Array(); // 선택한 재료 확인
        for (var i = 0, j = 0; i < 68; i++) { // 선택한 재료는 1로 표기
            if (arrNumber[i] == 1) {
                check[j++] = i;
                count++;
            }
        }
       

        var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
        var row = document.createElement("TR");


        for (var i = 1; i <= count; i++) {


            eval("var td" + i + "= document.createElement('TD')");

            eval("var x" + i + " = document.createElement('IMG')");
            if (check[i - 1] < 37) {
                eval("x" + i + ".setAttribute('src','material/img/Floral/mat" + (check[i - 1] - 18) + ".png')");
            }
            else if (check[i - 1] < 55) {
                eval("x" + i + ".setAttribute('src','material/img/Fruity/mat" + (check[i - 1] - 36) + ".png')");
            }
            else {
                eval("x" + i + ".setAttribute('src','material/img/Other/mat" + (check[i - 1] - 54) + ".png')");
            }
            eval("x" + i + ".setAttribute('width','80')");
            eval("x" + i + ".setAttribute('height','78')");
            eval("x" + i + ".setAttribute('alt','"+ (check[i - 1]) + "')");
        }

        for (var i = 1; i <= count; i++) {
            eval("td" + i + ".appendChild(x" + i + ")");
            eval("row.appendChild(td" + i + ")");
        }


        tbody.appendChild(row);

    }
    else if (state == 1) {
        state = 0;
        document.getElementById("image").src = "material/img/cologne.png";
        document.getElementById("image").style.zIndex = 10;

        var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
        if (tbody.rows.length > 1)
            tbody.deleteRow(tbody.rows.length - 1);
        else
            alert("남은 열이 없습니다");
    }
};
