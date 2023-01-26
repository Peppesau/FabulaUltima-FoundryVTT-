export default class FUItemSheet extends ItemSheet {
    get template(){       
        return `systems/fu/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData() {
        const baseData = super.getData();
        //console.log(baseData.item.data.data);

        let sheetData = {
            owner: this.item.isOwner,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.system,
            config: CONFIG.fu
        }


        return sheetData;
    }
}