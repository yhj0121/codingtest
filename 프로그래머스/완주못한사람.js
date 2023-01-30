function solution(participant, completion) {
  var answer = "";
  participant = participant.sort();
  completion = completion.sort();
  let totalLength = participant.length;

  for (let i = 0; i <= totalLength; i++)
    if (participant[i] !== completion[i]) {
      return participant[i];
    }

  //똑같은 이름 나올 경우
  return participant[totalLength - 1];
}
