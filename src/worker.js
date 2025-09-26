export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    const githubUser = "doi2523";
    const repo = "locketcdn";
    const branch = "main";
    const bust = Date.now(); // hoặc version thủ công bạn kiểm soát

    const targetUrl = `https://cdn.jsdelivr.net/gh/${githubUser}/${repo}@${branch}${path}?v=${bust}`;

    return fetch(targetUrl, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
  },
};
