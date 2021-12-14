const functions = require('firebase-functions');
const { recoverPersonalSignature } = require('eth-sig-util');
const {
  createLinkInDb,
  findLinkInDb,
  isHolder,
  bugsnagWrapper,
} = require('./utils');

const ERROR_MSG = 'Error: You are not a holder of this NFT';

exports.createLink = functions.https.onCall(
  bugsnagWrapper(async (data, context) => {
    const { contractAddressArray, sig, msg, linkDestination } = data;
    console.log(
      contractAddressArray,
      sig,
      msg,
      linkDestination,
      'server............................'
    );
    // functions.logger.info(`createLink with sig ${sig} and message ${msg}`, { structuredData: true })
    functions.logger.info(`createLink with sig ${sig} and message ${msg}`);

    // verify the sig
    const holderAddress = recoverPersonalSignature({
      data: msg,
      sig: sig,
    });
    functions.logger.info(`Recovered address ${holderAddress}`);
    console.log(holderAddress, 'holder..................');

    // does this user have the NFT?
    try {
      const result = await isHolder({
        contractAddressArray,
        holderAddress,
      });
      if (!result) {
        functions.logger.error(ERROR_MSG);
        return { error: ERROR_MSG };
      }
      console.log(result, 'result..........................');
      return { success: true, result: result };
    } catch (error) {
      functions.logger.error(error);
      console.log(error, 'errooooooooooo..........................');
      return { error: ERROR_MSG };
    }

    // const { id } = await createLinkInDb({
    //   linkDestination,
    //   contractAddressArray
    // })

    // const link = `https://nftclub.in/l/${id}`
  })
);

exports.authNftHolder = functions.https.onCall(
  bugsnagWrapper(async (data, context) => {
    const { sig, msg, linkId } = data;
    // functions.logger.info(`createLink with sig ${sig} and message ${msg}`, { structuredData: true })
    functions.logger.info(
      `authNftHolder with sig ${sig} and message ${msg} and linkId ${linkId}`
    );

    const { linkDestination, contractAddressArray } = await findLinkInDb({
      linkId,
    });

    // verify the sig
    const holderAddress = recoverPersonalSignature({
      data: msg,
      sig: sig,
    });
    functions.logger.info(`Recovered address ${holderAddress}`);

    // does this user have the NFT?
    try {
      const result = await isHolder({
        contractAddressArray,
        holderAddress,
      });
      if (!result) {
        functions.logger.error(ERROR_MSG);
        return { error: ERROR_MSG };
      }

      return { success: true, result };
    } catch (error) {
      functions.logger.error(error);
      return { error: ERROR_MSG };
    }
  })
);
