"use strict";

var gulp = require("gulp"),
    less = require("gulp-less"),
    plumber = require("gulp-plumber"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    server = require("browser-sync").create(),
    minify = require("gulp-csso"),
    imagemin = require("gulp-imagemin"),
    posthtml = require("gulp-posthtml"),
    include = require("posthtml-include"),
    rename = require("gulp-rename"),
    svgstore = require("gulp-svgstore"),
    del = require("del"),
    run = require("run-sequence"),
    htmlmin = require("gulp-htmlmin"),
    jsmin = require("gulp-uglify");

gulp.task("clean", function () {
    return del([
        './index.html',
        './css',
        './js',
        './img'
    ]);
});

gulp.task("copy", function () {
    return gulp.src([
        "source/img/**",
        "source/js/**"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("./"));
});

gulp.task("style", function () {
    gulp.src("source/less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("./css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("./css"))
        .pipe(server.stream());
});

gulp.task("images", function () {
    return gulp.src("source/img/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("./img"));
});

gulp.task("html", function () {
    return gulp.src("source/*.html")
        .pipe(posthtml([
            include()
        ]))
        .pipe(htmlmin())
        .pipe(gulp.dest("./"));
});


gulp.task("jsminify", function () {
    return gulp.src("source/js/**/*.{js}")
        .pipe(jsmin())
        .pipe(gulp.dest("./js"));
});


gulp.task("build", function (done) {
    run(
        "clean",
        "copy",
        "style",
        "html",
        done
    );
});


gulp.task("serve", function () {
    server.init({
        server: "./"
    });

    gulp.watch("source/less/**/*.less", ["style"]);
    gulp.watch("source/*.html", ["html"]).on("change", server.reload);
});