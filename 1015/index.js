// 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.
// 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고
// 연속해서 같은 발음을 하는 것을 어려워합니다. 문자열 배열 babbling이 매개변수로 주어질 때,
// 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
// ["aya", "yee", "u", "maa"]	// 1
function solution(babbling) {
    let count = 0;
    const canTels = ["aya", "ye", "woo", "ma"];
    for (let word of babbling) {
        let hasDouble = canTels.some(tel => word.includes(tel + tel));
        if(hasDouble) continue;
        for(let tel of canTels) {
            word = word.replaceAll(tel, "");  // 이제 빈 문자열 OK
        }
        if(word === "") count++;
    }
    return count;
}


// 슈퍼  게임 개발자 오렐리는 큰 고민에 빠졌다. 그녀가 만든 프랜즈 오천성이 대성공을 거뒀지만, 요즘 신규 사용자의 수가 급감한 것이다. 원인은 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것이 문제였다.
//
// 이 문제를 어떻게 할까 고민 한 그녀는 동적으로 게임 시간을 늘려서 난이도를 조절하기로 했다. 역시 슈퍼 개발자라 대부분의 로직은 쉽게 구현했지만, 실패율을 구하는 부분에서 위기에 빠지고 말았다. 오렐리를 위해 실패율을 구하는 코드를 완성하라.
//
// 실패율은 다음과 같이 정의한다.
// 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
//
// 제한사항


function solution(N, stages) {
    const failRates = [];
    let totalPlayers = stages.length;

    // 각 스테이지에 머문 사람 수 카운트
    const stageCount = {};
    for(let stage of stages) {
        stageCount[stage] = (stageCount[stage] || 0) + 1;
    }

    for (let i = 1; i <= N; i++) {
        const failRate = stageCount[i] ? (stageCount[i] / totalPlayers) : 0;
        failRates.push({stage: i, rate: failRate});
        totalPlayers -= (stageCount[i] || 0);
    }

    failRates.sort((a, b) => {
        if(b.rate === a.rate) return a.stage - b.stage;
        return b.rate - a.rate;
    });

    return failRates.map(item => item.stage);
}


// * 는 점수의 2배
// #은 점수의 -2배
// s, d, t 는 일반, 제곱, 세제곱
// 1S2D*3T	37
function solution(dartResult) {
    const scores = [];  // 최종 점수를 바로 저장
    let temp = '';

    for(let char of dartResult) {
        // 숫자 모으기
        if(!isNaN(char) && char !== ' ') {
            temp += char;
        }
        // S, D, T 처리
        else if(['S', 'D', 'T'].includes(char)) {
            let score = Number(temp);

            if(char === 'S') score = score ** 1;
            if(char === 'D') score = score ** 2;
            if(char === 'T') score = score ** 3;

            scores.push(score);  // 계산된 점수 저장
            temp = '';
        }
        // * 처리 (스타상)
        else if(char === '*') {
            scores[scores.length - 1] *= 2;  // 현재 점수 2배
            if(scores.length >= 2) {
                scores[scores.length - 2] *= 2;  // 이전 점수도 2배
            }
        }
        // # 처리 (아차상)
        else if(char === '#') {
            scores[scores.length - 1] *= -1;  // 현재 점수 마이너스
        }
    }

    return scores.reduce((a, b) => a + b, 0);  // 합계
}
solution('1S2D*3T');