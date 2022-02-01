module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/assets/scss/resources/_breakpoints.scss";
                    @import "@/assets/scss/resources/_mixins.scss";
                `
            }
        }
    }
}
