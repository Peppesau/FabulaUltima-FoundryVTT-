export default class FUItemSheet extends ItemSheet {
    get template(){       
        return `systems/FU/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    async getData(options) {
        data = await super.getData(options);
        
        //data.data = this.document.data;       
        data.config = CONFIG.fu;
        return data;
    }
}