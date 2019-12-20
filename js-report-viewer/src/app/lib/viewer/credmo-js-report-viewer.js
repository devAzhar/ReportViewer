(() => {
  console.log('credmo-js-report-viewer 1.2...');

  const jQ = () => eval(`jQuery`);
  const includejQuery = () => {
    const script = getScriptObject();

    if (script && script.outerHTML) {
      if (script.outerHTML.indexOf(`credmo-includejquery='true'`) || script.outerHTML.indexOf(`credmo-includejquery='true'`)) {
        return true;
      }
    }

    return false;
  };
  const getDocument = () => eval('document');
  const getScriptObject = () => getDocument().getElementById(Globals.Constants.scriptTagId);
  // const getWindow = () => eval('window');
  const maskSSN = ssn => 'xxx-xx-' + ssn.substring(ssn.length - 4);

  const loadJavaScript = (src, parentTagName) => {
    if (!parentTagName) {
      parentTagName = 'head';
    }

    var doc = getDocument();
    var parentTagObject = doc.getElementsByTagName(parentTagName);

    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }
      console.log('Loading Java-script ' + src);
      if (!parentTagObject) {
        reject('Parent tag not found.');
        return;
      }
      try {
        var script_1 = doc.createElement('SCRIPT');
        script_1.src = src;
        script_1.type = 'text/javascript';
        script_1.onload = () => {
          resolve(script_1);
        };
        parentTagObject[0].appendChild(script_1);
      } catch (e) {
        reject(e);
      }
    });
  };

  const loadCSS = (src, parentTagName) => {
    if (!parentTagName) {
      parentTagName = 'head';
    }

    const doc = getDocument();
    const parentTagObject = doc.getElementsByTagName(parentTagName);
    return new Promise((resolve, reject) => {
      if (!src) {
        resolve();
        return;
      }
      console.log('Loading CSS ' + src);
      if (!parentTagObject) {
        reject('Parent tag not found.');
        return;
      }
      try {
        var head = parentTagObject[0];
        var link = doc.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = src;
        link.media = 'all';
        head.appendChild(link);
        resolve(src);
      } catch (e) {
        reject(e);
      }
    });
  };

  const Globals = {
    Bureaus: { tui: 'Transunion', efx: 'Equifax', exp: 'Experian' },
    Constants: {
      bootstrapJSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
      bootstrapCSSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
      jQueryPath: '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
      scriptTagId: 'credmoJSReportViewer'
    },
    _WidgetID: '',
    WidgetID: () => (Globals._WidgetID ? Globals._WidgetID : (Globals._WidgetID = `genericReport${Math.random()}`.replace('.', ''))),
    FakeDelay: 1000
  };

  const getGenericReportObject = () => {
    return new Promise((resolve, reject) => {
      const $jq = jQ();
      const script = $jq(getScriptObject());
      const reportDataObject = script.data('credmo-report-object');
      let returnData = null;

      try {
        const tuiDisplayToken = script.data('credmo-tui-displaytoken');
        const expDisplayToken = script.data('credmo-exp-displaytoken');
        const efxDisplayToken = script.data('credmo-efx-displaytoken');

        if (reportDataObject) {
          returnData = eval(reportDataObject);
        } else if (tuiDisplayToken) {
          returnData = { message: 'Loading Data', endPoint: 'tui', displayToken: tuiDisplayToken };
        } else if (expDisplayToken) {
          returnData = { message: 'Loading Data', endPoint: 'exp', displayToken: expDisplayToken };
        } else if (efxDisplayToken) {
          returnData = { message: 'Loading Data', endPoint: 'efx', displayToken: efxDisplayToken };
        }

        resolve(returnData);
      } catch (error) {
        reject(error);
      }
    });
  };

  const formatCurrency = (input, decPlaces, decSep, thouSep, symbol) => {
    decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces;
    decSep = typeof decSep === 'undefined' ? '.' : decSep;
    thouSep = typeof thouSep === 'undefined' ? ',' : thouSep;
    const sign = input < 0 ? '-' : '';
    const i = String(parseInt((input = Math.abs(Number(input)) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    const numberValue = parseInt(i);

    if (!symbol) {
      symbol = '$';
    }

    let returnValue =
      symbol +
      sign +
      (j ? i.substr(0, j) + thouSep : '') +
      i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
      (decPlaces
        ? decSep +
          Math.abs(input - numberValue)
            .toFixed(decPlaces)
            .slice(2)
        : '');

    return returnValue;
  };

  const scriptObject = getScriptObject();

  const validate = () => {
    let result = false;
    let msg = '';

    if (scriptObject) {
      result = true;
    } else {
      msg = `Could not find script tag ${Globals.Constants.scriptTagId}`;
    }

    if (!result) {
      if (msg) {
        console.error(msg);
      }
    } else {
      console.log(`Validated good 1.3...`);
    }

    return result;
  };

  //Re-define get as in lodash
  const get = (obj, fieldRef, defaultValue) => {
    if (typeof defaultValue === 'undefined') {
      defaultValue = null;
    }

    if (!obj || !fieldRef) {
      return defaultValue;
    }

    fieldRef.split('.').forEach(key => {
      if (obj) {
        obj = obj[key];
      }
    });

    if (!obj) {
      return defaultValue;
    }

    return obj;
  };

  const getReportHtml = reportData => {
    const containerClass = '';
    const widgetID = Globals.WidgetID();
    let $reportHtml = '';
    let $error = '';

    const tradeLineItems = get(reportData, 'tradeLineItems', null);
    const inquiries = get(reportData, 'inquiries', null);
    const previousAddresses = get(reportData, 'demographicData.previousAddresses', null);
  
    let $previousAddresses = '';
    let $summary = '';
    let $scoreSummary = '';
    let $inquiries = '';
    let $tradeLines = '';

    if (previousAddresses && previousAddresses.forEach) {
      $previousAddresses += `
      <div class='card-body previous-addresses'>
        <div class='card-title'><h5>Previous Addresses:</h5></div>
        <ul class='list-group'>
        `;
      previousAddresses.forEach(address => {
        $previousAddresses += `
          <li class='list-group-item'>
            ${address.address1}, ${address.city}, ${address.state} ${address.zip} 
          </li>`;
      });

      $previousAddresses += `</ul>
      </div>
      `;
    }

    const totalAccounts = get(reportData, 'summary.tradelineSummary.totalAccounts', '');
    const openAccounts = get(reportData, 'summary.tradelineSummary.openAccounts', '');
    const closeAccounts = get(reportData, 'summary.tradelineSummary.closeAccounts', '');
    const derogatoryAccounts = get(reportData, 'summary.tradelineSummary.derogatoryAccounts', '');
    const delinquentAccounts = get(reportData, 'summary.tradelineSummary.delinquentAccounts', '');
    const numberInLast2Years = get(reportData, 'summary.inquirySummary.numberInLast2Years', '');
    const numberOfRecords = get(reportData, 'summary.publicRecordSummary.numberOfRecords', '');

    const cardsContainerType = `card-deck`; //card-deck, card-group, card-columns
    $summary += `
    <div class='${cardsContainerType} card-body'>
      <div class='card ${totalAccounts ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${totalAccounts}</strong> Total Accounts
        </div>
      </div>
      <div class='card ${openAccounts ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${openAccounts}</strong> Open Accounts
        </div>
      </div>
      <div class='card ${closeAccounts ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${closeAccounts}</strong> Closed Accounts
        </div>
      </div>
      <div class='card ${derogatoryAccounts ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${derogatoryAccounts}</strong> Derogatory Accounts
        </div>
      </div>
    </div>
    <div class='${cardsContainerType} card-body'>
      <div class='card ${delinquentAccounts ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${delinquentAccounts}</strong> Delinquent Accounts
        </div>
      </div>
      <div class='card ${numberInLast2Years ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${numberInLast2Years}</strong> Total Inquiries Count
        </div>
      </div>
      <div class='card ${numberOfRecords ? '' : 'hidden'}'>
        <div class='card-body'>
          <strong>${numberOfRecords}</strong> Total Public Records
        </div>
      </div>
      <div class='card' style='border: none;'></div>
    </div>`;

    const riskScore = get(reportData, 'creditScore.riskScore', '');
    const scoreName = get(reportData, 'creditScore.scoreName', '');
    const populationRank = get(reportData, 'creditScore.populationRank', '');
    const totalBalances = get(reportData, 'summary.tradelineSummary.totalBalances', '');
    const totalMonthlyPayments = get(reportData, 'summary.tradelineSummary.totalMonthlyPayments', '');
    $scoreSummary = `
    <div class='${cardsContainerType} card-body'>
      <div class='card ${riskScore ? '' : 'hidden'}'>
        <div class='card-body'>
          <h5 class='card-title'>Credit Score</h5>
          <p class='card-text'>${riskScore}</p>
          <p class='card-text'><small class='text-muted'>${scoreName}</small></p>
        </div>
      </div>
      <div class='card ${populationRank ? '' : 'hidden'}'>
        <div class='card-body'>
          <h5 class='card-title'>Score Rank</h5>
          <p class='card-text'>${populationRank}</p>
          <p class='card-text'><small class='text-muted'></small></p>
        </div>
      </div>
      <div class='card ${totalBalances ? '' : 'hidden'}'>
        <div class='card-body'>
          <h5 class='card-title'>Balance</h5>
          <p class='card-text'>${formatCurrency(totalBalances)}</p>
          <p class='card-text'><small class='text-muted'></small></p>
        </div>
      </div>
      <div class='card ${totalMonthlyPayments ? '' : 'hidden'}'>
        <div class='card-body'>
          <h5 class='card-title'>Monthly Payments</h5>
          <p class='card-text'>${formatCurrency(totalMonthlyPayments)}</p>
          <p class='card-text'><small class='text-muted'></small></p>
        </div>
      </div>
    </div>`;

    $tradeLines = `
    <div class='card-title'><h5>Accounts:</h5></div>
    <div class='table-responsive-lg'>
      <table class='table table-striped table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Account Number</th>
            <th scope='col'>Creditor</th>
            <th scope='col'>Status</th>
            <th scope='col'>Balance</th>
            <th scope='col'>Type</th>
            <th scope='col'>Reference</th>
          </tr>
        </thead>
        <tbody>
    `;

    if (tradeLineItems && tradeLineItems.forEach) {
      tradeLineItems.forEach(tradeLineItem => {
        const info = tradeLineItem.info;
        $tradeLines += `
        <tr>
          <td>${info.dateReported}</td>
          <td>${info.accountNumber}</td>
          <td>${info.creditorName}-${info.subscriberCode}</td>
          <td>${get(info, 'openClosed.abbreviation', '')}</td>
          <td>${formatCurrency(info.currentBalance)}</td>
          <td>${get(tradeLineItem, 'accountType.abbreviation', '')}</td>
          <td>${info.source.reference}</td>
        </tr>
        `;
      });
    }

    $tradeLines += `
        </tbody>
      </table>
    </div>`;

    $inquiries = `
    <div class='card-title'><h5>Inquiries:</h5></div>
  
    <div class='table-responsive-md'>
      <table class='table table-striped table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Inquiry Date</th>
            <th scope='col'>Subscriber</th>
            <th scope='col'>Type</th>
            <th scope='col'>Reference</th>
          </tr>
        </thead>
      <tbody>
    `;

    if (inquiries && inquiries.forEach) {
      inquiries.forEach(inquiry => {
        $inquiries += `
        <tr>
          <td>${inquiry.inquiryDate}</td>
          <td>${inquiry.subscriberName}-${inquiry.subscriberNumber}</td>
          <td>${inquiry.inquiryType}</td>
          <td>${inquiry.reference}</td>
        </tr>
        `;
      });
    }
  
    $inquiries += `
          </tbody>
        </table>
      </div>`;

      const bureauName = Globals.Bureaus[reportData.bureau] ? Globals.Bureaus[reportData.bureau] : reportData.bureau;
      const firstName = get(reportData, 'demographicData.name.first', '');
      const middleName = get(reportData, 'demographicData.name.middle', '');
      const lastName = get(reportData, 'demographicData.name.last', '');
      const city = get(reportData, 'demographicData.address.city', '');
      const state = get(reportData, 'demographicData.address.state', '');
      const zip = get(reportData, 'demographicData.address.zip', '');

      $reportHtml += `<div class='row'>
      <div class='col-md-12'>
        <div class='card'>
          <div class='card-header name-header text-center'>${bureauName} Report</div>
          <div class='card-body'>
            <h5 class='card-title'>${firstName} ${middleName} ${lastName}</h5>
            
            <div class='row'>
              <div class='col-md-6'>
                <div>${get(reportData, 'demographicData.address.address1', '')}</div>
                <div>${city}, ${state} ${zip}</div>
              </div>
              <div class='col-md-6'>
                <div>Date of Birth: ${get(reportData, 'demographicData.dateOfBirth', '')}</div>
                <div>SSN: ${maskSSN(get(reportData, 'demographicData.SSN', ''))}</div>
              </div>
            </div>
          </div>
          
          <div class='row'>
            <div class='col-md-12'>
              ${$scoreSummary}
              ${$summary}
            </div>
          </div>
  
          ${$previousAddresses}
  
          <div class='row'>
            <div class='col-md-12'>
              <div class='card-body'>
                ${$inquiries}
              </div>
            </div>
          </div>
  
          <div class='row'>
            <div class='col-md-12'>
              <div class='card-body'>
                ${$tradeLines}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    $reportHtml = `<div id='${widgetID}' class='${containerClass}'>
    <div class='row hidden error'>
      <div class='col-md-12 error-content'>
        ${$error}
      </div>
    </div>
    <div class='content container'>
    ${$reportHtml}
    </div>
  </div>
  `;    
    return $reportHtml;
  };

  const renderReport = reportData => {
    reportData = reportData.reportData ? reportData.reportData : reportData;
    reportData = reportData.reportData ? reportData.reportData : reportData;
    console.log(`Render Report`);
    console.log(reportData);

    const $jq = jQ();
    const script = $jq(getScriptObject());

    const callBackFunctionName = script.data('credmo-render-function');
    const returnReportHtml = script.data('credmo-report-get-html') || !callBackFunctionName;
    const $divRef = script.data('credmo-render-element');
    const $div = $jq($divRef);

    let $reportHTML = '';

    if (returnReportHtml) {
      $reportHTML = getReportHtml(reportData);
    }

    if (callBackFunctionName) {
      const callBackFunction = eval(callBackFunctionName);
      callBackFunction(reportData, $reportHTML);
      return;
    } else if ($div && $div.length > 0) {
      $div.html($reportHTML);
    }
  };

  const displayReport = () => {
    if (!validate()) {
      return;
    }

    getGenericReportObject()
      .then(data => {
        renderReport(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  if (includejQuery()) {
    loadJavaScript(Globals.Constants.jQueryPath)
      .then(() => {
        displayReport();
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    displayReport();
  }
})();
