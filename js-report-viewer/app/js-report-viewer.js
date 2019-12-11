var showCreditReport = function (divId, reportBody, options) {
    var windowObject = window;
    var ReportViewer = function () {
        return new Promise(function (resolve, reject) {
            var $jq = windowObject.jQuery;
            if (!$jq) {
                reject("jQuery is not available...");
                return;
            }
            var $div = $jq(divId);
            if (!$div || $div.length === 0) {
                reject("Element not found " + divId + "...");
                return;
            }
            var includeBootstrap = options && options.includeBootstrap;
            var containerClass = $div.data('container-class');
            containerClass && $div.addClass(containerClass);
            if (!includeBootstrap) {
                includeBootstrap = $div.data('include-bootstrap');
            }
            console.log(includeBootstrap);
            loadCSS(includeBootstrap && 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css')
                .then(function (script) { return loadJavaScript(includeBootstrap && 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js'); })
                .catch(function (error) { });
            var $html = "\n                <div class='row'>\n                    <div class='col-md-12'>\n                        Loading report viewer...\n                    </div>\n                </div>\n            ";
            $div.html($html);
            console.log($div);
            console.log(reportBody);
            console.log(options);
            console.log(includeBootstrap);
            resolve({ 'success': true });
        });
    };
    var loadCSS = function (src, parentTagName) {
        if (!parentTagName) {
            parentTagName = "head";
        }
        var parentTagObject = document.getElementsByTagName(parentTagName);
        return new Promise(function (resolve, reject) {
            if (!src) {
                resolve();
                return;
            }
            console.log("Loading CSS " + src);
            if (!parentTagObject) {
                reject("Parent tag not found.");
                return;
            }
            try {
                var head = parentTagObject[0];
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = src;
                link.media = 'all';
                head.appendChild(link);
                resolve(src);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    var loadJavaScript = function (src, parentTagName) {
        if (!parentTagName) {
            parentTagName = "head";
        }
        var parentTagObject = document.getElementsByTagName(parentTagName);
        return new Promise(function (resolve, reject) {
            if (!src) {
                resolve();
                return;
            }
            console.log("Loading Java-script " + src);
            if (!parentTagObject) {
                reject("Parent tag not found.");
                return;
            }
            try {
                var script_1 = document.createElement("SCRIPT");
                script_1.src = src;
                script_1.type = 'text/javascript';
                script_1.onload = function () {
                    resolve(script_1);
                };
                parentTagObject[0].appendChild(script_1);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    var $jq = windowObject.jQuery;
    loadJavaScript(!$jq && 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js')
        .then(function (script) {
        if (!$jq) {
            var $_1 = windowObject.jQuery;
        }
        ReportViewer().catch(function (errorr) { console.error(errorr); });
    })
        .catch(function (error) {
        console.error(error);
    });
};
