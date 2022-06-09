export async function getCollections() {
  const response = await fetch(
    "https://dummies-api.dummies.com/v2/collections?size=100",
    {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:101.0) Gecko/20100101 Firefox/101.0",
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en,fr;q=0.5",
        sessionguid: "3ad80b05-4c67-461f-8f27-fbb0c62c5940",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "Sec-GPC": "1",
      },
      referrer: "https://www.dummies.com/",
      method: "GET",
      mode: "cors",
    }
  );
  const payload = await response.json();
  return payload.items;
}
