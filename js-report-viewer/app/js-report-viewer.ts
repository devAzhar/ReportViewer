const showCreditReport = (divId: string, options: any) => {
    const windowObject: any = window;

    enum Constants {
        jQueryPath = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
        bootstrapJSPath = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js',
        bootstrapCSSPath = 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
        mockDataPath = 'mockData/credmo.genericObject.mock.json'
    }

    const loadJavaScript = (src: string, parentTagName?: string) => {
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
    };
    
    const loadCSS = (src: string, parentTagName?: string) => {
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
    };

    const showErrorMessage = (error: any) => {
        const $jq = windowObject.jQuery;
        const $div = $jq(divId);

        console.error(error);
        $div.find('.error').removeClass('hidden').find('.error-content').html(error);
        $div.find('.content').hide();
    };

    const getGenericReportObject = () => {
        return new Promise((resolve, reject) => {
            const $jq = windowObject.jQuery;
            const $div = $jq(divId);

            const mockData: boolean = options && options.mockData ? options.mockData : $div.data('mock-data');
            const reportServiceUrl: string = options && options.reportServiceUrl ? options.reportServiceUrl : $div.data('report-service-url');
            const reportObject: any = options && options.reportObject ? options.reportObject : $div.data('report-object');
            
            if (mockData) {
                console.log(`Loading Mock Data`);
                $.get(Constants.mockDataPath).then(data => resolve(data)).fail(error => reject(error));
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
    }

    const maskSSN = (ssn: string) => 'xxx-xx-' + ssn.substring(ssn.length-4);

    const initializeReportViewer = () => {
        return new Promise((resolve, reject) => {
            const $jq = windowObject.jQuery;

            if(!$jq) {
                reject(`jQuery is not available...`);
                return;
            }
            const $div = $jq(divId);

            if(!$div || $div.length === 0) {
                reject(`Element not found ${divId}...`);
                return;
            }

            const includeBootstrap: boolean = options && options.includeBootstrap ? options.includeBootstrap : $div.data('include-bootstrap');
            const containerClass = options && options.containerClass ? options.containerClass : $div.data('container-class');

            containerClass && $div.addClass(containerClass);

            if(includeBootstrap) {
                $div.hide();
                loadCSS(Constants.bootstrapCSSPath)
                .then(script => loadJavaScript(Constants.bootstrapJSPath))
                .then(script => $div.show())
                .catch(error => $div.show());
            };
        
            let $html = `
                <div class='row hidden error'>
                    <div class='col-md-12 error-content'>
                    </div>
                </div>
                <div class='content'>
                    <div class='text-center'>
                        Loading report viewer...
                    </div>
                </div>
            `;
            $div.html($html);

            getGenericReportObject().then((reportObject: any) => {
                console.log(reportObject)
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
                    <div class='previous-addresses'>
                        <div class='address-header previous-address-header'>
                            Previous Addresses:
                        </div>`;
                        reportData.demographicData.previousAddresses.forEach(address => {
                            $previousAddresses += `
                            <div class='address-header previous-address'>
                                ${address.address1} ${address.city} ${address.state} ${address.zip} 
                            </div>`;
                        });
                        
                        $previousAddresses += `
                    </div>`;
                }

                $summary += `
                <div class='summary'>
                    <div class='row'>
                        <div class='summary-header col-md-12'>
                            Credit Report Summary
                        </div>
                    </div>                
                    <div class='row'>
                        <div class='col-md-3'>Monthly Payments</div>
                        <div class='col-md-3'>Balances</div>
                        <div class='col-md-3'>Derogatory Accounts</div>
                        <div class='col-md-3'>Delinquent Accounts</div>
                    </div>                
                    <div class='row'>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.totalMonthlyPayments}</div>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.totalBalances}</div>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.derogatoryAccounts}</div>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.delinquentAccounts}</div>
                    </div>                
                    <div class='row'>
                        <div class='col-md-3'>Close Accounts</div>
                        <div class='col-md-3'>Open Accounts</div>
                        <div class='col-md-3'>Total Accounts</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.closeAccounts}</div>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.openAccounts}</div>
                        <div class='col-md-3'>${reportData.summary.tradelineSummary.totalAccounts}</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-3'>Total Inquiries</div>
                        <div class='col-md-3'>Total Public Records</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-3'>${reportData.summary.inquirySummary.numberInLast2Years}</div>
                        <div class='col-md-3'>${reportData.summary.publicRecordSummary.numberOfRecords}</div>
                    </div>
                </div>
                `;

                $scoreSummary = `
                <div class='score-summary'>
                    <div class='row'>
                        <div class='col-md-3'>Score</div>
                        <div class='col-md-3'>Type</div>
                        <div class='col-md-3'>Rank</div>
                    </div>
                    <div class='row'>
                        <div class='col-md-3'>${reportData.creditScore.riskScore}</div>
                        <div class='col-md-3'>${reportData.creditScore.scoreName}</div>
                        <div class='col-md-3'>${reportData.creditScore.populationRank}</div>
                    </div>
                </div>
                `;
                
                $reportHtml += `<div class='row'>
                    <div class='col-md-12'>
                        <div class='name-header'>
                            Credit Report for ${reportData.demographicData.name.first} ${reportData.demographicData.name.middle} ${reportData.demographicData.name.last}
                        </div>
                        <div class='ssn-header'>
                            SSN: ${maskSSN(reportData.demographicData.SSN)}
                        </div>
                        <div class='dob-header'>
                            Date of Birth: ${reportData.demographicData.dateOfBirth}
                        </div>
                        <div class='address-header'>
                            Address: ${reportData.demographicData.address.address1} ${reportData.demographicData.address.city} ${reportData.demographicData.address.state} ${reportData.demographicData.address.zip} 
                        </div>
                        ${$previousAddresses}
                    </div>
                </div>
                
                ${$summary}
                ${$scoreSummary}
                ${$inquiries}
                `;
                
                $div.find('.content').html($reportHtml);
                resolve({'success': true});
            })
            .catch(error => {
                showErrorMessage(error);
                reject(error);
                return;
            });
        });
    };

    const $jq = windowObject.jQuery;

    try{
        loadJavaScript(!$jq && Constants.jQueryPath)
        .then(script => {
            if(!$jq) {
                const $ = windowObject.jQuery;
            }

            initializeReportViewer().catch(error => {console.error(error)});
        })
        .catch(error => {
            console.error(error);
        });
    } catch (e) {
        console.log(e);          
    }
};