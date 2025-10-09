// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.

function solution(keyinput, board) {
    let initPosition = [0, 0];
    const boardWidth = Math.floor(board[0] / 2);
    const boardHeight = Math.floor(board[1] / 2);

    keyinput.forEach(item => {
        if(item === 'left') {
            if(initPosition[0] - 1 < -boardWidth) return;
            initPosition[0] += -1;
        } else if(item === 'right') {
            if(initPosition[0] + 1 > boardWidth) return;
            initPosition[0] += 1;
        } else if(item === 'up') {
            if(initPosition[1] + 1 > boardHeight) return;
            initPosition[1] += 1;
        } else if(item === 'down') {
            if(initPosition[1] - 1 < -boardHeight) return;
            initPosition[1] += -1;
        }
    });

    return initPosition;
}


// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.


function solution(n) {
    let count = 0;
    let num = 0;

    while (count < n) {
        num++;
        if (num % 3 !== 0 && !num.toString().includes('3')) {
            count++;
        }
    }

    return num;
}


// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
    let count = 0;
    let resultString = A;

    let arrA = A.split('');

    while(count < arrA.length && arrA.join("") !== B) {
        arrA.unshift(arrA.pop());
        count++;
    }

    return count === arrA.length ? -1 : count
}  