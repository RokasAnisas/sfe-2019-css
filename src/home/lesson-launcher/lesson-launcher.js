const lessonLauncher = () => {
    window.onhashchange = function () {
        setActiveLesson()
    }

    const setActiveLesson = () => {
        const currentLesson = location.hash.replace('#/lesson-', "")
        const allLessonViews = document.getElementsByClassName('lesson-launcher__content')
        const activeLesson = document.getElementById(`lesson-view-${currentLesson}`)

        console.log(allLessonViews)


        for (var i = 0; i < allLessonViews.length; i++) {
            allLessonViews[i].classList.add('-closed')
        }

        if (activeLesson) {
            activeLesson.classList.remove('-closed')
        }
    }

    setActiveLesson()

}

lessonLauncher();