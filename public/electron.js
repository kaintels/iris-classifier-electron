const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const url = require('url');

/** 메인 창 생성 */
function createWindow() {

    /** 기본 데스크톱 앱 사이즈 설정 */
    const win = new BrowserWindow({
        width:720,
        height:720,
        webPreferences: {
            webSecurity: false
        }
    });

    /*
     * 개발모드일 경우 개발자도구 자동 열기
     * - 적용시키려면, yarn add electron-is-dev 를 먼저 실행해주세요.
     */
    // if (isDev) {
    //   win.webContents.openDevTools();
    // }
    /** 시작 포인트 실행 */
    win.loadFile("./build_react/index.html");
}

/* Electron =====================================================*/

/** 초기화가 끝나게 되면 실행 */
app.on('ready', () => {
    // 메인 창 생성
    const result = require('child_process').spawn('java', [ '-jar' , "./resources/spring-boot-0.0.1-SNAPSHOT.jar"]);
// 3. stdout의 'data'이벤트리스너로 실행결과를 받는다.


    result.stdout.on('data', function(data) {
        console.log(data.toString());
    });

// 4. 에러 발생 시, stderr의 'data'이벤트리스너로 실행결과를 받는다.
    result.stderr.on('data', function(data) {
        console.log(data.toString());
    });
    function sleep(ms) {
        const wakeUpTime = Date.now() + ms;
        while (Date.now() < wakeUpTime) {}
    }

    sleep(1000);
    createWindow();
});

/** [생명주기] 모든 창이 닫히면 자동으로 앱 종료 */
app.on('window-all-closed', () => {
    app.quit();
});