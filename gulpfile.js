var favicons = require("favicons").stream,
    log = require("fancy-log");
var gulp = require("gulp");
var config = require("./config");

gulp.task("default", function () {
    return gulp.src("icon.svg").pipe(favicons({ ...config,
        pipeHTML: true,
        replace: true
    }))
    .on("error", log)
    .pipe(gulp.dest("./out"));
});
