import "isomorphic-fetch"


let scoreRecords;
let companies;

const CSVToArray = (data, delimiter = ',', omitFirstRow = true) => {

  const table = {}
    
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\r\n')
    .forEach(el => {
        let temp  = el.split(delimiter)
        if (temp[0] === 'candidate_id') return;
        if( !table[temp[0]]) table[temp[0]] = temp.slice(1)
    });
  return table
}

const downloadRecordsCSV = async () => {
    try {
        const target = `https://s3.amazonaws.com/simple-fractal-recruiting/score-records.csv`; //file
        //target can also be api with req.query
        
        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
                //'Authorization': //in case you need authorisation
            }
        });

        if (res.status === 200) {

            const data = await res.text();
            scoreRecords = CSVToArray(data)
            console.log(scoreRecords)


        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}

const downloadCompaniesCSV = async () => {
    try {
        const target = `https://s3.amazonaws.com/simple-fractal-recruiting/companies.csv`; //file
        //target can also be api with req.query
        
        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
                //'Authorization': //in case you need authorisation
            }
        });

        if (res.status === 200) {

            const data = await res.text();
            companies = CSVToArray(data)
            console.log(companies)

        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}

downloadRecordsCSV()
downloadCompaniesCSV()



