const moment = require('moment')

let logFiles = [
    {
        name: 'selfie.jpg',
        city: 'Malang',
        date: 20100101341509
    },
    {
        name: 'abdul.png',
        city: 'Surabaya',
        date: 20090101140815
    },
    {
        name: 'Temanteman.png',
        city: 'Malang',
        date: 20130905071413
    },
    {
        name: 'Eiffel.jpg',
        city: 'Balikpapan',
        date: 20150723030802
    },
    {
        name: 'pisatower.jpg',
        city: 'Balikpapan',
        date: 20150722235959
    },
    {
        name: 'arif.ipg',
        city: 'Surabaya',
        date: 20150805030200
    },
    {
        name: 'bismalam.png',
        city: 'Balikpapan',
        date: 20150911120000
    },
    {
        name: 'batu.jpg',
        city: 'Malang',
        date: 20130906154022
    },
    {
        name: 'a.png',
        city: 'Malang',
        date: 20160513133300
    },
    {
        name: 'b.jpg',
        city: 'Malang',
        date: 20160102151222
    },
    {
        name: 'c.jpg',
        city: 'Malang',
        date: 20160102143430
    },
    {
        name: 'd.jpg',
        city: 'Malang',
        date: 20160102151501
    },
    {
        name: 'e.png',
        city: 'Malang',
        date: 20160102094909
    },
    {
        name: 'f.png',
        city: 'Malang',
        date: 20160102100533
    },
    {
        name: 'g.jpg',
        city: 'Malang',
        date: 20160229221311
    },
]

const resultArray = (logFiles) => {
    return logFiles.sort((a,b) => {
        let returnVal = moment(a.date) - moment(b.date)
        if (returnVal === 0) {
            let aname = a.name.toUpperCase()
            let bname = b.name.toUpperCase()
            returnVal = aname.localeCompare(bname)
        }
        
        return returnVal
    })
}

console.log(resultArray(logFiles))