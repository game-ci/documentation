// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  defaultSidebar: [
    'index',
    { type: 'doc', id: 'getting-started/index', label: 'Getting started' },
    {
      type: 'category',
      label: 'CI Platforms',
      collapsed: false,
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'GitHub (Default)',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'github/getting-started', label: 'Getting started' },
            { type: 'doc', id: 'github/activation', label: 'Activation' },
            { type: 'doc', id: 'github/test-runner', label: 'Test runner' },
            { type: 'doc', id: 'github/builder', label: 'Builder' },
            { type: 'doc', id: 'github/returning-a-license', label: 'Returning a license' },
            {
              type: 'category',
              label: 'Deployment',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'doc', id: 'github/deployment/android', label: 'Deploy to Google Play' },
                { type: 'doc', id: 'github/deployment/ios', label: 'Deploy to the App Store' },
                { type: 'doc', id: 'github/deployment/steam', label: 'Deploy to Steam' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'GitLab',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'gitlab/getting-started', label: 'Getting started' },
            { type: 'doc', id: 'gitlab/activation', label: 'Activation' },
            { type: 'doc', id: 'gitlab/example-project', label: 'Example Project' },
            { type: 'doc', id: 'gitlab/custom-build-options', label: 'Custom build options' },
            { type: 'doc', id: 'gitlab/tests', label: 'Tests' },
            {
              type: 'category',
              label: 'Deployment',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'doc', id: 'gitlab/deployment/android', label: 'Android' },
                { type: 'doc', id: 'gitlab/deployment/ios', label: 'iOS' },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'CircleCI',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'circleci/getting-started', label: 'Getting started' },
            { type: 'doc', id: 'circleci/activation', label: 'Activation' },
            { type: 'doc', id: 'circleci/build', label: 'Build' },
            { type: 'doc', id: 'circleci/test', label: 'Test' },
            { type: 'doc', id: 'circleci/executors', label: 'Executors' },
          ],
        },
        {
          type: 'category',
          label: 'Self-Hosting',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'self-hosting/overview', label: 'Overview' },
            { type: 'doc', id: 'self-hosting/host-types', label: 'Types of Hosts' },
            {
              type: 'category',
              label: 'Host Creation',
              collapsible: true,
              collapsed: true,
              items: [
                { type: 'doc', id: 'self-hosting/host-creation/bare-metal', label: 'Bare-Metal' },
                {
                  type: 'doc',
                  id: 'self-hosting/host-creation/multipass',
                  label: 'VMs with Multipass (Basic)',
                },
                {
                  type: 'category',
                  label: 'VMs with QEMU (Advanced)',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    {
                      type: 'doc',
                      id: 'self-hosting/host-creation/QEMU/overview',
                      label: 'Install QEMU',
                    },
                    {
                      type: 'doc',
                      id: 'self-hosting/host-creation/QEMU/linux-cloudimage',
                      label: 'Linux (Cloud-Image)',
                    },
                    {
                      type: 'doc',
                      id: 'self-hosting/host-creation/QEMU/linux-liveiso',
                      label: 'Linux (Live-ISO)',
                    },
                    {
                      type: 'doc',
                      id: 'self-hosting/host-creation/QEMU/windows',
                      label: 'Windows',
                    },
                    { type: 'doc', id: 'self-hosting/host-creation/QEMU/macos', label: 'MacOS' },
                    {
                      type: 'doc',
                      id: 'self-hosting/host-creation/QEMU/configuration',
                      label: 'Advanced Configuration Options',
                    },
                  ],
                },
              ],
            },
            {
              type: 'category',
              label: 'Host Provisioning',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'self-hosting/host-provisioning/debian-setup',
                  label: 'Debian Machine Setup',
                },
                {
                  type: 'doc',
                  id: 'self-hosting/host-provisioning/ubuntu-setup',
                  label: 'Ubuntu Machine Setup',
                },
                {
                  type: 'doc',
                  id: 'self-hosting/host-provisioning/cloud-init',
                  label: 'Declarative Provisioning using Cloud-Init',
                },
              ],
            },
            {
              type: 'category',
              label: 'Runner Application Installation',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'self-hosting/runner-application-installation/gitlab-pipelines',
                  label: 'Gitlab Pipelines',
                },
                {
                  type: 'doc',
                  id: 'self-hosting/runner-application-installation/github-actions',
                  label: 'Github Actions',
                },
              ],
            },
            {
              type: 'doc',
              id: 'self-hosting/windows-runner-setup',
              label: 'Windows Self-Hosted Runner Setup',
            },
          ],
        },
      ],
    },
    { type: 'autogenerated', dirName: '03-github-cli' },
    { type: 'autogenerated', dirName: '03-github-orchestrator' },
    { type: 'autogenerated', dirName: '08-docker' },
    { type: 'autogenerated', dirName: '09-troubleshooting' },
    { type: 'autogenerated', dirName: '10-faq' },
  ],
};
