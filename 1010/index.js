// 과일 장수가 사과를 팔려고 합니다. 사과는 1점부터 k점까지의 점수로 분류되며, k점이 최상품입니다.
// 사과 m개를 한 상자에 담아 포장합니다. 상자에 담긴 사과 중 가장 낮은 점수가 p점이면, 이 상자의 가격은 p × m입니다.
// 과일 장수가 가지고 있는 사과들의 점수가 주어질 때, 최대 수익을 구하세요.
// 제한사항:
//
// 3 ≤ k ≤ 9
// 3 ≤ m ≤ 10
// 7 ≤ 사과 개수 ≤ 1,000,000
// 남는 사과는 버립니다
function solution(k, m, apple) {

    let point = 0;
    const boxes= [];
    const sortedApple = apple.sort((a,b) => b-a);
    let currentBoxNum = 0;
    sortedApple.forEach((item,idx) => {
        if(!boxes[currentBoxNum]) {
            boxes[currentBoxNum] = [];
        }
        if(boxes[currentBoxNum].length < m) {
            boxes[currentBoxNum].push(item);
        } else {
            currentBoxNum++;
            boxes[currentBoxNum] = [];
            boxes[currentBoxNum].push(item);
        }
    })

    boxes.forEach((box) => {
        if(box.length === m) {
            point += box[box.length - 1] * m;
        }
    })
    return point
}

solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])


//두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다.
// 예시:
//
// X = 100, Y = 2345 → 공통 숫자 없음 → 짝꿍 = "-1"
// X = 100, Y = 203045 → 공통 숫자 0 두 개 → 짝꿍 = "00"
// X = 100, Y = 123450 → 공통 숫자 0 두 개, 1 한 개 → 짝꿍 = "100"
// X = 12321, Y = 42531 → 공통 숫자 1, 2, 3 각 한 개씩 → 짝꿍 = "321"
//
// 제한사항:
//
// 3 ≤ X, Y의 자릿수 ≤ 3,000,000
// 공통 숫자가 없으면 "-1" 리턴
// 짝꿍이 0으로만 구성되면 "0" 리턴

function solution2(X, Y) {
    let answer = '';
    const countX = Array.from({length: 10}, () => 0);
    const countY = Array.from({length: 10}, () => 0);

    for(let char of X) {
        countX[char]++;
    }
    for(let char of Y) {
        countY[char]++;
    }

    for(let i = 0; i < 10; i++) {
        const count = Math.min(countX[i], countY[i]);
        answer += String(i).repeat(count);
    }
    if(answer === '') return '-1';
    if(answer === '0') return '0';
    return answer.split('').reverse().join('');
}

//머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서만 말할 수 있습니다.
// 제한사항:
//
// 연속해서 같은 발음을 하는 것은 불가능합니다
//
// "ayaaya"는 발음 불가능 ("aya"가 연속)
// "ayaye"는 발음 가능 ("aya" + "ye")
//
//
// 발음할 수 있는 단어의 개수를 return 하세요

function solution2(babbling) {
    let canTel = [ "aya", "ye", "woo", "ma" ];
    let count = 0;

    for ( let item of babbling) {

        let hasDouble = false;
        for (let item2 of canTel) {
            if(item.includes(item2 + item2)) {
                hasDouble = true;
                break;
            }
        }
        if(hasDouble) continue;

        for( let item2 of canTel) {
            if(item.includes(item2)) {
                item = item.replaceAll(item2,'');
            }
        }
        if(item.trim() === '') {
            count++;
        }
    }
    return count;
}

solution2(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])


//숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것의 개수를 return 하세요.
// 예시:
//
// t = "3141592", p = "271"
//
// 부분문자열: "314", "141", "415", "159", "592"
// 271보다 작거나 같은 것: "141", "159" → 2개
//
//
// t = "500220839878", p = "7"
//
// 부분문자열: "5", "0", "0", "2", "2", "0", "8", "3", "9", "8", "7", "8"
// 7보다 작거나 같은 것: "5", "0", "0", "2", "2", "0", "3" → 7개

function solution3(t, p) {
    let length = p.length;
    let count = 0;

    for(let i = 0; i < t.length; i++) {
        let num = '';
        num += t.slice(i,i+length);

        if(num.length === length && parseInt(num) <= parseInt(p)) {
            count++;
        }

    }

    return count;
}

solution3('500220839878','7');


//길이가 같은 두 개의 큐가 주어집니다. 하나의 큐를 골라 원소를 추출(pop)하고, 추출된 원소를 다른 큐에 집어넣는(insert) 작업을 통해 각 큐의 원소 합이 같도록 만들려고 합니다.
// 이때 필요한 작업의 최소 횟수를 return 하세요. 단, 어떻게 해도 각 큐의 원소 합을 같게 만들 수 없는 경우 -1을 return 합니다.

function solution4(queue1, queue2) {
    let count = 0;
    let sum1 = queue1.reduce((acc, item) => acc + item, 0);
    let sum2 = queue2.reduce((acc, item) => acc + item, 0);

    const totalSum = sum1 + sum2;
    if(totalSum % 2 !== 0) return -1;

    const maxTries = queue1.length * 4;  // ✅ 더 안전

    while(sum1 !== sum2 && count < maxTries) {
        if(sum1 > sum2) {
            const val = queue1.shift()
            queue2.push(val);
            sum1 -= val;
            sum2 += val;
        } else {
            const val = queue2.shift()
            queue1.push(val);
            sum1 += val;
            sum2 -= val;
        }
        count++;
    }
    console.log(count)
    return count;
}

solution4([3, 2, 7, 2],[4, 6, 5, 1]);