auto.waitFor();
var height = device.height;
var width = device.width;
// 自适应屏幕点击
setScreenMetrics(width, height);
killOthersAlive();//关闭所有正在运行的脚本
// 悬浮窗变量
var w = floaty.window( <frame gravity="left">
        <text id="text" textColor="black" bg='#ffffff'>按键下可把我关了</text>
    </frame>);
floatW();
keyDetector();
// 按键监听功能
function keyDetector() {
    threads.start(function() { //在子进程中运行监听事件
        events.observeKey();
        events.on("key", function(code, event) {
            var keyCodeStr = event.keyCodeToString(code);
            console.log(code);
            console.log(keyCodeStr);
            if (keyCodeStr == "KEYCODE_VOLUME_DOWN") {
                toast("检测到音量下键，程序已结束。");
                //取消屏幕常亮
                device.cancelKeepingAwake();
                exit();
            }
        });
    });
}
//保持屏幕常亮
device.keepScreenDim(30 * 60 * 1000);
Mayi();
function Mayi(){
    launchApp("支付宝");
    sleep(4000);
    if(text("蚂蚁森林").exists()){
        click(966,775);sleep(2000);}

        
    while(text("最新动态").exists()){
    click(203,762);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    }
    click(272,736);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    }
    click(295,640);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(323,660);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(407,653);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(480,629);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(581,607);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(727,635);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(841,734);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(860,797);
    sleep(500);
    if(text("去种树").exists()){
        click(545,2002);
        sleep(500);
    } 
    click(979,1573);
    sleep(2000);
    while(text("返回蚂蚁森林 >").exists()){
        alert("任务做完了");}
    while(text("返回我的森林").exists()){
        alert("任务做完了");
       }
    }

    while(text("点击展开好友动态").exists()){
        click(203,762);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        }
        click(272,736);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        }
        click(295,640);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(323,660);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(407,653);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(480,629);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(581,607);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(727,635);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(841,734);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(860,797);
        sleep(500);
        if(text("去种树").exists()){
            click(545,2002);
            sleep(500);
        } 
        click(979,1573);
        sleep(2000);
        while(text("返回蚂蚁森林 >").exists()){
            alert("任务做完了");}
        while(text("返回我的森林").exists()){
            alert("任务做完了");
           }
        }
    exit();
        device.cancelKeepingAwake();
}







function floatW() {
    //悬浮窗不会自动关闭
    setInterval(() => {}, 1000);
    w.setPosition(0, height - 800);
    w.setSize(400, 300);
    //悬浮窗可调整大小
    w.setAdjustEnabled(true);
    //退出悬浮窗即结束脚本
    //w.exitOnClose();
    //长按悬浮窗内文字结束脚本
    w.text.longClick(() => {
        //取消屏幕常亮
        device.cancelKeepingAwake();
        toast("检测到长按悬浮窗文字，脚本终止");
        //try...catch把exit()函数的异常捕捉，则脚本不会立即停止，仍会运行几行后再停止
        try {
            exit();
        } catch (err) {}
        //直接exit()的话坚持不到return的时候
        return true;
    });
}

function killOthersAlive() {
    //获取全部正在运行的脚本引擎
    var allEngines = engines.all();
    //log(allEngines);
    for (var i = 0; i < allEngines.length; i++) {
        //停掉除了本脚本以外的正在运行的脚本
        if (allEngines[i] != engines.myEngine()) {
            allEngines[i].forceStop();
        }
    }
}
