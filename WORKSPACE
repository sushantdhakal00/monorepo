workspace(name = "payments_monorepo")
load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# rules_js for Node/TypeScript
http_archive(
    name = "aspect_rules_js",
    sha256 = "d41d8cd98f00b204e9800998ecf8427e",
    urls = ["https://github.com/aspect-build/rules_js/releases/download/v1.43.0/rules_js-v1.43.0.tar.gz"],
)

# TODO: wire pnpm via rules_js or use Bazel just for CI gates initially.
