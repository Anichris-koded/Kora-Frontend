## [1.0.1](https://github.com/Anichris-koded/Kora-Frontend/compare/v1.0.0...v1.0.1) (2026-06-29)


### Bug Fixes

* resolve all pre-existing TypeScript errors blocking CI ([66b69db](https://github.com/Anichris-koded/Kora-Frontend/commit/66b69dbe63f09b22b9fec12c6ba7d078160c04a4))

# 1.0.0 (2026-06-29)


### Bug Fixes

* add esbuild override to resolve npm ci lock file mismatch in CI ([f55452f](https://github.com/Anichris-koded/Kora-Frontend/commit/f55452f010324bb16ae9c8abae7fd825b1315abe))
* **dashboard:** implement responsive multi-panel layout for SME and investor dashboards ([4062aac](https://github.com/Anichris-koded/Kora-Frontend/commit/4062aac73e9e018239ba4d97c533b1288e20763f))
* remove duplicate MOCK_INVOICES export, docs restructure  and convert forbidden next/dynamic ssr=false imports to client components ([35b851f](https://github.com/Anichris-koded/Kora-Frontend/commit/35b851f19d965c1c30f30564a14e672e78c01772))
* resolve issue [#2](https://github.com/Anichris-koded/Kora-Frontend/issues/2) — improve invoice creation wizard UX flow ([2fc869c](https://github.com/Anichris-koded/Kora-Frontend/commit/2fc869c15fcb5be3348ae79049981dac6bc95ded))
* resolve issue [#3](https://github.com/Anichris-koded/Kora-Frontend/issues/3) — design marketplace listing and invoice detail pages ([331084d](https://github.com/Anichris-koded/Kora-Frontend/commit/331084ddbcf33bbde04f7f7eb3785aefdb17ac3d))
* resolve issues [#186](https://github.com/Anichris-koded/Kora-Frontend/issues/186), [#187](https://github.com/Anichris-koded/Kora-Frontend/issues/187), [#190](https://github.com/Anichris-koded/Kora-Frontend/issues/190), [#223](https://github.com/Anichris-koded/Kora-Frontend/issues/223) ([cf9e5b7](https://github.com/Anichris-koded/Kora-Frontend/commit/cf9e5b71a36e4643026ca9a05176a392ec27f2b1))
* resolve issues [#191](https://github.com/Anichris-koded/Kora-Frontend/issues/191) [#193](https://github.com/Anichris-koded/Kora-Frontend/issues/193) [#196](https://github.com/Anichris-koded/Kora-Frontend/issues/196) [#198](https://github.com/Anichris-koded/Kora-Frontend/issues/198) ([edba15a](https://github.com/Anichris-koded/Kora-Frontend/commit/edba15ac76d6233b7274c1a0d2168b614fa2344c))
* resolve issues [#212](https://github.com/Anichris-koded/Kora-Frontend/issues/212), [#214](https://github.com/Anichris-koded/Kora-Frontend/issues/214), [#216](https://github.com/Anichris-koded/Kora-Frontend/issues/216), [#218](https://github.com/Anichris-koded/Kora-Frontend/issues/218) ([45b223d](https://github.com/Anichris-koded/Kora-Frontend/commit/45b223d9c9e2c625fc4961879861c9f8d795e094))
* resolve upstream merge and type errors blocking production build ([f768625](https://github.com/Anichris-koded/Kora-Frontend/commit/f768625443591a483a6685e1a10b0ae887c6b46f))
* resolve upstream merge and type errors blocking production build ([3d3e2cb](https://github.com/Anichris-koded/Kora-Frontend/commit/3d3e2cb08fc90eb3618365234d11096a0f844f54))
* resolve upstream merge and type errors blocking production build ([eae8f32](https://github.com/Anichris-koded/Kora-Frontend/commit/eae8f32516c638a760d9809bffdb32c352ed4ef8))
* resolve upstream merge and type errors blocking production build ([7bdc6dc](https://github.com/Anichris-koded/Kora-Frontend/commit/7bdc6dc31f367cdfbfbb62193da3f9c6b6ef38c6))
* use separate hook instances in prefetch concurrency test ([29cc1a8](https://github.com/Anichris-koded/Kora-Frontend/commit/29cc1a833ea5b11e92a3bbb1c7d3ee0516dceb94))


### Features

* add command palette (Cmd+K) and changelog modal ([4af3a8f](https://github.com/Anichris-koded/Kora-Frontend/commit/4af3a8ff9c0f2cbf17393fddf9479fa7c14cfb71)), closes [#117](https://github.com/Anichris-koded/Kora-Frontend/issues/117) [#114](https://github.com/Anichris-koded/Kora-Frontend/issues/114)
* add components ([834823b](https://github.com/Anichris-koded/Kora-Frontend/commit/834823b41df4a70820dfbcf391e3173734f2f96e))
* add environment variable validation on startup ([46ca764](https://github.com/Anichris-koded/Kora-Frontend/commit/46ca764ae740b273b4919c91a6a03d6cc077fd2c))
* add i18n (EN/ES) and transaction simulation preview ([8f8b19f](https://github.com/Anichris-koded/Kora-Frontend/commit/8f8b19f0742fe29d806add72ed82809ab19517f6)), closes [#113](https://github.com/Anichris-koded/Kora-Frontend/issues/113) [#112](https://github.com/Anichris-koded/Kora-Frontend/issues/112) [#113](https://github.com/Anichris-koded/Kora-Frontend/issues/113) [#112](https://github.com/Anichris-koded/Kora-Frontend/issues/112)
* add invoice risk score gauge visualization ([658157a](https://github.com/Anichris-koded/Kora-Frontend/commit/658157a467565d3787b2c03647bcda115f191c2f))
* add Playwright component tests for FileInput, RangeSlider, DatePicker ([#249](https://github.com/Anichris-koded/Kora-Frontend/issues/249)) ([b65ddd1](https://github.com/Anichris-koded/Kora-Frontend/commit/b65ddd137667a367c8ab028972f6ec7d26ede2ed))
* add pt-BR locale, wallet session expiry, sanitizeInput, and env-driven resource hints ([c52ab46](https://github.com/Anichris-koded/Kora-Frontend/commit/c52ab4620835dd5bfc8e08b41404efa6da84faa9)), closes [#292](https://github.com/Anichris-koded/Kora-Frontend/issues/292) [#267](https://github.com/Anichris-koded/Kora-Frontend/issues/267) [#261](https://github.com/Anichris-koded/Kora-Frontend/issues/261) [#260](https://github.com/Anichris-koded/Kora-Frontend/issues/260)
* add SEO routes, feature flags, Docker setup, and bundle size tracking ([2527a18](https://github.com/Anichris-koded/Kora-Frontend/commit/2527a1882bc8f9a026f2e9114f3e1b9c2ab0e724)), closes [#305](https://github.com/Anichris-koded/Kora-Frontend/issues/305) [#308](https://github.com/Anichris-koded/Kora-Frontend/issues/308) [#301](https://github.com/Anichris-koded/Kora-Frontend/issues/301) [#306](https://github.com/Anichris-koded/Kora-Frontend/issues/306)
* add test coverage reporting to CI workflow ([10b0782](https://github.com/Anichris-koded/Kora-Frontend/commit/10b0782f090303a7e80cc32258cbc2982c39b368))
* add testnet funding via friendbot and faucet ([90202d9](https://github.com/Anichris-koded/Kora-Frontend/commit/90202d985a331b83ba275e499f6cfa54062a6a90))
* add wallet disconnect cleanup and confirmation ([68e04a8](https://github.com/Anichris-koded/Kora-Frontend/commit/68e04a860199d427df49728279c566103df43c02))
* add Web Vitals monitoring and portfolio composition donuts ([1367117](https://github.com/Anichris-koded/Kora-Frontend/commit/1367117ede0d9b5bef9f602498e25c754a91d809)), closes [#139](https://github.com/Anichris-koded/Kora-Frontend/issues/139) [#159](https://github.com/Anichris-koded/Kora-Frontend/issues/159)
* all issues resolved ([e87a5df](https://github.com/Anichris-koded/Kora-Frontend/commit/e87a5df2c04c0c70aa56b7afabf9d2221987698e))
* all task is resolved ([933fa64](https://github.com/Anichris-koded/Kora-Frontend/commit/933fa6462921cfcaf221ad7f5459b89059aed34f))
* **api:** add Pinata proxy route with rate limiting, PDF validation, and optional VirusTotal; route IPFS uploads through API; update services ([c1d2a44](https://github.com/Anichris-koded/Kora-Frontend/commit/c1d2a44fd24631d42aadf99e49b502a145146134))
* **auth:** add wallet ownership verification system ([aa13ad0](https://github.com/Anichris-koded/Kora-Frontend/commit/aa13ad0db3d85beb0ca88f6ccfa7d1bbbd46695e))
* Complete all 7 dashboard & onboarding features ([e8d06eb](https://github.com/Anichris-koded/Kora-Frontend/commit/e8d06eb93924ac0b83b4ac8cf5a4570e496b4f6e))
* CSRF protection, Navbar selector optimisation, Suspense boundaries, SVG single-pass ([17ccf46](https://github.com/Anichris-koded/Kora-Frontend/commit/17ccf460deda90a05ef468e8777f3df8504cb7f9)), closes [#265](https://github.com/Anichris-koded/Kora-Frontend/issues/265) [#259](https://github.com/Anichris-koded/Kora-Frontend/issues/259) [#258](https://github.com/Anichris-koded/Kora-Frontend/issues/258) [#256](https://github.com/Anichris-koded/Kora-Frontend/issues/256)
* EmptyState variants, comparison wiring, settings persistence, flag icons ([01c989d](https://github.com/Anichris-koded/Kora-Frontend/commit/01c989d870155a526d18e1bebd8929a2ada6a105))
* enhance accessibility and i18n support with focus traps, validation messages, ([ca11d48](https://github.com/Anichris-koded/Kora-Frontend/commit/ca11d481598908edabcec9744a9615dd909fb4a5))
* env validation, upload signing, error boundaries, X-Request-ID ([#269](https://github.com/Anichris-koded/Kora-Frontend/issues/269) [#275](https://github.com/Anichris-koded/Kora-Frontend/issues/275) [#276](https://github.com/Anichris-koded/Kora-Frontend/issues/276) [#277](https://github.com/Anichris-koded/Kora-Frontend/issues/277)) ([bc53379](https://github.com/Anichris-koded/Kora-Frontend/commit/bc5337908806b52debe69aee3e497e5ed6d6faac))
* feedback widget and global keyboard shortcuts ([fbf4ae3](https://github.com/Anichris-koded/Kora-Frontend/commit/fbf4ae3aa44828ba249fa5842cf9b0fce9de7f6b)), closes [#115](https://github.com/Anichris-koded/Kora-Frontend/issues/115) [#116](https://github.com/Anichris-koded/Kora-Frontend/issues/116)
* **frontend:** improve investor discovery flows ([34c4fdf](https://github.com/Anichris-koded/Kora-Frontend/commit/34c4fdff19c00f133aaccbf3ffe4001286149d98))
* **hero:** add animated landing page hero and live stats ([255c5bb](https://github.com/Anichris-koded/Kora-Frontend/commit/255c5bbcede3d673c1d39d09da117dc6084703bb))
* Implement 4 frontend issues simultaneously ([5d2582f](https://github.com/Anichris-koded/Kora-Frontend/commit/5d2582f41ab00d5b231789078ed4da8206032d08)), closes [#143](https://github.com/Anichris-koded/Kora-Frontend/issues/143) [#129](https://github.com/Anichris-koded/Kora-Frontend/issues/129) [#146](https://github.com/Anichris-koded/Kora-Frontend/issues/146) [#142](https://github.com/Anichris-koded/Kora-Frontend/issues/142) [#143](https://github.com/Anichris-koded/Kora-Frontend/issues/143) [#129](https://github.com/Anichris-koded/Kora-Frontend/issues/129) [#146](https://github.com/Anichris-koded/Kora-Frontend/issues/146) [#142](https://github.com/Anichris-koded/Kora-Frontend/issues/142)
* implement issues [#192](https://github.com/Anichris-koded/Kora-Frontend/issues/192), [#194](https://github.com/Anichris-koded/Kora-Frontend/issues/194), [#195](https://github.com/Anichris-koded/Kora-Frontend/issues/195), [#202](https://github.com/Anichris-koded/Kora-Frontend/issues/202) ([e78c280](https://github.com/Anichris-koded/Kora-Frontend/commit/e78c280eb732ef8ad66c3f61ea9963996d7368ec))
* implement notification preferences settings ([#122](https://github.com/Anichris-koded/Kora-Frontend/issues/122)) ([ef4a7f5](https://github.com/Anichris-koded/Kora-Frontend/commit/ef4a7f55ea8c23842a3640eb3fc0c82d4ba95143))
* implement SME/Investor dashboards, analytics CSV & wallet flows ([9df88cd](https://github.com/Anichris-koded/Kora-Frontend/commit/9df88cdf9900bbd306a727800f03814617685ccd))
* implement wallet modal, copy utility, funding progress bar, and marketplace search ([#45](https://github.com/Anichris-koded/Kora-Frontend/issues/45) [#47](https://github.com/Anichris-koded/Kora-Frontend/issues/47) [#29](https://github.com/Anichris-koded/Kora-Frontend/issues/29) [#49](https://github.com/Anichris-koded/Kora-Frontend/issues/49)) ([8bb7189](https://github.com/Anichris-koded/Kora-Frontend/commit/8bb7189a16d7e3975b23abd97817f861db02b297))
* improve accessibility, storage resilience, and transaction history ([d03ab0e](https://github.com/Anichris-koded/Kora-Frontend/commit/d03ab0ebe8b8462855c5c8ba220289e92689c82e))
* investor yield claim flow ([#61](https://github.com/Anichris-koded/Kora-Frontend/issues/61)) and debounce/throttle hooks ([#68](https://github.com/Anichris-koded/Kora-Frontend/issues/68)) ([5216e7c](https://github.com/Anichris-koded/Kora-Frontend/commit/5216e7c8a323ecf61805d52fcd2a839127f6035f))
* invoice NFT metadata v1 schema + Lighthouse optimization ([c63bbba](https://github.com/Anichris-koded/Kora-Frontend/commit/c63bbba2ceb69a98b4b3462354e477ba07e574d4)), closes [#121](https://github.com/Anichris-koded/Kora-Frontend/issues/121) [#125](https://github.com/Anichris-koded/Kora-Frontend/issues/125)
* **invoice:** implement step 3 wizard with file validation, IPFS uploads, and minting status ([d6d673e](https://github.com/Anichris-koded/Kora-Frontend/commit/d6d673e0ed8103d4c1b8300e4eb43e8c47db94d8))
* **invoice:** implement wizard step 2 financing terms form & live preview. Closes [#13](https://github.com/Anichris-koded/Kora-Frontend/issues/13) ([b635555](https://github.com/Anichris-koded/Kora-Frontend/commit/b6355554a50b737dd44e0ce224f3d8de9dee8f12))
* Kora Protocol on-chain invoice financing frontend ([7f46caf](https://github.com/Anichris-koded/Kora-Frontend/commit/7f46cafbb5995d2ff36654c4187cee2457104659))
* **marketplace:** implement core filters, skeleton loading, and url sync ([d795ddc](https://github.com/Anichris-koded/Kora-Frontend/commit/d795ddc2a2277970076eb480fecae386531610bd))
* **marketplace:** integrate invoice detail page and mock transaction pipeline ([25f33b6](https://github.com/Anichris-koded/Kora-Frontend/commit/25f33b6bb9af49fff25024815b413858ebb987fd)), closes [#16](https://github.com/Anichris-koded/Kora-Frontend/issues/16)
* optimize wallet logos, dynamic OG tags, structured API logging, and semantic release ([8a0c41c](https://github.com/Anichris-koded/Kora-Frontend/commit/8a0c41c3d34adab66576ad677152e41efe53dd6f))
* **perf:** image optimization, asset pipeline, and wallet SVG logos ([484a075](https://github.com/Anichris-koded/Kora-Frontend/commit/484a075420900a48dd87e81ec5e3f8302db46574))
* route-based code splitting, responsive marketplace mobile UX, optimistic invoice funding, and system dark mode support ([a708422](https://github.com/Anichris-koded/Kora-Frontend/commit/a708422ec9c3d12066ee32ecaf9cfe1d4f210bfb))
* Soroban contract event subscription + invoice comparison ([#119](https://github.com/Anichris-koded/Kora-Frontend/issues/119), [#120](https://github.com/Anichris-koded/Kora-Frontend/issues/120)) ([5e20f95](https://github.com/Anichris-koded/Kora-Frontend/commit/5e20f950954ef1504a6d7822bd85e258877254bf))
* stabilize production build and harden validations ([aef4a6e](https://github.com/Anichris-koded/Kora-Frontend/commit/aef4a6e357098be2b8cf1a604e4affa042f42cd9))
* tooltip component, print/export, and advanced analytics filters ([66dac25](https://github.com/Anichris-koded/Kora-Frontend/commit/66dac25cdcad75d2c7b05aecfa812f8f24cba661))
* transaction lifecycle, IPFS progress, invoice store, and query hooks ([f74a851](https://github.com/Anichris-koded/Kora-Frontend/commit/f74a85174e0cd93bb39892951efb221a6fb32c98))
* type-safe contract client, responsive navbar, GlassCard, and RiskBadge components ([ee9f378](https://github.com/Anichris-koded/Kora-Frontend/commit/ee9f378ad0056ad633edecda6d241ec457127f11))

# Changelog

All notable changes to this project will be documented in this file.

This file is generated with
[standard-version](https://github.com/conventional-changelog/standard-version)
from Conventional Commits.

## [0.1.0](https://github.com/OpenLedger-Foundation/Kora-Frontend/releases/tag/v0.1.0) (2026-05-18)

### Features

- add address book for saved Stellar addresses
- add analytics page with charts and portfolio metrics
- add changelog modal with version tracking and formatted release notes
- add command palette with invoice search, page navigation, and action commands
- add dark, light, and system theme support
- add footer with version display and changelog link
- add initial public scaffold of the Kora-Frontend repository
- add investor dashboard with position tracking and yield projections
- add invoice creation flow with IPFS document upload
- add invoice marketplace with filtering, sorting, and search
- add onboarding tour for new users
- add on-chain invoice funding and repayment via Soroban smart contracts
- add PWA support with offline page and install prompt
- add SME dashboard for managing tokenized invoices
- add transaction history with full lifecycle tracking
- add wallet integration via Stellar Wallets Kit
