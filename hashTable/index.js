// 마라톤 대회에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열
// completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성하세요.
// ["leo", "kiki", "eden"]["eden", "kiki"]"leo"
function solution(participant, completion) {
    var answer = '';
    const playersCount = {};
    participant.forEach((player) => {
        if(playersCount[player]) {
            playersCount[player] += 1
        } else {
            playersCount[player] = 1;
        }
    })

    for(complete of completion) {
        if(playersCount[complete]) {
            playersCount[complete] -= 1
        } else {
            playersCount[complete] = 0;
        }
    }

    Object.entries(playersCount).forEach(([key,value]) => {
        if(value === 1) {
            answer = key
        }
    })



    return answer;
}


// 코니는 매일 다른 옷을 조합하여 입는 것을 좋아합니다. 코니가 가진 옷이 담긴 2차원 배열 clothes가 주어질 때,
// 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성하세요.
// [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]

function solution2(clothes) {
    var answer = 1;
    // 1. 의상 종류별로 개수 세기 (해시 사용!)
    const clothesLength = {

    }
    clothes.forEach(cloth => {
        clothesLength[cloth[1]] = clothesLength[cloth[1]] ? clothesLength[cloth[1]] + 1 : 1;
    })

    // 2. 각 종류별 (개수 + 1)을 곱하기
    Object.values(clothesLength).forEach(value => {
        answer *= (value + 1);
    })
    // 3. 마지막에 -1 (아무것도 안 입는 경우 제외)

    return answer - 1;
}