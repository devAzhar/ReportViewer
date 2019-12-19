const getDocument = () => eval('document');
const getWindow = () => eval('window');

export const Globals = {
  Bureaus: { tui: 'Transunion', efx: 'Equifax', exp: 'Experian' },
  Constants: {
    jQueryPath: 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
    bootstrapJSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
    bootstrapCSSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    mockDataPath: 'mockData/credmo.genericObject.mock.json',
    defaultCallBack: 'displayGenericReport',
    jsonPScriptId: '#genericReportViewer'
  },
  WidgetID: () => `genericReport${Math.random()}`.replace('.', ''),
  FakeDelay: 1000
};

export const maskSSN = ssn => 'xxx-xx-' + ssn.substring(ssn.length - 4);

export const getGenericReportObject = jsonPScriptId => {
  return new Promise((resolve, reject) => {
    const $jq = getWindow().jQuery;
    const $jsonPScriptTag = $jq(jsonPScriptId);

    const mockData = $jsonPScriptTag.data('mock-data');
    const reportServiceUrl = $jsonPScriptTag.data('report-service-url');
    const reportObject = $jsonPScriptTag.data('report-object');

    if (mockData) {
      console.log(`Loading Mock Data`);
      $jq
        .get(Globals.Constants.mockDataPath)
        .then(data => resolve(data))
        .fail(error => reject(error));
    } else if (reportServiceUrl) {
      console.log(`Loading ${reportServiceUrl}`);
      $jq
        .get(reportServiceUrl)
        .then(data => resolve(data))
        .fail(error => reject(error));
    } else if (reportObject) {
      console.log(`Loading reportObject`);
      resolve(eval(reportObject));
    } else {
      reject('Could not load generic report object. Please check the data configuration.');
    }
  });
};

export const loadJavaScript = (src, parentTagName) => {
  if (!parentTagName) {
    parentTagName = 'head';
  }

  const parentTagObject = getDocument().getElementsByTagName(parentTagName);

  return new Promise((resolve, reject) => {
    if (!src) {
      resolve();
      return;
    }

    console.log(`Loading Java-script ${src}`);

    if (!parentTagObject) {
      reject(`Parent tag not found.`);
      return;
    }

    try {
      const script = getDocument().createElement('SCRIPT');
      script.src = src;
      script.type = 'text/javascript';

      script.onload = function() {
        resolve(script);
      };

      parentTagObject[0].appendChild(script);
    } catch (e) {
      reject(e);
    }
  });
};

export const loadCSS = (src, parentTagName) => {
  if (!parentTagName) {
    parentTagName = 'head';
  }

  const parentTagObject = getDocument().getElementsByTagName(parentTagName);

  return new Promise((resolve, reject) => {
    if (!src) {
      resolve();
      return;
    }

    console.log(`Loading CSS ${src}`);

    if (!parentTagObject) {
      reject(`Parent tag not found.`);
      return;
    }

    try {
      const head = parentTagObject[0];
      const link = getDocument().createElement('link');
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

export const formatCurrency = (input, decPlaces, decSep, thouSep, symbol) => {
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
