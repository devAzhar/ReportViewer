export const getDocument = () => eval('document');
export const getWindow = () => eval('window');
export const maskSSN = ssn => 'xxx-xx-' + ssn.substring(ssn.length - 4);
export const loadJavaScript = src => (!src ? '' : `<script async src='${src}' type='text/javascript'></script>`);
export const loadCSS = src => (!src ? '' : `<link href='${src}' rel='stylesheet' type='text/css' media='all' />`);

export const Globals = {
  Bureaus: { tui: 'Transunion', efx: 'Equifax', exp: 'Experian' },
  Constants: {
    bootstrapJSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
    bootstrapCSSPath: '//maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
  },
  _WidgetID: '',
  WidgetID: () => (Globals._WidgetID ? Globals._WidgetID : (Globals._WidgetID = `genericReport${Math.random()}`.replace('.', ''))),
  FakeDelay: 1000
};

export const getGenericReportObject = async displayToken => {
  throw new Error(`getGenericReportObject not implemented yet. ${displayToken}`);
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
