const isValidPassword = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('abcdf'))
console.log(isValidPassword('abcdf@#$asdf@#$'))
console.log(isValidPassword('abcdfpassword'))