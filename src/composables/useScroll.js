const scrollToElement = function (elementId) {
    // Scroll to element
    document.getElementById(elementId).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
}

// const scrollToElement = function (parentId, elementId) {
//     // Get parent
//     let parent = querySelector('#' + parentId)
//
//     // Scroll to element
//     parent.querySelector('#' + elementId).scrollIntoView({ behavior: "smooth", block: "end" })
// }

export {
    scrollToElement
}
