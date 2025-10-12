
// n개의 노드가 있는 그래프가 있습니다. 각 노드는 1부터 n까지 번호가 적혀있습니다. 1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.
//
// 노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.
//
// 제한사항
// 노드의 개수 n은 2 이상 20,000 이하입니다.
// 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
// vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.


function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);

    // 간선 정보로 그래프 채우기
    for (let [a, b] of edge) {
        graph[a].push(b);  // a에 b 추가
        graph[b].push(a);  // b에 a 추가 (양방향!)
    }

    const queue =  [1];
    const visited = Array.from({length: n + 1}).fill(false);
    const distance = Array.from({length: n + 1}).fill(0);

    while(queue.length > 0) {
        const current = queue.shift();

        for (let next of graph[current]) {
            if (!visited[next]) {
                visited[next] = true
                distance[next] = distance[current] + 1;
                queue.push(next);
            }
        }
    }

    return distance.filter(item => item === Math.max(...distance)).length;
}



//철수와 연결된 모든 친구의 수를 세어라!
//
// 친구 관계:
// 철수(1) - 영희(2)
// 철수(1) - 민수(3)
// 영희(2) - 지수(4)
//
// 입력값 4, [[1,2], [1,3], [2,4]]
// 답: 3명 (영희, 민수, 지수)

function countFriends(n, edges) {
    const graph = Array.from({length: n + 1}).map(() => []);
    for (let [a,b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const que = [1];
    const visited = Array.from({length: n + 1}).fill(false);

    visited[1] = true;

    let count = 0;

    while( que.length > 0) {
        const current = que.shift();
        for ( let next of graph[current]) {
            if(!visited[next]) {
                visited[next] = true;
                count++;
                que.push(next);
            }
        }

    }

    console.log(count)
    return count;
}

countFriends(4, [[1,2], [1,3], [2,4]])
