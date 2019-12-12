var showCreditReport = function (divId, reportBody, options) {
    var windowObject = window;
    var Constants;
    (function (Constants) {
        Constants["jQueryPath"] = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
        Constants["bootstrapJSPath"] = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
        Constants["bootstrapCSSPath"] = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css";
        Constants["mockDataPath"] = "mockData/credmo.genericObject.mock.json";
    })(Constants || (Constants = {}));
    var loadJavaScript = function (src, parentTagName) {
        if (!parentTagName) {
            parentTagName = 'head';
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
                var script_1 = document.createElement('SCRIPT');
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
    var loadCSS = function (src, parentTagName) {
        if (!parentTagName) {
            parentTagName = 'head';
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
    var showErrorMessage = function (error) {
        var $jq = windowObject.jQuery;
        var $div = $jq(divId);
        console.error(error);
        $div.find('.error').removeClass('hidden').find('.error-content').html(error);
        $div.find('.content').hide();
    };
    var getGenericReportObject = function () {
        return new Promise(function (resolve, reject) {
            var $jq = windowObject.jQuery;
            var $div = $jq(divId);
            var mockData = options && options.mockData ? options.mockData : $div.data('mock-data');
            var reportServiceUrl = options && options.reportServiceUrl ? options.reportServiceUrl : $div.data('report-service-url');
            var reportObject = options && options.reportObject ? options.reportObject : $div.data('report-object');
            if (mockData) {
                $.get(Constants.mockDataPath).then(function (data) { return resolve(data); }).catch(function (error) { return reject(error); });
            }
            else if (reportServiceUrl) {
                $.get(reportServiceUrl).then(function (data) { return resolve(data); }).catch(function (error) { return reject(error); });
            }
            else if (reportObject) {
                resolve(eval(reportObject));
            }
            else {
                reject('Could not load generic report object. Please check the data configuration.');
            }
        });
    };
    var maskSSN = function (ssn) { return 'xxx-xx-' + ssn.substring(ssn.length - 4); };
    var initializeReportViewer = function () {
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
            var includeBootstrap = options && options.includeBootstrap ? options.includeBootstrap : $div.data('include-bootstrap');
            var containerClass = options && options.containerClass ? options.containerClass : $div.data('container-class');
            containerClass && $div.addClass(containerClass);
            if (includeBootstrap) {
                $div.hide();
                loadCSS(Constants.bootstrapCSSPath)
                    .then(function (script) { return loadJavaScript(Constants.bootstrapJSPath); })
                    .then(function (script) { return $div.show(); })
                    .catch(function (error) { return $div.show(); });
            }
            ;
            var $html = "\n                <div class='row hidden error'>\n                    <div class='col-md-12 error-content'>\n                    </div>\n                </div>\n                <div class='content'>\n                    <div class='text-center'>\n                        Loading report viewer...\n                    </div>\n                </div>\n            ";
            $div.html($html);
            getGenericReportObject().then(function (reportObject) {
                console.log(reportObject);
                var reportData = reportObject.data.reportData;
                console.log(reportData.bureauFulfillmentKey);
                console.log(reportData.bureau);
                var $reportHtml = '';
                var $previousAddresses = '';
                var $summary = '';
                var $scoreSummary = '';
                var $inquiries = '';
                if (reportData.demographicData.previousAddresses) {
                    $previousAddresses += "\n                    <div class='previous-addresses'>\n                        <div class='address-header previous-address-header'>\n                            Previous Addresses:\n                        </div>";
                    reportData.demographicData.previousAddresses.forEach(function (address) {
                        $previousAddresses += "\n                            <div class='address-header previous-address'>\n                                " + address.address1 + " " + address.city + " " + address.state + " " + address.zip + " \n                            </div>";
                    });
                    $previousAddresses += "\n                    </div>";
                }
                $summary += "\n                <div class='summary'>\n                    <div class='row'>\n                        <div class='summary-header col-md-12'>\n                            Credit Report Summary\n                        </div>\n                    </div>                \n                    <div class='row'>\n                        <div class='col-md-3'>Monthly Payments</div>\n                        <div class='col-md-3'>Balances</div>\n                        <div class='col-md-3'>Derogatory Accounts</div>\n                        <div class='col-md-3'>Delinquent Accounts</div>\n                    </div>                \n                    <div class='row'>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.totalMonthlyPayments + "</div>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.totalBalances + "</div>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.derogatoryAccounts + "</div>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.delinquentAccounts + "</div>\n                    </div>                \n                    <div class='row'>\n                        <div class='col-md-3'>Close Accounts</div>\n                        <div class='col-md-3'>Open Accounts</div>\n                        <div class='col-md-3'>Total Accounts</div>\n                    </div>\n                    <div class='row'>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.closeAccounts + "</div>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.openAccounts + "</div>\n                        <div class='col-md-3'>" + reportData.summary.tradelineSummary.totalAccounts + "</div>\n                    </div>\n                    <div class='row'>\n                        <div class='col-md-3'>Total Inquiries</div>\n                        <div class='col-md-3'>Total Public Records</div>\n                    </div>\n                    <div class='row'>\n                        <div class='col-md-3'>" + reportData.summary.inquirySummary.numberInLast2Years + "</div>\n                        <div class='col-md-3'>" + reportData.summary.publicRecordSummary.numberOfRecords + "</div>\n                    </div>\n                </div>\n                ";
                $scoreSummary = "\n                <div class='score-summary'>\n                    <div class='row'>\n                        <div class='col-md-3'>Score</div>\n                        <div class='col-md-3'>Type</div>\n                        <div class='col-md-3'>Rank</div>\n                    </div>\n                    <div class='row'>\n                        <div class='col-md-3'>" + reportData.creditScore.riskScore + "</div>\n                        <div class='col-md-3'>" + reportData.creditScore.scoreName + "</div>\n                        <div class='col-md-3'>" + reportData.creditScore.populationRank + "</div>\n                    </div>\n                </div>\n                ";
                $reportHtml += "<div class='row'>\n                    <div class='col-md-12'>\n                        <div class='name-header'>\n                            Credit Report for " + reportData.demographicData.name.first + " " + reportData.demographicData.name.middle + " " + reportData.demographicData.name.last + "\n                        </div>\n                        <div class='ssn-header'>\n                            SSN: " + maskSSN(reportData.demographicData.SSN) + "\n                        </div>\n                        <div class='dob-header'>\n                            Date of Birth: " + reportData.demographicData.dateOfBirth + "\n                        </div>\n                        <div class='address-header'>\n                            Address: " + reportData.demographicData.address.address1 + " " + reportData.demographicData.address.city + " " + reportData.demographicData.address.state + " " + reportData.demographicData.address.zip + " \n                        </div>\n                        " + $previousAddresses + "\n                    </div>\n                </div>\n                \n                " + $summary + "\n                " + $scoreSummary + "\n                " + $inquiries + "\n                ";
                $div.find('.content').html($reportHtml);
            })
                .catch(function (error) {
                showErrorMessage(error);
                reject(error);
                return;
            });
            resolve({ 'success': true });
        });
    };
    var $jq = windowObject.jQuery;
    loadJavaScript(!$jq && Constants.jQueryPath)
        .then(function (script) {
        if (!$jq) {
            var $_1 = windowObject.jQuery;
        }
        initializeReportViewer().catch(function (error) { console.error(error); });
    })
        .catch(function (error) {
        console.error(error);
    });
};
