import axios from "axios";

const TRANSACTION_API_URL =
  "http://ncrdev-dev.apigee.net/digitalbanking/db-transactions/v1/transactions";

const AUTH_API_URL =
  "http://ncrdev-dev.apigee.net/digitalbanking/oauth2/v1/token";

export const getTransactions = async () => {
  const data = await axios.get(TRANSACTION_API_URL, {
    params: {
      accountId: "rf5ao6Qclwsth9OfOvUb-EeV1m2BfmTzUEALGLQ3ehU",
      hostUserId: "HACKATHONUSER130",
    },
    headers: {
      Authorization: `Bearer UdESSN4TYGFrmbR00bEJS7T3aSCS`,
      transactionId: "fdd1542a-bcfd-439b-a6a1-5a064023b0ce",
      Accept: "application/json",
    },
  });

  return data;
};

export const auth = async () => {
  const data = await axios.get(AUTH_API_URL, {
    headers: {
      Authorization:
        "Basic alI3RWg3dUF5cFQ0dEpMb0xVMmRBTVlHQ1l5ejZsVjg6T3FRZXQ0OE5YWDdTQXB4SA==",
      "Content-Type": "application/x-www-form-urlencoded",
      institutionId: "00516",
      transactionId: "fdd1542a-bcfd-439b-a6a1-5a064023b0ce",
      Accept: "application/json",
    },
  });

  console.log(data);
};

auth()