#!/usr/bin/env node
import {program} from "commander";
import init from '../lib/init.js';
import start from '../lib/start.js'

program.command("init <name>").description("init project").action(init);
program.command("start <name>").description("run project").action(start);


program.parse(process.argv);