import Boom from '@hapi/boom';
import { get } from 'lodash';
import { Globals, maskSSN, formatCurrency } from '../lib/utils/index';

export const jsReportViewer = async (request, reply) => {
  request.log(`debug`, `jsReportViewer`);

  try {
    const params = request.query
    const displayToken = get(params, 'displayToken', '');
    const includeBootstrap = get(params, 'includeBootstrap', false);

    if (!displayToken) {
      return Boom.badRequest('displayToken is empty or null');
    }

    console.log(includeBootstrap);

    const reportResult = { routeMessage: 'OK', displayToken: displayToken };
    return reply.response(reportResult);
  } catch (err) {
    request.log('error', `Error during jsReportViewer ${JSON.stringify(err)}`);
    return Boom.internal(err);
  }
};
