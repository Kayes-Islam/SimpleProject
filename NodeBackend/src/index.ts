import { writeFileSync } from 'fs';

function saveData(){
    let data = {name: 'person 1'};
    writeFileSync('c:/temp.json', JSON.stringify(data));
};

saveData();
