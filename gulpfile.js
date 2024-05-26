const Gulp = require("gulp"); //guardando o gulp na variavel
const Sass = require("gulp-sass")(require("sass"));  //guardando o sass na variavel
const imagemin = require("gulp-imagemin");


function styles() {
    return Gulp.src("./src/styles/*.scss")  //busca pelo arquivo 
    .pipe(Sass({ outputStyle: "compressed" }))  //chama o sass e comprime o arquivo
    .pipe(Gulp.dest("./dist/css")); //envia o arquivo comprimido para a pasta de destino
}

function images () {
    return Gulp.src("./src/images/**/*")  
    .pipe(imagemin())
    .pipe(Gulp.dest("./dist/images")); 
}

exports.default = Gulp.parallel(styles, images);

exports.watch = function(){
    Gulp.watch("./src/styles/*.scss", Gulp.parallel(styles))
}