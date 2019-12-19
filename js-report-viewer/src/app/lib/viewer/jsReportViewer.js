import { Globals, maskSSN, formatCurrency, loadCSS, loadJavaScript } from '../utils/index';
import { get } from 'lodash';

//like https://spin.credmo.systemadmin.com/api/enterprise/tui/browser?displayToken=12345&display=displayMethod&includeBootstrap=true
export const reportViewer = async (reportData, params) => {
  const includeBootstrap = get(params, 'includeBootstrap', false);
  const includeBootstrapJS = get(params, 'includeBootstrapJS', false);
  const containerClass = get(params, 'containerClass', '');
  const widgetID = Globals.WidgetID();
  let $reportHtml = '';
  let $error = '';

  reportData = get(reportData, 'reportData', reportData);

  const tradeLineItems = get(reportData, 'tradeLineItems', null);
  const inquiries = get(reportData, 'inquiries', null);
  const previousAddresses = get(reportData, 'demographicData.previousAddresses', null);

  // console.log(JSON.stringify(reportData));

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

  if (includeBootstrap) {
    $reportHtml = loadCSS(Globals.Constants.bootstrapCSSPath) + $reportHtml;
  }

  if (includeBootstrapJS) {
    $reportHtml = loadJavaScript(Globals.Constants.bootstrapJSPath) + $reportHtml;
  }

  return $reportHtml;
};
