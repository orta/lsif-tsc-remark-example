import {Writer} from "lsif-tsc/lib/utils/writer"
import { EOL } from "os";

const __eol = EOL;

export class MemoryWriter implements Writer {
  jsonString: string
  
  public constructor() {
    this.jsonString = ""
	}

	write(...data: string[]): void {
		for (let chunk of data) {
			this.jsonString = this.jsonString.concat(chunk);
		}
	}

	writeEOL(): void {
    this.jsonString = this.jsonString.concat(__eol);
	}

	writeln(...data: string[]): void {
    for (let chunk of data) {
			this.jsonString = this.jsonString.concat(chunk);
    }
    this.jsonString = this.jsonString.concat(__eol);
	}
}
