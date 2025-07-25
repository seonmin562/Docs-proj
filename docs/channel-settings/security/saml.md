---
id: saml
title: SAML SSO 로그인
sidebar_label: SAML SSO 로그인
---

# SAML SSO 로그인

## SAML이란?

사용자가 각각의 애플리케이션에 계정과 비밀번호를 입력하지 않고도 SAML SSO 로그인을 통해 여러 애플리케이션에 로그인이 가능합니다. 사용하는 서비스 별 계정 정보를 관리하고 입력하지 않아도 되기 때문에 관리가 쉽고, 조직의 계정을 한 번에 관리할 수 있어 사용자, 관리자 모두 편의성 및 보안성이 높습니다.

SAML SSO 로그인은 엔터프라이즈 플랜 구독 시, '보안 패키지' 기능을 별도로 선불 충전 후 사용이 가능합니다. [→ 가격 문의하기](https://root.channel.io/)

## SAML SSO 로그인 장점

- 편리합니다.
  - 구성원은 여러 서비스에서 여러 개의 계정과 비밀번호를 기억할 필요없이, ID 공급자 서비스에 등록된 하나의 계정으로 모든 서비스를 관리할 수 있습니다.
  - 관리자는 신규 구성원을 손쉽게 채널에 초대할 수 있습니다. 개별 초대 링크를 공유하지 않고 ID 공급자에 등록하는 것만으로도 채널 초대가 가능합니다.
- 보안도가 높습니다.
  - ID 공급자 ↔ 채널 간의 암호화된 로그인 인증 방식을 활용하여, 매니저 개인정보 관리보다 높은 수준의 보안이 보장됩니다.

## 설정 방법

SAML SSO 로그인을 사용하기 위해서는 아래 3가지 항목이 설정되어야 합니다.

1. 상단의 SAML SSO 버튼 활성화
   ![SAML SSO 버튼](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc36db3da9e5c8d)
2. 1개 이상의 인증된 도메인 등록
3. SAML SSO 설정 값 입력

### SAML SSO 설정 값 입력

- SSO URL
- Entity ID
- Public certificate

![SAML SSO 설정 예시](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc494badf4b00d4)

### Okta 설정 방법

ID 공급자는 여러 서비스가 제공되고 있습니다. 예시는 Okta 서비스 등록 방법으로 작성되었습니다. 다른 서비스를 이용 중이시라면 해당 서비스의 App 연동 방법을 참고하여 설정 부탁드립니다.

1. [Okta] - [Applications] - [Create App Intergration] 클릭
   ![Okta App Integration](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc5a7d6bb39ee76)
2. App name에 [채널톡] 또는 [ChannelTalk] 입력 후 Next
   ![Okta App Name](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc5ccc1329837ca)
3. SAML 2.0 선택
   ![SAML 2.0 선택](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc6042d583ec40d)
4. 1~6번 정보만 입력 후 Next
   ![SAML SSO 설정 화면](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc6359879a0c45a)
   - 1) SAML SSO 설정 화면의 SSO URL 입력 (채널톡에서 확인)
   - 2) SAML SSO 설정 화면의 Entity ID 입력 (채널톡에서 확인)
   - 3) 입력하지 않음 (공란)
   - 4) EmailAddress 선택
   - 5) Email 선택
   - 6) Create and update 선택
5. [Sign On] - [More details] 클릭
   ![Sign On More Details](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc65d43e9f4774f)
6. Sign on URL / Issuer / Signing Certificate 복사 후 채널톡 SAML SSO 설정 화면에 입력
   ![Sign On URL 입력](https://cf.channel.io/document/spaces/6/articles/28/revisions/79/usermedia/662b0fc68c3cd3ff5184)

### 자주 묻는 질문

- 도메인 인증이 왜 필요한가요?
- SAML SSO 로그인 시, 채널의 매니저를 [이메일 도메인]으로 식별, 관리합니다. 따라서, 해당 도메인을 채널이 소유하고 있음을 증명해야 합니다.
- 도메인은 1개 이상 등록이 가능합니다.
- 커스텀 도메인 사용이 필요해요.
  - gmail.com / naver.com 과 같은 계정은 등록이 불가합니다.
- 소유자 역할 또는 보안 및 개발 권한이 제공된 매니저만 설정이 가능합니다.

### 참고 링크

- [Okta에서 확인하는 방법 알아보기](https://docs.channel.io/help/ko/articles/cd70a19d#%EC%9E%90%EC%A3%BC-%EB%AC%BB%EB%8A%94-%EC%A7%88%EB%AC%B8)
