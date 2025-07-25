module.exports = {
  tutorialSidebar: [
    // 📘 Intro
    {
      type: 'category',
      label: '시작하기',
      items: [
        'intro/getting-started',
        'intro/installation',
        'intro/usage',
      ],
    },

    // 🔄 워크플로우
    {
      type: 'category',
      label: '워크플로우',
      items: [
        'workflow/what-is-workflow',
        'workflow/setup',
        'workflow/examples',
        'workflow/faq',
      ],
    },

    // 🛠️ 채널 설정
    {
      type: 'category',
      label: '채널 설정',
      items: [
        {
          type: 'category',
          label: '채팅',
          items: [
            'channel-settings/chat/greeting',
            'channel-settings/chat/followup',
            'channel-settings/chat/operation',
            'channel-settings/chat/macros',
          ],
        },
        {
          type: 'category',
          label: '일반',
          items: [
            'channel-settings/general/language',
            'channel-settings/general/button'
          ],
        },
        {
          type: 'category',
          label: '팀',
          items: [
            'channel-settings/team/members-bots',
          ],
        },
        {
          type: 'category',
          label: '보안',
          items: [
            'channel-settings/security/saml',
            'channel-settings/security/ip-restriction',
          ],
        },
      ],
    },

    // 👤 개인 설정
    {
      type: 'category',
      label: '개인 설정',
      items: [
        'personal-settings/push',
        'personal-settings/account',
      ],
    },
  ],
};