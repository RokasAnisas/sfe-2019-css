const lessonLauncher = () => {
    const buttonLauchers = document.getElementsByClassName('launcher-button__launcher')

    for (var i = 0; i < buttonLauchers.length; i++) {
        buttonLauchers[i].addEventListener('click', (e) => {
            const selectedLesson = e.currentTarget.dataset.launcher
            const lessonView = document.getElementById(`lesson-view-${selectedLesson}`)

        })
    }

    window.onhashchange = function () {
        setActiveLesson()
    }

    const setActiveLesson = () => {
        const currentLesson = location.hash.replace('#/lesson-', "")
        const allLessonViews = document.getElementsByClassName('lesson-launcher__content')
        const activeLesson = document.getElementById(`lesson-view-${currentLesson}`)

        for (var i = 0; i < allLessonViews.length; i++) {
            allLessonViews[i].classList.add('-closed')
        }
        if (activeLesson) {
            activeLesson.classList.remove('-closed')
        }
        console.log(currentLesson)
    }

    setActiveLesson()

}

lessonLauncher();