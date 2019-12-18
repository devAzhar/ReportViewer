// IFFI
(() => {
    // TS Hack
    const windowObject: any = window;

    const Globals = {
        Bureaus : {
            'tui': 'Transunion',
            'efx': 'Equifax',
            'exp': 'Experian'
        },
        Constants: {
            jQueryPath: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
            bootstrapJSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
            bootstrapCSSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
            mockDataPath: 'mockData/credmo.genericObject.mock.json',
            defaultCallBack: `displayGenericReport`,
            jsonPScriptId: `#genericReportViewer`
        },
        WidgetID: () => `genericReport${Math.random()}`.replace(`.`, ``),
    };

    const CommonFunction = {
        loadJavaScript: (src: string, parentTagName?: string) => {
            if(!parentTagName) {
                parentTagName = 'head';
            }
    
            const parentTagObject: any = document.getElementsByTagName(parentTagName);
    
            return new Promise((resolve, reject) => {
                if(!src) {
                    resolve();
                    return;
                }
                console.log(`Loading Java-script ${src}`);
    
                if(!parentTagObject) {
                    reject(`Parent tag not found.`);
                    return;
                }
    
                try {
                    const script: any = document.createElement('SCRIPT');
                    script.src = src;
                    script.type = 'text/javascript';
    
                    script.onload = function() {
                        resolve(script);
                    };
                    
                    parentTagObject[0].appendChild(script);
                } catch(e) {
                    reject(e);
                }
            });
        },
        formatCurrency: (input, decPlaces?, decSep?, thouSep?, symbol?) => {
            decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
            decSep = typeof decSep === "undefined" ? "." : decSep;
            thouSep = typeof thouSep === "undefined" ? "," : thouSep;
            const sign = input < 0 ? "-" : "";
            const i = String(parseInt(input = Math.abs(Number(input) || 0).toFixed(decPlaces)));
            var j = (j = i.length) > 3 ? j % 3 : 0;
            
            const numberValue = parseInt(i);
        
            if (!symbol) {
                symbol = '$';
            }
        
            return symbol + sign +
                (j ? i.substr(0, j) + thouSep : "") +
                i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
                (decPlaces ? decSep + Math.abs(input - numberValue).toFixed(decPlaces).slice(2) : "");
        },
        loadCSS: (src: string, parentTagName?: string) => {
            if(!parentTagName) {
                parentTagName = 'head';
            }
    
            const parentTagObject: any = document.getElementsByTagName(parentTagName);
    
            return new Promise((resolve, reject) => {
                if(!src) {
                    resolve();
                    return;
                }
    
                console.log(`Loading CSS ${src}`);
    
                if(!parentTagObject) {
                    reject(`Parent tag not found.`);
                    return;
                }
    
                try {
                    const head: any = parentTagObject[0];
                    const link: any = document.createElement('link');
                    link.rel  = 'stylesheet';
                    link.type = 'text/css';
                    link.href = src;
                    link.media = 'all';
                    head.appendChild(link);
                    
                    resolve(src);
                } catch(e) {
                    reject(e);
                }
            });
        },
        showErrorMessage: (error: any) => {
            const $jq = windowObject.jQuery;
    
            $jq(document).ready(() => {
                const $div = $jq(`#${$widgetID}`);
                $div.find('.error').removeClass('hidden').find('.error-content').html(error);
                $div.find('.content').hide();
                console.error(error);
            });
        }, getGenericReportObject: () => {
            return new Promise((resolve, reject) => {
                const $jq = windowObject.jQuery;
                const $jsonPScriptTag = $jq(jsonPScriptId);
    
                const mockData: boolean = options && options.mockData ? options.mockData : $jsonPScriptTag.data('mock-data');
                const reportServiceUrl: string = options && options.reportServiceUrl ? options.reportServiceUrl : $jsonPScriptTag.data('report-service-url');
                const reportObject: any = options && options.reportObject ? options.reportObject : $jsonPScriptTag.data('report-object');
    
                if (mockData) {
                    console.log(`Loading Mock Data`);
                    $.get(Globals.Constants.mockDataPath).then(data => resolve(data)).fail(error => reject(error));
                } else if (reportServiceUrl) {
                    console.log(`Loading ${reportServiceUrl}`);
                    $.get(reportServiceUrl).then(data => resolve(data)).fail(error => reject(error));
                } else if (reportObject) {
                    console.log(`Loading reportObject`);
                    resolve(eval(reportObject));
                } else {
                    reject('Could not load generic report object. Please check the data configuration.');
                }
            });
        }, 
        maskSSN: ssn => 'xxx-xx-' + ssn.substring(ssn.length-4)
    }

    let jsonPCallBack = Globals.Constants.defaultCallBack;

    // TODO: No Options for now, will remove this later
     const options = null;
    // TODO -> Remove the depandancy on jsonPScriptId
    const jsonPScriptId = Globals.Constants.jsonPScriptId;
    const $widgetID = Globals.WidgetID();

    const displayReportViewer = (reportObject: any) => {
        const $jq = windowObject.jQuery;
        const reportData = reportObject.reportData;

        console.log(reportData.bureauFulfillmentKey);
        console.log(reportData.bureau);

        let $reportHtml: string = '';
        let $previousAddresses: string = '';
        let $summary: string = '';
        let $scoreSummary: string = '';
        let $inquiries: string = '';

        if (reportData.demographicData.previousAddresses) {
            $previousAddresses += `
            <div class="card-body previous-addresses">
                <div class='card-title'><h5>Previous Addresses:</h5></div>
                <ul class="list-group">
                `;
                reportData.demographicData.previousAddresses.forEach(address => {
                    $previousAddresses += `
                    <li class="list-group-item">
                        ${address.address1}, ${address.city}, ${address.state} ${address.zip} 
                    </li>`;
                });
                
                $previousAddresses += `</ul>
            </div>
            `;
        }

        const cardsContainerType = `card-deck`; //card-deck, card-group, card-columns
        $summary += `
        <div class="${cardsContainerType} card-body">
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.tradelineSummary.totalAccounts}</strong> Total Accounts
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.tradelineSummary.openAccounts}</strong> Open Accounts
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.tradelineSummary.closeAccounts}</strong> Closed Accounts
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.tradelineSummary.derogatoryAccounts}</strong> Derogatory Accounts
                </div>
            </div>
        </div>
        <div class="${cardsContainerType} card-body">
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.tradelineSummary.delinquentAccounts}</strong> Delinquent Accounts
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.inquirySummary.numberInLast2Years}</strong> Total Inquiries Count
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <strong>${reportData.summary.publicRecordSummary.numberOfRecords}</strong> Total Public Records
                </div>
            </div>
            <div class="card" style='border: none;'></div>
        </div>
        `;
        
        $scoreSummary = `
            <div class="${cardsContainerType} card-body">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Credit Score</h5>
                        <p class="card-text">${reportData.creditScore.riskScore}</p>
                        <p class="card-text"><small class="text-muted">${reportData.creditScore.scoreName}</small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Score Rank</h5>
                        <p class="card-text">${reportData.creditScore.populationRank}</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Balance</h5>
                        <p class="card-text">${CommonFunction.formatCurrency(reportData.summary.tradelineSummary.totalBalances)}</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Monthly Payments</h5>
                        <p class="card-text">${CommonFunction.formatCurrency(reportData.summary.tradelineSummary.totalMonthlyPayments)}</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>`;

        const bureauName = Globals.Bureaus[reportData.bureau]?Globals.Bureaus[reportData.bureau]:reportData.bureau;

        $reportHtml += `<div class='row'>
            <div class='col-md-12'>
                <div class="card">
                    <div class="card-header name-header text-center">${bureauName} Report</div>
                    <div class="card-body">
                        <h5 class="card-title">${reportData.demographicData.name.first} ${reportData.demographicData.name.middle} ${reportData.demographicData.name.last}</h5>
                        
                        <div class='row'>
                            <div class='col-md-6'>
                                <div>${reportData.demographicData.address.address1}</div>
                                <div>${reportData.demographicData.address.city}, ${reportData.demographicData.address.state} ${reportData.demographicData.address.zip}</div>
                            </div>
                            <div class='col-md-6'>
                                <div>Date of Birth: ${reportData.demographicData.dateOfBirth}</div>
                                <div>SSN: ${CommonFunction.maskSSN(reportData.demographicData.SSN)}</div>
                            </div>
                        </div>
                    </div>
                    
                    ${$previousAddresses}

                    <div class='row'>
                        <div class='col-md-12'>
                            ${$scoreSummary}
                            ${$summary}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        
        // Set the data once the DOM is loaded.
        $jq(document).ready(() => {
            setTimeout(() => {
                const $div = $jq(`#${$widgetID}`);
                $div.find('.content').html($reportHtml);
            }, 0);
        });
    };

    const initializeReportViewer = () => {
        return new Promise((resolve, reject) => {
            const $jq = windowObject.jQuery;

            if(!$jq) {
                reject(`jQuery is not available...`);
                return;
            }

            const $jsonPScriptTag = $jq(jsonPScriptId);
            jsonPCallBack = options && options.reportObject ? options.reportObject : $jsonPScriptTag.data('callback');

            if(!$jsonPScriptTag || $jsonPScriptTag.length === 0) {
                reject(`Element not found #${$widgetID}...`);
                return;
            }

            const includeBootstrap: boolean = options && options.includeBootstrap ? options.includeBootstrap : $jsonPScriptTag.data('include-bootstrap');
            const containerClass = options && options.containerClass ? options.containerClass : $jsonPScriptTag.data('container-class');

            if(includeBootstrap) {
                CommonFunction.loadCSS(Globals.Constants.bootstrapCSSPath)
                .then(script => CommonFunction.loadJavaScript(Globals.Constants.bootstrapJSPath))
                .then(script => {})
                .catch(error => {});
            };
        
            let $html = `
                <div id='${$widgetID}' class='${containerClass}'>
                    <div class='row hidden error'>
                        <div class='col-md-12 error-content'>
                        </div>
                    </div>
                    <div class='content container'>
                        <div class="text-center">
                            <div class="spinner-border" role="status">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            CommonFunction.getGenericReportObject().then((reportObject: any) => {
                // If we get the generic report object, we need to return the HTML;
                resolve($html);
                
                // Now set the content of the inner DIV based on generic object
                displayReportViewer(reportObject);
            })
            .catch(error => {
                CommonFunction.showErrorMessage(error);
                reject(error);
                return;
            });
        });
    };

    // Start point
    // Load pre-requisites and then initialize the report viewer
    try{
        const $jq = windowObject.jQuery;
        
        CommonFunction.loadJavaScript(!$jq && Globals.Constants.jQueryPath)
        .then(() => {
            initializeReportViewer()
            .then(reportHtml => eval(`${jsonPCallBack}(reportHtml)`))
            .catch(error => console.error(error));
        })
        .catch(error => {
            console.error(error);
        });
    } catch (e) {
        console.error(e);          
    }
})();
