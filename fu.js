import {fu} from "./module/sheets/config.js";
import FUItemSheet from "./module/sheets/FUItemSheet.js";


Hooks.once("init", function() {
   
    console.log("FU | Initialising Fabula Ultima System");

    CONFIG.fu= fu;

    Items.unregisterSheet("core", ItemSheet );
    Items.registerSheet("fu", FUItemSheet, {makeDefault: true});
});