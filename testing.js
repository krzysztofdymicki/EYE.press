const search = ['każdej', 'sdadadas']

const text = "Jak każdej konferencji online czasu pandemii, wystąpieniom towarzyszyły problemy techniczne, z których najzabawniejszym okazało się nagłe zniknięcie z wizji prezydenta Francji Emmanuela Macrona. Zamiast niego na ekranach pojawił się Władimir Putin – najwyraźniej nieświadomy, że ogląda go cały świat. Po kilku minutach wszystko wróciło do normy i mogliśmy usłyszeć, że również Rosja przejmuje się globalnym ociepleniem…"

let key = -1
const found = search.map( s => {
    const regexp = new RegExp(s,'g')
    const matches = [...text.matchAll(regexp)]
    if(matches.length > 0) {
        return matches.map(m => {
            const obj =  {
                offset: m.index,
                length: s.length,
                key: key + 1
            }
            key = key + 1
            return obj
        })
    }else null
}).filter(e => e && e.length > 0).flat()

console.log(found)

let entityMap = {}

Object.defineProperty(entityMap, '0', {
    value: {
        cwel: 1
    },
    enumerable: true
} )

console.log(entityMap)

console.log(entityMap['0'])

Object.defineProperty(entityMap, '2', {
    value: {
        cipa: 1
    }
})

console.log(entityMap['2'])

//console.log(emptyArray.concat(match))
