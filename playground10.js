// scope

let nama = 'john';

function greet(){
    // nama += 'doe'
    nama = nama + ' doe'
    return nama
}
console.log(nama)
greet()
console.log(nama)

// 

let name = 'john';

function greet(nameNakUbah){
    // nam += 'doe'
    nameNakUbah = nameNakUbah + ' doe'
    return nameNakUbah
    console.log('text')
}
console.log(nameNakUbah)
nama = greet(nama)
console.log(nameNakUbah)