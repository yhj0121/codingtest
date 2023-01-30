function solution(new_id) {
  var answer = "";
  let changed_id = new_id.toLowerCase();
  changed_id = changed_id.replace(/[^\w_.-]/g, ""); //^=대괄호 안에 ^는아니다 \w=영어 알파벳, 숫자, 언더스코어(_) .=모든 문자열
  changed_id = changed_id.replace(/[.]{2,}/g, "."); //2개이상의 .을 .으로 바꾼다
  changed_id = changed_id.replace(/^[.]+/, ""); //처음이나 끝에있는 . 치우기
  changed_id = changed_id.replace(/^$/, "a");
  changed_id = changed_id.substring(0, 15);
  changed_id = changed_id.replace(/[.]+$/, "");
  return answer;
}

solution(1);
