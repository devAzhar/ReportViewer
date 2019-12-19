import Boom from '@hapi/boom';
import { get } from 'lodash';
import { mockReportDataObject } from '../mockData/credmo.genericObject.mock';
import { getGenericReportObject, Globals } from '../lib/utils/index';

import { reportViewer } from '../lib/viewer/jsonpReportViewer';

export const jsReportViewer = async (request, reply) => {
  request.log(`debug`, `jsReportViewer`);

  try {
    const params = get(request, 'query');
    const displayToken = get(params, 'displayToken', '');
    const mockData = get(params, 'mock', false);

    if (!displayToken) {
      return Boom.badRequest('displayToken is empty or null');
    }

    let data = {};

    if (mockData) {
      data = mockReportDataObject;
    } else {
      data = await getGenericReportObject(displayToken);
    }

    const reportResult = await reportViewer(data, params);
    data = { message: 'OK', displayToken: displayToken, html: reportResult, id: Globals.WidgetID() };
    return reply.response(data);
  } catch (err) {
    console.log(err);
    request.log('error', `Error during jsReportViewer ${JSON.stringify(err)}`);
    return Boom.internal(err);
  }
};
