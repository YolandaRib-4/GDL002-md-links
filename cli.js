#!/usr/bin/env node

let command = null;

try {
    command = require(`${process.cwd()}/node_modules/mdlinks`);
} catch (e) {
    command = require("mdlinks");
}