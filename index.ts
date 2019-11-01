import vfile from "to-vfile";
import report from "vfile-reporter";
import unified from "unified";
import markdown from "remark-parse";
import html from "remark-html";
import highlight from "remark-highlight.js";
import codeExtra from "remark-code-extra";
import codeFrontmatter from "remark-code-frontmatter";
import { Node } from "unist";
import ts from "typescript";
import { TypingsInstaller } from "lsif-tsc/lib/typings";
import {createEmitter, createIdGenerator, processProject} from "./ts-lsif"
import {MemoryWriter} from "./MemWriter"

unified()
  .use(markdown)
  .use(codeFrontmatter)
  .use(highlight)

  .use(codeExtra, {
    transform: async (node: Node) =>  {
      if (!node.frontmatter && !(node.frontmatter as any).lsif) return null;
      
      const code = node.value
      const config: ts.ParsedCommandLine = ts.parseCommandLine(["--target", "ES6"]);
      const idGenerator = createIdGenerator({} as any);
      let writer = new MemoryWriter()

      // @ts-ignore
      config.code = code
      const emitter = createEmitter({ json: true } as any, writer, idGenerator);

      emitter.start();
      await processProject(config, {} as any, emitter, idGenerator, new TypingsInstaller());
      emitter.end();

      return {
        before: [
          {
            type: "element",
            tagName: "script",
            children: [{
              type: 'text',
              value: writer.jsonString
            }]
  
          }
        ]
      };
    }
  })
  .use(html)
  .process(vfile.readSync("example.md"), (err, file) => {
    console.error(report(err || file));
    console.log(String(file));
  });
