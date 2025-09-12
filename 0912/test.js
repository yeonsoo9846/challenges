/*
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다.
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때,
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을
return하도록 solution 함수를 완성해주세요.
 */
function solution(score) {
    let ranks = [];
    const arrAvg = score.map((item,idx) => ({avg: (item[0] + item[1]) / 2, originIndex:idx})).sort((a,b) => b.avg - a.avg);
    let currentRank = 1;
    arrAvg.forEach((item, index) => {
        if (index > 0 && arrAvg[index].avg < arrAvg[index-1].avg) {
            currentRank = index + 1;
        }
        ranks[item.originIndex] = currentRank;
    })
    return ranks;
}

/*
프로그래머스 치킨은 치킨을 시켜먹으면 한 마리당 쿠폰을 한 장 발급합니다.
쿠폰을 열 장 모으면 치킨을 한 마리 서비스로 받을 수 있고,
서비스 치킨에도 쿠폰이 발급됩니다.
시켜먹은 치킨의 수 chicken이 매개변수로 주어질 때
받을 수 있는 최대 서비스 치킨의 수를 return하도록 solution 함수를 완성해주세요.
*/

function solution2(chicken) {
    let coupons = chicken;
    let serviceChi = 0;

    while (coupons >= 10) {
        const newService = Math.floor(coupons / 10);
        serviceChi += newService;
        coupons = (coupons % 10) + newService;
    }

    return serviceChi;

}