import {writeFileSync} from 'fs'

function saveData(){
    let data = {name: 'person 1'};
    writeFileSync('c:/temp/temp.json', JSON.stringify(data), { flag: "w+"});
    console.log("done");
};

saveData();
