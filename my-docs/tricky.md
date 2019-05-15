# Tricky stuff

`let x = "1" + 2 + 3 // 123`  
`let x = 1 + 2 + "3" // 33`  
`let x = [1,2,3]; x[7] = 8; delete x[7]; x.length // 7`  
`let x = [1,2,3]; x.foo = 4; x.length // 3`