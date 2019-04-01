# Population CSV uploader and CRUD

Population by age and sex CSV uploader

![](./demo_data/screenShot.png)

## Demo data 

Demo data from https://datos.gob.es

Location: /demo_data/poblacion-espanola.csv

### Uploader
http://localhost:3000

### Schema for CSV AND MODEL

    Edad:String,
    Hombre:Number
    Mujer:Number
    Total:Numbe

## CRUD API GETS

### SHOW ALL 
http://localhost:3000/api/population

### GET ONE
`http://localhost:3000/api/population/[ObjectId]`

http://localhost:3000/api/population/5ca22fcb080e9006a011da3c

### INSERT
`http://localhost:3000/api/population/add/[Edad]/[Hombre]/[Mujer]/[Total]`

http://localhost:3000/api/population/add/Viejo/10/10/20

### UPDATE
`http://localhost:3000/api/population/edit/[ObjectId]/[Edad]/[Hombre]/[Mujer]/[Total]`

http://localhost:3000/api/population/edit/5ca22f84488dbd0a20c9b57b/Viejo2/11/11/22

### DELETE
`http://localhost:3000/api/population/delete/[ObjectId]`

http://localhost:3000/api/population/delete/[5ca22f84488dbd0a20c9b57b]