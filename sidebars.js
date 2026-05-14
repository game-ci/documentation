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
    {
      type: 'category',
      label: 'CLI',
      collapsible: true,
      collapsed: true,
      link: { type: 'doc', id: 'github-cli/index' },
      items: [
        { type: 'doc', id: 'github-cli/build', label: 'Engine Commands' },
        { type: 'doc', id: 'github-cli/remote-builds', label: 'Orchestrate' },
        {
          type: 'doc',
          id: 'github-cli/configuration-and-plugins',
          label: 'Configuration and Plugins',
        },
        { type: 'doc', id: 'github-cli/github-action', label: 'GitHub Action' },
      ],
    },
    {
      type: 'category',
      label: 'Docker',
      collapsible: true,
      collapsed: true,
      items: [
        { type: 'doc', id: 'docker/docker-images', label: 'GameCI Docker images for Unity' },
        { type: 'doc', id: 'docker/windows-docker-images', label: 'Windows docker images' },
        {
          type: 'doc',
          id: 'docker/customize-docker-images',
          label: 'Customize GameCI Unity Docker images',
        },
        { type: 'doc', id: 'docker/versions', label: 'Versions' },
        { type: 'doc', id: 'docker/custom-images', label: 'Custom Images' },
      ],
    },
    {
      type: 'category',
      label: 'Orchestrator',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introduction to Orchestrator',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'github-orchestrator/introduction-to-orchestrator/introduction',
              label: 'Introduction',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/introduction-to-orchestrator/game-ci-vs-orchestrator',
              label: 'GameCI vs Orchestrator',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/introduction-to-orchestrator/getting-started',
              label: 'Getting Started',
            },
            {
              type: 'category',
              label: 'Examples',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'github-orchestrator/introduction-to-orchestrator/examples/command-line',
                  label: 'Command Line',
                },
                {
                  type: 'doc',
                  id: 'github-orchestrator/introduction-to-orchestrator/examples/github-actions',
                  label: 'GitHub Actions',
                },
                {
                  type: 'doc',
                  id: 'github-orchestrator/introduction-to-orchestrator/examples/aws',
                  label: 'AWS Examples',
                },
                {
                  type: 'doc',
                  id: 'github-orchestrator/introduction-to-orchestrator/examples/kubernetes',
                  label: 'Kubernetes Examples',
                },
              ],
            },
          ],
        },
        { type: 'doc', id: 'github-orchestrator/jobs', label: 'Orchestrator Jobs' },
        {
          type: 'category',
          label: 'Provider Types',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'github-orchestrator/providers/overview', label: 'Provider Types' },
            { type: 'doc', id: 'github-orchestrator/providers/aws', label: 'AWS' },
            { type: 'doc', id: 'github-orchestrator/providers/kubernetes', label: 'Kubernetes' },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/github-actions-dispatch',
              label: 'GitHub Actions Dispatch Provider',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/local-docker',
              label: 'Local Docker',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/gitlab-ci-dispatch',
              label: 'GitLab CI Dispatch Provider',
            },
            { type: 'doc', id: 'github-orchestrator/providers/local', label: 'Local' },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/custom-providers',
              label: 'Custom Providers',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/remote-powershell',
              label: 'Remote PowerShell Provider',
            },
            { type: 'doc', id: 'github-orchestrator/providers/ansible', label: 'Ansible Provider' },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/community-providers',
              label: 'Community Providers',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/github-integration',
              label: 'GitHub Integration',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/gitlab-integration',
              label: 'GitLab Integration',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/gcp-cloud-run',
              label: 'GCP Cloud Run (Experimental)',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/azure-aci',
              label: 'Azure ACI (Experimental)',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/cli-provider-protocol',
              label: 'CLI Provider Protocol',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/providers/config-defined-providers',
              label: 'Config-Defined Providers',
            },
          ],
        },
        { type: 'doc', id: 'github-orchestrator/secrets', label: 'Secrets' },
        {
          type: 'category',
          label: 'Standalone CLI',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'github-orchestrator/cli/getting-started',
              label: 'Standalone Orchestrator CLI',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/cli/build-command',
              label: 'Build Command',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/cli/orchestrate-command',
              label: 'Standalone Orchestrator Command',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/cli/other-commands',
              label: 'Other Commands',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/cli/init-command',
              label: 'Init Command',
            },
          ],
        },
        {
          type: 'doc',
          id: 'github-orchestrator/api-reference',
          label: 'API Reference',
        },
        {
          type: 'category',
          label: 'Advanced topics',
          collapsible: true,
          collapsed: true,
          items: [
            { type: 'doc', id: 'github-orchestrator/advanced-topics/caching', label: 'Caching' },
            {
              type: 'category',
              label: 'Hooks',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'github-orchestrator/advanced-topics/hooks/command-hooks',
                  label: 'Command Hooks',
                },
                {
                  type: 'doc',
                  id: 'github-orchestrator/advanced-topics/hooks/container-hooks',
                  label: 'Container Hooks',
                },
                {
                  type: 'doc',
                  id: 'github-orchestrator/advanced-topics/hooks/built-in-hooks',
                  label: 'Built-In Hooks',
                },
              ],
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/load-balancing',
              label: 'Load Balancing',
            },
            { type: 'doc', id: 'github-orchestrator/advanced-topics/storage', label: 'Storage' },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/architecture',
              label: 'Architecture',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/build-services',
              label: 'Build Services',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/lfs-agents',
              label: 'Custom LFS Agents',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/test-workflow-engine',
              label: 'Test Workflow Engine',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/hot-runner-protocol',
              label: 'Streaming Runner',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/large-projects',
              label: 'Large Projects',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/monorepo-support',
              label: 'Monorepo Support',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/build-reliability',
              label: 'Build Reliability',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/engine-plugins',
              label: 'Engine Plugins',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/unity-accelerator',
              label: 'Unity Accelerator',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/self-hosting-and-orchestrator',
              label: 'Self-Hosting and Orchestrator',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/failures-and-diagnostics',
              label: 'Failures and Diagnostics',
            },
            {
              type: 'doc',
              id: 'github-orchestrator/advanced-topics/unity-log-collection',
              label: 'Unity Log Collection',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsible: true,
      collapsed: true,
      items: [{ type: 'doc', id: 'troubleshooting/common-issues', label: 'Common issues' }],
    },
    {
      type: 'doc',
      id: 'faq/index',
      label: 'Frequently Asked Questions (FAQ)',
    },
  ],
};
