load("//defs:defs.bzl", "xprof_ng_module")
load("@io_bazel_rules_sass//:defs.bzl", "sass_binary")

package(default_visibility = ["//frontend:internal"])

xprof_ng_module(
    name = "op_details",
    srcs = [
        "op_details.ts",
        "op_details_module.ts",
    ],
    assets = [
        ":op_details_css",
        "op_details.ng.html",
    ],
    deps = [
        "@npm//@angular/common",
        "@npm//@angular/core",
        "@org_xprof//frontend/app/common/angular:angular_material_card",
        "@npm//@ngrx/store",
        "@npm//rxjs",
        "@org_xprof//frontend/app/common/interfaces:op_profile_proto_defs",
        "@org_xprof//frontend/app/common/utils",
        "@org_xprof//frontend/app/store",
    ],
)



sass_binary(
    name = "op_details_css",
    src = "op_details.scss",

    sourcemap = False,

    deps = [
        "@org_xprof//frontend/app/styles:common",
    ],
)
