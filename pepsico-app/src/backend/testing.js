import { addBrandProduct } from './crud_functions';
import jsonData from './jsonfiles/new_file.json'

export function loadData() {
    console.log("hi");
    const arr = (JSON.parse(JSON.stringify(jsonData)));
    for (let i = 0; i<arr.length; i++){
        addBrandProduct(arr[i]);
    }
};

