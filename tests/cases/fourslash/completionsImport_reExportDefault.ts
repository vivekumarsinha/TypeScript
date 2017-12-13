/// <reference path="fourslash.ts" />

// @Filename: /a/b/impl.ts
////export default function foo() {}

// @Filename: /a/index.ts
////export { default as foo } from "./b/impl";

// @Filename: /use.ts
////fo/**/

goTo.marker("");
verify.completionListContains({ name: "foo", source: "/a/b/impl" }, "function foo(): void", "", "function", /*spanIndex*/ undefined, /*hasAction*/ true, {
    includeExternalModuleExports: true,
    sourceDisplay: "./a",
});
verify.applyCodeActionFromCompletion("", {
    name: "foo",
    source: "/a/b/impl",
    description: `Import 'foo' from module "./a"`,
    // TODO: GH#18445
    newFileContent: `import { foo } from "./a";\r
\r
fo`,
});
