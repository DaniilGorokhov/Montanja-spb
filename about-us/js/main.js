if ((!!document.documentMode) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))) {
    b = [];
    for (let i = 0; i < document.getElementsByName('forIEAndSafari').length; i++) {
        b.push(document.getElementsByName('forIEAndSafari')[i].src);
        b[i] = b[i].slice(0, b[i].length - 4) + 'jpg';
        document.getElementsByName('forIEAndSafari')[i].src = b[i];
    }
}
