## Example repo of using recast and ts-lsif

We can standardise hover highlights, and static site tooling by mixing the LSP standard static format
called [LSIF](https://github.com/microsoft/lsif-node) when parsing TS code blocks in markdown.

You can test it out by cloning and running:

```sh
yarn install
node --inspect-brk ./node_modules/.bin/ts-node   index.ts -p tsconfig.json
```

This takes the following markdown:

```markdown
Some TS

\`\`\`ts
---
lsif: true
---
const myString = "";
if (myString) {
  console.log("OK");
}
\`\`\`

Some other typescript

\`\`\`typescript
console.log("Yep")
\`\`\`
```

and converts it to HTML

```html
<p>Some TS</p>
<div class="code-extra"><script>[
        {"id":1,"type":"vertex","label":"metaData","version":"0.4.3","projectRoot":"file:///Users/orta/dev/typescript/remark-lsif/remark-tsc-lsif","positionEncoding":"utf-16"},
        {"id":2,"type":"vertex","label":"project","kind":"typescript"},
        {"id":3,"type":"vertex","label":"$event","kind":"begin","scope":"project","data":2},
        {"id":4,"type":"vertex","label":"document","uri":"file:///Users/orta/dev/typescript/remark-lsif/remark-tsc-lsif/node_modules/typescript/lib/lib.es6.d.ts","languageId":"typescript","contents":"Y29uc3QgbXlTdHJpbmcgPSAiIjsKaWYgKG15U3RyaW5nKSB7CiAgY29uc29sZS5sb2coIk9LIik7Cn0="},
        {"id":5,"type":"vertex","label":"$event","kind":"begin","scope":"document","data":4},
        {"id":6,"type":"vertex","label":"resultSet"},
        {"id":7,"type":"vertex","label":"moniker","kind":"export","scheme":"tsc","identifier":"node_modules/typescript/lib/lib.es6:myString"},
        {"id":8,"type":"edge","label":"moniker","outV":6,"inV":7},
        {"id":9,"type":"vertex","label":"range","start":{"line":0,"character":6},"end":{"line":0,"character":14},"tag":{"type":"definition","text":"myString","kind":7,"fullRange":{"start":{"line":0,"character":6},"end":{"line":0,"character":19}}}},
        {"id":10,"type":"edge","label":"next","outV":9,"inV":6},
        {"id":11,"type":"vertex","label":"hoverResult","result":{"contents":[{"language":"typescript","value":"const myString: \"\""}]}},
        {"id":12,"type":"edge","label":"textDocument/hover","outV":6,"inV":11},
        {"id":13,"type":"vertex","label":"range","start":{"line":1,"character":4},"end":{"line":1,"character":12},"tag":{"type":"reference","text":"myString"}},
        {"id":14,"type":"edge","label":"next","outV":13,"inV":6},
        {"id":15,"type":"vertex","label":"definitionResult"},
        {"id":16,"type":"edge","label":"textDocument/definition","outV":6,"inV":15},
        {"id":17,"type":"edge","label":"item","outV":15,"inVs":[9],"document":4},
        {"id":18,"type":"vertex","label":"referenceResult"},
        {"id":19,"type":"edge","label":"textDocument/references","outV":6,"inV":18},
        {"id":20,"type":"edge","label":"item","outV":18,"inVs":[9],"document":4,"property":"definitions"},
        {"id":21,"type":"edge","label":"item","outV":18,"inVs":[13],"document":4,"property":"references"},
        {"id":22,"type":"edge","label":"contains","outV":4,"inVs":[9,13]},
        {"id":23,"type":"vertex","label":"diagnosticResult","result":[{"severity":1,"code":1046,"message":"Top-level declarations in .d.ts files must start with either a 'declare' or 'export' modifier.","range":{"start":{"line":0,"character":0},"end":{"line":0,"character":5}}},{"severity":1,"code":2451,"message":"Cannot redeclare block-scoped variable 'myString'.","range":{"start":{"line":0,"character":6},"end":{"line":0,"character":14}}},{"severity":1,"code":1036,"message":"Statements are not allowed in ambient contexts.","range":{"start":{"line":1,"character":0},"end":{"line":1,"character":2}}},{"severity":1,"code":1036,"message":"Statements are not allowed in ambient contexts.","range":{"start":{"line":2,"character":2},"end":{"line":2,"character":9}}},{"severity":1,"code":2584,"message":"Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'.","range":{"start":{"line":2,"character":2},"end":{"line":2,"character":9}}}]},
        {"id":24,"type":"edge","label":"textDocument/diagnostic","outV":4,"inV":23},
        {"id":25,"type":"vertex","label":"foldingRangeResult","result":[{"startLine":1,"startCharacter":13,"endLine":3,"endCharacter":1}]},
        {"id":26,"type":"edge","label":"textDocument/foldingRange","outV":4,"inV":25},
        {"id":27,"type":"vertex","label":"$event","kind":"end","scope":"document","data":4},
        {"id":28,"type":"vertex","label":"document","uri":"file:///index.ts","languageId":"typescript","contents":"Y29uc3QgbXlTdHJpbmcgPSAiIjsKaWYgKG15U3RyaW5nKSB7CiAgY29uc29sZS5sb2coIk9LIik7Cn0="},
        {"id":29,"type":"vertex","label":"$event","kind":"begin","scope":"document","data":28},
        {"id":30,"type":"vertex","label":"resultSet"},
        {"id":31,"type":"vertex","label":"moniker","kind":"local","scheme":"tsc","identifier":"Kcg5UcoN1RW7wOPW3D3sjw=="},
        {"id":32,"type":"edge","label":"moniker","outV":30,"inV":31},
        {"id":33,"type":"vertex","label":"range","start":{"line":0,"character":6},"end":{"line":0,"character":14},"tag":{"type":"definition","text":"myString","kind":7,"fullRange":{"start":{"line":0,"character":6},"end":{"line":0,"character":19}}}},
        {"id":34,"type":"edge","label":"next","outV":33,"inV":30},
        {"id":35,"type":"vertex","label":"hoverResult","result":{"contents":[{"language":"typescript","value":"const myString: \"\""}]}},
        {"id":36,"type":"edge","label":"textDocument/hover","outV":30,"inV":35},
        {"id":37,"type":"vertex","label":"range","start":{"line":1,"character":4},"end":{"line":1,"character":12},"tag":{"type":"reference","text":"myString"}},
        {"id":38,"type":"edge","label":"next","outV":37,"inV":6},
        {"id":39,"type":"vertex","label":"definitionResult"},
        {"id":40,"type":"edge","label":"textDocument/definition","outV":30,"inV":39},
        {"id":41,"type":"edge","label":"item","outV":39,"inVs":[33],"document":28},
        {"id":42,"type":"vertex","label":"referenceResult"},
        {"id":43,"type":"edge","label":"textDocument/references","outV":30,"inV":42},
        {"id":44,"type":"edge","label":"item","outV":42,"inVs":[33],"document":28,"property":"definitions"},
        {"id":45,"type":"edge","label":"item","outV":18,"inVs":[37],"document":28,"property":"references"},
        {"id":46,"type":"edge","label":"contains","outV":28,"inVs":[33,37]},
        {"id":47,"type":"vertex","label":"diagnosticResult","result":[{"severity":1,"code":2451,"message":"Cannot redeclare block-scoped variable 'myString'.","range":{"start":{"line":0,"character":6},"end":{"line":0,"character":14}}},{"severity":1,"code":2584,"message":"Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'.","range":{"start":{"line":2,"character":2},"end":{"line":2,"character":9}}}]},
        {"id":48,"type":"edge","label":"textDocument/diagnostic","outV":28,"inV":47},
        {"id":49,"type":"vertex","label":"foldingRangeResult","result":[{"startLine":1,"startCharacter":13,"endLine":3,"endCharacter":1}]},
        {"id":50,"type":"edge","label":"textDocument/foldingRange","outV":28,"inV":49},
        {"id":51,"type":"vertex","label":"$event","kind":"end","scope":"document","data":28},
        {"id":52,"type":"edge","label":"contains","outV":2,"inVs":[4,28]},
        {"id":53,"type":"vertex","label":"$event","kind":"end","scope":"project","data":2}
]
</script><pre><code class="hljs language-ts"><span class="hljs-keyword">const</span> myString = <span class="hljs-string">""</span>;
<span class="hljs-keyword">if</span> (myString) {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"OK"</span>);
}</code></pre></div>
<p>Some other typescript</p>
<div class="code-extra"><script>[
        {"id":1,"type":"vertex","label":"metaData","version":"0.4.3","projectRoot":"file:///Users/orta/dev/typescript/remark-lsif/remark-tsc-lsif","positionEncoding":"utf-16"},
        {"id":2,"type":"vertex","label":"project","kind":"typescript"},
        {"id":3,"type":"vertex","label":"$event","kind":"begin","scope":"project","data":2},
        {"id":4,"type":"vertex","label":"document","uri":"file:///Users/orta/dev/typescript/remark-lsif/remark-tsc-lsif/node_modules/typescript/lib/lib.es6.d.ts","languageId":"typescript","contents":"Y29uc29sZS5sb2coIlllcCIp"},
        {"id":5,"type":"vertex","label":"$event","kind":"begin","scope":"document","data":4},
        {"id":6,"type":"edge","label":"contains","outV":4,"inVs":[]},
        {"id":7,"type":"vertex","label":"diagnosticResult","result":[{"severity":1,"code":1036,"message":"Statements are not allowed in ambient contexts.","range":{"start":{"line":0,"character":0},"end":{"line":0,"character":7}}},{"severity":1,"code":2584,"message":"Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'.","range":{"start":{"line":0,"character":0},"end":{"line":0,"character":7}}}]},
        {"id":8,"type":"edge","label":"textDocument/diagnostic","outV":4,"inV":7},
        {"id":9,"type":"vertex","label":"$event","kind":"end","scope":"document","data":4},
        {"id":10,"type":"vertex","label":"document","uri":"file:///index.ts","languageId":"typescript","contents":"Y29uc29sZS5sb2coIlllcCIp"},
        {"id":11,"type":"vertex","label":"$event","kind":"begin","scope":"document","data":10},
        {"id":12,"type":"edge","label":"contains","outV":10,"inVs":[]},
        {"id":13,"type":"vertex","label":"diagnosticResult","result":[{"severity":1,"code":2584,"message":"Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'.","range":{"start":{"line":0,"character":0},"end":{"line":0,"character":7}}}]},
        {"id":14,"type":"edge","label":"textDocument/diagnostic","outV":10,"inV":13},
        {"id":15,"type":"vertex","label":"$event","kind":"end","scope":"document","data":10},
        {"id":16,"type":"edge","label":"contains","outV":2,"inVs":[4,10]},
        {"id":17,"type":"vertex","label":"$event","kind":"end","scope":"project","data":2}
</script><pre><code class="hljs language-typescript"><span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Yep"</span>)</code></pre></div>
```

There's some errors in the results, but it's really just a matter of finessing some of the settings etc now.
