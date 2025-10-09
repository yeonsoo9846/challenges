// 카드가 n장 있습니다. 카드는 1부터 n까지 번호가 매겨져 있고, 1번 카드가 제일 위에 있습니다.
// 다음 동작을 카드가 1장 남을 때까지 반복합니다:
// 1. 제일 위의 카드를 버린다
// 2. 그 다음 제일 위의 카드를 제일 아래로 옮긴다
// 입력: n (카드 수)
// 출력: 마지막 남은 카드 번호

function solution1(n) {
    const que = Array.from({length: n}).map((_, i) => i + 1)
    while (que.length > 1) {
        que.shift();
        que.push(que.shift());
    }
    return que[0]
}

// 트럭 여러 대가 다리를 건너려고 합니다.
// 다리는 최대 bridge_length대의 트럭이 올라갈 수 있고,
// 다리가 견딜 수 있는 무게는 weight입니다.
//
// 규칙:
// - 트럭은 1초에 1칸씩 움직입니다
// - 다리 길이만큼 지나가야 완전히 건넙니다
// - 다리 위 트럭 무게 합이 weight를 초과하면 안 됩니다
//
// 입력:
// - bridge_length: 다리 길이
// - weight: 다리가 견딜 수 있는 무게
// - truck_weights: 트럭 무게 배열
//
// 출력: 모든 트럭이 다리를 건너는데 걸리는 최소 시간

function solution(bridge_length, weight, truck_weights) {
    let seconds = 0;
    const bridgeQue = Array.from({length: bridge_length}).fill(0);
    while (truck_weights.length > 0 || bridgeQue.reduce((sum, truck) => sum + truck, 0) > 0) {
        seconds++;
        bridgeQue.shift();
        if(truck_weights.length > 0) {
            const nextTruck = truck_weights[0];
            if(weight >= bridgeQue.reduce((sum, truck) => sum + truck, 0) + nextTruck) {
                bridgeQue.push(truck_weights.shift());
            } else {
                bridgeQue.push(0);
            }
        } else {
            bridgeQue.push(0)
        }
    }
    return seconds;
}

console.log(solution(2, 10, [7,4,5,6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])); // 110