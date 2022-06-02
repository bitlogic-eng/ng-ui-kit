import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'bit-import-file-error-dialog',
    templateUrl: 'import-file-error-dialog.component.html',
  })
  export class ImportFileErrorDialogComponent {
    
    private _data: any;
    
    constructor(@Inject(MAT_DIALOG_DATA) public data: []) {
      this._data = data;
    }
   
    private convertToCSV() {
        let csvData = '';

        if (this._data.length > 0) {
            csvData = Object.keys(this._data[0]).join(',') + '\n';

            for(let item of this._data) {
                csvData += Object.values(item).join(',') + '\n';
            }
    
        }
        
      return csvData;
    }
  
    onDownloadFile() {
  
      const csvData = this.convertToCSV();
  
      let blob = new Blob(['\ufeff' + csvData], {
          type: 'text/csv;charset=utf-8;'
      });
        let link = document.createElement("a");
        let url = URL.createObjectURL(blob);
        const fileName = 'analysis-errors';
        link.setAttribute("href", url);
        link.setAttribute("download", fileName + ".csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);      
      
    }
  
  }