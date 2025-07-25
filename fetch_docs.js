const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const pages = [
  // 채널 설정 - chat
  { url: "https://docs.channel.io/help/ko/articles/인사말-설정-d59dc516", out: "docs/channel-settings/chat/greeting.md" },
  { url: "https://docs.channel.io/help/ko/articles/팔로업-알림-3481edf8", out: "docs/channel-settings/chat/followup.md" },
  { url: "https://docs.channel.io/help/ko/articles/운영-설정-1e33dadc", out: "docs/channel-settings/chat/operation.md" },
  { url: "https://docs.channel.io/help/ko/articles/매크로-a5905ef6", out: "docs/channel-settings/chat/macros.md" },

  // 채널 설정 - general
  { url: "https://docs.channel.io/help/ko/articles/다른-언어-설정-f6b84106", out: "docs/channel-settings/general/language.md" },
  { url: "https://docs.channel.io/help/ko/articles/채널-프론트-6fd32151", out: "docs/channel-settings/general/front.md" },
  { url: "https://docs.channel.io/help/ko/articles/채널톡-버튼-설정-94f34984", out: "docs/channel-settings/general/button.md" },
  { url: "https://docs.channel.io/help/ko/articles/채널-프로필-설정-5deb0312", out: "docs/channel-settings/general/profile.md" },
  { url: "https://docs.channel.io/help/ko/articles/비즈니스-인증-0b034717", out: "docs/channel-settings/general/verification.md" },

  // 채널 설정 - team
  { url: "https://docs.channel.io/help/ko/articles/팀원-및-봇-설정-a215cda0", out: "docs/channel-settings/team/members-bots.md" },
  { url: "https://docs.channel.io/help/ko/articles/역할-0cdd2005", out: "docs/channel-settings/team/roles.md" },

  // 채널 설정 - security
  { url: "https://docs.channel.io/help/ko/articles/SAML-SSO-로그인-cd70a19d", out: "docs/channel-settings/security/saml.md" },
  { url: "https://docs.channel.io/help/ko/articles/IP-주소-제한-5bc99a3b", out: "docs/channel-settings/security/ip-restriction.md" },

  // 개인 설정
  { url: "https://docs.channel.io/help/ko/articles/매니저-프로필-설정-e7941ce4", out: "docs/personal-settings/profile.md" },
  { url: "https://docs.channel.io/help/ko/articles/푸시알림-설정-3fccba8f", out: "docs/personal-settings/push.md" },
  { url: "https://docs.channel.io/help/ko/articles/계정-설정-f3e393ff", out: "docs/personal-settings/account.md" }
];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const {url, out} of pages) {
    console.log('➡️ Fetching', url);
    await page.goto(url, {waitUntil: 'networkidle2'});

    const title = await page.$eval('h1', el => el.innerText.trim());
    const content = await page.$$eval('article p, article h2, article h3, article li', els =>
      els.map(e => e.outerHTML).join('\n\n'));

    const md = `# ${title}

${content}
`;

    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, md);
    console.log('✅ Saved', out);
  }

  await browser.close();
})();
