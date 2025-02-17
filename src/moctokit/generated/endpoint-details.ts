import { Endpoints } from "../../endpoint-mocker/endpoint-mocker.types";
const endpoints: Endpoints = {
  actions: {
    addCustomLabelsToSelfHostedRunnerForOrg: {
      method: "post",
      path: "/orgs/{org}/actions/runners/{runner_id}/labels",
      parameters: { path: ["org", "runner_id"], query: [], body: ["labels"] },
    },
    addCustomLabelsToSelfHostedRunnerForRepo: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      parameters: {
        path: ["owner", "repo", "runner_id"],
        query: [],
        body: ["labels"],
      },
    },
    addSelectedRepoToOrgSecret: {
      method: "put",
      path: "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    approveWorkflowRun: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/approve",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    cancelWorkflowRun: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/cancel",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    createOrUpdateEnvironmentSecret: {
      method: "put",
      path: "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      parameters: {
        path: ["repository_id", "environment_name", "secret_name"],
        query: [],
        body: ["encrypted_value", "key_id"],
      },
    },
    createOrUpdateOrgSecret: {
      method: "put",
      path: "/orgs/{org}/actions/secrets/{secret_name}",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: [
          "encrypted_value",
          "key_id",
          "visibility",
          "selected_repository_ids",
        ],
      },
    },
    createOrUpdateRepoSecret: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: ["encrypted_value", "key_id"],
      },
    },
    createRegistrationTokenForOrg: {
      method: "post",
      path: "/orgs/{org}/actions/runners/registration-token",
      parameters: { path: ["org"], query: [], body: [] },
    },
    createRegistrationTokenForRepo: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runners/registration-token",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    createRemoveTokenForOrg: {
      method: "post",
      path: "/orgs/{org}/actions/runners/remove-token",
      parameters: { path: ["org"], query: [], body: [] },
    },
    createRemoveTokenForRepo: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runners/remove-token",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    createWorkflowDispatch: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [],
        body: ["ref", "inputs", "inputs.*"],
      },
    },
    deleteActionsCacheById: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/caches/{cache_id}",
      parameters: { path: ["owner", "repo", "cache_id"], query: [], body: [] },
    },
    deleteActionsCacheByKey: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/caches",
      parameters: { path: ["owner", "repo"], query: ["key", "ref"], body: [] },
    },
    deleteArtifact: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
      parameters: {
        path: ["owner", "repo", "artifact_id"],
        query: [],
        body: [],
      },
    },
    deleteEnvironmentSecret: {
      method: "delete",
      path: "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      parameters: {
        path: ["repository_id", "environment_name", "secret_name"],
        query: [],
        body: [],
      },
    },
    deleteOrgSecret: {
      method: "delete",
      path: "/orgs/{org}/actions/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    deleteRepoSecret: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    deleteSelfHostedRunnerFromOrg: {
      method: "delete",
      path: "/orgs/{org}/actions/runners/{runner_id}",
      parameters: { path: ["org", "runner_id"], query: [], body: [] },
    },
    deleteSelfHostedRunnerFromRepo: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}",
      parameters: { path: ["owner", "repo", "runner_id"], query: [], body: [] },
    },
    deleteWorkflowRun: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    deleteWorkflowRunLogs: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/logs",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    disableSelectedRepositoryGithubActionsOrganization: {
      method: "delete",
      path: "/orgs/{org}/actions/permissions/repositories/{repository_id}",
      parameters: { path: ["org", "repository_id"], query: [], body: [] },
    },
    disableWorkflow: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [],
        body: [],
      },
    },
    downloadArtifact: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}",
      parameters: {
        path: ["owner", "repo", "artifact_id", "archive_format"],
        query: [],
        body: [],
      },
    },
    downloadJobLogsForWorkflowRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/jobs/{job_id}/logs",
      parameters: { path: ["owner", "repo", "job_id"], query: [], body: [] },
    },
    downloadWorkflowRunAttemptLogs: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs",
      parameters: {
        path: ["owner", "repo", "run_id", "attempt_number"],
        query: [],
        body: [],
      },
    },
    downloadWorkflowRunLogs: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/logs",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    enableSelectedRepositoryGithubActionsOrganization: {
      method: "put",
      path: "/orgs/{org}/actions/permissions/repositories/{repository_id}",
      parameters: { path: ["org", "repository_id"], query: [], body: [] },
    },
    enableWorkflow: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [],
        body: [],
      },
    },
    getActionsCacheList: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/caches",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page", "ref", "key", "sort", "direction"],
        body: [],
      },
    },
    getActionsCacheUsage: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/cache/usage",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getActionsCacheUsageByRepoForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/cache/usage-by-repository",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    getActionsCacheUsageForEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/cache/usage",
      parameters: { path: ["enterprise"], query: [], body: [] },
    },
    getActionsCacheUsageForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/cache/usage",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getAllowedActionsOrganization: {
      method: "get",
      path: "/orgs/{org}/actions/permissions/selected-actions",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getAllowedActionsRepository: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/permissions/selected-actions",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getArtifact: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/artifacts/{artifact_id}",
      parameters: {
        path: ["owner", "repo", "artifact_id"],
        query: [],
        body: [],
      },
    },
    getEnvironmentPublicKey: {
      method: "get",
      path: "/repositories/{repository_id}/environments/{environment_name}/secrets/public-key",
      parameters: {
        path: ["repository_id", "environment_name"],
        query: [],
        body: [],
      },
    },
    getEnvironmentSecret: {
      method: "get",
      path: "/repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}",
      parameters: {
        path: ["repository_id", "environment_name", "secret_name"],
        query: [],
        body: [],
      },
    },
    getGithubActionsDefaultWorkflowPermissionsEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/permissions/workflow",
      parameters: { path: ["enterprise"], query: [], body: [] },
    },
    getGithubActionsDefaultWorkflowPermissionsOrganization: {
      method: "get",
      path: "/orgs/{org}/actions/permissions/workflow",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getGithubActionsDefaultWorkflowPermissionsRepository: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/permissions/workflow",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getGithubActionsPermissionsOrganization: {
      method: "get",
      path: "/orgs/{org}/actions/permissions",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getGithubActionsPermissionsRepository: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/permissions",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getJobForWorkflowRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/jobs/{job_id}",
      parameters: { path: ["owner", "repo", "job_id"], query: [], body: [] },
    },
    getOrgPublicKey: {
      method: "get",
      path: "/orgs/{org}/actions/secrets/public-key",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getOrgSecret: {
      method: "get",
      path: "/orgs/{org}/actions/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    getPendingDeploymentsForRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    getRepoPermissions: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/permissions",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getRepoPublicKey: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/secrets/public-key",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getRepoSecret: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    getReviewsForRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/approvals",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    getSelfHostedRunnerForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/runners/{runner_id}",
      parameters: { path: ["org", "runner_id"], query: [], body: [] },
    },
    getSelfHostedRunnerForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}",
      parameters: { path: ["owner", "repo", "runner_id"], query: [], body: [] },
    },
    getWorkflow: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [],
        body: [],
      },
    },
    getWorkflowAccessToRepository: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/permissions/access",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getWorkflowRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: ["exclude_pull_requests"],
        body: [],
      },
    },
    getWorkflowRunAttempt: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}",
      parameters: {
        path: ["owner", "repo", "run_id", "attempt_number"],
        query: ["exclude_pull_requests"],
        body: [],
      },
    },
    getWorkflowRunUsage: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/timing",
      parameters: { path: ["owner", "repo", "run_id"], query: [], body: [] },
    },
    getWorkflowUsage: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [],
        body: [],
      },
    },
    listArtifactsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/artifacts",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listEnvironmentSecrets: {
      method: "get",
      path: "/repositories/{repository_id}/environments/{environment_name}/secrets",
      parameters: {
        path: ["repository_id", "environment_name"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listJobsForWorkflowRun: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/jobs",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: ["filter", "per_page", "page"],
        body: [],
      },
    },
    listJobsForWorkflowRunAttempt: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs",
      parameters: {
        path: ["owner", "repo", "run_id", "attempt_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listLabelsForSelfHostedRunnerForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/runners/{runner_id}/labels",
      parameters: { path: ["org", "runner_id"], query: [], body: [] },
    },
    listLabelsForSelfHostedRunnerForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      parameters: { path: ["owner", "repo", "runner_id"], query: [], body: [] },
    },
    listOrgSecrets: {
      method: "get",
      path: "/orgs/{org}/actions/secrets",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listRepoSecrets: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/secrets",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listRepoWorkflows: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/workflows",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listRunnerApplicationsForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/runners/downloads",
      parameters: { path: ["org"], query: [], body: [] },
    },
    listRunnerApplicationsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runners/downloads",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    listSelectedReposForOrgSecret: {
      method: "get",
      path: "/orgs/{org}/actions/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    listSelectedRepositoriesEnabledGithubActionsOrganization: {
      method: "get",
      path: "/orgs/{org}/actions/permissions/repositories",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listSelfHostedRunnersForOrg: {
      method: "get",
      path: "/orgs/{org}/actions/runners",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listSelfHostedRunnersForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runners",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listWorkflowRunArtifacts: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/artifacts",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listWorkflowRuns: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs",
      parameters: {
        path: ["owner", "repo", "workflow_id"],
        query: [
          "actor",
          "branch",
          "event",
          "status",
          "per_page",
          "page",
          "created",
          "exclude_pull_requests",
          "check_suite_id",
          "head_sha",
        ],
        body: [],
      },
    },
    listWorkflowRunsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/actions/runs",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "actor",
          "branch",
          "event",
          "status",
          "per_page",
          "page",
          "created",
          "exclude_pull_requests",
          "check_suite_id",
          "head_sha",
        ],
        body: [],
      },
    },
    reRunJobForWorkflowRun: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/jobs/{job_id}/rerun",
      parameters: {
        path: ["owner", "repo", "job_id"],
        query: [],
        body: ["enable_debug_logging"],
      },
    },
    reRunWorkflow: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: [],
        body: ["enable_debug_logging"],
      },
    },
    reRunWorkflowFailedJobs: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: [],
        body: ["enable_debug_logging"],
      },
    },
    removeAllCustomLabelsFromSelfHostedRunnerForOrg: {
      method: "delete",
      path: "/orgs/{org}/actions/runners/{runner_id}/labels",
      parameters: { path: ["org", "runner_id"], query: [], body: [] },
    },
    removeAllCustomLabelsFromSelfHostedRunnerForRepo: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      parameters: { path: ["owner", "repo", "runner_id"], query: [], body: [] },
    },
    removeCustomLabelFromSelfHostedRunnerForOrg: {
      method: "delete",
      path: "/orgs/{org}/actions/runners/{runner_id}/labels/{name}",
      parameters: { path: ["org", "runner_id", "name"], query: [], body: [] },
    },
    removeCustomLabelFromSelfHostedRunnerForRepo: {
      method: "delete",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}",
      parameters: {
        path: ["owner", "repo", "runner_id", "name"],
        query: [],
        body: [],
      },
    },
    removeSelectedRepoFromOrgSecret: {
      method: "delete",
      path: "/orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    reviewPendingDeploymentsForRun: {
      method: "post",
      path: "/repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments",
      parameters: {
        path: ["owner", "repo", "run_id"],
        query: [],
        body: ["environment_ids", "state", "comment"],
      },
    },
    setAllowedActionsOrganization: {
      method: "put",
      path: "/orgs/{org}/actions/permissions/selected-actions",
      parameters: {
        path: ["org"],
        query: [],
        body: ["github_owned_allowed", "verified_allowed", "patterns_allowed"],
      },
    },
    setAllowedActionsRepository: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/permissions/selected-actions",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["github_owned_allowed", "verified_allowed", "patterns_allowed"],
      },
    },
    setCustomLabelsForSelfHostedRunnerForOrg: {
      method: "put",
      path: "/orgs/{org}/actions/runners/{runner_id}/labels",
      parameters: { path: ["org", "runner_id"], query: [], body: ["labels"] },
    },
    setCustomLabelsForSelfHostedRunnerForRepo: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/runners/{runner_id}/labels",
      parameters: {
        path: ["owner", "repo", "runner_id"],
        query: [],
        body: ["labels"],
      },
    },
    setGithubActionsDefaultWorkflowPermissionsEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/permissions/workflow",
      parameters: {
        path: ["enterprise"],
        query: [],
        body: [
          "default_workflow_permissions",
          "can_approve_pull_request_reviews",
        ],
      },
    },
    setGithubActionsDefaultWorkflowPermissionsOrganization: {
      method: "put",
      path: "/orgs/{org}/actions/permissions/workflow",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "default_workflow_permissions",
          "can_approve_pull_request_reviews",
        ],
      },
    },
    setGithubActionsDefaultWorkflowPermissionsRepository: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/permissions/workflow",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "default_workflow_permissions",
          "can_approve_pull_request_reviews",
        ],
      },
    },
    setGithubActionsPermissionsOrganization: {
      method: "put",
      path: "/orgs/{org}/actions/permissions",
      parameters: {
        path: ["org"],
        query: [],
        body: ["enabled_repositories", "allowed_actions"],
      },
    },
    setGithubActionsPermissionsRepository: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/permissions",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["enabled", "allowed_actions"],
      },
    },
    setSelectedReposForOrgSecret: {
      method: "put",
      path: "/orgs/{org}/actions/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: ["selected_repository_ids"],
      },
    },
    setSelectedRepositoriesEnabledGithubActionsOrganization: {
      method: "put",
      path: "/orgs/{org}/actions/permissions/repositories",
      parameters: {
        path: ["org"],
        query: [],
        body: ["selected_repository_ids"],
      },
    },
    setWorkflowAccessToRepository: {
      method: "put",
      path: "/repos/{owner}/{repo}/actions/permissions/access",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["access_level"],
      },
    },
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: {
      method: "get",
      path: "/user/starred/{owner}/{repo}",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    deleteRepoSubscription: {
      method: "delete",
      path: "/repos/{owner}/{repo}/subscription",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    deleteThreadSubscription: {
      method: "delete",
      path: "/notifications/threads/{thread_id}/subscription",
      parameters: { path: ["thread_id"], query: [], body: [] },
    },
    getFeeds: {
      method: "get",
      path: "/feeds",
      parameters: { path: [], query: [], body: [] },
    },
    getRepoSubscription: {
      method: "get",
      path: "/repos/{owner}/{repo}/subscription",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getThread: {
      method: "get",
      path: "/notifications/threads/{thread_id}",
      parameters: { path: ["thread_id"], query: [], body: [] },
    },
    getThreadSubscriptionForAuthenticatedUser: {
      method: "get",
      path: "/notifications/threads/{thread_id}/subscription",
      parameters: { path: ["thread_id"], query: [], body: [] },
    },
    listEventsForAuthenticatedUser: {
      method: "get",
      path: "/users/{username}/events",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listNotificationsForAuthenticatedUser: {
      method: "get",
      path: "/notifications",
      parameters: {
        path: [],
        query: ["all", "participating", "since", "before", "page", "per_page"],
        body: [],
      },
    },
    listOrgEventsForAuthenticatedUser: {
      method: "get",
      path: "/users/{username}/events/orgs/{org}",
      parameters: {
        path: ["username", "org"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listPublicEvents: {
      method: "get",
      path: "/events",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPublicEventsForRepoNetwork: {
      method: "get",
      path: "/networks/{owner}/{repo}/events",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listPublicEventsForUser: {
      method: "get",
      path: "/users/{username}/events/public",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listPublicOrgEvents: {
      method: "get",
      path: "/orgs/{org}/events",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listReceivedEventsForUser: {
      method: "get",
      path: "/users/{username}/received_events",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listReceivedPublicEventsForUser: {
      method: "get",
      path: "/users/{username}/received_events/public",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listRepoEvents: {
      method: "get",
      path: "/repos/{owner}/{repo}/events",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listRepoNotificationsForAuthenticatedUser: {
      method: "get",
      path: "/repos/{owner}/{repo}/notifications",
      parameters: {
        path: ["owner", "repo"],
        query: ["all", "participating", "since", "before", "per_page", "page"],
        body: [],
      },
    },
    listReposStarredByAuthenticatedUser: {
      method: "get",
      path: "/user/starred",
      parameters: {
        path: [],
        query: ["sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listReposStarredByUser: {
      method: "get",
      path: "/users/{username}/starred",
      parameters: {
        path: ["username"],
        query: ["sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listReposWatchedByUser: {
      method: "get",
      path: "/users/{username}/subscriptions",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listStargazersForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/stargazers",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listWatchedReposForAuthenticatedUser: {
      method: "get",
      path: "/user/subscriptions",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listWatchersForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/subscribers",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    markNotificationsAsRead: {
      method: "put",
      path: "/notifications",
      parameters: { path: [], query: [], body: ["last_read_at", "read"] },
    },
    markRepoNotificationsAsRead: {
      method: "put",
      path: "/repos/{owner}/{repo}/notifications",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["last_read_at"],
      },
    },
    markThreadAsRead: {
      method: "patch",
      path: "/notifications/threads/{thread_id}",
      parameters: { path: ["thread_id"], query: [], body: [] },
    },
    setRepoSubscription: {
      method: "put",
      path: "/repos/{owner}/{repo}/subscription",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["subscribed", "ignored"],
      },
    },
    setThreadSubscription: {
      method: "put",
      path: "/notifications/threads/{thread_id}/subscription",
      parameters: { path: ["thread_id"], query: [], body: ["ignored"] },
    },
    starRepoForAuthenticatedUser: {
      method: "put",
      path: "/user/starred/{owner}/{repo}",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    unstarRepoForAuthenticatedUser: {
      method: "delete",
      path: "/user/starred/{owner}/{repo}",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
  },
  apps: {
    addRepoToInstallation: {
      method: "put",
      path: "/user/installations/{installation_id}/repositories/{repository_id}",
      parameters: {
        path: ["installation_id", "repository_id"],
        query: [],
        body: [],
      },
    },
    addRepoToInstallationForAuthenticatedUser: {
      method: "put",
      path: "/user/installations/{installation_id}/repositories/{repository_id}",
      parameters: {
        path: ["installation_id", "repository_id"],
        query: [],
        body: [],
      },
    },
    checkToken: {
      method: "post",
      path: "/applications/{client_id}/token",
      parameters: { path: ["client_id"], query: [], body: ["access_token"] },
    },
    createFromManifest: {
      method: "post",
      path: "/app-manifests/{code}/conversions",
      parameters: { path: ["code"], query: [], body: [] },
    },
    createInstallationAccessToken: {
      method: "post",
      path: "/app/installations/{installation_id}/access_tokens",
      parameters: {
        path: ["installation_id"],
        query: [],
        body: [
          "repositories",
          "repository_ids",
          "permissions",
          "permissions.actions",
          "permissions.administration",
          "permissions.checks",
          "permissions.contents",
          "permissions.deployments",
          "permissions.environments",
          "permissions.issues",
          "permissions.metadata",
          "permissions.packages",
          "permissions.pages",
          "permissions.pull_requests",
          "permissions.repository_hooks",
          "permissions.repository_projects",
          "permissions.secret_scanning_alerts",
          "permissions.secrets",
          "permissions.security_events",
          "permissions.single_file",
          "permissions.statuses",
          "permissions.vulnerability_alerts",
          "permissions.workflows",
          "permissions.members",
          "permissions.organization_administration",
          "permissions.organization_custom_roles",
          "permissions.organization_hooks",
          "permissions.organization_plan",
          "permissions.organization_projects",
          "permissions.organization_packages",
          "permissions.organization_secrets",
          "permissions.organization_self_hosted_runners",
          "permissions.organization_user_blocking",
          "permissions.team_discussions",
        ],
      },
    },
    deleteAuthorization: {
      method: "delete",
      path: "/applications/{client_id}/grant",
      parameters: { path: ["client_id"], query: [], body: ["access_token"] },
    },
    deleteInstallation: {
      method: "delete",
      path: "/app/installations/{installation_id}",
      parameters: { path: ["installation_id"], query: [], body: [] },
    },
    deleteToken: {
      method: "delete",
      path: "/applications/{client_id}/token",
      parameters: { path: ["client_id"], query: [], body: ["access_token"] },
    },
    getAuthenticated: {
      method: "get",
      path: "/app",
      parameters: { path: [], query: [], body: [] },
    },
    getBySlug: {
      method: "get",
      path: "/apps/{app_slug}",
      parameters: { path: ["app_slug"], query: [], body: [] },
    },
    getInstallation: {
      method: "get",
      path: "/app/installations/{installation_id}",
      parameters: { path: ["installation_id"], query: [], body: [] },
    },
    getOrgInstallation: {
      method: "get",
      path: "/orgs/{org}/installation",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getRepoInstallation: {
      method: "get",
      path: "/repos/{owner}/{repo}/installation",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getSubscriptionPlanForAccount: {
      method: "get",
      path: "/marketplace_listing/accounts/{account_id}",
      parameters: { path: ["account_id"], query: [], body: [] },
    },
    getSubscriptionPlanForAccountStubbed: {
      method: "get",
      path: "/marketplace_listing/stubbed/accounts/{account_id}",
      parameters: { path: ["account_id"], query: [], body: [] },
    },
    getUserInstallation: {
      method: "get",
      path: "/users/{username}/installation",
      parameters: { path: ["username"], query: [], body: [] },
    },
    getWebhookConfigForApp: {
      method: "get",
      path: "/app/hook/config",
      parameters: { path: [], query: [], body: [] },
    },
    getWebhookDelivery: {
      method: "get",
      path: "/app/hook/deliveries/{delivery_id}",
      parameters: { path: ["delivery_id"], query: [], body: [] },
    },
    listAccountsForPlan: {
      method: "get",
      path: "/marketplace_listing/plans/{plan_id}/accounts",
      parameters: {
        path: ["plan_id"],
        query: ["sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listAccountsForPlanStubbed: {
      method: "get",
      path: "/marketplace_listing/stubbed/plans/{plan_id}/accounts",
      parameters: {
        path: ["plan_id"],
        query: ["sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listInstallationReposForAuthenticatedUser: {
      method: "get",
      path: "/user/installations/{installation_id}/repositories",
      parameters: {
        path: ["installation_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listInstallations: {
      method: "get",
      path: "/app/installations",
      parameters: {
        path: [],
        query: ["per_page", "page", "since", "outdated"],
        body: [],
      },
    },
    listInstallationsForAuthenticatedUser: {
      method: "get",
      path: "/user/installations",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPlans: {
      method: "get",
      path: "/marketplace_listing/plans",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPlansStubbed: {
      method: "get",
      path: "/marketplace_listing/stubbed/plans",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listReposAccessibleToInstallation: {
      method: "get",
      path: "/installation/repositories",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listSubscriptionsForAuthenticatedUser: {
      method: "get",
      path: "/user/marketplace_purchases",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listSubscriptionsForAuthenticatedUserStubbed: {
      method: "get",
      path: "/user/marketplace_purchases/stubbed",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listWebhookDeliveries: {
      method: "get",
      path: "/app/hook/deliveries",
      parameters: { path: [], query: ["per_page", "cursor"], body: [] },
    },
    redeliverWebhookDelivery: {
      method: "post",
      path: "/app/hook/deliveries/{delivery_id}/attempts",
      parameters: { path: ["delivery_id"], query: [], body: [] },
    },
    removeRepoFromInstallation: {
      method: "delete",
      path: "/user/installations/{installation_id}/repositories/{repository_id}",
      parameters: {
        path: ["installation_id", "repository_id"],
        query: [],
        body: [],
      },
    },
    removeRepoFromInstallationForAuthenticatedUser: {
      method: "delete",
      path: "/user/installations/{installation_id}/repositories/{repository_id}",
      parameters: {
        path: ["installation_id", "repository_id"],
        query: [],
        body: [],
      },
    },
    resetToken: {
      method: "patch",
      path: "/applications/{client_id}/token",
      parameters: { path: ["client_id"], query: [], body: ["access_token"] },
    },
    revokeInstallationAccessToken: {
      method: "delete",
      path: "/installation/token",
      parameters: { path: [], query: [], body: [] },
    },
    scopeToken: {
      method: "post",
      path: "/applications/{client_id}/token/scoped",
      parameters: {
        path: ["client_id"],
        query: [],
        body: [
          "access_token",
          "target",
          "target_id",
          "repositories",
          "repository_ids",
          "permissions",
          "permissions.actions",
          "permissions.administration",
          "permissions.checks",
          "permissions.contents",
          "permissions.deployments",
          "permissions.environments",
          "permissions.issues",
          "permissions.metadata",
          "permissions.packages",
          "permissions.pages",
          "permissions.pull_requests",
          "permissions.repository_hooks",
          "permissions.repository_projects",
          "permissions.secret_scanning_alerts",
          "permissions.secrets",
          "permissions.security_events",
          "permissions.single_file",
          "permissions.statuses",
          "permissions.vulnerability_alerts",
          "permissions.workflows",
          "permissions.members",
          "permissions.organization_administration",
          "permissions.organization_custom_roles",
          "permissions.organization_hooks",
          "permissions.organization_plan",
          "permissions.organization_projects",
          "permissions.organization_packages",
          "permissions.organization_secrets",
          "permissions.organization_self_hosted_runners",
          "permissions.organization_user_blocking",
          "permissions.team_discussions",
        ],
      },
    },
    suspendInstallation: {
      method: "put",
      path: "/app/installations/{installation_id}/suspended",
      parameters: { path: ["installation_id"], query: [], body: [] },
    },
    unsuspendInstallation: {
      method: "delete",
      path: "/app/installations/{installation_id}/suspended",
      parameters: { path: ["installation_id"], query: [], body: [] },
    },
    updateWebhookConfigForApp: {
      method: "patch",
      path: "/app/hook/config",
      parameters: {
        path: [],
        query: [],
        body: ["url", "content_type", "secret", "insecure_ssl"],
      },
    },
  },
  billing: {
    getGithubActionsBillingOrg: {
      method: "get",
      path: "/orgs/{org}/settings/billing/actions",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getGithubActionsBillingUser: {
      method: "get",
      path: "/users/{username}/settings/billing/actions",
      parameters: { path: ["username"], query: [], body: [] },
    },
    getGithubAdvancedSecurityBillingGhe: {
      method: "get",
      path: "/enterprises/{enterprise}/settings/billing/advanced-security",
      parameters: {
        path: ["enterprise"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    getGithubAdvancedSecurityBillingOrg: {
      method: "get",
      path: "/orgs/{org}/settings/billing/advanced-security",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    getGithubPackagesBillingOrg: {
      method: "get",
      path: "/orgs/{org}/settings/billing/packages",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getGithubPackagesBillingUser: {
      method: "get",
      path: "/users/{username}/settings/billing/packages",
      parameters: { path: ["username"], query: [], body: [] },
    },
    getSharedStorageBillingOrg: {
      method: "get",
      path: "/orgs/{org}/settings/billing/shared-storage",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getSharedStorageBillingUser: {
      method: "get",
      path: "/users/{username}/settings/billing/shared-storage",
      parameters: { path: ["username"], query: [], body: [] },
    },
  },
  checks: {
    create: {
      method: "post",
      path: "/repos/{owner}/{repo}/check-runs",
      parameters: { path: ["owner", "repo"], query: [], body: ["status", "*"] },
    },
    createSuite: {
      method: "post",
      path: "/repos/{owner}/{repo}/check-suites",
      parameters: { path: ["owner", "repo"], query: [], body: ["head_sha"] },
    },
    get: {
      method: "get",
      path: "/repos/{owner}/{repo}/check-runs/{check_run_id}",
      parameters: {
        path: ["owner", "repo", "check_run_id"],
        query: [],
        body: [],
      },
    },
    getSuite: {
      method: "get",
      path: "/repos/{owner}/{repo}/check-suites/{check_suite_id}",
      parameters: {
        path: ["owner", "repo", "check_suite_id"],
        query: [],
        body: [],
      },
    },
    listAnnotations: {
      method: "get",
      path: "/repos/{owner}/{repo}/check-runs/{check_run_id}/annotations",
      parameters: {
        path: ["owner", "repo", "check_run_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listForRef: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{ref}/check-runs",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: ["check_name", "status", "filter", "per_page", "page", "app_id"],
        body: [],
      },
    },
    listForSuite: {
      method: "get",
      path: "/repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs",
      parameters: {
        path: ["owner", "repo", "check_suite_id"],
        query: ["check_name", "status", "filter", "per_page", "page"],
        body: [],
      },
    },
    listSuitesForRef: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{ref}/check-suites",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: ["app_id", "check_name", "per_page", "page"],
        body: [],
      },
    },
    rerequestRun: {
      method: "post",
      path: "/repos/{owner}/{repo}/check-runs/{check_run_id}/rerequest",
      parameters: {
        path: ["owner", "repo", "check_run_id"],
        query: [],
        body: [],
      },
    },
    rerequestSuite: {
      method: "post",
      path: "/repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest",
      parameters: {
        path: ["owner", "repo", "check_suite_id"],
        query: [],
        body: [],
      },
    },
    setSuitesPreferences: {
      method: "patch",
      path: "/repos/{owner}/{repo}/check-suites/preferences",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "auto_trigger_checks",
          "auto_trigger_checks[].app_id",
          "auto_trigger_checks[].setting",
        ],
      },
    },
    update: {
      method: "patch",
      path: "/repos/{owner}/{repo}/check-runs/{check_run_id}",
      parameters: {
        path: ["owner", "repo", "check_run_id"],
        query: [],
        body: [
          "name",
          "details_url",
          "external_id",
          "started_at",
          "status",
          "conclusion",
          "completed_at",
          "output",
          "output.title",
          "output.summary",
          "output.text",
          "output.annotations",
          "output.annotations[].path",
          "output.annotations[].start_line",
          "output.annotations[].end_line",
          "output.annotations[].start_column",
          "output.annotations[].end_column",
          "output.annotations[].annotation_level",
          "output.annotations[].message",
          "output.annotations[].title",
          "output.annotations[].raw_details",
          "output.images",
          "output.images[].alt",
          "output.images[].image_url",
          "output.images[].caption",
          "actions",
          "actions[].label",
          "actions[].description",
          "actions[].identifier",
        ],
      },
    },
  },
  codeScanning: {
    deleteAnalysis: {
      method: "delete",
      path: "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
      parameters: {
        path: ["owner", "repo", "analysis_id"],
        query: ["confirm_delete"],
        body: [],
      },
    },
    getAlert: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number", "alert_id"],
        query: [],
        body: [],
      },
    },
    getAnalysis: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}",
      parameters: {
        path: ["owner", "repo", "analysis_id"],
        query: [],
        body: [],
      },
    },
    getCodeqlDatabase: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/codeql/databases/{language}",
      parameters: { path: ["owner", "repo", "language"], query: [], body: [] },
    },
    getSarif: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}",
      parameters: { path: ["owner", "repo", "sarif_id"], query: [], body: [] },
    },
    listAlertInstances: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: ["page", "per_page", "ref"],
        body: [],
      },
    },
    listAlertsForEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/code-scanning/alerts",
      parameters: {
        path: ["enterprise"],
        query: [
          "tool_name",
          "tool_guid",
          "before",
          "after",
          "page",
          "per_page",
          "direction",
          "state",
          "sort",
        ],
        body: [],
      },
    },
    listAlertsForOrg: {
      method: "get",
      path: "/orgs/{org}/code-scanning/alerts",
      parameters: {
        path: ["org"],
        query: [
          "tool_name",
          "tool_guid",
          "before",
          "after",
          "page",
          "per_page",
          "direction",
          "state",
          "sort",
        ],
        body: [],
      },
    },
    listAlertsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/alerts",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "tool_name",
          "tool_guid",
          "page",
          "per_page",
          "ref",
          "direction",
          "sort",
          "state",
        ],
        body: [],
      },
    },
    listAlertsInstances: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: ["page", "per_page", "ref"],
        body: [],
      },
    },
    listCodeqlDatabases: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/codeql/databases",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    listRecentAnalyses: {
      method: "get",
      path: "/repos/{owner}/{repo}/code-scanning/analyses",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "tool_name",
          "tool_guid",
          "page",
          "per_page",
          "ref",
          "sarif_id",
          "direction",
          "sort",
        ],
        body: [],
      },
    },
    updateAlert: {
      method: "patch",
      path: "/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: [],
        body: ["state", "dismissed_reason", "dismissed_comment"],
      },
    },
    uploadSarif: {
      method: "post",
      path: "/repos/{owner}/{repo}/code-scanning/sarifs",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "commit_sha",
          "ref",
          "sarif",
          "checkout_uri",
          "started_at",
          "tool_name",
        ],
      },
    },
  },
  codesOfConduct: {
    getAllCodesOfConduct: {
      method: "get",
      path: "/codes_of_conduct",
      parameters: { path: [], query: [], body: [] },
    },
    getConductCode: {
      method: "get",
      path: "/codes_of_conduct/{key}",
      parameters: { path: ["key"], query: [], body: [] },
    },
  },
  codespaces: {
    addRepositoryForSecretForAuthenticatedUser: {
      method: "put",
      path: "/user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    addSelectedRepoToOrgSecret: {
      method: "put",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    codespaceMachinesForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/{codespace_name}/machines",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    createForAuthenticatedUser: {
      method: "post",
      path: "/user/codespaces",
      parameters: {
        path: [],
        query: [],
        body: [
          "repository_id",
          "ref",
          "location",
          "client_ip",
          "machine",
          "devcontainer_path",
          "multi_repo_permissions_opt_out",
          "working_directory",
          "idle_timeout_minutes",
          "display_name",
          "retention_period_minutes",
          "pull_request",
          "pull_request.pull_request_number",
          "pull_request.repository_id",
        ],
      },
    },
    createOrUpdateOrgSecret: {
      method: "put",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: [
          "encrypted_value",
          "key_id",
          "visibility",
          "selected_repository_ids",
        ],
      },
    },
    createOrUpdateRepoSecret: {
      method: "put",
      path: "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: ["encrypted_value", "key_id"],
      },
    },
    createOrUpdateSecretForAuthenticatedUser: {
      method: "put",
      path: "/user/codespaces/secrets/{secret_name}",
      parameters: {
        path: ["secret_name"],
        query: [],
        body: ["encrypted_value", "key_id", "selected_repository_ids"],
      },
    },
    createWithPrForAuthenticatedUser: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/codespaces",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [
          "location",
          "client_ip",
          "machine",
          "devcontainer_path",
          "multi_repo_permissions_opt_out",
          "working_directory",
          "idle_timeout_minutes",
          "display_name",
          "retention_period_minutes",
        ],
      },
    },
    createWithRepoForAuthenticatedUser: {
      method: "post",
      path: "/repos/{owner}/{repo}/codespaces",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "ref",
          "location",
          "client_ip",
          "machine",
          "devcontainer_path",
          "multi_repo_permissions_opt_out",
          "working_directory",
          "idle_timeout_minutes",
          "display_name",
          "retention_period_minutes",
        ],
      },
    },
    deleteForAuthenticatedUser: {
      method: "delete",
      path: "/user/codespaces/{codespace_name}",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    deleteFromOrganization: {
      method: "delete",
      path: "/orgs/{org}/members/{username}/codespaces/{codespace_name}",
      parameters: {
        path: ["org", "username", "codespace_name"],
        query: [],
        body: [],
      },
    },
    deleteOrgSecret: {
      method: "delete",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    deleteRepoSecret: {
      method: "delete",
      path: "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    deleteSecretForAuthenticatedUser: {
      method: "delete",
      path: "/user/codespaces/secrets/{secret_name}",
      parameters: { path: ["secret_name"], query: [], body: [] },
    },
    exportForAuthenticatedUser: {
      method: "post",
      path: "/user/codespaces/{codespace_name}/exports",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    getExportDetailsForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/{codespace_name}/exports/{export_id}",
      parameters: {
        path: ["codespace_name", "export_id"],
        query: [],
        body: [],
      },
    },
    getForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/{codespace_name}",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    getOrgPublicKey: {
      method: "get",
      path: "/organizations/{org}/codespaces/secrets/public-key",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getOrgSecret: {
      method: "get",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    getPublicKeyForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/secrets/public-key",
      parameters: { path: [], query: [], body: [] },
    },
    getRepoPublicKey: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/secrets/public-key",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getRepoSecret: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    getSecretForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/secrets/{secret_name}",
      parameters: { path: ["secret_name"], query: [], body: [] },
    },
    listDevcontainersInRepositoryForAuthenticatedUser: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/devcontainers",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces",
      parameters: {
        path: [],
        query: ["per_page", "page", "repository_id"],
        body: [],
      },
    },
    listInOrganization: {
      method: "get",
      path: "/orgs/{org}/codespaces",
      parameters: {
        path: ["org", "org_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listInRepositoryForAuthenticatedUser: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listOrgSecrets: {
      method: "get",
      path: "/organizations/{org}/codespaces/secrets",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listRepoSecrets: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/secrets",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listRepositoriesForSecretForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/secrets/{secret_name}/repositories",
      parameters: { path: ["secret_name"], query: [], body: [] },
    },
    listSecretsForAuthenticatedUser: {
      method: "get",
      path: "/user/codespaces/secrets",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listSelectedReposForOrgSecret: {
      method: "get",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    preFlightWithRepoForAuthenticatedUser: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/new",
      parameters: {
        path: ["owner", "repo"],
        query: ["ref", "client_ip"],
        body: [],
      },
    },
    removeRepositoryForSecretForAuthenticatedUser: {
      method: "delete",
      path: "/user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    removeSelectedRepoFromOrgSecret: {
      method: "delete",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    repoMachinesForAuthenticatedUser: {
      method: "get",
      path: "/repos/{owner}/{repo}/codespaces/machines",
      parameters: {
        path: ["owner", "repo"],
        query: ["location", "client_ip"],
        body: [],
      },
    },
    setRepositoriesForSecretForAuthenticatedUser: {
      method: "put",
      path: "/user/codespaces/secrets/{secret_name}/repositories",
      parameters: {
        path: ["secret_name"],
        query: [],
        body: ["selected_repository_ids"],
      },
    },
    setSelectedReposForOrgSecret: {
      method: "put",
      path: "/organizations/{org}/codespaces/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: ["selected_repository_ids"],
      },
    },
    startForAuthenticatedUser: {
      method: "post",
      path: "/user/codespaces/{codespace_name}/start",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    stopForAuthenticatedUser: {
      method: "post",
      path: "/user/codespaces/{codespace_name}/stop",
      parameters: { path: ["codespace_name"], query: [], body: [] },
    },
    stopInOrganization: {
      method: "post",
      path: "/orgs/{org}/members/{username}/codespaces/{codespace_name}/stop",
      parameters: {
        path: ["org", "username", "codespace_name"],
        query: [],
        body: [],
      },
    },
    updateForAuthenticatedUser: {
      method: "patch",
      path: "/user/codespaces/{codespace_name}",
      parameters: {
        path: ["codespace_name"],
        query: [],
        body: ["machine", "display_name", "recent_folders"],
      },
    },
  },
  dependabot: {
    addSelectedRepoToOrgSecret: {
      method: "put",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    createOrUpdateOrgSecret: {
      method: "put",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: [
          "encrypted_value",
          "key_id",
          "visibility",
          "selected_repository_ids",
        ],
      },
    },
    createOrUpdateRepoSecret: {
      method: "put",
      path: "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: ["encrypted_value", "key_id"],
      },
    },
    deleteOrgSecret: {
      method: "delete",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    deleteRepoSecret: {
      method: "delete",
      path: "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    getAlert: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: [],
        body: [],
      },
    },
    getOrgPublicKey: {
      method: "get",
      path: "/orgs/{org}/dependabot/secrets/public-key",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getOrgSecret: {
      method: "get",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}",
      parameters: { path: ["org", "secret_name"], query: [], body: [] },
    },
    getRepoPublicKey: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependabot/secrets/public-key",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getRepoSecret: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependabot/secrets/{secret_name}",
      parameters: {
        path: ["owner", "repo", "secret_name"],
        query: [],
        body: [],
      },
    },
    listAlertsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependabot/alerts",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "state",
          "severity",
          "ecosystem",
          "package",
          "manifest",
          "scope",
          "sort",
          "direction",
          "page",
          "per_page",
        ],
        body: [],
      },
    },
    listOrgSecrets: {
      method: "get",
      path: "/orgs/{org}/dependabot/secrets",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listRepoSecrets: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependabot/secrets",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listSelectedReposForOrgSecret: {
      method: "get",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    removeSelectedRepoFromOrgSecret: {
      method: "delete",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}",
      parameters: {
        path: ["org", "secret_name", "repository_id"],
        query: [],
        body: [],
      },
    },
    setSelectedReposForOrgSecret: {
      method: "put",
      path: "/orgs/{org}/dependabot/secrets/{secret_name}/repositories",
      parameters: {
        path: ["org", "secret_name"],
        query: [],
        body: ["selected_repository_ids"],
      },
    },
    updateAlert: {
      method: "patch",
      path: "/repos/{owner}/{repo}/dependabot/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: [],
        body: ["state", "dismissed_reason", "dismissed_comment"],
      },
    },
  },
  dependencyGraph: {
    createRepositorySnapshot: {
      method: "post",
      path: "/repos/{owner}/{repo}/dependency-graph/snapshots",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "version",
          "job",
          "job.id",
          "job.correlator",
          "job.html_url",
          "sha",
          "ref",
          "detector",
          "detector.name",
          "detector.version",
          "detector.url",
          "metadata",
          "metadata.*",
          "manifests",
          "manifests.*",
          "manifests.*.name",
          "manifests.*.file",
          "manifests.*.file.source_location",
          "manifests.*.metadata",
          "manifests.*.metadata.*",
          "manifests.*.resolved",
          "manifests.*.resolved.*",
          "manifests.*.resolved.*.package_url",
          "manifests.*.resolved.*.metadata",
          "manifests.*.resolved.*.metadata.*",
          "manifests.*.resolved.*.relationship",
          "manifests.*.resolved.*.scope",
          "manifests.*.resolved.*.dependencies",
          "scanned",
        ],
      },
    },
    diffRange: {
      method: "get",
      path: "/repos/{owner}/{repo}/dependency-graph/compare/{basehead}",
      parameters: {
        path: ["owner", "repo", "basehead"],
        query: ["name"],
        body: [],
      },
    },
  },
  emojis: {
    get: {
      method: "get",
      path: "/emojis",
      parameters: { path: [], query: [], body: [] },
    },
  },
  enterpriseAdmin: {
    addCustomLabelsToSelfHostedRunnerForEnterprise: {
      method: "post",
      path: "/enterprises/{enterprise}/actions/runners/{runner_id}/labels",
      parameters: {
        path: ["enterprise", "runner_id"],
        query: [],
        body: ["labels"],
      },
    },
    disableSelectedOrganizationGithubActionsEnterprise: {
      method: "delete",
      path: "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
      parameters: { path: ["enterprise", "org_id"], query: [], body: [] },
    },
    enableSelectedOrganizationGithubActionsEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}",
      parameters: { path: ["enterprise", "org_id"], query: [], body: [] },
    },
    getAllowedActionsEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/permissions/selected-actions",
      parameters: { path: ["enterprise"], query: [], body: [] },
    },
    getGithubActionsPermissionsEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/permissions",
      parameters: { path: ["enterprise"], query: [], body: [] },
    },
    getServerStatistics: {
      method: "get",
      path: "/enterprise-installation/{enterprise_or_org}/server-statistics",
      parameters: {
        path: ["enterprise_or_org"],
        query: ["date_start", "date_end"],
        body: [],
      },
    },
    listLabelsForSelfHostedRunnerForEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/runners/{runner_id}/labels",
      parameters: { path: ["enterprise", "runner_id"], query: [], body: [] },
    },
    listSelectedOrganizationsEnabledGithubActionsEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/actions/permissions/organizations",
      parameters: {
        path: ["enterprise"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: {
      method: "delete",
      path: "/enterprises/{enterprise}/actions/runners/{runner_id}/labels",
      parameters: { path: ["enterprise", "runner_id"], query: [], body: [] },
    },
    removeCustomLabelFromSelfHostedRunnerForEnterprise: {
      method: "delete",
      path: "/enterprises/{enterprise}/actions/runners/{runner_id}/labels/{name}",
      parameters: {
        path: ["enterprise", "runner_id", "name"],
        query: [],
        body: [],
      },
    },
    setAllowedActionsEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/permissions/selected-actions",
      parameters: {
        path: ["enterprise"],
        query: [],
        body: ["github_owned_allowed", "verified_allowed", "patterns_allowed"],
      },
    },
    setCustomLabelsForSelfHostedRunnerForEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/runners/{runner_id}/labels",
      parameters: {
        path: ["enterprise", "runner_id"],
        query: [],
        body: ["labels"],
      },
    },
    setGithubActionsPermissionsEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/permissions",
      parameters: {
        path: ["enterprise"],
        query: [],
        body: ["enabled_organizations", "allowed_actions"],
      },
    },
    setSelectedOrganizationsEnabledGithubActionsEnterprise: {
      method: "put",
      path: "/enterprises/{enterprise}/actions/permissions/organizations",
      parameters: {
        path: ["enterprise"],
        query: [],
        body: ["selected_organization_ids"],
      },
    },
  },
  gists: {
    checkIsStarred: {
      method: "get",
      path: "/gists/{gist_id}/star",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    create: {
      method: "post",
      path: "/gists",
      parameters: {
        path: [],
        query: [],
        body: ["description", "files", "files.*", "files.*.content", "public"],
      },
    },
    createComment: {
      method: "post",
      path: "/gists/{gist_id}/comments",
      parameters: { path: ["gist_id"], query: [], body: ["body"] },
    },
    delete: {
      method: "delete",
      path: "/gists/{gist_id}",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    deleteComment: {
      method: "delete",
      path: "/gists/{gist_id}/comments/{comment_id}",
      parameters: { path: ["gist_id", "comment_id"], query: [], body: [] },
    },
    fork: {
      method: "post",
      path: "/gists/{gist_id}/forks",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    get: {
      method: "get",
      path: "/gists/{gist_id}",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    getComment: {
      method: "get",
      path: "/gists/{gist_id}/comments/{comment_id}",
      parameters: { path: ["gist_id", "comment_id"], query: [], body: [] },
    },
    getRevision: {
      method: "get",
      path: "/gists/{gist_id}/{sha}",
      parameters: { path: ["gist_id", "sha"], query: [], body: [] },
    },
    list: {
      method: "get",
      path: "/gists",
      parameters: { path: [], query: ["since", "per_page", "page"], body: [] },
    },
    listComments: {
      method: "get",
      path: "/gists/{gist_id}/comments",
      parameters: { path: ["gist_id"], query: ["per_page", "page"], body: [] },
    },
    listCommits: {
      method: "get",
      path: "/gists/{gist_id}/commits",
      parameters: { path: ["gist_id"], query: ["per_page", "page"], body: [] },
    },
    listForUser: {
      method: "get",
      path: "/users/{username}/gists",
      parameters: {
        path: ["username"],
        query: ["since", "per_page", "page"],
        body: [],
      },
    },
    listForks: {
      method: "get",
      path: "/gists/{gist_id}/forks",
      parameters: { path: ["gist_id"], query: ["per_page", "page"], body: [] },
    },
    listPublic: {
      method: "get",
      path: "/gists/public",
      parameters: { path: [], query: ["since", "per_page", "page"], body: [] },
    },
    listStarred: {
      method: "get",
      path: "/gists/starred",
      parameters: { path: [], query: ["since", "per_page", "page"], body: [] },
    },
    star: {
      method: "put",
      path: "/gists/{gist_id}/star",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    unstar: {
      method: "delete",
      path: "/gists/{gist_id}/star",
      parameters: { path: ["gist_id"], query: [], body: [] },
    },
    update: {
      method: "patch",
      path: "/gists/{gist_id}",
      parameters: {
        path: ["gist_id"],
        query: [],
        body: [
          "description",
          "files",
          "files.*",
          "files.*.content",
          "files.*.filename",
        ],
      },
    },
    updateComment: {
      method: "patch",
      path: "/gists/{gist_id}/comments/{comment_id}",
      parameters: {
        path: ["gist_id", "comment_id"],
        query: [],
        body: ["body"],
      },
    },
  },
  git: {
    createBlob: {
      method: "post",
      path: "/repos/{owner}/{repo}/git/blobs",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["content", "encoding"],
      },
    },
    createCommit: {
      method: "post",
      path: "/repos/{owner}/{repo}/git/commits",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "message",
          "tree",
          "parents",
          "author",
          "author.name",
          "author.email",
          "author.date",
          "committer",
          "committer.name",
          "committer.email",
          "committer.date",
          "signature",
        ],
      },
    },
    createRef: {
      method: "post",
      path: "/repos/{owner}/{repo}/git/refs",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["ref", "sha", "key"],
      },
    },
    createTag: {
      method: "post",
      path: "/repos/{owner}/{repo}/git/tags",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "tag",
          "message",
          "object",
          "type",
          "tagger",
          "tagger.name",
          "tagger.email",
          "tagger.date",
        ],
      },
    },
    createTree: {
      method: "post",
      path: "/repos/{owner}/{repo}/git/trees",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "tree",
          "tree[].path",
          "tree[].mode",
          "tree[].type",
          "tree[].sha",
          "tree[].content",
          "base_tree",
        ],
      },
    },
    deleteRef: {
      method: "delete",
      path: "/repos/{owner}/{repo}/git/refs/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    getBlob: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/blobs/{file_sha}",
      parameters: { path: ["owner", "repo", "file_sha"], query: [], body: [] },
    },
    getCommit: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/commits/{commit_sha}",
      parameters: {
        path: ["owner", "repo", "commit_sha"],
        query: [],
        body: [],
      },
    },
    getRef: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/ref/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    getTag: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/tags/{tag_sha}",
      parameters: { path: ["owner", "repo", "tag_sha"], query: [], body: [] },
    },
    getTree: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/trees/{tree_sha}",
      parameters: {
        path: ["owner", "repo", "tree_sha"],
        query: ["recursive"],
        body: [],
      },
    },
    listMatchingRefs: {
      method: "get",
      path: "/repos/{owner}/{repo}/git/matching-refs/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    updateRef: {
      method: "patch",
      path: "/repos/{owner}/{repo}/git/refs/{ref}",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: [],
        body: ["sha", "force"],
      },
    },
  },
  gitignore: {
    getAllTemplates: {
      method: "get",
      path: "/gitignore/templates",
      parameters: { path: [], query: [], body: [] },
    },
    getTemplate: {
      method: "get",
      path: "/gitignore/templates/{name}",
      parameters: { path: ["name"], query: [], body: [] },
    },
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: {
      method: "get",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: [] },
    },
    getRestrictionsForOrg: {
      method: "get",
      path: "/orgs/{org}/interaction-limits",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getRestrictionsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/interaction-limits",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getRestrictionsForYourPublicRepos: {
      method: "get",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: [] },
    },
    removeRestrictionsForAuthenticatedUser: {
      method: "delete",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: [] },
    },
    removeRestrictionsForOrg: {
      method: "delete",
      path: "/orgs/{org}/interaction-limits",
      parameters: { path: ["org"], query: [], body: [] },
    },
    removeRestrictionsForRepo: {
      method: "delete",
      path: "/repos/{owner}/{repo}/interaction-limits",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    removeRestrictionsForYourPublicRepos: {
      method: "delete",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: [] },
    },
    setRestrictionsForAuthenticatedUser: {
      method: "put",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: ["limit", "expiry"] },
    },
    setRestrictionsForOrg: {
      method: "put",
      path: "/orgs/{org}/interaction-limits",
      parameters: { path: ["org"], query: [], body: ["limit", "expiry"] },
    },
    setRestrictionsForRepo: {
      method: "put",
      path: "/repos/{owner}/{repo}/interaction-limits",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["limit", "expiry"],
      },
    },
    setRestrictionsForYourPublicRepos: {
      method: "put",
      path: "/user/interaction-limits",
      parameters: { path: [], query: [], body: ["limit", "expiry"] },
    },
  },
  issues: {
    addAssignees: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/assignees",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["assignees"],
      },
    },
    addLabels: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/labels",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["labels", "labels[].name"],
      },
    },
    checkUserCanBeAssigned: {
      method: "get",
      path: "/repos/{owner}/{repo}/assignees/{assignee}",
      parameters: { path: ["owner", "repo", "assignee"], query: [], body: [] },
    },
    create: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["title", "body", "assignee", "milestone", "labels", "assignees"],
      },
    },
    createComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/comments",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["body"],
      },
    },
    createLabel: {
      method: "post",
      path: "/repos/{owner}/{repo}/labels",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["name", "color", "description"],
      },
    },
    createMilestone: {
      method: "post",
      path: "/repos/{owner}/{repo}/milestones",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["title", "state", "description", "due_on"],
      },
    },
    deleteComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    deleteLabel: {
      method: "delete",
      path: "/repos/{owner}/{repo}/labels/{name}",
      parameters: { path: ["owner", "repo", "name"], query: [], body: [] },
    },
    deleteMilestone: {
      method: "delete",
      path: "/repos/{owner}/{repo}/milestones/{milestone_number}",
      parameters: {
        path: ["owner", "repo", "milestone_number"],
        query: [],
        body: [],
      },
    },
    get: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: [],
      },
    },
    getComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    getEvent: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/events/{event_id}",
      parameters: { path: ["owner", "repo", "event_id"], query: [], body: [] },
    },
    getLabel: {
      method: "get",
      path: "/repos/{owner}/{repo}/labels/{name}",
      parameters: { path: ["owner", "repo", "name"], query: [], body: [] },
    },
    getMilestone: {
      method: "get",
      path: "/repos/{owner}/{repo}/milestones/{milestone_number}",
      parameters: {
        path: ["owner", "repo", "milestone_number"],
        query: [],
        body: [],
      },
    },
    list: {
      method: "get",
      path: "/issues",
      parameters: {
        path: [],
        query: [
          "filter",
          "state",
          "labels",
          "sort",
          "direction",
          "since",
          "collab",
          "orgs",
          "owned",
          "pulls",
          "per_page",
          "page",
        ],
        body: [],
      },
    },
    listAssignees: {
      method: "get",
      path: "/repos/{owner}/{repo}/assignees",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listComments: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/comments",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: ["since", "per_page", "page"],
        body: [],
      },
    },
    listCommentsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/comments",
      parameters: {
        path: ["owner", "repo"],
        query: ["sort", "direction", "since", "per_page", "page"],
        body: [],
      },
    },
    listEvents: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/events",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listEventsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/events",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listEventsForTimeline: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/timeline",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/issues",
      parameters: {
        path: [],
        query: [
          "filter",
          "state",
          "labels",
          "sort",
          "direction",
          "since",
          "per_page",
          "page",
        ],
        body: [],
      },
    },
    listForOrg: {
      method: "get",
      path: "/orgs/{org}/issues",
      parameters: {
        path: ["org"],
        query: [
          "filter",
          "state",
          "labels",
          "sort",
          "direction",
          "since",
          "per_page",
          "page",
        ],
        body: [],
      },
    },
    listForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "milestone",
          "state",
          "assignee",
          "creator",
          "mentioned",
          "labels",
          "sort",
          "direction",
          "since",
          "per_page",
          "page",
        ],
        body: [],
      },
    },
    listLabelsForMilestone: {
      method: "get",
      path: "/repos/{owner}/{repo}/milestones/{milestone_number}/labels",
      parameters: {
        path: ["owner", "repo", "milestone_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listLabelsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/labels",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listLabelsOnIssue: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/labels",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listMilestones: {
      method: "get",
      path: "/repos/{owner}/{repo}/milestones",
      parameters: {
        path: ["owner", "repo"],
        query: ["state", "sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    lock: {
      method: "put",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/lock",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["lock_reason"],
      },
    },
    removeAllLabels: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/labels",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: [],
      },
    },
    removeAssignees: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/assignees",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["assignees"],
      },
    },
    removeLabel: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/labels/{name}",
      parameters: {
        path: ["owner", "repo", "issue_number", "name"],
        query: [],
        body: [],
      },
    },
    setLabels: {
      method: "put",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/labels",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["labels", "labels[].name"],
      },
    },
    unlock: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/lock",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: [],
      },
    },
    update: {
      method: "patch",
      path: "/repos/{owner}/{repo}/issues/{issue_number}",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: [
          "title",
          "body",
          "assignee",
          "state",
          "state_reason",
          "milestone",
          "labels",
          "assignees",
        ],
      },
    },
    updateComment: {
      method: "patch",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["body"],
      },
    },
    updateLabel: {
      method: "patch",
      path: "/repos/{owner}/{repo}/labels/{name}",
      parameters: {
        path: ["owner", "repo", "name"],
        query: [],
        body: ["new_name", "color", "description"],
      },
    },
    updateMilestone: {
      method: "patch",
      path: "/repos/{owner}/{repo}/milestones/{milestone_number}",
      parameters: {
        path: ["owner", "repo", "milestone_number"],
        query: [],
        body: ["title", "state", "description", "due_on"],
      },
    },
  },
  licenses: {
    get: {
      method: "get",
      path: "/licenses/{license}",
      parameters: { path: ["license"], query: [], body: [] },
    },
    getAllCommonlyUsed: {
      method: "get",
      path: "/licenses",
      parameters: {
        path: [],
        query: ["featured", "per_page", "page"],
        body: [],
      },
    },
    getForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/license",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
  },
  markdown: {
    render: {
      method: "post",
      path: "/markdown",
      parameters: { path: [], query: [], body: ["text", "mode", "context"] },
    },
    renderRaw: {
      method: "post",
      path: "/markdown/raw",
      parameters: { path: [], query: [], body: ["data"] },
    },
  },
  meta: {
    get: {
      method: "get",
      path: "/meta",
      parameters: { path: [], query: [], body: [] },
    },
    getOctocat: {
      method: "get",
      path: "/octocat",
      parameters: { path: [], query: ["s"], body: [] },
    },
    getZen: {
      method: "get",
      path: "/zen",
      parameters: { path: [], query: [], body: [] },
    },
    root: {
      method: "get",
      path: "/",
      parameters: { path: [], query: [], body: [] },
    },
  },
  migrations: {
    cancelImport: {
      method: "delete",
      path: "/repos/{owner}/{repo}/import",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    deleteArchiveForAuthenticatedUser: {
      method: "delete",
      path: "/user/migrations/{migration_id}/archive",
      parameters: { path: ["migration_id"], query: [], body: [] },
    },
    deleteArchiveForOrg: {
      method: "delete",
      path: "/orgs/{org}/migrations/{migration_id}/archive",
      parameters: { path: ["org", "migration_id"], query: [], body: [] },
    },
    downloadArchiveForOrg: {
      method: "get",
      path: "/orgs/{org}/migrations/{migration_id}/archive",
      parameters: { path: ["org", "migration_id"], query: [], body: [] },
    },
    getArchiveForAuthenticatedUser: {
      method: "get",
      path: "/user/migrations/{migration_id}/archive",
      parameters: { path: ["migration_id"], query: [], body: [] },
    },
    getCommitAuthors: {
      method: "get",
      path: "/repos/{owner}/{repo}/import/authors",
      parameters: { path: ["owner", "repo"], query: ["since"], body: [] },
    },
    getImportStatus: {
      method: "get",
      path: "/repos/{owner}/{repo}/import",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getLargeFiles: {
      method: "get",
      path: "/repos/{owner}/{repo}/import/large_files",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getStatusForAuthenticatedUser: {
      method: "get",
      path: "/user/migrations/{migration_id}",
      parameters: { path: ["migration_id"], query: ["exclude"], body: [] },
    },
    getStatusForOrg: {
      method: "get",
      path: "/orgs/{org}/migrations/{migration_id}",
      parameters: {
        path: ["org", "migration_id"],
        query: ["exclude"],
        body: [],
      },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/migrations",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listForOrg: {
      method: "get",
      path: "/orgs/{org}/migrations",
      parameters: {
        path: ["org"],
        query: ["per_page", "page", "exclude"],
        body: [],
      },
    },
    listReposForAuthenticatedUser: {
      method: "get",
      path: "/user/migrations/{migration_id}/repositories",
      parameters: {
        path: ["migration_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listReposForOrg: {
      method: "get",
      path: "/orgs/{org}/migrations/{migration_id}/repositories",
      parameters: {
        path: ["org", "migration_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listReposForUser: {
      method: "get",
      path: "/user/migrations/{migration_id}/repositories",
      parameters: {
        path: ["migration_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    mapCommitAuthor: {
      method: "patch",
      path: "/repos/{owner}/{repo}/import/authors/{author_id}",
      parameters: {
        path: ["owner", "repo", "author_id"],
        query: [],
        body: ["email", "name"],
      },
    },
    setLfsPreference: {
      method: "patch",
      path: "/repos/{owner}/{repo}/import/lfs",
      parameters: { path: ["owner", "repo"], query: [], body: ["use_lfs"] },
    },
    startForAuthenticatedUser: {
      method: "post",
      path: "/user/migrations",
      parameters: {
        path: [],
        query: [],
        body: [
          "lock_repositories",
          "exclude_metadata",
          "exclude_git_data",
          "exclude_attachments",
          "exclude_releases",
          "exclude_owner_projects",
          "org_metadata_only",
          "exclude",
          "repositories",
        ],
      },
    },
    startForOrg: {
      method: "post",
      path: "/orgs/{org}/migrations",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "repositories",
          "lock_repositories",
          "exclude_metadata",
          "exclude_git_data",
          "exclude_attachments",
          "exclude_releases",
          "exclude_owner_projects",
          "org_metadata_only",
          "exclude",
        ],
      },
    },
    startImport: {
      method: "put",
      path: "/repos/{owner}/{repo}/import",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "vcs_url",
          "vcs",
          "vcs_username",
          "vcs_password",
          "tfvc_project",
        ],
      },
    },
    unlockRepoForAuthenticatedUser: {
      method: "delete",
      path: "/user/migrations/{migration_id}/repos/{repo_name}/lock",
      parameters: { path: ["migration_id", "repo_name"], query: [], body: [] },
    },
    unlockRepoForOrg: {
      method: "delete",
      path: "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock",
      parameters: {
        path: ["org", "migration_id", "repo_name"],
        query: [],
        body: [],
      },
    },
    updateImport: {
      method: "patch",
      path: "/repos/{owner}/{repo}/import",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["vcs_username", "vcs_password", "vcs", "tfvc_project"],
      },
    },
  },
  orgs: {
    addSecurityManagerTeam: {
      method: "put",
      path: "/orgs/{org}/security-managers/teams/{team_slug}",
      parameters: { path: ["org", "team_slug"], query: [], body: [] },
    },
    blockUser: {
      method: "put",
      path: "/orgs/{org}/blocks/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    cancelInvitation: {
      method: "delete",
      path: "/orgs/{org}/invitations/{invitation_id}",
      parameters: { path: ["org", "invitation_id"], query: [], body: [] },
    },
    checkBlockedUser: {
      method: "get",
      path: "/orgs/{org}/blocks/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    checkMembershipForUser: {
      method: "get",
      path: "/orgs/{org}/members/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    checkPublicMembershipForUser: {
      method: "get",
      path: "/orgs/{org}/public_members/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    convertMemberToOutsideCollaborator: {
      method: "put",
      path: "/orgs/{org}/outside_collaborators/{username}",
      parameters: { path: ["org", "username"], query: [], body: ["async"] },
    },
    createCustomRole: {
      method: "post",
      path: "/orgs/{org}/custom_roles",
      parameters: {
        path: ["org"],
        query: [],
        body: ["name", "description", "base_role", "permissions"],
      },
    },
    createInvitation: {
      method: "post",
      path: "/orgs/{org}/invitations",
      parameters: {
        path: ["org"],
        query: [],
        body: ["invitee_id", "email", "role", "team_ids"],
      },
    },
    createWebhook: {
      method: "post",
      path: "/orgs/{org}/hooks",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "name",
          "config",
          "config.url",
          "config.content_type",
          "config.secret",
          "config.insecure_ssl",
          "config.username",
          "config.password",
          "events",
          "active",
        ],
      },
    },
    deleteCustomRole: {
      method: "delete",
      path: "/orgs/{org}/custom_roles/{role_id}",
      parameters: { path: ["org", "role_id"], query: [], body: [] },
    },
    deleteWebhook: {
      method: "delete",
      path: "/orgs/{org}/hooks/{hook_id}",
      parameters: { path: ["org", "hook_id"], query: [], body: [] },
    },
    enableOrDisableSecurityProductOnAllOrgRepos: {
      method: "post",
      path: "/orgs/{org}/{security_product}/{enablement}",
      parameters: {
        path: ["org", "security_product", "enablement"],
        query: [],
        body: [],
      },
    },
    get: {
      method: "get",
      path: "/orgs/{org}",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getMembershipForAuthenticatedUser: {
      method: "get",
      path: "/user/memberships/orgs/{org}",
      parameters: { path: ["org"], query: [], body: [] },
    },
    getMembershipForUser: {
      method: "get",
      path: "/orgs/{org}/memberships/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    getWebhook: {
      method: "get",
      path: "/orgs/{org}/hooks/{hook_id}",
      parameters: { path: ["org", "hook_id"], query: [], body: [] },
    },
    getWebhookConfigForOrg: {
      method: "get",
      path: "/orgs/{org}/hooks/{hook_id}/config",
      parameters: { path: ["org", "hook_id"], query: [], body: [] },
    },
    getWebhookDelivery: {
      method: "get",
      path: "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}",
      parameters: {
        path: ["org", "hook_id", "delivery_id"],
        query: [],
        body: [],
      },
    },
    list: {
      method: "get",
      path: "/organizations",
      parameters: { path: [], query: ["since", "per_page"], body: [] },
    },
    listAppInstallations: {
      method: "get",
      path: "/orgs/{org}/installations",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listBlockedUsers: {
      method: "get",
      path: "/orgs/{org}/blocks",
      parameters: { path: ["org"], query: [], body: [] },
    },
    listCustomRoles: {
      method: "get",
      path: "/organizations/{organization_id}/custom_roles",
      parameters: { path: ["organization_id"], query: [], body: [] },
    },
    listFailedInvitations: {
      method: "get",
      path: "/orgs/{org}/failed_invitations",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listFineGrainedPermissions: {
      method: "get",
      path: "/orgs/{org}/fine_grained_permissions",
      parameters: { path: ["org"], query: [], body: [] },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/orgs",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listForUser: {
      method: "get",
      path: "/users/{username}/orgs",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listInvitationTeams: {
      method: "get",
      path: "/orgs/{org}/invitations/{invitation_id}/teams",
      parameters: {
        path: ["org", "invitation_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listMembers: {
      method: "get",
      path: "/orgs/{org}/members",
      parameters: {
        path: ["org"],
        query: ["filter", "role", "per_page", "page"],
        body: [],
      },
    },
    listMembershipsForAuthenticatedUser: {
      method: "get",
      path: "/user/memberships/orgs",
      parameters: { path: [], query: ["state", "per_page", "page"], body: [] },
    },
    listOutsideCollaborators: {
      method: "get",
      path: "/orgs/{org}/outside_collaborators",
      parameters: {
        path: ["org"],
        query: ["filter", "per_page", "page"],
        body: [],
      },
    },
    listPendingInvitations: {
      method: "get",
      path: "/orgs/{org}/invitations",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listPublicMembers: {
      method: "get",
      path: "/orgs/{org}/public_members",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listSecurityManagerTeams: {
      method: "get",
      path: "/orgs/{org}/security-managers",
      parameters: { path: ["org"], query: [], body: [] },
    },
    listWebhookDeliveries: {
      method: "get",
      path: "/orgs/{org}/hooks/{hook_id}/deliveries",
      parameters: {
        path: ["org", "hook_id"],
        query: ["per_page", "cursor"],
        body: [],
      },
    },
    listWebhooks: {
      method: "get",
      path: "/orgs/{org}/hooks",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    pingWebhook: {
      method: "post",
      path: "/orgs/{org}/hooks/{hook_id}/pings",
      parameters: { path: ["org", "hook_id"], query: [], body: [] },
    },
    redeliverWebhookDelivery: {
      method: "post",
      path: "/orgs/{org}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
      parameters: {
        path: ["org", "hook_id", "delivery_id"],
        query: [],
        body: [],
      },
    },
    removeMember: {
      method: "delete",
      path: "/orgs/{org}/members/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    removeMembershipForUser: {
      method: "delete",
      path: "/orgs/{org}/memberships/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    removeOutsideCollaborator: {
      method: "delete",
      path: "/orgs/{org}/outside_collaborators/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    removePublicMembershipForAuthenticatedUser: {
      method: "delete",
      path: "/orgs/{org}/public_members/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    removeSecurityManagerTeam: {
      method: "delete",
      path: "/orgs/{org}/security-managers/teams/{team_slug}",
      parameters: { path: ["org", "team_slug"], query: [], body: [] },
    },
    setMembershipForUser: {
      method: "put",
      path: "/orgs/{org}/memberships/{username}",
      parameters: { path: ["org", "username"], query: [], body: ["role"] },
    },
    setPublicMembershipForAuthenticatedUser: {
      method: "put",
      path: "/orgs/{org}/public_members/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    unblockUser: {
      method: "delete",
      path: "/orgs/{org}/blocks/{username}",
      parameters: { path: ["org", "username"], query: [], body: [] },
    },
    update: {
      method: "patch",
      path: "/orgs/{org}",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "billing_email",
          "company",
          "email",
          "twitter_username",
          "location",
          "name",
          "description",
          "has_organization_projects",
          "has_repository_projects",
          "default_repository_permission",
          "members_can_create_repositories",
          "members_can_create_internal_repositories",
          "members_can_create_private_repositories",
          "members_can_create_public_repositories",
          "members_allowed_repository_creation_type",
          "members_can_create_pages",
          "members_can_create_public_pages",
          "members_can_create_private_pages",
          "members_can_fork_private_repositories",
          "web_commit_signoff_required",
          "blog",
          "advanced_security_enabled_for_new_repositories",
          "dependabot_alerts_enabled_for_new_repositories",
          "dependabot_security_updates_enabled_for_new_repositories",
          "dependency_graph_enabled_for_new_repositories",
          "secret_scanning_enabled_for_new_repositories",
          "secret_scanning_push_protection_enabled_for_new_repositories",
        ],
      },
    },
    updateCustomRole: {
      method: "patch",
      path: "/orgs/{org}/custom_roles/{role_id}",
      parameters: {
        path: ["org", "role_id"],
        query: [],
        body: ["name", "description", "base_role", "permissions"],
      },
    },
    updateMembershipForAuthenticatedUser: {
      method: "patch",
      path: "/user/memberships/orgs/{org}",
      parameters: { path: ["org"], query: [], body: ["state"] },
    },
    updateWebhook: {
      method: "patch",
      path: "/orgs/{org}/hooks/{hook_id}",
      parameters: {
        path: ["org", "hook_id"],
        query: [],
        body: [
          "config",
          "config.url",
          "config.content_type",
          "config.secret",
          "config.insecure_ssl",
          "events",
          "active",
          "name",
        ],
      },
    },
    updateWebhookConfigForOrg: {
      method: "patch",
      path: "/orgs/{org}/hooks/{hook_id}/config",
      parameters: {
        path: ["org", "hook_id"],
        query: [],
        body: ["url", "content_type", "secret", "insecure_ssl"],
      },
    },
  },
  packages: {
    deletePackageForAuthenticatedUser: {
      method: "delete",
      path: "/user/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name"],
        query: [],
        body: [],
      },
    },
    deletePackageForOrg: {
      method: "delete",
      path: "/orgs/{org}/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name", "org"],
        query: [],
        body: [],
      },
    },
    deletePackageForUser: {
      method: "delete",
      path: "/users/{username}/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name", "username"],
        query: [],
        body: [],
      },
    },
    deletePackageVersionForAuthenticatedUser: {
      method: "delete",
      path: "/user/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: ["package_type", "package_name", "package_version_id"],
        query: [],
        body: [],
      },
    },
    deletePackageVersionForOrg: {
      method: "delete",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: ["package_type", "package_name", "org", "package_version_id"],
        query: [],
        body: [],
      },
    },
    deletePackageVersionForUser: {
      method: "delete",
      path: "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: [
          "package_type",
          "package_name",
          "username",
          "package_version_id",
        ],
        query: [],
        body: [],
      },
    },
    getAllPackageVersionsForAPackageOwnedByAnOrg: {
      method: "get",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/versions",
      parameters: {
        path: ["package_type", "package_name", "org"],
        query: ["page", "per_page", "state"],
        body: [],
      },
    },
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: {
      method: "get",
      path: "/user/packages/{package_type}/{package_name}/versions",
      parameters: {
        path: ["package_type", "package_name"],
        query: ["page", "per_page", "state"],
        body: [],
      },
    },
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: {
      method: "get",
      path: "/user/packages/{package_type}/{package_name}/versions",
      parameters: {
        path: ["package_type", "package_name"],
        query: ["page", "per_page", "state"],
        body: [],
      },
    },
    getAllPackageVersionsForPackageOwnedByOrg: {
      method: "get",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/versions",
      parameters: {
        path: ["package_type", "package_name", "org"],
        query: ["page", "per_page", "state"],
        body: [],
      },
    },
    getAllPackageVersionsForPackageOwnedByUser: {
      method: "get",
      path: "/users/{username}/packages/{package_type}/{package_name}/versions",
      parameters: {
        path: ["package_type", "package_name", "username"],
        query: [],
        body: [],
      },
    },
    getPackageForAuthenticatedUser: {
      method: "get",
      path: "/user/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name"],
        query: [],
        body: [],
      },
    },
    getPackageForOrganization: {
      method: "get",
      path: "/orgs/{org}/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name", "org"],
        query: [],
        body: [],
      },
    },
    getPackageForUser: {
      method: "get",
      path: "/users/{username}/packages/{package_type}/{package_name}",
      parameters: {
        path: ["package_type", "package_name", "username"],
        query: [],
        body: [],
      },
    },
    getPackageVersionForAuthenticatedUser: {
      method: "get",
      path: "/user/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: ["package_type", "package_name", "package_version_id"],
        query: [],
        body: [],
      },
    },
    getPackageVersionForOrganization: {
      method: "get",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: ["package_type", "package_name", "org", "package_version_id"],
        query: [],
        body: [],
      },
    },
    getPackageVersionForUser: {
      method: "get",
      path: "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}",
      parameters: {
        path: [
          "package_type",
          "package_name",
          "package_version_id",
          "username",
        ],
        query: [],
        body: [],
      },
    },
    listPackagesForAuthenticatedUser: {
      method: "get",
      path: "/user/packages",
      parameters: { path: [], query: ["package_type", "visibility"], body: [] },
    },
    listPackagesForOrganization: {
      method: "get",
      path: "/orgs/{org}/packages",
      parameters: {
        path: ["org"],
        query: ["package_type", "visibility"],
        body: [],
      },
    },
    listPackagesForUser: {
      method: "get",
      path: "/users/{username}/packages",
      parameters: {
        path: ["username"],
        query: ["package_type", "visibility"],
        body: [],
      },
    },
    restorePackageForAuthenticatedUser: {
      method: "post",
      path: "/user/packages/{package_type}/{package_name}/restore",
      parameters: {
        path: ["package_type", "package_name"],
        query: ["token"],
        body: [],
      },
    },
    restorePackageForOrg: {
      method: "post",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/restore",
      parameters: {
        path: ["package_type", "package_name", "org"],
        query: ["token"],
        body: [],
      },
    },
    restorePackageForUser: {
      method: "post",
      path: "/users/{username}/packages/{package_type}/{package_name}/restore",
      parameters: {
        path: ["package_type", "package_name", "username"],
        query: ["token"],
        body: [],
      },
    },
    restorePackageVersionForAuthenticatedUser: {
      method: "post",
      path: "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      parameters: {
        path: ["package_type", "package_name", "package_version_id"],
        query: [],
        body: [],
      },
    },
    restorePackageVersionForOrg: {
      method: "post",
      path: "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      parameters: {
        path: ["package_type", "package_name", "org", "package_version_id"],
        query: [],
        body: [],
      },
    },
    restorePackageVersionForUser: {
      method: "post",
      path: "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore",
      parameters: {
        path: [
          "package_type",
          "package_name",
          "username",
          "package_version_id",
        ],
        query: [],
        body: [],
      },
    },
  },
  projects: {
    addCollaborator: {
      method: "put",
      path: "/projects/{project_id}/collaborators/{username}",
      parameters: {
        path: ["project_id", "username"],
        query: [],
        body: ["permission"],
      },
    },
    createCard: {
      method: "post",
      path: "/projects/columns/{column_id}/cards",
      parameters: {
        path: ["column_id"],
        query: [],
        body: ["note", "content_id", "content_type"],
      },
    },
    createColumn: {
      method: "post",
      path: "/projects/{project_id}/columns",
      parameters: { path: ["project_id"], query: [], body: ["name"] },
    },
    createForAuthenticatedUser: {
      method: "post",
      path: "/user/projects",
      parameters: { path: [], query: [], body: ["name", "body"] },
    },
    createForOrg: {
      method: "post",
      path: "/orgs/{org}/projects",
      parameters: { path: ["org"], query: [], body: ["name", "body"] },
    },
    createForRepo: {
      method: "post",
      path: "/repos/{owner}/{repo}/projects",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["name", "body"],
      },
    },
    delete: {
      method: "delete",
      path: "/projects/{project_id}",
      parameters: { path: ["project_id"], query: [], body: [] },
    },
    deleteCard: {
      method: "delete",
      path: "/projects/columns/cards/{card_id}",
      parameters: { path: ["card_id"], query: [], body: [] },
    },
    deleteColumn: {
      method: "delete",
      path: "/projects/columns/{column_id}",
      parameters: { path: ["column_id"], query: [], body: [] },
    },
    get: {
      method: "get",
      path: "/projects/{project_id}",
      parameters: { path: ["project_id"], query: [], body: [] },
    },
    getCard: {
      method: "get",
      path: "/projects/columns/cards/{card_id}",
      parameters: { path: ["card_id"], query: [], body: [] },
    },
    getColumn: {
      method: "get",
      path: "/projects/columns/{column_id}",
      parameters: { path: ["column_id"], query: [], body: [] },
    },
    getPermissionForUser: {
      method: "get",
      path: "/projects/{project_id}/collaborators/{username}/permission",
      parameters: { path: ["project_id", "username"], query: [], body: [] },
    },
    listCards: {
      method: "get",
      path: "/projects/columns/{column_id}/cards",
      parameters: {
        path: ["column_id"],
        query: ["archived_state", "per_page", "page"],
        body: [],
      },
    },
    listCollaborators: {
      method: "get",
      path: "/projects/{project_id}/collaborators",
      parameters: {
        path: ["project_id"],
        query: ["affiliation", "per_page", "page"],
        body: [],
      },
    },
    listColumns: {
      method: "get",
      path: "/projects/{project_id}/columns",
      parameters: {
        path: ["project_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listForOrg: {
      method: "get",
      path: "/orgs/{org}/projects",
      parameters: {
        path: ["org"],
        query: ["state", "per_page", "page"],
        body: [],
      },
    },
    listForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/projects",
      parameters: {
        path: ["owner", "repo"],
        query: ["state", "per_page", "page"],
        body: [],
      },
    },
    listForUser: {
      method: "get",
      path: "/users/{username}/projects",
      parameters: {
        path: ["username"],
        query: ["state", "per_page", "page"],
        body: [],
      },
    },
    moveCard: {
      method: "post",
      path: "/projects/columns/cards/{card_id}/moves",
      parameters: {
        path: ["card_id"],
        query: [],
        body: ["position", "column_id"],
      },
    },
    moveColumn: {
      method: "post",
      path: "/projects/columns/{column_id}/moves",
      parameters: { path: ["column_id"], query: [], body: ["position"] },
    },
    removeCollaborator: {
      method: "delete",
      path: "/projects/{project_id}/collaborators/{username}",
      parameters: { path: ["project_id", "username"], query: [], body: [] },
    },
    update: {
      method: "patch",
      path: "/projects/{project_id}",
      parameters: {
        path: ["project_id"],
        query: [],
        body: ["name", "body", "state", "organization_permission", "private"],
      },
    },
    updateCard: {
      method: "patch",
      path: "/projects/columns/cards/{card_id}",
      parameters: { path: ["card_id"], query: [], body: ["note", "archived"] },
    },
    updateColumn: {
      method: "patch",
      path: "/projects/columns/{column_id}",
      parameters: { path: ["column_id"], query: [], body: ["name"] },
    },
  },
  pulls: {
    checkIfMerged: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [],
      },
    },
    create: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "title",
          "head",
          "base",
          "body",
          "maintainer_can_modify",
          "draft",
          "issue",
        ],
      },
    },
    createReplyForReviewComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
      parameters: {
        path: ["owner", "repo", "pull_number", "comment_id"],
        query: [],
        body: ["body"],
      },
    },
    createReview: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [
          "commit_id",
          "body",
          "event",
          "comments",
          "comments[].path",
          "comments[].position",
          "comments[].body",
          "comments[].line",
          "comments[].side",
          "comments[].start_line",
          "comments[].start_side",
        ],
      },
    },
    createReviewComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [
          "body",
          "commit_id",
          "path",
          "position",
          "side",
          "line",
          "start_line",
          "start_side",
          "in_reply_to",
        ],
      },
    },
    deletePendingReview: {
      method: "delete",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: [],
        body: [],
      },
    },
    deleteReviewComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    dismissReview: {
      method: "put",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: [],
        body: ["message", "event"],
      },
    },
    get: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [],
      },
    },
    getReview: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: [],
        body: [],
      },
    },
    getReviewComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    list: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "state",
          "head",
          "base",
          "sort",
          "direction",
          "per_page",
          "page",
        ],
        body: [],
      },
    },
    listCommentsForReview: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listCommits: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/commits",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listFiles: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/files",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listRequestedReviewers: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: [],
      },
    },
    listReviewComments: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: ["sort", "direction", "since", "per_page", "page"],
        body: [],
      },
    },
    listReviewCommentsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/comments",
      parameters: {
        path: ["owner", "repo"],
        query: ["sort", "direction", "since", "per_page", "page"],
        body: [],
      },
    },
    listReviews: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    merge: {
      method: "put",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/merge",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: ["commit_title", "commit_message", "sha", "merge_method"],
      },
    },
    removeRequestedReviewers: {
      method: "delete",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: ["reviewers", "team_reviewers"],
      },
    },
    requestReviewers: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: ["reviewers", "team_reviewers"],
      },
    },
    submitReview: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: [],
        body: ["body", "event"],
      },
    },
    update: {
      method: "patch",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: ["title", "body", "state", "base", "maintainer_can_modify"],
      },
    },
    updateBranch: {
      method: "put",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/update-branch",
      parameters: {
        path: ["owner", "repo", "pull_number"],
        query: [],
        body: ["expected_head_sha"],
      },
    },
    updateReview: {
      method: "put",
      path: "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}",
      parameters: {
        path: ["owner", "repo", "pull_number", "review_id"],
        query: [],
        body: ["body"],
      },
    },
    updateReviewComment: {
      method: "patch",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["body"],
      },
    },
  },
  rateLimit: {
    get: {
      method: "get",
      path: "/rate_limit",
      parameters: { path: [], query: [], body: [] },
    },
  },
  reactions: {
    createForCommitComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["content"],
      },
    },
    createForIssue: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/reactions",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: [],
        body: ["content"],
      },
    },
    createForIssueComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["content"],
      },
    },
    createForPullRequestReviewComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["content"],
      },
    },
    createForRelease: {
      method: "post",
      path: "/repos/{owner}/{repo}/releases/{release_id}/reactions",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: [],
        body: ["content"],
      },
    },
    createForTeamDiscussionCommentInOrg: {
      method: "post",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "comment_number"],
        query: [],
        body: ["content"],
      },
    },
    createForTeamDiscussionInOrg: {
      method: "post",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: [],
        body: ["content"],
      },
    },
    deleteForCommitComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
      parameters: {
        path: ["owner", "repo", "comment_id", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForIssue: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}",
      parameters: {
        path: ["owner", "repo", "issue_number", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForIssueComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}",
      parameters: {
        path: ["owner", "repo", "comment_id", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForPullRequestComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
      parameters: {
        path: ["owner", "repo", "comment_id", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForRelease: {
      method: "delete",
      path: "/repos/{owner}/{repo}/releases/{release_id}/reactions/{reaction_id}",
      parameters: {
        path: ["owner", "repo", "release_id", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForTeamDiscussion: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "reaction_id"],
        query: [],
        body: [],
      },
    },
    deleteForTeamDiscussionComment: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
      parameters: {
        path: [
          "org",
          "team_slug",
          "discussion_number",
          "comment_number",
          "reaction_id",
        ],
        query: [],
        body: [],
      },
    },
    listForCommitComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForIssue: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/{issue_number}/reactions",
      parameters: {
        path: ["owner", "repo", "issue_number"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForIssueComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForPullRequestReviewComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForRelease: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/{release_id}/reactions",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForTeamDiscussionCommentInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "comment_number"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
    listForTeamDiscussionInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: ["content", "per_page", "page"],
        body: [],
      },
    },
  },
  repos: {
    acceptInvitation: {
      method: "patch",
      path: "/user/repository_invitations/{invitation_id}",
      parameters: { path: ["invitation_id"], query: [], body: [] },
    },
    acceptInvitationForAuthenticatedUser: {
      method: "patch",
      path: "/user/repository_invitations/{invitation_id}",
      parameters: { path: ["invitation_id"], query: [], body: [] },
    },
    addAppAccessRestrictions: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["apps"],
      },
    },
    addCollaborator: {
      method: "put",
      path: "/repos/{owner}/{repo}/collaborators/{username}",
      parameters: {
        path: ["owner", "repo", "username"],
        query: [],
        body: ["permission"],
      },
    },
    addStatusCheckContexts: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["contexts"],
      },
    },
    addTeamAccessRestrictions: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["teams"],
      },
    },
    addUserAccessRestrictions: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["users"],
      },
    },
    checkCollaborator: {
      method: "get",
      path: "/repos/{owner}/{repo}/collaborators/{username}",
      parameters: { path: ["owner", "repo", "username"], query: [], body: [] },
    },
    checkVulnerabilityAlerts: {
      method: "get",
      path: "/repos/{owner}/{repo}/vulnerability-alerts",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    codeownersErrors: {
      method: "get",
      path: "/repos/{owner}/{repo}/codeowners/errors",
      parameters: { path: ["owner", "repo"], query: ["ref"], body: [] },
    },
    compareCommits: {
      method: "get",
      path: "/repos/{owner}/{repo}/compare/{base}...{head}",
      parameters: {
        path: ["owner", "repo", "base", "head"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    compareCommitsWithBasehead: {
      method: "get",
      path: "/repos/{owner}/{repo}/compare/{basehead}",
      parameters: {
        path: ["owner", "repo", "basehead"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    createAutolink: {
      method: "post",
      path: "/repos/{owner}/{repo}/autolinks",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["key_prefix", "url_template", "is_alphanumeric"],
      },
    },
    createCommitComment: {
      method: "post",
      path: "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
      parameters: {
        path: ["owner", "repo", "commit_sha"],
        query: [],
        body: ["body", "path", "position", "line"],
      },
    },
    createCommitSignatureProtection: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    createCommitStatus: {
      method: "post",
      path: "/repos/{owner}/{repo}/statuses/{sha}",
      parameters: {
        path: ["owner", "repo", "sha"],
        query: [],
        body: ["state", "target_url", "description", "context"],
      },
    },
    createDeployKey: {
      method: "post",
      path: "/repos/{owner}/{repo}/keys",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["title", "key", "read_only"],
      },
    },
    createDeployment: {
      method: "post",
      path: "/repos/{owner}/{repo}/deployments",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "ref",
          "task",
          "auto_merge",
          "required_contexts",
          "payload",
          "environment",
          "description",
          "transient_environment",
          "production_environment",
        ],
      },
    },
    createDeploymentBranchPolicy: {
      method: "post",
      path: "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
      parameters: {
        path: ["owner", "repo", "environment_name"],
        query: [],
        body: ["name"],
      },
    },
    createDeploymentStatus: {
      method: "post",
      path: "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
      parameters: {
        path: ["owner", "repo", "deployment_id"],
        query: [],
        body: [
          "state",
          "target_url",
          "log_url",
          "description",
          "environment",
          "environment_url",
          "auto_inactive",
        ],
      },
    },
    createDispatchEvent: {
      method: "post",
      path: "/repos/{owner}/{repo}/dispatches",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["event_type", "client_payload", "client_payload.*"],
      },
    },
    createForAuthenticatedUser: {
      method: "post",
      path: "/user/repos",
      parameters: {
        path: [],
        query: [],
        body: [
          "name",
          "description",
          "homepage",
          "private",
          "has_issues",
          "has_projects",
          "has_wiki",
          "team_id",
          "auto_init",
          "gitignore_template",
          "license_template",
          "allow_squash_merge",
          "allow_merge_commit",
          "allow_rebase_merge",
          "allow_auto_merge",
          "delete_branch_on_merge",
          "squash_merge_commit_title",
          "squash_merge_commit_message",
          "merge_commit_title",
          "merge_commit_message",
          "has_downloads",
          "is_template",
        ],
      },
    },
    createFork: {
      method: "post",
      path: "/repos/{owner}/{repo}/forks",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["organization", "name", "default_branch_only"],
      },
    },
    createInOrg: {
      method: "post",
      path: "/orgs/{org}/repos",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "name",
          "description",
          "homepage",
          "private",
          "visibility",
          "has_issues",
          "has_projects",
          "has_wiki",
          "is_template",
          "team_id",
          "auto_init",
          "gitignore_template",
          "license_template",
          "allow_squash_merge",
          "allow_merge_commit",
          "allow_rebase_merge",
          "allow_auto_merge",
          "delete_branch_on_merge",
          "use_squash_pr_title_as_default",
          "squash_merge_commit_title",
          "squash_merge_commit_message",
          "merge_commit_title",
          "merge_commit_message",
        ],
      },
    },
    createOrUpdateEnvironment: {
      method: "put",
      path: "/repos/{owner}/{repo}/environments/{environment_name}",
      parameters: {
        path: ["owner", "repo", "environment_name"],
        query: [],
        body: [
          "wait_timer",
          "reviewers",
          "reviewers[].type",
          "reviewers[].id",
          "deployment_branch_policy",
          "deployment_branch_policy.protected_branches",
          "deployment_branch_policy.custom_branch_policies",
        ],
      },
    },
    createOrUpdateFileContents: {
      method: "put",
      path: "/repos/{owner}/{repo}/contents/{path}",
      parameters: {
        path: ["owner", "repo", "path"],
        query: [],
        body: [
          "message",
          "content",
          "sha",
          "branch",
          "committer",
          "committer.name",
          "committer.email",
          "committer.date",
          "author",
          "author.name",
          "author.email",
          "author.date",
        ],
      },
    },
    createPagesDeployment: {
      method: "post",
      path: "/repos/{owner}/{repo}/pages/deployment",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "artifact_url",
          "environment",
          "pages_build_version",
          "oidc_token",
        ],
      },
    },
    createPagesSite: {
      method: "post",
      path: "/repos/{owner}/{repo}/pages",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["build_type", "source", "source.branch", "source.path"],
      },
    },
    createRelease: {
      method: "post",
      path: "/repos/{owner}/{repo}/releases",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "tag_name",
          "target_commitish",
          "name",
          "body",
          "draft",
          "prerelease",
          "discussion_category_name",
          "generate_release_notes",
        ],
      },
    },
    createTagProtection: {
      method: "post",
      path: "/repos/{owner}/{repo}/tags/protection",
      parameters: { path: ["owner", "repo"], query: [], body: ["pattern"] },
    },
    createUsingTemplate: {
      method: "post",
      path: "/repos/{template_owner}/{template_repo}/generate",
      parameters: {
        path: ["template_owner", "template_repo"],
        query: [],
        body: [
          "owner",
          "name",
          "description",
          "include_all_branches",
          "private",
        ],
      },
    },
    createWebhook: {
      method: "post",
      path: "/repos/{owner}/{repo}/hooks",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "name",
          "config",
          "config.url",
          "config.content_type",
          "config.secret",
          "config.insecure_ssl",
          "config.token",
          "config.digest",
          "events",
          "active",
        ],
      },
    },
    declineInvitation: {
      method: "delete",
      path: "/user/repository_invitations/{invitation_id}",
      parameters: { path: ["invitation_id"], query: [], body: [] },
    },
    declineInvitationForAuthenticatedUser: {
      method: "delete",
      path: "/user/repository_invitations/{invitation_id}",
      parameters: { path: ["invitation_id"], query: [], body: [] },
    },
    delete: {
      method: "delete",
      path: "/repos/{owner}/{repo}",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    deleteAccessRestrictions: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    deleteAdminBranchProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    deleteAnEnvironment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/environments/{environment_name}",
      parameters: {
        path: ["owner", "repo", "environment_name"],
        query: [],
        body: [],
      },
    },
    deleteAutolink: {
      method: "delete",
      path: "/repos/{owner}/{repo}/autolinks/{autolink_id}",
      parameters: {
        path: ["owner", "repo", "autolink_id"],
        query: [],
        body: [],
      },
    },
    deleteBranchProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    deleteCommitComment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    deleteCommitSignatureProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    deleteDeployKey: {
      method: "delete",
      path: "/repos/{owner}/{repo}/keys/{key_id}",
      parameters: { path: ["owner", "repo", "key_id"], query: [], body: [] },
    },
    deleteDeployment: {
      method: "delete",
      path: "/repos/{owner}/{repo}/deployments/{deployment_id}",
      parameters: {
        path: ["owner", "repo", "deployment_id"],
        query: [],
        body: [],
      },
    },
    deleteDeploymentBranchPolicy: {
      method: "delete",
      path: "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      parameters: {
        path: ["owner", "repo", "environment_name", "branch_policy_id"],
        query: [],
        body: [],
      },
    },
    deleteFile: {
      method: "delete",
      path: "/repos/{owner}/{repo}/contents/{path}",
      parameters: {
        path: ["owner", "repo", "path"],
        query: [],
        body: [
          "message",
          "sha",
          "branch",
          "committer",
          "committer.name",
          "committer.email",
          "author",
          "author.name",
          "author.email",
        ],
      },
    },
    deleteInvitation: {
      method: "delete",
      path: "/repos/{owner}/{repo}/invitations/{invitation_id}",
      parameters: {
        path: ["owner", "repo", "invitation_id"],
        query: [],
        body: [],
      },
    },
    deletePagesSite: {
      method: "delete",
      path: "/repos/{owner}/{repo}/pages",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    deletePullRequestReviewProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    deleteRelease: {
      method: "delete",
      path: "/repos/{owner}/{repo}/releases/{release_id}",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: [],
        body: [],
      },
    },
    deleteReleaseAsset: {
      method: "delete",
      path: "/repos/{owner}/{repo}/releases/assets/{asset_id}",
      parameters: { path: ["owner", "repo", "asset_id"], query: [], body: [] },
    },
    deleteTagProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/tags/protection/{tag_protection_id}",
      parameters: {
        path: ["owner", "repo", "tag_protection_id"],
        query: [],
        body: [],
      },
    },
    deleteWebhook: {
      method: "delete",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}",
      parameters: { path: ["owner", "repo", "hook_id"], query: [], body: [] },
    },
    disableAutomatedSecurityFixes: {
      method: "delete",
      path: "/repos/{owner}/{repo}/automated-security-fixes",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    disableLfsForRepo: {
      method: "delete",
      path: "/repos/{owner}/{repo}/lfs",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    disableVulnerabilityAlerts: {
      method: "delete",
      path: "/repos/{owner}/{repo}/vulnerability-alerts",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    downloadArchive: {
      method: "get",
      path: "/repos/{owner}/{repo}/zipball/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    downloadTarballArchive: {
      method: "get",
      path: "/repos/{owner}/{repo}/tarball/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    downloadZipballArchive: {
      method: "get",
      path: "/repos/{owner}/{repo}/zipball/{ref}",
      parameters: { path: ["owner", "repo", "ref"], query: [], body: [] },
    },
    enableAutomatedSecurityFixes: {
      method: "put",
      path: "/repos/{owner}/{repo}/automated-security-fixes",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    enableLfsForRepo: {
      method: "put",
      path: "/repos/{owner}/{repo}/lfs",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    enableVulnerabilityAlerts: {
      method: "put",
      path: "/repos/{owner}/{repo}/vulnerability-alerts",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    generateReleaseNotes: {
      method: "post",
      path: "/repos/{owner}/{repo}/releases/generate-notes",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "tag_name",
          "target_commitish",
          "previous_tag_name",
          "configuration_file_path",
        ],
      },
    },
    get: {
      method: "get",
      path: "/repos/{owner}/{repo}",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getAccessRestrictions: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getAdminBranchProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getAllEnvironments: {
      method: "get",
      path: "/repos/{owner}/{repo}/environments",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    getAllStatusCheckContexts: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getAllTopics: {
      method: "get",
      path: "/repos/{owner}/{repo}/topics",
      parameters: {
        path: ["owner", "repo"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    getAppsWithAccessToProtectedBranch: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getAutolink: {
      method: "get",
      path: "/repos/{owner}/{repo}/autolinks/{autolink_id}",
      parameters: {
        path: ["owner", "repo", "autolink_id"],
        query: [],
        body: [],
      },
    },
    getBranch: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getBranchProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getClones: {
      method: "get",
      path: "/repos/{owner}/{repo}/traffic/clones",
      parameters: { path: ["owner", "repo"], query: ["per"], body: [] },
    },
    getCodeFrequencyStats: {
      method: "get",
      path: "/repos/{owner}/{repo}/stats/code_frequency",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getCollaboratorPermissionLevel: {
      method: "get",
      path: "/repos/{owner}/{repo}/collaborators/{username}/permission",
      parameters: { path: ["owner", "repo", "username"], query: [], body: [] },
    },
    getCombinedStatusForRef: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{ref}/status",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    getCommit: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{ref}",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    getCommitActivityStats: {
      method: "get",
      path: "/repos/{owner}/{repo}/stats/commit_activity",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getCommitComment: {
      method: "get",
      path: "/repos/{owner}/{repo}/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: [],
      },
    },
    getCommitSignatureProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_signatures",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getCommunityProfileMetrics: {
      method: "get",
      path: "/repos/{owner}/{repo}/community/profile",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getContent: {
      method: "get",
      path: "/repos/{owner}/{repo}/contents/{path}",
      parameters: { path: ["owner", "repo", "path"], query: ["ref"], body: [] },
    },
    getContributorsStats: {
      method: "get",
      path: "/repos/{owner}/{repo}/stats/contributors",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getDeployKey: {
      method: "get",
      path: "/repos/{owner}/{repo}/keys/{key_id}",
      parameters: { path: ["owner", "repo", "key_id"], query: [], body: [] },
    },
    getDeployment: {
      method: "get",
      path: "/repos/{owner}/{repo}/deployments/{deployment_id}",
      parameters: {
        path: ["owner", "repo", "deployment_id"],
        query: [],
        body: [],
      },
    },
    getDeploymentBranchPolicy: {
      method: "get",
      path: "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      parameters: {
        path: ["owner", "repo", "environment_name", "branch_policy_id"],
        query: [],
        body: [],
      },
    },
    getDeploymentStatus: {
      method: "get",
      path: "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
      parameters: {
        path: ["owner", "repo", "deployment_id", "status_id"],
        query: [],
        body: [],
      },
    },
    getEnvironment: {
      method: "get",
      path: "/repos/{owner}/{repo}/environments/{environment_name}",
      parameters: {
        path: ["owner", "repo", "environment_name"],
        query: [],
        body: [],
      },
    },
    getLatestPagesBuild: {
      method: "get",
      path: "/repos/{owner}/{repo}/pages/builds/latest",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getLatestRelease: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/latest",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getPages: {
      method: "get",
      path: "/repos/{owner}/{repo}/pages",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getPagesBuild: {
      method: "get",
      path: "/repos/{owner}/{repo}/pages/builds/{build_id}",
      parameters: { path: ["owner", "repo", "build_id"], query: [], body: [] },
    },
    getPagesHealthCheck: {
      method: "get",
      path: "/repos/{owner}/{repo}/pages/health",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getParticipationStats: {
      method: "get",
      path: "/repos/{owner}/{repo}/stats/participation",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getPullRequestReviewProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getPunchCardStats: {
      method: "get",
      path: "/repos/{owner}/{repo}/stats/punch_card",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getReadme: {
      method: "get",
      path: "/repos/{owner}/{repo}/readme",
      parameters: { path: ["owner", "repo"], query: ["ref"], body: [] },
    },
    getReadmeInDirectory: {
      method: "get",
      path: "/repos/{owner}/{repo}/readme/{dir}",
      parameters: { path: ["owner", "repo", "dir"], query: ["ref"], body: [] },
    },
    getRelease: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/{release_id}",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: [],
        body: [],
      },
    },
    getReleaseAsset: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/assets/{asset_id}",
      parameters: { path: ["owner", "repo", "asset_id"], query: [], body: [] },
    },
    getReleaseByTag: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/tags/{tag}",
      parameters: { path: ["owner", "repo", "tag"], query: [], body: [] },
    },
    getStatusChecksProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getTeamsWithAccessToProtectedBranch: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getTopPaths: {
      method: "get",
      path: "/repos/{owner}/{repo}/traffic/popular/paths",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getTopReferrers: {
      method: "get",
      path: "/repos/{owner}/{repo}/traffic/popular/referrers",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    getUsersWithAccessToProtectedBranch: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    getViews: {
      method: "get",
      path: "/repos/{owner}/{repo}/traffic/views",
      parameters: { path: ["owner", "repo"], query: ["per"], body: [] },
    },
    getWebhook: {
      method: "get",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}",
      parameters: { path: ["owner", "repo", "hook_id"], query: [], body: [] },
    },
    getWebhookConfigForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/config",
      parameters: { path: ["owner", "repo", "hook_id"], query: [], body: [] },
    },
    getWebhookDelivery: {
      method: "get",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
      parameters: {
        path: ["owner", "repo", "hook_id", "delivery_id"],
        query: [],
        body: [],
      },
    },
    listAutolinks: {
      method: "get",
      path: "/repos/{owner}/{repo}/autolinks",
      parameters: { path: ["owner", "repo"], query: ["page"], body: [] },
    },
    listBranches: {
      method: "get",
      path: "/repos/{owner}/{repo}/branches",
      parameters: {
        path: ["owner", "repo"],
        query: ["protected", "per_page", "page"],
        body: [],
      },
    },
    listBranchesForHeadCommit: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head",
      parameters: {
        path: ["owner", "repo", "commit_sha"],
        query: [],
        body: [],
      },
    },
    listCollaborators: {
      method: "get",
      path: "/repos/{owner}/{repo}/collaborators",
      parameters: {
        path: ["owner", "repo"],
        query: ["affiliation", "permission", "per_page", "page"],
        body: [],
      },
    },
    listCommentsForCommit: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{commit_sha}/comments",
      parameters: {
        path: ["owner", "repo", "commit_sha"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listCommitCommentsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/comments",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listCommitStatusesForRef: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{ref}/statuses",
      parameters: {
        path: ["owner", "repo", "ref"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listCommits: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits",
      parameters: {
        path: ["owner", "repo"],
        query: ["sha", "path", "author", "since", "until", "per_page", "page"],
        body: [],
      },
    },
    listContributors: {
      method: "get",
      path: "/repos/{owner}/{repo}/contributors",
      parameters: {
        path: ["owner", "repo"],
        query: ["anon", "per_page", "page"],
        body: [],
      },
    },
    listDeployKeys: {
      method: "get",
      path: "/repos/{owner}/{repo}/keys",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listDeploymentBranchPolicies: {
      method: "get",
      path: "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
      parameters: {
        path: ["owner", "repo", "environment_name"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listDeploymentStatuses: {
      method: "get",
      path: "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
      parameters: {
        path: ["owner", "repo", "deployment_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listDeployments: {
      method: "get",
      path: "/repos/{owner}/{repo}/deployments",
      parameters: {
        path: ["owner", "repo"],
        query: ["sha", "ref", "task", "environment", "per_page", "page"],
        body: [],
      },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/repos",
      parameters: {
        path: [],
        query: [
          "visibility",
          "affiliation",
          "type",
          "sort",
          "direction",
          "per_page",
          "page",
          "since",
          "before",
        ],
        body: [],
      },
    },
    listForOrg: {
      method: "get",
      path: "/orgs/{org}/repos",
      parameters: {
        path: ["org"],
        query: ["type", "sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listForUser: {
      method: "get",
      path: "/users/{username}/repos",
      parameters: {
        path: ["username"],
        query: ["type", "sort", "direction", "per_page", "page"],
        body: [],
      },
    },
    listForks: {
      method: "get",
      path: "/repos/{owner}/{repo}/forks",
      parameters: {
        path: ["owner", "repo"],
        query: ["sort", "per_page", "page"],
        body: [],
      },
    },
    listInvitations: {
      method: "get",
      path: "/repos/{owner}/{repo}/invitations",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listInvitationsForAuthenticatedUser: {
      method: "get",
      path: "/user/repository_invitations",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listLanguages: {
      method: "get",
      path: "/repos/{owner}/{repo}/languages",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    listPagesBuilds: {
      method: "get",
      path: "/repos/{owner}/{repo}/pages/builds",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listPublic: {
      method: "get",
      path: "/repositories",
      parameters: { path: [], query: ["since"], body: [] },
    },
    listPullRequestsAssociatedWithCommit: {
      method: "get",
      path: "/repos/{owner}/{repo}/commits/{commit_sha}/pulls",
      parameters: {
        path: ["owner", "repo", "commit_sha"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listReleaseAssets: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases/{release_id}/assets",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listReleases: {
      method: "get",
      path: "/repos/{owner}/{repo}/releases",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listTagProtection: {
      method: "get",
      path: "/repos/{owner}/{repo}/tags/protection",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    listTags: {
      method: "get",
      path: "/repos/{owner}/{repo}/tags",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listTeams: {
      method: "get",
      path: "/repos/{owner}/{repo}/teams",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listWebhookDeliveries: {
      method: "get",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
      parameters: {
        path: ["owner", "repo", "hook_id"],
        query: ["per_page", "cursor"],
        body: [],
      },
    },
    listWebhooks: {
      method: "get",
      path: "/repos/{owner}/{repo}/hooks",
      parameters: {
        path: ["owner", "repo"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    merge: {
      method: "post",
      path: "/repos/{owner}/{repo}/merges",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["base", "head", "commit_message"],
      },
    },
    mergeUpstream: {
      method: "post",
      path: "/repos/{owner}/{repo}/merge-upstream",
      parameters: { path: ["owner", "repo"], query: [], body: ["branch"] },
    },
    pingWebhook: {
      method: "post",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/pings",
      parameters: { path: ["owner", "repo", "hook_id"], query: [], body: [] },
    },
    redeliverWebhookDelivery: {
      method: "post",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}/attempts",
      parameters: {
        path: ["owner", "repo", "hook_id", "delivery_id"],
        query: [],
        body: [],
      },
    },
    removeAppAccessRestrictions: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["apps"],
      },
    },
    removeCollaborator: {
      method: "delete",
      path: "/repos/{owner}/{repo}/collaborators/{username}",
      parameters: { path: ["owner", "repo", "username"], query: [], body: [] },
    },
    removeStatusCheckContexts: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["contexts"],
      },
    },
    removeStatusCheckProtection: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    removeTeamAccessRestrictions: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["teams"],
      },
    },
    removeUserAccessRestrictions: {
      method: "delete",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["users"],
      },
    },
    renameBranch: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/rename",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["new_name"],
      },
    },
    replaceAllTopics: {
      method: "put",
      path: "/repos/{owner}/{repo}/topics",
      parameters: { path: ["owner", "repo"], query: [], body: ["names"] },
    },
    requestPagesBuild: {
      method: "post",
      path: "/repos/{owner}/{repo}/pages/builds",
      parameters: { path: ["owner", "repo"], query: [], body: [] },
    },
    setAdminBranchProtection: {
      method: "post",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
      parameters: { path: ["owner", "repo", "branch"], query: [], body: [] },
    },
    setAppAccessRestrictions: {
      method: "put",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["apps"],
      },
    },
    setStatusCheckContexts: {
      method: "put",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["contexts"],
      },
    },
    setTeamAccessRestrictions: {
      method: "put",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["teams"],
      },
    },
    setUserAccessRestrictions: {
      method: "put",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: ["users"],
      },
    },
    testPushWebhook: {
      method: "post",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/tests",
      parameters: { path: ["owner", "repo", "hook_id"], query: [], body: [] },
    },
    transfer: {
      method: "post",
      path: "/repos/{owner}/{repo}/transfer",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["new_owner", "team_ids"],
      },
    },
    update: {
      method: "patch",
      path: "/repos/{owner}/{repo}",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: [
          "name",
          "description",
          "homepage",
          "private",
          "visibility",
          "security_and_analysis",
          "security_and_analysis.advanced_security",
          "security_and_analysis.advanced_security.status",
          "security_and_analysis.secret_scanning",
          "security_and_analysis.secret_scanning.status",
          "security_and_analysis.secret_scanning_push_protection",
          "security_and_analysis.secret_scanning_push_protection.status",
          "has_issues",
          "has_projects",
          "has_wiki",
          "is_template",
          "default_branch",
          "allow_squash_merge",
          "allow_merge_commit",
          "allow_rebase_merge",
          "allow_auto_merge",
          "delete_branch_on_merge",
          "allow_update_branch",
          "use_squash_pr_title_as_default",
          "squash_merge_commit_title",
          "squash_merge_commit_message",
          "merge_commit_title",
          "merge_commit_message",
          "archived",
          "allow_forking",
          "web_commit_signoff_required",
        ],
      },
    },
    updateBranchProtection: {
      method: "put",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: [
          "required_status_checks",
          "required_status_checks.strict",
          "required_status_checks.contexts",
          "required_status_checks.checks",
          "required_status_checks.checks[].context",
          "required_status_checks.checks[].app_id",
          "enforce_admins",
          "required_pull_request_reviews",
          "required_pull_request_reviews.dismissal_restrictions",
          "required_pull_request_reviews.dismissal_restrictions.users",
          "required_pull_request_reviews.dismissal_restrictions.teams",
          "required_pull_request_reviews.dismissal_restrictions.apps",
          "required_pull_request_reviews.dismiss_stale_reviews",
          "required_pull_request_reviews.require_code_owner_reviews",
          "required_pull_request_reviews.required_approving_review_count",
          "required_pull_request_reviews.bypass_pull_request_allowances",
          "required_pull_request_reviews.bypass_pull_request_allowances.users",
          "required_pull_request_reviews.bypass_pull_request_allowances.teams",
          "required_pull_request_reviews.bypass_pull_request_allowances.apps",
          "restrictions",
          "restrictions.users",
          "restrictions.teams",
          "restrictions.apps",
          "required_linear_history",
          "allow_force_pushes",
          "allow_deletions",
          "block_creations",
          "required_conversation_resolution",
        ],
      },
    },
    updateCommitComment: {
      method: "patch",
      path: "/repos/{owner}/{repo}/comments/{comment_id}",
      parameters: {
        path: ["owner", "repo", "comment_id"],
        query: [],
        body: ["body"],
      },
    },
    updateDeploymentBranchPolicy: {
      method: "put",
      path: "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
      parameters: {
        path: ["owner", "repo", "environment_name", "branch_policy_id"],
        query: [],
        body: ["name"],
      },
    },
    updateInformationAboutPagesSite: {
      method: "put",
      path: "/repos/{owner}/{repo}/pages",
      parameters: {
        path: ["owner", "repo"],
        query: [],
        body: ["cname", "https_enforced", "public", "build_type", "source"],
      },
    },
    updateInvitation: {
      method: "patch",
      path: "/repos/{owner}/{repo}/invitations/{invitation_id}",
      parameters: {
        path: ["owner", "repo", "invitation_id"],
        query: [],
        body: ["permissions"],
      },
    },
    updatePullRequestReviewProtection: {
      method: "patch",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: [
          "dismissal_restrictions",
          "dismissal_restrictions.users",
          "dismissal_restrictions.teams",
          "dismissal_restrictions.apps",
          "dismiss_stale_reviews",
          "require_code_owner_reviews",
          "required_approving_review_count",
          "bypass_pull_request_allowances",
          "bypass_pull_request_allowances.users",
          "bypass_pull_request_allowances.teams",
          "bypass_pull_request_allowances.apps",
        ],
      },
    },
    updateRelease: {
      method: "patch",
      path: "/repos/{owner}/{repo}/releases/{release_id}",
      parameters: {
        path: ["owner", "repo", "release_id"],
        query: [],
        body: [
          "tag_name",
          "target_commitish",
          "name",
          "body",
          "draft",
          "prerelease",
          "discussion_category_name",
        ],
      },
    },
    updateReleaseAsset: {
      method: "patch",
      path: "/repos/{owner}/{repo}/releases/assets/{asset_id}",
      parameters: {
        path: ["owner", "repo", "asset_id"],
        query: [],
        body: ["name", "label", "state"],
      },
    },
    updateStatusCheckPotection: {
      method: "patch",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: [
          "strict",
          "contexts",
          "checks",
          "checks[].context",
          "checks[].app_id",
        ],
      },
    },
    updateStatusCheckProtection: {
      method: "patch",
      path: "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks",
      parameters: {
        path: ["owner", "repo", "branch"],
        query: [],
        body: [
          "strict",
          "contexts",
          "checks",
          "checks[].context",
          "checks[].app_id",
        ],
      },
    },
    updateWebhook: {
      method: "patch",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}",
      parameters: {
        path: ["owner", "repo", "hook_id"],
        query: [],
        body: [
          "config",
          "config.url",
          "config.content_type",
          "config.secret",
          "config.insecure_ssl",
          "config.address",
          "config.room",
          "events",
          "add_events",
          "remove_events",
          "active",
        ],
      },
    },
    updateWebhookConfigForRepo: {
      method: "patch",
      path: "/repos/{owner}/{repo}/hooks/{hook_id}/config",
      parameters: {
        path: ["owner", "repo", "hook_id"],
        query: [],
        body: ["url", "content_type", "secret", "insecure_ssl"],
      },
    },
    uploadReleaseAsset: {
      method: "post",
      path: "/repos/{owner}/{repo}/releases/{release_id}/assets",
      parameters: {
        path: ["owner", "repo", "release_id", "origin"],
        query: ["name", "label"],
        body: ["data"],
      },
    },
  },
  search: {
    code: {
      method: "get",
      path: "/search/code",
      parameters: {
        path: [],
        query: ["q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
    commits: {
      method: "get",
      path: "/search/commits",
      parameters: {
        path: [],
        query: ["q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
    issuesAndPullRequests: {
      method: "get",
      path: "/search/issues",
      parameters: {
        path: [],
        query: ["q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
    labels: {
      method: "get",
      path: "/search/labels",
      parameters: {
        path: [],
        query: ["repository_id", "q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
    repos: {
      method: "get",
      path: "/search/repositories",
      parameters: {
        path: [],
        query: ["q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
    topics: {
      method: "get",
      path: "/search/topics",
      parameters: { path: [], query: ["q", "per_page", "page"], body: [] },
    },
    users: {
      method: "get",
      path: "/search/users",
      parameters: {
        path: [],
        query: ["q", "sort", "order", "per_page", "page"],
        body: [],
      },
    },
  },
  secretScanning: {
    getAlert: {
      method: "get",
      path: "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: [],
        body: [],
      },
    },
    listAlertsForEnterprise: {
      method: "get",
      path: "/enterprises/{enterprise}/secret-scanning/alerts",
      parameters: {
        path: ["enterprise"],
        query: [
          "state",
          "secret_type",
          "resolution",
          "sort",
          "direction",
          "per_page",
          "before",
          "after",
        ],
        body: [],
      },
    },
    listAlertsForOrg: {
      method: "get",
      path: "/orgs/{org}/secret-scanning/alerts",
      parameters: {
        path: ["org"],
        query: [
          "state",
          "secret_type",
          "resolution",
          "sort",
          "direction",
          "page",
          "per_page",
          "before",
          "after",
        ],
        body: [],
      },
    },
    listAlertsForRepo: {
      method: "get",
      path: "/repos/{owner}/{repo}/secret-scanning/alerts",
      parameters: {
        path: ["owner", "repo"],
        query: [
          "state",
          "secret_type",
          "resolution",
          "sort",
          "direction",
          "page",
          "per_page",
          "before",
          "after",
        ],
        body: [],
      },
    },
    listLocationsForAlert: {
      method: "get",
      path: "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}/locations",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: ["page", "per_page"],
        body: [],
      },
    },
    updateAlert: {
      method: "patch",
      path: "/repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}",
      parameters: {
        path: ["owner", "repo", "alert_number"],
        query: [],
        body: ["state", "resolution", "resolution_comment"],
      },
    },
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: {
      method: "put",
      path: "/orgs/{org}/teams/{team_slug}/memberships/{username}",
      parameters: {
        path: ["org", "team_slug", "username"],
        query: [],
        body: ["role"],
      },
    },
    addOrUpdateProjectPermissionsInOrg: {
      method: "put",
      path: "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
      parameters: {
        path: ["org", "team_slug", "project_id"],
        query: [],
        body: ["permission"],
      },
    },
    addOrUpdateRepoPermissionsInOrg: {
      method: "put",
      path: "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      parameters: {
        path: ["org", "team_slug", "owner", "repo"],
        query: [],
        body: ["permission"],
      },
    },
    checkPermissionsForProjectInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
      parameters: {
        path: ["org", "team_slug", "project_id"],
        query: [],
        body: [],
      },
    },
    checkPermissionsForRepoInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      parameters: {
        path: ["org", "team_slug", "owner", "repo"],
        query: [],
        body: [],
      },
    },
    create: {
      method: "post",
      path: "/orgs/{org}/teams",
      parameters: {
        path: ["org"],
        query: [],
        body: [
          "name",
          "description",
          "maintainers",
          "repo_names",
          "privacy",
          "permission",
          "parent_team_id",
        ],
      },
    },
    createDiscussionCommentInOrg: {
      method: "post",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: [],
        body: ["body"],
      },
    },
    createDiscussionInOrg: {
      method: "post",
      path: "/orgs/{org}/teams/{team_slug}/discussions",
      parameters: {
        path: ["org", "team_slug"],
        query: [],
        body: ["title", "body", "private"],
      },
    },
    deleteDiscussionCommentInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "comment_number"],
        query: [],
        body: [],
      },
    },
    deleteDiscussionInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: [],
        body: [],
      },
    },
    deleteInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}",
      parameters: { path: ["org", "team_slug"], query: [], body: [] },
    },
    getByName: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}",
      parameters: { path: ["org", "team_slug"], query: [], body: [] },
    },
    getDiscussionCommentInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "comment_number"],
        query: [],
        body: [],
      },
    },
    getDiscussionInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: [],
        body: [],
      },
    },
    getMembershipForUserInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/memberships/{username}",
      parameters: {
        path: ["org", "team_slug", "username"],
        query: [],
        body: [],
      },
    },
    list: {
      method: "get",
      path: "/orgs/{org}/teams",
      parameters: { path: ["org"], query: ["per_page", "page"], body: [] },
    },
    listChildInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/teams",
      parameters: {
        path: ["org", "team_slug"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listDiscussionCommentsInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: ["direction", "per_page", "page"],
        body: [],
      },
    },
    listDiscussionsInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/discussions",
      parameters: {
        path: ["org", "team_slug"],
        query: ["direction", "per_page", "page", "pinned"],
        body: [],
      },
    },
    listForAuthenticatedUser: {
      method: "get",
      path: "/user/teams",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listMembersInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/members",
      parameters: {
        path: ["org", "team_slug"],
        query: ["role", "per_page", "page"],
        body: [],
      },
    },
    listPendingInvitationsInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/invitations",
      parameters: {
        path: ["org", "team_slug"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listProjectsInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/projects",
      parameters: {
        path: ["org", "team_slug"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    listReposInOrg: {
      method: "get",
      path: "/orgs/{org}/teams/{team_slug}/repos",
      parameters: {
        path: ["org", "team_slug"],
        query: ["per_page", "page"],
        body: [],
      },
    },
    removeMembershipForUserInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/memberships/{username}",
      parameters: {
        path: ["org", "team_slug", "username"],
        query: [],
        body: [],
      },
    },
    removeProjectInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
      parameters: {
        path: ["org", "team_slug", "project_id"],
        query: [],
        body: [],
      },
    },
    removeRepoInOrg: {
      method: "delete",
      path: "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
      parameters: {
        path: ["org", "team_slug", "owner", "repo"],
        query: [],
        body: [],
      },
    },
    updateDiscussionCommentInOrg: {
      method: "patch",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number", "comment_number"],
        query: [],
        body: ["body"],
      },
    },
    updateDiscussionInOrg: {
      method: "patch",
      path: "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}",
      parameters: {
        path: ["org", "team_slug", "discussion_number"],
        query: [],
        body: ["title", "body"],
      },
    },
    updateInOrg: {
      method: "patch",
      path: "/orgs/{org}/teams/{team_slug}",
      parameters: {
        path: ["org", "team_slug"],
        query: [],
        body: [
          "name",
          "description",
          "privacy",
          "permission",
          "parent_team_id",
        ],
      },
    },
  },
  users: {
    addEmailForAuthenticated: {
      method: "post",
      path: "/user/emails",
      parameters: { path: [], query: [], body: ["emails"] },
    },
    addEmailForAuthenticatedUser: {
      method: "post",
      path: "/user/emails",
      parameters: { path: [], query: [], body: ["emails"] },
    },
    block: {
      method: "put",
      path: "/user/blocks/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    checkBlocked: {
      method: "get",
      path: "/user/blocks/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    checkFollowingForUser: {
      method: "get",
      path: "/users/{username}/following/{target_user}",
      parameters: { path: ["username", "target_user"], query: [], body: [] },
    },
    checkPersonIsFollowedByAuthenticated: {
      method: "get",
      path: "/user/following/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    createGpgKeyForAuthenticated: {
      method: "post",
      path: "/user/gpg_keys",
      parameters: { path: [], query: [], body: ["name", "armored_public_key"] },
    },
    createGpgKeyForAuthenticatedUser: {
      method: "post",
      path: "/user/gpg_keys",
      parameters: { path: [], query: [], body: ["name", "armored_public_key"] },
    },
    createPublicSshKeyForAuthenticated: {
      method: "post",
      path: "/user/keys",
      parameters: { path: [], query: [], body: ["title", "key"] },
    },
    createPublicSshKeyForAuthenticatedUser: {
      method: "post",
      path: "/user/keys",
      parameters: { path: [], query: [], body: ["title", "key"] },
    },
    createSshSigningKeyForAuthenticatedUser: {
      method: "post",
      path: "/user/ssh_signing_keys",
      parameters: { path: [], query: [], body: ["title", "key"] },
    },
    deleteEmailForAuthenticated: {
      method: "delete",
      path: "/user/emails",
      parameters: { path: [], query: [], body: ["emails"] },
    },
    deleteEmailForAuthenticatedUser: {
      method: "delete",
      path: "/user/emails",
      parameters: { path: [], query: [], body: ["emails"] },
    },
    deleteGpgKeyForAuthenticated: {
      method: "delete",
      path: "/user/gpg_keys/{gpg_key_id}",
      parameters: { path: ["gpg_key_id"], query: [], body: [] },
    },
    deleteGpgKeyForAuthenticatedUser: {
      method: "delete",
      path: "/user/gpg_keys/{gpg_key_id}",
      parameters: { path: ["gpg_key_id"], query: [], body: [] },
    },
    deletePublicSshKeyForAuthenticated: {
      method: "delete",
      path: "/user/keys/{key_id}",
      parameters: { path: ["key_id"], query: [], body: [] },
    },
    deletePublicSshKeyForAuthenticatedUser: {
      method: "delete",
      path: "/user/keys/{key_id}",
      parameters: { path: ["key_id"], query: [], body: [] },
    },
    deleteSshSigningKeyForAuthenticatedUser: {
      method: "delete",
      path: "/user/ssh_signing_keys/{ssh_signing_key_id}",
      parameters: { path: ["ssh_signing_key_id"], query: [], body: [] },
    },
    follow: {
      method: "put",
      path: "/user/following/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    getAuthenticated: {
      method: "get",
      path: "/user",
      parameters: { path: [], query: [], body: [] },
    },
    getByUsername: {
      method: "get",
      path: "/users/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    getContextForUser: {
      method: "get",
      path: "/users/{username}/hovercard",
      parameters: {
        path: ["username"],
        query: ["subject_type", "subject_id"],
        body: [],
      },
    },
    getGpgKeyForAuthenticated: {
      method: "get",
      path: "/user/gpg_keys/{gpg_key_id}",
      parameters: { path: ["gpg_key_id"], query: [], body: [] },
    },
    getGpgKeyForAuthenticatedUser: {
      method: "get",
      path: "/user/gpg_keys/{gpg_key_id}",
      parameters: { path: ["gpg_key_id"], query: [], body: [] },
    },
    getPublicSshKeyForAuthenticated: {
      method: "get",
      path: "/user/keys/{key_id}",
      parameters: { path: ["key_id"], query: [], body: [] },
    },
    getPublicSshKeyForAuthenticatedUser: {
      method: "get",
      path: "/user/keys/{key_id}",
      parameters: { path: ["key_id"], query: [], body: [] },
    },
    getSshSigningKeyForAuthenticatedUser: {
      method: "get",
      path: "/user/ssh_signing_keys/{ssh_signing_key_id}",
      parameters: { path: ["ssh_signing_key_id"], query: [], body: [] },
    },
    list: {
      method: "get",
      path: "/users",
      parameters: { path: [], query: ["since", "per_page"], body: [] },
    },
    listBlockedByAuthenticated: {
      method: "get",
      path: "/user/blocks",
      parameters: { path: [], query: [], body: [] },
    },
    listBlockedByAuthenticatedUser: {
      method: "get",
      path: "/user/blocks",
      parameters: { path: [], query: [], body: [] },
    },
    listEmailsForAuthenticated: {
      method: "get",
      path: "/user/emails",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listEmailsForAuthenticatedUser: {
      method: "get",
      path: "/user/emails",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listFollowedByAuthenticated: {
      method: "get",
      path: "/user/following",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listFollowedByAuthenticatedUser: {
      method: "get",
      path: "/user/following",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listFollowersForAuthenticatedUser: {
      method: "get",
      path: "/user/followers",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listFollowersForUser: {
      method: "get",
      path: "/users/{username}/followers",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listFollowingForUser: {
      method: "get",
      path: "/users/{username}/following",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listGpgKeysForAuthenticated: {
      method: "get",
      path: "/user/gpg_keys",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listGpgKeysForAuthenticatedUser: {
      method: "get",
      path: "/user/gpg_keys",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listGpgKeysForUser: {
      method: "get",
      path: "/users/{username}/gpg_keys",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listPublicEmailsForAuthenticated: {
      method: "get",
      path: "/user/public_emails",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPublicEmailsForAuthenticatedUser: {
      method: "get",
      path: "/user/public_emails",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPublicKeysForUser: {
      method: "get",
      path: "/users/{username}/keys",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    listPublicSshKeysForAuthenticated: {
      method: "get",
      path: "/user/keys",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listPublicSshKeysForAuthenticatedUser: {
      method: "get",
      path: "/user/keys",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listSshSigningKeysForAuthenticatedUser: {
      method: "get",
      path: "/user/ssh_signing_keys",
      parameters: { path: [], query: ["per_page", "page"], body: [] },
    },
    listSshSigningKeysForUser: {
      method: "get",
      path: "/users/{username}/ssh_signing_keys",
      parameters: { path: ["username"], query: ["per_page", "page"], body: [] },
    },
    setPrimaryEmailVisibilityForAuthenticated: {
      method: "patch",
      path: "/user/email/visibility",
      parameters: { path: [], query: [], body: ["visibility"] },
    },
    setPrimaryEmailVisibilityForAuthenticatedUser: {
      method: "patch",
      path: "/user/email/visibility",
      parameters: { path: [], query: [], body: ["visibility"] },
    },
    unblock: {
      method: "delete",
      path: "/user/blocks/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    unfollow: {
      method: "delete",
      path: "/user/following/{username}",
      parameters: { path: ["username"], query: [], body: [] },
    },
    updateAuthenticated: {
      method: "patch",
      path: "/user",
      parameters: {
        path: [],
        query: [],
        body: [
          "name",
          "email",
          "blog",
          "twitter_username",
          "company",
          "location",
          "hireable",
          "bio",
        ],
      },
    },
  },
};

export default endpoints;
