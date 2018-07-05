function setCopyBtn() {
    $(".CopyToClipboard").each(function() {
        var t = new ZeroClipboard.Client;
        t.setHandCursor(!0),
        t.addEventListener("load", function(t) {}),
        t.addEventListener("mouseOver", function(t) {
            var e = t.movie.parentNode.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML;
            e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"),
            t.setText(e)
        }),
        t.addEventListener("complete", function(t, e) {
            alert("代码已经复制到你的剪贴板。")
        }),
        t.glue(this, this.parentNode)
    })
}
function m_over_m(t, e) {
    __mm_over = !0,
    showMedalInfo(t.target, e)
}
function m_out_m() {
    __mm_over = !1,
    hideMedalInfo()
}
function showMedalInfo(t, e) {
    __mm_intro && (document.body.removeChild(__mm_intro),
    __mm_intro = null);
    var i = ""
      , s = $(t).attr("src")
      , n = ""
      , o = "";
    s.indexOf("zhuanlandaren") > -1 ? (n = "专栏达人",
    o = "授予成功创建个人博客专栏的用户。专栏中添加五篇以上博文即可点亮！撰写博客专栏浓缩技术精华，专栏达人就是你！") : s.indexOf("chizhiyiheng") > -1 ? (n = "持之以恒",
    o = "授予每个自然月内发布4篇或4篇以上原创或翻译IT博文的用户。不积跬步无以至千里，不积小流无以成江海，程序人生的精彩需要坚持不懈地积累！") : s.indexOf("weiruanmvp") > -1 ? (n = "微软MVP",
    o = "授予通过CSDN博客平台积极分享微软相关技术知识和专业技能，并做出突出贡献的用户。") : s.indexOf("bokezhixing") > -1 && (n = "博客之星",
    o = '授予通过"CSDN博客之星评选"中脱颖而出的十大博客之星称号的用户。'),
    i += "<div  style='  z-index:99999 ; left: 15%;  top: -9px;  position: absolute;  width: 0;  height: 0;  border-left: 10px solid transparent;  border-right: 10px solid transparent;  border-bottom: 8px solid #EAEAEA; '></div>",
    i += "<dl onmouseover='__mm_over=true;' onmouseout='m_out_m();'>",
    i += "<dt><img src='" + s.replace(".png", "") + "middle.png' /></dt>",
    i += "<dd><strong>" + n + "</strong>" + o + "</dd>",
    i += "</dl>",
    __mm_intro = document.createElement("div"),
    __mm_intro.className = "medal_intro";
    var a = $(t).position()
      , r = a.left - 46;
    r < 0 && (r = 0),
    __mm_intro.style.left = r + "px",
    __mm_intro.style.top = a.top + 32 + 4 + "px",
    __mm_intro.innerHTML = i,
    document.body.appendChild(__mm_intro)
}
function hideMedalInfo() {
    setTimeout(function() {
        !__mm_over && __mm_intro && (document.body.removeChild(__mm_intro),
        __mm_intro = null)
    }, 500)
}
function baidudatatemp(t) {
    var e = new RegExp("(" + highlight.join("|") + ")","gi")
      , i = /<[^>]*>/g
      , s = t["abstract"].replace(i, "")
      , n = t.dispTime
      , o = t.linkUrl
      , a = t.title.replace(i, "").replace(e, "<em>$1</em>")
      , r = '<div class="recommend-item-box " data-track-view=\'{"mod":"popu_' + ("skin3-template" == curSkin ? "387" : "614") + '","con":",' + o + ',searchFromBaidu1"}\' data-track-click=\'{"mod":"popu_' + ("skin3-template" == curSkin ? "387" : "614") + '","con":",' + o + ',searchFromBaidu_1"}\'>\t\t<h4 class="text-truncate">\t\t\t<a href="' + o + '" target="_blank" strategy="searchFromBaidu1">' + a + '</a>\t\t</h4>\t\t<p class="content">\t\t\t<a href="' + o + '" target="_blank" strategy="searchFromBaidu1">' + s + '</a>\t\t</p>\t\t<div class="info-box d-flex align-content-center">\t\t\t<p>\t\t\t\t<span class="date">' + n + "</span>\t\t\t</p>\t\t</div>\t</div>";
    return r
}
function trackByGraylog(t, e) {
    var i = window.location.protocol + "//statistic.csdn.net/";
    $.get(i + t, e)
}
function showResult(t) {
    for (var e = [], i = 0; i < t.length; i++)
        curentUrl.indexOf(t[i].linkUrl.split("?")[0]) === -1 && e.push(baidudatatemp(t[i]));
    for (var s = $(".recommend-box").children("div.recommend-item-box"), i = 1; i <= s.length; i += 2) {
        var n = e[i - 1] ? e[i - 1] : ""
          , o = e[i] ? e[i] : "";
        $(s[i]).after(n + o)
    }
    var a = s.length % 2 === 0 ? s.length : s.length - 1;
    if (s.length < e.length)
        for (var r = $(".recommend-box").children("div.recommend-item-box").last(), i = e.length; i > a; i--)
            r.after(e[i])
}
function ToolMeau(t) {
    this.posType = t && t.posType ? t.posType : "left",
    this.posReference = t && t.posReference ? t.posReference : $("main"),
    this.toolBox = $("div.tool-box"),
    this.toolBox.interval = t && t.interval ? t.interval : 16,
    this.toolBox.width = this.toolBox.width(),
    this.fixTop = t.fixTop ? t.fixTop : 170,
    this.fixTop += 80,
    this.initPos(),
    this.init()
}
function loginbox() {
    var t = document.domain;
    document.domain = "csdn.net";
    var e = $("#loginWrap");
    e.html('<iframe src="https://passport.csdn.net/account/loginbox?service=' + blogUrl + "pheweb/reload/loginReload&from=" + blog_address + '" frameborder="0" height="600" width="400" scrolling="no"></iframe>'),
    $(".mask-dark").show(),
    $("#loginWrap").show(),
    $(".mask-dark").one("click", function() {
        $(".mask-dark").hide(),
        $("button.pulllog-login").removeClass("show");
        var e = $("#loginWrap");
        return document.domain = t,
        setTimeout(function() {
            e.hide()
        }, 200),
        !1
    })
}
var a, dp = {
    sh: {
        Toolbar: {},
        Utils: {},
        RegexLib: {},
        Brushes: {},
        Strings: {
            AboutDialog: '<html><head><title>About...</title></head><body class="dp-about"><table cellspacing="0"><tr><td class="copy"><p class="title">dp.SyntaxHighlighter</div><div class="para">Version: {V}</p><p><a href="http://www.dreamprojections.com/syntaxhighlighter/?ref=about" target="_blank">http://www.dreamprojections.com/syntaxhighlighter</a></p>&copy;2004-2007 Alex Gorbatchev.</td></tr><tr><td class="footer"><input type="button" class="close" value="OK" onClick="window.close()"/></td></tr></table></body></html>'
        },
        ClipboardSwf: "https://csdnimg.cn/public/highlighter/ZeroClipboard.swf",
        Version: "1.5.1"
    }
};
dp.SyntaxHighlighter = dp.sh,
dp.sh.Toolbar.Commands = {
    ExpandSource: {
        label: "+ expand source",
        check: function(t) {
            return t.collapse
        },
        func: function(t, e) {
            t.parentNode.removeChild(t),
            e.div.className = e.div.className.replace("collapsed", "")
        }
    },
    ViewSource: {
        label: "view plain",
        func: function(t, e) {
            t = dp.sh.Utils.FixForBlogger(e.originalCode).replace(/</g, "&lt;"),
            e = window.open("", "_blank", "width=750, height=400, location=0, resizable=1, menubar=0, scrollbars=0"),
            e.document.write('<textarea style="width:99%;height:99%">' + t + "</textarea>"),
            e.document.close()
        }
    },
    CopyToClipboard: {
        label: "copy",
        check: function() {
            return null != window.clipboardData || null != dp.sh.ClipboardSwf
        },
        func: function(t, e) {
            if (t = dp.sh.Utils.FixForBlogger(e.originalCode).replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"),
            window.clipboardData)
                window.clipboardData.setData("text", t);
            else if (null != dp.sh.ClipboardSwf) {
                var i = e.flashCopier;
                null == i && (i = document.createElement("div"),
                e.flashCopier = i,
                e.div.appendChild(i)),
                i.innerHTML = '<embed src="' + dp.sh.ClipboardSwf + '" FlashVars="clipboard=' + encodeURIComponent(t) + '" width="0" height="0" type="application/x-shockwave-flash"></embed>'
            }
            alert("The code is in your clipboard now")
        }
    },
    PrintSource: {
        label: "print",
        func: function(t, e) {
            t = document.createElement("IFRAME");
            var i = null;
            t.style.cssText = "position:absolute;width:0px;height:0px;left:-500px;top:-500px;",
            document.body.appendChild(t),
            i = t.contentWindow.document,
            dp.sh.Utils.CopyStyles(i, window.document),
            i.write('<div class="' + e.div.className.replace("collapsed", "") + ' printing">' + e.div.innerHTML + "</div>"),
            i.close(),
            t.contentWindow.focus(),
            t.contentWindow.print(),
            alert("Printing..."),
            document.body.removeChild(t)
        }
    },
    About: {
        label: "?",
        func: function() {
            var t = window.open("", "_blank", "dialog,width=300,height=150,scrollbars=0")
              , e = t.document;
            dp.sh.Utils.CopyStyles(e, window.document),
            e.write(dp.sh.Strings.AboutDialog.replace("{V}", dp.sh.Version)),
            e.close(),
            t.focus()
        }
    }
},
dp.sh.Toolbar.Create = function(t) {
    var e = t.source.className
      , i = document.createElement("DIV");
    i.className = "tools",
    i.innerHTML = "<b>[" + e + "]</b> ";
    for (var s in dp.sh.Toolbar.Commands) {
        var n = dp.sh.Toolbar.Commands[s];
        "print" == n.label ? null != n.check && !n.check(t) || (i.innerHTML += '<span data-mod="popu_169"> <a href="#" class="' + s + '" title="' + n.label + '" onclick="dp.sh.Toolbar.Command(\'' + s + "',this);return false;\">" + n.label + "</a></span>") : "copy" == n.label ? null != n.check && !n.check(t) || (i.innerHTML += '<span data-mod="popu_168"> <a href="#" class="' + s + '" title="' + n.label + '" onclick="dp.sh.Toolbar.Command(\'' + s + "',this);return false;\">" + n.label + "</a></span>") : null != n.check && !n.check(t) || (i.innerHTML += '<a href="#" class="' + s + '" title="' + n.label + '" onclick="dp.sh.Toolbar.Command(\'' + s + "',this);return false;\">" + n.label + "</a>")
    }
    return i
}
,
dp.sh.Toolbar.Command = function(t, e) {
    for (var i = e; null != i && i.className.indexOf("dp-highlighter") == -1; )
        i = i.parentNode;
    null != i && dp.sh.Toolbar.Commands[t].func(e, i.highlighter)
}
,
dp.sh.Utils.CopyStyles = function(t, e) {
    e = e.getElementsByTagName("link");
    for (var i = 0; i < e.length; i++)
        "stylesheet" == e[i].rel.toLowerCase() && t.write('<link type="text/css" rel="stylesheet" href="' + e[i].href + '"></link>')
}
,
dp.sh.Utils.FixForBlogger = function(t) {
    return 1 == dp.sh.isBloggerMode ? t.replace(/<br\s*\/?>|&lt;br\s*\/?&gt;/gi, "\n") : t
}
,
dp.sh.RegexLib = {
    MultiLineCComments: new RegExp("/\\*[\\s\\S]*?\\*/","gm"),
    SingleLineCComments: new RegExp("//.*$","gm"),
    SingleLinePerlComments: new RegExp("#.*$","gm"),
    DoubleQuotedString: new RegExp('"(?:\\.|(\\\\\\")|[^\\""\\n])*"',"g"),
    SingleQuotedString: new RegExp("'(?:\\.|(\\\\\\')|[^\\''\\n])*'","g")
},
dp.sh.Match = function(t, e, i) {
    this.value = t,
    this.index = e,
    this.length = t.length,
    this.css = i
}
,
dp.sh.Highlighter = function() {
    this.noGutter = !1,
    this.addControls = !0,
    this.collapse = !1,
    this.tabsToSpaces = !0,
    this.wrapColumn = 80,
    this.showColumns = !0
}
,
dp.sh.Highlighter.SortCallback = function(t, e) {
    return t.index < e.index ? -1 : t.index > e.index ? 1 : t.length < e.length ? -1 : t.length > e.length ? 1 : 0
}
,
a = dp.sh.Highlighter.prototype,
a.CreateElement = function(t) {
    return t = document.createElement(t),
    t.highlighter = this,
    t
}
,
a.GetMatches = function(t, e) {
    for (var i = null; null != (i = t.exec(this.code)); )
        this.matches[this.matches.length] = new dp.sh.Match(i[0],i.index,e)
}
,
a.AddBit = function(t, e) {
    if (null != t && 0 != t.length) {
        var i = this.CreateElement("SPAN");
        if (t = t.replace(/ /g, "&nbsp;"),
        t = t.replace(/</g, "&lt;"),
        t = t.replace(/(\r?\n)|(\[BR\])/gm, "&nbsp;<br>"),
        null != e)
            if (/br/gi.test(t)) {
                t = t.split("&nbsp;<br>");
                for (var s = 0; s < t.length; s++)
                    i = this.CreateElement("SPAN"),
                    i.className = e,
                    i.innerHTML = t[s],
                    this.div.appendChild(i),
                    s + 1 < t.length && this.div.appendChild(this.CreateElement("BR"))
            } else
                i.className = e,
                i.innerHTML = t,
                this.div.appendChild(i);
        else
            i.innerHTML = t,
            this.div.appendChild(i)
    }
}
,
a.IsInside = function(t) {
    if (null == t || 0 == t.length)
        return !1;
    for (var e = 0; e < this.matches.length; e++) {
        var i = this.matches[e];
        if (null != i && t.index > i.index && t.index < i.index + i.length)
            return !0
    }
    return !1
}
,
a.ProcessRegexList = function() {
    for (var t = 0; t < this.regexList.length; t++)
        this.GetMatches(this.regexList[t].regex, this.regexList[t].css)
}
,
a.ProcessSmartTabs = function(t) {
    function e(t, e, i) {
        var s = t.substr(0, e);
        t = t.substr(e + 1, t.length),
        e = "";
        for (var n = 0; n < i; n++)
            e += " ";
        return s + e + t
    }
    function i(t, i) {
        if (t.indexOf(n) == -1)
            return t;
        for (var s = 0; (s = t.indexOf(n)) != -1; )
            t = e(t, s, i - s % i);
        return t
    }
    t = t.split("\n");
    for (var s = "", n = "\t", o = 0; o < t.length; o++)
        s += i(t[o], 4) + "\n";
    return s
}
,
a.SwitchToList = function() {
    var t = this.div.innerHTML.replace(/<(br)\/?>/gi, "\n").split("\n");
    if (1 == this.addControls && this.bar.appendChild(dp.sh.Toolbar.Create(this)),
    this.showColumns) {
        for (var e = this.CreateElement("div"), i = this.CreateElement("div"), s = 1; s <= 150; )
            s % 10 == 0 ? (e.innerHTML += s,
            s += (s + "").length) : (e.innerHTML += "&middot;",
            s++);
        i.className = "columns",
        i.appendChild(e),
        this.bar.appendChild(i)
    }
    for (s = 0,
    e = this.firstLine; s < t.length - 1; s++,
    e++) {
        i = this.CreateElement("LI");
        var n = this.CreateElement("SPAN");
        i.className = s % 2 == 0 ? "alt" : "",
        n.innerHTML = t[s] + "&nbsp;",
        i.appendChild(n),
        this.ol.appendChild(i)
    }
    this.div.innerHTML = ""
}
,
a.Highlight = function(t) {
    function e(t) {
        return t.replace(/^\s*(.*?)[\s\n]*$/g, "$1")
    }
    function i(t) {
        return t.replace(/\n*$/, "").replace(/^\n*/, "")
    }
    function s(t) {
        t = dp.sh.Utils.FixForBlogger(t).split("\n");
        for (var i = new RegExp("^\\s*","g"), s = 1e3, n = 0; n < t.length && s > 0; n++)
            if (0 != e(t[n]).length) {
                var o = i.exec(t[n]);
                null != o && o.length > 0 && (s = Math.min(o[0].length, s))
            }
        if (s > 0)
            for (n = 0; n < t.length; n++)
                t[n] = t[n].substr(s);
        return t.join("\n")
    }
    function n(t, e, i) {
        return t.substr(e, i - e)
    }
    var o = 0;
    if (null == t && (t = ""),
    this.originalCode = t,
    this.code = i(s(t)),
    this.div = this.CreateElement("DIV"),
    this.bar = this.CreateElement("DIV"),
    this.ol = this.CreateElement("OL"),
    this.matches = [],
    this.div.className = "dp-highlighter",
    this.div.highlighter = this,
    this.bar.className = "bar",
    this.ol.start = this.firstLine,
    null != this.CssClass && (this.ol.className = this.CssClass),
    this.collapse && (this.div.className += " collapsed"),
    this.noGutter && (this.div.className += " nogutter"),
    1 == this.tabsToSpaces && (this.code = this.ProcessSmartTabs(this.code)),
    this.ProcessRegexList(),
    0 == this.matches.length)
        this.AddBit(this.code, null);
    else {
        for (this.matches = this.matches.sort(dp.sh.Highlighter.SortCallback),
        t = 0; t < this.matches.length; t++)
            this.IsInside(this.matches[t]) && (this.matches[t] = null);
        for (t = 0; t < this.matches.length; t++) {
            var a = this.matches[t];
            null != a && 0 != a.length && (this.AddBit(n(this.code, o, a.index), null),
            this.AddBit(a.value, a.css),
            o = a.index + a.length)
        }
        this.AddBit(this.code.substr(o), null)
    }
    this.SwitchToList(),
    this.div.appendChild(this.bar),
    this.div.appendChild(this.ol)
}
,
a.GetKeywords = function(t) {
    return "\\b" + t.replace(/ /g, "\\b|\\b") + "\\b"
}
,
dp.sh.BloggerMode = function() {
    dp.sh.isBloggerMode = !0
}
,
dp.sh.HighlightAll = function(t, e, i, s, n, o) {
    function a() {
        for (var t = arguments, e = 0; e < t.length; e++)
            if (null != t[e]) {
                if ("string" == typeof t[e] && "" != t[e])
                    return t[e] + "";
                if ("object" == typeof t[e] && "" != t[e].value)
                    return t[e].value + ""
            }
        return null
    }
    function r(t, e) {
        for (var i = 0; i < e.length; i++)
            if (e[i] == t)
                return !0;
        return !1
    }
    function l(t, e, i) {
        t = new RegExp("^" + t + "\\[(\\w+)\\]$","gi");
        for (var s = null, n = 0; n < e.length; n++)
            if (null != (s = t.exec(e[n])))
                return s[1];
        return i
    }
    function h(t, e, i) {
        i = document.getElementsByTagName(i);
        for (var s = 0; s < i.length; s++)
            i[s].getAttribute("name") == e && t.push(i[s])
    }
    var c = []
      , d = null
      , u = {};
    if (h(c, t, "pre"),
    h(c, t, "textarea"),
    0 != c.length) {
        for (var p in dp.sh.Brushes)
            if (d = dp.sh.Brushes[p].Aliases,
            null != d)
                for (t = 0; t < d.length; t++)
                    u[d[t]] = p;
        for (t = 0; t < c.length; t++) {
            p = c[t];
            var g = a(p.attributes["class"], p.className, p.attributes.language, p.language);
            if (d = "",
            null != g && (g = g.split(":"),
            d = g[0].toLowerCase(),
            null != u[d])) {
                d = new dp.sh.Brushes[u[d]],
                p.style.display = "none",
                d.noGutter = null == e ? r("nogutter", g) : !e,
                d.addControls = null == i ? !r("nocontrols", g) : i,
                d.collapse = null == s ? r("collapse", g) : s,
                d.showColumns = null == o ? r("showcolumns", g) : o;
                var f = document.getElementsByTagName("head")[0];
                if (d.Style && f) {
                    var m = document.createElement("style");
                    if (m.setAttribute("type", "text/css"),
                    m.styleSheet)
                        m.styleSheet.cssText = d.Style;
                    else {
                        var b = document.createTextNode(d.Style);
                        m.appendChild(b)
                    }
                    f.appendChild(m)
                }
                d.firstLine = null == n ? parseInt(l("firstline", g, 1)) : n,
                d.source = p,
                d.Highlight(p.innerHTML),
                d.div.className += " bg_" + p.className,
                p.parentNode.insertBefore(d.div, p)
            }
        }
    }
}
,
dp.sh.Brushes.Xml = function() {
    this.CssClass = "dp-xml",
    this.Style = ""
}
,
dp.sh.Brushes.Xml.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Xml.Aliases = ["xml", "xhtml", "xslt", "html", "xhtml"],
dp.sh.Brushes.Xml.prototype.ProcessRegexList = function() {
    function t(t, e) {
        t[t.length] = e
    }
    var e = null
      , i = null;
    for (this.GetMatches(new RegExp("(&lt;|<)\\!\\[[\\w\\s]*?\\[(.|\\s)*?\\]\\](&gt;|>)","gm"), "cdata"),
    this.GetMatches(new RegExp("(&lt;|<)!--\\s*.*?\\s*--(&gt;|>)","gm"), "comments"),
    i = new RegExp("([:\\w-.]+)\\s*=\\s*(\".*?\"|'.*?'|\\w+)*|(\\w+)","gm"); null != (e = i.exec(this.code)); )
        null != e[1] && (t(this.matches, new dp.sh.Match(e[1],e.index,"attribute")),
        void 0 != e[2] && t(this.matches, new dp.sh.Match(e[2],e.index + e[1].length + e[0].substr(e[1].length).indexOf(e[2]),"attribute-value")));
    for (this.GetMatches(new RegExp("(&lt;|<)/*\\?*(?!\\!)|/*\\?*(&gt;|>)","gm"), "tag"),
    i = new RegExp("(?:&lt;|<)/*\\?*\\s*([:\\w-.]+)","gm"); null != (e = i.exec(this.code)); )
        t(this.matches, new dp.sh.Match(e[1],e.index + e[0].indexOf(e[1]),"tag-name"))
}
,
dp.sh.Brushes.Vb = function() {
    this.regexList = [{
        regex: new RegExp("'.*$","gm"),
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("^\\s*#.*","gm"),
        css: "preprocessor"
    }, {
        regex: new RegExp(this.GetKeywords("AddHandler AddressOf AndAlso Alias And Ansi As Assembly Auto Boolean ByRef Byte ByVal Call Case Catch CBool CByte CChar CDate CDec CDbl Char CInt Class CLng CObj Const CShort CSng CStr CType Date Decimal Declare Default Delegate Dim DirectCast Do Double Each Else ElseIf End Enum Erase Error Event Exit False Finally For Friend Function Get GetType GoSub GoTo Handles If Implements Imports In Inherits Integer Interface Is Let Lib Like Long Loop Me Mod Module MustInherit MustOverride MyBase MyClass Namespace New Next Not Nothing NotInheritable NotOverridable Object On Option Optional Or OrElse Overloads Overridable Overrides ParamArray Preserve Private Property Protected Public RaiseEvent ReadOnly ReDim REM RemoveHandler Resume Return Select Set Shadows Shared Short Single Static Step Stop String Structure Sub SyncLock Then Throw To True Try TypeOf Unicode Until Variant When While With WithEvents WriteOnly Xor"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-vb"
}
,
dp.sh.Brushes.Vb.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Vb.Aliases = ["vb", "vb.net"],
dp.sh.Brushes.Sql = function() {
    this.regexList = [{
        regex: new RegExp("--(.*)$","gm"),
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp(this.GetKeywords("abs avg case cast coalesce convert count current_timestamp current_user day isnull left lower month nullif replace right session_user space substring sum system_user upper user year"),"gmi"),
        css: "func"
    }, {
        regex: new RegExp(this.GetKeywords("all and any between cross in join like not null or outer some"),"gmi"),
        css: "op"
    }, {
        regex: new RegExp(this.GetKeywords("absolute action add after alter as asc at authorization begin bigint binary bit by cascade char character check checkpoint close collate column commit committed connect connection constraint contains continue create cube current current_date current_time cursor database date deallocate dec decimal declare default delete desc distinct double drop dynamic else end end-exec escape except exec execute false fetch first float for force foreign forward free from full function global goto grant group grouping having hour ignore index inner insensitive insert instead int integer intersect into is isolation key last level load local max min minute modify move name national nchar next no numeric of off on only open option order out output partial password precision prepare primary prior privileges procedure public read real references relative repeatable restrict return returns revoke rollback rollup rows rule schema scroll second section select sequence serializable set size smallint static statistics table temp temporary then time timestamp to top transaction translation trigger true truncate uncommitted union unique update values varchar varying view when where with work"),"gmi"),
        css: "keyword"
    }],
    this.CssClass = "dp-sql",
    this.Style = ""
}
,
dp.sh.Brushes.Sql.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Sql.Aliases = ["sql"],
dp.sh.Brushes.Ruby = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLinePerlComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp(":[a-z][A-Za-z0-9_]*","g"),
        css: "symbol"
    }, {
        regex: new RegExp("(\\$|@@|@)\\w+","g"),
        css: "variable"
    }, {
        regex: new RegExp(this.GetKeywords("alias and BEGIN begin break case class def define_method defined do each else elsif END end ensure false for if in module new next nil not or raise redo rescue retry return self super then throw true undef unless until when while yield"),"gm"),
        css: "keyword"
    }, {
        regex: new RegExp(this.GetKeywords("Array Bignum Binding Class Continuation Dir Exception FalseClass File::Stat File Fixnum Fload Hash Integer IO MatchData Method Module NilClass Numeric Object Proc Range Regexp String Struct::TMS Symbol ThreadGroup Thread Time TrueClass"),"gm"),
        css: "builtin"
    }],
    this.CssClass = "dp-rb",
    this.Style = ""
}
,
dp.sh.Brushes.Ruby.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Ruby.Aliases = ["ruby", "rails", "ror"],
dp.sh.Brushes.Python = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLinePerlComments,
        css: "comment"
    }, {
        regex: new RegExp("^\\s*@\\w+","gm"),
        css: "decorator"
    }, {
        regex: new RegExp("(['\"]{3})([^\\1])*?\\1","gm"),
        css: "comment"
    }, {
        regex: new RegExp('"(?!")(?:\\.|\\\\\\"|[^\\""\\n\\r])*"',"gm"),
        css: "string"
    }, {
        regex: new RegExp("'(?!')*(?:\\.|(\\\\\\')|[^\\''\\n\\r])*'","gm"),
        css: "string"
    }, {
        regex: new RegExp("\\b\\d+\\.?\\w*","g"),
        css: "number"
    }, {
        regex: new RegExp(this.GetKeywords("and assert break class continue def del elif else except exec finally for from global if import in is lambda not or pass print raise return try yield while"),"gm"),
        css: "keyword"
    }, {
        regex: new RegExp(this.GetKeywords("None True False self cls class_"),"gm"),
        css: "special"
    }],
    this.CssClass = "dp-py",
    this.Style = ""
}
,
dp.sh.Brushes.Python.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Python.Aliases = ["py", "python"],
dp.sh.Brushes.Plain = function() {
    this.regexList = []
}
,
dp.sh.Brushes.Plain.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Plain.Aliases = ["plain", "text", "txt"],
dp.sh.Brushes.Php = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("\\$\\w+","g"),
        css: "vars"
    }, {
        regex: new RegExp(this.GetKeywords("abs acos acosh addcslashes addslashes array_change_key_case array_chunk array_combine array_count_values array_diff array_diff_assoc array_diff_key array_diff_uassoc array_diff_ukey array_fill array_filter array_flip array_intersect array_intersect_assoc array_intersect_key array_intersect_uassoc array_intersect_ukey array_key_exists array_keys array_map array_merge array_merge_recursive array_multisort array_pad array_pop array_product array_push array_rand array_reduce array_reverse array_search array_shift array_slice array_splice array_sum array_udiff array_udiff_assoc array_udiff_uassoc array_uintersect array_uintersect_assoc array_uintersect_uassoc array_unique array_unshift array_values array_walk array_walk_recursive atan atan2 atanh base64_decode base64_encode base_convert basename bcadd bccomp bcdiv bcmod bcmul bindec bindtextdomain bzclose bzcompress bzdecompress bzerrno bzerror bzerrstr bzflush bzopen bzread bzwrite ceil chdir checkdate checkdnsrr chgrp chmod chop chown chr chroot chunk_split class_exists closedir closelog copy cos cosh count count_chars date decbin dechex decoct deg2rad delete ebcdic2ascii echo empty end ereg ereg_replace eregi eregi_replace error_log error_reporting escapeshellarg escapeshellcmd eval exec exit exp explode extension_loaded feof fflush fgetc fgetcsv fgets fgetss file_exists file_get_contents file_put_contents fileatime filectime filegroup fileinode filemtime fileowner fileperms filesize filetype floatval flock floor flush fmod fnmatch fopen fpassthru fprintf fputcsv fputs fread fscanf fseek fsockopen fstat ftell ftok getallheaders getcwd getdate getenv gethostbyaddr gethostbyname gethostbynamel getimagesize getlastmod getmxrr getmygid getmyinode getmypid getmyuid getopt getprotobyname getprotobynumber getrandmax getrusage getservbyname getservbyport gettext gettimeofday gettype glob gmdate gmmktime ini_alter ini_get ini_get_all ini_restore ini_set interface_exists intval ip2long is_a is_array is_bool is_callable is_dir is_double is_executable is_file is_finite is_float is_infinite is_int is_integer is_link is_long is_nan is_null is_numeric is_object is_readable is_real is_resource is_scalar is_soap_fault is_string is_subclass_of is_uploaded_file is_writable is_writeable mkdir mktime nl2br parse_ini_file parse_str parse_url passthru pathinfo readlink realpath rewind rewinddir rmdir round str_ireplace str_pad str_repeat str_replace str_rot13 str_shuffle str_split str_word_count strcasecmp strchr strcmp strcoll strcspn strftime strip_tags stripcslashes stripos stripslashes stristr strlen strnatcasecmp strnatcmp strncasecmp strncmp strpbrk strpos strptime strrchr strrev strripos strrpos strspn strstr strtok strtolower strtotime strtoupper strtr strval substr substr_compare"),"gmi"),
        css: "func"
    }, {
        regex: new RegExp(this.GetKeywords("and or xor __FILE__ __LINE__ array as break case cfunction class const continue declare default die do else elseif enddeclare endfor endforeach endif endswitch endwhile extends for foreach function include include_once global if new old_function return static switch use require require_once var while __FUNCTION__ __CLASS__ __METHOD__ abstract interface public implements extends private protected throw"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-c"
}
,
dp.sh.Brushes.Php.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Php.Aliases = ["php"],
dp.sh.Brushes.JScript = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("^\\s*#.*","gm"),
        css: "preprocessor"
    }, {
        regex: new RegExp(this.GetKeywords("abstract boolean break byte case catch char class const continue debugger default delete do double else enum export extends false final finally float for function goto if implements import in instanceof int interface long native new null package private protected public return short static super switch synchronized this throw throws transient true try typeof var void volatile while with"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-c"
}
,
dp.sh.Brushes.JScript.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.JScript.Aliases = ["js", "jscript", "javascript"],
dp.sh.Brushes.Java = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("\\b([\\d]+(\\.[\\d]+)?|0x[a-f0-9]+)\\b","gi"),
        css: "number"
    }, {
        regex: new RegExp("(?!\\@interface\\b)\\@[\\$\\w]+\\b","g"),
        css: "annotation"
    }, {
        regex: new RegExp("\\@interface\\b","g"),
        css: "keyword"
    }, {
        regex: new RegExp(this.GetKeywords("abstract assert boolean break byte case catch char class const continue default do double else enum extends false final finally float for goto if implements import instanceof int interface long native new null package private protected public return short static strictfp super switch synchronized this throw throws true transient try void volatile while"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-j",
    this.Style = ""
}
,
dp.sh.Brushes.Java.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Java.Aliases = ["java"],
dp.sh.Brushes.Delphi = function() {
    this.regexList = [{
        regex: new RegExp("\\(\\*[\\s\\S]*?\\*\\)","gm"),
        css: "comment"
    }, {
        regex: new RegExp("{(?!\\$)[\\s\\S]*?}","gm"),
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("\\{\\$[a-zA-Z]+ .+\\}","g"),
        css: "directive"
    }, {
        regex: new RegExp("\\b[\\d\\.]+\\b","g"),
        css: "number"
    }, {
        regex: new RegExp("\\$[a-zA-Z0-9]+\\b","g"),
        css: "number"
    }, {
        regex: new RegExp(this.GetKeywords("abs addr and ansichar ansistring array as asm begin boolean byte cardinal case char class comp const constructor currency destructor div do double downto else end except exports extended false file finalization finally for function goto if implementation in inherited int64 initialization integer interface is label library longint longword mod nil not object of on or packed pansichar pansistring pchar pcurrency pdatetime pextended pint64 pointer private procedure program property pshortstring pstring pvariant pwidechar pwidestring protected public published raise real real48 record repeat set shl shortint shortstring shr single smallint string then threadvar to true try type unit until uses val var varirnt while widechar widestring with word write writeln xor"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-delphi",
    this.Style = ""
}
,
dp.sh.Brushes.Delphi.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Delphi.Aliases = ["delphi", "pascal"],
dp.sh.Brushes.CSS = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("\\#[a-zA-Z0-9]{3,6}","g"),
        css: "value"
    }, {
        regex: new RegExp("(-?\\d+)(.\\d+)?(px|em|pt|:|%|)","g"),
        css: "value"
    }, {
        regex: new RegExp("!important","g"),
        css: "important"
    }, {
        regex: new RegExp(this.GetKeywordsCSS("ascent azimuth background-attachment background-color background-image background-position background-repeat background baseline bbox border-collapse border-color border-spacing border-style border-top border-right border-bottom border-left border-top-color border-right-color border-bottom-color border-left-color border-top-style border-right-style border-bottom-style border-left-style border-top-width border-right-width border-bottom-width border-left-width border-width border cap-height caption-side centerline clear clip color content counter-increment counter-reset cue-after cue-before cue cursor definition-src descent direction display elevation empty-cells float font-size-adjust font-family font-size font-stretch font-style font-variant font-weight font height letter-spacing line-height list-style-image list-style-position list-style-type list-style margin-top margin-right margin-bottom margin-left margin marker-offset marks mathline max-height max-width min-height min-width orphans outline-color outline-style outline-width outline overflow padding-top padding-right padding-bottom padding-left padding page page-break-after page-break-before page-break-inside pause pause-after pause-before pitch pitch-range play-during position quotes richness size slope src speak-header speak-numeral speak-punctuation speak speech-rate stemh stemv stress table-layout text-align text-decoration text-indent text-shadow text-transform unicode-bidi unicode-range units-per-em vertical-align visibility voice-family volume white-space widows width widths word-spacing x-height z-index"),"gm"),
        css: "keyword"
    }, {
        regex: new RegExp(this.GetValuesCSS("above absolute all always aqua armenian attr aural auto avoid baseline behind below bidi-override black blink block blue bold bolder both bottom braille capitalize caption center center-left center-right circle close-quote code collapse compact condensed continuous counter counters crop cross crosshair cursive dashed decimal decimal-leading-zero default digits disc dotted double embed embossed e-resize expanded extra-condensed extra-expanded fantasy far-left far-right fast faster fixed format fuchsia gray green groove handheld hebrew help hidden hide high higher icon inline-table inline inset inside invert italic justify landscape large larger left-side left leftwards level lighter lime line-through list-item local loud lower-alpha lowercase lower-greek lower-latin lower-roman lower low ltr marker maroon medium message-box middle mix move narrower navy ne-resize no-close-quote none no-open-quote no-repeat normal nowrap n-resize nw-resize oblique olive once open-quote outset outside overline pointer portrait pre print projection purple red relative repeat repeat-x repeat-y rgb ridge right right-side rightwards rtl run-in screen scroll semi-condensed semi-expanded separate se-resize show silent silver slower slow small small-caps small-caption smaller soft solid speech spell-out square s-resize static status-bar sub super sw-resize table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group teal text-bottom text-top thick thin top transparent tty tv ultra-condensed ultra-expanded underline upper-alpha uppercase upper-latin upper-roman url visible wait white wider w-resize x-fast x-high x-large x-loud x-low x-slow x-small x-soft xx-large xx-small yellow"),"g"),
        css: "value"
    }, {
        regex: new RegExp(this.GetValuesCSS("[mM]onospace [tT]ahoma [vV]erdana [aA]rial [hH]elvetica [sS]ans-serif [sS]erif"),"g"),
        css: "value"
    }],
    this.CssClass = "dp-css",
    this.Style = ""
}
,
dp.sh.Highlighter.prototype.GetKeywordsCSS = function(t) {
    return "\\b([a-z_]|)" + t.replace(/ /g, "(?=:)\\b|\\b([a-z_\\*]|\\*|)") + "(?=:)\\b"
}
,
dp.sh.Highlighter.prototype.GetValuesCSS = function(t) {
    return "\\b" + t.replace(/ /g, "(?!-)(?!:)\\b|\\b()") + ":\\b"
}
,
dp.sh.Brushes.CSS.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.CSS.Aliases = ["css"],
dp.sh.Brushes.CSharp = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("^\\s*#.*","gm"),
        css: "preprocessor"
    }, {
        regex: new RegExp(this.GetKeywords("abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach get goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed set short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual void while"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-c",
    this.Style = ""
}
,
dp.sh.Brushes.CSharp.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.CSharp.Aliases = ["c#", "c-sharp", "csharp"],
dp.sh.Brushes.Cpp = function() {
    this.regexList = [{
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp("^ *#.*","gm"),
        css: "preprocessor"
    }, {
        regex: new RegExp(this.GetKeywords("ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed"),"gm"),
        css: "datatypes"
    }, {
        regex: new RegExp(this.GetKeywords("break case catch class const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend goto inline mutable naked namespace new noinline noreturn nothrow register reinterpret_cast return selectany sizeof static static_cast struct switch template this thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while"),"gm"),
        css: "keyword"
    }],
    this.CssClass = "dp-cpp",
    this.Style = ""
}
,
dp.sh.Brushes.Cpp.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Cpp.Aliases = ["cpp", "c", "c++"],
dp.sh.Brushes.Objc = function() {
    var t = "ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM char bool short int __int32 __int64 __int8 __int16 long float double __wchar_t clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t __wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t id jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler sig_atomic_t size_t _stat __stat64 _stati64 terminate_function time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf va_list wchar_t wctrans_t wctype_t wint_t signed"
      , e = "break case catch class copy const __finally __exception __try const_cast continue private public protected __declspec default delete deprecated dllexport dllimport do dynamic_cast else enum explicit extern if for friend getter goto inline mutable naked namespace new nil NO noinline nonatomic noreturn nothrow NULL readonly readwrite register reinterpret_cast retain strong return SEL selectany self setter sizeof static static_cast struct super switch template thread throw true false try typedef typeid typename union using uuid virtual void volatile whcar_t while YES";
    this.regexList = [{
        regex: new RegExp(this.GetKeywords(t),"gm"),
        css: "keyword"
    }, {
        regex: new RegExp(this.GetKeywords(e),"gm"),
        css: "keyword"
    }, {
        regex: new RegExp("@\\w+\\b","g"),
        css: "keyword"
    }, {
        regex: new RegExp("[: ]nil","g"),
        css: "keyword"
    }, {
        regex: new RegExp("\\.\\w+","g"),
        css: "xcodeconstants"
    }, {
        regex: new RegExp(" \\w+(?=[:\\]])","g"),
        css: "vars"
    }, {
        regex: dp.sh.RegexLib.SingleLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.MultiLineCComments,
        css: "comment"
    }, {
        regex: dp.sh.RegexLib.DoubleQuotedString,
        css: "string"
    }, {
        regex: dp.sh.RegexLib.SingleQuotedString,
        css: "string"
    }, {
        regex: new RegExp('@"[^"]*"',"gm"),
        css: "string"
    }, {
        regex: new RegExp("\\d","gm"),
        css: "xcodenumber"
    }, {
        regex: new RegExp("^ *#.*","gm"),
        css: "xcodepreprocessor"
    }, {
        regex: new RegExp("\\w+(?= \\*)","g"),
        css: "keyword"
    }],
    this.CssClass = "dp-objc",
    this.Style = ".dp-objc .vars { color: #d00; }"
}
,
dp.sh.Brushes.Objc.prototype = new dp.sh.Highlighter,
dp.sh.Brushes.Objc.Aliases = ["objc"];
var ZeroClipboard = {
    version: "1.0.7",
    clients: {},
    moviePath: "https://csdnimg.cn/public/highlighter/ZeroClipboard.swf",
    nextId: 1,
    $: function(t) {
        return "string" == typeof t && (t = document.getElementById(t)),
        t.hide = function() {
            this.style.display = "none"
        }
        ,
        t.show = function() {
            this.style.display = "block"
        }
        ,
        t.addClass = function(t) {
            this.removeClass(t),
            this.className += " " + t
        }
        ,
        t.removeClass = function(t) {
            for (var e = this.className.split(/\s+/), i = -1, s = 0; s < e.length; s++)
                e[s] == t && (i = s,
                s = e.length);
            return i > -1 && (e.splice(i, 1),
            this.className = e.join(" ")),
            this
        }
        ,
        t.hasClass = function(t) {
            return !!this.className.match(new RegExp("\\s*" + t + "\\s*"))
        }
        ,
        t
    },
    setMoviePath: function(t) {
        this.moviePath = t
    },
    dispatch: function(t, e, i) {
        var s = this.clients[t];
        s && s.receiveEvent(e, i)
    },
    register: function(t, e) {
        this.clients[t] = e
    },
    getDOMObjectPosition: function(t, e) {
        for (var i = {
            left: 0,
            top: 0,
            width: t.width ? t.width : t.offsetWidth,
            height: t.height ? t.height : t.offsetHeight
        }; t && t != e; )
            i.left += t.offsetLeft,
            i.top += t.offsetTop,
            t = t.offsetParent;
        return i
    },
    Client: function(t) {
        this.handlers = {},
        this.id = ZeroClipboard.nextId++,
        this.movieId = "ZeroClipboardMovie_" + this.id,
        ZeroClipboard.register(this.id, this),
        t && this.glue(t)
    }
};
ZeroClipboard.Client.prototype = {
    id: 0,
    ready: !1,
    movie: null,
    clipText: "",
    handCursorEnabled: !0,
    cssEffects: !0,
    handlers: null,
    glue: function(t, e, i) {
        this.domElement = ZeroClipboard.$(t);
        var s = 99;
        this.domElement.style.zIndex && (s = parseInt(this.domElement.style.zIndex, 10) + 1),
        "string" == typeof e ? e = ZeroClipboard.$(e) : "undefined" == typeof e && (e = document.getElementsByTagName("body")[0]);
        var n = ZeroClipboard.getDOMObjectPosition(this.domElement, e);
        this.div = document.createElement("div");
        var o = this.div.style;
        if (o.position = "absolute",
        o.left = "" + n.left + "px",
        o.top = "" + n.top + "px",
        o.width = "" + n.width + "px",
        o.height = "" + n.height + "px",
        o.zIndex = s,
        "object" == typeof i)
            for (addedStyle in i)
                o[addedStyle] = i[addedStyle];
        e.appendChild(this.div),
        this.div.innerHTML = this.getHTML(n.width, n.height)
    },
    getHTML: function(t, e) {
        var i = ""
          , s = "id=" + this.id + "&width=" + t + "&height=" + e;
        if (navigator.userAgent.match(/MSIE/)) {
            var n = location.href.match(/^https/i) ? "https://" : "http://";
            i += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + n + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + t + '" height="' + e + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + s + '"/><param name="wmode" value="transparent"/></object>'
        } else
            i += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + t + '" height="' + e + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + s + '" wmode="transparent" />';
        return i
    },
    hide: function() {
        this.div && (this.div.style.left = "-2000px")
    },
    show: function() {
        this.reposition()
    },
    destroy: function() {
        if (this.domElement && this.div) {
            this.hide(),
            this.div.innerHTML = "";
            var t = document.getElementsByTagName("body")[0];
            try {
                t.removeChild(this.div)
            } catch (e) {}
            this.domElement = null,
            this.div = null
        }
    },
    reposition: function(t) {
        if (t && (this.domElement = ZeroClipboard.$(t),
        this.domElement || this.hide()),
        this.domElement && this.div) {
            var e = ZeroClipboard.getDOMObjectPosition(this.domElement)
              , i = this.div.style;
            i.left = "" + e.left + "px",
            i.top = "" + e.top + "px"
        }
    },
    setText: function(t) {
        this.clipText = t,
        this.ready && this.movie.setText(t)
    },
    addEventListener: function(t, e) {
        t = t.toString().toLowerCase().replace(/^on/, ""),
        this.handlers[t] || (this.handlers[t] = []),
        this.handlers[t].push(e)
    },
    setHandCursor: function(t) {
        this.handCursorEnabled = t,
        this.ready && this.movie.setHandCursor(t)
    },
    setCSSEffects: function(t) {
        this.cssEffects = !!t
    },
    receiveEvent: function(t, e) {
        switch (t = t.toString().toLowerCase().replace(/^on/, "")) {
        case "load":
            if (this.movie = document.getElementById(this.movieId),
            !this.movie) {
                var i = this;
                return void setTimeout(function() {
                    i.receiveEvent("load", null)
                }, 1)
            }
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var i = this;
                return setTimeout(function() {
                    i.receiveEvent("load", null)
                }, 100),
                void (this.ready = !0)
            }
            this.ready = !0,
            this.movie.setText(this.clipText),
            this.movie.setHandCursor(this.handCursorEnabled);
            break;
        case "mouseover":
            this.domElement && this.cssEffects && (this.domElement.addClass("hover"),
            this.recoverActive && this.domElement.addClass("active"));
            break;
        case "mouseout":
            this.domElement && this.cssEffects && (this.recoverActive = !1,
            this.domElement.hasClass("active") && (this.domElement.removeClass("active"),
            this.recoverActive = !0),
            this.domElement.removeClass("hover"));
            break;
        case "mousedown":
            this.domElement && this.cssEffects && this.domElement.addClass("active");
            break;
        case "mouseup":
            this.domElement && this.cssEffects && (this.domElement.removeClass("active"),
            this.recoverActive = !1)
        }
        if (this.handlers[t])
            for (var s = 0, n = this.handlers[t].length; s < n; s++) {
                var o = this.handlers[t][s];
                "function" == typeof o ? o(this, e) : "object" == typeof o && 2 == o.length ? o[0][o[1]](this, e) : "string" == typeof o && window[o](this, e)
            }
    }
},
$(document).ready(function() {
    $(".article_content pre").each(function() {
        var t = $(this);
        if (void 0 != t.attr("class")) {
            if (t.attr("class").indexOf("brush:") != -1) {
                var e = t.attr("class").split(";")[0].split(":")[1];
                t.attr("name", "code"),
                t.attr("class", e)
            }
            t.attr("class") && t.attr("name", "code")
        }
    }),
    $(".article_content textarea[name=code]").each(function() {
        var t = $(this);
        t.attr("class").indexOf(":") != -1 && t.attr("class", t.attr("class").split(":")[0])
    }),
    $(".highlighter").addClass("dp-highlighter"),
    window.clipboardData || setTimeout("setCopyBtn()", 500)
}),
jQuery(function() {
    var t = $(".badge div img");
    0 === t.length ? $(".interflow .badge").css({
        paddingTop: 0
    }) : t.hover(m_over_m, m_out_m)
});
var __mm_over = !1
  , __mm_intro = null;
if (function(t) {
    function e(t, e) {
        var i = e - t + 1;
        return Math.floor(Math.random() * i + t)
    }
    t.fn.extend({
        selection: function() {
            var e = ""
              , i = this[0];
            if (document.selection) {
                var s = document.selection.createRange();
                e = s.text
            } else if ("number" == typeof i.selectionStart) {
                var n = i.selectionStart
                  , o = i.selectionEnd;
                n != o && (e = i.value.substring(n, o))
            }
            return t.trim(e)
        },
        parseHtml: function(e) {
            var i = this[0]
              , s = t(this).val();
            if (document.selection) {
                var n = document.selection.createRange();
                n.text ? n.text = e : t(this).val(s + e)
            } else if ("number" == typeof i.selectionStart) {
                var o = i.selectionStart
                  , a = i.selectionEnd
                  , r = s.substring(0, o)
                  , l = s.substring(a);
                t(this).val(r + e + l)
            } else
                t(this).val(s + e);
            i.selectionStart = i.selectionEnd = t(this).val().length,
            i.focus()
        }
    });
    var i = t("div.pulllog-box");
    i.find("button.btn-close").click(function() {
        i.remove()
    }),
    i.find(".pulllog-login").click(function() {
        t(this).hasClass("show") || (window.csdn.loginbox(),
        t(this).addClass("show"))
    });
    var s = function(e) {
        var e = e ? e : "body"
          , i = t(e + " img")
          , s = navigator.userAgent.toLowerCase();
        return 0 !== i.length && (0 === t(".imgViewDom").length && (t("body").append('<div class="imgViewDom disnone" style="display: none;"><img src=""></div>'),
        t("body").append("<style>.imgViewDom{display:none;position:fixed;top:0;left:0;height:100%;width:100%;z-index:99999999;background: rgba(255, 255, 255,0.8);overflow: auto;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;display:-moz-box;-moz-box-align:center;-moz-box-pack:center;display:-o-box;-o-box-align:center;-o-box-pack:center;display:-ms-box;-ms-box-align:center;-ms-box-pack:center; display:box;box-align:center;box-pack:center;}.imgViewDom img{cursor: zoom-out;}</style>"),
        t(".imgViewDom").on("click", function() {
            s.indexOf("windows ") > -1 ? t("body").css({
                overflow: "auto",
                "margin-left": "0"
            }) : t("body").css({
                overflow: "auto"
            }),
            t(".imgViewDom").fadeOut(500).children("img").attr("src", "")
        })),
        void i.bind("click", function(e) {
            e.currentTarget.src && (t(".imgViewDom").fadeIn(500).children("img").css({
                width: e.currentTarget.naturalWidth,
                height: e.currentTarget.naturalheight
            }).attr("src", e.currentTarget.src),
            s.indexOf("windows ") > -1 ? t("body").css({
                overflow: "hidden",
                "margin-left": "-17px"
            }) : t("body").css({
                overflow: "hidden"
            }))
        }))
    };
    window.CSDNviewImg = s,
    window.csdn = window.csdn || {},
    window.csdn.random_num = e
}(jQuery),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = function(t) {
        this.canvas = t.canvas,
        this.ctx = t;
        var e = function(t, e) {
            return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e)
        }
          , i = this.width = e(t.canvas, "Width")
          , n = this.height = e(t.canvas, "Height");
        t.canvas.width = i,
        t.canvas.height = n;
        var i = this.width = t.canvas.width
          , n = this.height = t.canvas.height;
        return this.aspectRatio = this.width / this.height,
        s.retinaScale(this),
        this
    };
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    },
    i.types = {};
    var s = i.helpers = {}
      , n = s.each = function(t, e, i) {
        var s = Array.prototype.slice.call(arguments, 3);
        if (t)
            if (t.length === +t.length) {
                var n;
                for (n = 0; n < t.length; n++)
                    e.apply(i, [t[n], n].concat(s))
            } else
                for (var o in t)
                    e.apply(i, [t[o], o].concat(s))
    }
      , o = s.clone = function(t) {
        var e = {};
        return n(t, function(i, s) {
            t.hasOwnProperty(s) && (e[s] = i)
        }),
        e
    }
      , a = s.extend = function(t) {
        return n(Array.prototype.slice.call(arguments, 1), function(e) {
            n(e, function(i, s) {
                e.hasOwnProperty(s) && (t[s] = i)
            })
        }),
        t
    }
      , r = s.merge = function(t, e) {
        var i = Array.prototype.slice.call(arguments, 0);
        return i.unshift({}),
        a.apply(null, i)
    }
      , l = s.indexOf = function(t, e) {
        if (Array.prototype.indexOf)
            return t.indexOf(e);
        for (var i = 0; i < t.length; i++)
            if (t[i] === e)
                return i;
        return -1
    }
      , h = (s.where = function(t, e) {
        var i = [];
        return s.each(t, function(t) {
            e(t) && i.push(t)
        }),
        i
    }
    ,
    s.findNextWhere = function(t, e, i) {
        i || (i = -1);
        for (var s = i + 1; s < t.length; s++) {
            var n = t[s];
            if (e(n))
                return n
        }
    }
    ,
    s.findPreviousWhere = function(t, e, i) {
        i || (i = t.length);
        for (var s = i - 1; s >= 0; s--) {
            var n = t[s];
            if (e(n))
                return n
        }
    }
    ,
    s.inherits = function(t) {
        var e = this
          , i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
            return e.apply(this, arguments)
        }
          , s = function() {
            this.constructor = i
        };
        return s.prototype = e.prototype,
        i.prototype = new s,
        i.extend = h,
        t && a(i.prototype, t),
        i.__super__ = e.prototype,
        i
    }
    )
      , c = s.noop = function() {}
      , d = s.uid = function() {
        var t = 0;
        return function() {
            return "chart-" + t++
        }
    }()
      , u = s.warn = function(t) {
        window.console && "function" == typeof window.console.warn && console.warn(t)
    }
      , p = s.amd = "function" == typeof define && define.amd
      , g = s.isNumber = function(t) {
        return !isNaN(parseFloat(t)) && isFinite(t)
    }
      , f = s.max = function(t) {
        return Math.max.apply(Math, t)
    }
      , m = s.min = function(t) {
        return Math.min.apply(Math, t)
    }
      , b = (s.cap = function(t, e, i) {
        if (g(e)) {
            if (t > e)
                return e
        } else if (g(i) && t < i)
            return i;
        return t
    }
    ,
    s.getDecimalPlaces = function(t) {
        return t % 1 !== 0 && g(t) ? t.toString().split(".")[1].length : 0
    }
    )
      , x = s.radians = function(t) {
        return t * (Math.PI / 180)
    }
      , v = (s.getAngleFromPoint = function(t, e) {
        var i = e.x - t.x
          , s = e.y - t.y
          , n = Math.sqrt(i * i + s * s)
          , o = 2 * Math.PI + Math.atan2(s, i);
        return i < 0 && s < 0 && (o += 2 * Math.PI),
        {
            angle: o,
            distance: n
        }
    }
    ,
    s.aliasPixel = function(t) {
        return t % 2 === 0 ? 0 : .5
    }
    )
      , y = (s.splineCurve = function(t, e, i, s) {
        var n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
          , o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2))
          , a = s * n / (n + o)
          , r = s * o / (n + o);
        return {
            inner: {
                x: e.x - a * (i.x - t.x),
                y: e.y - a * (i.y - t.y)
            },
            outer: {
                x: e.x + r * (i.x - t.x),
                y: e.y + r * (i.y - t.y)
            }
        }
    }
    ,
    s.calculateOrderOfMagnitude = function(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }
    )
      , w = (s.calculateScaleRange = function(t, e, i, s, n) {
        var o = 2
          , a = Math.floor(e / (1.5 * i))
          , r = o >= a
          , l = f(t)
          , h = m(t);
        l === h && (l += .5,
        h >= .5 && !s ? h -= .5 : l += .5);
        for (var c = Math.abs(l - h), d = y(c), u = Math.ceil(l / (1 * Math.pow(10, d))) * Math.pow(10, d), p = s ? 0 : Math.floor(h / (1 * Math.pow(10, d))) * Math.pow(10, d), g = u - p, b = Math.pow(10, d), x = Math.round(g / b); (x > a || 2 * x < a) && !r; )
            if (x > a)
                b *= 2,
                x = Math.round(g / b),
                x % 1 !== 0 && (r = !0);
            else if (n && d >= 0) {
                if (b / 2 % 1 !== 0)
                    break;
                b /= 2,
                x = Math.round(g / b)
            } else
                b /= 2,
                x = Math.round(g / b);
        return r && (x = o,
        b = g / x),
        {
            steps: x,
            stepValue: b,
            min: p,
            max: p + x * b
        }
    }
    ,
    s.template = function(t, e) {
        function i(t, e) {
            var i = /\W/.test(t) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : s[t] = s[t];
            return e ? i(e) : i
        }
        if (t instanceof Function)
            return t(e);
        var s = {};
        return i(t, e)
    }
    )
      , C = (s.generateLabels = function(t, e, i, s) {
        var o = new Array(e);
        return labelTemplateString && n(o, function(e, n) {
            o[n] = w(t, {
                value: i + s * (n + 1)
            })
        }),
        o
    }
    ,
    s.easingEffects = {
        linear: function(t) {
            return t
        },
        easeInQuad: function(t) {
            return t * t
        },
        easeOutQuad: function(t) {
            return -1 * t * (t - 2)
        },
        easeInOutQuad: function(t) {
            return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        },
        easeInCubic: function(t) {
            return t * t * t
        },
        easeOutCubic: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t + 1)
        },
        easeInOutCubic: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        easeInQuart: function(t) {
            return t * t * t * t
        },
        easeOutQuart: function(t) {
            return -1 * ((t = t / 1 - 1) * t * t * t - 1)
        },
        easeInOutQuart: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        },
        easeInQuint: function(t) {
            return 1 * (t /= 1) * t * t * t * t
        },
        easeOutQuint: function(t) {
            return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
        },
        easeInOutQuint: function(t) {
            return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        easeInSine: function(t) {
            return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(t) {
            return 1 * Math.sin(t / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(t) {
            return -.5 * (Math.cos(Math.PI * t / 1) - 1)
        },
        easeInExpo: function(t) {
            return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
        },
        easeInCirc: function(t) {
            return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
        },
        easeOutCirc: function(t) {
            return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
        },
        easeInOutCirc: function(t) {
            return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        easeInElastic: function(t) {
            var e = 1.70158
              , i = 0
              , s = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3),
            s < Math.abs(1) ? (s = 1,
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s),
            -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)))
        },
        easeOutElastic: function(t) {
            var e = 1.70158
              , i = 0
              , s = 1;
            return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3),
            s < Math.abs(1) ? (s = 1,
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s),
            s * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1)
        },
        easeInOutElastic: function(t) {
            var e = 1.70158
              , i = 0
              , s = 1;
            return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)),
            s < Math.abs(1) ? (s = 1,
            e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / s),
            t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1)
        },
        easeInBack: function(t) {
            var e = 1.70158;
            return 1 * (t /= 1) * t * ((e + 1) * t - e)
        },
        easeOutBack: function(t) {
            var e = 1.70158;
            return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
        },
        easeInOutBack: function(t) {
            var e = 1.70158;
            return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
        },
        easeInBounce: function(t) {
            return 1 - C.easeOutBounce(1 - t)
        },
        easeOutBounce: function(t) {
            return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : t < 2 / 2.75 ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        },
        easeInOutBounce: function(t) {
            return t < .5 ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
        }
    })
      , S = s.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
            return window.setTimeout(t, 1e3 / 60)
        }
    }()
      , _ = s.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
            return window.clearTimeout(t, 1e3 / 60)
        }
    }()
      , L = (s.animationLoop = function(t, e, i, s, n, o) {
        var a = 0
          , r = C[i] || C.linear
          , l = function() {
            a++;
            var i = a / e
              , h = r(i);
            t.call(o, h, i, a),
            s.call(o, h, i),
            a < e ? o.animationFrame = S(l) : n.apply(o)
        };
        S(l)
    }
    ,
    s.getRelativePosition = function(t) {
        var e, i, s = t.originalEvent || t, n = t.currentTarget || t.srcElement, o = n.getBoundingClientRect();
        return s.touches ? (e = s.touches[0].clientX - o.left,
        i = s.touches[0].clientY - o.top) : (e = s.clientX - o.left,
        i = s.clientY - o.top),
        {
            x: e,
            y: i
        }
    }
    ,
    s.addEvent = function(t, e, i) {
        t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
    }
    )
      , P = s.removeEvent = function(t, e, i) {
        t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = c
    }
      , T = (s.bindEvents = function(t, e, i) {
        t.events || (t.events = {}),
        n(e, function(e) {
            t.events[e] = function() {
                i.apply(t, arguments)
            }
            ,
            L(t.chart.canvas, e, t.events[e])
        })
    }
    ,
    s.unbindEvents = function(t, e) {
        n(e, function(e, i) {
            P(t.chart.canvas, i, e)
        })
    }
    )
      , R = s.getMaximumWidth = function(t) {
        var e = t.parentNode;
        return e.clientWidth
    }
      , k = s.getMaximumHeight = function(t) {
        var e = t.parentNode;
        return e.clientHeight
    }
      , E = (s.getMaximumSize = s.getMaximumWidth,
    s.retinaScale = function(t) {
        var e = t.ctx
          , i = t.canvas.width
          , s = t.canvas.height;
        window.devicePixelRatio && (e.canvas.style.width = i + "px",
        e.canvas.style.height = s + "px",
        e.canvas.height = s * window.devicePixelRatio,
        e.canvas.width = i * window.devicePixelRatio,
        e.scale(window.devicePixelRatio, window.devicePixelRatio))
    }
    )
      , A = s.clear = function(t) {
        t.ctx.clearRect(0, 0, t.width, t.height)
    }
      , O = s.fontString = function(t, e, i) {
        return e + " " + t + "px " + i
    }
      , I = s.longestText = function(t, e, i) {
        t.font = e;
        var s = 0;
        return n(i, function(e) {
            var i = t.measureText(e).width;
            s = i > s ? i : s
        }),
        s
    }
      , B = s.drawRoundedRectangle = function(t, e, i, s, n, o) {
        t.beginPath(),
        t.moveTo(e + o, i),
        t.lineTo(e + s - o, i),
        t.quadraticCurveTo(e + s, i, e + s, i + o),
        t.lineTo(e + s, i + n - o),
        t.quadraticCurveTo(e + s, i + n, e + s - o, i + n),
        t.lineTo(e + o, i + n),
        t.quadraticCurveTo(e, i + n, e, i + n - o),
        t.lineTo(e, i + o),
        t.quadraticCurveTo(e, i, e + o, i),
        t.closePath()
    }
    ;
    i.instances = {},
    i.Type = function(t, e, s) {
        this.options = e,
        this.chart = s,
        this.id = d(),
        i.instances[this.id] = this,
        e.responsive && this.resize(),
        this.initialize.call(this, t)
    }
    ,
    a(i.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return A(this.chart),
            this
        },
        stop: function() {
            return _(this.animationFrame),
            this
        },
        resize: function(t) {
            this.stop();
            var e = this.chart.canvas
              , i = R(this.chart.canvas)
              , s = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : k(this.chart.canvas);
            return e.width = this.chart.width = i,
            e.height = this.chart.height = s,
            E(this.chart),
            "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)),
            this
        },
        reflow: c,
        render: function(t) {
            return t && this.reflow(),
            this.options.animation && !t ? s.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(),
            this.options.onAnimationComplete.call(this)),
            this
        },
        generateLegend: function() {
            return w(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(),
            T(this, this.events);
            var t = this.chart.canvas;
            t.width = this.chart.width,
            t.height = this.chart.height,
            t.style.removeProperty ? (t.style.removeProperty("width"),
            t.style.removeProperty("height")) : (t.style.removeAttribute("width"),
            t.style.removeAttribute("height")),
            delete i.instances[this.id]
        },
        showTooltip: function(t, e) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var o = function(t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (n(t, function(t, i) {
                    t !== this.activeElements[i] && (e = !0)
                }, this),
                e)
            }
            .call(this, t);
            if (o || e) {
                if (this.activeElements = t,
                this.draw(),
                this.options.customTooltips && this.options.customTooltips(!1),
                t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var a, r, h = this.datasets.length - 1; h >= 0 && (a = this.datasets[h].points || this.datasets[h].bars || this.datasets[h].segments,
                        r = l(a, t[0]),
                        r === -1); h--)
                            ;
                        var c = []
                          , d = []
                          , u = function(t) {
                            var e, i, n, o, a, l = [], h = [], u = [];
                            return s.each(this.datasets, function(t) {
                                e = t.points || t.bars || t.segments,
                                e[r] && e[r].hasValue() && l.push(e[r])
                            }),
                            s.each(l, function(t) {
                                h.push(t.x),
                                u.push(t.y),
                                c.push(s.template(this.options.multiTooltipTemplate, t)),
                                d.push({
                                    fill: t._saved.fillColor || t.fillColor,
                                    stroke: t._saved.strokeColor || t.strokeColor
                                })
                            }, this),
                            a = m(u),
                            n = f(u),
                            o = m(h),
                            i = f(h),
                            {
                                x: o > this.chart.width / 2 ? o : i,
                                y: (a + n) / 2
                            }
                        }
                        .call(this, r);
                        new i.MultiTooltip({
                            x: u.x,
                            y: u.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: c,
                            legendColors: d,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: t[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else
                        n(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(e.x),
                                y: Math.round(e.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: w(this.options.tooltipTemplate, t),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }),
    i.Type.extend = function(t) {
        var e = this
          , s = function() {
            return e.apply(this, arguments)
        };
        if (s.prototype = o(e.prototype),
        a(s.prototype, t),
        s.extend = i.Type.extend,
        t.name || e.prototype.name) {
            var n = t.name || e.prototype.name
              , l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
            i.defaults[n] = a(l, t.defaults),
            i.types[n] = s,
            i.prototype[n] = function(t, e) {
                var o = r(i.defaults.global, i.defaults[n], e || {});
                return new s(t,o,this)
            }
        } else
            u("Name not provided for this chart, so it hasn't been registered");
        return e
    }
    ,
    i.Element = function(t) {
        a(this, t),
        this.initialize.apply(this, arguments),
        this.save()
    }
    ,
    a(i.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? n(t, function(t) {
                this[t] = this._saved[t]
            }, this) : a(this, this._saved),
            this
        },
        save: function() {
            return this._saved = o(this),
            delete this._saved._saved,
            this
        },
        update: function(t) {
            return n(t, function(t, e) {
                this._saved[e] = this[e],
                this[e] = t
            }, this),
            this
        },
        transition: function(t, e) {
            return n(t, function(t, i) {
                this[i] = (t - this._saved[i]) * e + this._saved[i]
            }, this),
            this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return g(this.value)
        }
    }),
    i.Element.extend = h,
    i.Point = i.Element.extend({
        display: !0,
        inRange: function(t, e) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(),
                t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                t.closePath(),
                t.strokeStyle = this.strokeColor,
                t.lineWidth = this.strokeWidth,
                t.fillStyle = this.fillColor,
                t.fill(),
                t.stroke()
            }
        }
    }),
    i.Arc = i.Element.extend({
        inRange: function(t, e) {
            var i = s.getAngleFromPoint(this, {
                x: t,
                y: e
            })
              , n = i.angle >= this.startAngle && i.angle <= this.endAngle
              , o = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return n && o
        },
        tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2
              , e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            }
        },
        draw: function(t) {
            var e = this.ctx;
            e.beginPath(),
            e.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle),
            e.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0),
            e.closePath(),
            e.strokeStyle = this.strokeColor,
            e.lineWidth = this.strokeWidth,
            e.fillStyle = this.fillColor,
            e.fill(),
            e.lineJoin = "bevel",
            this.showStroke && e.stroke()
        }
    }),
    i.Rectangle = i.Element.extend({
        draw: function() {
            var t = this.ctx
              , e = this.width / 2
              , i = this.x - e
              , s = this.x + e
              , n = this.base - (this.base - this.y)
              , o = this.strokeWidth / 2;
            this.showStroke && (i += o,
            s -= o,
            n += o),
            t.beginPath(),
            t.fillStyle = this.fillColor,
            t.strokeStyle = this.strokeColor,
            t.lineWidth = this.strokeWidth,
            t.moveTo(i, this.base),
            t.lineTo(i, n),
            t.lineTo(s, n),
            t.lineTo(s, this.base),
            t.fill(),
            this.showStroke && t.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }),
    i.Tooltip = i.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = O(this.fontSize, this.fontStyle, this.fontFamily),
            this.xAlign = "center",
            this.yAlign = "above";
            var e = this.caretPadding = 2
              , i = t.measureText(this.text).width + 2 * this.xPadding
              , s = this.fontSize + 2 * this.yPadding
              , n = s + this.caretHeight + e;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"),
            this.y - n < 0 && (this.yAlign = "below");
            var o = this.x - i / 2
              , a = this.y - n;
            if (t.fillStyle = this.fillColor,
            this.custom)
                this.custom(this);
            else {
                switch (this.yAlign) {
                case "above":
                    t.beginPath(),
                    t.moveTo(this.x, this.y - e),
                    t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)),
                    t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)),
                    t.closePath(),
                    t.fill();
                    break;
                case "below":
                    a = this.y + e + this.caretHeight,
                    t.beginPath(),
                    t.moveTo(this.x, this.y + e),
                    t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight),
                    t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight),
                    t.closePath(),
                    t.fill()
                }
                switch (this.xAlign) {
                case "left":
                    o = this.x - i + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    o = this.x - (this.cornerRadius + this.caretHeight)
                }
                B(t, o, a, i, s, this.cornerRadius),
                t.fill(),
                t.fillStyle = this.textColor,
                t.textAlign = "center",
                t.textBaseline = "middle",
                t.fillText(this.text, o + i / 2, a + s / 2)
            }
        }
    }),
    i.MultiTooltip = i.Element.extend({
        initialize: function() {
            this.font = O(this.fontSize, this.fontStyle, this.fontFamily),
            this.titleFont = O(this.titleFontSize, this.titleFontStyle, this.titleFontFamily),
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize,
            this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width
              , e = I(this.ctx, this.font, this.labels) + this.fontSize + 3
              , i = f([e, t]);
            this.width = i + 2 * this.xPadding;
            var s = this.height / 2;
            this.y - s < 0 ? this.y = s : this.y + s > this.chart.height && (this.y = this.chart.height - s),
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function(t) {
            var e = this.y - this.height / 2 + this.yPadding
              , i = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            if (this.custom)
                this.custom(this);
            else {
                B(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var t = this.ctx;
                t.fillStyle = this.fillColor,
                t.fill(),
                t.closePath(),
                t.textAlign = "left",
                t.textBaseline = "middle",
                t.fillStyle = this.titleTextColor,
                t.font = this.titleFont,
                t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)),
                t.font = this.font,
                s.each(this.labels, function(e, i) {
                    t.fillStyle = this.textColor,
                    t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)),
                    t.fillStyle = this.legendColorBackground,
                    t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize),
                    t.fillStyle = this.legendColors[i].fill,
                    t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }),
    i.Scale = i.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = b(this.stepValue), e = 0; e <= this.steps; e++)
                this.yLabels.push(w(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }));
            this.yLabelWidth = this.display && this.showLabels ? I(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(t) {
            this.xLabels.push(t),
            this.valuesCount++,
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(),
            this.valuesCount--,
            this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0,
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height,
            this.startPoint += this.padding,
            this.endPoint -= this.padding;
            var t, e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e),
            this.buildYLabels(),
            this.calculateXLabelRotation(); e > this.endPoint - this.startPoint; )
                e = this.endPoint - this.startPoint,
                t = this.yLabelWidth,
                this.calculateYRange(e),
                this.buildYLabels(),
                t < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var t, e, i = this.ctx.measureText(this.xLabels[0]).width, s = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = s / 2 + 3,
            this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10,
            this.xLabelRotation = 0,
            this.display) {
                var n, o = I(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = o;
                for (var a = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > a && 0 === this.xLabelRotation || this.xLabelWidth > a && this.xLabelRotation <= 90 && this.xLabelRotation > 0; )
                    n = Math.cos(x(this.xLabelRotation)),
                    t = n * i,
                    e = n * s,
                    t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2),
                    this.xScalePaddingRight = this.fontSize / 2,
                    this.xLabelRotation++,
                    this.xLabelWidth = n * o;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(x(this.xLabelRotation)) * o + 3)
            } else
                this.xLabelWidth = 0,
                this.xScalePaddingRight = this.padding,
                this.xScalePaddingLeft = this.padding
        },
        calculateYRange: c,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        },
        calculateX: function(t) {
            var e = (this.xLabelRotation > 0,
            this.width - (this.xScalePaddingLeft + this.xScalePaddingRight))
              , i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1)
              , s = i * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (s += i / 2),
            Math.round(s)
        },
        update: function(t) {
            s.extend(this, t),
            this.fit()
        },
        draw: function() {
            var t = this.ctx
              , e = (this.endPoint - this.startPoint) / this.steps
              , i = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor,
            t.font = this.font,
            n(this.yLabels, function(n, o) {
                var a = this.endPoint - e * o
                  , r = Math.round(a)
                  , l = this.showHorizontalLines;
                t.textAlign = "right",
                t.textBaseline = "middle",
                this.showLabels && t.fillText(n, i - 10, a),
                0 !== o || l || (l = !0),
                l && t.beginPath(),
                o > 0 ? (t.lineWidth = this.gridLineWidth,
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor),
                r += s.aliasPixel(t.lineWidth),
                l && (t.moveTo(i, r),
                t.lineTo(this.width, r),
                t.stroke(),
                t.closePath()),
                t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor,
                t.beginPath(),
                t.moveTo(i - 5, r),
                t.lineTo(i, r),
                t.stroke(),
                t.closePath()
            }, this),
            n(this.xLabels, function(e, i) {
                var s = this.calculateX(i) + v(this.lineWidth)
                  , n = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + v(this.lineWidth)
                  , o = this.xLabelRotation > 0
                  , a = this.showVerticalLines;
                0 !== i || a || (a = !0),
                a && t.beginPath(),
                i > 0 ? (t.lineWidth = this.gridLineWidth,
                t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor),
                a && (t.moveTo(n, this.endPoint),
                t.lineTo(n, this.startPoint - 3),
                t.stroke(),
                t.closePath()),
                t.lineWidth = this.lineWidth,
                t.strokeStyle = this.lineColor,
                t.beginPath(),
                t.moveTo(n, this.endPoint),
                t.lineTo(n, this.endPoint + 5),
                t.stroke(),
                t.closePath(),
                t.save(),
                t.translate(s, o ? this.endPoint + 12 : this.endPoint + 8),
                t.rotate(x(this.xLabelRotation) * -1),
                t.font = this.font,
                t.textAlign = o ? "right" : "center",
                t.textBaseline = o ? "middle" : "top",
                t.fillText(e, 0, 0),
                t.restore()
            }, this))
        }
    }),
    i.RadialScale = i.Element.extend({
        initialize: function() {
            this.size = m([this.height, this.width]),
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = b(this.stepValue), e = 0; e <= this.steps; e++)
                this.yLabels.push(w(this.templateString, {
                    value: (this.min + e * this.stepValue).toFixed(t)
                }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var t, e, i, s, n, o, a, r, l, h, c, d, u = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), p = this.width, f = 0;
            for (this.ctx.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
            e = 0; e < this.valuesCount; e++)
                t = this.getPointPosition(e, u),
                i = this.ctx.measureText(w(this.templateString, {
                    value: this.labels[e]
                })).width + 5,
                0 === e || e === this.valuesCount / 2 ? (s = i / 2,
                t.x + s > p && (p = t.x + s,
                n = e),
                t.x - s < f && (f = t.x - s,
                a = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i,
                n = e) : e > this.valuesCount / 2 && t.x - i < f && (f = t.x - i,
                a = e);
            l = f,
            h = Math.ceil(p - this.width),
            o = this.getIndexAngle(n),
            r = this.getIndexAngle(a),
            c = h / Math.sin(o + Math.PI / 2),
            d = l / Math.sin(r + Math.PI / 2),
            c = g(c) ? c : 0,
            d = g(d) ? d : 0,
            this.drawingArea = u - (d + c) / 2,
            this.setCenterPoint(d, c)
        },
        setCenterPoint: function(t, e) {
            var i = this.width - e - this.drawingArea
              , s = t + this.drawingArea;
            this.xCenter = (s + i) / 2,
            this.yCenter = this.height / 2
        },
        getIndexAngle: function(t) {
            var e = 2 * Math.PI / this.valuesCount;
            return t * e - Math.PI / 2
        },
        getPointPosition: function(t, e) {
            var i = this.getIndexAngle(t);
            return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (n(this.yLabels, function(e, i) {
                    if (i > 0) {
                        var s, n = i * (this.drawingArea / this.steps), o = this.yCenter - n;
                        if (this.lineWidth > 0)
                            if (t.strokeStyle = this.lineColor,
                            t.lineWidth = this.lineWidth,
                            this.lineArc)
                                t.beginPath(),
                                t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI),
                                t.closePath(),
                                t.stroke();
                            else {
                                t.beginPath();
                                for (var a = 0; a < this.valuesCount; a++)
                                    s = this.getPointPosition(a, this.calculateCenterOffset(this.min + i * this.stepValue)),
                                    0 === a ? t.moveTo(s.x, s.y) : t.lineTo(s.x, s.y);
                                t.closePath(),
                                t.stroke()
                            }
                        if (this.showLabels) {
                            if (t.font = O(this.fontSize, this.fontStyle, this.fontFamily),
                            this.showLabelBackdrop) {
                                var r = t.measureText(e).width;
                                t.fillStyle = this.backdropColor,
                                t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                            }
                            t.textAlign = "center",
                            t.textBaseline = "middle",
                            t.fillStyle = this.fontColor,
                            t.fillText(e, this.xCenter, o)
                        }
                    }
                }, this),
                !this.lineArc) {
                    t.lineWidth = this.angleLineWidth,
                    t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(),
                            t.moveTo(this.xCenter, this.yCenter),
                            t.lineTo(i.x, i.y),
                            t.stroke(),
                            t.closePath()
                        }
                        var s = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = O(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
                        t.fillStyle = this.pointLabelFontColor;
                        var o = this.labels.length
                          , a = this.labels.length / 2
                          , r = a / 2
                          , l = e < r || e > o - r
                          , h = e === r || e === o - r;
                        0 === e ? t.textAlign = "center" : e === a ? t.textAlign = "center" : e < a ? t.textAlign = "left" : t.textAlign = "right",
                        h ? t.textBaseline = "middle" : l ? t.textBaseline = "bottom" : t.textBaseline = "top",
                        t.fillText(this.labels[e], s.x, s.y)
                    }
                }
            }
        }
    }),
    s.addEvent(window, "resize", function() {
        var t;
        return function() {
            clearTimeout(t),
            t = setTimeout(function() {
                n(i.instances, function(t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()),
    p ? define(function() {
        return i
    }) : "object" == typeof module && module.exports && (module.exports = i),
    t.Chart = i,
    i.noConflict = function() {
        return t.Chart = e,
        i
    }
}
.call(this),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = e.helpers
      , s = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Bar",
        defaults: s,
        initialize: function(t) {
            var s = this.options;
            this.ScaleClass = e.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(t, e, i) {
                    var n = this.calculateBaseWidth()
                      , o = this.calculateX(i) - n / 2
                      , a = this.calculateBarWidth(t);
                    return o + a * e + e * s.barDatasetSpacing + a / 2
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * s.barValueSpacing
                },
                calculateBarWidth: function(t) {
                    var e = this.calculateBaseWidth() - (t - 1) * s.barDatasetSpacing;
                    return e / t
                }
            }),
            this.datasets = [],
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                this.eachBars(function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }),
                i.each(e, function(t) {
                    t.fillColor = t.highlightFill,
                    t.strokeColor = t.highlightStroke
                }),
                this.showTooltip(e)
            }),
            this.BarClass = e.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }),
            i.each(t.datasets, function(e, s) {
                var n = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    bars: []
                };
                this.datasets.push(n),
                i.each(e.data, function(i, s) {
                    n.bars.push(new this.BarClass({
                        value: i,
                        label: t.labels[s],
                        datasetLabel: e.label,
                        strokeColor: e.strokeColor,
                        fillColor: e.fillColor,
                        highlightFill: e.highlightFill || e.fillColor,
                        highlightStroke: e.highlightStroke || e.strokeColor
                    }))
                }, this)
            }, this),
            this.buildScale(t.labels),
            this.BarClass.prototype.base = this.scale.endPoint,
            this.eachBars(function(t, e, s) {
                i.extend(t, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, s, e),
                    y: this.scale.endPoint
                }),
                t.save()
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            i.each(this.activeElements, function(t) {
                t.restore(["fillColor", "strokeColor"])
            }),
            this.eachBars(function(t) {
                t.save()
            }),
            this.render()
        },
        eachBars: function(t) {
            i.each(this.datasets, function(e, s) {
                i.each(e.bars, t, this, s)
            }, this)
        },
        getBarsAtEvent: function(t) {
            for (var e, s = [], n = i.getRelativePosition(t), o = function(t) {
                s.push(t.bars[e])
            }, a = 0; a < this.datasets.length; a++)
                for (e = 0; e < this.datasets[a].bars.length; e++)
                    if (this.datasets[a].bars[e].inRange(n.x, n.y))
                        return i.each(this.datasets, o),
                        s;
            return s
        },
        buildScale: function(t) {
            var e = this
              , s = function() {
                var t = [];
                return e.eachBars(function(e) {
                    t.push(e.value)
                }),
                t
            }
              , n = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var e = i.calculateScaleRange(s(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    i.extend(this, e)
                },
                xLabels: t,
                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && i.extend(n, {
                calculateYRange: i.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new this.ScaleClass(n)
        },
        addData: function(t, e) {
            i.each(t, function(t, i) {
                this.datasets[i].bars.push(new this.BarClass({
                    value: t,
                    label: e,
                    x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[i].strokeColor,
                    fillColor: this.datasets[i].fillColor
                }))
            }, this),
            this.scale.addXLabel(e),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            i.each(this.datasets, function(t) {
                t.bars.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            i.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var t = i.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(t)
        },
        draw: function(t) {
            var e = t || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(e),
            i.each(this.datasets, function(t, s) {
                i.each(t.bars, function(t, i) {
                    t.hasValue() && (t.base = this.scale.endPoint,
                    t.transition({
                        x: this.scale.calculateBarX(this.datasets.length, s, i),
                        y: this.scale.calculateY(t.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, e).draw())
                }, this)
            }, this)
        }
    })
}
.call(this),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = e.helpers
      , s = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Doughnut",
        defaults: s,
        initialize: function(t) {
            this.segments = [],
            this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            this.SegmentArc = e.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                i.each(this.segments, function(t) {
                    t.restore(["fillColor"])
                }),
                i.each(e, function(t) {
                    t.fillColor = t.highlightColor
                }),
                this.showTooltip(e)
            }),
            this.calculateTotal(t),
            i.each(t, function(t, e) {
                this.addData(t, e, !0)
            }, this),
            this.render()
        },
        getSegmentsAtEvent: function(t) {
            var e = []
              , s = i.getRelativePosition(t);
            return i.each(this.segments, function(t) {
                t.inRange(s.x, s.y) && e.push(t)
            }, this),
            e
        },
        addData: function(t, e, i) {
            var s = e || this.segments.length;
            this.segments.splice(s, 0, new this.SegmentArc({
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                label: t.label
            })),
            i || (this.reflow(),
            this.update())
        },
        calculateCircumference: function(t) {
            return 2 * Math.PI * (Math.abs(t) / this.total)
        },
        calculateTotal: function(t) {
            this.total = 0,
            i.each(t, function(t) {
                this.total += Math.abs(t.value)
            }, this)
        },
        update: function() {
            this.calculateTotal(this.segments),
            i.each(this.activeElements, function(t) {
                t.restore(["fillColor"])
            }),
            i.each(this.segments, function(t) {
                t.save()
            }),
            this.render()
        },
        removeData: function(t) {
            var e = i.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(e, 1),
            this.reflow(),
            this.update()
        },
        reflow: function() {
            i.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            i.each(this.segments, function(t) {
                t.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        },
        draw: function(t) {
            var e = t ? t : 1;
            this.clear(),
            i.each(this.segments, function(t, i) {
                t.transition({
                    circumference: this.calculateCircumference(t.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, e),
                t.endAngle = t.startAngle + t.circumference,
                t.draw(),
                0 === i && (t.startAngle = 1.5 * Math.PI),
                i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
            }, this)
        }
    }),
    e.types.Doughnut.extend({
        name: "Pie",
        defaults: i.merge(s, {
            percentageInnerCutout: 0
        })
    })
}
.call(this),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = e.helpers
      , s = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    e.Type.extend({
        name: "Line",
        defaults: s,
        initialize: function(t) {
            this.PointClass = e.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(t) {
                    return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }),
            this.datasets = [],
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }),
                i.each(e, function(t) {
                    t.fillColor = t.highlightFill,
                    t.strokeColor = t.highlightStroke
                }),
                this.showTooltip(e)
            }),
            i.each(t.datasets, function(e) {
                var s = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(s),
                i.each(e.data, function(i, n) {
                    s.points.push(new this.PointClass({
                        value: i,
                        label: t.labels[n],
                        datasetLabel: e.label,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                }, this),
                this.buildScale(t.labels),
                this.eachPoints(function(t, e) {
                    i.extend(t, {
                        x: this.scale.calculateX(e),
                        y: this.scale.endPoint
                    }),
                    t.save()
                }, this)
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            i.each(this.activeElements, function(t) {
                t.restore(["fillColor", "strokeColor"])
            }),
            this.eachPoints(function(t) {
                t.save()
            }),
            this.render()
        },
        eachPoints: function(t) {
            i.each(this.datasets, function(e) {
                i.each(e.points, t, this)
            }, this)
        },
        getPointsAtEvent: function(t) {
            var e = []
              , s = i.getRelativePosition(t);
            return i.each(this.datasets, function(t) {
                i.each(t.points, function(t) {
                    t.inRange(s.x, s.y) && e.push(t)
                })
            }, this),
            e
        },
        buildScale: function(t) {
            var s = this
              , n = function() {
                var t = [];
                return s.eachPoints(function(e) {
                    t.push(e.value)
                }),
                t
            }
              , o = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: t.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(t) {
                    var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                    i.extend(this, e)
                },
                xLabels: t,
                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && i.extend(o, {
                calculateYRange: i.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new e.Scale(o)
        },
        addData: function(t, e) {
            i.each(t, function(t, i) {
                this.datasets[i].points.push(new this.PointClass({
                    value: t,
                    label: e,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[i].pointStrokeColor,
                    fillColor: this.datasets[i].pointColor
                }))
            }, this),
            this.scale.addXLabel(e),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            i.each(this.datasets, function(t) {
                t.points.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            var t = i.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(t)
        },
        draw: function(t) {
            var e = t || 1;
            this.clear();
            var s = this.chart.ctx
              , n = function(t) {
                return null !== t.value
            }
              , o = function(t, e, s) {
                return i.findNextWhere(e, n, s) || t
            }
              , a = function(t, e, s) {
                return i.findPreviousWhere(e, n, s) || t
            };
            this.scale.draw(e),
            i.each(this.datasets, function(t) {
                var r = i.where(t.points, n);
                i.each(t.points, function(t, i) {
                    t.hasValue() && t.transition({
                        y: this.scale.calculateY(t.value),
                        x: this.scale.calculateX(i)
                    }, e)
                }, this),
                this.options.bezierCurve && i.each(r, function(t, e) {
                    var s = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                    t.controlPoints = i.splineCurve(a(t, r, e), t, o(t, r, e), s),
                    t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint),
                    t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint)
                }, this),
                s.lineWidth = this.options.datasetStrokeWidth,
                s.strokeStyle = t.strokeColor,
                s.beginPath(),
                i.each(r, function(t, e) {
                    if (0 === e)
                        s.moveTo(t.x, t.y);
                    else if (this.options.bezierCurve) {
                        var i = a(t, r, e);
                        s.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y)
                    } else
                        s.lineTo(t.x, t.y)
                }, this),
                s.stroke(),
                this.options.datasetFill && r.length > 0 && (s.lineTo(r[r.length - 1].x, this.scale.endPoint),
                s.lineTo(r[0].x, this.scale.endPoint),
                s.fillStyle = t.fillColor,
                s.closePath(),
                s.fill()),
                i.each(r, function(t) {
                    t.draw()
                })
            }, this)
        }
    })
}
.call(this),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = e.helpers
      , s = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    e.Type.extend({
        name: "PolarArea",
        defaults: s,
        initialize: function(t) {
            this.segments = [],
            this.SegmentArc = e.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.scale = new e.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: t.length
            }),
            this.updateScaleRange(t),
            this.scale.update(),
            i.each(t, function(t, e) {
                this.addData(t, e, !0)
            }, this),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                i.each(this.segments, function(t) {
                    t.restore(["fillColor"])
                }),
                i.each(e, function(t) {
                    t.fillColor = t.highlightColor
                }),
                this.showTooltip(e)
            }),
            this.render()
        },
        getSegmentsAtEvent: function(t) {
            var e = []
              , s = i.getRelativePosition(t);
            return i.each(this.segments, function(t) {
                t.inRange(s.x, s.y) && e.push(t)
            }, this),
            e
        },
        addData: function(t, e, i) {
            var s = e || this.segments.length;
            this.segments.splice(s, 0, new this.SegmentArc({
                fillColor: t.color,
                highlightColor: t.highlight || t.color,
                label: t.label,
                value: t.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })),
            i || (this.reflow(),
            this.update())
        },
        removeData: function(t) {
            var e = i.isNumber(t) ? t : this.segments.length - 1;
            this.segments.splice(e, 1),
            this.reflow(),
            this.update()
        },
        calculateTotal: function(t) {
            this.total = 0,
            i.each(t, function(t) {
                this.total += t.value
            }, this),
            this.scale.valuesCount = this.segments.length
        },
        updateScaleRange: function(t) {
            var e = [];
            i.each(t, function(t) {
                e.push(t.value)
            });
            var s = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            i.extend(this.scale, s, {
                size: i.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        },
        update: function() {
            this.calculateTotal(this.segments),
            i.each(this.segments, function(t) {
                t.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            i.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.updateScaleRange(this.segments),
            this.scale.update(),
            i.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            i.each(this.segments, function(t) {
                t.update({
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                })
            }, this)
        },
        draw: function(t) {
            var e = t || 1;
            this.clear(),
            i.each(this.segments, function(t, i) {
                t.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(t.value)
                }, e),
                t.endAngle = t.startAngle + t.circumference,
                0 === i && (t.startAngle = 1.5 * Math.PI),
                i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle),
                t.draw()
            }, this),
            this.scale.draw()
        }
    })
}
.call(this),
function() {
    "use strict";
    var t = this
      , e = t.Chart
      , i = e.helpers;
    e.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        },
        initialize: function(t) {
            this.PointClass = e.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }),
            this.datasets = [],
            this.buildScale(t),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                this.eachPoints(function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }),
                i.each(e, function(t) {
                    t.fillColor = t.highlightFill,
                    t.strokeColor = t.highlightStroke
                }),
                this.showTooltip(e)
            }),
            i.each(t.datasets, function(e) {
                var s = {
                    label: e.label || null,
                    fillColor: e.fillColor,
                    strokeColor: e.strokeColor,
                    pointColor: e.pointColor,
                    pointStrokeColor: e.pointStrokeColor,
                    points: []
                };
                this.datasets.push(s),
                i.each(e.data, function(i, n) {
                    var o;
                    this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(i))),
                    s.points.push(new this.PointClass({
                        value: i,
                        label: t.labels[n],
                        datasetLabel: e.label,
                        x: this.options.animation ? this.scale.xCenter : o.x,
                        y: this.options.animation ? this.scale.yCenter : o.y,
                        strokeColor: e.pointStrokeColor,
                        fillColor: e.pointColor,
                        highlightFill: e.pointHighlightFill || e.pointColor,
                        highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                    }))
                }, this)
            }, this),
            this.render()
        },
        eachPoints: function(t) {
            i.each(this.datasets, function(e) {
                i.each(e.points, t, this)
            }, this)
        },
        getPointsAtEvent: function(t) {
            var e = i.getRelativePosition(t)
              , s = i.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, e)
              , n = 2 * Math.PI / this.scale.valuesCount
              , o = Math.round((s.angle - 1.5 * Math.PI) / n)
              , a = [];
            return (o >= this.scale.valuesCount || o < 0) && (o = 0),
            s.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                a.push(t.points[o])
            }),
            a
        },
        buildScale: function(t) {
            this.scale = new e.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: t.labels,
                valuesCount: t.datasets[0].data.length
            }),
            this.scale.setScaleSize(),
            this.updateScaleRange(t.datasets),
            this.scale.buildYLabels()
        },
        updateScaleRange: function(t) {
            var e = function() {
                var e = [];
                return i.each(t, function(t) {
                    t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                        e.push(t.value)
                    })
                }),
                e
            }()
              , s = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            i.extend(this.scale, s)
        },
        addData: function(t, e) {
            this.scale.valuesCount++,
            i.each(t, function(t, i) {
                var s = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                this.datasets[i].points.push(new this.PointClass({
                    value: t,
                    label: e,
                    x: s.x,
                    y: s.y,
                    strokeColor: this.datasets[i].pointStrokeColor,
                    fillColor: this.datasets[i].pointColor
                }))
            }, this),
            this.scale.labels.push(e),
            this.reflow(),
            this.update()
        },
        removeData: function() {
            this.scale.valuesCount--,
            this.scale.labels.shift(),
            i.each(this.datasets, function(t) {
                t.points.shift()
            }, this),
            this.reflow(),
            this.update()
        },
        update: function() {
            this.eachPoints(function(t) {
                t.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            i.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: i.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            this.updateScaleRange(this.datasets),
            this.scale.setScaleSize(),
            this.scale.buildYLabels()
        },
        draw: function(t) {
            var e = t || 1
              , s = this.chart.ctx;
            this.clear(),
            this.scale.draw(),
            i.each(this.datasets, function(t) {
                i.each(t.points, function(t, i) {
                    t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                }, this),
                s.lineWidth = this.options.datasetStrokeWidth,
                s.strokeStyle = t.strokeColor,
                s.beginPath(),
                i.each(t.points, function(t, e) {
                    0 === e ? s.moveTo(t.x, t.y) : s.lineTo(t.x, t.y)
                }, this),
                s.closePath(),
                s.stroke(),
                s.fillStyle = t.fillColor,
                s.fill(),
                i.each(t.points, function(t) {
                    t.hasValue() && t.draw()
                })
            }, this)
        }
    })
}
.call(this),
$(function() {
    function t() {
        this.commentForm = $("#commentform"),
        this.txtComment = $("#comment_content"),
        this.btnShowMore = $("#btnMoreComment"),
        this.commentBox = $("div.comment-list-box"),
        this.commentPagination = $("#commentPage"),
        this.commentCountObj = this.commentForm.find("em"),
        this.commentTxt = $("#comment_replyId"),
        this.curH = 0,
        this.pageCount = 0,
        this.pageIndex = 1,
        this.curFloor = 1,
        this.commentCount = 0,
        this.commentPageObj = null,
        this.commentFontLimit = 1e3,
        this.firstLoad = !0,
        this.showAll = !1,
        this.initTxt(),
        this.init(),
        this.firstLoad = !1,
        this.bindBtn(),
        this.bindTxt(),
        this.commentCode(),
        this.comment(),
        this.getPagination = function(t) {
            var e = this.getData(t);
            e && (this.pageCount = e.page_count,
            this.commentCount = e.floor_count,
            this.commentPageObj.render({
                count: e.floor_count,
                current: t
            }),
            this.renderData(e.list))
        }
    }
    t.prototype.getData = function(t) {
        var e = this;
        e.pageIndex = void 0 !== t ? t : e.pageIndex;
        var i = null;
        return $.ajax({
            url: "/" + username + "/phoenix/comment/list/" + articleId + "?page=" + e.pageIndex + "&tree_type=1",
            type: "post",
            async: !1,
            success: function(t) {
                1 === t.result ? (i = t.data,
                i ? (e.commentBox.show(),
                e.commentPagination.show(),
                e.curFloor = i.floor_count - 5 * (e.pageIndex - 1)) : (e.commentBox.hide(),
                e.commentPagination.hide())) : alert("获取评论数据失败")
            },
            error: function() {
                alert("获取评论数据失败")
            }
        }),
        i
    }
    ,
    t.prototype.init = function() {
        var t = commentscount || !this.firstLoad ? this.getData(1) : null;
        if (null !== t) {
            this.pageCount = t.page_count,
            this.curFloor = t.floor_count,
            this.commentCount = t.floor_count,
            this.btnShowMore.text("查看 " + t.count + " 条热评"),
            this.renderData(t.list),
            t.floor_count <= 3 ? (this.btnShowMore.parent("div.opt-box").remove(),
            this.commentPagination.removeClass("d-none"),
            this.commentBox.css("max-height", "none"),
            this.showAll = !0) : this.showAll || this.countInitHeight();
            var e = this;
            null === this.commentPageObj ? t.page_count > 0 && (this.commentPageObj = new Paging,
            this.commentPageObj.init({
                target: this.commentPagination,
                pagesize: 5,
                count: this.commentCount,
                current: 1,
                firstTpl: "",
                lastTpl: "",
                callback: function(t, i, s) {
                    e.getPagination(t)
                }
            })) : this.commentPageObj.render({
                count: this.commentCount
            })
        } else
            this.btnShowMore.parent("div.opt-box").remove(),
            this.showAll = !0
    }
    ,
    t.prototype.countInitHeight = function() {
        var t = this;
        t.curH = 0,
        t.commentBox.find(">ul.comment-list:lt(3)").each(function(e) {
            t.curH += $(this).height()
        }),
        t.curH += 51,
        t.commentBox.css("max-height", t.curH)
    }
    ,
    t.prototype.initTxt = function() {
        var t = this;
        t.txtComment.focus(function() {
            $(this).addClass("open")
        }),
        $("body").click(function(e) {
            $(e.target).is("div.comment-edit-box *") || $(e.target).is(".btn-reply") || (t.txtComment.removeClass("open"),
            t.commentCountObj.text(t.commentFontLimit))
        })
    }
    ,
    t.prototype.bindBtn = function() {
        var t = this;
        t.commentBox.click(function(e) {
            var i = $(e.target).data("type");
            if (void 0 !== i)
                switch (i) {
                case "report":
                    showReport(!0);
                    break;
                case "reply":
                    currentUserName ? (location.href = "#commentsedit",
                    t.replayComment($(e.target)),
                    t.txtComment.trigger("focus")) : location.href = loginUrl + "#commentsedit";
                    break;
                case "readreply":
                    var s = $(e.target).parents("li").siblings("li.replay-box");
                    $(e.target).hasClass("open") ? ($(e.target).removeClass("open"),
                    $(e.target).text($(e.target).data("txt")),
                    s.hide(),
                    t.curH && t.commentBox.css("max-height", t.curH)) : ($(e.target).addClass("open").data("txt", $(e.target).text()),
                    $(e.target).text("收起回复"),
                    s.show(),
                    t.curH && t.commentBox.css("max-height", t.curH + s.height() + 18));
                    break;
                case "delete":
                    var n = $(e.target).parents("li.comment-line-box")
                      , o = n.data("commentid");
                    t.deleteComment(o)
                }
        }),
        this.btnShowMore.click(function() {
            t.commentBox.css("max-height", "none"),
            $("#commentPage").removeClass("d-none"),
            $(this).parent("div.opt-box").remove(),
            t.showAll = !0,
            t.curH = 0
        })
    }
    ,
    t.prototype.bindTxt = function() {
        var t = this;
        this.txtComment.blur(function() {
            $(this).data("selector", $(this).selection())
        }),
        this.txtComment.keyup(function() {
            var e = t.commentCountObj
              , i = t.commentFontLimit - $(this).val().length;
            i < 0 ? ($(this).val($(this).val().substring(0, t.commentFontLimit)),
            e.text(0)) : e.text(i)
        })
    }
    ,
    t.prototype.renderData = function(t) {
        this.commentBox.html("");
        for (var e = '<ul class="comment-list">', i = 0; i < t.length; i++) {
            var s = t[i].info
              , n = t[i].sub
              , o = void 0 !== n ? n.length : 0
              , e = '<ul class="comment-list">';
            if (e += this.buildHtml(s, o, !0),
            o > 0) {
                e += '<li class="replay-box">',
                e += '<ul class="comment-list">';
                for (var a = 0; a < o; a++) {
                    var r = n[a];
                    e += this.buildHtml(r, 0, !1)
                }
                e += "</ul>",
                e += "</li>"
            }
            e += "</ul>",
            this.commentBox.append($(e)),
            this.curFloor--
        }
        new CNick("ul.comment-list span.name").showNickname(),
        dp.SyntaxHighlighter.HighlightAll("code2")
    }
    ,
    t.prototype.buildHtml = function(t, e, i) {
        var s = ""
          , n = ""
          , o = ""
          , a = "";
        if (i) {
            var r = this.getQuoteInfo(t.Content);
            r.length > 1 ? (o = r[1],
            a = this.getCodeInfo(r[2]),
            s = this.getCodeInfo(r[3]),
            s = '<span class="quote">引用“<font color="black">' + o + "</font>”的评论：</span><blockquote>" + a + "</blockquote>" + s) : s = this.getCodeInfo(r[0])
        } else {
            var r = this.getReplyInfo(t.Content);
            n = r[1];
            var l = r.length > 2 ? this.getQuoteInfo(r[2]) : this.getQuoteInfo(r[0]);
            l.length > 1 ? (o = l[1],
            a = this.getCodeInfo(l[2]),
            s = this.getCodeInfo(l[3]),
            s = '<span class="quote">引用“<font color="black">' + o + "</font>”的评论：</span><blockquote>" + a + "</blockquote>" + s) : s = this.getCodeInfo(l[0])
        }
        var h = myUrl + t.UserName
          , c = '<li class="comment-line-box d-flex" data-commentid="' + t.CommentId + '" data-replyname="' + t.UserName + '">        <a target="_blank" href="' + h + '"><img src="' + t.Avatar + '" alt="' + t.UserName + '" class="avatar"></a>          <div class="right-box">            <div class="info-box">              <a target="_blank" href="' + h + '"><span class="name ' + (i ? "" : "mr-8") + '">' + (i ? t.UserName + "</a>" : t.UserName + ' </a></span>回复  <span class="name">' + (n ? n : "")) + '</span><span class="date">' + t.PostTime + "</span>" + (i ? '<span class="floor-num">#' + this.curFloor + "楼</span>" : "") + '</div>            <div class="comment">' + s + '</div>            <div class="opt-box">' + (isOwner || currentUserName === t.UserName ? '<a class="btn btn-link-blue btn-delete" data-type="delete">删除' : "") + '<a class="btn btn-link-blue btn-report" data-type="report">举报' + (1 !== commentAuth ? '<a class="btn btn-link-blue btn-reply" data-type="reply">回复' : "") + (e > 0 ? '<a class="btn btn-link-blue btn-read-reply" data-type="readreply">查看回复(' + e + ")" : "") + "</a></div>          </div>        </li>";
        return c
    }
    ,
    t.prototype.getReplyInfo = function(t) {
        var e = t.split(/\[reply]([\s\S]*?)\[\/reply\][\r\n]{0,1}/gi);
        return e
    }
    ,
    t.prototype.getQuoteInfo = function(t) {
        var e = t.split(/\[quote=([\w#\.]+)\]([\s\S]*?)\[\/quote\][\r\n]{0,2}/gi);
        return e
    }
    ,
    t.prototype.getCodeInfo = function(t) {
        var e = t.replace(/\[code=([\w#\.]+)\]([\s\S]*?)\[\/code\]/gi, function(t, e, i) {
            return "" == $.trim(i) ? "" : '<pre name="code2" class="' + e + '">' + i + "</pre>"
        });
        return e
    }
    ,
    t.prototype.replayComment = function(t) {
        var e = t.parents("li.comment-line-box")
          , i = e.data("commentid")
          , s = e.data("replyname");
        this.txtComment.val("[reply]" + s + "[/reply]\r\n"),
        this.commentTxt.val(i)
    }
    ,
    t.prototype.commentCode = function() {
        var t = this;
        $("#commentCode").find("a").click(function() {
            var e = t.txtComment.data("selector")
              , i = "[code=" + $(this).data("code") + "]\n" + e + "\n[/code]"
              , s = t.txtComment.val();
            t.txtComment.val(s + i)
        })
    }
    ,
    t.prototype.comment = function() {
        var t = this;
        $("#commentform").submit(function() {
            var e = $(this).find(":submit")
              , i = {
                replyId: t.commentTxt.val(),
                content: t.txtComment.val()
            };
            if ("" === i.content)
                alert("请填写评论内容");
            else {
                var s = blog_address + "/phoenix/comment/submit?id=" + articleId;
                $.ajax({
                    url: s,
                    type: "post",
                    data: i,
                    beforeSend: function() {
                        e.prop("disabled", !0).val("提交中")
                    },
                    success: function(e) {
                        1 === e.result ? (t.commentForm.trigger("reset"),
                        t.commentTxt.val(""),
                        t.init()) : alert(e.content ? e.content : "评论失败请重试")
                    },
                    complete: function() {
                        e.prop("disabled", !1).val("发表评论")
                    }
                })
            }
            return !1
        })
    }
    ,
    t.prototype.deleteComment = function(t) {
        var e = this;
        if (confirm("你确定要删除这篇评论吗？")) {
            var i = blog_address + "/phoenix/comment/delete?commentid=" + t + "&filename=" + articleId;
            $.get(i, function(t) {
                1 === t.result ? e.commentPageObj.go(e.pageIndex) : alert("你没有删除该评论的权限！")
            })
        }
    }
    ;
    new t
}),
$(function() {
    function t(t, i) {
        if (!(t.length < 2)) {
            var s = "";
            s += "<ol>";
            for (var n = 0, o = 0, a = 0, r = 0, l = 0, h = 0; h < t.length; h++) {
                var c = parseInt(t[h].tagName.substr(1), 10);
                if (n || (n = c),
                c > n ? (s += '<li class="sub-box"><ol>',
                o++) : c < n && o > 0 && (s += "</ol></li>",
                o--),
                1 == c)
                    for (; o > 0; )
                        s += "</ol>",
                        o--;
                n = c;
                var d = t.eq(h).text().replace(/^[\d.、\s]+/g, "");
                if (d = d.replace(/[^a-zA-Z0-9_\-\s\u4e00-\u9fa5]+/g, ""),
                d.length < 100 && d.length > 0)
                    switch (c) {
                    case 1:
                        ++a,
                        r = 0,
                        l = 0,
                        s += '<li><a href="#t' + h + '">' + d + "</a></li>",
                        t.eq(h).html('<a name="t' + h + '"></a>' + t.eq(h).html());
                        break;
                    case 2:
                        ++r,
                        l = 0,
                        s += '<li><a href="#t' + h + '">' + d + "</a></li>",
                        t.eq(h).html('<a name="t' + h + '"></a>' + t.eq(h).html());
                        break;
                    case 3:
                        ++l,
                        s += '<li><a href="#t' + h + '">' + d + "</a></li>",
                        t.eq(h).html('<a name="t' + h + '"></a>' + t.eq(h).html())
                    }
            }
            for (; o > 0; )
                s += "</ol>",
                o--;
            i.html(s),
            e()
        }
    }
    function e() {
        if (i.length > 9) {
            var t = 25 * $("div.toc-box").find("li:not(.sub-box)").length
              , e = 225
              , s = t - e
              , a = 0;
            o.find("button.btn-opt").click(function() {
                $(this).hasClass("nomore") || ($(this).hasClass("prev") ? (a -= 25,
                n.scrollTop(a),
                a <= 0 && $(this).addClass("nomore")) : (a += 25,
                n.scrollTop(a),
                a >= s && $(this).addClass("nomore")),
                $(this).siblings().removeClass("nomore"))
            })
        } else
            o.remove()
    }
    var i = $("#article_content").find("h1,h2,h3");
    if (i.length < 2)
        return $("#liTocBox").remove(),
        !1;
    i.length <= 2 && ($("#blog_artical_directory").hide(),
    $(".left_menu .menu_con").hide());
    var s = $("div.toc-container")
      , n = s.find("div.toc-box")
      , o = s.find("div.opt-box");
    if (!$(".first_li")[0]) {
        t(i, n);
        var a = !1;
        $("#liTocBox").hover(function() {
            s.finish().fadeIn(500),
            $(this).find("button.btn-toc").addClass("active"),
            a = !1
        }, function(t) {
            a = !0;
            var e = $(this);
            setTimeout(function() {
                a && (s.finish().fadeOut(500),
                e.find("button.btn-toc").removeClass("active"))
            }, 300)
        })
    }
}),
$(function() {
    function t(t) {
        return function(e) {
            return e.indexOf(t) > -1 ? e.splice(e.indexOf(t), 1) : null,
            e
        }
    }
    function e(t, e, i) {
        return void 0 === t[e] ? void 0 : t[e][i(0, t[e].length - 1)]
    }
    function i(t, e) {
        void 0 != e ? t.show().append('<div class="" data-track-view=\'{"mod":"popu_625","con":",' + e + ',from_edu"}\' ><a href="###"><iframe scrolling="no" allowfullscreen="true"  width="100%" height="162px" src="' + e + '" frameborder="0" seamless style="display: inherit;"></iframe></a></div>') : ""
    }
    var s = {
        BIGDATA2: "https://edu.csdn.net/sp/blog.php?type=bigdata2"
    };
    t(s.AI);
    try {
        "undefined" != typeof edu_ad_is_big_data && (edu_ad_is_big_data ? i($(".edu-promotion"), s.BIGDATA2) : i($(".edu-promotion"), e(edu_ad_id_mapping, ChannelId, csdn.random_num)))
    } catch (n) {
        console.log(n)
    }
}),
$(function() {
    var t = $('#article_content a[href^="#"]');
    t.each(function(t) {
        $(this).attr("target", "_self")
    })
}),
$(function() {
    function t() {
        var t = i.top + e.height();
        t = n ? t : t - s.height();
        var o = $(document).scrollTop();
        o >= t ? (n = !0,
        s.css({
            position: "fixed",
            left: i.left + "px",
            top: "-16px"
        })) : (n = !1,
        s.removeAttr("style"))
    }
    var e = $("aside")
      , i = e.offset()
      , s = $("#asideFooter")
      , n = (s.offset(),
    !1);
    $(document).scroll(function() {
        t()
    }),
    $(window).resize(function() {
        i = $("aside").offset(),
        t()
    })
}),
function() {
    function t(t, e) {
        t += 10,
        a.loadingBox.before('<div class="recommend-item-box recommend-ad-box" id="a_d_feed_' + t + '"></div>');
        var i = a.listBox.outerWidth() - 48;
        NEWS_FEED({
            w: i,
            h: 90,
            showid: e,
            placeholderId: "a_d_feed_" + t,
            inject: "define",
            define: {
                imagePosition: "right",
                imageBorderRadius: 0,
                imageWidth: 120,
                imageHeight: 90,
                imageFill: "clip",
                displayImage: !0,
                displayTitle: !0,
                titleFontSize: 20,
                titleFontColor: "#333",
                titleFontFamily: "Microsoft Yahei",
                titleFontWeight: "bold",
                titlePaddingTop: 0,
                titlePaddingRight: 0,
                titlePaddingBottom: 10,
                titlePaddingLeft: 0,
                displayDesc: !0,
                descFontSize: 14,
                descFontColor: "#6b6b6b",
                descFontFamily: "Microsoft Yahei",
                paddingTop: 0,
                paddingRight: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                backgroundColor: "#fff",
                hoverColor: "#ca0c16"
            }
        })
    }
    function e() {
        var t = "_" + Math.random().toString(36).slice(2);
        a.loadingBox.before('<div class="recommend-item-box recommend-ad-box" id="' + t + '"></div>'),
        (window.slotbydup = window.slotbydup || []).push({
            id: "u3394176",
            container: t,
            display: "inlay-fix",
            async: !0
        })
    }
    function i(t) {
        t += 10,
        a.loadingBox.before('<div class="recommend-item-box recommend-ad-box" id="yd_a_d_feed_' + t + '"></div>');
        var e = document.createElement("script");
        e.setAttribute("async", "async"),
        e.setAttribute("charset", "utf-8"),
        e.setAttribute("data-notify", "inforFlowMulti_notify"),
        e.setAttribute("src", "https://shared.ydstatic.com/js/yatdk/3.0.0/stream.js"),
        e.setAttribute("data-id", "8935aa488dd58452b9e5ee3b44f1212f"),
        e.setAttribute("data-insert-nodes", "yd_a_d_feed_" + t),
        e.setAttribute("data-pos", "inline"),
        e.setAttribute("data-img-Style", "float:right;width:120px;"),
        e.setAttribute("data-des-Style", "color: #8e959a;line-height: 24px;font-size:14px;font-family: 'PingFang SC', 'Microsoft YaHei', SimHei, Arial, SimSun;"),
        e.setAttribute("data-tit-Style", "font-size:20px;font-weight:bold;margin-bottom:10px;font-family: 'PingFang SC', 'Microsoft YaHei', SimHei, Arial, SimSun;"),
        e.setAttribute("data-div-Style", "background-image: url(//img-ads.csdn.net/2016/201608021757063065.png);background-repeat: no-repeat;background-position: bottom left;"),
        document.body.appendChild(e)
    }
    function s() {
        a.datacount - 7 > 0 && a.datacount % 5 === 0 && (a.adIdx % 2 === 1 ? i(a.adIdx) : e(),
        a.adIdx++),
        2 === a.datacount && (t(a.adIdx, "GNKXx7"),
        a.adIdx++),
        6 === a.datacount && (t(a.adIdx, "Afihld"),
        a.adIdx++)
    }
    function n(t) {
        for (var e = 0; e < t.length; e++)
            isShowAds && s(),
            a.datacount++,
            a.loadingBox.before(t[e])
    }
    function o() {
        $.ajax({
            url: "/" + username + "/article/GetRelatedArticles?pageindex=" + a.pageIdx + "&articleId=" + articleId,
            beforeSend: function() {
                a.loadingBox.show()
            },
            success: function(t) {
                a.loadingBox.hide(),
                t = JSON.parse(t),
                t.length > 0 ? n(t) : (a.noMoreData = !0,
                a.endBox.show())
            },
            complete: function() {
                a.loading = !1
            }
        }),
        a.pageIdx++
    }
    var a = {
        datacount: recommendCount,
        pageIdx: 2,
        adIdx: 1,
        listBox: $("div.recommend-box"),
        loadingBox: $("div.recommend-box").find("div.recommend-loading-box"),
        endBox: $("div.recommend-box").find("div.recommend-end-box"),
        noMoreData: !1,
        loading: !1
    };
    o();
    var r = a.listBox.offset().top
      , l = $(window).height();
    $(document).scroll(function() {
        if (!a.noMoreData && !a.loading) {
            var t = r + a.listBox.height() - l
              , e = $(document).scrollTop();
            t < e && (a.loading = !0,
            o())
        }
    })
}(),
$(function() {
    function t(t) {
        r.hide(),
        h = t,
        h ? o.text("您举报的评论来自文章：") : o.text("举报内容："),
        a.show(),
        n.show()
    }
    function e() {
        n.find("#frmReport").trigger("reset"),
        a.hide(),
        n.hide()
    }
    function i(t) {
        var e = window.location.origin + "/"
          , i = new RegExp("^[" + e + "]\\w+[/article/details/]\\d*","i");
        return i.test(t)
    }
    var s = '<div class="report-box">  <div class="pos-box">      <h2 class="title">不良信息举报</h2>      <a class="btn-close">          <svg class="icon" aria-hidden="true">              <use xlink:href="#csdnc-times"></use>          </svg>      </a>      <form id="frmReport">          <div class="form-box">              <div class="txt-row-box">                  <label class="title" id="reptTit">举报内容：</label>                  <p class="rpt-title text-truncate">' + articleTit + '</p>              </div>              <div class="txt-row-box">                  <label class="title">举报原因：</label>                  <div class="rdo-box">                      <label><input type="radio" class="rdo-chk report-type" id="report_sex" name="report_type" value="1">色情</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_Politics" name="report_type" value="2">政治</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_copy" name="report_type" value="3">抄袭</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_ad" name="report_type" value="4">广告</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_want" name="report_type" value="5">招聘</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_call" name="report_type" value="6">骂人</label>                      <label><input type="radio" class="rdo-chk report-type" id="report_other" name="report_type" value="7">其他</label>                  </div>              </div>              <div class="txt-row-box" id="rptOriginalurl">                  <label class="title">原文地址：</label>                  <div class="txt-box">                      <input class="ipt" type="text" id="originalurl" name="originalurl">                  </div>              </div>              <div class="txt-row-box">                  <label class="title">原因补充：</label>                  <div class="txt-box">                      <textarea class="ipt ipt-textarea" name="description" maxlength="30"></textarea>                      <p class="remark">最多只允许输入30个字</p>                  </div>              </div>          </div>          <div class="opt-box text-right">              <input type="reset" class="btn btn-link-gray btn-close" value="取消">              <input type="submit" class="btn btn-red btn-submit" value="提交">          </div>      </form>  </div>  </div>';
    $("body").append(s);
    var n = $("div.report-box")
      , o = n.find("#reptTit")
      , a = $("div.mask-dark")
      , r = $("#rptOriginalurl")
      , l = n.find('textarea[name="description"]')
      , h = !1
      , c = 0;
    n.find(".btn-close").click(e),
    $(".report-type").click(function() {
        r.hide();
        var t = r.find(':text[name="originalurl"]').val("")
          , e = $(this).val();
        "3" === e && (r.css("display", "flex"),
        t.focus()),
        "7" === e && (t.focus(),
        l.focus())
    }),
    $("#frmReport").submit(function() {
        var t = $("input[name=report_type]:checked").val();
        if (!t)
            return alert("请选择举报原因！"),
            !1;
        var s = "";
        switch (t) {
        case "3":
            if (s = $("#originalurl").val(),
            "" == s || "http://" == s)
                return alert("举报抄袭必须提供原创文章地址！"),
                $("#originalurl").focus(),
                !1;
            if (!i(s))
                return alert("请输入正确的原创文章地址！"),
                $("#originalurl").focus(),
                !1;
            break;
        case "7":
            if (s = l.val(),
            !s)
                return alert("请填写举报的具体原因！"),
                l.focus(),
                !1
        }
        nowTime = {
            year: (new Date).getFullYear(),
            month: parseInt((new Date).getMonth()) + 1,
            day: (new Date).getDate(),
            hours: parseInt((new Date).getHours()) + 1,
            minutes: parseInt((new Date).getMinutes()) + 1,
            seconds: parseInt((new Date).getSeconds()) + 1
        };
        var n = {
            articleId: articleId,
            commentId: h ? c : 0,
            reportType: t,
            originalurl: $("#originalurl").val(),
            report_other_content: l.val(),
            report_description: l.val(),
            currentUserName: currentUserName,
            updatetime: nowTime.year + "/" + nowTime.month + "/" + nowTime.day + " " + nowTime.hours + ":" + nowTime.minutes + ":" + nowTime.seconds,
            blogUser: username
        };
        return $.post(blog_address + "/common/report?id=" + articleId + "&t=" + (h ? 3 : 2), n, function(t) {
            1 == t.result ? (e(),
            alert("感谢您的举报，我们会尽快审核！")) : t.content && alert(t.content)
        }),
        !1
    }),
    $("div.comment-box").on("click", "a.btn-report", function() {
        c = $(this).parents("li.comment-line-box").data("commentid"),
        t(!0)
    }),
    window.showReport = t
}),
baiduKey && (csdn.afterCasInit = function(t, e) {
    return !!t && void csdn.baiduSearch(t, function(t) {
        needInsertBaidu && showResult(t)
    })
}
),
baiduKey && !needInsertBaidu) {
    var BaiduDataL = $('a[strategy*="searchFromBaidu"]').length
      , str = "keyword=" + baiduKey + "&count=" + BaiduDataL;
    trackByGraylog("storage_baidu_exist?" + str)
}
ToolMeau.prototype.initPos = function() {
    var t = this;
    this.setPosX(),
    this.setPosY(),
    this.toolBox.show(),
    $(window).resize(function() {
        t.setPosX()
    })
}
,
ToolMeau.prototype.setPosX = function() {
    var t = this.posReference.offset().left
      , e = this.posReference.width()
      , i = $(window).width()
      , s = this
      , n = 0;
    switch (this.posType) {
    case "left":
        n = t - this.toolBox.interval - this.toolBox.width;
        break;
    case "right":
        n = i - (t + e + this.toolBox.width + this.toolBox.interval),
        this.toolBox.find("div.toc-container").addClass("pos-left")
    }
    n = n > 0 ? n : 0,
    this.toolBox.css(s.posType, n + "px")
}
,
ToolMeau.prototype.setPosY = function() {
    var t = this;
    $(document).scroll(function() {
        var e = $(document).scrollTop();
        e > t.fixTop + 40 ? t.toolBox.css("top", "40px") : t.toolBox.css("top", t.fixTop - e + "px")
    })
}
,
ToolMeau.prototype.setDigg = function() {
    var t = this.toolBox.find("button.btn-like");
    t.click(function() {
        if (currentUserName) {
            var t = $(this);
            $.get(blog_address + "/phoenix/article/digg?ArticleId=" + articleId, function(e) {
                e.status ? t.addClass("liked") : t.removeClass("liked"),
                t.find("p").text(e.digg)
            })
        } else
            location.href = loginUrl
    })
}
,
ToolMeau.prototype.initFavorite = function() {
    var t = this.toolBox.find("button.btn-bookmark");
    t.click(function() {
        currentUserName ? $(this).hasClass("liked") ? alert("您已经收藏过") : $.ajax({
            url: "https://my.csdn.net/my/favorite/do_add/2",
            dataType: "json",
            type: "get",
            xhrFields: {
                withCredentials: !0
            },
            crossDomain: !0,
            data: {
                title: articleTit,
                url: curentUrl,
                share: 1,
                map_name: ""
            },
            success: function(e) {
                1 == e.succ ? (t.addClass("liked"),
                alert("收藏成功,可以在个人中心查看我的收藏")) : ("您已经收藏过" === e.msg && t.addClass("liked"),
                alert(e.msg))
            }
        }) : location.href = loginUrl
    })
}
,
ToolMeau.prototype.init = function() {
    this.setDigg(),
    this.initFavorite()
}
,
window.csdn.loginbox = loginbox,
"undefined" != typeof document.addEventListener && document.addEventListener("DOMContentLoaded", function() {
    return "undefined" == typeof Chart ? void ("undefined" != typeof console && console.log("ERROR: You must include chart.min.js on this page in order to use Chart.js")) : void [].forEach.call(document.querySelectorAll("div.chartjs"), function(t) {
        var e, i;
        e = "undefined" != typeof chartjs_colors ? chartjs_colors : "undefined" != typeof chartjs_colors_json ? JSON.parse(chartjs_colors_json) : {
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: ["#B33131", "#B66F2D", "#B6B330", "#71B232", "#33B22D", "#31B272", "#2DB5B5", "#3172B6", "#3232B6", "#6E31B2", "#B434AF", "#B53071"]
        },
        i = "undefined" != typeof chartjs_config ? chartjs_config : "undefined" != typeof chartjs_config_json ? JSON.parse(chartjs_config_json) : {
            Bar: {
                animation: !1
            },
            Doughnut: {
                animateRotate: !1
            },
            Line: {
                animation: !1
            },
            Pie: {
                animateRotate: !1
            },
            PolarArea: {
                animateRotate: !1
            }
        };
        var s = t.getAttribute("data-chart")
          , n = JSON.parse(t.getAttribute("data-chart-value"));
        if (n && n.length && s) {
            t.innerHTML = "";
            var o = document.createElement("canvas");
            o.height = t.getAttribute("data-chart-height"),
            t.appendChild(o);
            var a = document.createElement("div");
            a.setAttribute("class", "chartjs-legend"),
            t.appendChild(a);
            var r, l = o.getContext("2d"), h = new Chart(l);
            if ("bar" != s)
                for (r = 0; r < n.length; r++)
                    n[r].color = e.data[r],
                    n[r].highlight = e.data[r];
            if ("bar" == s || "line" == s) {
                var c = {
                    datasets: [{
                        label: "",
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        highlightFill: e.highlightFill,
                        highlightStroke: e.highlightStroke,
                        data: []
                    }],
                    labels: []
                };
                for (r = 0; r < n.length; r++)
                    n[r].value && (c.labels.push(n[r].label),
                    c.datasets[0].data.push(n[r].value));
                a.innerHTML = ""
            }
            "bar" == s ? h.Bar(c, i.Bar) : "line" == s ? h.Line(c, i.Line) : "polar" == s ? a.innerHTML = h.PolarArea(n, i.PolarArea).generateLegend() : "pie" == s ? a.innerHTML = h.Pie(n, i.Pie).generateLegend() : a.innerHTML = h.Doughnut(n, i.Doughnut).generateLegend()
        }
    })
}),
$(function() {
    new CSDNviewImg("article")
}),
$(function() {
    function t(t) {
        confirm("你确定要删除这篇文章吗？") && $.get(blog_address + "/phoenix/article/delete?articleId=" + t, function(t) {
            var e = t;
            e.result ? (alert("文章已删除！"),
            location.reload()) : e.content ? alert(e.content) : alert("无法删除，请到后台删除！")
        })
    }
    var e = {
        markdown_line: function() {
            $(".markdown_views pre").addClass("prettyprint"),
            $("pre.prettyprint code").each(function() {
                var t = $(this).text().split("\n").length
                  , e = $("<ul/>").addClass("pre-numbering").hide();
                for ($(this).addClass("has-numbering").parent().append(e),
                i = 1; i <= t; i++)
                    e.append($("<li/>").text(i));
                e.fadeIn(1700)
            }),
            $(".pre-numbering li").css("color", "#999"),
            setTimeout(function() {
                $(".math").each(function(t, e) {
                    $(this).find("span").last().css("color", "#fff")
                })
            }),
            setTimeout(function() {
                $(".toc a[target='_blank']").attr("target", ""),
                $("a.reversefootnote,a.footnote").attr("target", "")
            }, 500)
        },
        html_line: function() {
            function t() {
                $(".CopyToClipboard").each(function() {
                    var t = new ZeroClipboard.Client;
                    t.setHandCursor(!0),
                    t.addEventListener("load", function(t) {}),
                    t.addEventListener("mouseOver", function(t) {
                        var e = t.movie.parentNode.parentNode.parentNode.parentNode.nextSibling.innerHTML;
                        e = e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"),
                        t.setText(e)
                    }),
                    t.addEventListener("complete", function(t, e) {
                        alert("代码已经复制到你的剪贴板。")
                    }),
                    t.glue(this, this.parentNode)
                })
            }
            $(".article_content pre").each(function() {
                var t = $(this);
                try {
                    if (t.attr("class").indexOf("brush:") != -1) {
                        var e = t.attr("class").split(";")[0].split(":")[1];
                        t.attr("name", "code"),
                        t.attr("class", e)
                    }
                    t.attr("class") && t.attr("name", "code")
                } catch (i) {
                    console.log("未使用编辑器的插入代码按钮插入代码或者编辑器生成的源代码被破坏")
                }
            }),
            $(".article_content textarea[name=code]").each(function() {
                var t = $(this);
                t.attr("class").indexOf(":") != -1 && t.attr("class", t.attr("class").split(":")[0])
            }),
            dp.SyntaxHighlighter.HighlightAll("code"),
            $(".highlighter").addClass("dp-highlighter"),
            window.clipboardData || setTimeout(t, 1e3)
        }
    }
      , s = $(".markdown_views")[0];
    s ? e.markdown_line() : e.html_line(),
    $("#btnSuperDel").click(function() {
        t(articleId)
    })
});
